/**
 * Script to handle importing of cron jobs from a valid Cronios Crontab input file.
 * Requires input to be provided to this script.
 *
 */

// Input is required before calling this script.

// Generate a UUID
function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

if ( 0 != input.indexOf( '#!# Cronios Crontab' ) ) {
	
	result = 0;
	
} else {

	var   lines = input.split('\n');
	var importedCronJobs = {};
	var prevLine = '';
	
	for ( var index = 0; index < lines.length; index++ ) {
		var line = lines[index].trim();	
		var matches = line.trim().split(' ');
	
		// We are not a blank line
		if ( null != matches ) {
			
			// We have enough parts to possibly be a match
			if ( matches.length >= 6 ) {
			
				// We don't start with # OR we start with #!! which denotes a deactivated cron job
				if ( 0 != matches[0].indexOf( '#' ) || 0 == matches[0].indexOf( '#!!' ) ) {
				//console.log( matches[0].indexOf( '#' ) + " " + line );
				
				
				
					// Check if we're an commented out (i.e. deactivated) cron job
					if ( '#!!' == matches[0] ) {
						var expression = matches[1] + ' ' + matches[2] + ' ' + matches[3] + ' ' + matches[4] + ' ' + matches[5];
						var shortcut = matches.slice( 6 ).join(' ').trim();
					} else {
						var expression = matches[0] + ' ' + matches[1] + ' ' + matches[2] + ' ' + matches[3] + ' ' + matches[4];
						var shortcut = matches.slice( 5 ).join(' ').trim();
					}
					
					if ( '' != prevLine && 0 == prevLine.indexOf( '#' ) ) {
						description = prevLine.substr( prevLine.indexOf( '#' ) + 1 ).trim();
					} else {
						description = '';		
					}
					
					var requiresNetwork = 0;
					var requiresInteraction = 0;
					var fuzzyStar = 0;
					var notifyShortcut = 0;
				
					if ( -1 != shortcut.indexOf( '{{requiresNetwork}}' ) ) {
						shortcut = shortcut.replace( '{{requiresNetwork}}', '' ).trim();
						requiresNetwork = 1;
					}
					
					if ( -1 != shortcut.indexOf( '{{requiresInteraction}}' ) ) {
						shortcut = shortcut.replace( '{{requiresInteraction}}', '' ).trim();
						requiresInteraction = 1;
					}

					if ( -1 != shortcut.indexOf( '{{fuzzyStar}}' ) ) {
						shortcut = shortcut.replace( '{{fuzzyStar}}', '' ).trim();
						fuzzyStar = 1;
					}

					if ( -1 != shortcut.indexOf( '{{notifyShortcut}}' ) ) {
						shortcut = shortcut.replace( '{{notifyShortcut}}', '' ).trim();
						notifyShortcut = 1;
					}

															
					shortcut = shortcut.trim();
					
						// Validate the expression before allowing import
					
					var cron = new CronExpression( expression );
					var cronExpanded = cron.expand();
					var obj = {
									'expression': expression,
									'description': description,
									'shortcut': shortcut,
									'ID': uuidv4(),
									'active': ( '#!!' == matches[0] ) ? 0 : 1,
									'requiresNetwork':requiresNetwork,
									'requiresInteraction':requiresInteraction,
									'fuzzyStar': fuzzyStar,
									'notifyShortcut': notifyShortcut,
									'valid': cron.valid,
									'minutes': cronExpanded.minutes,
									'hours': cronExpanded.hours,
									'dayOfMonth': cronExpanded.dayOfMonth,
									'month': cronExpanded.month,
									'dayOfWeek': cronExpanded.dayOfWeek,
									'mode': cronExpanded.mode,
									'hasStepValues': cronExpanded.hasStepValues,
								};
					
					importedCronJobs[obj.ID] = obj;

				}
			}
		}
		prevLine = line;	
	}
	result = importedCronJobs;
}

document.write( JSON.stringify( result ) );
