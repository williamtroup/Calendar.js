# Calendar.js - Options:

Below are all the options that can be passed to the Calendar.js constructor, or "setOptions()".


### Standard Options:
<br/>

| Type: | Name: | Description: |
| --- | --- | --- |
| *boolean* | showDayNumberOrdinals | States if the day ordinal values should be shown (defaults to true). |
| *boolean* | dragAndDropForEventsEnabled | States if dragging and dropping events around the days of the month is enabled (defaults to true). |
| *number* | maximumEventsPerDayDisplay | The maximum number of events that should be displayed per day in the main calendar display (defaults to 3, 0 disables it). |
| *boolean* | exportEventsEnabled | States if exporting events is enabled (defaults to true). |
| *boolean* | manualEditingEnabled | States if adding, editing, dragging and removing events is enabled (defaults to true). |
| *boolean* | showTimesInMainCalendarEvents | States if the time should be shown on the main calendar view events (defaults to false). |
| *number* | autoRefreshTimerDelay | The amount of time to wait before each full refresh (defaults to 30000 milliseconds, 0 disables it). |
| *boolean* | fullScreenModeEnabled | States if double click on the main title bar activates full-screen mode (defaults to true). |
| *number* | eventTooltipDelay | The amount of time to wait until an event tooltip is shown (defaults to 1000 milliseconds). |
| *number* | minimumDayHeight | States the height the main calendar days should use (defaults to 0 - auto). |
| *Holiday[]* | holidays | The holidays that should be shown for specific days/months (refer to "Holiday" documentation for properties). |
| *string* | organizerName | The default name of the organizer (defaults to an empty string). |
| *string* | organizerEmailAddress | The default email address of the organizer (defaults to an empty string). |
| *number* | spacing | States the default spacing that should be used for additional margins (defaults to 10). |
| *boolean* | showAllDayEventDetailsInFullDayView | States if the extra details for an All Day event should be shown in the Full Day view (defaults to false). |
| *boolean* | showWeekNumbersInTitles | States if week numbers should be shown in the title bars (defaults to false). |
| *boolean* | showTimelineArrowsOnViews | States if the timeline arrows should be shown in the views (defaults to true). |
| *number* | maximumEventTitleLength | States the maximum length allowed for an event title (defaults to 0 to allow any size). |
| *number* | maximumEventDescriptionLength | States the maximum length allowed for an event description (defaults to 0 to allow any size). |
| *number* | maximumEventLocationLength | States the maximum length allowed for an event location (defaults to 0 to allow any size). |
| *number* | maximumEventGroupLength | States the maximum length allowed for an event group (defaults to 0 to allow any size). |
| *boolean* | eventNotificationsEnabled | States if notifications should be shown for events (defaults to false). |
| *boolean* | showPreviousNextMonthNamesInMainDisplay | States if the previous/next month names should be shown in the main display days (defaults to true). |
| *boolean* | showDayNamesInMainDisplay | States if the day names header should be shown in the main display (defaults to true). |
| *boolean* | tooltipsEnabled | States if the tooltips are enabled throughout all the displays (defaults to true). |
| *boolean* | useOnlyDotEventsForMainDisplay | States if only dot event icons should be used in the main display (to save space, defaults to false). |
| *number[]* | visibleDays | States the day numbers that should be visible (Outside listing all events.  Defaults to [ 0, 1, 2, 3, 4, 5, 6 ], Mon=0, Sun=6). |
| *boolean* | allowEventScrollingOnMainDisplay | States if the days in the main display can be scrolled (defaults to false, overrides maximumEventsPerDayDisplay if true). |
| *string* | urlWindowTarget | States the target that an event URL should be opened in (defaults to _blank for a new window). |
| *string* | defaultEventBackgroundColor | States the default background color that should be used for events (defaults to "#484848"). |
| *string* | defaultEventTextColor | States the default text color that should be used for events (defaults to "#F5F5F5"). |
| *string* | defaultEventBorderColor | States the default border color that should be used for events (defaults to "#282828"). |
| *boolean* | showExtraToolbarButtons | States if the extra toolbar buttons on the main title bars (except Previous/Next Month) are visible (defaults to true). |
| *boolean* | openInFullScreenMode | States if full-screen mode should be turned on when the calendar is rendered (defaults to false). |
| *boolean* | hideEventsWithoutGroupAssigned | States if events without a group should be hidden (defaults to false). |
| *boolean* | showHolidays | States if the holidays should be shown (defaults to true). |
| *boolean* | useTemplateWhenAddingNewEvent | States if a blank template event should be added when adding a new event (causing the dialog to be in edit mode, defaults to true). |
| *boolean* | useEscapeKeyToExitFullScreenMode | States if the escape key should exit full-screen mode (if enabled, defaults to true). |
| *Object* | minimumDatePickerDate | States the minimum date that can be selected in DatePicker mode (defaults to null). |
| *Object* | maximumDatePickerDate | States the minimum date that can be selected in DatePicker mode (defaults to null). |
| *boolean* | allowHtmlInDisplay | States if HTML can be used in the display (defaults to false). |
| *string* | datePickerSelectedDateFormat | States the display format that should be used for the DatePicker input field (defaults to "{d}{o} {mmmm} {yyyy}", see date display formats [here](DATE_FORMATS.md) for options). |
| *number[]* | weekendDays | States the day numbers that that are considered weekend days (defaults to [ 0, 1, 2, 3, 4, 5, 6 ], Mon=0, Sun=6). |
| *Object* | initialDateTime | States the date that the calendar should start from when first loaded (defaults to today). |
| *Search* | searchOptions | States all the configurable search options that should be used (refer to "Search Options" documentation for properties).  This is an alternate way of getting the options into the instance. |
| *Event[]* | events | States the events that will be shown when the calendar first renders (defaults to null). |
| *boolean* | applyCssToEventsNotInCurrentMonth | States if extra CSS should be applied to events that are not in the current (on the main display, defaults to true). |
| *boolean* | addYearButtonsOnMainDisplay | States if the year-jumping buttons should be added in the main display (defaults to false). |
| *number[]* | workingDays | States the day numbers that that are considered working days (defaults to [ 0, 1, 2, 3, 4, 5, 6 ], Mon=0, Sun=6). |
| *number* | minimumYear | The minimum year that can be shown in the Calendar (defaults to 1900). |
| *number* | maximumYear | The maximum year that can be shown in the Calendar (defaults to 2099). |
| *number* | defaultEventDuration | States the default duration used when a new event is added (defaults to 30 minutes). |
| *string* | monthTitleBarDateFormat | States the display format that should be used for the month title bar (defaults to "{mmmm} {yyyy}", see date display formats [here](DATE_FORMATS.md) for options). |
| *boolean* | configurationDialogEnabled | States if the configuration dialog is enabled (defaults to true). |
| *boolean* | popUpNotificationsEnabled | States if the popup notifications (when actions are performed) are enabled (defaults to true). |
| *boolean* | showMonthButtonsInYearDropDownMenu | States if the month name selector buttons are shown in the Year Drop-Down menu (defaults to true). |
| *boolean* | showSideMenuDays | States if the "Days" section on the Side Menu is visible (defaults to true). |
| *boolean* | showSideMenuGroups | States if the "Groups" section on the Side Menu is visible (defaults to true). |
| *boolean* | showSideMenuEventTypes | States if the "Event Types" section on the Side Menu is visible (defaults to true). |
| *boolean* | showSideMenuWorkingDays | States if the "Working Days" section on the Side Menu is visible (defaults to true). |
| *boolean* | showSideMenuWeekendDays | States if the "Weekend Days" section on the Side Menu is visible (defaults to true). |
| *number* | startOfWeekDay | States what day the week starts on (defaults to 0, with options: Mon = 0, Sat = 5, Sun = 6). |
| *boolean* | useLocalStorageForEvents | States if the events added should be stored in local storage (remembered between browser usages, defaults to false). |
| *boolean* | shortcutKeysEnabled | States if the shortcut keys are enabled (defaults to true). |
| *string* | workingHoursStart | States when the time the working hours start (for example, "09:00", and defaults to null). |
| *string* | workingHoursEnd | States when the time the working hours end (for example, "17:00", and defaults to null). |
| *boolean* | reverseOrderDaysOfWeek | States if the days of the week should be reversed (for Hebrew calendars, for example. Defaults to true). |
| *boolean* | importEventsEnabled | States if importing events is enabled (defaults to true). |
| *boolean* | useAmPmForTimeDisplays | States if the AM/PM time format should be used for all time displays (defaults to false). |
| *boolean* | isWidget | States if the new calendar instance is only a widget (defaults to false). |
| *boolean* | isPinUpViewEnabled | States if the pin-up view ie enabled (defaults to false). |
| *string[]* | pinUpViewImageUrls | States the the pin-up view images that should be used (defaults to []). |
| *number* | minutesBetweenSectionsInViews | States the number of minutes that should be used between headers/rows in all views (defaults to 30). |
| *string* | timelineViewDefaultAxis | States the default axis the timeline view should use (defaults to "group"). |
<br/>

### Translatable String Options:
<br/>

| Type: | Name: | Description: |
| --- | --- | --- |
| *string* | previousMonthTooltipText | The tooltip text that should be used for the "Previous Month" button. |
| *string* | nextMonthTooltipText | The tooltip text that should be used for the "Next Month" button. |
| *string* | previousDayTooltipText | The tooltip text that should be used for the "Previous Day" button. |
| *string* | nextDayTooltipText | The tooltip text that should be used for the "Next Day" button. |
| *string* | previousWeekTooltipText | The tooltip text that should be used for the "Previous Week" button. |
| *string* | nextWeekTooltipText | The tooltip text that should be used for the "Next Week" button. |
| *string* | addEventTooltipText | The tooltip text that should be used for the "Add Event" button. |
| *string* | closeTooltipText | The tooltip text that should be used for the "Close" button. |
| *string* | exportEventsTooltipText | The tooltip text that should be used for the "Export Events" button. |
| *string* | viewAllEventsTooltipText | The tooltip text that should be used for the "View All Events" button. |
| *string* | viewFullWeekTooltipText | The tooltip text that should be used for the "View Full Week" button. |
| *string* | todayTooltipText | The tooltip text that should be used for the "Today" button. |
| *string* | refreshTooltipText | The tooltip text that should be used for the "Refresh" button. |
| *string* | searchTooltipText | The tooltip text that should be used for the "Search" button. |
| *string* | expandDayTooltipText | The tooltip text that should be used for the "Expand Day" button. |
| *string[]* | dayHeaderNames | The names to use for the day headers (defaults to '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]'). |
| *string[]* | dayNames | The full day names (defaults to '[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]'). |
| *string[]* | dayNamesAbbreviated | The abbreviated day names (defaults to '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]'). |
| *string[]* | monthNames | The full month names (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]'). |
| *string[]* | monthNamesAbbreviated | The abbreviated month names (defaults to '[ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]'). |
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
| *string* | confirmEventRemoveTitle | The title of the confirmation message that is shown when removing an event (defaults to "Confirm Event Removal"). |
| *string* | confirmEventRemoveMessage | The text for the confirmation message that is shown when removing an event (defaults to "Removing this event cannot be undone. Do you want to continue?"). |
| *string* | okText | The text that should be displayed for the "OK" button. |
| *string* | exportEventsTitle | The text that should be displayed for the "Export Events" label. |
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
| *string* | repeatsCustomText | The text that should be displayed for the "Custom:" label. |
| *string* | repeatOptionsTitle | The text that should be displayed for the "Repeat Options" label. |
| *string* | moreText | The text that should be displayed for the "More" label. |
| *string* | includeText | The text that should be displayed for the "Include:" label. |
| *string* | minimizedTooltipText | The tooltip text that should be used for the "Minimize" button. |
| *string* | restoreTooltipText | The tooltip text that should be used for the "Restore" button. |
| *string* | removeAllEventsInSeriesText | The text that should be displayed for the "Remove All Events In Series" label. |
| *string* | createdText | The text that should be displayed for the "Created:" label. |
| *string* | organizerNameText | The text that should be displayed for the "Organizer:" label. |
| *string* | organizerEmailAddressText | The text that should be displayed for the "Organizer Email:" label. |
| *string* | enableFullScreenTooltipText | The tooltip text that should be used for the "Turn On Full-Screen Mode" button. |
| *string* | disableFullScreenTooltipText | The tooltip text that should be used for the "Turn Off Full-Screen Mode" button. |
| *string* | idText | The text that should be displayed for the "ID:" label. |
| *string* | expandMonthTooltipText | The tooltip text that should be used for the "Expand Month" button. |
| *string* | repeatEndsText | The text that should be displayed for the "Repeat Ends:" label. |
| *string* | noEventsAvailableText | The text that should be displayed for the "No events available." label. |
| *string* | viewWeekEventsText | The text that should be displayed for the "View Full Week" label. |
| *string* | noEventsAvailableFullText | The text that should be displayed for the "There are no events available to view." label. |
| *string* | clickText | The text that should be displayed for the "Click" label. |
| *string* | hereText | The text that should be displayed for the "here" label. |
| *string* | toAddANewEventText | The text that should be displayed for the "to add a new event." label. |
| *string* | weekText | The text that should be displayed for the "Week" label. |
| *string* | groupText | The text that should be displayed for the "Group:" label. |
| *string* | configurationTooltipText | The tooltip text that should be used for the "Configuration" button. |
| *string* | configurationTitleText | The text that should be displayed for the "Configuration" label. |
| *string* | groupsText | The text that should be displayed for the "Groups" label. |
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
| *string* | removeEventsTooltipText | The tooltip text that should be used for the "Remove Events" button. |
| *string* | confirmEventsRemoveTitle | The title of the confirmation message that is shown when removing events (defaults to "Confirm Events Removal"). |
| *string* | confirmEventsRemoveMessage | The text for the confirmation message that is shown when removing events (defaults to "Removing these non-repeating events cannot be undone.  Do you want to continue?"). |
| *string* | eventText | The text that should be displayed for the "Event" label. |
| *string* | optionalText | The text that should be displayed for the "Optional" label. |
| *string* | urlText | The text that should be displayed for the "Url:" label. |
| *string* | openUrlText | The text that should be displayed for the "Open Url" label. |
| *string* | enableDayNameHeadersInMainDisplayText | The text that should be displayed for the "Enable day name headers in the main display" label. |
| *string* | thisWeekTooltipText | The tooltip text that should be used for the "This Week" button. |
| *string* | dailyText | The text that should be displayed for the "Daily" label. |
| *string* | weeklyText | The text that should be displayed for the "Weekly" label. |
| *string* | monthlyText | The text that should be displayed for the "Monthly" label. |
| *string* | yearlyText | The text that should be displayed for the "Yearly" label. |
| *string* | repeatsByCustomSettingsText | The text that should be displayed for the "By Custom Settings" label. |
| *string* | lastUpdatedText | The text that should be displayed for the "Last Updated:" label. |
| *string* | advancedText | The text that should be displayed for the "Advanced" label. |
| *string* | copyText | The text that should be displayed for the "Copy" label. |
| *string* | pasteText | The text that should be displayed for the "Paste" label. |
| *string* | duplicateText | The text that should be displayed for the "Duplicate" label. |
| *string* | showAlertsText | The text that should be displayed for the "Show Alerts" label. |
| *string* | selectDatePlaceholderText | The text that should be displayed for the "Select date..." date-picker placeholder text. |
| *string* | hideDayText | The text that should be displayed for the "Hide Day" label. |
| *string* | notSearchText | The text that should be displayed for the "Not (opposite)" label. |
| *string* | showHolidaysInTheDisplaysText | The text that should be displayed for the "Show holidays in the main display and title bars" label. |
| *string* | newEventDefaultTitle | The default title that should be used for new events (defaults to "* New Event"). |
| *string* | urlErrorMessage | The error message shown for the "Please enter a valid Url in the 'Url' field (or leave blank)." label. |
| *string* | searchTextBoxPlaceholder | The text that should be displayed for the "Search" dialogs text fields placeholder (defaults to "Search title, description, etc..."). |
| *string* | currentMonthTooltipText | The text that should be displayed for the "Current Month" label. |
| *string* | cutText | The text that should be displayed for the "Cut" label. |
| *string* | showMenuTooltipText | The tooltip text that should be used for the "Show Menu" button. |
| *string* | eventTypesText | The text that should be displayed for the "Event Types" label. |
| *string* | eventTypeNormalText | The text that should be displayed for the "Normal" event label. |
| *string* | eventTypeMeetingText | The text that should be displayed for the "Meeting" event label. |
| *string* | eventTypeBirthdayText | The text that should be displayed for the "Birthday" event label. |
| *string* | eventTypeHolidayText | The text that should be displayed for the "Holiday" event label. |
| *string* | eventTypeTaskText | The text that should be displayed for the "Task" event label. |
| *string* | lockedText | The text that should be displayed for the "Locked:" label. |
| *string* | typeText | The text that should be displayed for the "Type:" label. |
| *string* | sideMenuHeaderText | The text that should be displayed for the "Calendar.js" side menu header label. |
| *string* | sideMenuDaysText | The text that should be displayed for the "Days" side menu label. |
| *string* | visibleDaysText | The text that should be displayed for the "Visible Days" label. |
| *string* | previousYearTooltipText | The tooltip text that should be used for the "Previous Year" button. |
| *string* | nextYearTooltipText | The tooltip text that should be used for the "Next Year" button. |
| *string* | showOnlyWorkingDaysText | The text that should be displayed for the "Show Only Working Days" label. |
| *string* | exportFilenamePlaceholderText | The text that should be displayed for the "Export" dialogs name placeholder (defaults to "Name (optional)"). |
| *string* | exportText | The text that should be displayed for the "Export" button. |
| *string* | configurationUpdatedText | The text that should be displayed for the "Configuration updated." notification. |
| *string* | eventAddedText | The text that should be displayed for the "{0} event added." notification. |
| *string* | eventUpdatedText | The text that should be displayed for the "{0} event updated." notification. |
| *string* | eventRemovedText | The text that should be displayed for the "{0} event removed." notification. |
| *string* | eventsRemovedText | The text that should be displayed for the "{0} events removed." notification. |
| *string* | eventsExportedToText | The text that should be displayed for the "Events exported to {0}." notification. |
| *string* | eventsPastedText | The text that should be displayed for the "{0} events pasted." notification. |
| *string* | eventsExportedText | The text that should be displayed for the "Events exported." notification. |
| *string* | copyToClipboardOnlyText | The text that should be displayed for the "Copy to clipboard only" label. |
| *string* | workingDaysText | The text that should be displayed for the "Working Days" label. |
| *string* | weekendDaysText | The text that should be displayed for the "Weekend Days" label. |
| *string* | showAsBusyText | The text that should be displayed for the "Show As Busy" label. |
| *string* | selectAllText | The tooltip text that should be displayed for the "Select All" label. |
| *string* | selectNoneText | The tooltip text that should be displayed for the "Select None" label. |
| *string* | importEventsTooltipText | The tooltip text that should be used for the "Import Events" button. |
| *string* | viewFullYearTooltipText | The tooltip text that should be used for the "View Full Year" button. |
| *string* | currentYearTooltipText | The tooltip text that should be used for the "Current Year" button. |
| *string* | alertOffsetText | The tooltip text that should be displayed for the "Alert Offset:" label. |
| *string* | viewFullDayTooltipText | The tooltip text that should be used for the "View Full Day" button. |
| *string* | confirmEventUpdateTitle | The title of the confirmation message that is shown when updating a repeating event (defaults to "Confirm Event Update"). |
| *string* | confirmEventUpdateMessage | The text for the confirmation message that is shown when updating a repeating event (defaults to "Would you like to update the event from this point forward, or the entire series?"). |
| *string* | forwardText | The text that should be displayed for the "Forward" button. |
| *string* | seriesText | The text that should be displayed for the "Series" button. |
| *string* | viewTimelineTooltipText | The tooltip text that should be used for the "View Timeline" button. |
| *string* | nextPropertyTooltipText | The tooltip text that should be used for the "Next Property" button. |
| *string* | noneText | The text that should be displayed for the "(none)" label. |