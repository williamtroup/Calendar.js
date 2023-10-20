# Calendar.js - Change Log:

## Version 2.9.3:
- Added a new setting "minutesBetweenSectionsInViews" (defaults to 30), which states the minutes that should be used between headers/rows in all views for time displays.
- Added a new setting "timelineViewDefaultAxis" (defaults to "group"), which states the default axis the Timeline view should use.
- Updated SHARE.sh to use Python 3 for running a simple HTTP Server.

<br>


## Version 2.9.2:
- Merged custom trigger internal functions into a single internal function with proper argument passing.
- Merged duplicate code for handling event custom triggers and general event assignments.
- Fixed a fault that caused the notification text for "eventAddedText" option to show "undefined" when adding a new event.
- Fixed a fault that prevented visible groups (set via the Side Menu) from working when the custom trigger "onEventsFetch" is set.

<br>


## Version 2.9.1:
- OK, sorry about this ... fixed a major rendering issue in CUSTOM_TRIGGERS.md.
- Added new CSS root variable "--spacing-shadow-size", which will allow you to change the shadow sizes.
- The DatePicker mode will now show correctly when an input could force the DatePicker to appear off the height of the window (will now appear above the input).
- Added a "View Full Day" button to the "Timeline" views title bar (which will show the Full Day view on the date selected, if not already open).

<br>


## Version 2.9.0:

#### **New Features:**
- Added a new Timeline view, which uses the "Group" event property (default, you can switch to "Location" or "Organizer Name") as the view axis for a single day.
- Added custom event, tooltip, and title bar rendering support for various areas (see "Custom Triggers" documentation).
- Added Full Month pin-up support! This shows an area above the Day Names header that will show custom images as the date changes (it also shows the current date by default).

#### **General Improvements:**
- Completely re-written view handling, which will ensure that the most recent view opened is the one being handled for the current action (search, export, etc).

#### **Full Day View:**
- Added a "View Timeline" button to the Full Day view title bar (hidden in mobile view).

#### **Full Week View:**
- The "Add Event" button will now default the add date to the start of the week being viewed.

#### **Full Month View (default):**
- The "Add Event" button now defaults to the current date if the todays month is in view (otherwise, it will default to the 1st of the viewing month/year).

#### **Full Year View:**
- The side menu button "Export Events" is now disabled in the full year view (proper year exporting is coming soon, instead of exporting everything).
- The "Add Event" button in the title bar will now default the add date to the beginning of the selected year.

#### **Widget Mode:**
- The "Add Event" button will now default the add date to the currently selected date.

#### **Custom Trigger Events:**
- Added a new custom trigger "onFullDayEventRender", which is triggered when an event in the Full Day view is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onFullWeekEventRender", which is triggered when an event in the Full Week view is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onFullMonthEventRender", which is triggered when an event in the Full Month view is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onAllEventsEventRender", which is triggered when an event in the All Events view is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onTimelineEventRender", which is triggered when an event in the Timeline view is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onWidgetEventRender", which is triggered when an event in the Widget mode is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onToolTipEventRender", which is triggered when a tooltip is rendered for an event (allowing custom rendering, or just a notification).
- Added a new custom trigger "onFullDayTitleRender", which is triggered when the Full Day views title is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onFullWeekTitleRender", which is triggered when the Full Week views title is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onTimelineTitleRender", which is triggered when the Timeline views title is rendered (allowing custom rendering, or just a notification).
- Added a new custom trigger "onFullMonthPinUpRender", which is triggered when the Full Month views pin-up is rendered (allowing custom rendering, or just a notification).

#### **Settings:**
- Added a new setting "isPinUpViewEnabled" (defaults to false), which states if the pin-up view is enabled in the Full Month view.
- Added a new setting "pinUpViewImageUrls" (defaults to []), which states the image URLs that should be used for the pin-up view in the Full Month view.
- Removed the redundant setting "showEmptyDaysInWeekViewText".
- Removed the redundant setting "showEmptyDaysInWeekView".

#### **Code Improvements:**
- Finished the variable re-structuring and renaming in the main constructor.
- Internal renames (the month display is now called Full Month).

#### **Fixes:**
- Fixed the Widget mode and Notification area using the wrong styles for fonts, colors, and spacing.
- Fixed a fault that allowed the current day to be viewed in the Full Day view when the day itself is not visible in the calendar (it now skips to the next visible day).
- Fixed a fault that caused the "Export Events" button in the Side Menu to remain visible (due to multiple views being open).
- Fixed a fault that caused dates in the other views to randomly change on auto-update when another view was recently opened.
- Fixed a fault that caused the search dialog to shift the currently active view being searched into a strange position.
- Fixed the CUSTOM_TRIGGERS.md documentation not rendering correctly.
- Fixed a CSS fault that caused the Search history drop-down to appear in slightly in the wrong place.
- Fixed the "Show empty days in the week view" setting still being available in the "Configuration" dialog.
- Fixed a CSS fault that cause the Full-Screen mode to display incorrectly when the Day Names header is disabled in the Full Month view.
- Fixed all the testing HTML files missing the viewport meta data.

<br>


## Version 2.8.4:
- Fixed a fault that caused the pin button (for switching to current day, month, year, etc) to use the wrong height in some sceneries.
- Fixed a fault that prevented the year drop-down menus on other calendar instances from closing when another menu was opened.
- Updated the test HTML files to use the latest version of Bootstrap.

<br>


## Version 2.8.3:
- Fixed "Export Events" failing due to a script error occurring when trying to convert Alert Offset times.

<br>


## Version 2.8.2:
- Fixed a fault that prevented the context menus on other calendar instances from closing when another context menu is opened.

<br>


## Version 2.8.1:
- In Widget mode, if the date is the current date, the widget will jump to the next day automatically when the day changes.
- Events in the Full Day/Week views can no longer be resized over the height of the day.
- Fixed a fault that caused events that overlap over several days to show on the days in the slightly wrong position.
- Removed the warnings around the RegEx used for validating URLs.

<br>


## Version 2.8.0:

#### **New Features:**
- Repeating events can now be edited as an entire series, or from a specific point forward (forward creates a new event, and stops the original event from that point).
- Added widget mode support, which will render a widget view solely for handling single days (event adding/editing enabled if turned on).

#### **UI Improvements:**
- Previous/Next buttons in all views are now visible by default in mobile mode.
- The view buttons on the main display's title bar are now separated with a divider line from the other buttons.
- Decreased the default border size from 1px to 0.5px (gives the calendar a more modern feel).

#### **Settings:**
- Added a new setting "isWidget" (defaults to false), which states if the calendar is a widget.

#### **Full Year View:**
- Moving Back/Forward through the years will force the scroll position to revert to the top (same as Full Day/Week views).
- Moving to the current full year auto-scroll the view to the current month (similar to how the Full Day/Week views work).
- Added the "Refresh" button to the toolbar (next to the "Current Year" button).
- When expanding a month, if the current month is already in view, no rebuild occurs.

#### **Fixes:**
- Fixed a major issue that prevented the events assigned to the buttons on the Message dialog from being reset.  This caused old events assigned to be called again.
- Fixed a fault that caused the Full Year view to use the last scroll position when opened from the All Events view.
- Fixed the "Expand" icon on the main display being visible in mobile mode (should be hidden, as with the other views).
- Fixed the title bar text being slightly misaligned (vertically) on all views when in mobile mode.
- Fixed the title bar text in all views sometimes being too long, which caused the buttons to jump down, making the title bar look strange.
- Fixed the Full Year view randomly jumping its scroll top position when the refresh timer fires.
- Fixed the Full Week views inner content height being set manually instead of being set to 100% (did not scale properly when adjusting variables).
- Fixed a fault that prevented events (in all views) from showing the right default colors (for example, All Day event was always shown in the normal event color).
- Fixed the side menu right border now showing the rounded corners correctly.
- Fixed some grammar mistakes in the documentation.
- Fixed a script error that occurred when pressing escape to close an open view.
- Fixed a fault that prevented the z-index counter from resetting when a view is manually closed.

<br>


## Version 2.7.2:
- The year-jumping buttons available for the DatePicker mode can now be shown in the regular calendar mode.
- Renamed the setting "addYearButtonsInDatePickerMode" to "addYearButtonsOnMainDisplay".
- Removed more replicated code.
- Fixed a CSS issue around the class "tab-control-selected" (missing calc(), which was causing active tabs to look a bit strange).
- Added a new setting "useAmPmForTimeDisplays" (defaults to false), which states if the times shown in the event/hour displays use AM/PM format.
- Fixed the Full Year view showing the current date in the next month as a previous day (can be confusing).
- Clicking the "Export Events" button in the Side Menu title bar will now close the Side Menu.
- Fixed a script fault that occurs when calling the public function "destroy()" when a calendar has not been rendered.
- Fixed a fault that caused all the dialogs, context menus, tooltips, and notifications to be removed for all calendar instances when the public function "destroy()" is called.

<br>


## Version 2.7.1:
- Fixed a SCSS issue with "repeating-linear-gradient" not using calc() for sizing.
- Completed CSS theming support! You can now change the Colors, Sizes, Spacing, Borders (etc.) to use CSS theme files!
- Removed repetitive code that builds the hours display for the Full Day/Week views.
- The Full Year view now shows the total number of events that are available per day in each month (little indicator).
- The title bar text shown in the Full Week view is now smaller when the viewing weekdays are in the same month of the year.
- Fixed the half-hour line in the Full Day/Week view overlapping the hours border by 1 pixel.

<br>


## Version 2.7.0:

#### **New Features:**
- Completely redesigned Full Week view, which now shows the days in a similar way to the Full Day view, with resizing, time dragging, and drag & drop support!

#### **Breaking Change Improvements:**
- Renamed CSS class "all-week-events-view" to "full-week-view".
- Renamed the setting "viewCurrentWeekEventsTooltipText" to "viewFullWeekTooltipText" (default value is now "View Full Week").
- Renamed the setting "viewWeekEventsText" to "viewFullWeekText" (default value is now "View Full Week").
- Renamed all internal JS code to reflect the rename from "All Week Events" to "Full Week".
- Renamed the setting "showTimelineArrowOnFullDayView" to "showTimelineArrowsOnViews".

#### **Full Year View:**
- Added full context menu support to the Day Names in each month (same one used in the main display), allowing days to be toggled.

#### **Full Day View:**
- Improved the position used for the current time arrow shown for the current day (when all-day events are not shown).

#### **Code Improvements:**
- Moved Full-Screen Mode into its own section, with some refactoring to make things clearer.

#### **Documentation:**
- Added missing shortcut keys documentation to the SHORTCUT_KEY.md file.

#### **Fixes:**
- Fixed the "Turn On/Off Full-Screen Mode" button divider lines in the views not disappearing in mobile mode.
- Fixed a fault that caused the wrong week to be shown when the setting "startOfWeekDay" is not Monday and the current day is Saturday or Sunday.
- Fixed the time arrow not allowing the right context menu to be shown when clicked over an event, or empty space.
- Fixed event resizing not working correctly when the mouse leaves the event being resized.
- Fixed the event resize tracking timer always firing in the background.
- Fixed event resizing not working in Safari (desktop).

<br>


## Version 2.6.1:
- Added context menu support for Days shown in each Month in the Full Year view (the same menu used for all other day views).
- Added open view tracking, which will increase the z-index of each view opened and track which are opened and in what order (so views can be opened/closed in the right order).
- The CSS class "overlay-shown" has been renamed to "view-shown".
- Internal renames from the use of "Overlay" to "View" (including files).
- Added translation support for Chinese (simplified), Arabic, Bengali, and Japanese.

<br>


## Version 2.6.0:

#### **New Features:**
- Added a Full Year view! This view will show all the months for a specific year, and will you to quickly add events, and view the full month, or specific days.
- Added alert notification offset support for events (states how many minutes before an event is due to start to show an alert).

#### **UI Improvements:**
- The Year Drop-Down button on the main display's title bar now uses a button style (make it clearer it can be clicked).
- The "Turn On Full-Screen Mode" buttons in the title bars are now on the right-hand side (after the close buttons in the views).
- The "Expand" buttons in the View section title bars are now separated with a divider line.
- Clicking the "Import Events" button in the Side Menu title bar will now close the Side Menu.
- The "Close" button on the Side Menu title bar is now separated with a divider line.
- Moved the "Export Events" button on all title bars (including views) to the Side Menu (next to the "Import Events" button).
- Added a "View Full Day" button to the main display's title bar, which will open the Full Day view on the current day.
- The "All Events" view now separates the months into year sections (clicking the header will show the Full Year view).

#### **Breaking Change Improvements:**
- Renamed the CSS class "calendar-drop-down-menu" to "calendar-context-menu" (with large JS internal renames).
- Renamed the CSS class "list-all-events-view" to "all-events-view" (with large JS internal renames).
- Renamed the CSS class "list-all-week-events-view" to "all-week-events-view" (with large JS internal renames).
- Renamed the setting "listAllEventsTooltipText" to "viewAllEventsTooltipText".
- Renamed the setting "listWeekEventsTooltipText" to "viewCurrentWeekEventsTooltipText".

#### **Shortcut Keys:**
- Pressing the escape shortcut key will now only close one view at a time, instead of all of them.
- The Left, Right, and Down keys (in Full-Screen Mode) now support the active view (moving to years, months, weeks, and days).

#### **Code Improvements:**
- Massive class variable re-organization at the top of the main class.  Everything is now sectioned and named correctly.
- Massive function re-organization.  All the main building functions are near the top, whereas the supplier/add-on builders are further down.

#### **Fixes:**
- Fixed a fault that caused padding to appear on the right side of the days in the Month view when only one day is visible.
- Fixed a fault that allowed the "Search" dialog to be opened via the shortcut key when no events are available for the active view.
- Fixed a fault that caused the Left, Right, and Down keys to still allow the default action of the browser to occur (in all modes).

<br>


## Version 2.5.5:
- Fixed the default value for the setting "eventNotificationBody" using an invalid value.
- Fixed the translation .JS files showing the incorrect project name for settings "eventNotificationTitle" and "sideMenuHeaderText".

<br>


## Version 2.5.4:
- Day ordinals are now only included in the UI when text for the settings is available (seen when using translation files).
- The "Close" buttons for all views (Full Day, Weekly, All) are now on the right side of the title bar and separated with a line.
- Fixed the "Side Menu" button being hidden on the "All Events" view when the setting "showExtraToolbarButtons" is set to false.
- Fixed the "escape" key not closing the Calendar (in DatePicker mode) when something other than the input field is focused.
- Fixed iCAL exports ending repeating events a day earlier than shown in the display (in the new target calendar).
- Fixed a fault when importing from iCAL files that caused the "repeatEnds" property on events to get set one day ahead.

<br>


## Version 2.5.3:
- Updated documentation to show the DatePicker mode.
- Added a shadow effect to the notifications shown when specific actions are completed.
- Fixed a fault that caused the custom event "onEventsImported" to be called multiple times when handling multiple files.
- Fixed a fault that caused the "eventsImportedText" notification to show the wrong number of events imported when handling multiple files.

<br>


## Version 2.5.2:
- Updated the Day/Month names for all translations.
- The translation strings "stText", "ndText", "rdText", and "thText" are now empty for all translation files (except .EN).

<br>


## Version 2.5.1:
- Fixed a fault that prevented all-day events from other iCal sources being handled correctly when imported.
- Added missing version headers to the translation .JS files.
- Fixed the "Import Events" select dialog not supporting multiple file selections on some devices.

<br>


## Version 2.5.0:

#### **File Importing:**
- Added multiple Json/ICal file drop support for adding events.
- Added full ICal/Ics file import/drop support, which will import all the fields supported under new/existing events.
- Only Json and ICal/Ics files are now accepted for importing, and file dropping.
- Event files can now only be dropped on the display if the setting "importEventsEnabled" is set to true.
- When events are imported (from file dropping, or file selection), Calendar.js will attempt to update the existing events with the details in the file (instead of just adding the ones that don't exist).

#### **General Improvements:**
- Added a new "Import Events" button to the Side Menu title bar, which will allow you to select the files you want to import.
- The "Close" button shown on the main title bar in DatePicker mode is now all the way on the right, and is separated from the other buttons.

#### **Custom Trigger Events:**
- Added a new custom trigger "onEventsImported", which is triggered when events are imported from files (when dropped, or selected).
- Updated the custom trigger "onEventsExported", which will now have all the events exported passed to it.

#### **Settings:**
- Added a new setting "importEventsEnabled" (defaults to true) which states if importing events from files is enabled.
- Added a new setting "importEventsTooltipText" (defaults to "Import Events") which states the tooltip text to use for the new Import title bar button.
- Added a new setting "eventsImportedText" (defaults to "{0} events imported.") which states the notification text to show when events are imported.

#### **Fixes:**
- Fixed a fault that caused the "repeatEveryExcludeDays" event property to be exported in the wrong format for JSON.
- Fixed some strict equal faults when checking to see if menus/dropdowns are open.
- Fixed some strict not-equals faults when verifying if an event has been resized in the Full Day view.
- Fixed lots of documentation grammar/spelling mistakes in the .MD files, and the main .JS file.

<br>


## Version 2.4.0:

#### **New Custom Trigger Events:**
- Added a new custom trigger "onEventsFetch", which is triggered when the calendar refreshes (pulls events to be added, or updated).

#### **CSS Color Theme:**
- :root variables that use the same colors as other variables now reference the main one.
- Added a fade-in effect when the calendar is shown in DatePicker mode.
- Added CSS variable "--title-bar-button-color", which now states the color the title bar buttons should use.
- Added CSS variable "--menu-item-icon-color", which now states the color the context menu icons should use.
- Added CSS variable "--title-bar-text-color", which now states the text color the title bars should use.
- Added CSS variable "--event-text-color", which now states the text color an event should use.
- Added CSS variable "--event-text-color-all-day", which now states the text color an all-day event should use.

#### **Translations:**
- Added support for Portuguese, Turkish, and Hindi.

#### **General Improvements:**
- Added function-chaining support for all public functions that do not return a result (see documentation).

#### **Fixes:**
- Fixed a fault that caused the active tooltip to remain visible when the Side Menu is closed.
- Fixed FUNCTIONS.md documentation not showing the correct return types.

<br>


## Version 2.3.4:
- Added new setting "reverseOrderDaysOfWeek" (defaults to false), which states if the days in the display should be reversed (this will allow for Hebrew calendar layouts).
- Added translation JSON JS files to "/dist/translations" folder for:  French, Spanish, Polish, and German.  A base English version is available for quickly translating into other languages.  More languages will be added moving forward.
- Added "enter" support to the "title" text field on the "Add Event" dialog (so that new events can be added quickly).

<br>


## Version 2.3.3:
- Added working hours support! This is shown as a slightly darker area on the Full Day view.
- Added new setting "workingHoursStart" (defaults to null), which states the time the working hours start (for example, "09:00").
- Added new setting "workingHoursEnd" (defaults to null), which states the time the working hours end (for example, "17:00").
- Added dark-mode CSS support for :root variables (in light-mode, a slightly lighter dark color is now used).
- Fixed documentation in the README.md file.

<br>


## Version 2.3.2:
- When pressing escape, if events are selected and another view is open, the events selected are cleared as the first action (the view will remain open).
- When pressing escape, if the "Search" dialogs search history drop down is open, it is closed (instead of closing the dialog itself).
- Fixed a fault that prevented the documents "mousemove" event for tooltips not being removed when the calendar is destroyed.
- Fixed a fault that prevented the documents "click" event (when DatePicker mode is enabled) not being removed when the calendar is destroyed.
- When pressing escape, if a drop-down is open, the drop-down is closed as the first action.

<br>


## Version 2.3.1:
- Added new setting "shortcutKeysEnabled" (defaults to true), which states if the shortcut keys are enabled (always off in DatePicker mode).
- Fixed some mistakes in the documentation (CLASS.md, CUSTOM_TRIGGERS.md, FUNCTIONS.md, SEARCH_OPTIONS.md).
- Added "Select All" and "Select None" buttons to the side menu sections (only visible when a section is open).
- Increased the width of the side menu slight for desktop and mobile devices (to give a bit more room for the new section buttons).
- When pressing escape, if events are copied and another view is opened, the events copied are cleared as the first action (the view will remain open).
- Added "VALARM" support for exported iCAL events (states when an alert should be shown for the event, which defaults to the events "from" date/time).
- Added DOCTYPE, HEAD, and TITLE support for exported HTML events, including meta for CHARSET and LAST-MODIFIED.
- Added "Filename" and "Last Modified" support export TXT events.
- Added a "Calendar" node to the exported XML events, which contains sub-nodes "Filename" and "LastModified".
- Pressing enter in the "Filename" field on the Export Dialog will now trigger the "Export" button.

<br>


## Version 2.3.0:

#### **New Features:**
- Added new setting "useLocalStorageForEvents" (defaults to false), which states that events will be stored in local storage (persisted between browser usages).
- Added full CSS color theme support! Removes all the SCSS color variables, but the :root variables are named nearly the same.

#### **General Improvements:**
- Improved the scroll position used when the Year Drop-Down menu is opened (for the list of years).
- When exporting events to iCal format, if the organizer Name/Email fields are not set for an event, they are taken from the settings.

#### **Shortcut Keys:**
- Added global Ctrl/Command + Shift + G support, which will open the Configuration dialog (if enabled).
- Added global Ctrl/Command + Shift + O support, which will open the side menu (if enabled).
- Moved the list of shortcut keys into a new dedicated .MD file.

<br>


## Version 2.2.2:
- Fixed the license type in package.json being wrong.
- Improved some of the HTML testing files.

<br>


## Version 2.2.1:
- Fixed all browser warnings about inputs / text areas having missing IDs / names.
- Fixed a fault that caused the "onOptionsUpdated" custom trigger to be called multiple times when changes options on the Side Menu.
- Added new setting "startOfWeekDay" (defaults to 0 for Monday), which states what day is considered the start of the week (Monday, Saturday, and Sunday are currently supported).
- Fixed the side menu doing a full rebuild of the display when nothing has been changed (something changed, then changed back).

<br>


## Version 2.2.0:

#### **New Features:**
- Added "Working Days" side menu toggle support (updates which days are shown as working days).
- Added "Weekend Days" side menu toggle support (updates which days are shown as weekend days).
- Added "Show As Busy" support for events (defaults to true).  When turned on, if an events time period is within todays current time, the Calendars status will be set as Busy.

#### **General Improvements:**
- The title header (with the buttons) on the Side Menu now stays at the top when the content is scrollable.
- Events that are set to show as busy are now marked as TRANSPARENT for "TRANSP" for iCal event exports.
- Added "Show Alerts" and "Show As Busy" columns to export options CSV, MD, and TSV.
- The current month (today) is shown in a different color in the Year Drop-Down menu (when not selected).
- The header context menu item "Show Only Working Days" is now only available when days other than the working days are visible.

#### **New Settings:**
- Add the following new settings (if all these settings are set to false, the Side Menu is disabled):
    1. "showSideMenuDays" (defaults to true), which states if the "Days" area is visible on the side menu (Days Header context menu is disabled if set to false).
    2. "showSideMenuGroups" (defaults to true), which states if the "Groups" area is visible on the side menu.
    3. "showSideMenuEventTypes" (defaults to true), which states if the "Event Types" area is visible on the side menu.
    4. "showSideMenuWorkingDays" (defaults to true), which states if the "Working Days" area is visible on the side menu.
    5. "showSideMenuWeekendDays" (defaults to true), which states if the "Weekend Days" area is visible on the side menu.

#### **New Public Functions:**
- Added new public function "isBusy()", which states if the Calendar is busy or not.

#### **New Custom Trigger Events:**
- Added a new custom trigger "onBusyStateChange", which is triggered when the calendars busy state changes (passes the busy state flag).

#### **Fixes:**
- Fixed a fault that prevented the "Event Types" and "Groups" side menu drop-downs showing the right effect when opened (when the side menu opens).
- Fixed the popup notifications not appearing at the bottom of the browser window when its scrolled.

<br>


## Version 2.1.7:
- Added correct support for All Day events for exported iCAL events (will show in the calendars correctly now).
- Added "STATUS" (CONFIRMED), "TRANSP" (OPAQUE), and "STATUS" (0) support for exported iCAL events.

<br>


## Version 2.1.6:
- Improved the "PRODID" support for exported iCAL events.
- Added "RRULE" support for exported iCAL events (states how an event should be repeated).
- The sections for exported iCAL events (such as title, description, URL, etc.) are now only included when set on an event.
- Added "DTSTAMP" support for exported iCAL events (uses the events "created" date value).
- Fixed newline characters not always working. It now uses CRLF (which is the preferred format).

<br>


## Version 2.1.5:
- Fixed a fault that caused events exported to iCAL format to fail (due to optional date being missing).
- Fixed a fault that allowed HTML titles to be included in events exported to iCAL format.
- Added "DESCRIPTION", "LOCATION", "URL", and "CATEGORIES" (groups) support for exported iCAL events (strips out new lines).
- Fixed a fault that caused the "ORGANIZER" tag to be included in iCAL exported events when nothing is set.

<br>


## Version 2.1.4:
- Added "customTags" support for Calendar events, which enables any kind of data to be stored on an event (does not show up in export data).
- Fixed a fault that caused the Side Menu to randomly close when clicking on the check boxes.

<br>


## Version 2.1.3:
- When selecting the context menu item "Visible Days...", the "Days" container in the side menu is now opened by default.
- When the side menu is open, clicking anywhere in the document will now close it.
- Fixed some issues around the documentation for custom trigger events.

<br>


## Version 2.1.2:
- Added new setting "showMonthButtonsInYearDropDownMenu" (defaults to true) that can be used to turn off the Month selectors in the Year Drop-Down menu.
- Added a new custom trigger "onBeforeEventAddEdit", which is triggered when an event is to be added/edited (passes the event details to the event and stops the Event Editor dialog showing).

<br>


## Version 2.1.1:
- Renamed TEXT to TXT (as it's not the right extension) in the Export Events dialog.
- Fixed a fault that prevented events that span multiple months from showing up correctly (would only show on the first day).
- Fixed a fault that prevented events that span multiple months from showing up in the next month.
- Fixed a fault that caused events to show as "not-in-current-month" when they span multiple months.

<br>


## Version 2.1.0:
- Added "year" support for Holidays, which states if a holiday should only occur within one year (defaults to null).
- Added "backgroundColor" support for Holidays, which states the background color that should be used for the day.
- Added "textColor" support for Holidays, which states the text color that should be used for the day.
- Added month name selection support to the Years Drop-Down on the main display (shows which month is currently selected).
- Added popup notification support when actions are performed (events added/updated/deleted, events exported, etc).
- Added option "Copy to clipboard only" to the "Export Events" dialog (only copies the output format for the events to the system clipboard).
- Updated the layout for the "Export Events", "Repeat Options", and "Select Colors" dialogs.

<br>


## Version 2.0.12:
- Increased the default width for the Search dialog, and tabbed in the Advanced criteria.
- Internal rename (including CSS names) for the Confirmation dialog. It is now called Message.
- Error messages are no longer shown in the Event Editor dialog. A model message is now shown instead, which has to be acknowledged.
- All the text for the main action buttons have been changed to make it clearer what the button does.
- Added a new setting "exportText" (defaults to "Export"), which states the button text for the "Export" button.
- Internal CSS renames to reflect which button they are assigned to.
- Fixed a badly named CSS class being applied to the "Export Events" dialog.

<br>


## Version 2.0.11:
- Added a new search setting "enabled" (defaults to true), which states if search is enabled.
- Added a new setting "configurationDialogEnabled" (defaults to true), which states if the configuration dialog is enabled.

<br>


## Version 2.0.10:
- Fixed a fault that prevented the custom event "onEventUpdated" from firing when events are moved/resized in the Full Day view.
- Fixed a fault that prevented the events assigned to the document/window from being removed when destroy() is called.
- Fixed a fault that caused the "Search" dialog to alter the dates for an event when searching across multiple months.
- Fixed a fault that prevented the "Search" dialog from accurately searching across multiple months.

<br>


## Version 2.0.9:
- Fixed a fault that allowed drag & drop to be used on the Full Day view when it's disabled.
- Fixed the "+X More" link in the Month view not using a disabled color when shown on days outside the current month.
- Changed the default colors used for the buttons, as they did not match the color scheme.
- Button colors now have their own SCSS variables, making them easier to change.
- The "Remove" button on the Event Editor dialog is now aligned to the left.
- Fixed a fault that caused the context menus / drop-downs to remain open when moving a dialog.
- Renamed the "Select Export Type" dialog to "Event Events".
- Added a "Name" input field to the Export Events dialog, which allows you to specify a download filename.
- Renamed the setting "selectExportTypeTitle" to "exportEventsTitle".
- Fixed a fault that caused the tooltip element to remain in the DOM after the calendar is destroyed.
- Fixed a fault that caused the internal timers to keep running after the calendar is destroyed.
- Fixed a fault that caused the tooltip element to show no class when first created.
- Fixed a fault that caused the event tooltips to use a smaller width when a regular tooltip has been shown first.

<br>


## Version 2.0.8:
- Added event resizing support in the Full Day view.  The display is automatically updated when resizing events.
- Added event moving support in the Full Day view.  The display is automatically updated when the events are moved.
- Fixed a fault that caused events to be added to the wrong position when double clicking in the Full Day view (or added from the context menu).
- Fixed a fault that caused repeating events to appear incorrectly sized in the Full Day view.
- Fixed the Yes/No buttons on the Confirmation dialog being in the wrong order.
- Added drop support for events (from other Calendar.js instances) and JSON files to the Full Day view.

<br>


## Version 2.0.7:
- Opening the context menu in the Full Day view will track the time from the location you clicked.  When adding a new event from the context menu, the time tracked is now used as default.
- Added event context menu item "Export Events" (only available if more than one event is selected), which will export only the selected events.
- Added a new custom trigger "onNotification", which is triggered when a browser notification for an event is shown (passes the event details).
- The search history dropdown items now use a dotted line separator instead of a solid one.
- Removed the opacity CSS effect for the selected events.
- The buttons used on each dialog now stay on the same line, align to the left and use a smaller width, with the main action buttons using a full background color.
- Removed replicated SCSS for handling menu icons.
- Fixed a fault that caused the wrong days to be shown as Working Days, including when selecting Only Show Working Days.
- Fixed a fault that caused the ordering of the Week Event day containers to be wrong when looking at the start of the month.

<br>


## Version 2.0.6:
- Removed the coma on the main title bar between the month and year.
- Added a new setting "monthTitleBarDateFormat" (defaults to "{mmmm} {yyyy}"), which states the date format that should be used for the month displays title bar (the year dropdown).
- Renamed the license file to it can be opened in the default editor.

<br>


## Version 2.0.5:
- Added global Ctrl/Command + Shift + V support to paste the selected events (only for Full Day view).
- Added a new setting "defaultEventDuration" (defaults to 30), which states the default duration a new event should use when being added.
- Added day header context menu item "Show Only Working Days", which forces only the working days to be visible.
- Added a CONTRIBUTING.md file to the root.
- The Year dropdown selector button on the main display title now changes the arrow when the dropdown is open.
- The Year dropdown selector button now only changes the text instead of re-rendering the whole button.
- For review purposes, spaces and empty strings are now easier to read.
- Pressing escape (once all other actions are done) will close the Search dialog (if open).
- Added global Ctrl/Command + Shift + M support to toggle all the minimize/restore views when the All/Week view is open.

<br>


## Version 2.0.4:
- Moved all the documentation MD files into the "docs" folder (clears up the root folder a fair bit).
- Added a slightly larger left border for the side menu panels that are opened (with transition effect).
- The public functions for handling the internal clipboard can no longer be used in DatePicker mode.
- Fixed a fault that caused copied/cut events that span multiple days to only be assigned to one day when pasted.
- Added full multi-select support for events when cutting, copying, and pasting (simply press Control/Command, and then select the events).
- When an event is copied, or cut, the CSS effect is now applied to all repeating / multiple day spanning events.
- Added global Ctrl/Command + Shift + C support to copy the selected events (only for multi-select).
- Added global Ctrl/Command + Shift + X support to cut the selected events (only for multi-select).

<br>


## Version 2.0.3:
- BREAKING: All JS/CSS files have been renamed to reflect the project name more accurately.  Testing HTML filenames have also ben renamed.
- Renamed the project description in all files.
- Updated documentation and screenshots to reflect some of the more recent changes.
- Fixed a fault that caused the drop-down context menus to remain open when pressing escape in an open view.

<br>


## Version 2.0.2:
- Added a slightly larger left border to all drop-down context menus (helps them stand out against similar colors).
- Added a box-shadow effect to all drop-down context menus.
- Removed deprecated CSS values.
- When the browser window loses focus, all drop-down context menus, tooltips, and date pickers are closed.
- When moving a dialog, if the mouse leaves the document area, the move will be cancelled and the location of the dialog will revert.

<br>


## Version 2.0.1:
- Removed the setting "extraSelectableYearsAhead", as it's no longer needed.
- Added a new setting "minimumYear" (defaults to 1900), which states the minimum year that can be used shown in the calendar.
- Added a new setting "maximumYear" (defaults to 2099), which states the maximum year that can be used shown in the calendar.
- Added new public function "removeExpiredEvents()", which will remove all expired events (non-repeating ones).
- Fixed events in all views breaking up words onto multiple lines (CSS issue).
- Removed the setting "dropDownMenuSymbol", as it's no longer needed.
- The year drop-down button on the main title bars now uses a CSS controlled image for the drop-down symbol (easier to see).
- Removed the transition effect from All / Weekly Events views (was flicking on refresh).
- Fixed a fault that caused events in the Full Day view to randomly change on refresh (duration suddenly appearing).
- Fixed the "duration" label not showing in All / Weekly Events views.
- Fixed the top/bottom spacing for the Year dropdown on the Monthly view (was not consistent with the left/right).

<br>


## Version 2.0.0:

#### **New Features:**
- Added Event Type support for events (under a new tab called Type). The default event types are:
  - Normal (default)
  - Meeting
  - Birthday
  - Holiday
  - Task
- Added a side menu for the whole Calendar, which allows visibility of Days, Event Types, and Groups to be toggled easily (the days area is open by default).
- Updating configuration will no longer close your current view (All Events, Full Day, Weekly).  They will be automatically updated.
- You can now drag & drop events between calendars (the source one will not be removed, just copied).

#### **Events/Groups:**
- When events are added/updated/set, the group they are assigned (if new) is made visible by default.
- The "locked" property is now included in the CSV export result.
- Events visible in the active display now contain attributes "event-id" and "event-type".
- The "Duplicate" event context menu item now has "..." at the end.
- The border color that can be set for Events now allows sets the whole border, not just the left side.
- When a template event is added (when "useTemplateWhenAddingNewEvent" is on), the "Title" text in the Event Editor dialog is now highlighted.
- Events that are locked can no longer be Cut, Copy, or Duplicated.
- Fixed a fault that prevented overlapping events (in the Full Day view) resizing when the window is resized.

#### **Search:**
- Added left margin spacing to the "Advanced" options in the "Search" dialog.
- Added a light border around the "Advanced" area on the "Search" dialog.
- Added a dropdown button to the "For" field on the "Search" dialog, which will show the full search history (only if available).
- The sorting order used for the search history in the "Search" dialog is now much more accurate.
- Fixed a fault that sometimes caused the "Next" button in the "Search" dialog to remain disabled after selecting a history item.
- Search history will now check for any case when adding new items (so Match Case searches work).

#### **Views:**
- You can now minimize/restore a Month/Day in the All Events/Weekly views (this is remembered between opens/closes).

#### **New Custom Trigger Events:**
- Added a new custom trigger "onVisibleGroupsChanged", which is triggered when the visible groups are changed (passes the visible group names).
- Added a new custom trigger "onVisibleEventTypesChanged", which is triggered when the visible event types are changed (passes the visible event type IDs).

#### **New Settings:**
- Added a new setting "addYearButtonsInDatePickerMode" (defaults to false) which adds year-jumping buttons to DatePicker title bar.
- Added a new setting "workingDays" (defaults to []), which states the days of the week that are considered working days (some format as weekendDays).

#### **New Public Functions:**
- Added new public functions "addEventType()" and "removeEventType()", for adding adding and removing event types.
- Added new public function "setVisibleGroups()", which will set the group names that are visible.
- Added new public function "setVisibleEventTypes()", which will set the event types that are visible.

#### **DatePicker Mode:**
- The DatePicker mode now supports smaller mobile screens (and increased the default width to 330px).
- The DatePicker mode now supports form posts.  A new hidden input is created that stores the parse-supported selected date.
- Added "date" input type support for DatePicker mode.  This is a good fallback if something goes wrong.
- Fixed an error occurring when resizing the browser window while the DatePicker is open.

#### **General:**
- Removed the "Groups" tab from the "Configuration" dialog (as it's all in the side menu now).
- Removed the "Visible Days" tab from the "Configuration" dialog (as it's all in the side menu now).
- The "View Current Week Events" button is now the same, but flipped.
- The public function "refresh()" will now refresh any view that is visible.
- Added global Ctrl/Command + Shift + E support to open the Export Events dialog (when exporting is enabled).
- All tab containers now use the custom scroll bar styles whenever they are required.
- Fixed some issues around the z-indexes used for dialogs.  The search dialog is now shown under the main disabled background.
- Changed the default background color for the tooltips shown through the Calendar (slightly lighter now).
- The "Today" button in the Full-Day view is now only shown if todays day is visible (changed from all days having to be visible).
- Removed the "Configuration" button from the main toolbars.  This is now available on the new Side Menu.
- The selected tab on the dialogs now uses a slightly larger padding to indicate more clearly which one is selected.
- Fixed a fault that caused the Year dropdown years to be unclickable once a different year is selected.
- Fixed the context menus not loading in the right position when the browser page has been scrolled.
- Changed some of the default menu icons around (Duplicate and Hide Day, for example).

#### **General Code Improvements:**
- Removed all deprecated SASS math divide usages.
- The SCSS files now use a slightly better style rule for opening/closing brackets.
- Less repetitive JS code.

<br>


## Version 1.8.7:
- The main display Day Name header context menu is now shown when only one day is visible (Hide Day is hidden).
- Fixed a fault that caused the calendar to rebuild when double-clicking on a day name when all other days are hidden (not in single-day toggle mode).
- Added shared size variable for the focus border for all input elements (slightly larger size now).
- When the option "showExtraToolbarButtons" is set to false, the "View All Events" and "View Current Week Event" toolbar buttons now remain visible.

<br>


## Version 1.8.6:
- Fixed the testing HTML for the minimized version of Calendar.js.
- Renamed the following CSS classes (sorry, this will cause some style breakages):
  - "checkboxContainer" is now "checkbox-container".
  - "textHeader" is now "text-header".
  - "radioButtonsContainer" is now "radio-buttons-container".
  - "radioButtonContainer" is now "radio-button-container".
  - "radioButton" is now "radio-button".
- Improvements to the documentation and added support to show which parameters are option for public functions.
- Fixed a fault that caused the expand button in the main display (in the cells) to remain visible when dragging an event.
- Added a new custom event "onEventClick", which is triggered when an event is clicked (passes the event details).
- Added a new custom event "onEventDoubleClick", which is triggered when an event is double clicked (passes the event details).  This event is only fired if event editing is disabled.
- Added improved documentation for custom triggers (explains what can be passed, when they are called, etc).

<br>


## Version 1.8.5:
- Added a custom CSS class for the text headers used in the Advanced area of the Search dialog.
- Added a new custom event "onEventDragStart", which is triggered when dragging an event is started (the event details are passed to the function).
- Added a new custom event "onEventDragStop", which is triggered when dragging an event is stopped (the event details are passed to the function).
- Fixed a fault that allowed locked events to be dragged (in all views).
- Added a new custom event "onEventDragDrop", which is triggered an event being dragged is dropped (the event details and target drop date are passed to the function).

<br>


## Version 1.8.4:
- The public function setCurrentDisplayDate() will now only accept a valid date object.
- The public function setSelectedDatePickerDate() will now only accept a valid date object.
- The public function getEvent() will now only accept a valid string ID.
- The public function removeGroup() will now only accept a valid string group name.
- The public function setClipboardEvent() will now only accept a valid object event.
- The public function addHolidays() will now only accept a valid array of holidays.
- The public function removeHolidays() will now only accept a valid array of string holiday names.
- Added "locked" property support for events, which states if an event can be edited (it can still be removed).
- Added disabled text color support for input fields.
- Improved the disabled CSS that is applied to check boxes/radio buttons that are disabled.

<br>


## Version 1.8.3:
- Fixed some script errors occurring when an invalid element, or element ID, is passed to the constructor.
- Added {dddd} Date Format support (for DatePicker mode), which will show the full name of the day of the week.
- Added {y} Date Format support (for DatePicker mode), which shows the year, from 0 to 99.
- Improved Date Format documentation (makes a little more sense now).
- Added {yyy} Date Format support (for DatePicker mode), which shows the year, from 000 to 999.
- Renamed {mmm} Date Format to {mmmm} (it still shows the full name of the month).
- Added a new setting "dayNamesAbbreviated" (defaults to "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").
- Added a new setting "monthNamesAbbreviated" (defaults to "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec").
- Added {ddd} Date Format support (for DatePicker mode), which will show the abbreviated name of the day of the week.
- Added {mmm} Date Format support (for DatePicker mode), which will show the abbreviated name of the month.

<br>


## Version 1.8.2:
- The "Advanced" criteria in the "Search" dialog is now styled to standout from the rest of the options (much clearer).
- Fixed a fault that allowed the year selected (in the year drop-down) to be selected again (removed hover, active, and click event).
- Added new setting "applyCssToEventsNotInCurrentMonth" (defaults to true), which adds extra CSS to events not in the current month (on the main display).
- Removed code duplication for setting CSS classes for events when specific actions have been performed.
- Fixed a fault that caused all other views to be rendered in DatePicker mode (never shown, but not needed).

<br>


## Version 1.8.1:
- Fixed a fault that caused an error to occur when initializing Calendar.js without any options.
- Fixed a fault that caused holiday link hover effect to use the full cell width (now just the text size).
- Added a separator CSS class and object that gets added between each holiday item in the main display.
- Fixed a fault that caused full-screen mode to be closed updating configuration from the "Configuration" dialog.

<br>


## Version 1.8.0:
- Added full search history support on the "Search Dialog".
- Added a new search setting "history", which is used to state the existing search history (is updated when new entries are added).
- Added single-day (in the month) view toggle support (simply double-click on the day name header you want to view).
- Added "Cut" support across events (like copy, but instead moves the event to the desired date).
- Added a "Copy" CSS class, which is applied to the event in the UI that you are copying.
- Added the "Configuration" toolbar button on all views (with the same visibility rules at the main display).
- Added support to move all dialogs around the browser (instead of just the "Search" dialog).
- Holiday links in the main display are now hidden on mobiles by default (CSS controlled).
- Pressing escape (once all other actions are done) will clear the Copied/Cut event from the internal clipboard.

<br>


## Version 1.7.5:
- More documentation improvements.
- Fixed a fault that caused the testing styles to override the main calendar styles.
- Added missing version header for the minimized CSS file.
- Fixed a fault that caused the last event dot to appear slightly below the line.
- Added holiday property "onClickUrl" (overrides "onClick"), which will open the URL is a configured target window.
- Added default "onClickUrl" properties for the holidays that are built in (default to Wiki links).
- Added public function "getHolidays()", which will return all the holidays in the Options.

<br>


## Version 1.7.4:
- Binding test HTML file now shows the right Calendar.js version.
- Added "src" and "dist" testing HTML files (will do this a clean way in the future).

<br>


## Version 1.7.3:
- "dist" now contains undocumented versions of the JS files, whereas "src" contains the full documented JS files.

<br>


## Version 1.7.2:
- Moved all the testing HTML files into a new subfolder called "test".
- Moved all compiled code into a new folder called "dist".  "src" now only contains SASS files.
- Improved the testing HTML files.  They now state what each one is for at the top.
- Added a new custom event "onRender", which is triggered when a Calendar is rendered for the first time (the Calendar ID is passed).
- Added Data-Binding support to quickly create new Calendars without writing Javascript.
- Added a new setting "initialDateTime" (defaults to today's Date), which states the selected date the calendar should display.
- Removed calendarJs() constructor parameter "startDateTime" (use the new "initialDateTime" instead).
- Added a new setting "searchOptions" (defaults to an empty object), which is an alternate way to get Search Options into the calendar instance.
- Fixed a fault that caused DatePicker mode to overwrite the DOM element ID it is being assigned to (now only set if not available).
- Added multiple DOM element support to the jQuery plugin (will return all the calendarJs instances created).
- Removed the "loadOptions" from the jQuery plugin (no longer needed) and added documentation.
- Documentation improvements across the core project.
- Added a new setting "events" (defaults to null), which states the initial events that should be rendered in the calendar when it's first rendered.

<br>


## Version 1.7.1:
- Added basic NPM support (as requested).

<br>


## Version 1.7.0:
- Added support to pass an element directly to the constructor (instead of an ID, which is still supported).
- Added jQuery plugin support (will load a new instance of the calendar against any DOM element).
- Improved documentation header for the main JS file.
- Added public function "getId()", which will return the element ID of the calendar instance.
- Added back in version stamp into the minimized version of the main JS file.
- Added a new custom event "onDestroy", which is triggered when a Calendar instance is destroyed (the Calendar ID is passed).
- Added a new custom event "onRefresh", which is triggered when the Calendar is manually refreshed.
- Updated documentation regarding use within Internet Explorer.
- Added new custom event "onDatePickerOpened", which is triggered when a DatePicker is opened (the Calendar ID is passed).
- Added new custom event "onDatePickerClosed", which is triggered when a DatePicker is closed (the Calendar ID is passed).
- Fixed a spacing issue in the "Search" dialog that pressed the advanced options right up to the contents before it.
- Changed the default value for setting "extraSelectableYearsAhead", which is now 100 instead of 51.
- Fixed a fault that allowed the Calendar to be skipped over the minimum/maximum year specified in the year drop-down.

<br>


## Version 1.6.6:
- Added a new setting "currentMonthTooltipText" (defaults to "Current Month") which is used for the "Today" button on the main display.
- Fixed a fault that caused the "duration" label to be added to the displays when empty (was causing some spacing issues).

<br>


## Version 1.6.5:
- Minor CSS assignment improvements when events are dragged and dropped via the main display.
- Fixed a fault that caused the optional parameters for public functions to be checked multiple times.
- Fixed a script error that occurred when resizing the browser window while Date Picker mode is enabled.

<br>


## Version 1.6.4:
- Fixed a fault that caused the checkout/radio button input boxes to show up in the display.
- The "Organizer Email" field in the "Configuration" dialog is now an email input field.
- Fixed a fault that allowed the DatePicker input box to have its margin-bottom overridden by other CSS selectors.
- When selecting "Advanced" in the "Search" dialog, the dialog is now centred in the window (if it has not been moved manually).
- Overlay views (Full Day, All Events, Weekly) now have their titles centred and the buttons on both sides (like the main display).
- Fixed a fault that prevented the "Refresh" button on the main displays title bar from doing anything.
- Added "Refresh" title bar button support across available views (on the left side, as with the main display).
- Added a new setting "dropDownMenuSymbol", which states the drop-down menu character to use on the main display (defaults to "▾").
- Added new setting "searchTextBoxPlaceholder", which states the placeholder text for "Search" dialogs input field.
- Fixed a spacing issue with the last Group Name checkbox in the "Configuration" dialog (in the "Groups" tab).
- Renamed the setting "showExtraMainDisplayToolbarButtons" to "showExtraToolbarButtons" (this now applies to overlay views as well).
- Fixed a fault that prevented the Full Day view from option when "showExtraToolbarButtons" is set to false.
- Fixed a fault that caused the "+" button on the event Tooltip to be visible when manual event editing is disabled.
- Fixed the holiday/month names links not working in the main display (CSS fault, sorry).

<br>


## Version 1.6.3:
- Fixed a fault that caused DatePicker mode to render all the dialogs and drop-down menus when they are not needed.
- Fixed a fault that would cause the DatePicker mode to show only the current month when opened (not the selected).
- Fixed a fault that caused DatePicker mode to show the default date when an invalid value is specified in the input value.
- Fixed a fault that caused hours, minutes, and seconds, to be included in Dates returned in DatePicker mode.
- Fixed a fault in the public function setOptions() which triggered a full rebuild in DatePicker mode (and it's hidden).
- Public functions that affect the date displayed will only fire if not in DatePicker mode, or the DatePicker is visible.
- Fixed a fault that allowed all Event, Group, Holiday (and others) public functions to trigger rebuilds in DatePicker mode.
- Fixed a fault that caused input boxes to have the wrong line height.  They now all use one SCSS value.

<br>


## Version 1.6.2:
- Added new setting "weekendDays", which states the day numbers that should be treated as weekend days.
- Fixed a fault that causes the drop-down menus and tooltips to move around when scrolling the document body.
- Fixed the spacing used in the title bar when the calendar is viewed on a mobile device.
- Added a colon to the "Advanced" checkbox on the "Search" dialog (to make it more obvious that it opens up).
- Documentation improvements in the code and the .md documentation files to match up to JSDoc specifications.

<br>


## Version 1.6.1:
- Fixed a fault that caused an invalid date to be formed when dragging & dropping in the "All Events" view.
- Fixed a fault that allowed events to be dropped on the title bars in the "Weekly" and "All Events" views.
- Fixed a fault that caused the drop content areas to be too small, while increasing the spacing for empty days (in "Weekly" view).
- Added support for the drag & drop disabled stripped effect to the "Weekly" and "All Events" views.
- Any area that cannot have an event dropped onto it no longer shows the drop status on the mouse pointer.
- Fixed more flicking effects when dragging events in the "Weekly" view.
- The "+ More" link shown in the main display cells now only allows the actual text to be clicked (not the entire width).
- The link shown in the event tooltips now only allows a hover and click event for the actual text (not the entire width).
- Fixed a fault that caused the "Advanced" area on the "Search" dialog to remain visible when turned off (when loaded).
- The "Advanced" option for the "Search" dialog is now turned off by default.
- Improved the spacing that is shown in different views for the last item in the list.
- Added full support for the bootstrap library (the "row" CSS selector has been renamed to "row-cells").
- Fixed the spacing used in the title bar when the calendar is in DatePicker mode.

<br>


## Version 1.6.0:
- The DatePicker mode now adds a base style called "calendar-date-picker-input" to the input box.
- Added a new setting "datePickerSelectedDateFormat", which allows the selected date (in the input field) in DatePicker mode to be formatted (see documentation).
- Fixed a fault that prevented the public function setSelectedDatePickerDate() from setting the DatePicker date.
- The "Search" button on all toolbars is now only visible when events are available.
- The keyboard shortcut keys for Left, Right, Control+Left, Control+Right, and Down are now supported in DatePicker mode.
- Added protective check around showing the selected DatePicker date.
- Clicking on an event link in the tooltips will now force the tooltip to close after opening the new tab/window.
- Added "DOCTYPE html" support to testing files and fixed rendering issues occurring in this mode (sorry for the delay in this).
- Fixed a fault that would cause the "Search" dialog to appear in the top-left when first opened.
- Fixed some spacing issues that caused scroll bars to appear in some of the tabs.

<br>


## Version 1.5.3:
- All public functions will now only accept the right types for parameters (including the constructor).
- Fixed a fault that caused the wrong input field to be focused when an invalid Url is entered in the Event Editor dialog.
- The Url input field in the Event Editor dialog is now of type "URL".
- When dragging an event, the day it was dragged from now shows a disabled stripped effect (as it cannot be dropped there).
- Fixed a fault that caused the Tooltips to show up when dragging events in FireFox.
- Fixed the flicking that occurs when dragging events over other days (when hovering over text and events).

<br>


## Version 1.5.2:
- Fixed a fault in Safari that caused the day names header to not resize correctly on initial load.

<br>


## Version 1.5.1:
- Clicking the currently displayed year in the year drop-down menu no longer causes an update to the display.
- The public function setCurrentDisplayDate() will only set the date if it's different from the display date.
- The public function setSelectedDatePickerDate() will now close the DatePicker (if it's open).
- Fixed a fault that caused the DatePicker to show the incorrect selected date (until it's opened again).
- The public function setSelectedDatePickerDate() will only set the date if it's different from the DatePickers selected date.

<br>


## Version 1.5.0:
- Added Url support to event tooltips (can be clicked, which opens the Url in a new window/tab).
- Only valid URLs can now be entered in the Event Editor dialog (an error message is shown for invalid entries).
- Events that contain an invalid Url when added/updated via public functions are now cleared.
- Added new setting "allowHtmlInDisplay", which allows HTML to be used in the display (defaults to false).
- Fixed a fault that caused the year drop-down menu to jump around when a year is clicked (and not set the year).
- Added new event "onEventUrlClicked", which is triggered when an event Url is clicked (passes the Url to the function).

<br>


## Version 1.4.5:
- Added new setting "minimumDatePickerDate", which states the minimum date to use while in DatePicker mode.
- Added new setting "maximumDatePickerDate", which states the maximum date to use while in DatePicker mode.
- The date selected in DatePicker mode is now highlighted in the calendar display.
- Fixed a fault that caused the calendar to close when clicking in the days header (in DatePicker mode).
- Fixed a fault that caused the Search dialog to move uncontrollably when a context menu is opened on the title bar.

<br>


## Version 1.4.4:
- Minor comment updates to headers.
- Added parameter "updateEvents" support to the public function addHolidays().
- Added new setting "useEscapeKeyToExitFullScreenMode", which states if the Escape key should exit full-screen mode (if enabled).
- Added global Ctrl/Command + Shift + F11 support to toggle between full-screen mode (if enabled).
- Fixed a fault that caused the display to refresh and tooltips to be shown when one of the drop-down menus is open.
- In the Full Day view, when clicking an event that overlaps another, it will now be brought to the front.
- Added public function removeHolidays(), which removes a list of holidays by name.

<br>


## Version 1.4.3:
- Fixed a fault that caused string arrays to not include speech marks when exporting (prevented excluded repeat days importing).

<br>


## Version 1.4.2:
- Fixed a fault that allowed HTML to be injected into the display for events, tooltips, overlays, etc.
- Added "Visible Days..." drop-down menu support to the Day headers in the main display (opens the "Configuration" dialog).
- Added new setting "useTemplateWhenAddingNewEvent" which adds a template event when "Add Event" is pressed (defaults to true).
- Sorry for the long pause between releases...

<br>


## Version 1.4.1:
- The Search dialogs text field is no longer cleared when closed and re-opened.  It is now focused and all the text is selected.
- Added "lastSearchText" support to the Search Options used in the Search dialog (configurable setting).
- The event "onSearchOptionsUpdated" now only sets the settings when the timer runs.
- Added a "Close" button to the main display toolbar when the calendar is in DatePicker mode.
- The "Export Events" dialog is now split into two columns to side height spacing on smaller screens.

<br>


## Version 1.4.0:
- Added support for custom events for holidays shown in the main display (using a new "onClick" holiday property).
- Added search support to the Full Day, Weekly, and All Events views.
- Fixed a fault that caused the Search dialog to iterate through the events in the wrong order.
- Removed the "," shown in the title bars in the Weekly view.
- More KeyCodes are now shared via the common object.
- Pressing escape while one of the overlays is open (when no other dialog is open) will close them.
- Holidays are now shown in the Weekly view day title bars.
- The holiday text shown in the title bars now uses a new custom CSS block called "light-title-bar-text" (which is lighter).
- Added new setting "showHolidays", which states if the holidays should be shown (defaults to true).
- Added new option "Show holidays in the main display and title bars" to Configuration > Display.

<br>


## Version 1.3.9:
- Added default holiday for "Remembrance Day".

<br>


## Version 1.3.8:
- Added public function removeGroup(), which removes a group by name (and fires a new custom event).
- Organized the public functions into more areas to make them easier to find.
- Moved all test files to use console.log() instead of alert() so that the details can be fully seen.
- Added public function setClipboardEvent(), which sets the internal clipboard event.
- Added new setting "showEmptyDaysInWeekView", which states if empty days should be shown in the week view (defaults to true).
- Added new option "Show empty days in the week view" to Configuration > Display.
- Added new setting "hideEventsWithoutGroupAssigned", which states if events without a group should be hidden (defaults to false).

<br>


## Version 1.3.7:
- Added public function isFullScreenActivated(), which states if full-screen mode is activated.
- The "Remove Events" context menu item in the Full Day view is only visible when events are available.
- Added support for "Not (opposite)" searches in the "Search" dialog (with custom setting support included).
- Added public function clearClipboard(), which clears the internal clipboard.
- Added public function getClipboardEvent(), which returns the event details that have been copied to the internal clipboard.

<br>


## Version 1.3.6:
- Fixed a fault that prevented the Calendar from jumping to the previous/next month when clicking the months in the main display.

<br>


## Version 1.3.5:
- All settings passed to the constructor now have to use the right type (otherwise they will be rejected).
- The constructor now accepts the search options as the 3rd parameter (startDateTime is now the 4th).
- Added support to check the default search options passed via the constructor and apply defaults if anything is wrong.
- In DatePicker mode, pressing escape in the text field will now close the calendar.
- Fixed a fault that caused getSelectedDatePickerDate() to return the wrong date (set internally incorrectly).

<br>


## Version 1.3.4:
- Added new setting "openInFullScreenMode", which states if the calendar should be rendered in full-screen mode.
- The "Enable browser notifications" options in the "Configuration" dialog is now tabbed in slightly (shows which it belongs to).
- Added new search settings "left" and "top", which states the left/top positions that should be used for the "Search" dialog.
- Added "Edit" button support on the event tooltips (next to the "Close" button).  They are now stacked are CSS controlled.
- Calling the public function setSearchOptions() will now close the "Search" dialog and reset the last search.

<br>


## Version 1.3.3:
- Fixed a fault that prevented the auto-refresh timer from being disabled from the "Configuration" dialog.

<br>


## Version 1.3.2:
- Added clearEvents() parameter "triggerEvent", which will fire the "onEventsCleared" event (if available).
- Added clearAllGroups() parameter "triggerEvent", which will fire the "onGroupsCleared" event (if available).
- The "Today" button on the main display toolbar is now shown when in DatePicker mode.
- When the calendar is in DatePicker mode, the current day is now highlighted fully in the display.
- Added public function setSelectedDatePickerDate(), which will set the currently selected a date in DatePicker mode.

<br>


## Version 1.3.1:
- Fixed a fault that caused the repeating event images to have an :hover and :active behaviour.
- Added "Hide Day" context menu support for the day headers (when more than 1 day is visible).
- The "useOnlyDotEventsForMainDisplay" setting now overrides the "maximumEventsPerDayDisplay" setting.
- Removed lots of duplicate code from the core that was no longer required.
- Added addHolidays() parameter "triggerEvent", which will fire the "onOptionsUpdated" event (if available).
- Fixed a fault that allowed holidays with the same text to be added to the same day.

<br>


## Version 1.3.0:
- Added missing background-color and color CSS values for tabs and tab contents.
- Fixed a fault that caused the main display toolbar buttons to not update correctly when the options are set manually.
- Added new setting "showExtraMainDisplayToolbarButtons", which states if the extra toolbar buttons are visible (defaults to true).
- Fixed a fault that prevented the Full Day view from refreshing when the Calendar goes to and from full-screen mode.
- Added new setting event "onFullScreenModeChanged", which is triggered when the full-screen mode is changed (if enabled).
- Added new public function setEventsFromJson(), which sets new events from a JSON string (clears all others).
- Added new public function addEventsFromJson(), which adds new events from a JSON string.
- Added new setting events "onEventsSetFromJSON" and "onEventsAddedFromJSON" for the new public functions.
- Added DatePicker mode support (the element to assign to is checked and made a DatePicker if it's an input field).
- Added support to use more than 1 Calendar in a page (sorry for the delay).
- Fixed a fault that caused the Years drop-down list to appear strange when inside a node with the same class name.
- Added a close button to the event tooltips.

<br>


## Version 1.2.2:
- Events must now be double-clicked to be edited (removed the hover effects, which caused display issues in the views).
- Fixed a fault that would cause the main display to update when dropping an event on its original date.
- Internal changes for content variables defined in the base of the class.
- Added CLASS.md to the project to explain the parameters available for the class constructor.
- Mass documentation improvements are based on some of the more recent changes.

<br>


## Version 1.2.1:
- Fixed a fault that would cause removeElementsClassName() to fail when handling more than one DOM element.
- Internal structure changes for constant values and code cleanups, enhancements, etc.
- Fixed a fault that allowed the "repeatEnds" date to be smaller than the events "to" date.
- The "Remove Events" buttons on the Title Bar for the Weekly/All Event views are now on the left side.
- Decreased the font-weight for the years drop-down menu (on the main display).
- The title bars now use a shared font weight (defaults to 900), which fixes some dialogs using the wrong value.

<br>


## Version 1.2.0:
- Added Copy and Paste support of events (events can be pasted on the main display, or Full Day view).
- Context drop-down menu items that open dialogs now have a "..." at the end to indicate this.
- Decreased the default padding size that is used for the drop-down context menus.
- Added Duplicate context menu support for events (will show the details in the Event Editor dialog).
- Added new setting "defaultEventBackgroundColor", which states the default event background color that should be used.
- Added new setting "defaultEventTextColor", which states the default event text color that should be used.
- Added new setting "defaultEventBorderColor", which states the default event border color that should be used.
- Added "showAlerts" property support to Events with UI support (states if browser alerts should be shown, defaults to true).
- Added stacking of overlapping events support to the Full Day view (2 columns to start with).

<br>


## Version 1.1.2:
- The Full Day view no longer shows days that are hidden (the Today button is also hidden to prevent jumping to a hidden day).
- Renamed the CSS class "current-year-selector" to "year-selected".
- Added support to show the years that contain events in the year's down-down menu (new CSS class "year-has-events").
- Added support to search by Group and Url in the Search dialog.
- Added a new checkbox called "Advanced" to the Search dialog, which will hide the additional search options (saves screen space).
- When opening the Search dialog via the global key, all open overlays (Day, Weekly and All) views are closed.
- Search options now has its own internal configuration and can be set by the new public function "setSearchOptions()".
- Added base documentation for the new search options and new "SEARCH_OPTIONS.md".
- Added new event "onSearchOptionsUpdated", which is fired every time the search options are changed (via UI or code).
- Fixed some spelling issues in some more spelling and grammar mistakes in the existing documentation.

<br>


## Version 1.1.1:
- Decreased the width/height of the hour/half hour display shown on the side in the Full Day view.
- Fixed the font size for the drop-down menus not adhering to the default font-size media rules.
- The headers in the exported file types (except CSV/TSV/MD) are now sorted in alphabetical order.
- Massive improvements to the README.md file.

<br>


## Version 1.1.0:
- When attempting to fire a browser notification, if the API is not supported, errors are no longer reported (see the console).
- Added double-click support to the Full Day view to add new events, showing the correct time based on the area clicked.
- Added support for custom repeat periods for events (either by Daily, Weekly, Monthly, or Yearly).
- Fixed base documentation for the "repeatsEvery" property for events.
- Fixed the input fields showing a hover effect when they are disabled.
- Fixed the radio buttons showing a hover effect when they are disabled.
- Fixed some overload SCSS issues when styling the tab content containers.
- Added "lastUpdated" support for events (only updated if the event is actually changed).
- Added "LAST-MODIFIED" support for iCal exports, and "lastUpdated" to all other export types.
- Fixed some very bad spelling mistakes in the documentation.
- The events onPreviousMonth, onNextMonth, onPreviousYear, onNextYear, and onSetDate now have the new date passed to them.
- Added global Escape key support for open dialogs (not Confirmation Messages or Search).
- Added global Ctrl/Command + Shift + A support to open the Add Event window (when manual editing is enabled).
- Code changes to make the KeyCodes a little easier to read.
- Added global Ctrl/Command + Shift + F support to open the Search dialog (instead of Ctrl/Command + F in full-screen mode).
- Added :active CSS selector for the tab control headers (for all dialogs that use them).

<br>


## Version 1.0.2:
- Fixed a fault that allowed all the visible days in the Configuration window to be turned off (causing huge display issues).
- The public function destroy() will now remove all drop-down menus and dialogs from the document body.
- Fixed a sizing issue for overlays that caused them to be 1 pixel out (causing a slight gap).
- Added half-hour separator lines on the Full Day view (dashed and CSS controlled).
- Fixed a fault that prevented new events (without a group name assigned) from showing up (after saving configuration changes).
- Fixed all export dates for content and filenames being 1 month out every time.

<br>


## Version 1.0.1:
- A selectable "To" date can no longer be smaller than a "From" date (in browsers where the DatePicker is supported).
- Fixed a fault that prevented the main display from building correctly when manual event editing is disabled.
- Fixed a fault that prevented the event context menu showing (for showing Open Url option) when manual editing is disabled.
- Fixed some very bad naming for internal objects (no functional changes).

<br>


## Version 1.0.0:
- Added context menu support to the Full Day view (allowing events to be cleared, or added).
- Fixed a fault that prevented the event context menu from rebuilding when manual editing is re-enabled.
- Reordered the event context menu and added new icons.
- When using the "Remove Events" option (anywhere), it now only removes non-repeating events (confirmation text updated).
- Array options are now checked correctly to make sure they are an array and contain the right number of items.
- The "visibleDays" option is now taken into account when showing the Weekly view (so only visible days will show).
- Fixed a fault that allowed events to be added in the Weekly view when manual event adding/editing is disabled.
- Added new event "onNotificationClicked", which is triggered when an event notification is clicked.
- Added new option "allowEventScrollingOnMainDisplay", which allows days in the main display to be scrolled (see documentation).
- Added new public function addHolidays, which will add new holidays and re-draw the calendar.
- Added "Open Url" support to the event context menu (only available if a Url has been set for the event).
- Fixed a fault that prevented the cached window object from being used to open new windows.
- Added "Visible Days" tab to the Configuration dialog, allowing the visible days in the display to be toggled.
- Added new option "urlWindowTarget", which states the target for an event Url that is opened (defaults to _blank for a new window).
- Added "Enable day name headers in the main display" option to "Display" on the Configuration dialog.
- Added the "Today" button to the Full Day view for quickly jumping to the current date.
- Added a "This Week" button to the Weekly view for quickly jumping to the current week.

<br>


## Version 0.9.9:
- Optimizations and cleanups to the core code (less repeating code, more functions, etc).
- The context menus now open with a minor fade effect.
- The local timezone is now determined when adding a new event, ensuring that it's added to the right day.
- The "Add Event" context menu item is now bold by default.
- The "Remove Events" buttons (shown in the views) are now only shown when manual event editing is enabled.
- The month names shown in the main display (for the previous/next month) can now be clicked to quickly jump to that month.
- The "Expand Day" button on the main display is now only shown on larger screens (prevents overlapping).
- The "Expand Day" button on the main display now uses a new expand button (similar to other buttons).
- Added support to export events to the TSV (tab-separated values) file format.
- The CSS class names used for the tabs (in the Configuration dialog) have been moved and renamed.
- The "Add Event" dialog has been split up into separate tabs (due to the size getting too large for smaller displays).
- Added "url" support for events (when a notification is clicked, if set, the URL will be opened in a new window).

<br>


## Version 0.9.8a:
- Reverted date changes from 0.9.8.

<br>


## Version 0.9.8:
- Tooltips now stay open when an event is hovered over (moving the mouse again over the vent will not close it).
- Fixed another fault that caused dates selected for events to be out by one day.
- Fixed a fault that caused an extra ":" character to appear in the exported JSON data.
- Events exported to JSON now use proper value types so they can be re-used for imports.
- Added drop support to all views that will allow a file (containing JSON, or an array of events) to be added.
- Added support to remove all the events on a specific day in the Weekly View (new X button on the day title bar).
- Added support to remove all the events on a specific day in the All Events View (new X button on the day title bar).
- The iCal property DTSTAMP has been changed to CREATED.
- Fixed a fault that caused the CREATED, DTSTART and DTEND values in the exported iCal events to be in the wrong format.
- Fixed a fault that caused repeating events that are ignored (for specific dates) to still show up in all other views.

<br>


## Version 0.9.7:
- Added repeat Every 2 Weeks support (please update your events, the IDs for the others have been changed.  Sorry).
- Added "Enable drag & drop for events" option to the Configuration dialog.
- Renamed the tabs and setting names for the Configuration dialog (smaller and better).
- Added "Organizer" to the Configuration dialog, with support to change the name and email address.
- When using drag & drop, the "repeatEnds" property on the event is now updated to reflect the changes.
- Extended the function updateEventDateTimes() to allow updating the "repeatEnds" property on the event.
- The Search dialog is now hidden whenever you which to an overlay view (weekly, all events, full-day).
- Fixed a fault that caused the Search dialog to appear over the modal dialogs.
- The dialog drop shadows can now be changed per dialog (the base CSS class has been removed).

<br>


## Version 0.9.6:
- Added new option visibleDays, which states the days that are visible (defaults to all days, see documentation).
- Fixed a fault that prevented the first event in a repeating series from being removed.
- Extended the Configuration dialog to include tabs, with a new one called Display Options that contains:
  1.  Enable auto-refresh for events
  2.  Enable browser notifications
  3.  Enable tooltips
  * New translatable string options have also been added for the new text.
- The Configuration dialog is now available at all times.
- Fixed a fault that prevented the Configuration dialog from using the right font and font-sizes.
- Added new event onOptionsUpdated, which is triggered when setOptions() is called and in the Configuration dialog.
- Added drag & drop support within the all-event view (same as the main display).
- Events in the views, and the main tooltip, now show the total duration (in days, hours and minutes).
- New translation string options added for the event duration text.
- Changed the base styles for the dialogs can now be done in calendar-dialog CSS class.
- Added a drop shadow to all the dialogs.
- The disabled background color is now a few shades lighter.
- Fixed standard border sizes now being shared within the SCSS files.

<br>


## Version 0.9.5:
- Fixed a fault that caused the public function addEvents() to fire the wrong event.
- Double-clicking the headers in the Week/All Events views (for a week/month) will now activate the expand button.
- Improved the "No events available" default text display in the Week view.
- An error log is now shown in the developer console when an input type is not supported by the browser.
- Added public function updateEvents(), which will update an array of existing events.
- Fixed a fault that prevented the tooltip title for an event to be cleared before being shown again.
- Fixed a fault that prevented the event found via the Search dialog from being focused when pressing Previous.
- Pressing Ctrl+Enter in the Search dialog will now move back to the previously found event.
- The "Contains" option on the Search dialog is now the default selection.

<br>


## Version 0.9.4:
- Added support to show the events in the main display as dots (optional, to save space; defaults to false).
- Added options "Starts With", "Ends With" and "Contains" to the Search dialog (defaults to the first one).
- Repeating events now show an icon in the display to indicate this (including the overlay views).
- Removed the "For:" label from the Search dialog (with option support), as it's not needed.
- Fixed a fault that caused new events to be added to the wrong date when added from the Event Editor.
- Fixed a fault that caused the wrong date to be used when setting the end of a repeating event.
- Fixed a fault that caused the wrong dates to be used when the date picker is now compatible with the browser.
- Faster rendering of the years drop-down menu (no longer sets classes when not required).
- Fixed the vertical scrollbar not showing up in the group's list on the Configuration dialog.

<br>


## Version 0.9.3:
- Added export to MD (markdown) file support.
- Added export to HTML file support.
- Added public function getVersion(), which returns the current version of Calendar.js.
- Fixed some documentation errors for functions (return types not being shown correctly).
- Fixed the PRODID for iCAL exports showing the wrong product data.
- Added gregorian time format support for iCAL export type.
- Added new option tooltipsEnabled, which allows the tooltips throughout the calendar to be disabled (on by default).
- Fixed a fault that caused the holidays to appear within the Day number text element (now placed under it).
- The first day of each month is now highlighted (the same style as the current day of the month).

<br>


## Version 0.9.2:
- Added support to show the previous/next month names in the days on the main display (optional, on by default).
- Added a new option "showDayNamesInMainDisplay" to disable the day names header in the main display (optional, on by default).
- Split out the documentation for strings shown in the display and fixed some of the types.
- Added new public function destroy(), which clears and removes the calendar from the DOM.
- The year's drop-down menu list now fades in when shown.
- Removed code that should be using the quick-build functions (less code).
- Added close (X) buttons to all dialogs (except the confirmation dialog) with full tooltip support.
- Added tooltip support to the ... buttons on the Event Editor dialog (more obvious which one does what).
- Added border hover effect to all input controls (text fields, checkboxes, radio buttons, etc).
- Added new public function getAllGroups(), which returns all the groups.
- Added new public function clearAllGroups(), which clears all the groups assigned to the events.
- Added Valentine's Day, Halloween, April Fools' Day and Earth Day to default holidays.
- Added a plus button to the Weekly View internal header panel for quickly adding new events.
- Added a plus button to the All Events View internal header panel for quickly adding new events.

<br>


## Version 0.9.1:
- Added new public function updateEventDateTimes().
- Drag & Drop now uses the new updateEventDateTimes() function (much faster).
- Double-clicking on the Search dialogs title bar will now toggle its minimized state.
- Fixed a fault that caused the event ID property to be overridden when updated in the Event Editor.

<br>


## Version 0.9.0:
- Fixed a fault that prevented all-day events from being exported from the Full Day view.
- Added grouping support for events (a new property called "group").
- Added a new configuration dialog, which can be used to control the visible groups (at this time).
- Added a timeline arrow that is shown in the Full Day view when the viewable date is the current date (optional, on by default).
- Removed the options "startsOnText" and "andFinishesOnText" as the text displays for times are now shorter.
- Decreased the height of the hours shown in the Full Day view to allow more events to be shown.
- Fixed a fault that caused an error when opening the Year drop-down menu when the current year is not available in the list.
- Fixed a fault that allowed the padding on the Years drop-down menu to be overridden.
- Added new options to set the maximum length allowed for event fields (each default to zero, which allows any length):
  1. maximumEventTitleLength
  2. maximumEventDescriptionLength
  3. maximumEventLocationLength
  4. maximumEventGroupLength
- Week numbers are now calculated more accurately for the title bar text.
- Added browser notification support for events (modern browsers only, while clicking one will open the Event Editor dialog).

<br>


## Version 0.8.2:
- Details for an All-Day event are now hidden in the Full Day view (can be turned on using "showAllDayEventDetailsInFullDayView").
- Added new option "showWeekNumbersInTitles", which will display the week numbers where applicable (off by default).
- Increased the maximum responsive width so that the default text/icons do not overlap.
- Weekend days in the Weekly view now show the same background color as the days on the main display.
- Fixed a fault that caused the drag & drop hover effects to activate for objects not dragged in the calendar.
- Dragging an event that repeats (or spans multiple days) takes the day it was dragged from into account (drops more accurately).
- On the Search dialog, the "Title" option is now checked by default.
- Fixed a huge bug that caused events to change dates when searching.
- When searching, the events that are found are now focused and show a pulsing effect on the main display.

<br>


## Version 0.8.1:
- Added public function "setEvents()", which adds an array of events and clears the original (fires onEventsSet, if available).
- The option "autoRefreshTimerDelay" now defaults to 30000 milliseconds.
- When the month on display is the current month/year, the auto-refresh will now jump to the right date when the day changes.
- Added icons to the context menu shown for days on the main display.
- Fixed a fault that allowed HTML to be inserted into text displays (allowing script injection).
- Fixed a fault that caused the Export Events button to always be visible on the List All Events view.
- Fixed a padding fault on the Full Day view (now defaults to 0 to prevent display issues).
- When events are not available in the views, a new centred message is now shown (instead of whitespace).
- Fixed a fault that prevented the opened view from updating when calling one of the public functions.

<br>


## Version 0.8.0:
- Calling "setOptions()" now only sets the ones you have passed (no longer reverts the others to their defaults).
- Renamed the "Select Days To Exclude" dialog to "Repeat Options" (renames settings and CSS classes to match).
- Exported data now shows the days to exclude (for repeating events) as actual day names, instead of numbers.
- Fixed a fault that caused the incorrect dates to be used when showing a Full Day or Full Week (after skipping days/weeks).
- Fixed the context menu not working on the Full Day view events.
- Fixed a fault that prevented events from being removed when the checkbox is not available on the confirmation message.
- Fixed the extra toolbar buttons on the extra views not hiding when used on a smaller screen (as with the main display).
- Added support to expand a day into a Full Day view from the Weekly view.
- Added support to expand a month into the main display from the All Events view.
- The Full Day view now shows the events against a time view instead of a list (sorry for the delay in this).
- Added support to state when repeating events should end (defaults to never).
- If the Search dialog is minimized and the search button is pressed again, it is now restored.
- Fixed a fault that caused events not to appear in the main display when "maximumEventsPerDayDisplay" is set to zero.
- The "1+ More" text shown in the main display for days can now be clicked to expand the full day.
- Fixed a fault that caused the setting "dragAndDropForEventsEnabled" to be ignored.
- Added drag & drop support within the weekly view (same as the main display).
- The weekly view now shows all the days available, enabling better drag & drop support (new text setting available).
- Improved some of the default text for the drop-down menus (via new settings).

<br>


## Version 0.7.0:
- Added Turn On/Off full-screen mode buttons to the toolbars (in any view).
- Fixed the CSS class "ib-plus" being available twice in the master CSS file.
- Fixed full-screen mode appearing odd when used on a very small display (iPhone SE, Galaxy Fold, etc).
- The calendar now has a minimum width of 260px.
- Added public functions "turnOnFullScreen()" and "turnOffFullScreen()".
- Added public function "getEvents()", which returns all the events in an ordered array.
- Added public function "getEvent()", which returns the event details found for an event ID.
- Fixed the ID data being missing from the exported CSV data (it is now the first column shown).
- Added public functions "startTheAutoRefreshTimer()" and "stopTheAutoRefreshTimer()".
- Added public function "getCurrentDisplayDate()", which returns the current date being used in the main display.
- The current date is now always set to the beginning of the day and the 1st day of the month.
- Added public function "setCurrentDisplayDate()", which will set the main display date (fires "onSetDate", if available).
- Changed the mime type for exported JSON to application/json.
- Added FUNCTIONS.md documentation and fixed internal JS documentation for public functions.

<br>


## Version 0.6.2:
- Markdown files for documentation now display correctly and types are italic.

<br>


## Version 0.6.1:
- Added Markdown documentation files for options, events and holidays.
- Fixed some documentation errors.

<br>


## Version 0.6.0:
- Added support to remove an event from a repeating series (asked in the confirmation message).
- Holidays (Christmas Eve, Christmas Day, Boxing Day, New Year's Eve and New Year's Day) are now the default holidays.
- Added navigation key support when full-screen mode is activated:
  1. Left:  Moves to the previous month.
  2. Right:  Moves to the next month.
  3. Escape:  Closes full-screen mode.
  4. Down:  Jumps to the current month.
  6. F5:  Refreshes the current view.
  7. Ctrl/Command + F:  Opens the search dialog.
  8. Ctrl/Command + Left:  Moves to the previous year.
  9. Ctrl/Command + Right:  Moves to the next year.
- Added "created" support to events (set automatically if not available to the current date/time).
- Added "organizerName" support to events (set automatically if not available to options > organizerName).
- Added "organizerEmailAddress" support to events (set automatically if not available to options > organizerEmailAddress).
- Added support to export events to the iCAL format.
- Fixed events being in the wrong order when exported (to any format).
- Added public methods "moveToPreviousYear()" and "moveToNextYear()" (with new "on" events).

<br>


## Version 0.5.2:
- The text "All Day Event" is now "All-Day" (renamed all the settings to match).
- Fixed a fault that allowed text to be selected in a disabled text field (date, time).
- Added "grid-border-color" that states the border color of the internal grid borders (which is now a lighter gray).
- The day name headers now use 3 letters for the short names by default.
- Added holiday support (shown under day numbers and in the Full Day title bar) as a new option called "holidays".
- Transition effects are no longer shown when the Event Editor is opened (stops things jumping around).
- Fixed a fault that prevented the Search dialog from rebuilding when setting new options.
- Fixed a fault that caused the dialogs to become unresponsive when the main display is rebuilt.
- Fixed a script error occurring when nothing is found in the Search dialog.
- Added include "Title", "Description" and "Location" searching support in the Search dialog.
- Added support to minimize and restore the Search dialog (new button on the toolbar).
- Fixed a fault that caused the Search dialog to redraw every time the search button is pressed on the main toolbar.

<br>


## Version 0.5.1:
- Fixed exports (all except CSV) being broken.
- Fixed missing properties on CSV exports.
- Fixed weekly events not showing up in Internet Explorer.

<br>


## Version 0.5.0:
- When an API is called that forces a redraw of the main display, all drop-down menus are now hidden.
- Calling the public method "setOptions()" now rebuilds to the main display using the new settings.
- Fixed a fault that caused events to be assigned to the document/window more than once.
- Fixed a fault that prevented the Day drop-down menu from closing when opening the Year Selector drop-down menu.
- The From/To Date/Times on the Event Editor dialog are now joined up (uses less space).
- Fixed a fault that prevented the views from jumping back to the top of the view when opened again.
- Fixed a fault that caused the Full Day date checker loop to keep going (even after finding the event is on that day).
- Fixed an ordering fault in the Weekly View (the days would be ordered in the order they were found, not by date).
- Better responsive sizes for toolbar icons and font-sizes.
- Added event (repeatsEvery) repeating support (every day, week, month, and year), with new text settings.
- Added event (repeatEveryExcludeDays) exclude days for repeating events support (editable via a new dialog).
- Added a new context menu for events (with quick access to Remove and Edit) to all views.
- Fixed a fault that allowed a To time to be smaller than a From time on the Event Editor (for the same day).
- Fixed some of the editing menus items being available when manual editing of events is disabled.
- Decreased the default width of the "Select Colors" dialog.
- Removed the option "fullDayViewEnabled", as it's no longer needed.
- When dragging an event, the target area now shows a highlighted background color.
- When the "maximumEventsPerDayDisplay" value is reached for events, a new label is shown stating how many more exist.
- Added Previous/Next buttons to the toolbar for the Weekly and Day view, allowing you to skip back and forth.
- Fixed a fault that caused events to appear on the wrong that (start of the week was calculated incorrectly).

<br>


## Version 0.4.0:
- The Year Selector drop-down now auto-scrolls to the selected year.
- Removed unneeded class variables.
- All title-bar icons now use the "PureCSS" generated images, giving a much cleaner look and feel.
- Fixed a fault that caused optional text fields for Events to show up as "undefined" when edited or exported.
- Added "Location" support to events, with the extra information being shown in full events and tooltips.
- Event tooltip widths now auto-size to the available content (saves a lot of empty space).
- Added support to set the event Color, Text Color and Border Color (color, colorText, colorBorder properties).
- The "Title" field is now the first field in the Event Editor dialog.
- Added a new "..." button next to the Title text box on the event editor (allows choosing the colors for the event).
- Decreased the width of the "Select Export Type" dialog.
- Fixed a fault that allowed bad values through from Times on the Event Editor.
- Fixed a fault that caused bad times (characters other than numbers) to be allowed in events, which never show up.
- Fixed a fault that set the toolbar buttons to the wrong display type.
- The extra toolbar buttons on the main display are now hidden on smaller displays (refresh, export, list all, list week).
- Fixed spelling mistakes across the CSS and JS code for CSS class names.
- Renamed all dialog CSS classes to added "calendar-dialog" CSS class (to allow easier use of custom input styles).
- Added full search support (new "Search" button on the main toolbar), with option to Match Case.
- Fixed the text cursor being shown for text that cannot be selected.ß
- Fixed the Today button redrawing the main display even when the current month is in view.
- Added new option "minimumDayHeight", which allows you to set the height of the days in the main view (defaults to 0 - auto).
- Fixed the check/radio boxes using the full width of the container areas.
- The background color used for the headers on the main display is now a slightly lighter shade of gray.ß
- Weekend days in the main display are now shown in a color as the headers.
- The current day is now indicated by the day number being highlighted (instead of the whole day).
- Building events on the main display is now much faster.
- Updating the toolbar icons on the main display is now based on the events already checked, instead of searching again.
- The element that will hold the Calendar is now cleared before building starts (was causing some strange display issues).
- More JSDoc documentation improvements and type fixes.

<br>


## Version 0.3.0:
- Added the custom scrollbar to the textarea on the "Event Editor" dialog.
- The custom scroll-bar now has :hover and :active selectors.
- Added support to use the custom tooltip for every tooltip throughout the views.
- Fixed a fault that prevented the custom tooltips from hiding when the mouse is moved again.
- Fixed a fault that caused the wrong week to be shown when using the calendar on a Sunday.
- Fixed a fault that caused events to not show in the Weekly View when their times are greater than 00:00.
- The Weekly View now shows the From/To dates in the title bar instead of static text (option text removed).
- Fixed the full view content sizes being a few pixels off in height.
- Added transition effects to disabled inputs and check-marks.
- Renamed some of the settings to reflect the default text changes for dates shown on events (starts from, finishes, etc).
- The day name (Monday-Sunday) is now shown on the full day view.
- Fixed a fault that caused the full-screen mode to activate when double clicking on buttons and the year selector.
- Added context menu support for days (Add Event, Expand Day).
- Renamed tooltip "View Week Events" to "View Current Week Events".
- Fixed the tooltip text being selectable.
- Fixed some of the dialogs text being selectable.
- Added support to view any week’s events (available in the new day context menu as "View Current Week Events").
- Fixed the Weekly Events view jumping around dates when auto-updating.
- Fixed the current day being highlighted twice (for example, 1st this month, and then 1st in the next month).
- Added support to highlight the current day in the previous month/next month days.
- Fixed a fault that caused the dates to be shown in the wrong format for the Event Editor in Safari and Internet Explorer.
- Invalid dates entered in Safari and Internet Explorer via the Event Editor are now added to today date.
- Auto-update no longer runs when the Year Selector drop-down is visible.
- Fixed the tooltips being shown when a drop-down menu (Years, Context) is visible.
- The Year Selector drop-down menu now highlights the current year.
- Fixed outline issues when focusing on a input/textarea.  They now work in all browsers and have a transition effect.
- Event "id" property values are now maintained when editing or moving the event.
- Fixed an error removing the description from a tooltip when it's not required.
- Safer node adding/removing across the core code.

<br>


## Version 0.2.0:
- The from "Date" field is now focused when the Event Editor is opened.
- A confirmation dialog is now shown when removing an event.
- Added "Select Export Type" dialog, with CSV, XML, JSON and TEXT support now available.
- exportAllEvents() now takes a type parameter (accepts csv (default), xml, json and text).
- Added support for full-screen mode (double click the main title bar) with optional on/off setting.
- Fixed "click" and "resize" events in the document/window being overridden.
- Fixed a fault that prevented the year drop down menu being cantered correctly.
- The "Expand Day" button is now less intrusive and indicates what it will do.
- Added a styled tooltip for the events in the main display (with new settings).
- Improved SASS support for font-sizes, spacing, cell sizes, and border sizes.
- Auto event updating now only runs when the background of the document body is not displayed.

<br>


## Version 0.1.1:
- Added active CSS effects for all clickable elements.
- Minor documentation corrections.

<br>


## Version 0.1.0:
- Everything :)