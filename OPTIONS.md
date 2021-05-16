# Calendar.js - Options:

Below are all the options that can be passed to the Calendar.js constructor, or "setOptions()".


### Standard Options:
<br/>

| Type: | Name: | Description: |
| --- | --- | --- |
| *boolean* | showDayNumberOrdinals | States if the day ordinal values should be shown (defaults to true). |
| *boolean* | dragAndDropForEventsEnabled | States if dragging and dropping events around the days of the month is enabled (defaults to true). |
| *number* | maximumEventsPerDayDisplay | The maximum number of events that should be display per day in the main calendar display (defaults to 3, 0 disables it). |
| *number* | extraSelectableYearsAhead | The number of extra years ahead that are selectable in the drop down (defaults to 51). |
| *boolean* | exportEventsEnabled | States if exporting events is enabled (defaults to true). |
| *boolean* | manualEditingEnabled | States if adding, editing, dragging and removing events is enabled (defaults to true). |
| *boolean* | showTimesInMainCalendarEvents | States if the time should be shown on the main calendar view events (defaults to false). |
| *number* | autoRefreshTimerDelay | The amount of time to wait before each full refresh (defaults to 30000 milliseconds, 0 disables it). |
| *boolean* | fullScreenModeEnabled | States if double click on the main title bar activates full screen mode (defaults to true). |
| *number* | eventTooltipDelay | The amount of time to wait until an event tooltip is shown (defaults to 1000 milliseconds). |
| *number* | minimumDayHeight | States the height the main calendar days should used (defaults to 0 - auto). |
| *Object[]* | holidays | The holidays that should be shown for specific days/months (refer to "Holiday" documentation for properties). |
| *string* | organizerName | The default name of the organizer (defaults to empty string). |
| *string* | organizerEmailAddress | The default email address of the organizer (defaults to empty string). |
| *number* | spacing | States the default spacing that should be used for additional margins (defaults to 10). |
| *boolean* | showAllDayEventDetailsInFullDayView | States if the extra details for an All Day event should be shown in the Full Day view (defaults to false). |
| *boolean* | showWeekNumbersInTitles | States if week numbers should be shown in the title bars (defaults to false). |
| *boolean* | showTimelineArrowOnFullDayView | States if the timeline arrow should be shown in the full day view (defaults to true). |
| *number* | maximumEventTitleLength | States the maximum length allowed for an event title (defaults to 0 to allow any size). |
| *number* | maximumEventDescriptionLength | States the maximum length allowed for an event description (defaults to 0 to allow any size). |
| *number* | maximumEventLocationLength | States the maximum length allowed for an event location (defaults to 0 to allow any size). |
| *number* | maximumEventGroupLength | States the maximum length allowed for an event group (defaults to 0 to allow any size). |
| *boolean* | eventNotificationsEnabled | States if notifications should be shown for events (defaults to false). |
| *boolean* | showPreviousNextMonthNamesInMainDisplay | States if the previous/next month names should be shown in the main display days (defaults to true). |
| *boolean* | showDayNamesInMainDisplay | States if the day names header should be shown in the main display (defaults to true). |
| *boolean* | tooltipsEnabled | States if the tooltips are enabled throughout all the displays (defaults to true). |
| *boolean* | useOnlyDotEventsForMainDisplay | States if only dot event icons should be used in the main display (to save space, defaults to false). |
| *Object[]* | visibleDays | States the day numbers that should be visible (Outside listing all events.  Defaults to [ 0, 1, 2, 3, 4, 5, 6 ], Mon=0, Sun=6). |

<br/>

### Translatable String Options:
<br/>

| Type: | Name: | Description: |
| --- | --- | --- |
| *string* | previousMonthTooltipText | The tooltip text that should be used for for the "Previous Month" button. |
| *string* | nextMonthTooltipText | The tooltip text that should be used for for the "Next Month" button. |
| *string* | previousDayTooltipText | The tooltip text that should be used for for the "Previous Day" button. |
| *string* | nextDayTooltipText | The tooltip text that should be used for for the "Next Day" button. |
| *string* | previousWeekTooltipText | The tooltip text that should be used for for the "Previous Week" button. |
| *string* | nextWeekTooltipText | The tooltip text that should be used for for the "Next Week" button. |
| *string* | addEventTooltipText | The tooltip text that should be used for for the "Add Event" button. |
| *string* | closeTooltipText | The tooltip text that should be used for for the "Close" button. |
| *string* | exportEventsTooltipText | The tooltip text that should be used for for the "Export Events" button. |
| *string* | listAllEventsTooltipText | The tooltip text that should be used for for the "View All Events" button. |
| *string* | listWeekEventsTooltipText | The tooltip text that should be used for for the "View Current Week Events" button. |
| *string* | todayTooltipText | The tooltip text that should be used for for the "Today" button. |
| *string* | refreshTooltipText | The tooltip text that should be used for for the "Refresh" button. |
| *string* | searchTooltipText | The tooltip text that should be used for for the "Search" button. |
| *string* | expandDayTooltipText | The tooltip text that should be used for for the "Expand Day" button. |
| *Object[]* | dayHeaderNames | The names to use for the day headers (defaults to '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]'). |
| *Object[]* | dayNames | The full names (defaults to '[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]'). |
| *Object[]* | monthNames | The names to use for months (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]'). |
| *string* | fromText | The text that should be displayed for the "From:" label. |
| *string* | toText | The text that should be displayed for the "To:" label. |
| *string* | isAllDayText | The text that should be displayed for the "Is All-Day" label. |
| *string* | titleText | The text that should be displayed for the "Title:" label. |
| *string* | descriptionText | The text that should be displayed for the "Description:" label. |
| *string* | locationText | The text that should be displayed for the "Location:" label. |
| *string* | addText | The text that should be displayed for the "Add" button. |
| *string* | updatedText | The text that should be displayed for the "Update" button. |
| *string* | cancelText | The text that should be displayed for the "Cancel" button. |
| *string* | removeEventText | The text that should be displayed for the "Remove Event" button. |
| *string* | addEventTitle | The title bar text that is shown for the "Add Event" label. |
| *string* | editEventTitle | The title bar text that is shown for the "Edit Event" label. |
| *string* | exportStartFilename | The starting filename that should be used when exporting all the calendar events (defaults to "exported_events_"). |
| *string* | fromTimeErrorMessage | The error message shown for the "Please select a valid 'From' time." label. |
| *string* | toTimeErrorMessage | The error message shown for the "Please select a valid 'To' time." label. |
| *string* | toSmallerThanFromErrorMessage | The error message shown for the "Please select a 'To' date that is larger than the 'From' date." label. |
| *string* | titleErrorMessage | The error message shown for the "Please enter a value in the 'Title' field (no empty space)." label. |
| *string* | stText | The day ordinal text for "st". |
| *string* | ndText | The day ordinal text for "nd". |
| *string* | rdText | The day ordinal text for "rd". |
| *string* | thText | The day ordinal text for "th". |
| *string* | yesText | The text that should be displayed for the "Yes" label. |
| *string* | noText | The text that should be displayed for the "No" label. |
| *string* | allDayText | The text that should be displayed for the "All-Day" label. |
| *string* | allEventsText | The text that should be displayed for the "All Events" label. |
| *string* | toTimeText | The text that should be displayed for the "to" label. |
| *string* | confirmEventRemoveTitle | The title of the confirmation message shown when removing an event (defaults to "Confirm Event Removal"). |
| *string* | confirmEventRemoveMessage | The text for the confirmation message shown when removing an event (defaults to "Removing this event cannot be undone. Do you want to continue?"). |
| *string* | okText | The text that should be displayed for the "OK" button. |
| *string* | selectExportTypeTitle | The text that should be displayed for the "Select Export Type" label. |
| *string* | selectColorsText | The text that should be displayed for the "Select Colors" label. |
| *string* | backgroundColorText | The text that should be displayed for the "Background Color:" label. |
| *string* | textColorText | The text that should be displayed for the "Text Color:" label. |
| *string* | borderColorText | The text that should be displayed for the "Border Color:" label. |
| *string* | searchEventsTitle | The text that should be displayed for the "Search Events" label. |
| *string* | previousText | The text that should be displayed for the "Previous" button. |
| *string* | nextText | The text that should be displayed for the "Next" button. |
| *string* | matchCaseText | The text that should be displayed for the "Match Case" label. |
| *string* | repeatsText | The text that should be displayed for the "Repeats:" label. |
| *string* | repeatDaysToExcludeText | The text that should be displayed for the "Repeat Days To Exclude:" label. |
| *string* | daysToExcludeText | The text that should be displayed for the "Days To Exclude:" label. |
| *string* | seriesIgnoreDatesText | The text that should be displayed for the "Series Ignore Dates:" label. |
| *string* | repeatsNever | The text that should be displayed for the "Never" label. |
| *string* | repeatsEveryDayText | The text that should be displayed for the "Every Day" label. |
| *string* | repeatsEveryWeekText | The text that should be displayed for the "Every Week" label. |
| *string* | repeatsEvery2WeeksText | The text that should be displayed for the "Every 2 Weeks" label. |
| *string* | repeatsEveryMonthText | The text that should be displayed for the "Every Month" label. |
| *string* | repeatsEveryYearText | The text that should be displayed for the "Every Year" label. |
| *string* | repeatOptionsTitle | The text that should be displayed for the "Repeat Options" label. |
| *string* | moreText | The text that should be displayed for the "More" label. |
| *string* | includeText | The text that should be displayed for the "Include:" label. |
| *string* | minimizedTooltipText | The tooltip text that should be used for for the "Minimize" button. |
| *string* | restoreTooltipText | The tooltip text that should be used for for the "Restore" button. |
| *string* | removeAllEventsInSeriesText | The text that should be displayed for the "Remove All Events In Series" label. |
| *string* | createdText | The text that should be displayed for the "Created:" label. |
| *string* | organizerNameText | The text that should be displayed for the "Organizer:" label. |
| *string* | organizerEmailAddressText | The text that should be displayed for the "Organizer Email:" label. |
| *string* | enableFullScreenTooltipText | The tooltip text that should be used for for the "Turn On Full-Screen Mode" button. |
| *string* | disableFullScreenTooltipText | The tooltip text that should be used for for the "Turn Off Full-Screen Mode" button. |
| *string* | idText | The text that should be displayed for the "ID:" label. |
| *string* | expandMonthTooltipText | The tooltip text that should be used for for the "Expand Month" button. |
| *string* | repeatEndsText | The text that should be displayed for the "Repeat Ends:" label. |
| *string* | noEventsAvailableText | The text that should be displayed for the "No events available." label. |
| *string* | viewWeekEventsText | The text that should be displayed for the "View Week Events" label. |
| *string* | noEventsAvailableFullText | The text that should be displayed for the "There are no events available to view." label. |
| *string* | clickText | The text that should be displayed for the "Click" label. |
| *string* | hereText | The text that should be displayed for the "here" label. |
| *string* | toAddANewEventText | The text that should be displayed for the "to add a new event." label. |
| *string* | weekText | The text that should be displayed for the "Week" label. |
| *string* | groupText | The text that should be displayed for the "Group:" label. |
| *string* | configurationTooltipText | The tooltip text that should be used for for the "Configuration" button. |
| *string* | configurationTitleText | The text that should be displayed for the "Configuration" label. |
| *string* | groupsTabText | The text that should be displayed for the "Groups" tab. |
| *string* | eventNotificationTitle | The text that should be displayed for the notification title (defaults to "Calendar.js"). |
| *string* | eventNotificationBody | The text that should be displayed for the notification body (defaults to "The event '{0}' has started."). |
| *string* | optionsText | The text that should be displayed for the "Options:" label. |
| *string* | startsWithText | The text that should be displayed for the "Starts With" label. |
| *string* | endsWithText | The text that should be displayed for the "Ends With" label. |
| *string* | containsText | The text that should be displayed for the "Contains" label. |
| *string* | displayTabText | The text that should be displayed for the "Display" tab. |
| *string* | enableAutoRefreshForEventsText | The text that should be displayed for the "Enable auto-refresh for events" label. |
| *string* | enableBrowserNotificationsText | The text that should be displayed for the "Enable browser notifications" label. |
| *string* | enableTooltipsText | The text that should be displayed for the "Enable tooltips" label. |
| *string* | dayText | The text that should be displayed for the "day" label. |
| *string* | daysText | The text that should be displayed for the "days" label. |
| *string* | hourText | The text that should be displayed for the "hour" label. |
| *string* | hoursText | The text that should be displayed for the "hours" label. |
| *string* | minuteText | The text that should be displayed for the "minute" label. |
| *string* | minutesText | The text that should be displayed for the "minutes" label. |
| *string* | enableDragAndDropForEventText | The text that should be displayed for the "Enable drag & drop for events" label. |
| *string* | organizerTabText | The text that should be displayed for the "Organizer" tab. |

<br/>

### Event Options:
<br/>

| Name: | Description: |
| --- | --- |
| onPreviousMonth | Specifies an event that will be triggered when the "Previous Month" button is pressed. |
| onNextMonth | Specifies an event that will be triggered when the "Next Month" button is pressed. |
| onPreviousYear | Specifies an event that will be triggered when moving to the previous year. |
| onNextYear | Specifies an event that will be triggered when moving to the next year. |
| onToday | Specifies an event that will be triggered when the "Today" button is pressed. |
| onEventAdded | Specifies an event that will be triggered when an event is added (passes the event to the function). |
| onEventUpdated | Specifies an event that will be triggered when an event is updated (passes the event to the function). |
| onEventRemoved | Specifies an event that will be triggered when an event is removed (passes the event to the function). |
| onEventsAdded | Specifies an event that will be triggered when events are added (passes the events to the function). |
| onEventsCleared | Specifies an event that will be triggered when the events are cleared. |
| onEventsExported | Specifies an event that will be triggered when the "Export Events" button is pressed. |
| onSetMonth | Specifies an event that will be triggered when the date on the main display is set externally. |
| onEventsSet | Specifies an event that will be triggered when events are set and the originals are cleared (passes the events to the function). |
| onGroupsCleared | Specifies an event that will be triggered when the event groups are cleared. |
| onEventsUpdated | Specifies an event that will be triggered when events are updated (passes the events to the function). |
| onOptionsUpdated | Specifies an event that will be triggered when the options are updated (passes the options to the function). |