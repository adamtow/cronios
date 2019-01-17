// Change this to the title of the notification you set
// in the Cronios Watcher Scriptable script.
const kTitle = "Tap to Relaunch Cronios";

let notifications = await Notification.allPending();
	
for ( n of notifications ) {
	// Only remove notifications with the correct title
	if ( n.title != null && n.title == kTitle ) {
		console.log( n.nextTriggerDate );
 		n.remove();		
	}
}
Script.complete();