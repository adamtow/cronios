# Cronios
**Run Your Shortcuts on an Automatic Schedule!**
Cronios is a full-featured shortcuts scheduler for iOS. Configure your shortcuts to run automatically in the background on the dates, times, ranges, and intervals you specify, without any interaction on your part!

> [**Download Cronios on RoutineHub &raquo;**](https://routinehub.co/shortcut/1267)

## What’s New in Version 1.4.0
- Support for Shortcuts 2.2. Refactored localization and variable names.

See the [full version history here](#version-history).

![Cronios, the shortcuts scheduler for iOS](https://atow.files.wordpress.com/2019/01/Cronios-Screenshot.png?w=1280)

*** 

## Table of Contents

- [From Manual to Automated Shortcuts](#overview)
- [System Requirements](#system-requirements)
- [Download Cronios](#download)
- [Getting Started](#getting-started)
- [Launching Cronios](#launching-cronios)
- [Keeping Cronios Active](#keeping-cronios-active)
- [Running Other Shortcuts Outside of Cronios](#running-other-shortcuts)
- [Exploring the Cronios Interface](#interface)
- [Editing Cron Jobs](#cron-jobs)
- [Understanding Cron Schedule Expressions](#expressions)
- [Fuzzy *️⃣](#fuzzy-star)
- [Settings](#settings)
- [Developing Shortcuts Optimized for Cronios](#developer)
- [Cronios Daemon Helper Shortcut](#cronios-daemon)
- [Localization](#localization)
- [Security](#security)
- [Known Issues](#known-issues)
- [Version History](#version-history)
- [License](#license)

<span id="overview" class="section-header"></span>
## From Manual to Automated Shortcuts
Shortcuts are a fantastic addition to iOS 12, allowing you a quick way to automate tasks with your apps. Unfortunately, the only way till now to run a shortcut was by performing a manual action:

- Tap on a shortcut in the Shortcuts app.
- Say a voice command to Siri.
- Choose a shortcut from the Share Sheet.
- Tap on a shortcut that was added to the iOS Home Screen.
- Tap on a link from a notification banner or in a third-party application. 

Cronios adds a third way to run shortcuts: on a schedule and automatically in the background. In doing so, Cronios opens up a whole new set of possibilities for automating your iOS device.

>Scheduled shortcuts should be a built-in feature of iOS. [Sherlock this idea now, Apple!](https://en.m.wikipedia.org/wiki/Sherlock_%28software%29)

Consider what is possible when your shortcuts can run with no intervention on your part other than activating Cronios (and making sure it remains active):

- Back up your shortcuts every three hours from 9 a.m. to 5 p.m. during the work week.
- [Automatically run shortcuts based on your current location](https://routinehub.co/shortcut/1732).
- Automatically run shortcuts when [triggered from an iCloud-connected device like an Apple Watch or Mac](https://routinehub.co/shortcut/1864).
- Turn on [Do Not Disturb mode based on events](https://routinehub.co/shortcut/1371) in your calendar.
- Deliver a customized notification when [your battery level reaches a certain threshold](https://routinehub.co/shortcut/1370).
- Collect information from the web while you are sleeping for review in the morning.
- Provide an audible alert every five minutes of interval training to push it hard for one minute.
- [Count how many steps you’ve taken over the past 30 minutes](https://routinehub.co/shortcut/1599) and alert you to keep moving if you haven’t passed the step minimum.
- Send emails on your behalf during the day.
- Take a photo at periodic times and email them to you.
- Display an hourly status report of the current time, online status, battery level, weather, upcoming events & reminders and step count.
- Ask you how you are feeling periodically throughout the day. Results are [recorded to a text document](https://routinehub.co/shortcut/1488) or uploaded automatically to a [spreadsheet in the cloud](https://routinehub.co/shortcut/1484).

![Cronios on the iPad](https://atow.files.wordpress.com/2019/01/Cronios-on-the-iPad.png?w=1280)

>**Cronios, a Marriage Beween Cron and iOS** - Cron is a [time-based scheduling tool](https://en.m.wikipedia.org/wiki/Cron) frequently found on Unix-like operating systems such as MacOS and Linux. It allows people to set up tasks which run at fixed times, date ranges and intervals. Cronios brings the scheduling power and flexibility of cron to iOS.

Excited about these possibilities? Get started automating iOS and Shortcuts with Cronios in three simple steps:

1. Set a schedule based on a fixed date, time, range, or interval
2. Assign a shortcut optimized for background operation[^1]. 
3. Run Cronios. 

As long as Cronios is active[^2], it will check every minute for any shortcut that needs running. If it finds a match, that shortcut will automatically run in the background!

> If your iOS device goes to sleep, you can configure your shortcuts with Fuzzy *️⃣ schedules to run within a set timeframe (i.e. once per hour at any time during the hour).

<small>[^1]: Some shortcuts work more effectively in the background than others. You may need to modify your favorite shortcuts to work with Cronios.</small>

<small>[^2]: Cronios tries its best to stay awake, but it is still subject to how iOS treats background operation of applications, most notably the Shortcuts app itself. Cronios 1.1 introduces a new method of notifying you within minutes of Cronios being stopped. Read the [section on tips to keep Cronios running as long as possible](#keeping-cronios-active) and using [Fuzzy *️⃣ schedules](#fuzzy-star) for more details.</small>

***

<span id="system-requirements" class="section-header"></span>
## System Requirements
Cronios has the following system requirements:

- iOS 12
- [Shortcuts 2.1.2](https://itunes.apple.com/us/app/shortcuts/id915249334?mt=8) or higher
- Scriptable (optional)
- iCloud account

**Scriptable**
Cronios can be optionally configured to notify you when it stops running. Enabling this feature requires the installation of [Scriptable](https://scriptable.app), a free app that lets you automate iOS using JavaScript.

**iCloud Drive**
Content, logs and preferences are stored separately in iCloud Drive for each device you own[^3], so you can use Cronios with multiple iPhones and iPads at the same time.

![Cronios features device-specific Crontabs and settings](https://atow.files.wordpress.com/2019/01/Cronios-features-device-specific-Crontabs-and-settings.png?w=1280)

<small>[^3]: Cronios uses the Device Name in Settings &raquo; General &raquo; About &raquo; Name to distinguish between devices. It is not recommended to run Cronios on devices that share the same name.</small>

The source code to Cronios is licensed under the [MIT License](#license).

***

<span id="download" class="section-header"></span>
## Download Cronios
The latest version of Cronios can be downloaded from RoutineHub:

<a href="https://routinehub.co/shortcut/1267" class="button button-primary">Download Cronios from RoutineHub.co</a>

You can check for updates by choosing **Check for Updates…** in Settings. 

>Note: Cronios' shortcut name must remain `Cronios` for it to function properly. 

***

<span id="getting-started" class="section-header"></span>
## Getting Started
Now that Cronios is installed, let’s create your first cron job (affectionately known as a `croncut` in Cronios parlance) by following these steps:

1. Tap **Cronios** from the Shortcuts Home screen.
2. Tap **New Cron Job**
3. The Cron Job Assistant will now appear to guide you in creating a new cron job.
5. In Step 1, you will choose a shortcut to run. For your first shortcut, you could try [**Speak Number**](https://routinehub.co/shortcut/1367), a simple shortcut that speaks a random number between 1-100.
6. In Step 2, you will enter the cron job's **Schedule**. This determines how often Cronios evaluates the cron job. You'll set how often the cron job actually run its shortcut in Step 3 of the Cron Job Assistant. For now, follow the on-screen directions to setting up your schedule. It's recommended that you use the Schedule Assistant unless you are comfortable entering cron expressions manually.
7. In Step 3, you'll configure the **Repeat Interval** of the cron job. This determines the minimum amount of time before the cron job's shortcut can configure the cron job to:
	- Run Once and Disable
	- Run After X Minutes
	- Run After X Hours
	- Run After X Calendar Days
	- Run Every Time
8. In Step 4, you can configure your cron job's options or use the default options.
9. In Step 5, you can set the priority of your cron job. Priority determines the order by which cron jobs are evaluated.
10. In Step 6, you'll name your cron job. Tapping OK will take you to the Cron Job Edit screen for you to review your newly created cron job.
11. Tap **Home**.
12. On the Cronios Home screen, tap **Run Continuously**.
13. Tap **Start**. 

![Creating your first scheduled shortcut](https://atow.files.wordpress.com/2019/01/Creating-your-first-scheduled-shortcut.png?w=1280)

Cronios will start up and wait until the next minute before processing your first cron job. If you chose the [Speak Random Number](https://routinehub.co/shortcut/1367) shortcut, you'll hear Siri's voice say a random number near the top of the minute, followed by a quick beep sound.

>The quick beep you hear at the end serves two purposes: (1) it signals that all cron jobs have been evaluates and/or run and (2) it helps keep Cronios running in the background. Read the [section on keeping Cronios alive for more details](#keep-alive). 

Wait another minute, and Siri will say another random number. During this time, you can switch to another application.

>If you are using Cronios on an iPad, put Shortcuts in Split View as you work in another application.

Congratulations! You've just created and run your first scheduled shortcut!

To stop Cronios, return to Shortcuts and tap the **Stop** button in the Cronios shortcut.

![Stop Cronios by tapping the stop button in the Shortcuts app](https://atow.files.wordpress.com/2018/12/008E2E2A-A4B2-4673-A8C7-ED187F672AAE.png?w=270)

***

<span id="launching-cronios" class="section-header"></span>
## Launching Cronios
You're going to be doing two primary things when launching Cronios:

1. Create and edit your cron jobs.
2. Start Cronios in “Run Continuously” mode to monitor your list of cron jobs every minute.

### 1. Launch Cronios to Create and Edit Cron Jobs
For the first task, **always run Cronios from the Shortcuts Home screen**.

You should not tap the **Play** button while in the Shortcut Edit screen because this will cause Shortcuts to visually run through the 3,000+ actions that make up Cronios. This takes time and consumes a lot of Shortcuts' resources. **Never do this**. 

>Unless you're a developer and want to see what's happening underneath the hood of Cronios.

![How to run and not run Cronios](https://atow.files.wordpress.com/2019/01/How-to-run-and-not-run-Cronios.png?w=1280)

### 2. Launching Cronios in “Run Continuously” Mode
If you want to start Cronios so that it checks your list of cron jobs every minute, you have four options:

1. Tap on **Cronios** from the Shortcuts Home screen. Tap on the **Run Continuously** menu item. Tap **Start**.
2. Install and tap on **Cronios Daemon** from the Shortcuts Home screen. 
3. Add to the iOS Home screen and tap on **Cronios Daemon**. 
4. Add a Siri phrase for **Cronios Daemon** and use your voice to launch it. 

![Launching Cronios Daemon from Shortcuts Home, the iOS Home screen, and via Siri](https://atow.files.wordpress.com/2019/01/Launching-Cronios-from-Shortcuts-the-iOS-Home-screen-and-via-Siri.-.png?w=1280)

The last three methods are the recommended way to start Cronios in “Run Continuously” mode, and all three require that the **Cronios Daemon** shortcut be installed.

<span id="cronios-daemon" class="section-header"></span>
### Cronios Daemon Shortcut
The [**Cronios Daemon**](#cronios-daemon) is a simple four action shortcut that launches Cronios in “Run Continuously” Mode. By adding it to your iOS Home Screen and to Siri, you have one tap, one voice command access to begin monitoring your list of cron jobs.

![Cronios Daemon Shortcut](https://atow.files.wordpress.com/2019/01/Cronios-Daemon-Shortcut.png?w=1280)

The **Cronios Daemon** shortcut comes packaged inside of Cronios. Choose **Install Cronios Daemon Shortcut…** from the Home screen or Settings. You'll be redirected to a Safari page where you can tap on a link to install it in Shortcuts. From there, add the shortcut to your iOS Home screen and give it a Siri activation phrase, such as `Activate Cronios`.

![Installing Cronios Daemon ](https://atow.files.wordpress.com/2019/01/Installing-Cronios-Daemon.png?w=1280)

Now, at any point during the day, you can say, `Activate Cronios` to start monitoring your cron jobs!

*** 

<span id="keeping-cronios-active" class="section-header"></span><span id="keep-alive" class="section-header"></span>
## Keeping Cronios Active and Alive
Since Cronios is not an built-in component of iOS, keeping it active in the background is a non-trivial task. iOS is constantly reviewing the apps you are running and suspending those that it thinks are not actively being used. 

>If you have Cronios running in the foreground (i.e. the Shortcuts app is the active application), your iOS device will not sleep, regardless of your Auto-Lock preference in Settings &raquo; Display and Brightness. This is because the shortcut is continually monitoring your Crontab every minute; as a result, iOS thinks that you are actively using it and won't go to sleep. If you use an iPad that's always plugged in, this is great because you can use Split View to keep Cronios in the foreground. 

There are two goals Cronios must accomplish to maximize its uptime. 

1. Keep Cronios and Shortcuts active in the eyes of iOS so it doesn’t prematurely suspend them both. 
2. Notify you in the event that Cronios does stop running. 

With Cronios 1.1, these goals are achieved with the [**Keep-Alive Beep**](#keep-alive-beep) setting and the [**Cronios Watcher** script for Scriptable](#cronios-watcher).

<span id="keep-alive-beep" class="section-header"></span>
### Keep-Alive Beep
The Keep-Alive Beep is a short and unobtrusive “beep” sound that is played every minute to keep Cronios alive in the background. The sound is created from converting a user-configurable text string to speech using the **Speak Text** action in Shortcuts. This action, unlike **Play Sound**, can be run in the background and has the positive side effect of keeping Shortcuts active in the eyes of iOS. 

![Keep-Alive Beep and 4 hours of Cronios uptime from an iPhone X](https://atow.files.wordpress.com/2019/01/Keep-Alive-Beep-and-4-hours-of-Cronios-uptime-from-an-iPhone-X.png?w=1280)

>I have tried actions to vibrate the device, change the brightness by an imperceptible amount, and adjust the system volume, but none of these work as well as Speak Text.

You can customize the beep text in [Settings](#settings) and adjust the Siri voice and language used via the shortcut’s Customize Shortcut screens. 

![Setting Siri Voice and Language for the Keep-Alive Beep](https://atow.files.wordpress.com/2019/01/Setting-Siri-Voice-and-Language-for-the-Keep-Alive-Beep.png?w=1280)

>If you find an even less obtrusive text string to speak, let the Cronios community know! I’ve tried using an invisible whitespace character, but it appears like iOS needs to speak something in order for Shortcut’s active status to be maintained.

![Cronios Watcher notifies you when Cronios stops running](https://atow.files.wordpress.com/2019/01/Relaunch-Cronios-in-Run-Continuously-Mode-with-one-tap.png?w=1280)

With **Keep-Alive Beep** enables, you can even lock your iOS device and Cronios will continue monitor your cron jobs in the background.

>Do note that if your cron jobs require user interaction, you will have to unlock your device or else Cronios will experience an error and quit. There are ways to inform the user of this proactively and avoid a Cronios crash. Read the section for [developers](#developer) for more information. 

<span id="cronios-watcher"></span> 
### Be Notified When Cronios Stops with Cronios Watcher and Scriptable
To be notified in the event that Cronios does stop running, we get some help  from [Scriptable](https://scriptable.app), is a JavaScript development enviroment for iOS from Simon B. Støvring. Scriptable allows you to create JavaScript scripts that can be run from Shortcuts and Siri. It also has the ability to schedule notifications, which we use to notify us when Cronios has stopped running. 

[**Cronios Watcher**](https://raw.githubusercontent.com/adamtow/cronios/master/cronios-watcher/CroniosWatcher.js) is a script for use with Scriptable and Cronios that does two things:

1. Creates reminder notifications in the future for you to restart Cronios in “Run Continuously” Mode. 
2. Clears out any previously set reminders.

With the **Notify When Cronios Stops Running** preference is set and Scriptable and the Cronios Watcher Script installed, you’ll be notified when Cronios has stopped running within minutes. Tapping on the notification banner will relaunch Cronios in **Run Continuously** mode via the [**Cronios Daemon**](#cronios-daemon) shortcut. 

>Your downtime will be minimized and Cronios will be running for longer periods of time throughout the day when you enable **Keep-Alive** and **Cronios Watcher**.  

Here’s how you install and configure Scriptable and **Cronios Watcher**:

#### Scriptable Instructions
1. Download and install [Scriptable](https://scriptable.app). 
2. Open Scriptable.
3. Tap the + icon to create a new script. 
4. Tap the Script Settings button. 
5. Tap and edit the name. Call it `Cronios Watcher`. ![Create Scriptable script for Cronios Watcher](https://atow.files.wordpress.com/2019/01/Create-Scriptable-Script.png?w=1280)
6. Change the icon and color if desired. 
7. Tap Done. 
8. In the main script area, copy and paste [the contents of the following file on GitHub](https://raw.githubusercontent.com/adamtow/cronios/master/cronios-watcher/CroniosWatcher.js). ![Cronios Watcher Scriptable Script](https://atow.files.wordpress.com/2019/01/Cronios-Watcher-Scriptable-Script.png?w=1280)
9. If desired, change the values in the `kNotificationInterval` array according to the reminder schedule you want to have for Cronios Watcher. The default reminds you to restart the [**Cronios Daemon** shortcut](#cronios-Daemon) after 2, 5, 10, 15, 30, and 60 minutes of no detectable Cronios activity. 
10. Tap the Play button to run the script. This will create a shortcut in the Siri Suggestions actions section in Shortcuts. 
11. Tap Done.

>Scriptable is a great developer tool. What’s also great about it is that it is completely free to download and use. That said, consider sending a tip to its developer, Simon B. Støvring. Doing so will show your appreciation to Simon and contribute to Scriptable’s future development. Tap Settings in Scriptable and tap Tip Jar.

#### In Shortcuts
1. Make sure you have the [**Cronios Daemon** shortcut](#cronios-daemon) installed. 

#### In Cronios
1. Open Cronios. 
2. Tap **Settings**. 
3. Tap **Notify When Cronios Stops Running**. 
4. Confirm that Cronios Daemon, Scriptable app, and the Cronios Watcher Scriptable script are all installed.

![Activating Cronios Watcher](https://atow.files.wordpress.com/2019/01/Cronios-Watcher-activation.png?w=1280)

To test this, run Cronios in “Run Continuously” mode. After one evaluation period, stop it. Wait for two minutes and you will see a banner notification to relaunch Cronios.

>Make sure that Do Not Disturb is disabled and that Shortcuts can send you notifications, or you will not see the notification.

Tapping the notification banner will cause the [**Cronios Daemon**](#cronios-Daemon) shortcut to relaunch Cronios back in “Run Continuously” mode. Every time Cronios successfully processes your list of cron jobs, it will call Cronios Watcher to reset the relaunch reminders. 
 
***

### Additional Techniques for Keeping Cronios Alive
Here are some additional techniques to keep it active and running in the background:

1. Set the **Wait Interval** to a lower number. This will cause Cronios to ping itself more often during the one minute wait cycle. Remember, Cronios won't re-evaluate the Crontab until the next minute.
2. If you run an app that employs background processing like Music, Podcasts or Location Services, Cronios may run a little bit longer in the background while the iOS device is locked.
3. If you are using Cronios on an iPad, you can run in Split View. Doing this will give Shortcuts more increased priority from iOS than if it was running in the background. 

![Cronios runs great in Split View on the iPad](https://atow.files.wordpress.com/2018/12/ivborw0kggoaaaansuheugaadgaaaajucayaaad194waaaacxbiwxmaaastaaaleweampwyaabc-2-1-1.png?w=1280)

### How Long Can Cronios Run?
Unfortunately, there is no definitive answer. iOS is very much of a black box when it comes to how it handles background processing. I've personally seen Cronios run for four hours straight before stopping unexpectedly. I've had other instances where Shortcuts gives me a cryptic error (-9806) while terminating Cronios after just ten minutes. Now that you can be [notified within minutes of Cronios stopping](#cronios-watcher), however, your uptime will be much higher throughout the day. Let the community know how long you can get Cronios to run!

>Note: Remember, your cron jobs and shortcuts will not execute if Cronios is not running.

With **Keep-Alive Beep** and **Cronios Watcher** enabled, my longest runtime streaks on both an iPhone X and iPad Pro 12.9 (2081) were around four hours.

### Battery Life
Battery life is a concern if you're going to be running Cronios in continuous monitoring mode for long stretches of time. When Cronios is active, it's constantly pinging itself and evaluating the crontab several times a minute. With great automation power comes the tradeoff of diminished battery life, so get that extra long charging cable for your iPad or [one of the new iPhone Smart Battery Cases](https://9to5mac.com/2019/01/15/apple-officially-releases-smart-battery-cases-for-iphone-xs-max-xr-with-qi-charging-support/) and stay powered on!

>All the better to have a [croncut that reminds you of your battery level](https://routinehub.co/shortcut/1370) throughout the day!

With the **Keep-Alive Beep** feature enabled, you can even lock your device and have Cronios continue to run in the background beyond the usual 2-3 minutes for apps. If the iPhone were to suspend Shortcuts or if there was an unrecoverable error,  **Cronios Watcher** will notify you within minutes that you will need to relaunch Cronios.

***

<span id="running-other-shortcuts" class="section-header"></span>
## Running Other Shortcuts Outside of Cronios
Remember Cronios is a shortcut itself and is designed to run indefinitely until it is terminated by the user or iOS. If you want to run other shortcuts while Cronios is running, read on.

Whether or not a shortcut outside of Cronios will run depends on where and how the shortcut was invoked:

- Shortcuts App 
- Siri Shortcuts
- Share Sheet
- Shortcut Widgets in Notification Center
- iOS Home Screen

For the ensuing sections, please refer to the following flowchart:

![Running other shortcuts while Cronios is running](https://raw.githubusercontent.com/adamtow/cronios/master/images/cronios-running-other-shortcuts-flowchart.png)

### Shortcuts App
If Cronios is running and you go to the Shortcuts app to run a shortcut, you need to tap Cronios' stop button before you can run your shortcut.
 
### Siri Shortcuts
If you use Siri to run a shortcut, it will terminate Cronios (if it is currently running) and run the shortcut.

### Share Sheet
You can use shortcuts from the iOS Share sheet as long as the shortcut does not switch back to the Shortcuts application using the **Continue in App** action. Note: Shortcuts run from the widgets area have limited memory with which to run, so they may not work entirely regardless of whether or not Cronios is running.

### iOS Home Screen
If Cronios was launched from the Shortcuts app and you tap on another shortcut from the iOS Home Screen (which you added via the Add to Home Screen feature), the Shortcuts app will launch, but your shortcut will not run.

If Cronios (via the [**Cronios Daemon**](#cronios-daemon)) was launched from the iOS Home Screen, however, tapping a shortcut from the iOS Home Screen will launch Shortcuts, close Cronios Daemon, and run your shortcut.

### Shortcut Widgets in Notification Center
Shortcuts that do not switch back to the Shortcuts app via the **Continue in App** action should work even while Cronios is running. Note: Like with the iOS Share sheet, shortcuts run form the widgets area have limited memory with which to run, so they may not work entirely regardless of whether or not Cronios is running.

***

<span id="interface" class="section-header"></span>
## Exploring the Cronios Interface
Now, Let's take a tour of the rest of the Cronios interface. The Home screen is segmented into the following sections:

- [System Information](#system-info)
- [Run Commands](#run)
- [Crontab](#crontab)
- [Actions](#actions)
- [About and Settings](#about-and-settings)

<span id="system-info" class="section-header"></span>
### System information
At the top of the Cronios Home screen is information about the current Cronios process and its previous run.

- **Current Process ID (PID)**: The current ID for this run of Cronios. You can refer to this ID when searching through Cronios logs.
- **Last Run**: the date Cronios was last started.
- **Last Check**: the date that Cronios last checked the Crontab. 
- **Last Run Uptime**: the amount of time in minutes Cronios was running during the last run cycle.

![Cronios Home](https://atow.files.wordpress.com/2019/01/Cronios-Home.png?w=1280)

<span id="run" class="section-header"></span>
### Run Commands
This section features the two commands used to launch Cronios in monitoring mode:

- **🔁 Run Continuously**: Cronios will monitor your Crontab continuously every minute starting with the next minute. Cron jobs that match the current date will run their assigned shortcuts in the background.
- **1️⃣ Run Once**: Cronios will evaluate the Crontab once for the current time. Any matching cron jobs will run their shortcuts immediately. This is useful for testing your cron jobs or if you want to catch up on any potentially missed [Fuzzy *️⃣ scheduled jobs](#fuzzy-star).

<span id="crontab" class="section-header"></span>

### Crontab 
The Crontab is the list of cron jobs on your iOS device. Each cron job lists the following information:

-  ☑️ or ⬜️: If checked, the cron job is active and will be evaluated every minute when Cronios is running. Tap to enable and disable the cron job.
- **Priority**: ‼️, ❗️, or ❕ icons next to the descriptions denotes Critical, High and Low priority cron jobs (cron jobs with default or normal priority do not display an icon). Priority determines the order by which multiple shortcuts run if they all share the same schedule.
- **Description**: a short description on what the cron job does. Tap to edit the description.
- **Expression**: a valid cron schedule expression. Tap to bring up the [Cron Expression Editor](#cron-expression-editor). 
- **Shortcut**: the name of the shortcut that will run. Tap to [select another shortcut](#shortcut-select). 

Additional icons may be shown next to the shortcut indicating the following options associated with the cron job:

- **Missing** ❓: The shortcut could not be found. It may have been deleted or renamed.
- **Requires Network Access** ☁️ : The shortcut needs network connectivity to function. If you are offline, Cronios will not run this cron job.
- **Requires User Interaction** ✋🏻 : The shortcut may require user interaction within the Shortcuts application.
- **Fuzzy** *️⃣: The cron job will run in [Fuzzy Star Mode](#fuzzy-star). Cron jobs in this mode will run once per unique match.  
- **Display Notification**💬: A notification banner will appear when the assigned shortcut runs.
- **Play Sound** 🔔: The notification banner will be accompanied by a sound.
- **Notify Shortcut** 📗: The [Cronios dictionary](#notify-shortcut-cronios-dictionary) will be sent to the shortcut. Developers can use this dictionary to change operations depending on how the shortcut was launched (i.e. manually or in the background via Cronios).
- **Lock Detection** 🔒: If the screen brightness is set to zero, Cronios will consider the device locked. Checking this option will prevent your shortcut from running. This is useful if your shortcut requires user interaction or access to private data (Health data for instance). 
- **Exclude From Success Notifications** 🌒: Cronios displays the names of all shortcuts it runs during each evaluation period. If you have a shortcut that you do not want to appear in the list, enable this option. This is useful for shortcuts that run frequently.

>Note: You can export your Crontab into a human-readable format by choosing **Export Crontab…** in Settings. 

Below the list of cron jobs are the **Bulk Edit…** and **Bulk Edit All…** commands. Use them to activate, deactivate, delete multiple cron jobs at once. You can also clear the last run status of selected cron jobs, which is useful when testing or when you want to run a cron job that has [Fuzzy *️⃣ mode](#fuzzy-star) enabled.

<span id="actions" class="section-header"></span>

### Actions

- **New Cron Job**: Create a new cron job using the Cron Job Assistant.
- **Import Cron Jobs**: Import multiple cron jobs at a time. Input is a text string that must adhere to the [**Cronios Crontab** format](#cronios-crontab).
- [**Cron Expression Editor**](#cron-expression-editor): a tool for generating cron schedule expressions. Ever wonder what `*/5 9-17 10-15 4 *` means? Just enter the expression in the Expression Editor and get back a human-readable response of `every 5th minute past every hour from 9 through 17 on every day-on-month from 9 through 14 in April.`

<span id="about-and-settings" class="section-header"></span>

### Cronios

- **About**: Displays the about screen with the current version and build number.
- **Help**: Opens the documentation that you are reading now. 
- **Tip Jar**: Send me a tip if you have found Cronios useful for automating your shortcuts.
- **Settings**: Adjust Cronios preferences, export your Crontab, import a Crontab, change languages, and more. 
- **Install Cronios Daemon Helper**: The [**Cronios Daemon** shortcut](#cronios-daemon) launches Cronios in "Run Continuously" mode with one tap from your iOS Home Screen or via Siri.

***

<span id="cron-jobs" class="section-header"></span>
## Editing Cron Jobs

You've created your first cron job. Now, let's delve deeper into additional options you have when creating or editing cron jobs.

>A cron job is a scheduled shortcut.

Remember that a cron job is a scheduled shortcut. You define the schedule at which the shortcut should run whenever Cronios is active and running. Here is an overview of the **Edit Cron Job** screen:

![Editing a cron job in Cronios](https://atow.files.wordpress.com/2019/01/Editing-a-cron-job-in-Cronios.png?w=1280)

- **Cronios Home**: Return to the Cronios Home screen. Any changes you have made to the cron job will be saved.
- **Active Status**: The ON/OFF switch for this cron job.
- **Description**: A short description for the cron job. Tap to edit the description.
- **Expression**: The cron schedule expression. 
- **Repeat Interval**: Determines how often the cron job's shortcut will actually run. You can configure the shortcut to run every time, run once, or after X minutes, hours, or calendar days.
- **Fuzzy** *️⃣: Denotes that the cron job should run on every matched scheduled.
- **Shortcut**: The shortcut to run when the schedule matches the current date. Tap to choose another shortcut.
- **Test Shortcut**: Run the shortcut from Cronios. This mimics what would happen if Cronios executed your shortcut on schedule.
- **Edit Shortcut**: Quit Cronios and re-open the Shortcuts application to the selected shortcut in edit mode.
- **Priority**: A cron job’s priority determines when it is evaluated and run when you have multiple cron jobs in your Crontab. A value between 1-25 is considered Critical‼️. A value between 26-49 is considered High❗️. A value of 50 is normal (this is the default priority for new cron job’s). Finally a value between 52-100 is considered Low❕. 
- **Display Notification** 💬: Check this if you want a notification banner to appear when the assigned shortcut runs.
- **Play Sound** 🔔: Check this if you want a sound to accompany the banner notification.
- **Notify Shortcut** 📗: Check this if you want to send the [Cronios dictionary](#notify-shortcut-cronios-dictionary) to the shortcut. This will help your shortcut know that it's running in the background.
- **Requires Network** ☁️: Check this if your shortcut requires internet connectivity. Cronios will not evaluate this cron job until you are back on the network. 
- **Requires User Interaction** ✋🏻: Check this if the shortcut requires any kind of user interaction.
- **Lock Detection** 🔒: Check this option to prevent your shortcut from running when the screen is locked. This is useful for those shortcuts that require access to data that is only accessible when the device is unlocked (i.e. your Health data). 
- **Exclude From Success Notifications** 🌒: Check this you do not want the shortcut to appear in the list of successfully run shortcuts. Useful for shortcuts that run very frequently (i.e. every minute).
- **🗑 Delete**: Delete the current cron job and return to the Cronios Home screen.
- **❌ Close Without Saving**: Don't save any changes made to the cron job and return to the Cronios Home screen. This only appears for new cron jobs.
- **Cronios Home**: Tapping the Cronios logo returns you to the Cronios Home screen. 

<span id="shortcut-select" class="section-header"></span>
### Choosing Shortcuts 
Tap on the shortcut to bring up the **Shortcut Select** dialog. Here you can:

1.  Choose a shortcut.
2. Tap **🔍 Search** to filter your list of shortcuts by keyword. Separate multiple keywords with new lines. Exclude keywords by prefixing the search term with a '-'. Note that search terms are case-sensitive. 
3. Tap **⬅️ Back** to return to the Edit Cron Job screen without making a choice.

![Search Shortcuts by Name](https://atow.files.wordpress.com/2019/01/Search-Shortcuts-by-Name.png?w=1280)

### Testing the Shortcut
After you have selected a shortcut, you can test it by tapping on the **▶️ Test Shortcut** menu item below your shortcut's name. This will closely mimic what happens when your shortcut is run by Cronios.

- A notification will appear if you have checked **Display Notification 💬**.
- A sound will accompany the notification if you have **Play Sound with Notification 🔔**checked.
- The Cronios Dictionary will be sent to your shortcut if you have **Notify Shortcut 📗** checked.
- An alert will appear, and your shortcut will not run if (1) you have **Requires Network Access ☁️** checked and (2) your device is offline.
- Your shortcut will not run if the screen brightness is set to 0 and you have **Lock Detection 🔒** checked.

### Editing the Shortcut
Tap **🔧 Edit Shortcut…** to quit Cronios and edit your shortcut. You will be temporarily redirected to a mobile Safari page, which will prompt you to open the Shortcuts app. Tap Open to return to Shortcuts and the selected shortcut to the Edit screen.

***

<span id="expressions" class="section-header"></span>
## Understanding Cron Schedule Expressions
Your cron job's schedule determines when it will be triggered by Cronios. Cron expression syntax may seem daunting at first, but it's really not that hard to get once you understand what each component means. Read the section below, and you'll be writing cron schedule expressions in no time!

There are five components to a valid cron schedule expression in Cronios:

1. minutes
2. hours
3. dayOfMonth
4. month
5. dayOfWeek

Visually, this is represented as follows:

```
# Comments begin with #
#
* * * * * shortcut to run
┬ ┬ ┬ ┬ ┬
│ │ │ │ │ 
│ │ │ │ └─ dayOfWeek (0-6)
│ │ │ └─── month (1-12)
│ │ └───── dayOfMonth (1-31)
│ └─────── hours (0-23)
└───────── minutes (0-59)
```
Within each of these components, you can specify:

- \* character represents every possible value for the given component. 
- Single digits that represent one unit value of that component (i.e. 12 = noon for `hours`).
- Range of digits separated a hyphen (i.e. 1-5 for Monday through Friday for `dayOfWeek`).
- Step value (every Nth) with the step value separated by a slash / character.
- You can also use commas to separate list of values for a component (i.e. 1,5,10 for  for `January`, `May`, and `October` values for `month`).

For instance, if you wanted to run a shortcut every weekday at 12:00 pm, you would write:

```
# What's for lunch?

0 12 * * 1-5
* *  * *  *  shortcut to run
┬ ┬  ┬ ┬  ┬
│ │  │ │  │ 
│ │  │ │  └─ Monday to Friday 
│ │  │ └─── Every month
│ │  └───── Every day
│ └─────── 12th Hour
└───────── 0th Minute
```
If you wanted to run a shortcut at a specific time on a certain day, you could write:

```
# Happy Anniversary, iPhone!!!
41 9 9 1 * iPhone Birthday

# 41 = Minute 41
# 9 = Hour 9
# 9 = 9th day of month
# 1 = January
# * = Any day of the week
```

As a final example, suppose you needed to be reminded to do something every 5 minutes during working hours on the first and fifteenth day of every month. Your cron schedule expression would be specified as:

```
# Remind me to pay my bills 
*/5 9-17 1,15 * * Pay bills

# */5 = Every fifth minute
# 9-17 = Hours 9 through 17
# 1,15 = Day 1 and 15 of month
# * = Every month
# * = Any day of the week
```

As you can see, with these five specifiers, you have tremendous amount of flexibility in determining the schedule of your cron jobs. 

>Once you have paid your bills, the `Pay Bills` shortcut should be take note and stop reminding you every five minutes on those two days. 

<span id="cron-expression-editor" class="section-header"></span>
### Cron Expression Editor

The **Cron Expression Editor** (CEE) is a tool to help you build cron schedule expressions for your cron jobs. You access the CEE by either tapping on the **🕑 Expression** menu item on the **Edit Cron Job** screen or by tapping the **Cron Expression Editor…** menu on the Cronios Home screen.

![Cron Expression Editor](https://atow.files.wordpress.com/2019/01/Cron-Expression-Editor.png?w=1280)

The CEE window displays the following information at the top of the menu:

- **Expression**: A ✅ or ❌ denotes whether the expression is valid or invalid
- **Explanation**: a human-readable version of the expression
- **Date**: The custom date or current date. A ✅ or ❌ denotes whether the expression matches the date shown.
- **Date UTC**: The custom or current date in UTC time format. A ✅ or ❌ denotes whether the expression matches the date.
- **minutes**: Tap this to adjust the minutes component of the expression.
- **hours**:  Tap this to adjust the hours component of the expression.
- **dayOfMonth**:  Tap this to adjust the day of the month component of the expression.
- **month**:  Tap this to adjust the month component of the expression.
- **dayOfWeek**:  Tap this to adjust the day of the week component of the expression.
- **Manually Input Cron Expression**: Open a text input box and manually enter the cron expression.
- **Test with Current Date**: Redisplays the CEE using the current date.
- **Test with Custom Date**: Redisplays the CEE using a date that you specify.
- **Copy Expression to Clipboard**: Copies the currently displayed expression to the clipboard.
- **Save and Close**: If editing a cron entry, this will save the new expression object into your shortcut.

>Note: If you are comfortable writing cron expressions, you can use the **Manually Input Cron Expression…** command or turn off use of the CEE altogether in [Settings](#settings).

Tapping any of the minutes, hours, dayOfMonth, month, or dayOfWeek menus will display a second menu with a choice of the following options. 

- **Every**: This matches every value for the given component and is represented by the * character. So, for minutes, that would mean 0-59. For month, it would go from 1-12.
- **By Specific Value** : Select a specific value for your expression component. You can select multiple values in this list (i.e. hours 9, 11, 13, 15, 17).
- **By Range** : Choose a starting and ending range for the expression component (i.e. 1-15 for dayOfMonth).
- **By Step Value**: This lets you create an expression where you can retrieve every Nth expression component. For example, every 2nd hour after 9 a.m. can be written in one of two ways:

`* 9,11,13,15,17 * * *`

Alternatively, it can be written as follows using step values:

`* 9-17/2 * * *`

To Cronios, this reads as every 2nd hour starting from 9:00 to 17:00.

![Step values with range in a cron expression schedule](https://atow.files.wordpress.com/2019/01/Step-values-with-range-in-a-cron-expression-schedule.png?w=1280)

Tap **Save and Close** to return to the Edit Cron Job screen. Your edited cron job will now feature the new expression.

>The Cron Expression Editor can be used outside of creating and editing cron jobs. Tap on **Cron Expression Editor…** from the Cronios Home screen to experiment!

***

<span id="fuzzy-star" class="section-header"></span>

## Fuzzy *️⃣
Because Cronios may not always be running on your iOS device, you may experience situations where your precisely defined cron jobs miss their schedules. For instance, say you want to run a backup script at 12:00 pm every day. In normal cron parlance, you would enter:

`0 12 * * * Backup Shortcut`

If Cronios were running at noon, it would run the Backup Shortcut on time. However, your iPhone might be locked at that exact time. While some apps can work in the background, there's no guarantee that Shortcuts and Cronios will be running. If this is the case, Cronios would miss the schedule and the Backup Shortcut would not have run. 

![Cron job with Fuzzy Star enabled](https://atow.files.wordpress.com/2019/01/Cron-Job-with-Fuzzy-Star-enabled.png?w=1280)

In this situation, you may want to define your cron job with a Fuzzy *️⃣ schedule.

`* 12 * * * Backup Shortcut`

With regular cron, this schedule is interpreted as:

`every minute between 12:00 through 12:59 pm`

Clearly, we don't want to run the Backup Shortcut every minute. With Fuzzy *️⃣, however, this same schedule is interpreted as 

`Run once between 12:00 pm and 12:59 pm.`

That's more like it. As long as we run Cronios once during the noon hour, the shortcut will be run once and only once. The next minute Cronios evaluates the Crontab, it will skip over your cron job because it will have detected that it already ran on that matched schedule.

### Fuzzy *️⃣ with Multiple Schedule Matches

If your expression has multiple values in the hour field:

`* 9-17 * * * Backup Shortcut {{fuzzyStar}}`

Fuzzy *️⃣ would make it so your shortcut runs could run up to nine times, or once an hour from 9:00 am to 5:59 pm. The fuzziness applies to uniquely matched schedules. While 9:00 am to 9:59 am are treated as the same, 9:00 am and 10:00 am are considered different.

>The fuzziness applies to uniquely matched schedules.

Note that this also means that if you start Cronios at 11:58 am and run it through 12:01 pm, your shortcut will run twice in the span of four minutes, once at 11:58 am and again at 12:00 pm.

*** 

<span id="settings" class="section-header"></span>
# Settings

Cronios is highly configurable. You access Settings from the Cronios Home screen. Swipe to the bottom of the menu and tap **Settings**. The Settings panel is divided into five main sections:

1. [General Settings](#general-settings)
2. [Remain Active Options](#remain-active)
3. [Cron Job Defaults](#cron-job-defaults)
4. [Advanced Options](#advanced-options)
5. [Tools](#tools)

![Cronios Settings](https://atow.files.wordpress.com/2019/01/Cronios-Settings.png?w=1280)

<span id="general-settings" class="section-header"></span>
##  General Settings

###  Use Local Time
By default, Cronios matches schedules using the local time of the device. Disable this to make Cronios use [Coordinated Universal Time](https://en.m.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC) instead. Remember your cron jobs will need their expressions modified to support whatever setting you choose. 

### Use Cron Expression Editor 
By default, editing a cron job's schedule opens up the **Cron Expression Editor**. If you are familiar with entering cron expressions manually, disable this preference. In place of the CEE, a standard Ask For Input dialog will appear when editing a cron job's schedule.

***

<span id="remain-active" class="section-header"></span>
## Remain Active
These options help keep Cronios awake in the background.

### Wake Up Interval
In between one minute checks of your Crontab, Cronios wakes up on a timed interval in the attempt to keep itself active in the eyes of iOS. You can adjust this wake interval between 10 and 45 seconds. 

<span id="keep-alive-beep" class="section-header"></span>
### Keep-Alive Beep
Enable the feature that allows Cronios to run in the background for long periods of time. Turning this on reveals the **Text to Speak** preference where you can configure the text that Cronios will speak very rapidly after each evaluation of your Crontab. 

>Note: When **Keep-Alive Beep** is enabled and if you are currently listening to music, a podcast, or a video, the audio will suck out briefly after every evaluation period. 

### Notify When Cronios Stops Running
Enabling this causes Cronios to run the Cronios Watcher Script in Scriptable. You will be asked to confirm that you have both Scriptable and Cronios Watcher installed. If you do not have them installed, you can tap in the appropriate button in the displayed menu.  

>If you have not installed Scriptable, Cronios will Display an alert that you need to download it. If you don’t have the Cronios Watcher Script installed in Scriptable, Cronios will stop running and display an error in the Shortcuts app. 

***

<span id="cron-job-defaults" class="section-header"></span>
## Default Cron Job Options
This section allows you to set default options for new cron jobs.

### Display Notification
Determines whether a cron job will display a banner notification right before shortcut execution.

### Play Sound
Set this if you want a sound to accompany the notification. 

>**What about custom sounds?**
Unfortunately, the **Play Sound** action requires Shortcuts to be in the foreground to play the audio. So, for the time being, Cronios cannot play custom sounds when your shortcuts run. 

### Use Fuzzy *️⃣ Evaluation 
Sets new cron jobs to evaluate their schedules using the Fuzzy *️⃣ algorithm. Fuzzy *️⃣ executes a cron job once per unique matched schedule. See the [section on Fuzzy *️⃣ for more details](#fuzzy-star).

### Notify Shortcut
Sends the [Cronios Dictionary](#notify-shortcut-cronios-dictionary) as input to the shortcut.

### Lock Detection
Check this to prevent shortcuts from running when the device screen brightness is set to 0. Cronios considers this to mean that the device is locked. 

>Since there is no direct way to determine whether the device is locked, Cronios checks the screen brightness. If you routinely use your iPhone at low brightness settings and want to continue to use Cronios, be sure to set your brightness to just above 0. 

‼️ Note: Cronios cannot detect the case when the device is locked but the screen is on.

***

<span id="advanced-options" class="section-header"></span>
## Advanced Options

### Allow External Cron Job Creation
This option lets other applications import their cron jobs directly into Cronios. You'll still have an opportunity to review the cron jobs before they are added. It is recommended that you leave this option enabled.

>Note this does not prevent third-parties from directly accessing your Crontab and adding entries. Please read the [**Security**](#security) section for more details.  

### Import Active Status
If enabled, imported cron jobs will retain active/inactive status after importing. If disabled, all imported cron jobs will be inactive upon import.

By default, this option is turned off, allowing you inspect the cron jobs and shortcuts before they are run from your Crontab.

### Extended Logging

Logs are written on a per-device basis to:

`Shortcuts/Cronios/logs/log-{{DeviceName}}.txt`

where {{DeviceName}} is the name of your iOS device. Logs roll over every 7 days and are found in the same location. 

Examples of information stored in the log include:

- **Boot time**: When the Cronios shortcut was launched.
- **Run time**: When Cronios was started in monitoring mode.
- **Run shortcut**: When a shortcut is run. The log entry occurs after a successful run, so if your shortcut has an error, this log entry may not appear.
- **Missing shortcut**: When a shortcut could not be found on your iOS device. It may have been renamed or deleted.

### Enable Debug Mode

When testing Cronios and your shortcuts you may want to have more information on what Cronios is doing. Turn on Debug Mode to have Cronios notify you at every check and wait step. If you have logging enabled, additional information will be written to the log, including:

- **Evaluate**: When your cron job is being evaluated by Cronios.
- **Skipped**: When your cron job has been skipped over by Cronios.

***

<span id="tools" class="section-header"></span>
## Tools

<span id="cronios-daemon" class="section-header"></span>

###  Install Cronios Daemon Shortcut…
Install this helper shortcut to quickly launch Cronios from the iOS Home screen. You don't want to create a Home screen shortcut using the Cronios shortcut, because launching it will cause the Shortcuts app to run through all 2800+ actions. This will impact the performance of Shortcuts and Cronios over time. 

### 📃 View Logs…
View logs associated with your device. Logs roll over after 7 days.

### 💾 Export Crontab…
Exports your cron jobs into a [**Cronios Crontab**](#cronios-crontab) file. Only the following information is exported with each cron job:

- Active/Inactive status 
- Description
- Cron Schedule Expression
- Shortcut
- Requires Network Access setting
- Requires User Interaction setting
- Fuzzy *️⃣ setting
- Notify Shortcut setting

### 📥 Import Crontab…
Import cron jobs en masse by importing a [**Cronios Crontab**](#cronios-crontab) file.

### 🌐 Change Language…
Cronios is currently available in the English language only, but it's fully ready for [localization](#localization).

### 📲 Check for Updates…
- Check for [updates to Cronios on RoutineHub](https://routinehub.co/shortcut/1267).

### 💥 Reset Settings…
This allows you to reset Cronios back to factory settings without removing any of your data. Or, you can erase all content and settings from your device. Other devices that use Cronios will not have their data affected.

### 🧧 Tip Jar…
Have you been enjoying using Cronios? Send me a tip as a sign of your appreciation! Thanks in advance!

### Share Cronios…
Share Cronios with friends, co-workers, and family.

### Home
Returns you to the Cronios Home screen.

***

<span id="developer" class="section-header"></span>
# Developing Background-Aware Shortcuts for Cronios
While many shortcuts just work when run as a cron job by Cronios, others require some tweaking to operate in the background without causing Cronios to crash, which would prevent other cron jobs from executing on schedule. 

Cronios provides the rich framework for creating background-aware shortcuts. It's up to developers to take full advantage of Cronios by writing great shortcuts that work in the background and on schedule.

This section provides useful information on how you can take full advantage of Cronios. 

- [Cronios Application Flowchart](#flowchart)
- [User Interaction](#user-interaction)
	- [Banner Notifications](#banners)
	- [Open App](#open-app)
	- [Speak Text](#speak-text)
	- [Lock Detection](#lock-detection)
- [Network Access](#network-access)
- [Notify Shortcut and the Cronios Dictionary](#notify-shortcut-cronios-dictionary)
- [Testing Your Shortcuts](#testing)
- [Cronios Crontab Format](#cronios-crontab)
- [Third-Party Import of Cron Jobs Into Cronios](#third-party-import)

<span id="flowchart"></span>
## Cronios Application Flowchart
The diagram below details the Cronios application flow. When running your shortcuts, you’ll want to start looking at the yellow box labeled `Run`.

![Cronios App Flow Diagram](https://raw.githubusercontent.com/adamtow/cronios/master/images/cronios-flowchart.png)

There are several decision points that both the user and developer can make with your cron jobs, including:

- **Device is offline**
	- User - Requires Network option is enabled. Shortcut will not run.
	- Developer - Check network status before running script that requires the device be online.
- **Screen brightness is 0**
	- User - Lock Detection option is enabled. Shortcut will not run.
	- Developer - Prompt the user to unlock device before proceeding.
- **Notify Shortcut is enabled**
	- Developer - The [Cronios Dictionary](#cronios-dictionary)  is sent to your shortcut as input.

If you do not handle the first two cases, Cronios may terminate prematurely, forcing the user to have to restart Cronios. The ensuing sections detail how you as a developer can handle each case.

<span id="user-interaction" class="section-header"></span>
## User Interaction
Unless you inform them, your users will have no way of knowing that your shortcut has displayed a menu or alert if the Shortcuts application is in the background. And, if the user never returns to the Shortcuts application, iOS may ultimately terminate both your shortcut, Shortcuts and Cronios.

Here’s how you can alert the user if your shortcut requires attention:

1. Display a banner notification. 
2. Display a banner notification with sound.
3. Switch back to the Shortcuts app using the Open App action in Shortcuts.
4. Speak to the user.
5. Speak to the user if you detect that the screen is off (which may indicate device lock status), prompting them to unlock the device before continuing.

<span id="banners" class="section-header"></span>
### Banner notifications
Displaying a banner notification is the least obtrusive method for asking the user to return to the Shortcuts app, but there's a chance the user will not see it if you don't accompany it with a sound.

![Notifying the user with a audible notification and awaiting return to Shortcuts](https://atow.files.wordpress.com/2018/12/8D2D8CB3-559E-4AD3-94D8-693453134027.png?w=270)

If **Do Not Disturb** mode is turned on, however, no banners or banners with sounds will be presented to the user. In this case, Cronios and your shortcut may be waiting indefinitely for the user to return to the Shortcuts application. There is currently no way to know if the device is in **Do Not Disturb** mode (it can only be set on or off).

<span id="open-app" class="section-header"></span>
### Open App
The **Open App** action immediately switches to the selected application. It works whether Shortcuts is in the foreground or background but does not work when the device is locked.

It is the most effective action, but also potentially the most jarring for the user since there is no built-in notification when the app switches.

>Note: When the Open App action runs, the top-left corner of the iOS screen will have small back button for returning to the previous application. If you only switch to one application (i.e. Shortcuts), this could provide some visual indication, however small, on where the user can return to after your cron job has run. The user would still have to tap on the back button. There is no way currently to do so programatically.

If you absolutely must use this technique, give the user some indication of what's happening via a banner notification, banner with sound, or spoken text.

![Notifying the user via banner or spoken text before switching apps via Open App](https://atow.files.wordpress.com/2019/01/Notifying-the-user-via-a-banner-or-spoken-text-before-calling-Open-App.png?w=1280)

>Note: Open App is your only recourse if your shortcut requires the use of actions that employ things like Location Services, Weather, or Play Sound. If you try to run these tasks in the background, Shortcuts will raise an error and stop both your shortcut and Cronios.

### Open App and Input
**Open App** does not provide any input to the selected app. So, if you require sending information to that application, you can:

1. See if the **Open In…** action lists the application you wish to open. This action can take input as a file to the specified app. Make sure your input is supported by the opening app.
2. Save data into a location the app can read like a file or the clipboard.
3. Return to Shortcuts and use the **Open URL** or **Open X-Callback URL** action. These two actions do not work when Shortcuts is running in the background.

### Adding a Wait Step After Open App
After running the **Open App** action, place a **Wait** action of at least two seconds. This gives Shortcuts enough time to initialize itself. If you don't put a Wait action, the Shortcut may error, which will cause Cronios to terminate.

![Add a Wait action after calling Open App](https://atow.files.wordpress.com/2019/01/Wait-Steps.png?w=1280)

<span id="lock-detection"></span>
## Lock Detection 
Detecting if the screen is locked is possible by checking the device brightness. If the value is 0, there is a high likelihood  chance that the device is locked. 

>If the user manually set the device brightness to zero, Cronios will consider the device is locked for the purposes of evaluating the Lock Detection option for cron jobs. 

If your shortcut:

- requires user interaction
- needs the device unlocked in order to retrieve private data such as Health data
- needs to switch to Shortcuts to get the current location

Refer to the following flowchart to see how you can code your shortcut to handle the Device Locked case:

![Cronios App Flow Diagram](https://raw.githubusercontent.com/adamtow/cronios/master/images/cronios-lock-detection-flowchart.png)

### Do Nothing
You can choose to enable the **Lock Detection 🔒** option in your cron job. This will cause Cronios to skip running your shortcut if it thinks the device is locked. 

You can also handle this within your own shortcut by inspecting the brightness value in the **Device Details** action. 

### Prompt If Device Locked Shortcut
[**Prompt If Device Locked**]() is a shortcut that you can learn from to get started working with shortcuts that require the device to be unlocked. If it detects that the brightness is 0, it prompts the user via the **Speak Text** action to unlock the iPhone before proceeding. 

It then waits a number of seconds long enough for the lock screen to  go back to black (if an existing notification had turned on the screen). If after the wait time, the screen is still off, the shortcut returns 0. If the screen brightness is greater than 0, the shortcut returns 1. At this point, you can assume the device is unlocked and proceed with the rest of your shortcut. 

>While there is no guarantee that the device is actually unlocked when the brightness is greater than 0, this is currently the best method available for ascertaining device lock status.

## Network Access When Offline
If you are offline and you have a cron job scheduled that requires network access, you don't want its shortcut to run. If it did, Shortcuts would throw up an alert and terminate Cronios.

In this case, be sure to check the **Requires Network Access** ☁️ checkbox. Doing so will prevent your cron job from being evaluated if the iOS device is offline.

<span id="timeouts" class="section-header"></span>
### Timeouts
Don't think that you can download a huge file in the background and expect Shortcuts to make it through to the end. Your shortcut's network request may time out, causing an error to appear in the Shortcuts application, which will terminate Cronios prematurely. 

>Note: Here's hoping that Apple adds some solid error checking and handling for shortcut developers so we can better deal with situations like these.

### Location Services
If you want to use shortcut actions that employ location services such as **Get Current Weather** or **Get Current Location** you must return to the Shortcuts application prior to calling these actions. Furthermore, it's advisable to add a Wait action before the calls to **Open App** and **Get Current Weather/Location** in order to give Shortcuts time to prepare itself. Not adding the wait step will cause an error to appear in Shortcuts, which will terminate Cronios.

***

<span id="testing" class="section-header"></span>
## Testing Your Shortcuts
The best way to test your shortcut is within Cronios itself. Create a cron job and assign your shortcut to it. Don't worry about setting a schedule for the moment. 

Tap **▶️ Test Shortcut** to run your shortcut. 

Experiment with running your shortcut with the following cron job options checked and unchecked:

- A notification will appear if you have checked **Display Notification 💬**.
- A sound will accompany the notification if you have **Play Sound with Notification 🔔**checked.
- The Cronios Dictionary will be sent to your shortcut if you have **Notify Shortcut 📗** checked.
- An alert will appear, and your shortcut will not run if you have **Requires Network Access ☁️** checked and if you are offline.
- If you set the brightness of your device to 0, you can simulate the **Lock Detection 🔒** option. 

***

<span id="cronios-crontab" class="section-header"></span>
## Cronios Crontab Format
The Cronios Crontab format follows the standard crontab format but has a few extensions and requirements.

All valid Cronios Crontabs must start with the following text on the first line:

`#!# Cronios Crontab`

Cron job entries are separated by new lines from each other. The description must be one line and right above the cron schedule expression and shortcut. Inactive cron jobs are prefixed by `#!!` in front of their schedule expressions.

`#!# Cronios Crontab`

`# This is my description`
`* * * * * Speak Random Number Every Minute`

`# Another Cron Job`
`* 12 * * * Backup my files at noon`

`# This cron job will be inactive when imported`
`#!! * * * * 1-5 Run every minute every weekday`

You can also add the following special strings after the shortcut:

- {{requiresNetwork}} - This will enable the **Requires Network Access** option in the cron job.
- {{requiresInteraction}} - This will enable the **Requires Interaction** option in the cron job.
- {{fuzzyStar}} - This will enable **Fuzzy *️⃣** evaluation for your cron job.
- {{notifyShortcut}} - This will send the **Cronios Dictionary** to the shortcut when run.
- {{lockDetection}} - if enabled, the shortcut will not run if the device brightness is 0. 

>Note: Cronios does not allow importing of notification, sound, and exclude from success notification options, as this is considered to be a user preference.

***

<span id="third-party-import" class="section-header"></span>
## Third-Party Import of Cron Jobs Into Cronios
Third-party shortcut developers can launch Cronios in Import mode simply by running Cronios with a valid Cronios Crontab file as input.

![Third-party shortcut developers can easily import cron jobs into Cronios](https://atow.files.wordpress.com/2018/12/image-5.png?w=1280)

>Note: If the user has disabled **Allow External cron Job Creation**, this operation will fail. 

<span id="notify-shortcut-cronios-dictionary" class="section-header"></span>
## Notify Shortcut and the Cronios Dictionary
In order to let shortcuts know that they might be running in the background, Cronios can send a small dictionary as initial input to the shortcut. The dictionary currently contains the following information:

`{
	"Cronios": true,
	"date": ISO 8601 Date and Time
	"lastRun": ISO 8601 Date and Time when the shortcut was last run
	"brightness": a value between 0 and 1
}`

A shortcut that requires Shortcuts to be in the foreground might use this information to display a banner notification prior to running the **Open App** command to switch back to the Shortcuts application. 

A shortcut that retrieves information from the web might fetch less information in order to reduce the frequency of timeouts, which would stop Cronios, forcing the user to manually restart it.

<span id="localization" class="section-header"></span>
## Localization
Cronios is available in English, but the application is fully ready to be localized. I have developed an application, Localization Helper, that will assist you in localizing Cronios into your language.

> [**Download Localization Helper from RoutineHub &raquo;**](https://routinehub.co/shortcut/1931)

When the localization file is complete, either submit a pull request on [my GitHub page](https://github.com/adamtow/) or [contact me](mailto:cronios+localization@tow.com).

***

<span id="security" class="section-header"></span>
# Security
iOS is by design a very secure operating system, but the Shortcuts application has a number of security concerns that you must be aware of.

![Shortcuts have full access to all data stored in the Shortcuts directory on iCloud Drive](https://atow.files.wordpress.com/2019/01/Shortcuts-and-Security.png?w=1280)

Normally, applications are sandboxed by iOS. This generally means an application can't access information from another application (by a different developer). There are ways to access this data, but it requires the user to grant permission (i.e. by navigating to the file in a document picker). 

All Shortcuts have access by default to the Shortcuts directory on iCloud Drive. This means **every single shortcut can access every other shortcuts' files**.

>If there's anything that resembles the [Newton OS data soup architecture](https://en.m.wikipedia.org/wiki/Newton_OS), it's the Shortcuts directory and JSON config files. 

Let that sit in for a moment. Every Shortcut can automatically access data that other Shortcuts write to the Shortcuts directory on  iCloud. 

So, just as you should be careful what third-party shortcuts you add to your iOS device, you should periodically look at your Crontab to ensure every active cron job is one that you added manually or imported from a third-party shortcut.

***

<span id="known-issues" class="section-header"></span>
# Known Issues
Below is a list of currently known issues with Cronios:

## Step Values don't cross over the Saturday to Sunday barrier
Say you have the following cron expression:

`0 12 * * 1/2`

This describes a schedule that fires at 12:00 every 2nd day of the week starting on Monday:

- Monday at 12:00 pm
- Wednesday at 12:00 pm
- Friday at 12:00 pm
- Sunday at 12:00 pm
- Monday at 12:00 pm
- …

In its current implementation, Cronios considers Sunday the beginning of the week so it would fail using this step value calculation.

>**Background**
There are instances where Javascript evaluation (Get Contents of Web Page) hangs during processing within Cronios' repeat loop. As a result, I am using pure Shortcut actions to compare the current date with a cron job's expression. 

## Log files always record in local time
If you have the **Use Local Time** preference disabled, your cron schedules will be evaluated according to Coordinated Universal Time (UTC), but the logs will remain in local time. 

## Shortcuts stops Cronios with an -9806 error
Sometimes Cronios is running just fine for hours at a time before failing with a cryptic error from the Shortcuts app; other times it displays the same error after only a few minutes. I'm still trying to diagnose the root cause of this.

![May you never see the -9806 error while running Cronios](https://atow.files.wordpress.com/2019/01/9806-Error.-May-you-never-see-this-while-running-Cronios..png?w=1280)

***

<span id="version-history" class="section-header"></span>
# Version History
- 1.0.0 (2018-12-30) - Initial release.
- 1.0.1 (2018-12-30) - Fixed error when after running Check for Updates.
- 1.1.0 (2019-01-19) - Keep-Alive Beep. Cronios Watcher using Scriptable support. Additional options added to cron jobs: Priority, Lock Detection, and Exclude From Success Notifications. Crontab is sorted according to active status, priority and description. Auto Save of cron jobs from the New/Edit Cron Job screen. New icon set. Performance improvements. Documentation updates. Check for Updates checks RoutineHub directly. Bug fixes.
- 1.2.0 (2019-01-21) - Cron Job Importer detects cron jobs with the same name/shortcut combination. Cronios Watcher called at beginning of cron job evaluation.
- 1.3.0 (2019-02-10) - Matches look and feel of GeoCuts and WatchCuts. Cron Job Assistant guides you in creating cron jobs. Repeat Interval provides fine-grained control over how often a cron job can run its shortcut. Bug fixes and performance improvements.
- 1.3.1: Caching of main menu and cron jobs. Don't call Cronios Watcher in Run Once mode. Fixed lock detection bug.
- 1.3.2: Run/Edit Shortcut now runs properly from the Edit Shortcuts screen.
- 1.3.3: Added Check Online preference to work around Apple certificate error with Get Current IP action.
- 1.3.4: Fixed documentation for Apple bug with Get Current IP action.
- 1.3.5: Use Local IP instead of External IP to see if the device is online.
- 1.4.0 (2019-03-28) - Support for Shortcuts 2.2. Refactored localization and variable names.

<span id="license" class="section-header"></span>
# License

>Copyright © 2018-2019 Adam Tow • tow.com • @atow
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
