# Cronios

**Run Your Shortcuts on an Automatic Schedule!**
Cronios is a full-featured shortcuts scheduler on iOS. Configure your shortcuts to run automatically in the background on the dates, times, ranges, and intervals you specify, without any interaction on your part!

![Cronios, the Shortcuts Scheduler for iOS](https://atow.files.wordpress.com/2018/12/55ACB6B3-6224-4C35-A4E1-12A0348C5F64.png?w=1280)

## Table of Contents

- [From Manual to Automated Shortcuts](#overview)
- [System Requirements](#system-requirements)
- [Download Cronios](#download)
- [Getting Started](#getting-started)
- [Exploring the Cronios Interface](#interface)
- [Editing Cron Jobs](#cron-jobs)
- [Understanding Cron Schedule Expressions](#expressions)
- [Fuzzy *️⃣](#fuzzy-star)
- [Launching Cronios](#launching-cronios)
- [Keeping Cronios Active](#keeping-cronios-active)
- [Running Other Shortcuts Outside of Cronios](#running-other-shortcuts)
- [Settings](#settings)
- [Developing Shortcuts Optimized for Cronios](#developer)
- [Cronios Daemon Helper Shortcut](#cronios-daemon)
- [Security](#security)
- [Known Issues](#known-issues)
- [License](#license)

<span id="overview" class="section-header"></span>
## From Manual to Automated Shortcuts

Shortcuts are a fantastic addition to iOS 12, allowing you a quick way to automate tasks with your apps. Unfortunately, the only way to invoke a shortcut is via a manual action:

- Tap on a shortcut in the Shortcuts app
- Say a voice command to Siri
- Choose a shortcut from the Share Sheet
- Tap on a shortcut that was added to the iOS Home Screen.
- Tap on a link from a notification banner or in a third-party application. 

Cronios adds a third way to run shortcuts: on a schedule and automatically in the background. In doing so, Cronios opens up a whole new set of possibilities for automating your iOS device.

>Scheduled shortcuts should be a built-in feature of iOS. [Sherlock this idea now, Apple!](https://en.m.wikipedia.org/wiki/Sherlock_%28software%29)

Consider what is possible when your shortcuts can run with no intervention on your part other than activating Cronios (and making sure it remains active):

- Back up your shortcuts every three hours from 9 a.m. to 5 p.m. during the work week.
- Turn on [Do Not Disturb mode based on events](https://routinehub.co/shortcut/1371) in your calendar.
- Deliver a customized notification when [your battery level reaches a certain threshold](https://routinehub.co/shortcut/1370).
- Collect information from the web while you are sleeping for review in the morning.
- Provide an audible alert every five minutes of interval training to push it hard for one minute.
- Send emails on your behalf during the day.
- Take a photo at periodic times and email them to you.
- Display an hourly status report of the current time, online status, battery level, weather, upcoming events & reminders and step count.
- Prompt you periodically to see how you are feeling during the day. Results are recorded to a text document or uploaded automatically to a spreadsheet in the cloud. 

![Cronios on the iPad Pro](https://atow.files.wordpress.com/2018/12/ivborw0kggoaaaansuheugaadgaaaajucayaaad194waaaacxbiwxmaaastaaaleweampwyaabc-2-3-1.png)

>**Cronios, a Marriage Beween Cron and iOS**
Cron is a [time-based scheduling tool](https://en.m.wikipedia.org/wiki/Cron) frequently found on Unix-like operating systems such as MacOS and Linux. It allows people to set up tasks which run at fixed times, date ranges and intervals. Cronios brings the scheduling power and flexibility of cron to iOS.

Excited about these possibilities? Get started automating iOS and Shortcuts with Cronios in three simple steps:

1. Set a schedule based on a fixed date, time, range, or interval
2. Assign a shortcut optimized for background operation[^1]. 
3. Run Cronios. 

As long as Cronios is active[^2], it will check every minute for any shortcuts that need running. If there’s a schedule match, your shortcut will automatically run in the background!

> If your iOS device goes to sleep, you can configure your shortcuts with Fuzzy *️⃣ schedules to run within a set timeframe (i.e. once per hour at any time during the hour).

<small>[^1]: Some shortcuts work more effectively in the background than others. You may need to modify your favorite shortcuts to work with Cronios.</small>

<small>[^2]: Cronios tries its best to stay awake, but it is still subject to how iOS treats background operation of applications, most notably the Shortcuts app itself. Please read the [section on tips to keep Cronios running as long as possible](#keeping-cronios-active) and using [Fuzzy *️⃣ schedules](#fuzzy-star) for more details.</small>

<hr />

<span id="system-requirements" class="section-header"></span>
## System Requirements

Cronios runs on devices with iOS 12 with Shortcuts 2.1.2 (or greater) installed. The Cronios shortcut is free to download and use. The source code is licensed under the [MIT License](#license).

Content, logs and preferences are stored separately in iCloud Drive for each device you own[^3], so you can use Cronios with multiple iPhones and iPads at the same time.

![Cronios features device-specific settings](https://atow.files.wordpress.com/2018/12/img_0044.png?w=1280)

<small>[^3]: Cronios uses the Device Name in Settings &raquo; General &raquo; About &raquo; Name to distinguish between devices. It is not recommended to run Cronios on devices that share the same name.</small>

<hr />

<span id="download" class="section-header"></span>
## Download Cronios

The latest version of Cronios can be found on RoutineHub:

<a href="https://routinehub.co/shortcut/1267" class="button button-primary">Download Cronios from RoutineHub.co</a>

You can check for updates by choosing **Check for Updates…** in Settings. Cronios makes use of [UpdateKit](http://www.mikebeas.com/updatekit/) to manage the update process. If you have problems upgrading, go back to the RoutineHub page to download and re-install. 

>Note: Cronios' shortcut name must remain "Cronios" for it to function properly. 

<hr />

<span id="getting-started" class="section-header"></span>
## Getting Started

The first thing you should do after installing Cronios is to create your first cron job (affectionately known as a `croncut` in Cronios parlance). A cron job consists of two required components:

- **Schedule**: A [cron schedule expression](#expressions) detailing when the shortcut should run.
- **Shortcut**: The shortcut that will be run when the current date matches the cron schedule expression.

1. Tap on Cronios from the Shortcuts Home screen. Be sure to [tap from the Shortcuts Home screen instead of the Edit screen](#launching-cronios). Cronios is made up of over 2,800 action steps, and visually running through all those steps will slow things down.
2. Tap on **☑️ My First Cron Job…**
3. Skip over the Schedule section for the moment. The first croncut you will create is set to run every minute (that's what the `* * * * *` means).
4. Tap ➕ **No Shortcut** to bring up the Shortcuts selection screen. Scroll through the list of your shortcuts or tap 🔎 Search to filter your list of shortcuts.
5. Choose a shortcut to run. For your first shortcut, try this [simple one that speaks a random number](https://routinehub.co/shortcut/1367). The screenshot below shows the Speak Random Number shortcut that you can use.<br />![Speak Random Number is a good starter shortcut for your first croncut](https://atow.files.wordpress.com/2018/12/4D62C328-B12C-47DA-B0C3-43455A86AA8D.png?w=270)

6. Tap **Save Changes**.
7. On the Cronios Home screen, tap **Run Continuously**.
8. Tap **Start**. 

![Creating your first scheduled shortcut]( https://atow.files.wordpress.com/2018/12/image-1.png?w=1280 )

Cronios will start up and wait until the next minute before processing your first cron job. If you chose the [Speak Random Number](https://routinehub.co/shortcut/1367) shortcut, you'll hear Siri's voice run at the top of the minute and see a banner notification. Wait another minute, and it will run again. During this time, you can switch to another application or two.

> Cronios works great in Split View mode on the iPad.

Congratulations! You've just created and run your first scheduled shortcut!

To stop Cronios, return back to Shortcuts and tap the Stop button in the Cronios shortcut.

![Stop Cronios by tapping the stop button in the Shortcuts app](https://atow.files.wordpress.com/2018/12/008E2E2A-A4B2-4673-A8C7-ED187F672AAE.png?w=270)

<hr />

<span id="interface" class="section-header"></span>
## Exploring the Cronios Interface

Let's take a tour of the rest of the Cronios interface. The Home screen is segmented into the following sections:

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

![Cronios Home Screen](https://atow.files.wordpress.com/2018/12/13F89043-743A-4064-B7E7-260CAC4ECCDC.png?w=1280)

<span id="run" class="section-header"></span>

###  Run Commands
This section features the two commands used to launch Cronios in monitoring mode:

- **🔁 Run Continuously**: Cronios will monitor your Crontab continuously every minute starting with the next minute. Cron jobs that match the current date will run their assigned shortcuts in the background.
- **1️⃣ Run Once**: Cronios will evaluate the Crontab once for the current time. Any matching cron jobs will run their shortcuts immediately. This is useful for testing your cron jobs or if you want to catch up on any potentially missed [Fuzzy *️⃣ scheduled jobs](#fuzzy-star).

<span id="crontab" class="section-header"></span>

### Crontab 
The Crontab is the list of cron jobs on your iOS device. Each cron job lists the following information:

-  ☑️ or ⬜️: If checked, the cron job is active and will be evaluated every minute when Cronios is running. Tap to enable and disable the cron job.
- **Description**: a short description on what the cron job does. Tap to edit the description.
- **Expression**: a valid cron schedule expression. Tap to bring up the [Cron Expression Editor](#cron-expression-editor). 
- **Shortcut**: the name of the shortcut that will run. Tap to [select another shortcut](#shortcut-select). 

Additional icons may be shown next to the shortcut indicating the following options associated with the cron job:

- **Requires Network Access** ☁️ : The shortcut needs network connectivity to function. If you are offline, Cronios will not run this cron job.
- **Requires User Interaction** ✋🏻 : The shortcut may require user interaction within the Shortcuts application.
- **Missing** ❓: The shortcut could not be found. It may have been deleted or renamed.
- **Fuzzy** *️⃣: The cron job will run in [Fuzzy Star Mode](#fuzzy-star). Cron jobs in this mode will run once per unique match.  
- **Display Notification**💬: A notification banner will appear when the assigned shortcut runs.
- **Play Sound** 🔔: The notification banner will be accompanied by a sound.
- **Notify Shortcut** 📗: The [Cronios dictionary](#notify-shortcut-cronios-dictionary) will be sent to the shortcut. Developers can use this dictionary to change operations depending on how the shortcut was launched (i.e. manually or in the background via Cronios).

>Note: You can export your Crontab into a human-readable format by choosing **Export Crontab…** in Settings. 

Below the list of cron jobs are the **🚥 Bulk Edit…** and ✅ **Bulk Edit All…** commands. Use them to activate, deactivate, delete multiple cron jobs at once. You can also clear the last run status of selected cron jobs, which is useful if you are using cron jobs in [Fuzzy *️⃣ mode](#fuzzy-star) and want to run them again during the same matched schedule.

<span id="actions" class="section-header"></span>

### Actions

- **➕ New Cron Job**: Create a new cron job
- **📥 Import Cron Jobs**: Import multiple cron jobs at a time. Input is a text string that must adhere to the [**Cronios Crontab** format](#cronios-crontab).
- [**✳️ Cron Expression Editor**](#cron-expression-editor): a tool for generating cron schedule expressions. Ever wonder what `*/5 9-17 10-15 4 *` means? Just enter the expression in the Expression Editor and get back a human-readable response of `every 5th minute past every hour from 9 through 17 on every day-on-month from 9 through 14 in April.`

<span id="about-and-settings" class="section-header"></span>

### Cronios

- **About**: Displays the about screen with the current version and build number.
- **🙋 Help**: Opens the documentation that you are reading now. 
- **🧧 Tip Jar**: Send me a tip if you have found Cronios useful for automating your shortcuts.
- **⚙️ Settings**: Adjust Cronios preferences, export your Crontab, import a Crontab, change languages, and more. 
- **Install Cronios Daemon Helper**: The [**Cronios Daemon** shortcut](#cronios-daemon) launches Cronios in "Run Continuously" mode with one tap from your iOS Home Screen or via Siri.

<hr />

<span id="cron-jobs" class="section-header"></span>
## Editing Cron Jobs

You've created your first cron job. Now, let's delve deeper into additional options you have when creating or editing cron jobs.

>A cron job is a scheduled shortcut.

Remember that a cron job is a scheduled shortcut. You define the schedule at which the shortcut should run whenever Cronios is active and running. Here is an overview of the **Edit Cron Job** screen:

![Editing a cron job in Cronios](https://atow.files.wordpress.com/2018/12/6130E0E9-A769-4F2B-A769-C4070BF98ABB.png?w=1280)

- **✅ Save Changes**: Save changes to the cron job and return to the Cronios Home screen.
- **☑️ or ⬜️ Active**: Check this if you want the cron job evaluated every minute. 
- **✏️ Description**: A short description for the cron job. Tap to edit the description.
- **🕑 Expression**: The cron schedule expression. 
- **Shortcut**: The shortcut to run when the schedule matches the current date. Tap to choose another shortcut.
- **▶️ Test Shortcut**: Run the shortcut from Cronios. This mimics what would happen if Cronios executed your shortcut on schedule.
- **🛠 Edit Shortcut**: Quit Cronios and re-open the Shortcuts application to the selected shortcut in edit mode.
- **Display Notification** 💬: Check this if you want a notification banner to appear when the assigned shortcut runs.
- **Play Sound** 🔔: Check this if you want a sound to accompany the banner notification.
- **Notify Shortcut** 📗: Check this if you want to send the [Cronios dictionary](#notify-shortcut-cronios-dictionary) to the shortcut. This will help your shortcut know that it's running in the background.
- **Requires Network** ☁️: Check this if your shortcut requires internet connectivity. Cronios will not evaluate this cron job until you are back on the network. 
- **Requires User Interaction** ✋🏻: Check this if the shortcut requires any kind of user interaction.
- **🗑 Delete**: Delete the current cron job and return to the Cronios Home screen.
- **❌ Close Without Saving**: Don't save any changes made to the cron job and return to the Cronios Home screen.
- **✅ Save Changes**: Save changes to the cron job and return to the Cronios Home screen.

>Note: When you are editing an existing cron job, your changes will not be saved until you tap on the **Save Changes** menu item.

<span id="shortcut-select" class="section-header"></span>
### Choosing Shortcuts 
Tap on the shortcut to bring up the **Shortcut Select** dialog. Here you can:

1.  Choose a shortcut.
2. Tap **🔍 Search** to filter your list of shortcuts by keyword. Separate multiple keywords with new lines. Exclude keywords by prefixing the search term with a '-'.
3. Tap **⬅️ Back** to return to the Edit Cron Job screen without making a choice.

![Organize your shortcuts with LaunchCuts](https://atow.files.wordpress.com/2018/12/90BA635C-2DE5-4739-B9D7-A677CA5CEDD8.png?w=270)

### Testing the Shortcut
After you have selected a shortcut, you can test it by tapping on the **▶️ Test Shortcut** menu item below your shortcut's name. This will mimic what happens when your shortcut is run by Cronios.

- A notification will appear if you have checked **Display Notification 💬**.
- A sound will accompany the notification if you have **Play Sound with Notification 🔔**checked.
- The Cronios Dictionary will be sent to your shortcut if you have **Notify Shortcut 📗** checked.
- An alert will appear, and your shortcut will not run if you have **Requires Network Access ☁️** checked, and if you are offline. 

### Editing the Shortcut
Tap **🛠 Edit Shortcut…** to quit Cronios and edit your shortcut. You will be temporarily redirected to a mobile Safari page, which will prompt you to open the Shortcuts app. Tap Open to return to Shortcuts and the selected shortcut to the Edit screen.

<hr />

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

<span id="cron-expression-editor" class="section-header"></span>
### Cron Expression Editor

The **Cron Expression Editor** (CEE) is a tool to help you build cron schedule expressions for your cron jobs. You access the CEE by either tapping on the **🕑 Expression** menu item on the **Edit Cron Job** screen or by tapping the **✳️ Cron Expression Editor…** menu on the Cronios Home screen.

![Cron Expression Editor]( https://atow.files.wordpress.com/2018/12/ivborw0kggoaaaansuheugaabs0aaao4cayaaac8jokaaabgmldq1bzukdcielfqzyxoty2ltiu-2.png?w=270)

The CEE window displays the following information at the top of the menu:

- **Expression**: A ✅ or ❌ denotes whether the expression is valid or invalid
- **Explanation**: a human-readable version of the expression
- **Date**: The custom date or current date. A ✅ or ❌ denotes whether the expression matches the date shown.
- **Date UTC**. The custom or current date in UTC time format. A ✅ or ❌ denotes whether the expression matches the date.
- **minutes** : Tap this to adjust the minutes component of the expression.
- **hours** :  Tap this to adjust the hours component of the expression.
- **dayOfMonth** :  Tap this to adjust the day of the month component of the expression.
- **month** :  Tap this to adjust the month component of the expression.
- **dayOfWeek** :  Tap this to adjust the day of the week component of the expression.
- **Manually Input Cron Expression** : Open a text input box and manually enter the cron expression.
- **Test with Current Date** : Redisplays the CEE using the current date.
- **Test with Custom Date** : Redisplays the CEE using a date that you specify.
- **Copy Expression to Clipboard** : Copies the currently displayed expression to the clipboard.
- **Save and Close**: If editing a cron entry, this will save the new expression object into your shortcut.

>Note: If you are comfortable writing cron expressions, you can use the **Manually Input Cron Expression…** command or turn off use of the CEE altogether in Settings.

Tapping any of the minutes, hours, dayOfMonth, month, or dayOfWeek menus will display a second menu with a choice of the following options. 

- **Every**: This matches every value for the given component and is represented by the * character. So, for minutes, that would mean 0-59. For month, it would go from 1-12.
- **By Specific Value** : Select a specific value for your expression component. You can select multiple values in this list (i.e. hours 9, 11, 13, 15, 17).
- **By Range** : Choose a starting and ending range for the expression component (i.e. 1-15 for dayOfMonth).
- **By Step Value**: This lets you create an expression where you can retrieve every Nth expression component. For example, every 2nd hour after 9 a.m. can be written in one of two ways:

`* 9,11,13,15,17 * * *`

Alternatively, it can be written as follows using step values:

`* 9-17/2 * * *`

To a machine, this reads as every 2nd hour starting from 9:00 to 17:00.

Tap **Save and Close** to return to the Edit Cron Job screen. Your edited cron job will now feature the new expression. Remember to tap **✅ Save Changes** to save your edited cron job back to the Crontab. 

>The Cron Expression Editor can be used outside of creating and editing cron jobs. Tap on **✳️ Cron Expression Editor…** from the Cronios Home screen to experiment!

<hr />

<span id="fuzzy-star" class="section-header"></span>

## Fuzzy *️⃣
Because Cronios may not always be running on your iOS device, you may experience situations where your precisely defined cron jobs miss their schedules. For instance, say you want to run a backup script at 12:00 pm every day. In normal cron parlance, you would enter:

`0 12 * * * Backup Shortcut`

If Cronios were running at noon, it would run the Backup Shortcut on time. However, your iPhone might be locked at that exact time. While some apps can work in the background, there's no guarantee that Shortcuts and Cronios will be running. If this is the case, Cronios would miss the schedule and the Backup Shortcut would not have run. 

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

<hr />

<span id="launching-cronios" class="section-header"></span>
## Launching Cronios

Tapping play while viewing Cronios' code will cause Shortcuts to visually run through the 2800+ actions, which takes time and consumes a lot of Shortcuts' resources. 

>Unless you're a developer and want to see what's happening underneath the hood of Cronios, don't run Cronios from the Edit screen in Shortcuts.

Rather, run Cronios from the Shortcuts Home screen or use the **Cronios Daemon** shortcut for faster access to Cronios via Siri or from the iOS Home screen. 

![Launch Cronios from the Shortcuts Home screen — not from the Edit screen — or use the Cronios Daemon shortcut.](https://atow.files.wordpress.com/2018/12/7FF39B4B-9A83-487C-B62F-5EACAD434A2C.png?w=1280)

The **Cronios Daemon** shortcut comes packaged with Cronios. Choose **Install Cronios Daemon Shortcut…** from the Home screen or Settings. You'll be redirected to a Safari page where you can tap on a link to install it in Shortcuts. From there, add the shortcut to your iOS Home screen and give it a Siri activation phrase, such as "Activate Cronios".

![Running the Cronios Daemon](https://atow.files.wordpress.com/2018/12/7F800F0F-7591-423D-974F-7F89BDB69F60.png&w=270)

Now, at any point during the day, you can say, "Activate Cronios" to start monitoring your Crontab.

<span id="keeping-cronios-active" class="section-header"></span>
## Keeping Cronios Active
Since Cronios is not part of the iOS operating system, keeping it active in the background is a delicate task.

If you have Cronios running in the foreground (i.e. the Shortcuts app is the active application), it will not cause your iOS device to sleep, regardless of your Auto-Lock preference in Settings &raquo; Display and Brightness. This is because the shortcut is continually monitoring your Crontab every minute; as a result, iOS thinks that you are actively using it and won't go to sleep.

>If you use an iPad that's always plugged in, this is great because you can use Split View to keep Cronios in the foreground. 

Of course, you didn't buy your iOS device there just to watch it work for you. You'll be constantly switching between apps on your iPhone or iPad. Cronios will continue to run in the background until iOS decides to suspend it (and the Shortcuts app). Here are some techniques to keep it active and running in the background:

1. Set the **Wait Interval** to a lower number. This will cause Cronios to ping itself more often during the one minute wait cycle. Remember, Cronios won't re-evaluate the Crontab until the next minute.
2. Enable **Use Evaluation Notification** to have a banner notification displayed during every wait interval.
3. Turn on the **Use Silent Audio** preference. Periodically during every minute wait cycle, Cronios will ”speak“ a silent phrase in the attempt to keep the Shortcuts app active. Note that if you are listening to music, enjoying a podcast, or watching a video, this will cause the audio to duck out for a brief moment.
4. Use Split View if you are running Cronios on an iPad. Doing this will give Shortcuts more increased priority from iOS than if it was running in the background. 
5. If you run an app that employs background processing like Music, Podcasts or Location Services, Cronios may run a little bit longer in the background while the iOS device is locked.

![Cronios runs great in Split View on the iPad](https://atow.files.wordpress.com/2018/12/ivborw0kggoaaaansuheugaadgaaaajucayaaad194waaaacxbiwxmaaastaaaleweampwyaabc-2-1-1.png?w=1280)
 
### How Long Can Cronios Run?
Unfortunately, There is no definitive answer. iOS is very much of a black box when it comes to how it handles background processing. I've personally seen Cronios run for four hours straight before stopping unexpectedly. I've had other instances where Shortcuts gives me a cryptic error (-9806) while terminating Cronios after just ten minutes. Your experience may vary. Let the community know how long you can get Cronios to run!

>Note: Remember, your cron jobs and shortcuts will not execute if Cronios is not running.

I like to run shortcut that speaks something on a periodic basis. If I don't hear the prompt after some time, I'll know to check on the status of Cronios. 

### Battery Life
Battery life is a concern if you're going to be running Cronios in continuous monitoring mode for long stretches of time. When Cronios is active, it's constantly pinging itself and evaluating the crontab several times a  minute. With great automation power comes the tradeoff of diminished battery life, so get that extra long charging cable cable and stay plugged in!

>All the better to have a [croncut that reminds you of your battery level](https://routinehub.co/shortcut/1370) throughout the day!

<hr />

<span id="running-other-shortcuts" class="section-header"></span>
## Running Other Shortcuts Outside of Cronios
Remember Cronios is a shortcut itself and is designed to run indefinitely until it is terminated by the user or iOS. You should be aware of the times and situations when you can run other shortcuts at the same time as Cronios.

Whether or not a shortcut outside of Cronios will run depends on where and how the shortcut was invoked:

- Shortcuts App 
- Share Sheet 
- Siri Shortcuts 
- Shortcut Widgets in Notification Center
- iOS Home Screen

### Shortcuts App
If Cronios is running and you go to the Shortcuts app to run a shortcut, you need to tap Cronios' stop button before you can run your shortcut.

### Share Sheet
You can use shortcuts from the iOS Share sheet as long as the shortcut does not switch back to the Shortcuts application.
 
### Siri Shortcuts
If you use Siri to run a shortcut, it will terminate Cronios (if it is currently running) and run the shortcut.

### Shortcut Widgets in Notification Center
Simple widgets that do not switch back to the Shortcuts app should work even while Cronios is running. Complicated shortcuts may prematurely terminate Cronios.

### iOS Home Screen
If Cronios was launched from the Shortcuts app and you tap on another shortcut from the iOS Home Screen (which you add via the Add to Home Screen feature), the Shortcuts app will launch but your shortcut will not run until you tap the stop button in Cronios.

However, if Cronios was launched from the Home Screen (i.e. via the Cronios Daemon Helper shortcut), tapping a different shortcut from the Home Screen will launch Shortcuts, close Cronios, and run your shortcut.

<hr />

<span id="settings" class="section-header"></span>
# Settings

Cronios is highly configurable. You access Settings from the Cronios Home screen. Swipe to the bottom of the menu and tap **Settings**. The Settings panel is divided into five main sections:

1. [General Settings](#general-settings)
2. [Remain Active Options](#remain-active)
3. [Cron Job Defaults](#cron-job-defaults)
4. [Advanced Options](#advanced-options)
5. [Tools](#tools)

![Cronios Settings]( https://atow.files.wordpress.com/2018/12/image-3.png?w=640 )

<span id="general-settings" class="section-header"></span>
##  General Settings

###  Use Local Time
By default, Cronios matches schedules using the local time of the device. Disable this to make Cronios use [Coordinated Universal Time](https://en.m.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC) instead. Remember your cron jobs will need their expressions modified to support whatever setting you choose. 

### Use Cron Expression Editor 
By default, editing a cron job's schedule opens up the **Cron Expression Editor**. If you are familiar with entering cron expressions manually, disable this preference. In place of the CEE, a standard Ask For Input dialog will appear when editing a cron job's schedule.

<hr />

<span id="remain-active" class="section-header"></span>
## Remain Active
These options help keep Cronios awake in the background.

### Wake Up Interval
In between one minute checks of your Crontab, Cronios wakes up on a timed interval in the attempt to keep itself active in the eyes of iOS. You can adjust this wake interval between 10 and 45 seconds. 

>Note: If you have **Evaluation Notification** turned on, this will cause a banner notification to appear on your iOS device every time this interval is triggered. Keep this in mind if you set it to a low number like 10 seconds.

### Evaluation Notification
This displays a banner notification during each wait interval.

### Silent Audio
During the wake up period, you can configure Cronios to speak an invisible character as another way to keep itself awake in iOS. While iOS does not play any sound, it does duck the audio if you are currently listening to music, podcast, video, etc. when Cronios is playing back the silent audio.

<hr />

<span id="cron-job-defaults" class="section-header"></span>
## Default Cron Job Options
This section allows you to set default options for new cron jobs.

### Display Notification
Determines whether a cron job will display a banner notification right before shortcut execution.

### Play Sound
Set this if you want a sound to accompany the notification. 

>**What about custom sounds?**
Unfortunately, the **Play Sound** action requires Shortcuts to be in the foreground to play the audio. So, for the time being, Cronios cannot play custom sounds for when your shortcuts run. 

### Use Fuzzy *️⃣ Evaluation 
Sets new cron jobs to evaluate their schedules using the Fuzzy *️⃣ algorithm. Fuzzy *️⃣ executes a cron job once per unique matched schedule. See the [section on Fuzzy *️⃣ for more details](#fuzzy-star).

### Notify Shortcut
Sends the [Cronios Dictionary](#notify-shortcut-cronios-dictionary) as input to the shortcut.

<hr />

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

<hr />

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
Uses [UpdateKit](http://www.mikebeas.com/updatekit/) to check for updates to Cronios.

### 💥 Reset Settings…
This allows you to reset Cronios back to factory settings without removing any of your data. Or, you can erase all content and settings from your device. Other devices that use Cronios will not have their data affected.

### 🧧 Tip Jar…
Have you been enjoying using Cronios? Send me a tip as a sign of your appreciation! Thanks in advance!

### Share Cronios…
Share Cronios with friends, co-workers, and family.

### Home
Returns you to the Cronios Home screen.

 <hr />

<span id="developer" class="section-header"></span>
# Developing Shortcuts for use with Cronios
Cronios provides the framework for creating background-aware shortcuts. It's up to developers to take full advantage of Cronios by writing great shortcuts that work in the background and on schedule.

This section provides useful information on how you can take full advantage of Cronios. 

- [Developing Background-Aware Shortcuts](#background-aware-shortcuts)
	- [User Interaction](#user-interaction)
	- [Banner Notifications](#banners)
	- [Open App](#open-app)
	- [Network Access](#network-access)
- [Notify Shortcut and the Cronios Dictionary](#notify-shortcut-cronios-dictionary)
- [Testing Your Shortcuts](#testing)
- [Cronios Crontab Format](#cronios-crontab)
- [Third-Party Import of Cron Jobs Into Cronios](#third-party-import)

<span id="background-aware-shortcuts" class="section-header"></span>

## Developing Background-Aware Shortcuts

Many shortcuts just work when run as a cron job by Cronios. Others require some tweaking to operate in the background without causing Cronios to crash, which would prevent other cron jobs from executing on schedule. 

<span id="user-interaction" class="section-header"></span>

## User Interaction
Unless you inform them, your users will have no way of knowing that your shortcut has displayed a menu or alert if the Shortcuts application is in the background. If the user never returns to the Shortcuts application, Shortcuts may ultimately terminate both your shortcut and Cronios.

With this in mind, you can do several things to alert the user's attention that your shortcut requires attention:

1. Display a banner notification. 
2. Display a banner notification with sound. 
3. Switch back to the Shortcuts app using the Open App action in Shortcuts.

<span id="banners" class="section-header"></span>
## Banner notifications
Displaying a banner notification is the least obtrusive method for asking the user to return to the Shortcuts app, but there's a chance the user will not see it if you don't accompany it with a sound.

![Notifying the user with a audible notification and awaiting return to Shortcuts](https://atow.files.wordpress.com/2018/12/8D2D8CB3-559E-4AD3-94D8-693453134027.png?w=270)

If **Do Not Disturb** mode is turned on, no banners (or sounds) will be displayed to the user. In this case, Cronios and your shortcut may be waiting indefinitely for the user to return to the Shortcuts application.

>Note: Make sure your shortcuts can detect the [**Cronios Dictionary**](#notify-shortcut-cronios-dictionary) so it can conditionally branch depending on whether it was invoked by the user or by Cronios.

<span id="open-app" class="section-header"></span>
## Open App
The **Open App** action switches the iOS device immediately to the selected application. It works whether Shortcuts is in the foreground or background. As a result, it is the most effective action, but also potentially the most jarring for the user since there is no built-in notification when the app switches.

>Assuming you only switch to one application, the top-left corner of the screen will have small back button to the previous application.

If you absolutely must use this technique, give the user some indication of what's happening via a banner notification and sound.

![Using Open App to force a switch back to the Shortcuts app](https://atow.files.wordpress.com/2018/12/DE900696-EC48-476A-BDB4-809DB21387A6.png?w=270) 

>Note: Open App is your only recourse if your shortcut requires the use of actions that employ things like Location Services, Weather, or Play Sound. If you try to run these tasks in the background, Shortcuts will raise an error and stop both your shortcut and Cronios._

Open App does not provide any input to the selected app. So, if you require sending information to that application, you can:

1. Save data into a location the app can read
2. Return to Shortcuts and use the **Open URL** or **Open X-Callback URL** action. These two actions do not work when Shortcuts is running in the background.

## Network Access When Offline
If you are offline and you have a cron job scheduled that requires network access, you don't want its shortcut to run. If it did, Shortcuts would throw up an alert and terminate Cronios.

In this case, be sure to check the **Requires Network Access** ☁️ checkbox. Doing so will prevent your cron job from being evaluated if the iOS device is offline.

<span id="timeouts" class="section-header"></span>

### Timeouts
Don't think that you can download a huge file in the background and expect Shortcuts to make it through to the end. Your shortcut's network request may time out, causing an error to appear in the Shortcuts application, which will terminate Cronios prematurely. 

>Note: Here's hoping that Apple adds some solid error checking and handling for shortcut developers so we can better deal with situations like these.


### Location Services
If you want to use shortcut actions that employ location services such as **Get Current Weather** or **Get Current Location** you must return to the Shortcuts application prior to calling these actions. Furthermore, it's advisable to add a wait step before the calls to **Open App** and **Get Current Weather/Location** in order to give Shortcuts time to prepare itself. Not adding the wait step will cause an error to appear in Shortcuts, which will terminate Cronios.

<hr />

<span id="testing" class="section-header"></span>
## Testing Your Shortcuts
The best way to test your shortcut is within Cronios itself. Create a cron job and assign your shortcut to it. Don't worry about setting a schedule for the moment. 

Tap **▶️ Test Shortcut** to run your shortcut. 

Experiment with running your shortcut with the following cron job options checked and unchecked:

- A notification will appear if you have checked **Display Notification 💬**.
- A sound will accompany the notification if you have **Play Sound with Notification 🔔**checked.
- The Cronios Dictionary will be sent to your shortcut if you have **Notify Shortcut 📗** checked.
- An alert will appear, and your shortcut will not run if you have **Requires Network Access ☁️** checked and if you are offline. 

<hr />

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

>Note: Cronios does not allow importing of notification and sound settings, as this is considered to be a user preference.

<hr />

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
}`

A shortcut that requires Shortcuts to be in the foreground might use this information to display a banner notification prior to running the **Open App** command to switch back to the Shortcuts application. 

A shortcut that retrieves information from the web might fetch less information in order to reduce the frequency of timeouts, which would stop Cronios, forcing the user to manually restart it.

<span id="localization" class="section-header"></span>
## Localization
Cronios is available in English, but the application is fully ready to be localized. 
If you want to help provide a translation for Cronios, [contact me](mailto:cronios+localization@tow.com)!

<hr />

<span id="security" class="section-header"></span>
# Security
iOS is by design a very secure operating system, but the Shortcuts application has a number of security concerns that you must be aware of.

![Shortcuts have full access to all data stored in the Shortcuts directory on iCloud Drive](https://atow.files.wordpress.com/2018/12/9A037571-A513-4301-BCF7-3BE749D23589.png?w=270)

Normally, applications are sandboxed by iOS. This generally means an application can't access information from another application (by a different developer). There are ways to access this data, but it requires the user to grant permission (i.e. by navigating to the file in a document picker). 

All Shortcuts have access by default to the Shortcuts directory on iCloud Drive. This means **every single shortcut can access every other shortcuts' files**.

>If there's anything that resembles the [Newton OS data soup architecture](https://en.m.wikipedia.org/wiki/Newton_OS), it's the Shortcuts directory and JSON config files. 

Let that sit in for a moment. Every Shortcut can automatically access data that other Shortcuts write to the Shortcuts directory on  iCloud. 

So, just as you should be careful what third-party shortcuts you add to your iOS device, you should periodically look at your Crontab to ensure every active cron job is one that you added manually or imported from a third-party shortcut.

<hr />

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

<hr />

<span id="license" class="section-header"></span>
# License

>Copyright © 2018 Adam Tow • tow.com • @atow
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

