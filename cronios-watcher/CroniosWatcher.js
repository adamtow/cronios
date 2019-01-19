/**
 * Cronios Watcher
 * ---------------
 * This script notifies you when Cronios has stopped running.
 * It assists with keeping Cronios running continously throughout the day.
 *
 * Initial installation is a multi-step process involving Scriptable and Shortcuts.
 *
 * -- In Scriptable -- 
 * 1) If desired, modify the kNotificationInterval constant according to how often you want to be notified.
 * 2) Run this script to create a Siri Suggestion in the Shortcuts app.
 *
 * -- In Cronios --
 * 1) Open Cronios.
 * 2) Tap Settings…
 * 3) Tap Notify When Cronios Stops Running.
 * 4) Tap Yes.
 *
 * Cronios Watcher is now ready. Each minute while Cronios is running, it will:
 * 
 * 1) Removes all pending Cronios Watcher notifications.
 * 2) Creates new Cronios Watcher notifications in the future, defined by the values
 * in kNotificationInterval array (values represent minutes from the current date).
 * 
 * If Cronios were to stop, the notifications in the future will be displayed.
 * Tapping the notification banner will cause the shortcut "Cronios Daemon" to
 * be launched from the Shortcuts app.
 *
 */

// Specify the number notifications and frequency of notifications (in minutes).
const kNotificationInterval = [
	2,
	5,
	10,
	15,
	30,
	60
];

// Cronios Daemon is the preferred shortcut to run since there are only
// four actions in Cronios Daemon compared to 3,300 in Cronios.
const kShortcutName = "Cronios Daemon";

const kCroniosName = "Cronios";

// Specify the title of the notification 
const kTitle = `Tap to Relaunch ${kCroniosName}`;
const kBody = `${kCroniosName} has not run since {{Date}}.`;
const kSound = "failure"; // default, accept, alert, complete, event, failure, piano_error, piano_success, popup

/**
 * @CroniosRestart
 */

/**
 * Delivers notifications when Cronios is down.
 * @constructor
 *
 */
function CroniosWatcher() {}

/**
 * Schedules notifications to relaunch Cronios according to the 
 * values (in minutes) defined in the kNotificationInterval array.
 * 
 */
CroniosWatcher.prototype.scheduleNotifications = async function() {
	let currDate = new Date();

	// First remove all pending notifications
	this.removePendingNotifications();
	
	// Escape the Shortcut Name
	let shortcutName = escape(kShortcutName);

	// Generate the notification date X minutes in the future.
	for ( var i = 0; i < kNotificationInterval.length; i++ ) {
		let notifyDate = new Date( currDate.getTime() + ( kNotificationInterval[i] * 60 * 1000 ) );

		// Create the notification
		let n = new Notification();

		n.title = kTitle;
		n.body = kBody.replace("{{Date}}", currDate);
		n.openURL = "shortcuts://run-shortcut?name=" + shortcutName;
		n.sound = kSound;
		n.setTriggerDate( notifyDate );
		n.schedule();
	}
	
	return true;
}

/**
 * Removes all pending Cronios Watcher notifications.
 *
 * @returns - true
 */
CroniosWatcher.prototype.removePendingNotifications = async function() {
	let notifications = await Notification.allPending();
	
	for ( n of notifications ) {
		// Only remove the Cronios Watcher notifications
		if ( n.title != null && n.title == kTitle ) {
			n.remove();
		}
	}
	return true;
}

let watcher = new CroniosWatcher();

watcher.scheduleNotifications();

Script.complete();
