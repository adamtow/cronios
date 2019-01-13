var priority_cmp = function (a, b) {
	if ( undefined == a.priority ) {
		priorityA = 50;
	} else {
		priorityA = a.priority;
	}
	if ( undefined == b.priority ) {
		priorityB = 50;
	} else {
		priorityB = b.priority;
	}
	
	if ( a.active == 1 ) a.active = true;
	if ( a.active == 0 ) a.active = false;
	
	if ( b.active == 1 ) b.active = true;
	if ( b.active == 0 ) b.active = false;
	
	if ( a.active && b.active  ) {
		if ( priorityA == priorityB ) {
			if ( a.description == b.description ) {
				return 0;
			} else {
				return a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1;
			}
		} else {
			if ( priorityA < 25 ) {
				if ( priorityB < 25 ) {
					return priorityA < priorityB ? -1 : 1;
				} else {
					return -1;
				}
			} else if ( priorityA < 50 ) {
				if ( priorityB < 50 ) {
					return priorityA < priorityB ? -1 : 1;
				} else {
					return -1;
				}
			} else if ( priorityA < 100 ) {
				if ( priorityB < 100 ) {
					return priorityA < priorityB ? -1 : 1;
				} else {
					return -1;
				}
			} else {
				return priorityA < priorityB ? -1 : 1;
			}
		}
	} else if ( a.active ) {
		return -1;
	} else if ( b.active ) {
		return 1;
	} else {
		if ( priorityA == priorityB ) {
			if ( a.description == b.description ) {
				return 0;
			} else {
				return a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1;
			}
		} else {
			if ( priorityA < 25 ) {
				if ( priorityB < 25 ) {
					return priorityA < priorityB ? -1 : 1;
				} else {
					return -1;
				}
			} else if ( priorityA < 50 ) {
				if ( priorityB < 50 ) {
					return priorityA < priorityB ? -1 : 1;
				} else {
					return -1;
				}
			} else if ( priorityA < 100 ) {
				if ( priorityB < 100 ) {
					return priorityA < priorityB ? -1 : 1;
				} else {
					return -1;
				}
			} else {
				return priorityA < priorityB ? -1 : 1;
			}
		}
	}
}

crontab.sort(priority_cmp);

// The calling Shortcut needs to define a boolean variable
// returnAsDictionary. If false, the sorted crobtab object will
// be returned as an array. Otherwise, it will be returned as
// a dictionary with sorted keys.

if ( returnAsDictionary ) {
	var crontab_dictionary = {};
	
	for ( var i = 0; i < crontab.length; i++ ) {
		crontab_dictionary[ crontab[i].ID ] = crontab[i];	}
	crontab = crontab_dictionary;
}

document.write( "{ \"crontab_sorted\": " + JSON.stringify(crontab) + "}" );
