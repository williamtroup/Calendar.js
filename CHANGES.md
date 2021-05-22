# Calendar.js - Change Log:

### Version 0.9.7:
- Added repeat Every 2 Weeks support (please update your events, the IDs for the others have been changed.  Sorry).
- Added "Enable drag & drop for events" option to the Configuration dialog.
- Renamed the tabs and setting names for the Configuration dialog (smaller and better).
- Added "Organizer" to the Configuration dialog, with support to change the name and email address.
- When using drag & drop, the "repeatEnds" property on the event is now updated to reflect the changes.
- Extended the function updateEventDateTimes() to allow updating the "repeatEnds" property on the event.
- The Search dialog is now hidden whenever you which to an overlay view (weekly, all events, full-day).
- Fixed a fault that caused the Search dialog to appear over the modal dialogs.
- The dialog drop shadows can now be changed per dialog (the base CSS class has been removed).

### Version 0.9.6:
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
- The disabled background colour is now a few shades lighter.
- Fixed standard border sizes now being shared within the SCSS files.

### Version 0.9.5:
- Fixed a fault that caused the public function addEvents() to fire the wrong event.
- Double-clicking the headers in the Week/All Events views (for a week/month) will now activate the expand button.
- Improved the "No events available" default text display in the Week view.
- An error log is now shown in the developer console when an input type is not supported by the browser.
- Added public function updateEvents(), which will update an array of existing events.
- Fixed a fault that prevented the tooltip title for an event to be cleared before being shown again.
- Fixed a fault that prevented the event found via the Search dialog from being focused when pressing Previous.
- Pressing Ctrl+Enter in the Search dialog will now move back to the previously found event.
- The "Contains" option on the Search dialog is now the default selection.

### Version 0.9.4:
- Added support to show the events in the main display as dots (optional, to save space; defaults to false).
- Added options "Starts With", "Ends With" and "Contains" to the Search dialog (defaults to the first one).
- Repeating events now show an icon in the display to indicate this (including the overlay views).
- Removed the "For:" label from the Search dialog (with option support), as it's not needed.
- Fixed a fault that caused new events to be added to the wrong date when added from the Event Editor.
- Fixed a fault that caused the wrong date to be used when setting the end of a repeating event.
- Fixed a fault that caused the wrong dates to be used when the date picker is now compatible with the browser.
- Faster rendering of the years drop-down menu (no longer sets classes when not required).
- Fixed the vertical scrollbar not showing up in the group's list on the Configuration dialog.

### Version 0.9.3:
- Added export to MD (markdown) file support.
- Added export to HTML file support.
- Added public function getVersion(), which returns the current version of Calendar.js.
- Fixed some documentation errors for functions (return types not being shown correctly).
- Fixed the PRODID for iCAL exports showing the wrong product data.
- Added gregorian time format support for iCAL export type.
- Added new option tooltipsEnabled, which allows the tooltips throughout the calendar to be disabled (on by default).
- Fixed a fault that caused the holidays to appear within the Day number text element (now placed under it).
- The first day of each month is now highlighted (the same style as the current day of the month).

### Version 0.9.2:
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

### Version 0.9.1:
- Added new public function updateEventDateTimes().
- Drag & Drop now uses the new updateEventDateTimes() function (much faster).
- Double-clicking on the Search dialogs title bar will now toggle its minimized state.
- Fixed a fault that caused the event ID property to be overridden when updated in the Event Editor.

### Version 0.9.0:
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

### Version 0.8.2:
- Details for an All-Day event are now hidden in the Full Day view (can be turned on using "showAllDayEventDetailsInFullDayView").
- Added new option "showWeekNumbersInTitles", which will display the week numbers where applicable (off by default).
- Increased the maximum responsive width so that the default text/icons do not overlap.
- Weekend days in the Weekly view now show the same background colour as the days on the main display.
- Fixed a fault that caused the drag & drop hover effects to activate for objects not dragged in the calendar.
- Dragging an event that repeats (or spans multiple days) takes the day it was dragged from into account (drops more accurately).
- On the Search dialog, the "Title" option is now checked by default.
- Fixed a huge bug that caused events to change dates when searching.
- When searching, the events that are found are now focused and show a pulsing effect on the main display.

### Version 0.8.1:
- Added public function "setEvents()", which adds an array of events and clears the original (fires onEventsSet, if available).
- The option "autoRefreshTimerDelay" now defaults to 30000 milliseconds.
- When the month on display is the current month/year, the auto-refresh will now jump to the right date when the day changes.
- Added icons to the context menu shown for days on the main display.
- Fixed a fault that allowed HTML to be inserted into text displays (allowing script injection).
- Fixed a fault that caused the Export Events button to always be visible on the List All Events view.
- Fixed a padding fault on the Full Day view (now defaults to 0 to prevent display issues).
- When events are not available in the views, a new centred message is now shown (instead of whitespace).
- Fixed a fault that prevented the opened view from updating when calling one of the public functions.

### Version 0.8.0:
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

### Version 0.7.0:
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

### Version 0.6.2:
- Markdown files for documentation now display correctly and types are italic.

### Version 0.6.1:
- Added Markdown documentation files for options, events and holidays.
- Fixed some documentation errors.

### Version 0.6.0:
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

### Version 0.5.2:
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

### Version 0.5.1:
- Fixed exports (all except CSV) being broken.
- Fixed missing properties on CSV exports.
- Fixed weekly events not showing up in Internet Explorer.

### Version 0.5.0:
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

### Version 0.4.0:
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

### Version 0.3.0:
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
- Fixed a fault that caused the full screen mode to activate when double clicking on buttons and the year selector.
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

### Version 0.2.0:
- The from "Date" field is now focused when the Event Editor is opened.
- A confirmation dialog is now shown when removing an event.
- Added "Select Export Type" dialog, with CSV, XML, JSON and TEXT support now available.
- exportAllEvents() now takes a type parameter (accepts csv (default), xml, json and text).
- Added support for full screen mode (double click the main title bar) with optional on/off setting.
- Fixed "click" and "resize" events in the document/window being overridden.
- Fixed a fault that prevented the year drop down menu being cantered correctly.
- The "Expand Day" button is now less intrusive and indicates what it will do.
- Added a styled tooltip for the events in the main display (with new settings).
- Improved SASS support for font-sizes, spacing, cell sizes, and border sizes.
- Auto event updating now only runs when the background of the document body is not displayed.

### Version 0.1.1:
- Added active CSS effects for all clickable elements.
- Minor documentation corrections.

### Version 0.1.0:
- Everything :)