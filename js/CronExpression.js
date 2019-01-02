/**
 * @CronExpression
 */

/**
 * Represents a cron expression
 * @constructor
 * @param {string} expression - the cron expression (i.e. "* * * * *")
 */
function CronExpression( expression ) {
	this.expression = expression;
	this.valid = true;
	this.err = false;
	this.debug = false;
	
	var elements = this.expression.split(" ");

	if (elements.length != 5) {
		
		this.error( 1000, elements.length );
		this.valid = false;
		
	} else {

		this.entry = {
		   'minutes': elements[0],
		   'hours': elements[1],
		   'dayOfMonth': elements[2],
		   'month': elements[3].replace('JAN', '1').replace('FEB', '2').replace('MAR', '3').replace('APR', '4').replace('MAY', '5').replace('JUN', '6').replace('JUL', '7').replace('AUG', '8').replace('SEP', '9').replace('OCT', '10').replace('NOV', '11').replace('DEC', '12'),
		   'dayOfWeek': elements[4].replace('SUN', '0').replace('MON', '1').replace('TUE', '2').replace('WED', '3').replace('THU', '4').replace('FRI', '5').replace('SAT', '6'),
			'type': 'mode'
		};

		var min = this.entry.minutes;
		var hour = this.entry.hours;
		var dayOfMonth = this.entry.dayOfMonth;
		var month = this.entry.month;
		var dayOfWeek = this.entry.dayOfWeek;
		
		var results = [];	

		// Minutes
		if ( ! this.validateItem( min, 'minutes' ) ) {
			this.valid = false;
		}

		// Hours
		if ( ! this.validateItem( hour, 'hours' ) ) {
			this.valid = false;
		}
				
		// Day of Month
		if ( ! this.validateItem( dayOfMonth, 'dayOfMonth' ) ) {
			this.valid = false;
		}

		// Month
		if ( ! this.validateItem( month, 'month' ) ) {
			this.valid = false;
		}

		// Day of Week
		if ( ! this.validateItem( dayOfWeek, 'dayOfWeek' ) ) {
			this.valid = false;
		}

			// Check the intersect or union mode on dayOfMonth and dayOfWeek
		
		if ( ( dayOfMonth[0] == "*" && dayOfWeek[0] != "*" ) || ( dayOfMonth[0] != "*" && dayOfWeek[0] == "*" ) ) {
			this.entry.mode = 'intersect';
		} else {
			this.entry.mode = 'union';	
		}
	}
}

// Constants
	
CronExpression.upperBounds = {
	'minutes': 59,
	'hours': 23,
	'dayOfMonth': 31,
	'month': 12,
	'dayOfWeek': 7
};

CronExpression.lowerBounds = {
	'minutes': 0,
	'hours': 0,
	'dayOfMonth': 1,
	'month': 1,
	'dayOfWeek': 0
}

CronExpression.months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
	
CronExpression.days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];

/**
 * Returns an error object
 * 
 * @param {number} errNum - the error number
 * @param {object} obj - the object that caused the error
 */
CronExpression.prototype.error = function( errNum, obj ) {
	var errMsg = '';

	switch ( errNum ) {
		case 1000:
			errMsg = 'Element size is incorrect: ';
			break;
		
		case 1001:
			errMsg = 'Minute range out of bounds: ';
			break;
			
		case 1002:
			errMsg = 'Range out of bounds: ';
			break;

		case 1003:
			errMsg = 'First item in range is higher than second: ';
			break;
		
		case 1004:
			errMsg = 'Step value does nothing.';
			break;
		
		default:
			errMsg = 'Could not parse cron.';
			break; 	
	}
	
	this.err = {
		'errNum': errNum,
		'errMsg': 'Check syntax. Could not parse cron expression\n\n' + errMsg + obj
	};	
	
	return false;
}

/**
 * Validates a cron expression item is within the correct range for the given type.
 *
 * @param {string} el - the cron expression singular element to test (i.e. "*", "10")
 * @param {string} type - the type of cron expression element to test (i.e. minutes, hours, dayOfMonth, month, dayOfWeek)
 * 
 * @returns - true or an error object
 */
CronExpression.prototype.validRange = function( el, type ) {
	
	if ( "*" == el ) {
		el = CronExpression.lowerBounds[type];
	} else {
		el = parseInt(el);
	}

	switch( type ) {
		case 'minutes':
			return ( el >= CronExpression.lowerBounds.minutes && el <= CronExpression.upperBounds.minutes );
			break;
		
		case 'hours':
			return ( el >= CronExpression.lowerBounds.hours && el <= CronExpression.upperBounds.hours );
			break;
		
		case 'dayOfMonth':
			return ( el >= CronExpression.lowerBounds.dayOfMonth && el <= CronExpression.upperBounds.dayOfMonth );
			break;
		
		case 'month':
			return ( el >= CronExpression.lowerBounds.month && el <= CronExpression.upperBounds.month );
			break;
		
		case 'dayOfWeek':
			return ( el >= CronExpression.lowerBounds.dayOfWeek && el <= CronExpression.upperBounds.dayOfWeek );
			break;
		
		default:
			return false;
			break;
	}
}


/**
 * Validate a single cron expression component. Returns true if the item is valid, an error object otherwise.
 *
 * @param {string} item - the cron expression element to test (i.e. "*", "0/2", "10-25", "1,2,3,10,15")
 * @param {string} type - the type of cron expression element to test (i.e. minutes, hours, dayOfMonth, month, dayOfWeek)
 * 
 * @returns - true or an error object
 */
CronExpression.prototype.validateItem = function( item, type ) {
	var elements = item.split(',');

	for ( var i = 0; i < elements.length; i++ ) {
		var hasStepValues = ( elements[i].indexOf('/') != -1 ) ? true : false;
		var stepValues = elements[i].split('/');
		var range = stepValues[0].split('-');

		if ( hasStepValues ) {
			var stepValue = parseInt( stepValues[1] );
			
			if ( stepValue <= 0 || stepValue > CronExpression.upperBounds[type] ) {
//			if ( stepValue <= 0 ) {
				return this.error( 1004, stepValue );
			}
		}

			// Check that range is from 1 to 2 elements
									
		if ( range.length > 2 ) {
			return CronExpression.error( 1001, minRange );

		} else if ( range.length == 1 ) {

				// Check each element is between 0 and 59 and the first is lower than the second

			if ( ! this.validRange( range[0], type ) ) {
				return this.error( 1002, range[0] );
			}

		} else {
			
			if ( ! this.validRange( range[0], type ) ) {
				return this.error( 1002, range[0] );
			}
					
			if ( ! this.validRange( range[1], type ) ) {
				return this.error( 1002, range[1] );
			}			
							
			if ( parseInt(range[0]) >= parseInt(range[1]) ) {
				return this.error( 1003, range[0] + '-' + range[1] );
			}
		}
	}

	return true;
}

/** 
 * Determines if the dayOfWeek uses step values.
 *
 */
CronExpression.hasStepValues = function( item ) {
	var elements = item.split(',');

	for ( i = 0; i < elements.length; i++ ) {
		if ( elements[i].indexOf('/') != -1 ) {
			return true;
		}
	}
	return false;
}

/* expandItem
 * **********
 * Expands a single cron expression component to include all possible values.
 * Includes a mode variable in the return object that determines
 * how dayOfMonth and dayOfWeek should interact (union or intersection).
 * 
 * @var item (string) - the expression component to expand (*, 1/2, 0-10)
 * @var type (string) - the type of expression we're expanding (minutes, hours, dayOfMonth, month, dayOfWeek)
 */
CronExpression.expandItem = function( item, type ) {

	var elements = item.split(',');

	var values = [];
	
	for ( i = 0; i < elements.length; i++ ) {
		var hasStepValues = ( elements[i].indexOf('/') != -1 ) ? true : false;
		var stepValues = elements[i].split('/');
		var range = stepValues[0].split('-');

		if ( ! hasStepValues ) {

				// Check that range is from 1 to 2 elements
								
			if ( range.length == 1 ) {
					
					// No range and no step values, just a single element
	
				if ( "*" == range[0] ) {
                    for ( var k = CronExpression.lowerBounds[type]; k <= CronExpression.upperBounds[type]; k++ ) {
                      values.push( parseInt( k ) );
                    }
					
				} else {
					values.push( parseInt( range[0] ) );
				}
				
			} else {

					// Handle a range with no step values

				for ( var j = parseInt( range[0] ); j <= range[1]; j++ ) {
					values.push( parseInt( j ) );
				}
			}
			
		} else {
		
				// Handle step values
	
			if ( range.length == 2 ) {
				var upperBound = range[1];
			} else {
				var upperBound = CronExpression.upperBounds[type];
			}
			
			stepValue = parseInt( stepValues[1] );

			if ( "*" == range[0] ) {
				if ( 'month' == type || 'dayOfMonth' == type ) {
					range[0] = 1;
				} else {
					range[0] = 0;	
				}
			}

			currentValue = parseInt( range[0] );

			values.push( currentValue );
				
			currentValue += stepValue;
				
			while ( currentValue <= upperBound ) {
				values.push( parseInt( currentValue ) );
				currentValue += stepValue;
			}
		}
	}
	
	return Array.from(new Set(values)).sort((a,b) => a - b).join(',');
}

CronExpression.prototype.expand = function() {
	if ( ! this.valid	 ) {
		return false;
	}
	
	return {
		'expression': this.expression,
		'minutes': CronExpression.expandItem( this.entry.minutes, 'minutes' ),
		'hours': CronExpression.expandItem( this.entry.hours, 'hours' ),
		'dayOfMonth': CronExpression.expandItem( this.entry.dayOfMonth, 'dayOfMonth' ),
		'month': CronExpression.expandItem( this.entry.month, 'month' ),
		'dayOfWeek': CronExpression.expandItem( this.entry.dayOfWeek, 'dayOfWeek' ),
		'hasDayOfWeekStepValues': CronExpression.hasStepValues( this.entry.dayOfWeek ),
		'mode': this.entry.mode,
		
			// Display values (not expanded )
			
		'minutes_display': this.entry.minutes,
		'hours_display': this.entry.hours,
		'dayOfMonth_display': this.entry.dayOfMonth,
		'month_display': this.entry.month,
		'dayOfWeek_display': this.entry.dayOfWeek
	}
}

/* match
 * ********
 * Given a date formatted in ISO-8061, return true if the
 * date matches the cron expression. False otherwise.
 * 
 */
CronExpression.prototype.match = function( date = undefined ) {
	if	( undefined == date ) {
		var d = new Date;
	} else {
		var d = new Date( date );
	}
	
	var dateObject = {
		"minutes": d.getMinutes(),
		"hours": d.getHours(),
		"dayOfMonth": d.getDate(),
		"month": d.getMonth() + 1, /// Date.getMonth starts at 0, while cron starts at 1
		"dayOfWeek": d.getDay()
	};

	if ( ! this.valid ) {
		return false;
	} else {
		
		var minutes = CronExpression.expandItem( this.entry.minutes, 'minutes' );
		var hours = CronExpression.expandItem( this.entry.hours, 'hours' );
		var dayOfMonth = CronExpression.expandItem( this.entry.dayOfMonth, 'dayOfMonth' );
		var month = CronExpression.expandItem( this.entry.month, 'month' );
		var dayOfWeek = CronExpression.expandItem( this.entry.dayOfWeek, 'dayOfWeek' );
		var hasDayOfWeekStepValues = CronExpression.hasStepValues( this.entry.dayOfWeek );
		var mode = this.entry.mode;
		 
		if ( this.debug ) {
			Log("---------------------------------------------");
			Log(`Date: ${d}`);
			Log("---------------------------------------------");
			Log(`Minutes: ${dateObject.minutes}`);
			Log(`Hours: ${dateObject.hours}`);
			Log(`Day of Month: ${dateObject.dayOfMonth}`);
			Log(`Month: ${dateObject.month}`);
			Log(`Day of Week: ${dateObject.dayOfWeek}`);
			
			Log("--------------------------");
			Log(`Cron Expression: ${this.expression}`);
			Log("--------------------------");
			Log(`Minutes: ${minutes}`);
			Log(`Hours: ${hours}`);
			Log(`Day of Month: ${dayOfMonth}`);
			Log(`Month: ${month}`);
			Log(`Day of Week: ${dayOfWeek}`);
			Log(`Mode: ${this.entry.mode}`);
			
			Log("----------------");
			Log("Begin Evaluation");
			Log("----------------");
		}
		
		// minutes
		if ( minutes.split(',').map(Number).indexOf(dateObject.minutes) == -1 ) {
			if ( this.debug ) {
				Log(`Minutes do not match: '${this.entry.minutes}' and '${dateObject.minutes}'` );
			}
			
		} else {
    
			if ( this.debug ) {
				Log(`Minutes match: '${this.entry.minutes}' and '${dateObject.minutes}'` );
			}
    
	      if ( hours.split(',').map(Number).indexOf(dateObject.hours) == -1 ) {
				if ( this.debug ) {
					Log(`Hours do not match: '${this.entry.hours}' and '${dateObject.hours}'` );
				}
				
			} else {
        
				if ( this.debug ) {
					Log('Hours match: ' + dateObject.hours );
				}
          
				if ( month.split(',').map(Number).indexOf(dateObject.month) == -1 ) {
					if ( this.debug ) {
						Log(`Month does not match: '${this.entry.month}' and '${dateObject.month}'` );
					}
					
				} else {
          
					if ( this.debug ) {
						Log('Month matches: ' + dateObject.month );
					}

					if ( 'union' == mode ) {
            
						if ( this.debug ) {
							Log('Mode == Union');
						}
						
						if ( dayOfMonth.split(',').map(Number).indexOf(dateObject.dayOfMonth) == -1 ) {
							if ( this.debug ) {
								Log(`Day of Month does not match, but will check Day of Week while in Union mode: '${this.entry.dayOfMonth}' and '${dateObject.dayOfMonth}'` );
							}
		
						} else {
							
							if ( this.debug ) {
								Log('Day of Month match (union): '+ dateObject.dayOfMonth);
								Log('----------------');
								Log('We have a match!');
								Log('----------------');
							}
              
							// We have a match in union mode
		              return true;
						}
              
						if ( dayOfWeek.split(',').map(Number).indexOf(dateObject.dayOfWeek) == -1 ) {
							if ( this.debug ) {
								Log(`Day of Week does not match: '${this.entry.dayOfWeek}' and '${dateObject.dayOfWeek}'` );
							}
							
						} else {
              
							if ( this.debug ) {
								Log('Day of Week match (union): ' + dateObject.dayOfMonth + ', ' + dateObject.dayOfWeek );
								Log('----------------');
								Log('We have a match!');
								Log('----------------');
							}
		              
							// We have a match in union mode
							return true;
						}
					} else if ( 'intersect' == mode ) {              

						if ( this.debug ) {
							Log('Mode == Intersection');
						}
              
						if ( ( dayOfMonth.split(',').map(Number).indexOf(dateObject.dayOfMonth) == -1 ) ) {
							
							if ( this.debug ) {
								Log(`Day of Month does not match: '${this.entry.dayOfMonth}' and '${dateObject.dayOfMonth}'` );
							}
							
						} else {

							if ( this.debug ) {
								Log( 'dayOfMonth match (intersection): ' + dateObject.dayOfMonth );
							}
							
							if ( dayOfWeek.split(',').map(Number).indexOf(dateObject.dayOfWeek) == -1 ) {

								if ( hasDayOfWeekStepValues ) {
									// Find out what day we are on.

									if ( this.debug ) {
										Log( 'dayOfWeek step value exception testing.' );
									}
									
										// Split the dayOfWeek into elements
									
									var dayOfWeekElements = this.entry.dayOfWeek.split(',');
									
									for( var i = 0; i < dayOfWeekElements.length; i++ ) {
										var dayOfWeekElement = dayOfWeekElements[i];
										
										// Skip over those elements without step values
										
										if ( dayOfWeekElement.indexOf('/') != -1 ) {
											
											var stepValues = dayOfWeekElement.split('/');
											
											if ( dayOfWeekElement.indexOf('-') != -1 ) {
												// Don't handle ranges
												
											} else {

												var startDay = parseInt( dayOfWeekElement[0] );
												var diff = d.getDate() -  dateObject.dayOfWeek + (  dateObject.dayOfWeek == 0 ? -6: startDay );
												var startDate = Date(d.setDate(diff));
												
												var additionalDays = [];
												var oneWeek = diff + ( 7 - startDay );
												
												// Calculate the week range
												for ( j = parseInt( diff ); j <= oneWeek && j <= 31; ) {
												    j = j + parseInt( stepValues[1] );
												
												    if ( j <= 31 && j <= oneWeek ) {
												        additionalDays.push( j );
												    }
												}
											
												if ( additionalDays.indexOf(dateObject.dayOfMonth) != -1 ) {
												    if ( this.debug ) {
												       Log(additionalDays);
												       Log( 'Step Value Exception match.' );
												    }
												    return true;
											   }
											}	
										} else {
											//Log('skipping over no step values');
										}
									}
								}
										
								if ( this.debug ) {
									Log(`Day of Week does not match: '${this.entry.dayOfWeek}' and '${dateObject.dayOfWeek}'` );
								}
								
							} else {

								if ( this.debug ) {
									Log('dayOfWeek match (intersection): ' + dateObject.dayOfWeek);
									Log('-----------------------------------');
									Log('Pass. Cron Expression matches date!');
									Log('-----------------------------------');
								}
                
								// We have a match in intersect mode
								return true;
							}
						}
					} else {
						if ( this.debug ) {
							Log('Unknown Mode: ' + mode);
						}
              }
				}
			}
		}
  
		if ( this.debug ) {				
			Log('--------------------------------------------');
			Log('Failed. Cron expression does not match date.');
			Log('--------------------------------------------');
		}
		
		return false;
	}
}			

/* explain
 * *******
 * Expresses the cron expression in human-readable terms.
 * 
 */
CronExpression.prototype.explain = function() {
	if ( ! this.valid ) {
		return false;
	}

	const expand = this.expand();	
	
	this.entry.mode = expand.mode;
	
	var explanation = {
		'minutes': this.explainItem( this.entry.minutes, 'minutes', 'minute' ),
		'hours': this.explainItem( this.entry.hours, 'hours', 'hour' ),
		'dayOfMonth': this.explainItem( this.entry.dayOfMonth, 'dayOfMonth', 'day-of-month' ),
		'month': this.explainItem( this.entry.month, 'month', 'month' ),
		'dayOfWeek': this.explainItem( this.entry.dayOfWeek, 'dayOfWeek', 'day-of-week' ),
	}
		
	if ( expand.mode == 'union' ) {
		if ( "*" == this.entry.hours ) {
			return `${explanation.minutes} ${explanation.dayOfMonth} and ${explanation.month} ${explanation.dayOfWeek}`;
		} else {
			return `${explanation.minutes} ${explanation.hours} ${explanation.dayOfMonth} and ${explanation.dayOfWeek} ${explanation.month}`;
		}
	} else {
		if ( "*" == this.entry.dayOfMonth ) {
			if ( "*" == this.entry.hours ) {
				return `${explanation.minutes} ${explanation.dayOfWeek} ${explanation.month}`;
			} else {
				return `${explanation.minutes} ${explanation.hours} ${explanation.dayOfWeek} ${explanation.month}`;
			}
		} else if ( "*" == this.entry.dayOfWeek ) {
			if ( "*" == this.entry.hours ) {
				return `${explanation.minutes} ${explanation.dayOfMonth} ${explanation.month}`;
			} else {
				return `${explanation.minutes} ${explanation.hours} ${explanation.dayOfMonth} ${explanation.month}`;
			}
		} else {
			return `Cannot explain`;	
		}
	}
}

/* explainItem
 * ************
 * Expresses what the 
 * 
 */
CronExpression.prototype.explainItem = function( item, type, typeLabel ) {
	if	( ! this.valid ) {
		return false;	
	}

	var explanation = [];
	var elements = item.split(',');

	for ( i=0; i < elements.length; i++ ) {
		var hasStepValues = ( elements[i].indexOf('/') != -1 ) ? true : false;
		var stepValues = elements[i].split('/');
		var range = stepValues[0].split('-');

		if ( hasStepValues ) {
			var stepValue = parseInt( stepValues[1] );
		}
	
		if ( hasStepValues ) {
			
			const ordinals = [
				'1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st','32nd','33rd','34th','35th','36th','37th','38th','39th','40th','41st','42nd','43rd','44th','45th','46th','47th','48th','49th','50th','51st','52nd','53rd','54th','55th','56th','57th','58th','59th','60th'
			];
			
			if ( stepValue < 60 ) {
				var stepValueLabel = ordinals[stepValue - 1];
			} else {
				var stepValueLabel = 'index ' + stepValue - 1;
			}
		}

		// No Range
		if ( range.length == 1 ) {

			if ( "*" == range[0] ) {
				// Step Values
				if ( hasStepValues && 1 != stepValue ) {
					switch ( type ) {
						case 'minutes':
							explanation.push( `every ${stepValueLabel} ${typeLabel}` );
							break;
						case 'hours':
							explanation.push( `past every ${typeLabel} from ${stepValue} through ${CronExpression.upperBounds[type]}` );
							break;
						case 'dayOfMonth':
							explanation.push( `on every ${stepValueLabel} from ${stepValue} through ${CronExpression.upperBounds[type]}` );
							break;
						case 'month':
							explanation.push( `in every ${stepValueLabel} from ${stepValue} through ${CronExpression.upperBounds[type]}` );
							break;
						case 'dayOfWeek':
							explanation.push( `on every ${stepValueLabel} from ${stepValue} through ${CronExpression.upperBounds[type]}` );
							break;
						default:
							break;
					}
				} else {
					switch ( type ) {
						case 'minutes':
							explanation.push( `every ${typeLabel}` );
							break;
						case 'hours':
							if ( elements.length == 1 ) {
								explanation.push( `of every ${typeLabel}` );
							} else {
								explanation.push( `every ${typeLabel}` );
							}
							break;
						case 'dayOfMonth':
							explanation.push( `on every ${typeLabel}` );
							break;
						case 'month':
							explanation.push( `in every ${typeLabel}` );
							break;
						case 'dayOfWeek':
							explanation.push( `on every ${typeLabel}` );
							break;
						default:
							break;
					}
				}
			} else {

				// Not * With Step Values
				if ( hasStepValues ) {
					switch ( type ) {
						case 'minutes':
							explanation.push( `every ${stepValueLabel} ${typeLabel} from ${range[0]} through ${CronExpression.upperBounds[type]}` );
							break;
						case 'hours':
							explanation.push( `past every ${stepValueLabel} ${typeLabel} from ${range[0]} through ${CronExpression.upperBounds[type]}` );
							break;
						case 'dayOfMonth':
							explanation.push( `every ${stepValueLabel} ${typeLabel} from ${range[0] - 1} through ${range[1] - 1}` );
							break;
						case 'month':
							explanation.push( `every ${stepValueLabel} ${typeLabel} from ${CronExpression.months[range[0] - 1]} through ${CronExpression.months[CronExpression.upperBounds[type] - 1]}` );
							break;
						case 'dayOfWeek':
							explanation.push( `on every ${stepValueLabel} ${typeLabel} from ${CronExpression.days[range[0]]} through ${CronExpression.days[CronExpression.upperBounds[type]]}` );
							break;
						default:
							break;
					}
					
				// Not * and No Step Values
				
				} else {
					switch ( type ) {
						case 'minutes':
							if ( "*" == this.entry.hours ) {
								explanation.push( `at ${typeLabel} ${range[0]}` );
							} else if ( -1 == this.entry.minutes.indexOf(',') && -1 == this.entry.hours.indexOf('-') && -1 == this.entry.hours.indexOf('/') ) { 
								explanation.push( `at` ); // fix?
							} else {
								explanation.push( `at ${typeLabel} ${range[0]}` );
							}
							break;
						case 'hours':
							if ( "*" != this.entry.minutes && -1 == this.entry.minutes.indexOf('-') && -1 == this.entry.minutes.indexOf(',') && -1 == this.entry.minutes.indexOf('/') ) {
								if ( this.entry.minutes < 10 ) {
									var minutesText = '0' + this.entry.minutes;
								} else {
									var minutesText = this.entry.minutes;
								}
								
								if ( range[0] < 10 ) {
									var hoursText = '0' + range[0];
								} else {
									var hoursText = range[0];
								}
								
								explanation.push( `${hoursText}:${minutesText}` );
								
							} else {
								if ( explanation.length > 0 ) {
									explanation.push( `${range[0]}` );
								} else {
									explanation.push( `past ${typeLabel} ${range[0]}` );
								}
							}
							break;
						case 'dayOfMonth':
							explanation.push( `on ${typeLabel} ${range[0] - 1}` );
							break;
						case 'month':
							// Month is 1-index based
							explanation.push( `in ${CronExpression.months[range[0] - 1]}` );
							break;
						case 'dayOfWeek':
							explanation.push( `on ${CronExpression.days[range[0]]}` );
							break;
						default:
							break;
					}
				}
			}
		} else {
			if ( 'month' == type ) {
				var r1 = CronExpression.months[range[0] - 1];
				var r2 = CronExpression.months[range[1] - 1];
				var itemType = type;
				
			} else if ( 'dayOfWeek' == type ) {
				var r1 = CronExpression.days[range[0] - 1];
				var r2 = CronExpression.days[range[1] - 1];
				var itemType = 'day-of-week';	
			} else {
				var r1 = range[0];
				var r2 = range[1];
				var itemType = typeLabel;
			}
			
			if ( hasStepValues ) {
				switch ( type ) {
					case 'minutes':
						explanation.push( `every ${stepValueLabel} ${typeLabel} from ${range[0]} through ${range[1]}` );
						break;
					case 'hours':
						explanation.push( `at every ${stepValueLabel} ${typeLabel} from ${range[0]} through ${range[1]}` );	
						break;
					case 'dayOfMonth':
						explanation.push( `on every ${stepValueLabel} ${typeLabel} from ${range[0] - 1} through ${range[1] - 1}` );
						break;
					case 'month':
						explanation.push( `on every ${stepValueLabel} ${typeLabel} from ${CronExpression.months[range[0] - 1]} through ${CronExpression.months[range[1] - 1]}` );
						break;
					case 'dayOfWeek':
						explanation.push( `from ${stepValueLabel} ${typeLabel} from ${CronExpression.days[range[0] - 1]} through ${CronExpression.days[range[1] - 1]}` );
						break;
					default:
						break;
				}
				
			} else {
				switch ( type ) {
					case 'minutes':
						explanation.push( `every ${itemType} from ${range[0]} through ${range[1]}` );
						break;
					case 'hours':
						explanation.push( `past every ${itemType} from ${range[0]} through ${range[1]}` );
						break;
					case 'dayOfMonth':
						explanation.push( `on every ${typeLabel} from ${range[0] - 1} through ${range[1] - 1}` );
						break;
					case 'month':
						explanation.push( `in ${CronExpression.months[range[0] - 1]} through ${CronExpression.months[range[1] - 1]}` );
						break;
					case 'dayOfWeek':
						explanation.push( `on ${CronExpression.days[range[0]]} through ${CronExpression.days[range[1]]}` );
						break;
					default:
						break;
				}
				
			}
		}
	}
	
	return explanation.join( ' and ' )
}

function Log( msg ) {
	document.write( msg );
}
