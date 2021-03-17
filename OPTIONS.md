# Calendar.js - Options:

Below are all the options that can be passed to the Calendar.js constructor, or "setOptions()".


### Standard Options:
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
| *string* | monthNames | The names to use for months (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]'). |
| *boolean* | showDayNumberOrdinals | States if the day ordinal values should be shown (defaults to true). |
| *boolean* | dragAndDropForEventsEnabled | States if dragging and dropping events around the days of the month is enabled (defaults to true). |
| *string* | exportStartFilename | The starting filename that should be used when exporting all the calendar events (defaults to "exported_events_"). |
| *string* | fromTimeErrorMessage | The error message shown for the "Please select a valid 'From' time." label. |
| *string* | toTimeErrorMessage | The error message shown for the "Please select a valid 'To' time." label. |
| *string* | toSmallerThanFromErrorMessage | The error message shown for the "Please select a 'To' date that is larger than the 'From' date." label. |
| *string* | titleErrorMessage | The error message shown for the "Please enter a value in the 'Title' field (no empty space)." label. |
| *string* | stText | The day ordinal text for "st". |
| *string* | ndText | The day ordinal text for "nd". |
| *string* | rdText | The day ordinal text for "rd". |
| *string* | thText | The day ordinal text for "th". |
| *number* | maximumEventsPerDayDisplay | The maximum number of events that should be display per day in the main calendar display (defaults to 3). |
| *string* | yesText | The text that should be displayed for the "Yes" label. |
| *string* | noText | The text that should be displayed for the "No" label. |
| *number* | extraSelectableYearsAhead | The number of extra years ahead that are selectable in the drop down (defaults to 51). |
| *string* | allDayText | The text that should be displayed for the "All-Day" label. |
| *string* | allEventsText | The text that should be displayed for the "All Events" label. |
| *boolean* | exportEventsEnabled | States if exporting events is enabled (defaults to true). |
| *boolean* | manualEditingEnabled | States if adding, editing, dragging and removing events is enabled (defaults to true). |
| *boolean* | showTimesInMainCalendarEvents | States if the time should be shown on the main calendar view events (defaults to false). |
| *string* | startsOnText | The text that should be displayed for the "Starts on" label. |
| *string* | andFinishesOnText | The text that should be displayed for the "and finishes on" label. |
| *string* | toTimeText | The text that should be displayed for the "to" label. |
| *number* | autoRefreshTimerDelay | The amount of time to wait before each full refresh (defaults to 5000 milliseconds, 0 disables it). |
| *string* | confirmEventRemoveTitle | The title of the confirmation message shown when removing an event (defaults to "Confirm Event Removal"). |
| *string* | confirmEventRemoveMessage | The text for the confirmation message shown when removing an event (defaults to "Removing this event cannot be undone. Do you want to continue?"). |
| *string* | okText | The text that should be displayed for the "OK" button. |
| *string* | selectExportTypeTitle | The text that should be displayed for the "Select Export Type" label. |
| *boolean* | fullScreenModeEnabled | States if double click on the main title bar activates full screen mode (defaults to true). |
| *number* | eventTooltipDelay | The amount of time to wait until an event tooltip is shown (defaults to 1000 milliseconds). |
| *string* | selectColorsText | The text that should be displayed for the "Select Colors" label. |
| *string* | backgroundColorText | The text that should be displayed for the "Background Color:" label. |
| *string* | textColorText | The text that should be displayed for the "Text Color:" label. |
| *string* | borderColorText | The text that should be displayed for the "Border Color:" label. |
| *string* | searchEventsTitle | The text that should be displayed for the "Search Events" label. |
| *string* | forText | The text that should be displayed for the "For:" label. |
| *string* | previousText | The text that should be displayed for the "Previous" button. |
| *string* | nextText | The text that should be displayed for the "Next" button. |
| *string* | matchCaseText | The text that should be displayed for the "Match Case" label. |
| *number* | minimumDayHeight | States the height the main calendar days should used (defaults to 0 - auto). |
| *string* | repeatsText | The text that should be displayed for the "Repeats:" label. |
| *string* | repeatDaysToExcludeText | The text that should be displayed for the "Repeat Days To Exclude:" label. |
| *string* | daysToExcludeText | The text that should be displayed for the "Days To Exclude:" label. |
| *string* | seriesIgnoreDatesText | The text that should be displayed for the "Series Ignore Dates:" label. |
| *string* | repeatsNever | The text that should be displayed for the "Never" label. |
| *string* | repeatsEveryDayText | The text that should be displayed for the "Every Day" label. |
| *string* | repeatsEveryWeekText | The text that should be displayed for the "Every Week" label. |
| *string* | repeatsEveryMonthText | The text that should be displayed for the "Every Month" label. |
| *string* | repeatsEveryYearText | The text that should be displayed for the "Every Year" label. |
| *string* | repeatOptionsTitle | The text that should be displayed for the "Repeat Options" label. |
| *string* | moreText | The text that should be displayed for the "More" label. |
| *Object[]* | holidays | The holidays that should be shown for specific days/months (refer to "Holiday" documentation for properties). |
| *string* | includeText | The text that should be displayed for the "Include:" label. |
| *string* | minimizedTooltipText | The tooltip text that should be used for for the "Minimize" button. |
| *string* | restoreTooltipText | The tooltip text that should be used for for the "Restore" button. |
| *string* | removeAllEventsInSeriesText | The text that should be displayed for the "Remove All Events In Series" label. |
| *string* | createdText | The text that should be displayed for the "Created:" label. |
| *string* | organizerName | The default name of the organizer (defaults to empty string). |
| *string* | organizerEmailAddress | The default email address of the organizer (defaults to empty string). |
| *string* | organizerNameText | The text that should be displayed for the "Organizer:" label. |
| *string* | organizerEmailAddressText | The text that should be displayed for the "Organizer Email:" label. |
| *string* | enableFullScreenTooltipText | The tooltip text that should be used for for the "Turn On Full-Screen Mode" button. |
| *string* | disableFullScreenTooltipText | The tooltip text that should be used for for the "Turn Off Full-Screen Mode" button. |
| *string* | idText | The text that should be displayed for the "ID:" label. |
| *number* | spacing | States the default spacing that should be used for additional margins. |
| *string* | expandMonthTooltipText | The tooltip text that should be used for for the "Expand Month" button. |
| *string* | repeatEndsText | The text that should be displayed for the "Repeat Ends:" label. |

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