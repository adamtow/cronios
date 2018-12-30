function Crontab() {}

/**
 * Take a list of entries and output a string suitable
 * for saving to disk.
 *
 * @param {entries} array - an array of dictionary cron entries.
 * 
 */
Crontab.prototype.save = function( entries ) {
	var file = '';
		
	for ( var i = 0; i < entries.length; i++ ) {
		if ( entries[i].description.length > 0 ) {
			if ( false == entries[i].active ) {
				file += `# ${entries[i].description}<br />#!# ${entries[i].expression} ${entries[i].shortcut}<br /><br />`;
			} else {
				file += `# ${entries[i].description}<br />${entries[i].expression} ${entries[i].shortcut}<br /><br />`;
			}
		} else {
			if ( false == entries[i].active ) {
				file += `#!# ${entries[i].expression} ${entries[i].shortcut}<br /><br />`;
			} else {
				file += `${entries[i].expression} ${entries[i].shortcut}<br /><br />`;
			}
		}
	}
	return file;
}

/**
 * Read the crontab and return an array of dictionary objects
 * containing cron schedule expression, shortcut to run, and
 * an optional description.
 * 
 */
Crontab.prototype.entries = function( file ) {
	var sections = file.split("\n\n");
	var entries = [];
	
	for ( var i = 0; i < sections.length; i++ ) {
		var description = [];
		var expression;
		var shortcut;
		
		var lines = sections[i].split("\n");
		
		for ( var j = 0; j < lines.length; j++ ) {
			if ( lines[j].length > 0 ) {
				
				// #!# Denotes a cron entry that is deactivated
				if ( lines[j].indexOf('#!#') == 0 ) {
					var entry = lines[j].substring(3).trim();
					var entryArr = entry.match(/(.*?) (.*?) (.*?) (.*?) (.*?) (.*?)$/i);
					
					if ( null != entryArr && entryArr.length == 7 ) {
						expression = entryArr.slice(1,6).join(' ');
						shortcut = entryArr[6];
						
						entries.push( {
								'active': 0,
								'expression': expression,
								'shortcut': shortcut,
								'description': description.join(' '),
								'index': i,
							}
						);
					}
				
				// # Denotes a description
				} else if ( lines[j].indexOf('#') == 0 ) {
					var line = lines[j].substr(1).trim();
					
					if ( line.length > 0 ) {
						description.push( line );
					}
				
				// Matching cron schedule follows the description, if any
				} else {
					var entry = lines[j];
					var entryArr = entry.match(/(.*?) (.*?) (.*?) (.*?) (.*?) (.*?)$/i);
					
					if ( null != entryArr && entryArr.length == 7 ) {
						expression = entryArr.slice(1,6).join(' ');
						shortcut = entryArr[6];
						
						entries.push( {
								'active': 1,
								'expression': expression,
								'shortcut': shortcut,
								'description': description.join(' '),
								'index': i,
							}
						);
					}		
				}	
			}
		}
	}
	return entries;
}
