/**
 * @file        Calendar.js
 * @version     v1.6.5
 * @author      Bunoon
 * @license     GNU AGPLv3
 * @copyright   Bunoon 2022
 */

 
/**
 * Day Event.
 * 
 * This is the object format that is used to store the details about a day event.
 * 
 * @typedef     {Object}    Event
 *
 * @property    {string}    id                                          The ID for the event (set automatically if not available).
 * @property    {string}    title                                       The title of the event.
 * @property    {Object}    from                                        The date that the event occurs from.
 * @property    {Object}    to                                          The date that the event runs until.
 * @property    {string}    description                                 The in-depth description of the event.
 * @property    {string}    location                                    The location of the event.
 * @property    {string}    color                                       The color that should be used for the event (overrides all others).
 * @property    {string}    colorText                                   The color that should be used for the event text (overrides all others).
 * @property    {string}    colorBorder                                 The color that should be used for the event border (overrides all others).
 * @property    {boolean}   isAllDay                                    States if this event is for all-day.
 * @property    {number}    repeatEvery                                 States how often the event should repeat (0 = Never, 1 = Every Day, 2 = Every Week, 3 = Every 2 Weeks, 4 = Every Month, 5 = Every Year, 6 = Custom).
 * @property    {number[]}  repeatEveryExcludeDays                      States the days that should be excluded when an event is repeated.
 * @property    {Object[]}  seriesIgnoreDates                           States the dates (string format) that should be ignored when an event is repeated.
 * @property    {Object}    created                                     The date that the event was created.
 * @property    {string}    organizerName                               The name of the organizer.
 * @property    {string}    organizerEmailAddress                       The email address of the organizer.
 * @property    {Object}    repeatEnds                                  The date when a repeating series should end.
 * @property    {string}    group                                       The name of the group the event belongs to.
 * @property    {string}    url                                         The URL that is associated with the event.
 * @property    {number}    repeatEveryCustomType                       States the custom repeating period (0 = Daily, 1 = Weekly, 2 = Monthly, 3 = Yearly).
 * @property    {number}    repeatEveryCustomValue                      States the custom repeating period value (for example, 1 day, week, month, or year).
 * @property    {Object}    lastUpdated                                 The date that the event was last updated.
 * @property    {boolean}   showAlerts                                  States if browser notifications should be shown for this event (defaults to true).
 */


/**
 * Holiday.
 * 
 * This is the object format that is used to display a holiday.
 * 
 * @typedef     {Object}    Holiday
 *
 * @property    {number}    day                                         The day that the holiday occurs.
 * @property    {number}    month                                       The month that the holiday occurs.
 * @property    {string}    title                                       The title for the holiday (i.e. Christmas Day).
 * @property    {Object}    onClick                                     Specifies an event that will be triggered when the holiday is clicked.
 */


/**
 * Options.
 * 
 * @typedef     {Object}    Options
 * 
 * These are the properties that store the events that should be fired when various actions are triggered.
 *
 * @property    {Object}    onPreviousMonth                             Specifies an event that will be triggered when the "Previous Month" button is pressed (passes the new date to the function).
 * @property    {Object}    onNextMonth                                 Specifies an event that will be triggered when the "Next Month" button is pressed (passes the new date to the function).
 * @property    {Object}    onPreviousYear                              Specifies an event that will be triggered when moving to the previous year (passes the new date to the function).
 * @property    {Object}    onNextYear                                  Specifies an event that will be triggered when moving to the next year (passes the new date to the function).
 * @property    {Object}    onToday                                     Specifies an event that will be triggered when the "Today" button is pressed.
 * @property    {Object}    onEventAdded                                Specifies an event that will be triggered when an event is added (passes the event to the function).
 * @property    {Object}    onEventUpdated                              Specifies an event that will be triggered when an event is updated (passes the event to the function).
 * @property    {Object}    onEventRemoved                              Specifies an event that will be triggered when an event is removed (passes the event to the function).
 * @property    {Object}    onEventsAdded                               Specifies an event that will be triggered when events are added (passes the events to the function).
 * @property    {Object}    onEventsCleared                             Specifies an event that will be triggered when the events are cleared.
 * @property    {Object}    onEventsExported                            Specifies an event that will be triggered when the "Export Events" button is pressed.
 * @property    {Object}    onSetDate                                   Specifies an event that will be triggered when the date on the main display is set externally (passes the new date to the function).
 * @property    {Object}    onEventsSet                                 Specifies an event that will be triggered when events are set and the originals are cleared (passes the events to the function).
 * @property    {Object}    onGroupsCleared                             Specifies an event that will be triggered when the event groups are cleared.
 * @property    {Object}    onEventsUpdated                             Specifies an event that will be triggered when events are updated (passes the events to the function).
 * @property    {Object}    onOptionsUpdated                            Specifies an event that will be triggered when the options are updated (passes the options to the function).
 * @property    {Object}    onNotificationClicked                       Specifies an event that will be triggered when a notification is clicked (passes the event to the function).
 * @property    {Object}    onSearchOptionsUpdated                      Specifies an event that will be triggered when the search options are updated (passes the search options to the function).
 * @property    {Object}    onFullScreenModeChanged                     Specifies an event that will be triggered when the full-screen mode is changed (passes a flag to state if its on/off).
 * @property    {Object}    onEventsSetFromJSON                         Specifies an event that will be triggered when events are set from JSON and the originals are cleared (passes the JSON to the function).
 * @property    {Object}    onEventsAddedFromJSON                       Specifies an event that will be triggered when events are added from JSON (passes the JSON to the function).
 * @property    {Object}    onDatePickerDateChanged                     Specifies an event that will be triggered when a date is selected in date-picker mode (passes the new date to the function).
 * @property    {Object}    onGroupRemoved                              Specifies an event that will be triggered when a group is removed (passes the group removed to the function).
 * @property    {Object}    onEventUrlClicked                           Specifies an event that will be triggered when an events Url is clicked (passes the Url to the function).
 * 
 * These are the translatable strings that are used in Calendar.js.
 * 
 * @property    {string}    previousMonthTooltipText                    The tooltip text that should be used for for the "Previous Month" button.
 * @property    {string}    nextMonthTooltipText                        The tooltip text that should be used for for the "Next Month" button.
 * @property    {string}    previousDayTooltipText                      The tooltip text that should be used for for the "Previous Day" button.
 * @property    {string}    nextDayTooltipText                          The tooltip text that should be used for for the "Next Day" button.
 * @property    {string}    previousWeekTooltipText                     The tooltip text that should be used for for the "Previous Week" button.
 * @property    {string}    nextWeekTooltipText                         The tooltip text that should be used for for the "Next Week" button.
 * @property    {string}    addEventTooltipText                         The tooltip text that should be used for for the "Add Event" button.
 * @property    {string}    closeTooltipText                            The tooltip text that should be used for for the "Close" button.
 * @property    {string}    exportEventsTooltipText                     The tooltip text that should be used for for the "Export Events" button.
 * @property    {string}    listAllEventsTooltipText                    The tooltip text that should be used for for the "View All Events" button.
 * @property    {string}    listWeekEventsTooltipText                   The tooltip text that should be used for for the "View Current Week Events" button.
 * @property    {string}    todayTooltipText                            The tooltip text that should be used for for the "Today" button.
 * @property    {string}    refreshTooltipText                          The tooltip text that should be used for for the "Refresh" button.
 * @property    {string}    searchTooltipText                           The tooltip text that should be used for for the "Search" button.
 * @property    {string}    expandDayTooltipText                        The tooltip text that should be used for for the "Expand Day" button.
 * @property    {string[]}  dayHeaderNames                              The names to use for the day headers (defaults to '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]').
 * @property    {string[]}  dayNames                                    The full names (defaults to '[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]').
 * @property    {string[]}  monthNames                                  The names to use for months (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]').
 * @property    {string}    fromText                                    The text that should be displayed for the "From:" label.
 * @property    {string}    toText                                      The text that should be displayed for the "To:" label.
 * @property    {string}    isAllDayText                                The text that should be displayed for the "Is All-Day" label.
 * @property    {string}    titleText                                   The text that should be displayed for the "Title:" label.
 * @property    {string}    descriptionText                             The text that should be displayed for the "Description:" label.
 * @property    {string}    locationText                                The text that should be displayed for the "Location:" label.
 * @property    {string}    addText                                     The text that should be displayed for the "Add" button.
 * @property    {string}    updatedText                                 The text that should be displayed for the "Update" button.
 * @property    {string}    cancelText                                  The text that should be displayed for the "Cancel" button.
 * @property    {string}    removeEventText                             The text that should be displayed for the "Remove Event" button.
 * @property    {string}    addEventTitle                               The title bar text that is shown for the "Add Event" label.
 * @property    {string}    editEventTitle                              The title bar text that is shown for the "Edit Event" label.
 * @property    {string}    exportStartFilename                         The starting filename that should be used when exporting all the calendar events (defaults to "exported_events_").
 * @property    {string}    fromTimeErrorMessage                        The error message shown for the "Please select a valid 'From' time." label.
 * @property    {string}    toTimeErrorMessage                          The error message shown for the "Please select a valid 'To' time." label.
 * @property    {string}    toSmallerThanFromErrorMessage               The error message shown for the "Please select a 'To' date that is larger than the 'From' date." label.
 * @property    {string}    titleErrorMessage                           The error message shown for the "Please enter a value in the 'Title' field (no empty space)." label.
 * @property    {string}    stText                                      The day ordinal text for "st".
 * @property    {string}    ndText                                      The day ordinal text for "nd".
 * @property    {string}    rdText                                      The day ordinal text for "rd".
 * @property    {string}    thText                                      The day ordinal text for "th".
 * @property    {string}    yesText                                     The text that should be displayed for the "Yes" label.
 * @property    {string}    noText                                      The text that should be displayed for the "No" label.
 * @property    {string}    allDayText                                  The text that should be displayed for the "All-Day" label.
 * @property    {string}    allEventsText                               The text that should be displayed for the "All Events" label.
 * @property    {string}    toTimeText                                  The text that should be displayed for the "to" label.
 * @property    {string}    confirmEventRemoveTitle                     The title of the confirmation message shown when removing an event (defaults to "Confirm Event Removal").
 * @property    {string}    confirmEventRemoveMessage                   The text for the confirmation message shown when removing an event (defaults to "Removing this event cannot be undone.  Do you want to continue?").
 * @property    {string}    okText                                      The text that should be displayed for the "OK" button.
 * @property    {string}    selectExportTypeTitle                       The text that should be displayed for the "Select Export Type" label.
 * @property    {string}    selectColorsText                            The text that should be displayed for the "Select Colors" label.
 * @property    {string}    backgroundColorText                         The text that should be displayed for the "Background Color:" label.
 * @property    {string}    textColorText                               The text that should be displayed for the "Text Color:" label.
 * @property    {string}    borderColorText                             The text that should be displayed for the "Border Color:" label.
 * @property    {string}    searchEventsTitle                           The text that should be displayed for the "Search Events" label.
 * @property    {string}    previousText                                The text that should be displayed for the "Previous" button.
 * @property    {string}    nextText                                    The text that should be displayed for the "Next" button.
 * @property    {string}    matchCaseText                               The text that should be displayed for the "Match Case" label.
 * @property    {string}    repeatsText                                 The text that should be displayed for the "Repeats:" label.
 * @property    {string}    repeatDaysToExcludeText                     The text that should be displayed for the "Repeat Days To Exclude:" label.
 * @property    {string}    daysToExcludeText                           The text that should be displayed for the "Days To Exclude:" label.
 * @property    {string}    seriesIgnoreDatesText                       The text that should be displayed for the "Series Ignore Dates:" label.
 * @property    {string}    repeatsNever                                The text that should be displayed for the "Never" label.
 * @property    {string}    repeatsEveryDayText                         The text that should be displayed for the "Every Day" label.
 * @property    {string}    repeatsEveryWeekText                        The text that should be displayed for the "Every Week" label.
 * @property    {string}    repeatsEvery2WeeksText                      The text that should be displayed for the "Every 2 Weeks" label.
 * @property    {string}    repeatsEveryMonthText                       The text that should be displayed for the "Every Month" label.
 * @property    {string}    repeatsEveryYearText                        The text that should be displayed for the "Every Year" label.
 * @property    {string}    repeatsCustomText                           The text that should be displayed for the "Custom:" label.
 * @property    {string}    repeatOptionsTitle                          The text that should be displayed for the "Repeat Options" label.
 * @property    {string}    moreText                                    The text that should be displayed for the "More" label.
 * @property    {string}    includeText                                 The text that should be displayed for the "Include:" label.
 * @property    {string}    minimizedTooltipText                        The tooltip text that should be used for for the "Minimize" button.
 * @property    {string}    restoreTooltipText                          The tooltip text that should be used for for the "Restore" button.
 * @property    {string}    removeAllEventsInSeriesText                 The text that should be displayed for the "Remove All Events In Series" label.
 * @property    {string}    createdText                                 The text that should be displayed for the "Created:" label.
 * @property    {string}    organizerNameText                           The text that should be displayed for the "Organizer:" label.
 * @property    {string}    organizerEmailAddressText                   The text that should be displayed for the "Organizer Email:" label.
 * @property    {string}    enableFullScreenTooltipText                 The tooltip text that should be used for for the "Turn On Full-Screen Mode" button.
 * @property    {string}    disableFullScreenTooltipText                The tooltip text that should be used for for the "Turn Off Full-Screen Mode" button.
 * @property    {string}    idText                                      The text that should be displayed for the "ID:" label.
 * @property    {string}    expandMonthTooltipText                      The tooltip text that should be used for for the "Expand Month" button.
 * @property    {string}    repeatEndsText                              The text that should be displayed for the "Repeat Ends:" label.
 * @property    {string}    noEventsAvailableText                       The text that should be displayed for the "No events available" label.
 * @property    {string}    viewWeekEventsText                          The text that should be displayed for the "View Week Events" label.
 * @property    {string}    noEventsAvailableFullText                   The text that should be displayed for the "There are no events available to view." label.
 * @property    {string}    clickText                                   The text that should be displayed for the "Click" label.
 * @property    {string}    hereText                                    The text that should be displayed for the "here" label.
 * @property    {string}    toAddANewEventText                          The text that should be displayed for the "to add a new event." label.
 * @property    {string}    weekText                                    The text that should be displayed for the "Week" label.
 * @property    {string}    groupText                                   The text that should be displayed for the "Group:" label.
 * @property    {string}    configurationTooltipText                    The tooltip text that should be used for for the "Configuration" button.
 * @property    {string}    configurationTitleText                      The text that should be displayed for the "Configuration" label.
 * @property    {string}    groupsTabText                               The text that should be displayed for the "Groups" tab.
 * @property    {string}    eventNotificationTitle                      The text that should be displayed for the notification title (defaults to "Calendar.js").
 * @property    {string}    eventNotificationBody                       The text that should be displayed for the notification body (defaults to "The event '{0}' has started.").
 * @property    {string}    optionsText                                 The text that should be displayed for the "Options:" label.
 * @property    {string}    startsWithText                              The text that should be displayed for the "Starts With" label.
 * @property    {string}    endsWithText                                The text that should be displayed for the "Ends With" label.
 * @property    {string}    containsText                                The text that should be displayed for the "Contains" label.
 * @property    {string}    displayTabText                              The text that should be displayed for the "Display" tab.
 * @property    {string}    enableAutoRefreshForEventsText              The text that should be displayed for the "Enable auto-refresh for events" label.
 * @property    {string}    enableBrowserNotificationsText              The text that should be displayed for the "Enable browser notifications" label.
 * @property    {string}    enableTooltipsText                          The text that should be displayed for the "Enable tooltips" label.
 * @property    {string}    dayText                                     The text that should be displayed for the "day" label.
 * @property    {string}    daysText                                    The text that should be displayed for the "days" label.
 * @property    {string}    hourText                                    The text that should be displayed for the "hour" label.
 * @property    {string}    hoursText                                   The text that should be displayed for the "hours" label.
 * @property    {string}    minuteText                                  The text that should be displayed for the "minute" label.
 * @property    {string}    minutesText                                 The text that should be displayed for the "minutes" label.
 * @property    {string}    enableDragAndDropForEventText               The text that should be displayed for the "Enable drag & drop for events" label.
 * @property    {string}    organizerTabText                            The text that should be displayed for the "Organizer" tab.
 * @property    {string}    removeEventsTooltipText                     The tooltip text that should be used for for the "Remove Events" button.
 * @property    {string}    confirmEventsRemoveTitle                    The title of the confirmation message shown when removing events (defaults to "Confirm Events Removal").
 * @property    {string}    confirmEventsRemoveMessage                  The text for the confirmation message shown when removing events (defaults to "Removing these non-repeating events cannot be undone.  Do you want to continue?").
 * @property    {string}    eventText                                   The text that should be displayed for the "Event" label.
 * @property    {string}    optionalText                                The text that should be displayed for the "Optional" label.
 * @property    {string}    urlText                                     The text that should be displayed for the "Url:" label.
 * @property    {string}    openUrlText                                 The text that should be displayed for the "Open Url" label.
 * @property    {string}    visibleDaysTabText                          The text that should be displayed for the "Visible Days" tab.
 * @property    {string}    enableDayNameHeadersInMainDisplayText       The text that should be displayed for the "Enable day name headers in the main display" label.
 * @property    {string}    thisWeekTooltipText                         The tooltip text that should be used for for the "This Week" button.
 * @property    {string}    dailyText                                   The text that should be displayed for the "Daily" label.
 * @property    {string}    weeklyText                                  The text that should be displayed for the "Weekly" label.
 * @property    {string}    monthlyText                                 The text that should be displayed for the "Monthly" label.
 * @property    {string}    yearlyText                                  The text that should be displayed for the "Yearly" label.
 * @property    {string}    repeatsByCustomSettingsText                 The text that should be displayed for the "By Custom Settings" label.
 * @property    {string}    lastUpdatedText                             The text that should be displayed for the "Last Updated:" label.
 * @property    {string}    advancedText                                The text that should be displayed for the "Advanced" label.
 * @property    {string}    copyText                                    The text that should be displayed for the "Copy" label.
 * @property    {string}    pasteText                                   The text that should be displayed for the "Paste" label.
 * @property    {string}    duplicateText                               The text that should be displayed for the "Duplicate" label.
 * @property    {string}    showAlertsText                              The text that should be displayed for the "Show Alerts" label.
 * @property    {string}    selectDatePlaceholderText                   The text that should be displayed for the "Select date..." date-picker placeholder text.
 * @property    {string}    hideDayText                                 The text that should be displayed for the "Hide Day" label.
 * @property    {string}    notSearchText                               The text that should be displayed for the "Not (opposite)" label.
 * @property    {string}    showEmptyDaysInWeekViewText                 The text that should be displayed for the "Show empty days in the week view" label.
 * @property    {string}    showHolidaysInTheDisplaysText               The text that should be displayed for the "Show holidays in the main display and title bars" label.
 * @property    {string}    newEventDefaultTitle                        The default title that should be used for new events (defaults to "* New Event").
 * @property    {string}    urlErrorMessage                             The error message shown for the "Please enter a valid Url in the 'Url' field (or leave blank)." label.
 * @property    {string}    dropDownMenuSymbol                          The character symbol that is shown for a drop-down menu (defaults to "▾").
 * @property    {string}    searchTextBoxPlaceholder                    The text that should be displayed for the "Search" dialogs text fields placeholder (defaults to "Search title, description, etc...").
 * 
 * These are the options that are used to control how Calendar.js works and renders.
 *
 * @property    {boolean}   showDayNumberOrdinals                       States if the day ordinal values should be shown (defaults to true).  
 * @property    {boolean}   dragAndDropForEventsEnabled                 States if dragging and dropping events around the days of the month is enabled (defaults to true).
 * @property    {number}    maximumEventsPerDayDisplay                  The maximum number of events that should be display per day in the main calendar display (defaults to 3, 0 disables it).
 * @property    {number}    extraSelectableYearsAhead                   The number of extra years ahead that are selectable in the drop down (defaults to 51).
 * @property    {boolean}   exportEventsEnabled                         States if exporting events is enabled (defaults to true).
 * @property    {boolean}   manualEditingEnabled                        States if adding, editing, dragging and removing events is enabled (defaults to true).
 * @property    {boolean}   showTimesInMainCalendarEvents               States if the time should be shown on the main calendar view events (defaults to false).
 * @property    {number}    autoRefreshTimerDelay                       The amount of time to wait before each full refresh (defaults to 30000 milliseconds, 0 disables it).
 * @property    {boolean}   fullScreenModeEnabled                       States if double click on the main title bar activates full-screen mode (defaults to true).
 * @property    {number}    eventTooltipDelay                           The amount of time to wait until an event tooltip is shown (defaults to 1000 milliseconds).
 * @property    {number}    minimumDayHeight                            States the height the main calendar days should used (defaults to 0 - auto).
 * @property    {Holiday[]} holidays                                    The holidays that should be shown for specific days/months (refer to "Holiday" documentation for properties).
 * @property    {string}    organizerName                               The default name of the organizer (defaults to empty string).
 * @property    {string}    organizerEmailAddress                       The default email address of the organizer (defaults to empty string).
 * @property    {number}    spacing                                     States the default spacing that should be used for additional margins (defaults to 10).
 * @property    {boolean}   showAllDayEventDetailsInFullDayView         States if the extra details for an All Day event should be shown in the Full Day view (defaults to false).
 * @property    {boolean}   showWeekNumbersInTitles                     States if week numbers should be shown in the title bars (defaults to false).
 * @property    {boolean}   showTimelineArrowOnFullDayView              States if the timeline arrow should be shown in the full day view (defaults to true).
 * @property    {number}    maximumEventTitleLength                     States the maximum length allowed for an event title (defaults to 0 to allow any size).
 * @property    {number}    maximumEventDescriptionLength               States the maximum length allowed for an event description (defaults to 0 to allow any size).
 * @property    {number}    maximumEventLocationLength                  States the maximum length allowed for an event location (defaults to 0 to allow any size).
 * @property    {number}    maximumEventGroupLength                     States the maximum length allowed for an event group (defaults to 0 to allow any size).
 * @property    {boolean}   eventNotificationsEnabled                   States if notifications should be shown for events (defaults to false).
 * @property    {boolean}   showPreviousNextMonthNamesInMainDisplay     States if the previous/next month names should be shown in the main display days (defaults to true).
 * @property    {boolean}   showDayNamesInMainDisplay                   States if the day names header should be shown in the main display (defaults to true).
 * @property    {boolean}   tooltipsEnabled                             States if the tooltips are enabled throughout all the displays (defaults to true).
 * @property    {boolean}   useOnlyDotEventsForMainDisplay              States if only dot event icons should be used in the main display (to save space, defaults to false).
 * @property    {number[]}  visibleDays                                 States the day numbers that should be visible (Outside listing all events.  Defaults to [ 0, 1, 2, 3, 4, 5, 6 ], Mon=0, Sun=6).
 * @property    {boolean}   allowEventScrollingOnMainDisplay            States if the days in the main display can be scrolled (defaults to false, overrides maximumEventsPerDayDisplay if true).
 * @property    {string}    urlWindowTarget                             States the target that an event Url should be opened in (defaults to _blank for a new window).
 * @property    {string}    defaultEventBackgroundColor                 States the default background color that should be used for events (defaults to "#484848").
 * @property    {string}    defaultEventTextColor                       States the default text color that should be used for events (defaults to "#F5F5F5").
 * @property    {string}    defaultEventBorderColor                     States the default border color that should be used for events (defaults to "#282828").
 * @property    {boolean}   showExtraToolbarButtons                     States if the extra toolbar buttons on the main title bars (except Previous/Next Month) are visible (defaults to true).
 * @property    {boolean}   openInFullScreenMode                        States if full-screen mode should be turned on when the calendar is rendered (defaults to false).
 * @property    {boolean}   showEmptyDaysInWeekView                     States if empty days should be shown in the Week view (defaults to true).
 * @property    {boolean}   hideEventsWithoutGroupAssigned              States if events without a group should be hidden (defaults to false).
 * @property    {boolean}   showHolidays                                States if the holidays should be shown (defaults to true).
 * @property    {boolean}   useTemplateWhenAddingNewEvent               States if a blank template event should be added when adding a new event (causing the dialog to be in edit mode, defaults to true).
 * @property    {boolean}   useEscapeKeyToExitFullScreenMode            States if the escape key should exit full-screen mode (if enabled, defaults to true).
 * @property    {Object}    minimumDatePickerDate                       States the minimum date that can be selected in DatePicker mode (defaults to null).
 * @property    {Object}    maximumDatePickerDate                       States the minimum date that can be selected in DatePicker mode (defaults to null).
 * @property    {boolean}   allowHtmlInDisplay                          States if HTML can be used in the display (defaults to false).
 * @property    {string}    datePickerSelectedDateFormat                States the display format that should be used for the DatePicker input field (defaults to "{d}{o} {mmm} {yyyy}", see DatePicker display formats for options).
 * @property    {number[]}  weekendDays                                 States the day numbers that that are considered weekend days (defaults to [ 0, 1, 2, 3, 4, 5, 6 ], Mon=0, Sun=6).
 */


/**
 * Search Options.
 * 
 * These are the search options that are used to control how Calendar.js search works.
 * 
 * @typedef     {Object}    Search
 *
 * @property    {string}    lastSearchText                              States the last search text that was used (defaults to "").
 * @property    {boolean}   not                                         States if the search should be a not search (defaults to false).
 * @property    {boolean}   matchCase                                   States character case searching is strict (defaults to false).
 * @property    {boolean}   showAdvanced                                States if the advanced options should be shown (defaults to false).
 * @property    {boolean}   searchTitle                                 States if the "title" property for the event should be searched (false to true).
 * @property    {boolean}   searchLocation                              States if the "location" property for the event should be searched (false to false).
 * @property    {boolean}   searchDescription                           States if the "description" property for the event should be searched (false to false).
 * @property    {boolean}   searchGroup                                 States if the "group" property for the event should be searched (false to false).
 * @property    {boolean}   searchUrl                                   States if the "url" property for the event should be searched (false to false).
 * @property    {boolean}   startsWith                                  States if the search should run a "starts with" check (defaults to false).
 * @property    {boolean}   endsWith                                    States if the search should run a "ends with" check (defaults to false).
 * @property    {boolean}   contains                                    States if the search should run a "contains with" check (defaults to true).
 * @property    {number}    left                                        States the left position of the dialog (defaults to null).
 * @property    {number}    top                                         States the top position of the dialog (defaults to null).
 */


/**
 * Date Display Formats.
 * 
 * These are the formatter options are used to state how dates are displayed (where supported).
 *
 * {dd}                                                                 The day number padded with a zero (if required).
 * {d}                                                                  The day number.
 * {o}                                                                  The day ordinal.
 * {mmm}                                                                The month name.
 * {mm}                                                                 The month number padded with a zero (if required).
 * {m}                                                                  The month number.
 * {yyyy}                                                               The full year.
 * {yy}                                                                 The short two digit year.
 */


/**
 * calendarJs().
 * 
 * The main Calendar.js class.
 * 
 * @public
 * @class
 * 
 * @param       {string}    id                                          The ID of the element that should be used to display the calendar (or input to assign a DatePicker).
 * @param       {Options}   options                                     All the configurable options that should be used (refer to "Options" documentation for properties).
 * @param       {Search}    searchOptions                               All the configurable options that should be used (refer to "Search Options" documentation for properties).
 * @param       {Object}    startDateTime                               The date that the calendar should start from (defaults to today).
 */
function calendarJs( id, options, searchOptions, startDateTime ) {
    var _options = {},
        _optionsForSearch = {},
        _keyCodes = {
            enter: 13,
            escape: 27,
            left: 37,
            right: 39,
            down: 40,
            a: 65,
            f: 70,
            f5: 116,
            f11: 122
        },
        _repeatType = {
            never: 0,
            everyDay: 1,
            everyWeek: 2,
            every2Weeks: 3,
            everyMonth: 4,
            everyYear: 5,
            custom: 6
        },
        _repeatCustomType = {
            daily: 0,
            weekly: 1,
            monthly: 2,
            yearly: 3
        },
        _this = this,
        _datePickerInput = null,
        _datePickerModeEnabled = false,
        _datePickerVisible = false,
        _currentDate = null,
        _currentDateForDatePicker = null,
        _largestDateInView = null,
        _elementTypes = {},
        _elements = {},
        _configuration = {},
        _eventNotificationsTriggered = {},
        _document = null,
        _window = null,
        _elementID = null,
        _initialized = false,
        _initializedDocumentEvents = false,
        _events = {},
        _timer_CallSearchOptionsEvent = null,
        _timer_RefreshMainDisplay = null,
        _timer_RefreshMainDisplay_Enabled = true,
        _eventDetails_Dragged_DateFrom = null,
        _eventDetails_Dragged = null,
        _cachedStyles = null,
        _isFullScreenModeActivated = false,
        _isDateToday = false,
        _openDialogs = [],
        _copiedEventDetails = null,
        _elementID_Day = "day-",
        _elementID_Month = "month-",
        _elementID_WeekDay = "week-day-",
        _elementID_FullDay = "full-day-",
        _elementID_DayElement = "calendar-day-",
        _elementID_YearSelected = "year-selected-",
        _element_Calendar = null,
        _element_Calendar_AllVisibleEvents = [],
        _element_HeaderDateDisplay = null,
        _element_HeaderDateDisplay_Text = null,
        _element_HeaderDateDisplay_YearSelector = null,
        _element_HeaderDateDisplay_YearSelector_Contents = null,
        _element_HeaderDateDisplay_ExportEventsButton = null,
        _element_HeaderDateDisplay_FullScreenButton = null,
        _element_HeaderDateDisplay_SearchButton = null,
        _element_DisabledBackground = null,
        _element_EventEditorDialog = null,
        _element_EventEditorDialog_Tab_Event = null,
        _element_EventEditorDialog_Tab_Repeats = null,
        _element_EventEditorDialog_Tab_Extra = null,
        _element_EventEditorDialog_DisabledArea = null,
        _element_EventEditorDialog_TitleBar = null,
        _element_EventEditorDialog_DateFrom = null,
        _element_EventEditorDialog_TimeFrom = null,
        _element_EventEditorDialog_DateTo = null,
        _element_EventEditorDialog_TimeTo = null,
        _element_EventEditorDialog_IsAllDay = null,
        _element_EventEditorDialog_ShowAlerts = null,
        _element_EventEditorDialog_Title = null,
        _element_EventEditorDialog_Description = null,
        _element_EventEditorDialog_Location = null,
        _element_EventEditorDialog_Group = null,
        _element_EventEditorDialog_Url = null,
        _element_EventEditorDialog_RepeatEvery_Never = null,
        _element_EventEditorDialog_RepeatEvery_EveryDay = null,
        _element_EventEditorDialog_RepeatEvery_EveryWeek = null,
        _element_EventEditorDialog_RepeatEvery_Every2Weeks = null,
        _element_EventEditorDialog_RepeatEvery_EveryMonth = null,
        _element_EventEditorDialog_RepeatEvery_EveryYear = null,
        _element_EventEditorDialog_RepeatEvery_Custom = null,
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton = null,
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily = null,
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Weekly = null,
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Monthly = null,
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Yearly = null,
        _element_EventEditorDialog_RepeatEvery_Custom_Value = null,
        _element_EventEditorDialog_ErrorMessage = null,
        _element_EventEditorDialog_EventDetails = {},
        _element_EventEditorDialog_OKButton = null,
        _element_EventEditorDialog_RemoveButton = null,
        _element_EventEditorColorsDialog = null,
        _element_EventEditorColorsDialog_Color = null,
        _element_EventEditorColorsDialog_ColorText = null,
        _element_EventEditorColorsDialog_ColorBorder = null,
        _element_EventEditorRepeatOptionsDialog = null,
        _element_EventEditorRepeatOptionsDialog_Mon = null,
        _element_EventEditorRepeatOptionsDialog_Tue = null,
        _element_EventEditorRepeatOptionsDialog_Wed = null,
        _element_EventEditorRepeatOptionsDialog_Thu = null,
        _element_EventEditorRepeatOptionsDialog_Fri = null,
        _element_EventEditorRepeatOptionsDialog_Sat = null,
        _element_EventEditorRepeatOptionsDialog_Sun = null,
        _element_EventEditorRepeatOptionsDialog_RepeatEnds = null,
        _element_FullDayView = null,
        _element_FullDayView_Title = null,
        _element_FullDayView_Contents = null,
        _element_FullDayView_Contents_AllDayEvents = null,
        _element_FullDayView_Contents_Hours = null,
        _element_FullDayView_DateSelected = null,
        _element_FullDayView_EventsShown = [],
        _element_FullDayView_ExportEventsButton = null,
        _element_FullDayView_FullScreenButton = null,
        _element_FullDayView_TodayButton = null,
        _element_FullDayView_TimeArrow = null,
        _element_FullDayView_SearchButton = null,
        _element_ListAllEventsView = null,
        _element_ListAllEventsView_ExportEventsButton = null,
        _element_ListAllEventsView_FullScreenButton = null,
        _element_ListAllEventsView_SearchButton = null,
        _element_ListAllEventsView_Contents = null,
        _element_ListAllEventsView_EventsShown = [],
        _element_ListAllWeekEventsView = null,
        _element_ListAllWeekEventsView_Title = null,
        _element_ListAllWeekEventsView_ExportEventsButton = null,
        _element_ListAllWeekEventsView_FullScreenButton = null,
        _element_ListAllWeekEventsView_SearchButton = null,
        _element_ListAllWeekEventsView_Contents = null,
        _element_ListAllWeekEventsView_Contents_FullView = {},
        _element_ListAllWeekEventsView_Contents_FullView_Contents = {},
        _element_ListAllWeekEventsView_Contents_FullView_Events = {},
        _element_ListAllWeekEventsView_EventsShown = [],
        _element_ListAllWeekEventsView_DateSelected = null,
        _element_ConfirmationDialog = null,
        _element_ConfirmationDialog_TitleBar = null,
        _element_ConfirmationDialog_Message = null,
        _element_ConfirmationDialog_RemoveAllEvents = null,
        _element_ConfirmationDialog_RemoveAllEvents_Label = null,
        _element_ConfirmationDialog_YesButton = null,
        _element_ConfirmationDialog_NoButton = null,
        _element_SelectExportTypeDialog = null,
        _element_SelectExportTypeDialog_Option_CSV = null,
        _element_SelectExportTypeDialog_Option_XML = null,
        _element_SelectExportTypeDialog_Option_JSON = null,
        _element_SelectExportTypeDialog_Option_TEXT = null,
        _element_SelectExportTypeDialog_Option_iCAL = null,
        _element_SelectExportTypeDialog_Option_MD = null,
        _element_SelectExportTypeDialog_Option_HTML = null,
        _element_SelectExportTypeDialog_Option_TSV = null,
        _element_SelectExportTypeDialog_ExportEvents = null,
        _element_Tooltip = null,
        _element_Tooltip_TitleButtons = null,
        _element_Tooltip_TitleButtons_CloseButton = null,
        _element_Tooltip_TitleButtons_EditButton = null,
        _element_Tooltip_Title = null,
        _element_Tooltip_Date = null,
        _element_Tooltip_TotalTime = null,
        _element_Tooltip_Repeats = null,
        _element_Tooltip_Description = null,
        _element_Tooltip_Location = null,
        _element_Tooltip_Url = null,
        _element_Tooltip_ShowTimer = null,
        _element_Tooltip_EventDetails = null,
        _element_DropDownMenu_Day = null,
        _element_DropDownMenu_Day_Paste_Separator = null,
        _element_DropDownMenu_Day_Paste = null,
        _element_DropDownMenu_Day_DateSelected = null,
        _element_DropDownMenu_Event = null,
        _element_DropDownMenu_Event_EventDetails = null,
        _element_DropDownMenu_Event_FormattedDateSelected = null,
        _element_DropDownMenu_Event_OpenUrlSeparator = null,
        _element_DropDownMenu_Event_OpenUrl = null,
        _element_DropDownMenu_FullDay = null,
        _element_DropDownMenu_FullDay_RemoveEvents_Separator = null,
        _element_DropDownMenu_FullDay_RemoveEvents = null,
        _element_DropDownMenu_FullDay_Paste_Separator = null,
        _element_DropDownMenu_FullDay_Paste = null,
        _element_DropDownMenu_HeaderDay = null,
        _element_DropDownMenu_HeaderDay_SelectedDay = null,
        _element_SearchDialog = null,
        _element_SearchDialog_MinimizedRestoreButton = null,
        _element_SearchDialog_Contents = null,
        _element_SearchDialog_For = null,
        _element_SearchDialog_MatchCase = null,
        _element_SearchDialog_Not = null,
        _element_SearchDialog_Advanced = null,
        _element_SearchDialog_Advanced_Container = null,
        _element_SearchDialog_Include_Title = null,
        _element_SearchDialog_Include_Location = null,
        _element_SearchDialog_Include_Description = null,
        _element_SearchDialog_Include_Group = null,
        _element_SearchDialog_Include_Url = null,
        _element_SearchDialog_Option_StartsWith = null,
        _element_SearchDialog_Option_EndsWith = null,
        _element_SearchDialog_Option_Contains = null,
        _element_SearchDialog_Previous = null,
        _element_SearchDialog_Next = null,
        _element_SearchDialog_IsMoving = false,
        _element_SearchDialog_Moved = false,
        _element_SearchDialog_X = 0,
        _element_SearchDialog_Y = 0,
        _element_SearchDialog_SearchResults = [],
        _element_SearchDialog_SearchIndex = 0,
        _element_SearchDialog_FocusedEventID = null,
        _element_ConfigurationDialog = null,
        _element_ConfigurationDialog_Groups = null,
        _element_ConfigurationDialog_Display = null,
        _element_ConfigurationDialog_Organizer = null,
        _element_ConfigurationDialog_VisibleDays = null,
        _element_ConfigurationDialog_Display_EnableAutoRefresh = null,
        _element_ConfigurationDialog_Display_EnableBrowserNotifications = null,
        _element_ConfigurationDialog_Display_EnableTooltips = null,
        _element_ConfigurationDialog_Display_EnableDragAndDropForEvents = null,
        _element_ConfigurationDialog_Display_EnableDayNamesInMainDisplay = null,
        _element_ConfigurationDialog_Display_ShowEmptyDaysInWeekView = null,
        _element_ConfigurationDialog_Display_ShowHolidaysInTheDisplays = null,
        _element_ConfigurationDialog_Organizer_Name = null,
        _element_ConfigurationDialog_Organizer_Email = null,
        _element_ConfigurationDialog_VisibleDays_Mon = null,
        _element_ConfigurationDialog_VisibleDays_Tue = null,
        _element_ConfigurationDialog_VisibleDays_Wed = null,
        _element_ConfigurationDialog_VisibleDays_Thu = null,
        _element_ConfigurationDialog_VisibleDays_Fri = null,
        _element_ConfigurationDialog_VisibleDays_Sat = null,
        _element_ConfigurationDialog_VisibleDays_Sun = null;

    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build (layout, days, etc)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function build( newStartDateTime, fullRebuild ) {
        _currentDate = isDefinedDate( newStartDateTime ) ? newStartDateTime : new Date();
        _currentDate.setDate( 1 );
        _currentDate.setHours( 0, 0, 0, 0 );
        _isDateToday = isDateTodaysMonthAndYear( _currentDate );

        fullRebuild = isDefined( fullRebuild ) ? fullRebuild : false;

        var firstDay = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), 1 ),
            startDay = firstDay.getDay() === 0 ? 7 : firstDay.getDay(),
            totalDaysInMonth = getTotalDaysInMonth( _currentDate.getFullYear(), _currentDate.getMonth() );

        hideAllDropDowns();

        buildLayout();
        buildPreviousMonthDays( _currentDate, startDay );

        var lastDayFilled = buildMonthDays( totalDaysInMonth, startDay );

        buildNextMonthDays( lastDayFilled );
        buildDayEvents();

        if ( fullRebuild ) {
            buildDisabledBackground();
            buildEventEditingDialog();
            buildEventEditingColorDialog();
            buildEventEditingRepeatOptionsDialog();
            buildConfirmationDialog();
            buildSelectExportTypeDialog();
            buildSearchDialog();
            buildConfigurationDialog();
            buildTooltip();
            buildDropDownMenus();
        }

        _element_HeaderDateDisplay_Text.innerText = _options.monthNames[ _currentDate.getMonth() ] + ", " + _currentDate.getFullYear() + " " + _options.dropDownMenuSymbol;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Getting/Remove Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getAllEvents() {
        var events = [];
    
        getAllEventsFunc( function( event ) {
            events.push( event );
        } );

        return events;
    }

    function getAllEventsFunc( func ) {
        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                for ( var storageGuid in _events[ storageDate ] ) {
                    if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                        var event = getAdjustedAllDayEvent( _events[ storageDate ][ storageGuid ] ),
                            result = func( event, storageDate, storageGuid );

                        if ( result ) {
                            return;
                        }
                    }
                }
            }
        }
    }

    function getOrderedEvents( events, sortAllDayEvents ) {
        sortAllDayEvents = isDefined( sortAllDayEvents ) ? sortAllDayEvents : true;

        events = events.sort( function( a, b ) {
            return a.from - b.from;
        } );

        if ( sortAllDayEvents ) {
            events = events.sort( function( a, b ) {
                return getBooleanAsNumber( b.isAllDay ) - getBooleanAsNumber( a.isAllDay );
            } );
        }

        return events;
    }

    function removeNonRepeatingEventsOnSpecificDate( date, compareFunc ) {
        addNode( _document.body, _element_DisabledBackground );

        var onNoEvent = function() {
            removeNode( _document.body, _element_DisabledBackground );
        };

        var onYesEvent = function() {
            onNoEvent();

            getAllEventsFunc( function( event ) {
                var repeatEvery = getNumber( event.repeatEvery );
                if ( repeatEvery === _repeatType.never && compareFunc( event.from, date ) ) {
                    _this.removeEvent( event.id, false );
                }
            } );

            refreshViews();
        };

        showConfirmationDialog( _options.confirmEventsRemoveTitle, _options.confirmEventsRemoveMessage, onYesEvent, onNoEvent );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Layout
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildLayout() {
        if ( !_initialized ) {
            buildContainer();
            buildListAllEventsView();
            buildListAllWeekEventsView();
            buildFullDayView();
            buildDateHeader();
            buildDayNamesHeader();
            buildDayRows();
            buildDocumentEvents();
            
            _initialized = true;
        }
    }

    function buildContainer() {
        var element = getElementByID( _elementID );

        if ( element.tagName.toLowerCase() === "input" && element.type === "text" ) {
            buildDatePickerMode( element );
        } else {

            _element_Calendar = element;
            _element_Calendar.className = "calendar";
            _element_Calendar.innerHTML = "";
        }
    }

    function buildDateHeader() {
        _element_HeaderDateDisplay_ExportEventsButton = null;
        _element_HeaderDateDisplay_FullScreenButton = null;
        _element_HeaderDateDisplay_SearchButton = null;

        _element_HeaderDateDisplay = createElement( "div", "header-date" );
        _element_Calendar.appendChild( _element_HeaderDateDisplay );

        if ( _options.fullScreenModeEnabled ) {
            _element_HeaderDateDisplay.ondblclick = headerDoubleClick;
        }

        if ( _datePickerModeEnabled ) {
            _element_HeaderDateDisplay.onclick = function( e ) {
                cancelBubble( e );
                hideAllDropDowns();
            };
        }

        buildToolbarButton( _element_HeaderDateDisplay, "ib-arrow-left-full", _options.previousMonthTooltipText, moveBackMonth );

        if ( _datePickerModeEnabled || _options.showExtraToolbarButtons ) {
            buildToolbarButton( _element_HeaderDateDisplay, "ib-pin", _options.todayTooltipText, moveToday );
        }

        if ( _options.showExtraToolbarButtons ) {
            buildToolbarButton( _element_HeaderDateDisplay, "ib-refresh", _options.refreshTooltipText, function() {
                refreshViews( true );
            } );

            _element_HeaderDateDisplay_SearchButton = buildToolbarButton( _element_HeaderDateDisplay, "ib-search", _options.searchTooltipText, showSearchDialog );
            
            buildToolbarButton( _element_HeaderDateDisplay, "ib-octagon-hollow", _options.configurationTooltipText, showConfigurationDialog );
        }

        buildToolbarButton( _element_HeaderDateDisplay, "ib-arrow-right-full", _options.nextMonthTooltipText, moveForwardMonth );

        if ( _datePickerModeEnabled ) {
            buildToolbarButton( _element_HeaderDateDisplay, "ib-close", _options.closeTooltipText, hideDatePickerMode );
        }

        if ( _options.showExtraToolbarButtons ) {
            if ( _options.manualEditingEnabled ) {
                buildToolbarButton( _element_HeaderDateDisplay, "ib-plus", _options.addEventTooltipText, addNewEvent );
            }
    
            if ( _options.exportEventsEnabled ) {
                _element_HeaderDateDisplay_ExportEventsButton = buildToolbarButton( _element_HeaderDateDisplay, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                    showSelectExportTypeDialog( _element_Calendar_AllVisibleEvents );
                } );
            }
            
            buildToolbarButton( _element_HeaderDateDisplay, "ib-eye", _options.listAllEventsTooltipText, function() {
                showListAllEventsView( true );
            } );
    
            buildToolbarButton( _element_HeaderDateDisplay, "ib-hamburger", _options.listWeekEventsTooltipText, function() {
                showListAllWeekEventsView( null, true );
            } );
    
            if ( _options.fullScreenModeEnabled ) {
                _element_HeaderDateDisplay_FullScreenButton = buildToolbarButton( _element_HeaderDateDisplay, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, headerDoubleClick );
            }
        }

        var titleContainer = createElement( "div", "title-container" );
        _element_HeaderDateDisplay.appendChild( titleContainer );
        
        _element_HeaderDateDisplay_Text = createElement( "span" );
        _element_HeaderDateDisplay_Text.ondblclick = cancelBubble;
        titleContainer.appendChild( _element_HeaderDateDisplay_Text );

        buildYearSelectorDropDown( titleContainer );
    }

    function buildDayNamesHeader() {
        if ( _options.showDayNamesInMainDisplay ) {
            var headerRow = createElement( "div", "row-cells header-days" ),
                headerNamesLength = _options.dayHeaderNames.length;

            if ( _datePickerModeEnabled ) {
                headerRow.onclick = cancelBubble;
            }

            _element_Calendar.appendChild( headerRow );

            for ( var headerNameIndex = 0; headerNameIndex < headerNamesLength; headerNameIndex++ ) {
                if ( _options.visibleDays.indexOf( headerNameIndex ) > -1 ) {
                    buildDayNamesHeaderItem( headerRow, headerNameIndex );
                }
            }
        }
    }

    function buildDayNamesHeaderItem( headerRow, headerNameIndex ) {
        var headerName = _options.dayHeaderNames[ headerNameIndex ],
            header = createElement( "div", getCellName() );

        setNodeText( header, headerName );

        headerRow.appendChild( header );

        header.oncontextmenu = function( e ) {
            showDayHeaderDropDownMenu( e, headerNameIndex );
        };
    }

    function buildDayRows() {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            var rowData = createElement( "div", "row-cells days" );
            _element_Calendar.appendChild( rowData );

            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                if ( _options.visibleDays.indexOf( columnDataIndex ) > -1 ) {
                    var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                        columnData = createElement( "div", getCellName( _options.allowEventScrollingOnMainDisplay ) );

                    columnData.id = _elementID_DayElement + columnDataNumber;
                    rowData.appendChild( columnData );

                    if ( _options.allowEventScrollingOnMainDisplay ) {
                        columnData.className += " scrollY";
                    }

                    if ( _options.minimumDayHeight > 0 ) {
                        columnData.style.height = _options.minimumDayHeight + "px";
                    }
                }
            }
        }
    }

    function getCellName( addScrollBars ) {
        addScrollBars = isDefined( addScrollBars ) ? addScrollBars : false;

        var className = "cell cell-" + _options.visibleDays.length;
        if ( addScrollBars ) {
            className += " custom-scroll-bars";
        }

        return className;
    }

    function getAdjustedAllDayEvent( event ) {
        var adjustedEvent = event;

        if ( adjustedEvent.isAllDay ) {
            adjustedEvent.from = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 0, 0 );
            adjustedEvent.to = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 23, 59 );
        }

        return adjustedEvent;
    }

    function headerDoubleClick() {
        if ( !_isFullScreenModeActivated ) {
            turnOnFullScreenMode();
        } else {
            turnOffFullScreenMode();
        }
    }

    function turnOnFullScreenMode( onLoad ) {
        onLoad = isDefined( onLoad ) ? onLoad : false;

        if ( !_isFullScreenModeActivated && ( _options.fullScreenModeEnabled || onLoad ) ) {
            _cachedStyles = _element_Calendar.style.cssText;
            _isFullScreenModeActivated = true;
            _element_Calendar.className += " full-screen-view";
            _element_Calendar.removeAttribute( "style" );

            updateExpandButtons( "ib-arrow-contract-left-right", _options.disableFullScreenTooltipText );
            refreshOpenedViews();

            if ( !onLoad ) {
                triggerOptionsEventWithData( "onFullScreenModeChanged", true );
            }
        }
    }

    function turnOffFullScreenMode() {
        if ( _isFullScreenModeActivated && _options.fullScreenModeEnabled ) {
            _isFullScreenModeActivated = false;
            _element_Calendar.className = _element_Calendar.className.replace( " full-screen-view", "" );
            _element_Calendar.style.cssText = _cachedStyles;

            updateExpandButtons( "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText );
            refreshOpenedViews();
            triggerOptionsEventWithData( "onFullScreenModeChanged", false );
        }
    }

    function updateExpandButtons( className, tooltipText ) {
        setElementClassName( _element_HeaderDateDisplay_FullScreenButton, className );
        setElementClassName( _element_FullDayView_FullScreenButton, className );
        setElementClassName( _element_ListAllEventsView_FullScreenButton, className );
        setElementClassName( _element_ListAllWeekEventsView_FullScreenButton, className );

        addToolTip( _element_HeaderDateDisplay_FullScreenButton, tooltipText );
        addToolTip( _element_FullDayView_FullScreenButton, tooltipText );
        addToolTip( _element_ListAllEventsView_FullScreenButton, tooltipText );
        addToolTip( _element_ListAllWeekEventsView_FullScreenButton, tooltipText );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Date-Picker Mode
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDatePickerMode( element ) {
        _datePickerInput = element;
        _datePickerInput.className = "calendar-date-picker-input";
        _datePickerInput.readOnly = true;
        _datePickerInput.placeholder = _options.selectDatePlaceholderText;
        _datePickerModeEnabled = true;
        _elementID = newGuid();

        var parent = element.parentNode;
        parent.removeChild( _datePickerInput );

        var container = createElement( "div", "calendar-date-picker" );
        parent.appendChild( container );
        container.appendChild( _datePickerInput );

        _element_Calendar = createElement( "div", "calendar calendar-hidden" );
        _element_Calendar.id = _elementID;
        container.appendChild( _element_Calendar );

        _datePickerInput.onclick = toggleDatePickerModeVisible;
        _datePickerInput.onkeydown = onDatePickerInputKeyDown;
        _document.addEventListener( "click", hideDatePickerMode );

        resetOptionsForDatePickerMode();
        getDataPickerInputValueDate();
    }

    function resetOptionsForDatePickerMode() {
        if ( _datePickerModeEnabled ) {
            _options.exportEventsEnabled = false;
            _options.manualEditingEnabled = false;
            _options.fullScreenModeEnabled = false;
            _options.eventNotificationsEnabled = false;
            _options.showPreviousNextMonthNamesInMainDisplay = false;
            _options.showPreviousNextMonthNamesInMainDisplay = false;
            _options.showExtraToolbarButtons = false;
            _options.holidays = [];
        }
    }

    function toggleDatePickerModeVisible( e ) {
        cancelBubble( e );
        closeAnyOtherDatePickers();

        if ( !_datePickerVisible ) {
            _element_Calendar.className = "calendar calendar-shown";
            build( new Date( _currentDateForDatePicker ), !_initialized );
        } else {

            _element_Calendar.className = "calendar calendar-hidden";
            hideAllDropDowns();
        }

        _datePickerVisible = !_datePickerVisible;
    }

    function onDatePickerInputKeyDown( e ) {
        if ( e.keyCode === _keyCodes.escape && _datePickerVisible ) {
            _element_Calendar.className = "calendar calendar-hidden";
            _datePickerVisible = !_datePickerVisible;
            
            hideAllDropDowns();
        }
    }

    function hideDatePickerMode() {
        if ( _datePickerVisible ) {
            _element_Calendar.className = "calendar calendar-hidden";
            hideAllDropDowns();

            _datePickerVisible = false;
        }
    }

    function setDatePickerDate( e, date ) {
        cancelBubble( e );

        if ( !isYearSelectorDropDownVisible() ) {
            var newDate = new Date( date );
            newDate.setHours( 0, 0, 0, 0 );
            
            hideDatePickerMode();
            updateDatePickerInputValueDisplay( date );
            triggerOptionsEventWithData( "onDatePickerDateChanged", newDate );

            _currentDateForDatePicker = newDate;
            
        } else {
            hideAllDropDowns();
        }
    }

    function updateDatePickerInputValueDisplay( date ) {
        var inputValue = _options.datePickerSelectedDateFormat;

        inputValue = inputValue.replace( "{dd}", padNumber( date.getDate() ) );
        inputValue = inputValue.replace( "{d}", date.getDate() );

        inputValue = inputValue.replace( "{o}", getDayOrdinal( date.getDate() ) );

        inputValue = inputValue.replace( "{mmm}", _options.monthNames[ date.getMonth() ] );
        inputValue = inputValue.replace( "{mm}", padNumber( date.getMonth() + 1 ) );
        inputValue = inputValue.replace( "{m}", date.getMonth() + 1 );

        inputValue = inputValue.replace( "{yyyy}", date.getFullYear() );
        inputValue = inputValue.replace( "{yy}", date.getFullYear().toString().substring( 2 ) );

        _datePickerInput.value = inputValue;
    }

    function closeAnyOtherDatePickers() {
        var elements = _document.getElementsByClassName( "calendar calendar-shown" ),
            elementsArray = [].slice.call( elements ),
            elementsArrayLength = elementsArray.length;

        for ( var elementsArrayIndex = 0; elementsArrayIndex < elementsArrayLength; elementsArrayIndex++ ) {
            var element = elementsArray[ elementsArrayIndex ];

            if ( element.id !== _elementID ) {
                element.className = "calendar calendar-hidden";
            }
        }
    }

    function getDataPickerInputValueDate() {
        var values = _datePickerInput.value.split( "/" ),
            valuesDate = null;

        if ( values.length === 3 ) {

            var newDateFromValues = new Date( parseInt( values[ 2 ] ), parseInt( values[ 1 ] ) - 1, parseInt( values[ 0 ] ) );
            if ( newDateFromValues instanceof Date && !isNaN( newDateFromValues ) ) {
                valuesDate = newDateFromValues;
            }
        }

        if ( valuesDate === null ) {
            valuesDate = new Date();
        } else {
            updateDatePickerInputValueDisplay( valuesDate );
        }

        valuesDate.setHours( 0, 0, 0, 0 );

        _currentDateForDatePicker = valuesDate;
    }

    function isDateValidForDatePicker( newDate ) {
        var newDateAllowed = true;

        if ( _options.minimumDatePickerDate !== null ) {
            newDateAllowed = isDateSmallerOrEqualToDate( _options.minimumDatePickerDate, newDate );
        }

        if ( newDateAllowed && _options.maximumDatePickerDate !== null ) {
            newDateAllowed = isDateSmallerOrEqualToDate( newDate, _options.maximumDatePickerDate );
        }

        return newDateAllowed;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Years Drop-Down Menu
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildYearSelectorDropDown( container ) {
        var date = new Date( 1900, 1, 1 ),
            dateCurrent = new Date(),
            dateYearsTotal = ( dateCurrent.getFullYear() - date.getFullYear() ) + _options.extraSelectableYearsAhead;

        _element_HeaderDateDisplay_YearSelector = createElement( "div", "years-drop-down" );
        container.appendChild( _element_HeaderDateDisplay_YearSelector );

        _element_HeaderDateDisplay_YearSelector_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_HeaderDateDisplay_YearSelector.appendChild( _element_HeaderDateDisplay_YearSelector_Contents );

        for ( var yearIndex = 0; yearIndex < dateYearsTotal; yearIndex++ ) {
            buildYearSelectorDropDownYear( date.getFullYear() );
            moveDateForwardYear( date );
        }

        _element_HeaderDateDisplay_Text.onclick = showYearSelectorDropDownMenu;
    }

    function buildYearSelectorDropDownYear( actualYear ) {
        var year = createElement( "div" );
        year.className = "year";
        year.innerText = actualYear.toString();
        year.id = _elementID_YearSelected + actualYear.toString();
        _element_HeaderDateDisplay_YearSelector_Contents.appendChild( year );

        year.onclick = function( e ) {
            cancelBubble( e );

            if ( _currentDate.getFullYear() !== actualYear ) {
                _currentDate.setFullYear( actualYear );

                build( _currentDate );
            }

            hideYearSelectorDropDown();
        };
    }

    function showYearSelectorDropDownMenu( e ) {
        cancelBubble( e );

        if ( _element_HeaderDateDisplay_YearSelector.style.display !== "block" ) {
            hideAllDropDowns();

            _element_HeaderDateDisplay_YearSelector.style.display = "block";

            var year = updateYearSelectorDropDownMenuColors();
            if ( year !== null ) {
                _element_HeaderDateDisplay_YearSelector_Contents.scrollTop = year.offsetTop - ( _element_HeaderDateDisplay_YearSelector.offsetHeight / 2 );
            } else {
                _element_HeaderDateDisplay_YearSelector_Contents.scrollTop = 0;
            }
            
        } else {
            hideYearSelectorDropDown();
        }
    }

    function updateYearSelectorDropDownMenuColors() {
        var yearSelected = _element_HeaderDateDisplay_YearSelector.getElementsByClassName( "year" ),
            yearSelectedLength = yearSelected.length;

        if ( yearSelectedLength >= 1 ) {
            for ( var yearsSelectedIndex = 0; yearsSelectedIndex < yearSelectedLength; yearsSelectedIndex++ ) {
                if ( yearSelected[ yearsSelectedIndex ].className !== "year" ) {
                    yearSelected[ yearsSelectedIndex ].className = "year";
                }
            }
        }

        var year = getElementByID( _elementID_YearSelected + _currentDate.getFullYear() );
        if ( year !== null ) {
            year.className += " year-selected";
        }
        
        if ( !_datePickerModeEnabled ) {
            var yearsHandledForEvents = [];

            getAllEventsFunc( function( event ) {
                var fromYear = event.from.getFullYear();
    
                if ( yearsHandledForEvents.indexOf( fromYear ) === -1 ) {
                    
                    var yearEvents = getElementByID( _elementID_YearSelected + fromYear );
                    if ( yearEvents !== null && yearEvents.className.indexOf( " year-selected" ) === -1 ) {
                        yearEvents.className += " year-has-events";
                    }
    
                    yearsHandledForEvents.push( fromYear );
                }
            } );
        }

        return year;
    }

    function hideYearSelectorDropDown() {
        if ( isYearSelectorDropDownVisible() ) {
            _element_HeaderDateDisplay_YearSelector.style.display = "none";
        }
    }

    function isYearSelectorDropDownVisible() {
        return _element_HeaderDateDisplay_YearSelector !== null && _element_HeaderDateDisplay_YearSelector.style.display === "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Document Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDocumentEvents() {
        if ( !_initializedDocumentEvents ) {
            _document.body.addEventListener( "click", hideAllDropDowns );
            _document.body.addEventListener( "contextmenu", hideAllDropDowns );
            _document.addEventListener( "scroll", hideAllDropDowns );
            _document.addEventListener( "keydown", onWindowKeyDown );
            _window.addEventListener( "resize", hideAllDropDowns );
            _window.addEventListener( "resize", centerSearchDialog );

            _initializedDocumentEvents = true;
        }
    }

    function hideAllDropDowns() {
        hideDropDownMenu( _element_DropDownMenu_Day );
        hideDropDownMenu( _element_DropDownMenu_Event );
        hideDropDownMenu( _element_DropDownMenu_FullDay );
        hideDropDownMenu( _element_DropDownMenu_HeaderDay );
        hideYearSelectorDropDown();
        hideTooltip();
    }

    function onWindowKeyDown( e ) {
        if ( !_datePickerModeEnabled ) {
            if ( _isFullScreenModeActivated ) {
                var isMainDisplayVisible = isOnlyMainDisplayVisible();
    
                if ( isControlKey( e ) && e.keyCode === _keyCodes.left && isMainDisplayVisible ) {
                    e.preventDefault();
                    moveBackYear();
    
                } else if ( isControlKey( e ) && e.keyCode === _keyCodes.right && isMainDisplayVisible ) {
                    e.preventDefault();
                    moveForwardYear();
    
                } else if ( e.keyCode === _keyCodes.escape ) {
                    if ( !closeActiveDialog() && isMainDisplayVisible && _options.useEscapeKeyToExitFullScreenMode ) {
                        headerDoubleClick();
                    }
    
                } else if ( e.keyCode === _keyCodes.left && isMainDisplayVisible ) {
                    moveBackMonth();
    
                } else if ( e.keyCode === _keyCodes.right && isMainDisplayVisible ) {
                    moveForwardMonth();
    
                } else if ( e.keyCode === _keyCodes.down && isMainDisplayVisible ) {
                    moveToday();
                    
                } else if ( e.keyCode === _keyCodes.f5 && isMainDisplayVisible ) {
                    refreshViews();
                }
            } else {
                
                if ( e.keyCode === _keyCodes.escape ) {
                    closeActiveDialog();
                }
            }
    
            if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _keyCodes.a ) {
                e.preventDefault();
    
                if ( _options.manualEditingEnabled ) {
                    showEventEditingDialog( null, new Date() );
                }
            
            } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _keyCodes.f ) {
                e.preventDefault();

                if ( _element_FullDayView_EventsShown.length > 0 || _element_Calendar_AllVisibleEvents.length > 0 || _element_ListAllEventsView_EventsShown.length > 0 || _element_ListAllWeekEventsView_EventsShown.length > 0 ) {
                    showSearchDialog();
                }

            } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _keyCodes.f11 ) {
                e.preventDefault();
                headerDoubleClick();
            }
        } else {

            if ( _datePickerVisible ) {
                if ( isControlKey( e ) && e.keyCode === _keyCodes.left ) {
                    e.preventDefault();
                    moveBackYear();
    
                } else if ( isControlKey( e ) && e.keyCode === _keyCodes.right ) {
                    e.preventDefault();
                    moveForwardYear();

                } else if ( e.keyCode === _keyCodes.left ) {
                    moveBackMonth();
    
                } else if ( e.keyCode === _keyCodes.right ) {
                    moveForwardMonth();
    
                } else if ( e.keyCode === _keyCodes.down ) {
                    moveToday();
                }
            }
        }
    }

    function isShiftKey( e ) {
        return e.shiftKey;
    }

    function isControlKey( e ) {
        return e.ctrlKey || e.metaKey;
    }

    function closeActiveDialog() {
        var done = false;

        if ( _openDialogs.length > 0 ) {
            var lastFunc = _openDialogs[ _openDialogs.length - 1 ];

            if ( isFunction( lastFunc ) ) {    
                _openDialogs.pop();
                lastFunc( false );
            }

            done = true;
        }

        if ( !done && ( isOverlayVisible( _element_FullDayView ) || isOverlayVisible( _element_ListAllEventsView ) || isOverlayVisible( _element_ListAllWeekEventsView ) ) ) {
            hideOverlay( _element_FullDayView );
            hideOverlay( _element_ListAllEventsView );
            hideOverlay( _element_ListAllWeekEventsView );

            _element_FullDayView_EventsShown = [];
            _element_ListAllEventsView_EventsShown = [];
            _element_ListAllWeekEventsView_EventsShown = [];
            
            done = true;
        }

        return done;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Date/Time Validation & Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function doDatesMatch( date1, date2 ) {
        return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    }

    function doDatesMatchMonthAndYear( date1, date2 ) {
        return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    }

    function isDateSmallerOrEqualToDate( date1, date2 ) {
        var newDate1 = new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() );
        newDate1.setHours( 0, 0, 0, 0 );

        var newDate2 = new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() );
        newDate2.setHours( 0, 0, 0, 0 );

        return newDate1 <= newDate2;
    }

    function isDateToday( date ) {
        var today = new Date();
        
        return date !== null && date.getDate() === today.getDate() && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
    }

    function isDateTodaysMonthAndYear( date ) {
        var today = new Date();
        
        return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
    }

    function toStorageFormattedDate( date ) {
        var day = ( "0" + date.getDate() ).slice( -2 ),
            month = ( "0" + ( date.getMonth() ) ).slice( -2 ),
            formatted = day + "/" + month + "/" + date.getFullYear();

        return formatted;
    }

    function toFormattedTime( date ) {
        return padNumber( date.getHours() ) + ":" + padNumber( date.getMinutes() );
    }

    function getWeekdayNumber( date ) {
        return date.getDay() - 1 < 0 ? 6 : date.getDay() - 1;
    }

    function getWeekStartEndDates( date ) {
        date = isDefined( date ) ? date : new Date();

        var day = date.getDay() === 0 ? 7 : date.getDay(),
            firstDayNumber = ( date.getDate() - day ) + 1,
            lastDayNumber = firstDayNumber + 6,
            weekStartDate = new Date( date ),
            weekEndDate = new Date( date );

        weekStartDate.setDate( firstDayNumber );
        weekStartDate.setHours( 0, 0, 0, 0 );
        weekEndDate.setDate( lastDayNumber );
        weekEndDate.setHours( 23, 59, 59, 99 );
        
        return [ weekStartDate, weekEndDate ];
    }

    function getTotalDaysInMonth( year, month ) {
        return new Date( year, month + 1, 0 ).getDate();
    }

    function getDayOrdinal( value ) {
        var result = _options.thText;

        if ( value === 31 || value === 21 || value === 1 ) {
            result = _options.stText;
        } else if ( value === 22 || value === 2 ) {
            result = _options.ndText;
        } else if ( value === 23 || value === 3 ) {
            result = _options.rdText;
        }

        return result;
    }

    function getMinutesIntoDay( date ) {
        var hours = date.getHours(),
            minutes = date.getMinutes();
        
        return ( hours * 60 ) + minutes;
    }

    function getTotalDaysBetweenDates( from, to ) {
        var fromDate = new Date( from.getFullYear(), from.getMonth(), from.getDate() ),
            toDate = new Date( to.getFullYear(), to.getMonth(), to.getDate() ),
            differenceTime = Math.abs( toDate - fromDate ),
            differenceDays = Math.ceil( differenceTime / ( 1000 * 60 * 60 * 24 ) ); 
        
        return differenceDays;
    }

    function getWeekNumber( date ) {
        var firstDay = new Date( date.getFullYear(), 0, 1 ),
            weekNumber = Math.ceil( ( ( ( date - firstDay ) / 86400000 ) + firstDay.getDay() + 1 ) / 7 );
        
        if ( firstDay.getDay() > 4 ) {
            weekNumber--;
        }
        
        return weekNumber;
    }

    function isWeekendDay( date ) {
        return _options.weekendDays.indexOf( date.getDay() ) >= 0;
    }

    function moveDateBackOneDay( date ) {
        date.setDate( date.getDate() - 1 );
    }

    function moveDateBackOneWeek( date ) {
        date.setDate( date.getDate() - 7 );
    }

    function moveDateForwardDay( date, dayCount ) {
        dayCount = isDefinedNumber( dayCount ) ? dayCount : 1;

        date.setDate( date.getDate() + dayCount );
    }

    function moveDateForwardWeek( date, weekCount ) {
        weekCount = isDefinedNumber( weekCount ) ? weekCount : 1;

        date.setDate( date.getDate() + ( weekCount * 7 ) );
    }

    function moveDateForwardMonth( date, monthCount ) {
        monthCount = isDefinedNumber( monthCount ) ? monthCount : 1;

        date.setMonth( date.getMonth() + monthCount );
    }

    function moveDateForwardYear( date, yearCount ) {
        yearCount = isDefinedNumber( yearCount ) ? yearCount : 1;

        date.setFullYear( date.getFullYear() + yearCount );
    }

    function getFriendlyTimeBetweenTwoDate( date1, date2 ) {
        var text = [],
            delta = Math.abs( date2 - date1 ) / 1000;

        var days = Math.floor( delta / 86400 );
        delta -= days * 86400;

        if ( days > 0 ) {
            text.push( days.toString() + " " + ( days === 1 ? _options.dayText : _options.daysText ) );
        }

        var hours = Math.floor( delta / 3600 ) % 24;
        delta -= hours * 3600;

        if ( hours > 0 ) {
            text.push( hours.toString() + " " + ( hours === 1 ? _options.hourText : _options.hoursText ) );
        }

        var minutes = Math.floor( delta / 60 ) % 60;

        if ( minutes > 0 ) {
            text.push( minutes.toString() + " " + ( minutes === 1 ? _options.minuteText : _options.minutesText ) );
        }

        return text.join( ", " );
    }

    function setSelectedDate( date, input ) {
        if ( isDefined( date ) ) {
            var day = ( "0" + date.getDate() ).slice( -2 ),
                month = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 );

            if ( input.type === "date" ) {
                input.value = date.getFullYear() + "-" + month + "-" + day;
            } else {
                input.value = day + "/" + month + "/" + date.getFullYear();
            }
        }
    }

    function getSelectedDate( input, defaultValue ) {
        var result = isDefinedOnly( defaultValue ) ? defaultValue : new Date();

        if ( input.value !== "" ) {
            if ( input.type === "date" ) {
                result = new Date( input.value + "T00:00:00Z" );
            } else {
    
                var match = input.value.match( /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/ );
                if ( match ) {
    
                    var newDate = new Date( match[ 3 ], match[ 2 ] - 1, match[ 1 ], 0, 0, 0, 0 );
                    if ( newDate instanceof Date && !isNaN( newDate ) ) {
                        result = newDate;
                    }
                }
            }
        }

        if ( isDefined( result ) ) {
            result = new Date( result.getTime() + Math.abs( result.getTimezoneOffset() * 60000 ) );
        }

        return result;
    }

    function setMinimumDate( input, date ) {
        if ( input.type === "date" ) {
            var day = ( "0" + date.getDate() ).slice( -2 ),
                month = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 );

            input.setAttribute( "min", date.getFullYear() + "-" + month + "-" + day );
        }
    }

    function setTimeOnDate( date, timeData ) {
        var hours = 0,
            minutes = 0,
            splitData = timeData.split( ":" );

        if ( splitData.length === 2 ) {
            var newHours = parseInt( splitData[ 0 ] ),
                newMinutes = parseInt( splitData[ 1 ] );

            if ( !isNaN( newHours ) && newHours.toString().length <= 2 ) {
                hours = newHours;
            }

            if ( !isNaN( newMinutes ) && newMinutes.toString().length <= 2 ) {
                minutes = newMinutes;
            }
        }

        date.setHours( hours );
        date.setMinutes( minutes );
    }

    function getHoursAndMinutesFromMinutes( totalMinutes ) {
        var hours = ( totalMinutes / 60 ),
            remainingHours = Math.floor( hours ),
            remainingMinutes = Math.round( ( hours - remainingHours ) * 60 );

        return [ remainingHours, remainingMinutes ];
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Day Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDayEvents() {
        clearEventsFromDays();
        clearAutoRefreshTimer();

        _element_Calendar_AllVisibleEvents = [];

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                elementDay = getDayElement( orderedEvent.from );

            if ( elementDay !== null ) {
                buildDayEventAcrossDays( orderedEvent );
            }

            if ( isEventVisible( orderedEvent ) ) {
                _element_Calendar_AllVisibleEvents.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery );
            if ( repeatEvery > _repeatType.never ) {
                if ( repeatEvery === _repeatType.everyDay ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardDay, 1 );
                } else if ( repeatEvery === _repeatType.everyWeek ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardWeek, 1 );
                } else if ( repeatEvery === _repeatType.every2Weeks ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardWeek, 2 );
                } else if ( repeatEvery === _repeatType.everyMonth ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardMonth, 1 );
                } else if ( repeatEvery === _repeatType.everyYear ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardYear, 1 );
                } else if ( repeatEvery === _repeatType.custom ) {

                    var repeatEveryCustomType = getNumber( orderedEvent.repeatEveryCustomType ),
                        repeatEveryCustomValue = getNumber( orderedEvent.repeatEveryCustomValue );
                    
                    if ( repeatEveryCustomValue > 0 ) {
                        if ( repeatEveryCustomType === _repeatCustomType.daily ) {
                            buildRepeatedDayEvents( orderedEvent, moveDateForwardDay, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.weekly ) {
                            buildRepeatedDayEvents( orderedEvent, moveDateForwardWeek, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.monthly ) {
                            buildRepeatedDayEvents( orderedEvent, moveDateForwardMonth, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.yearly ) {
                            buildRepeatedDayEvents( orderedEvent, moveDateForwardYear, repeatEveryCustomValue );
                        }
                    }
                }
            }
        }
    
        updateMainHeaderButtonsVisibleStates( _element_Calendar_AllVisibleEvents.length );
        startAutoRefreshTimer();
    }

    function buildRepeatedDayEvents( orderedEvent, dateFunc, dateFuncForwardValue ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays );

        while ( newFromDate < _largestDateInView ) {
            dateFunc( newFromDate, dateFuncForwardValue );

            var repeatEnded = !( !isDefined( orderedEvent.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, orderedEvent.repeatEnds ) );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 && !repeatEnded ) {
                var repeatDayElement = getDayElement( newFromDate );

                if ( repeatDayElement !== null ) {
                    buildDayEvent( newFromDate, orderedEvent );
                }
            }
        }
    }
    
    function buildDayEventAcrossDays( orderedEvent ) {
        buildDayEvent( orderedEvent.from, orderedEvent );
    
        if ( orderedEvent.from.getDate() !== orderedEvent.to.getDate() ) {
            var totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to );
            if ( totalDays > 0 ) {
    
                var nextDayDate = new Date( orderedEvent.from );
                for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                    moveDateForwardDay( nextDayDate );
    
                    var elementNextDay = getDayElement( nextDayDate );
                    if ( elementNextDay !== null ) {
                        buildDayEvent( nextDayDate, orderedEvent );
                    }
                }
            }
        }
    }
    
    function buildDayEvent( dayDate, eventDetails ) {
        var elementDay = getDayElement( dayDate ),
            seriesIgnoreDates = getArray( eventDetails.seriesIgnoreDates ),
            formattedDayDate = toStorageFormattedDate( dayDate );

        if ( elementDay !== null && isEventVisible( eventDetails ) && seriesIgnoreDates.indexOf( formattedDayDate ) === -1  ) {
            checkEventForBrowserNotifications( dayDate, eventDetails );

            if ( !_datePickerModeEnabled ) {
                var events = elementDay.getElementsByClassName( "event" );

                if ( events.length < _options.maximumEventsPerDayDisplay || _options.maximumEventsPerDayDisplay <= 0 || _options.useOnlyDotEventsForMainDisplay ) {
                    var event = createElement( "div", "event" ),
                        eventTitle = eventDetails.title;
    
                    if ( _options.showTimesInMainCalendarEvents && !eventDetails.isAllDay && eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                        eventTitle = getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) + ": " + eventTitle;
                    }
    
                    if ( !_options.useOnlyDotEventsForMainDisplay ) {
                        var repeatEvery = getNumber( eventDetails.repeatEvery );
                        if ( repeatEvery > _repeatType.never ) {
                            var icon = createElement( "div", "ib-refresh-small ib-no-hover ib-no-active" );
                            icon.style.borderColor = event.style.color;
                            event.appendChild( icon );
                        }
    
                        event.innerHTML += stripHTMLTagsFromText( eventTitle );
    
                    } else {
                        event.className += " event-circle";
                    }
                    
                    elementDay.appendChild( event );
    
                    makeEventDraggable( event, eventDetails, dayDate, elementDay );
                    setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, dayDate ) );
    
                    if ( doDatesMatch( eventDetails.from, dayDate ) ) {
                        event.id = _elementID_Day + eventDetails.id;
    
                        if ( _element_SearchDialog_FocusedEventID === eventDetails.id ) {
                            event.className += " focused-event";
                        }
                    }
    
                    event.onmousemove = function( e ) {
                        if ( _element_Tooltip_EventDetails !== null && _element_Tooltip_EventDetails.id === eventDetails.id ) {
                            cancelBubble( e );
                        } else {
                            showTooltip( e, eventDetails );
                        }
                    };
    
                    event.oncontextmenu = function( e ) {
                        showEventDropDownMenu( e, eventDetails, formattedDayDate );
                    };
        
                    if ( _options.manualEditingEnabled ) {
                        event.ondblclick = function( e ) {
                            cancelBubble( e );
                            showEventEditingDialog( eventDetails );
                        };
                    }
    
                } else {
                    buildDayEventPlusText( elementDay, dayDate );
                }
            }
        }
    }

    function buildDayEventPlusText( elementDay, dayDate ) {
        var plusXEvents = elementDay.getElementsByClassName( "plus-x-events" ),
            plusXEventsText = plusXEvents.length > 0 ? plusXEvents[ 0 ] : null;

        if ( plusXEventsText === null ) {
            var showFullDayDay = new Date( dayDate );

            plusXEventsText = createElement( "div", "plus-x-events" );
            plusXEventsText.setAttribute( "events", "1" );
            plusXEventsText.ondblclick = cancelBubble;
            elementDay.appendChild( plusXEventsText );

            setNodeText( plusXEventsText, "+1 " + _options.moreText );

            plusXEventsText.onclick = function() {
                showFullDayView( showFullDayDay, true );
            };
        } else {

            var numberOfEvents = parseInt( plusXEventsText.getAttribute( "events" ) ) + 1;
            plusXEventsText.setAttribute( "events", numberOfEvents.toString() );

            setNodeText( plusXEventsText, "+" + numberOfEvents + " " + _options.moreText );
        }
    }

    function updateMainHeaderButtonsVisibleStates( orderedEventsLength ) {
        if ( _options.exportEventsEnabled ) {
            updateToolbarButtonVisibleState( _element_HeaderDateDisplay_ExportEventsButton, orderedEventsLength > 0 );
        }

        if ( _element_HeaderDateDisplay_SearchButton !== null ) {
            updateToolbarButtonVisibleState( _element_HeaderDateDisplay_SearchButton, orderedEventsLength > 0 );
        }
    }

    function getDayElement( date ) {
        var firstDay = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), 1 ),
            startDay = -1,
            nextMonth = new Date( _currentDate ),
            previousMonth = new Date( _currentDate ),
            elementDay = null,
            elementDayNumber = 0,
            firstDayNumber = getWeekdayNumber( firstDay );
        
        nextMonth.setMonth( nextMonth.getMonth() + 1 );
        previousMonth.setMonth( previousMonth.getMonth() - 1 );

        if ( date.getMonth() === nextMonth.getMonth() && date.getFullYear() === nextMonth.getFullYear() ) {
            startDay = firstDayNumber + getTotalDaysInMonth( _currentDate.getFullYear(), _currentDate.getMonth() );
            elementDayNumber = ( date.getDate() + startDay );

        } else if ( date.getMonth() === previousMonth.getMonth() && date.getFullYear() === previousMonth.getFullYear() ) {
            elementDayNumber = firstDayNumber - getTotalDaysBetweenDates( date, _currentDate ) + 1;
            
        } else if ( date.getMonth() === _currentDate.getMonth() && date.getFullYear() === _currentDate.getFullYear() ) {
            startDay = firstDayNumber;
            elementDayNumber = ( date.getDate() + startDay );
        }

        if ( elementDayNumber > 0 ) {
            elementDay = getElementByID( _elementID_DayElement + elementDayNumber );
        }

        return elementDay;
    }

    function clearEventsFromDays() {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                    columnDataElement = getElementByID( _elementID_DayElement + columnDataNumber );

                clearEventsFromDay( columnDataElement );
            }
        }
    }

    function clearEventsFromDay( elementDay ) {
        if ( elementDay !== null ) {
            clearElementsByClassName( elementDay, "event" );
            clearElementsByClassName( elementDay, "plus-x-events" );
        }
    }

    function clearElementsByClassName( container, className ) {
        var elements = container.getElementsByClassName( className );

        while ( elements[ 0 ] ) {
            elements[ 0 ].parentNode.removeChild( elements[ 0 ] );
        }
    }

    function showElementsByClassName( container, className ) {
        var elements = container.getElementsByClassName( className ),
            elementsLength = elements.length;

        for ( var elementIndex = 0; elementIndex < elementsLength; elementIndex++ ) {
            elements[ elementIndex ].style.display = "block";
        }
    }

    function removeElementsClassName( container, className ) {
        var elements = container.getElementsByClassName( className );

        while ( elements[ 0 ] ) {
            elements[ 0 ].className = elements[ 0 ].className.replace( className, "" );
        }
    }
  
    function setEventClassesAndColors( event, eventDetails, toDate ) {
        if ( isDefined( toDate ) && toDate < new Date() ) {
            event.className += " expired";
        }

        if ( isDefinedStringAndSet( eventDetails.color ) ) {
            event.style.backgroundColor = eventDetails.color;

            if ( isDefinedStringAndSet( eventDetails.colorText ) ) {
                event.style.color = eventDetails.colorText;
            }

            if ( isDefinedStringAndSet( eventDetails.colorBorder ) ) {
                event.style.borderLeftColor = eventDetails.colorBorder;
            }
        } else {

            if ( eventDetails.isAllDay ) {
                event.className += " all-day";
            }
        }
    }

    function getToTimeWithPassedDate( eventDetails, date ) {
        var repeatEvery = getNumber( eventDetails.repeatEvery ),
            toDate = new Date( eventDetails.to );
        
        if ( repeatEvery > _repeatType.never ) {
            var newCurrentDate = new Date( date );
            newCurrentDate.setHours( toDate.getHours(), toDate.getMinutes() );

            toDate = newCurrentDate;
        }

        return toDate;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Day View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullDayView() {
        _element_FullDayView = createElement( "div", "full-day-view" );
        _element_Calendar.appendChild( _element_FullDayView );

        var titleBar = createElement( "div", "title-bar" );
        _element_FullDayView.appendChild( titleBar );

        if ( _options.fullScreenModeEnabled ) {
            titleBar.ondblclick = headerDoubleClick;
        }

        _element_FullDayView_Title = createElement( "div", "title" );
        titleBar.appendChild( _element_FullDayView_Title );

        buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextDayTooltipText, onNextDay );
        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideFullDayView );

        if ( _options.manualEditingEnabled && _options.showExtraToolbarButtons ) {
            buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, function() {
                if ( _options.useTemplateWhenAddingNewEvent ) {
                    var newBlankTemplateEvent = buildBlankTemplateEvent( _element_FullDayView_DateSelected, _element_FullDayView_DateSelected );
    
                    showEventEditingDialog( newBlankTemplateEvent );
                } else {
                    addNewEvent();
                }
            } );
        }
        
        buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousDayTooltipText, onPreviousDay );

        if ( _options.exportEventsEnabled && _options.showExtraToolbarButtons ) {
            _element_FullDayView_ExportEventsButton = buildToolbarButton( titleBar, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                showSelectExportTypeDialog( _element_FullDayView_EventsShown );
            } );
        }

        if ( _options.showExtraToolbarButtons ) {
            _element_FullDayView_TodayButton = buildToolbarButton( titleBar, "ib-pin", _options.todayTooltipText, onToday );

            buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                refreshViews( true );
            } );
    
            _element_FullDayView_SearchButton = buildToolbarButton( titleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
    
            if ( _options.fullScreenModeEnabled ) {
                _element_FullDayView_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, headerDoubleClick );
            }
        }

        _element_FullDayView_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_FullDayView.appendChild( _element_FullDayView_Contents );

        _element_FullDayView_Contents.oncontextmenu = function( e ) {
            showFullDayDropDownMenu( e );
        };

        _element_FullDayView_Contents_AllDayEvents = createElement( "div", "content-events-all-day" );
        _element_FullDayView_Contents.appendChild( _element_FullDayView_Contents_AllDayEvents );

        var allDayText = createElement( "div", "all-day-text" );
        setNodeText( allDayText, _options.allDayText );

        _element_FullDayView_Contents_AllDayEvents.appendChild( allDayText );

        _element_FullDayView_Contents_Hours = createElement( "div", "contents-events" );
        _element_FullDayView_Contents_Hours.ondblclick = fullDayViewDoubleClick;
        _element_FullDayView_Contents.appendChild( _element_FullDayView_Contents_Hours );

        for ( var hour = 0; hour < 24; hour++ ) {
            var row = createElement( "div", "hour" );
            _element_FullDayView_Contents_Hours.appendChild( row );

            var newHour1 = createElement( "div", "hour-text" );
            newHour1.innerText = padNumber( hour ) + ":00";
            row.appendChild( newHour1 );

            var newHour2 = createElement( "div", "hour-text" );
            newHour2.innerText = padNumber( hour ) + ":30";
            row.appendChild( newHour2 );
        }

        buildFullDayViewTimeArrow();
    }

    function fullDayViewDoubleClick( e ) {
        if ( _options.manualEditingEnabled ) {
            var contentHoursOffset = getOffset( _element_FullDayView_Contents_Hours ),
                scrollPosition = getScrollPosition(),
                pixelsPerMinute = getFullDayPixelsPerMinute(),
                minutesFromTop = Math.floor( ( e.pageY - ( contentHoursOffset.top + scrollPosition.top ) ) / pixelsPerMinute ),
                hoursMinutes = getHoursAndMinutesFromMinutes( minutesFromTop );
            
            if ( _options.useTemplateWhenAddingNewEvent ) {
                var newBlankTemplateEventTime = padNumber( hoursMinutes[ 0 ] ) + ":" + padNumber( hoursMinutes[ 1 ] ),
                    newBlankTemplateEvent = buildBlankTemplateEvent( _element_FullDayView_DateSelected, _element_FullDayView_DateSelected, newBlankTemplateEventTime, newBlankTemplateEventTime );

                showEventEditingDialog( newBlankTemplateEvent );
            } else {
                showEventEditingDialog( null, _element_FullDayView_DateSelected, hoursMinutes );
            }
        }
    }

    function updateFullDayViewFromEventEdit() {
        if ( isOverlayVisible( _element_FullDayView ) ) {
            showFullDayView( _element_FullDayView_DateSelected );
        }
    }

    function showFullDayView( date, fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        updateToolbarButtonVisibleState( _element_FullDayView_TodayButton, _options.visibleDays.length == 7 );

        _element_FullDayView_Title.innerHTML = "";
        _element_FullDayView_DateSelected = new Date( date );
        _element_FullDayView_EventsShown = [];
        _element_FullDayView_Contents_AllDayEvents.style.display = "block";

        clearElementsByClassName( _element_FullDayView_Contents, "event" );
        showOverlay( _element_FullDayView );
        buildDateTimeDisplay( _element_FullDayView_Title, date, false, true, true );

        var holidayText = getHolidaysText( date ),
            orderedEvents = [];

        if ( holidayText !== null ) {
            createSpanElement( _element_FullDayView_Title, " (" + holidayText + ")", "light-title-bar-text" );
        }

        getAllEventsFunc( function( event ) {
            var totalDays = getTotalDaysBetweenDates( event.from, event.to ) + 1,
                nextDate = new Date( event.from );
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( doDatesMatch( nextDate, date ) ) {
                    orderedEvents.push( event );
                    break;
                }

                moveDateForwardDay( nextDate );
            }
            
            var repeatEvery = getNumber( event.repeatEvery );
            if ( repeatEvery > _repeatType.never ) {
                if ( repeatEvery === _repeatType.everyDay ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardDay, 1 );
                } else if ( repeatEvery === _repeatType.everyWeek ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardWeek, 1 );
                } else if ( repeatEvery === _repeatType.every2Weeks ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardWeek, 2 );
                } else if ( repeatEvery === _repeatType.everyMonth ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardMonth, 1 );
                } else if ( repeatEvery === _repeatType.everyYear ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardYear, 1 );
                } else if ( repeatEvery === _repeatType.custom ) {

                    var repeatEveryCustomType = getNumber( event.repeatEveryCustomType ),
                        repeatEveryCustomValue = getNumber( event.repeatEveryCustomValue );
                    
                    if ( repeatEveryCustomValue > 0 ) {
                        if ( repeatEveryCustomType === _repeatCustomType.daily ) {
                            buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardDay, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.weekly ) {
                            buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardWeek, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.monthly ) {
                            buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardMonth, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.yearly ) {
                            buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardYear, repeatEveryCustomValue );
                        }
                    }
                }
            }
        } );

        orderedEvents = getOrderedEvents( orderedEvents );

        var orderedEventsLength = orderedEvents.length,
            orderedEventsFirstTopPosition = null,
            timeArrowPosition = updateFullDayViewTimeArrowPosition();

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var newTopPosition = buildFullDayDayEvent( orderedEvents[ orderedEventIndex ], date );
            if ( orderedEventsFirstTopPosition === null ) {
                orderedEventsFirstTopPosition = newTopPosition;
            }
        }

        if ( fromOpen ) {
            if ( isFullDayTimeArrowVisible() ) {
                _element_FullDayView_Contents.scrollTop = timeArrowPosition;
            } else {
                _element_FullDayView_Contents.scrollTop = orderedEventsFirstTopPosition - ( _element_FullDayView_Contents.offsetHeight / 2 );
            }
        }

        if ( _element_FullDayView_Contents_AllDayEvents.offsetHeight <= 1 ) {
            _element_FullDayView_Contents_AllDayEvents.style.display = "none";
        }

        if ( _options.exportEventsEnabled ) {
            updateToolbarButtonVisibleState( _element_FullDayView_ExportEventsButton, _element_FullDayView_EventsShown.length > 0 );
        }

        updateToolbarButtonVisibleState( _element_FullDayView_SearchButton, _element_FullDayView_EventsShown.length > 0 );
        adjustFullDayEventsThatOverlap();
    }

    function hideFullDayView() {
        hideOverlay( _element_FullDayView );

        _element_FullDayView_DateSelected = null;
        _element_FullDayView_EventsShown = [];
    }

    function buildFullDayRepeatedDayEvents( event, orderedEvents, date, dateFunc, dateFuncForwardValue ) {
        var newFromDate = new Date( event.from ),
            excludeDays = getArray( event.repeatEveryExcludeDays );
    
        while ( newFromDate < date ) {
            dateFunc( newFromDate, dateFuncForwardValue );

            var repeatEnded = !( !isDefined( event.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, event.repeatEnds ) );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 && !repeatEnded ) {
                if ( doDatesMatch( newFromDate, date ) ) {
                    orderedEvents.push( event );
                    break;
                }
            }
        }
    }

    function buildFullDayDayEvent( eventDetails, displayDate ) {
        var scrollTop = 0,
            seriesIgnoreDates = getArray( eventDetails.seriesIgnoreDates ),
            formattedDate = toStorageFormattedDate( displayDate );

        if ( isEventVisible( eventDetails ) && seriesIgnoreDates.indexOf( formattedDate ) === -1 ) {
            var event = createElement( "div", "event" );
            event.ondblclick = cancelBubble;

            event.onclick = function ( e ) {
                increaseEventZIndex( e, event );
            };

            if ( eventDetails.isAllDay ) {
                _element_FullDayView_Contents_AllDayEvents.appendChild( event );
            } else {
                _element_FullDayView_Contents_Hours.appendChild( event );
            }
    
            event.oncontextmenu = function( e ) {
                showEventDropDownMenu( e, eventDetails, formattedDate );
            };
    
            setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, displayDate ) );
    
            if ( doDatesMatch( eventDetails.from, displayDate ) ) {
                event.id = _elementID_FullDay + eventDetails.id;

                if ( _element_SearchDialog_FocusedEventID === eventDetails.id ) {
                    event.className += " focused-event";
                }
            }

            var title = createElement( "div", "title" ),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _repeatType.never ) {
                var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                icon.style.borderColor = event.style.color;
                title.appendChild( icon );
            }
            
            title.innerHTML += stripHTMLTagsFromText( eventDetails.title );
            event.appendChild( title );
    
            if ( !eventDetails.isAllDay || _options.showAllDayEventDetailsInFullDayView ) {
                var startTime = createElement( "div", "date" );
                event.appendChild( startTime );

                var duration = createElement( "div", "duration" );
                event.appendChild( duration );
        
                if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                    if ( eventDetails.isAllDay ) {
                        setNodeText( startTime, _options.allDayText );
                    } else {
                        setNodeText( startTime, getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) );
                        setNodeText( duration, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
                    }
                } else {

                    buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
                    setNodeText( duration, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
                }
        
                if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _repeatType.never ) {
                    var repeats = createElement( "div", "repeats" );
                    setNodeText( repeats, _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery ) );
                    event.appendChild( repeats );
                }
        
                if ( isDefinedStringAndSet( eventDetails.location ) ) {
                    var location = createElement( "div", "location" );
                    setNodeText( location, eventDetails.location );
                    event.appendChild( location );
                }
        
                if ( isDefinedStringAndSet( eventDetails.description ) ) {
                    var description = createElement( "div", "description" );
                    setNodeText( description, eventDetails.description );
                    event.appendChild( description );
                }
            }
    
            if ( _options.manualEditingEnabled ) {
                event.ondblclick = function( e ) {
                    cancelBubble( e );
                    showEventEditingDialog( eventDetails );
                };
            }
            
            if ( !eventDetails.isAllDay ) {
                scrollTop = setEventPositionAndGetScrollTop( displayDate, event, eventDetails );
            }

            _element_FullDayView_EventsShown.push( eventDetails );
        }

        return scrollTop;
    }

    function setEventPositionAndGetScrollTop( displayDate, event, eventDetails ) {
        var contentHoursHeight = _element_FullDayView_Contents_Hours.offsetHeight,
            pixelsPerMinute = getFullDayPixelsPerMinute(),
            minutesTop = _options.spacing,
            minutesHeight = null;

        if ( !eventDetails.isAllDay ) {
            var repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( doDatesMatch( eventDetails.from, displayDate ) || repeatEvery > _repeatType.never ) {
                minutesTop = pixelsPerMinute * getMinutesIntoDay( eventDetails.from );
            }

            if ( doDatesMatch( eventDetails.to, displayDate ) ) {
                minutesHeight = ( pixelsPerMinute * getMinutesIntoDay( eventDetails.to ) ) - minutesTop;
            } else {
                minutesHeight = contentHoursHeight;
            }

            minutesHeight -= _options.spacing * 2;
        }

        event.style.top = minutesTop + "px";

        if ( minutesHeight !== null ) {
            event.style.height = minutesHeight + "px";
        }

        if ( event.offsetTop + event.offsetHeight > ( contentHoursHeight - _options.spacing ) ) {
            event.style.height = ( ( contentHoursHeight - event.offsetTop ) - ( _options.spacing * 3 ) ) + "px";
        }

        var scrollTop = minutesTop + ( _element_FullDayView_Contents.offsetHeight / 2 );
        if ( scrollTop <= _element_FullDayView_Contents.offsetHeight ) {
            scrollTop = 0;
        }

        return scrollTop;
    }

    function onPreviousDay() {
        moveDateBackOneDay( _element_FullDayView_DateSelected );

        if ( _options.visibleDays.length < 7 ) {
            var weekDayNumber = getWeekdayNumber( _element_FullDayView_DateSelected );

            while ( _options.visibleDays.indexOf( weekDayNumber ) === -1 ) {
                moveDateBackOneDay( _element_FullDayView_DateSelected );
    
                weekDayNumber = getWeekdayNumber( _element_FullDayView_DateSelected );
            }
        }

        showFullDayView( _element_FullDayView_DateSelected, true );
    }

    function onNextDay() {
        moveDateForwardDay( _element_FullDayView_DateSelected );

        if ( _options.visibleDays.length < 7 ) {
            var weekDayNumber = getWeekdayNumber( _element_FullDayView_DateSelected );

            while ( _options.visibleDays.indexOf( weekDayNumber ) === -1 ) {
                moveDateForwardDay( _element_FullDayView_DateSelected );
    
                weekDayNumber = getWeekdayNumber( _element_FullDayView_DateSelected );
            }
        }

        showFullDayView( _element_FullDayView_DateSelected, true );
    }

    function onToday() {
        _element_FullDayView_DateSelected = new Date();
            
        showFullDayView( _element_FullDayView_DateSelected, true );
    }

    function getFullDayPixelsPerMinute() {
        var contentHoursHeight = _element_FullDayView_Contents_Hours.offsetHeight,
            pixelsPerMinute = contentHoursHeight / 1440;

        return pixelsPerMinute;
    }

    function increaseEventZIndex( e, event ) {
        cancelBubble( e );

        var zIndex = getStyleValueByName( event, "z-index" );
        if ( zIndex === null || zIndex === "auto" ) {
            zIndex = 1;
        } else {
            zIndex = parseInt( zIndex ) + 1;
        }

        event.style.zIndex = zIndex.toString();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Day View - Overlapping Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function adjustFullDayEventsThatOverlap() {
        var eventsElements = _element_FullDayView_Contents_Hours.getElementsByClassName( "event" ),
            events = [].slice.call( eventsElements ),
            eventsLength = events.length;
    
        if ( eventsLength > 1 ) {
            events.sort( sortOverlappingEventElementsByOffsetTop );

            for ( var eventIndex1 = 0; eventIndex1 < eventsLength; eventIndex1++ ) {
                var event1 = events[ eventIndex1 ];
    
                for ( var eventIndex2 = 0; eventIndex2 < eventsLength; eventIndex2++ ) {
                    if ( eventIndex2 !== eventIndex1 ) {
                        var event2 = events[ eventIndex2 ],
                            overlaps = doEventElementsOverlap( event1, event2 );

                        if ( overlaps ) {
                            var event1Position = getString( event1.getAttribute( "event-position" ) ),
                                event2Position = getString( event2.getAttribute( "event-position" ) );

                            if ( event1Position === "" && event2Position === "" ) {
                                setOverlappingEventWidth( event1 );
                                setOverlappingEventWidth( event2 );
                                setOverlappingEventLeft( event2, event1 );

                                event1.setAttribute( "event-position", "left" );
                                event2.setAttribute( "event-position", "right" );
                            
                            } else if ( event1Position === "" && event2Position === "right" ) {
                                setOverlappingEventWidth( event1 );

                                event1.setAttribute( "event-position", "left" );
                                event2.setAttribute( "event-position", "right" );
                            
                            } else if ( event1Position === "" && event2Position === "left" ) {
                                setOverlappingEventLeft( event1, event2 );
                                setOverlappingEventWidth( event1 );

                                event1.setAttribute( "event-position", "right" );
                                event2.setAttribute( "event-position", "left" );
                            }
                        }
                    }
                }
            }
        }
    }

    function setOverlappingEventWidth( event ) {
        event.style.width = ( event.offsetWidth / 2 ) - ( ( _options.spacing * 3 ) + _options.spacing / 4 ) + "px";
    }

    function setOverlappingEventLeft( event1, event2 ) {
        event1.style.left = ( event2.offsetLeft + event2.offsetWidth + _options.spacing ) + "px";
    }

    function sortOverlappingEventElementsByOffsetTop( event1, event2 ) {
        var result = 0;

        if ( event1.offsetTop < event2.offsetTop ) {
            result = -1;
        } else if ( event1.offsetTop > event2.offsetTop ) {
            result = 1;
        }

        return result;
    }
    
    function doEventElementsOverlap( element1, element2 ) {
        var result = true,
            offsetLeft1 = element1.offsetLeft,
            offsetTop1 = element1.offsetTop,
            height1 = element1.offsetHeight,
            width1 = element1.offsetWidth,
            topPlusHeight1 = offsetTop1 + height1,
            leftPlusWidth1 = offsetLeft1 + width1,
            offsetLeft2 = element2.offsetLeft,
            offsetTop2 = element2.offsetTop,
            height2 = element2.offsetHeight,
            width2 = element2.offsetWidth,
            topPlusHeight2 = offsetTop2 + height2,
            leftPlusWidth2 = offsetLeft2 + width2;
    
        if ( topPlusHeight1 < offsetTop2 || offsetTop1 > topPlusHeight2 || leftPlusWidth1 < offsetLeft2 || offsetLeft1 > leftPlusWidth2 ) {
            result = false;
        }
    
        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Day View - Time Arrow
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullDayViewTimeArrow() {
        _element_FullDayView_TimeArrow = createElement( "div", "time-arrow" );
        _element_FullDayView_Contents_Hours.appendChild( _element_FullDayView_TimeArrow );

        _element_FullDayView_TimeArrow.appendChild( createElement( "div", "arrow-left" ) );
        _element_FullDayView_TimeArrow.appendChild( createElement( "div", "line" ) );
    }

    function updateFullDayViewTimeArrowPosition() {
        var topPosition = 0;

        if ( isFullDayTimeArrowVisible() ) {
            var pixelsPerMinute = getFullDayPixelsPerMinute(),
                top = pixelsPerMinute * getMinutesIntoDay( new Date() );

            _element_FullDayView_TimeArrow.style.display = "block";
            _element_FullDayView_TimeArrow.style.top = ( top - ( _element_FullDayView_TimeArrow.offsetHeight / 2 ) ) + "px";
            topPosition = top;

        } else {
            _element_FullDayView_TimeArrow.style.display = "none";
        }

        return topPosition;
    }

    function isFullDayTimeArrowVisible() {
        return isDateToday( _element_FullDayView_DateSelected ) && isOverlayVisible( _element_FullDayView ) && _options.showTimelineArrowOnFullDayView ;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * List All Events View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildListAllEventsView() {
        _element_ListAllEventsView = createElement( "div", "list-all-events-view" );
        _element_Calendar.appendChild( _element_ListAllEventsView );

        var titleBar = createElement( "div", "title-bar" );
        _element_ListAllEventsView.appendChild( titleBar );

        if ( _options.fullScreenModeEnabled ) {
            titleBar.ondblclick = headerDoubleClick;
        }

        var title = createElement( "div", "title" );
        setNodeText( title, _options.allEventsText );
        titleBar.appendChild( title );

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
            _element_ListAllEventsView_EventsShown = [];

            hideOverlay( _element_ListAllEventsView );
        } );

        if ( _options.showExtraToolbarButtons ) {
            if ( _options.manualEditingEnabled ) {
                buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, addNewEvent );
            }
    
            if ( _options.exportEventsEnabled ) {
                _element_ListAllEventsView_ExportEventsButton = buildToolbarButton( titleBar, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                    showSelectExportTypeDialog( _element_ListAllEventsView_EventsShown );
                } );
            }
    
            buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                refreshViews( true );
            } );
    
            _element_ListAllEventsView_SearchButton = buildToolbarButton( titleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
    
            if ( _options.fullScreenModeEnabled ) {
                _element_ListAllEventsView_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, headerDoubleClick );
            }
        }

        _element_ListAllEventsView_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_ListAllEventsView.appendChild( _element_ListAllEventsView_Contents );
    }

    function showListAllEventsView( fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        showOverlay( _element_ListAllEventsView );
        _element_ListAllEventsView_Contents.innerHTML = "";
        _element_ListAllEventsView_EventsShown = [];

        if ( fromOpen ) {
            _element_ListAllEventsView_Contents.scrollTop = 0;
        }

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            buildListAllEventsEvent( orderedEvents[ orderedEventIndex ] );
        }
        
        if ( _options.exportEventsEnabled ) {
            updateToolbarButtonVisibleState( _element_ListAllEventsView_ExportEventsButton, _element_ListAllEventsView_EventsShown.length > 0 );
        }

        updateToolbarButtonVisibleState( _element_ListAllEventsView_SearchButton, _element_ListAllEventsView_EventsShown.length > 0 );

        if ( _element_ListAllEventsView_EventsShown.length === 0 ) {
            buildNoEventsAvailableText( _element_ListAllEventsView_Contents, addNewEvent );
        }
    }

    function buildListAllEventsEvent( eventDetails ) {
        if ( isEventVisible( eventDetails ) ) {
            var container = buildListAllEventsMonth( eventDetails.from ),
                event = createElement( "div", "event" );

            container.appendChild( event );
    
            event.oncontextmenu = function( e ) {
                showEventDropDownMenu( e, eventDetails );
            };
    
            makeEventDraggable( event, eventDetails, eventDetails.from, container );
            setEventClassesAndColors( event, eventDetails );
    
            event.id = _elementID_Month + eventDetails.id;
    
            if ( _element_SearchDialog_FocusedEventID === eventDetails.id ) {
                event.className += " focused-event";
            }

            var title = createElement( "div", "title" ),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _repeatType.never ) {
                var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                icon.style.borderColor = event.style.color;
                title.appendChild( icon );
            }
            
            title.innerHTML += stripHTMLTagsFromText( eventDetails.title );
            event.appendChild( title );
    
            var startTime = createElement( "div", "date" );
            event.appendChild( startTime );

            var duration = createElement( "div", "duration" );
            event.appendChild( duration );
    
            if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                if ( eventDetails.isAllDay ) {
                    buildDayDisplay( startTime, eventDetails.from, null, " - " + _options.allDayText );
                } else {
                    buildDayDisplay( startTime, eventDetails.from, null, " - " + getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) );
                    setNodeText( duration, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
                }
            } else {

                buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
                setNodeText( duration, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
            }
    
            if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _repeatType.never ) {
                var repeats = createElement( "div", "repeats" );
                setNodeText( repeats, _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery ) );
                event.appendChild( repeats );
            }
    
            if ( isDefinedStringAndSet( eventDetails.location ) ) {
                var location = createElement( "div", "location" );
                setNodeText( location, eventDetails.location );
                event.appendChild( location );
            }
    
            if ( isDefinedStringAndSet( eventDetails.description ) ) {
                var description = createElement( "div", "description" );
                setNodeText( description, eventDetails.description );
                event.appendChild( description );
            }
    
            if ( _options.manualEditingEnabled ) {
                event.ondblclick = function( e ) {
                    cancelBubble( e );
                    showEventEditingDialog( eventDetails );
                };
            }

            _element_ListAllEventsView_EventsShown.push( eventDetails );
        }
    }

    function buildListAllEventsMonth( date ) {
        var monthContentsID = "month-" + date.getMonth() + "-" + date.getFullYear(),
            monthContents = getElementByID( monthContentsID );
        
        if ( monthContents === null ) {
            var expandMonthDate = new Date( date ),
                expandFunction = function() {
                    _element_ListAllEventsView_EventsShown = [];

                    hideOverlay( _element_ListAllEventsView );
                    build( expandMonthDate );
                };

            var month = createElement( "div", "month" );
            _element_ListAllEventsView_Contents.appendChild( month );

            var header = createElement( "div", "header" );
            setNodeText( header, _options.monthNames[ date.getMonth() ] + " " + date.getFullYear() );
            header.ondblclick = expandFunction;
            month.appendChild( header );

            buildToolbarButton( header, "ib-arrow-expand-left-right", _options.expandMonthTooltipText, expandFunction );

            if ( _options.manualEditingEnabled ) {
                var addNewEventDate = new Date( date.getFullYear(), date.getMonth(), 1 );

                buildToolbarButton( header, "ib-plus", _options.addEventTooltipText, function() {
                    if ( _options.useTemplateWhenAddingNewEvent ) {
                        var newBlankTemplateEvent = buildBlankTemplateEvent( addNewEventDate, addNewEventDate );

                        showEventEditingDialog( newBlankTemplateEvent );
                    } else {
                        showEventEditingDialog( null, addNewEventDate );
                    }
                } );
            }

            if ( _options.manualEditingEnabled ) { 
                buildToolbarButton( header, "ib-close", _options.removeEventsTooltipText, function() {
                    removeNonRepeatingEventsOnSpecificDate( expandMonthDate, doDatesMatchMonthAndYear );
                } );
            }

            monthContents = createElement( "div", "events" );
            monthContents.id = monthContentsID;
            month.appendChild( monthContents );

            makeAreaDroppable( monthContents, date.getFullYear(), date.getMonth(), date.getDate() );
        }

        return monthContents;
    }

    function updateViewAllEventsViewFromEventEdit() {
        if ( isOverlayVisible( _element_ListAllEventsView ) ) {
            showListAllEventsView();
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * List All Week Events View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildListAllWeekEventsView() {
        _element_ListAllWeekEventsView = createElement( "div", "list-all-week-events-view" );
        _element_Calendar.appendChild( _element_ListAllWeekEventsView );

        var titleBar = createElement( "div", "title-bar" );
        _element_ListAllWeekEventsView.appendChild( titleBar );

        if ( _options.fullScreenModeEnabled ) {
            titleBar.ondblclick = headerDoubleClick;
        }

        _element_ListAllWeekEventsView_Title = createElement( "div", "title" );
        titleBar.appendChild( _element_ListAllWeekEventsView_Title );

        buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextWeekTooltipText, onNextWeek );

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
            _element_ListAllWeekEventsView_EventsShown = [];

            hideOverlay( _element_ListAllWeekEventsView );
        } );

        if ( _options.manualEditingEnabled && _options.showExtraToolbarButtons ) {
            buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, addNewEvent );
        }

        buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousWeekTooltipText, onPreviousWeek );

        if ( _options.showExtraToolbarButtons ) {
            if ( _options.exportEventsEnabled ) {
                _element_ListAllWeekEventsView_ExportEventsButton = buildToolbarButton( titleBar, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                    showSelectExportTypeDialog( _element_ListAllWeekEventsView_EventsShown );
                } );
            }
    
            buildToolbarButton( titleBar, "ib-pin", _options.thisWeekTooltipText, onThisWeek );
            buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                refreshViews( true );
            } );
    
            _element_ListAllWeekEventsView_SearchButton = buildToolbarButton( titleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
    
            if ( _options.fullScreenModeEnabled ) {
                _element_ListAllWeekEventsView_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, headerDoubleClick );
            }
        }

        _element_ListAllWeekEventsView_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_ListAllWeekEventsView.appendChild( _element_ListAllWeekEventsView_Contents );
    }

    function showListAllWeekEventsView( weekDate, fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        showOverlay( _element_ListAllWeekEventsView );

        _element_ListAllWeekEventsView_Contents.innerHTML = "";
        _element_ListAllWeekEventsView_Contents_FullView = {};
        _element_ListAllWeekEventsView_Contents_FullView_Contents = {};
        _element_ListAllWeekEventsView_Contents_FullView_Events = {};
        _element_ListAllWeekEventsView_EventsShown = [];
        _element_ListAllWeekEventsView_DateSelected = weekDate === null ? new Date() : new Date( weekDate );

        if ( fromOpen ) {
            _element_ListAllWeekEventsView_Contents.scrollTop = 0;
        }

        var weekStartEndDates = getWeekStartEndDates( weekDate ),
            weekStartDate = weekStartEndDates[ 0 ],
            weekEndDate = weekStartEndDates[ 1 ];

        buildAllWeekDays( weekStartDate, weekEndDate );
        setAllWeekEventsViewTitle( weekStartDate, weekEndDate );

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to ) + 1,
                nextDate = new Date( orderedEvent.from ),
                addedNow = false;
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( nextDate >= weekStartDate && nextDate <= weekEndDate ) {
                    var containers = buildListAllEventsDay( nextDate ),
                        dayContents = containers[ 0 ],
                        dayHeader = containers[ 1 ];
    
                    if ( dayContents !== null && dayHeader !== null ) {
                        var added = buildListAllWeekEventsEvent( orderedEvent, dayHeader, dayContents, nextDate );
                        if ( added ) {
                            addedNow = true;
                        }
                    }
                }

                moveDateForwardDay( nextDate );
            }

            if ( addedNow ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery ),
                repeatAdded = false;

            if ( repeatEvery > _repeatType.never ) {
                if ( repeatEvery === _repeatType.everyDay ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardDay, 1 );
                } else if ( repeatEvery === _repeatType.everyWeek ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardWeek, 1 );
                } else if ( repeatEvery === _repeatType.every2Weeks ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardWeek, 2 );
                } else if ( repeatEvery === _repeatType.everyMonth ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardMonth, 1 );
                } else if ( repeatEvery === _repeatType.everyYear ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardYear, 1 );
                } else if ( repeatEvery === _repeatType.custom ) {

                    var repeatEveryCustomType = getNumber( orderedEvent.repeatEveryCustomType ),
                        repeatEveryCustomValue = getNumber( orderedEvent.repeatEveryCustomValue );
                    
                    if ( repeatEveryCustomValue > 0 ) {
                        if ( repeatEveryCustomType === _repeatCustomType.daily ) {
                            repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardDay, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.weekly ) {
                            repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardWeek, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.monthly ) {
                            repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardMonth, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _repeatCustomType.yearly ) {
                            repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardYear, repeatEveryCustomValue );
                        }
                    }
                }
            }

            if ( repeatAdded && !addedNow ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }
        }

        for ( var dateID in _element_ListAllWeekEventsView_Contents_FullView ) {
            if ( _element_ListAllWeekEventsView_Contents_FullView.hasOwnProperty( dateID ) && _element_ListAllWeekEventsView_Contents_FullView_Events.hasOwnProperty( dateID ) ) {
                if ( _options.showEmptyDaysInWeekView || _element_ListAllWeekEventsView_Contents_FullView_Events[ dateID ].length > 0 ) {
                    _element_ListAllWeekEventsView_Contents.appendChild( _element_ListAllWeekEventsView_Contents_FullView[ dateID ] );
                }
            }
        }

        if ( _options.exportEventsEnabled ) {
            updateToolbarButtonVisibleState( _element_ListAllWeekEventsView_ExportEventsButton, _element_ListAllWeekEventsView_EventsShown.length > 0 );
        }

        updateToolbarButtonVisibleState( _element_ListAllWeekEventsView_SearchButton, _element_ListAllWeekEventsView_EventsShown.length > 0 );

        if ( _element_ListAllWeekEventsView_EventsShown.length === 0 ) {
            buildNoEventsAvailableText( _element_ListAllWeekEventsView_Contents, addNewEvent );
        }
    }

    function buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, dateFunc, dateFuncForwardValue ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays ),
            added = false;
    
        while ( newFromDate < weekEndDate ) {
            dateFunc( newFromDate, dateFuncForwardValue );

            var repeatEnded = !( !isDefined( orderedEvent.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, orderedEvent.repeatEnds ) );
            
            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 && !repeatEnded ) {
                if ( newFromDate >= weekStartDate && newFromDate <= weekEndDate ) {
                    var containers = buildListAllEventsDay( newFromDate ),
                        dayContents = containers[ 0 ],
                        dayHeader = containers[ 1 ];

                    if ( dayContents !== null && dayHeader !== null ) {
                        buildListAllWeekEventsEvent( orderedEvent, dayHeader, dayContents, newFromDate );
                        added = true;
                    }
                }
            }
        }

        return added;
    }

    function setAllWeekEventsViewTitle( weekStartDate, weekEndDate ) {
        _element_ListAllWeekEventsView_Title.innerHTML = "";

        if ( _options.showWeekNumbersInTitles ) {
            createSpanElement( _element_ListAllWeekEventsView_Title, _options.weekText + " " + getWeekNumber( weekStartDate ) + ": " );
        }
        
        if ( weekStartDate.getFullYear() === weekEndDate.getFullYear() ) {
            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekStartDate, false, false );
            createSpanElement( _element_ListAllWeekEventsView_Title, " - " );
            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekEndDate, false, false );
            createSpanElement( _element_ListAllWeekEventsView_Title, ", " + weekStartDate.getFullYear() );
        } else {

            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekStartDate, false, true );
            createSpanElement( _element_ListAllWeekEventsView_Title, " - " );
            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekEndDate, false, true );
        }
    }

    function buildListAllWeekEventsEvent( eventDetails, header, container, displayDate ) {
        var added = false,
            weekDayNumber = getWeekdayNumber( displayDate ),
            dateID = displayDate.getFullYear() + displayDate.getMonth() + weekDayNumber,
            seriesIgnoreDates = getArray( eventDetails.seriesIgnoreDates ),
            formattedDate = toStorageFormattedDate( displayDate );

        if ( isEventVisible( eventDetails ) && seriesIgnoreDates.indexOf( formattedDate ) === -1 ) {
            clearElementsByClassName( container, "no-events-text" );
            showElementsByClassName( header, "ib-close" );

            var event = createElement( "div", "event" );
            container.appendChild( event );
    
            _element_ListAllWeekEventsView_Contents_FullView_Events[ dateID ].push( event );

            event.oncontextmenu = function( e ) {
                showEventDropDownMenu( e, eventDetails, formattedDate );
            };
    
            makeEventDraggable( event, eventDetails, displayDate, container );
            setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, displayDate ) );
    
            if ( doDatesMatch( eventDetails.from, displayDate ) ) {
                event.id = _elementID_WeekDay + eventDetails.id;

                if ( _element_SearchDialog_FocusedEventID === eventDetails.id ) {
                    event.className += " focused-event";
                }
            }

            var title = createElement( "div", "title" ),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _repeatType.never ) {
                var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                icon.style.borderColor = event.style.color;
                title.appendChild( icon );
            }
            
            title.innerHTML += stripHTMLTagsFromText( eventDetails.title );
            event.appendChild( title );

            var startTime = createElement( "div", "date" );
            event.appendChild( startTime );

            var duration = createElement( "div", "duration" );
            event.appendChild( duration );
    
            if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                if ( eventDetails.isAllDay ) {
                    setNodeText( startTime, _options.allDayText );
                } else {
                    setNodeText( startTime, getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) );
                    setNodeText( duration, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
                }
            } else {

                buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
                setNodeText( duration, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
            }
    
            if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _repeatType.never ) {
                var repeats = createElement( "div", "repeats" );
                setNodeText( repeats, _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery ) );
                event.appendChild( repeats );
            }
    
            if ( isDefinedStringAndSet( eventDetails.location ) ) {
                var location = createElement( "div", "location" );
                setNodeText( location, eventDetails.location );
                event.appendChild( location );
            }
    
            if ( isDefinedStringAndSet( eventDetails.description ) ) {
                var description = createElement( "div", "description" );
                setNodeText( description, eventDetails.description );
                event.appendChild( description );
            }
    
            if ( _options.manualEditingEnabled ) {
                event.ondblclick = function( e ) {
                    cancelBubble( e );
                    showEventEditingDialog( eventDetails );
                };
            }

            added = true;
        }

        return added;
    }

    function buildAllWeekDays( weekStartDate, weekEndDate ) {
        var startOfWeek = new Date( weekStartDate );

        do {
            buildListAllEventsDay( startOfWeek );
            moveDateForwardDay( startOfWeek );

        } while ( startOfWeek < weekEndDate );
    }

    function buildListAllEventsDay( date ) {
        var weekDayNumber = getWeekdayNumber( date ),
            dateID = date.getFullYear() + date.getMonth() + weekDayNumber,
            dayContents = null,
            dayHeader = null,
            removeEventsDate = new Date( date );

        if ( !_element_ListAllWeekEventsView_Contents_FullView.hasOwnProperty( dateID ) && _options.visibleDays.indexOf( weekDayNumber ) > -1 ) {
            var expandDate = new Date( date ),
                expandFunction = function() {
                    showFullDayView( expandDate, true );
                },
                addEventFunction = function() {
                    if ( _options.useTemplateWhenAddingNewEvent ) {
                        var newBlankTemplateEvent = buildBlankTemplateEvent( expandDate, expandDate );

                        showEventEditingDialog( newBlankTemplateEvent );
                    } else {
                        showEventEditingDialog( null, expandDate );
                    }
                };

            var day = createElement( "div", "day" );
            _element_ListAllWeekEventsView_Contents_FullView[ dateID ] = day;
            _element_ListAllWeekEventsView_Contents_FullView_Events[ dateID ] = [];

            if ( isWeekendDay( date ) ) {
                day.className += " weekend-day";
            }

            dayHeader = createElement( "div", "header" );
            dayHeader.ondblclick = expandFunction;
            day.appendChild( dayHeader );

            dayHeader.oncontextmenu = function( e ) {
                showDayHeaderDropDownMenu( e, weekDayNumber );
            };

            buildDayDisplay( dayHeader, date, _options.dayNames[ weekDayNumber ] + " " );

            var holidayText = getHolidaysText( date );
            if ( holidayText !== null ) {
                createSpanElement( dayHeader, " (" + holidayText + ")", "light-title-bar-text" );
            }

            buildToolbarButton( dayHeader, "ib-arrow-expand-left-right", _options.expandDayTooltipText, expandFunction );

            if ( _options.manualEditingEnabled ) {
                buildToolbarButton( dayHeader, "ib-plus", _options.addEventTooltipText, addEventFunction );
            }

            if ( _options.manualEditingEnabled ) { 
                buildToolbarButton( dayHeader, "ib-close", _options.removeEventsTooltipText, function() {
                    removeNonRepeatingEventsOnSpecificDate( removeEventsDate, doDatesMatch );
                } );
            }

            dayContents = createElement( "div", "events" );
            day.appendChild( dayContents );

            makeAreaDroppable( dayContents, expandDate.getFullYear(), expandDate.getMonth(), expandDate.getDate() );

            var noEventsTextContainer = createElement( "div", "no-events-text" );
            dayContents.appendChild( noEventsTextContainer );

            createSpanElement( noEventsTextContainer, _options.noEventsAvailableText );

            if ( _options.manualEditingEnabled ) {
                createSpanElement( noEventsTextContainer, " " + _options.clickText + " " );
                createSpanElement( noEventsTextContainer, _options.hereText, "link", addEventFunction );
                createSpanElement( noEventsTextContainer, " " + _options.toAddANewEventText );
            }

            _element_ListAllWeekEventsView_Contents_FullView_Contents[ dateID ] = [ dayContents, dayHeader ];
        } else {

            if ( _element_ListAllWeekEventsView_Contents_FullView_Contents.hasOwnProperty( dateID ) ) {
                var existingContents = _element_ListAllWeekEventsView_Contents_FullView_Contents[ dateID ];
                dayContents = existingContents[ 0 ];
                dayHeader = existingContents[ 1 ];
            }
        }

        return [ dayContents, dayHeader ];
    }

    function updateViewAllWeekEventsViewFromEventEdit() {
        if ( isOverlayVisible( _element_ListAllWeekEventsView ) ) {
            showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected );
        }
    }

    function onPreviousWeek() {
        moveDateBackOneWeek( _element_ListAllWeekEventsView_DateSelected );
        showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected, true );
    }

    function onNextWeek() {
        moveDateForwardWeek( _element_ListAllWeekEventsView_DateSelected );
        showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected, true );
    }

    function onThisWeek() {
        _element_ListAllWeekEventsView_DateSelected = new Date();
        
        showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected, true );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Date/Time Displays
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getTimeToTimeDisplay( fromDate, toDate ) {
        return getTimeForDisplay( fromDate ) + " " + _options.toTimeText + " " + getTimeForDisplay( toDate );
    }

    function getTimeForDisplay( date ) {
        return padNumber( date.getHours() ) + ":" + padNumber( date.getMinutes() );
    }

    function buildDateTimeToDateTimeDisplay( container, fromDate, toDate ) {
        container.innerHTML = "";

        buildDateTimeDisplay( container, fromDate );
        createSpanElement( container, " " + _options.toTimeText + " " );
        buildDateTimeDisplay( container, toDate );
    }

    function buildDateTimeDisplay( container, date, addTime, addYear, addDayName ) {
        addTime = !isDefined( addTime ) ? true : addTime;
        addYear = !isDefined( addYear ) ? true : addYear;
        addDayName = !isDefined( addDayName ) ? false : addDayName;

        if ( addDayName ) {
            createSpanElement( container, _options.dayNames[ getWeekdayNumber( date ) ] + ", " );
        }

        buildDayDisplay( container, date );
        createSpanElement( container, " " + _options.monthNames[ date.getMonth() ] );

        if ( addYear ) {
            createSpanElement( container, " " + date.getFullYear() );
        }

        if ( addTime ) {
            createSpanElement( container, " " + getTimeForDisplay( date ) );
        }
    }

    function buildDayDisplay( container, date, beforeText, afterText ) {
        if ( isDefined( beforeText ) ) {
            createSpanElement( container, beforeText );
        }

        createSpanElement( container, date.getDate() );

        if ( _options.showDayNumberOrdinals ) {
            var sup = createElement( "sup" );
            sup.innerText = getDayOrdinal( date.getDate() );
            container.appendChild( sup );
        }

        if ( isDefined( afterText ) ) {
            createSpanElement( container, afterText );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Month Days
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */
    
    function buildPreviousMonthDays( dateTime, startDay ) {
        if ( startDay > 1 ) {
            var previousMonth = new Date( dateTime );
            previousMonth.setMonth( previousMonth.getMonth() - 1 );

            var totalDaysInMonth = getTotalDaysInMonth( previousMonth.getFullYear(), previousMonth.getMonth() ),
                elementDayNumber = 1,
                dayStart = ( totalDaysInMonth - startDay ) + 1;

            for ( var day = dayStart; day < totalDaysInMonth; day++ ) {
                var addMonthName = day === ( totalDaysInMonth - 1 );

                buildDay( day + 1 , elementDayNumber, previousMonth.getMonth(), previousMonth.getFullYear(), true, addMonthName );
                elementDayNumber++;
            }
        }
    }

    function buildMonthDays( totalDaysInMonth, startDay ) {
        var elementDayNumber = 0;

        for ( var day = 0; day < totalDaysInMonth; day++ ) {
            elementDayNumber = startDay + day;

            buildDay( day + 1, elementDayNumber, _currentDate.getMonth(), _currentDate.getFullYear(), false );
        }

        return elementDayNumber;
    }

    function buildNextMonthDays( lastDayFilled ) {
        if ( lastDayFilled < 42 ) {
            var actualDay = 1,
                nextMonth = new Date( _currentDate );

            nextMonth.setMonth( nextMonth.getMonth() + 1 );

            for ( var elementDayNumber = lastDayFilled + 1; elementDayNumber < 43; elementDayNumber++ ) {
                var addMonthName = actualDay === 1;

                buildDay( actualDay, elementDayNumber, nextMonth.getMonth(), nextMonth.getFullYear(), true, addMonthName );
                actualDay++;
            }

            var nextDay = getTotalDaysInMonth( nextMonth.getFullYear(), nextMonth.getMonth() );
            nextDay = Math.round( nextDay / 2 );

            _largestDateInView = new Date( nextMonth.getFullYear(), nextMonth.getMonth(), nextDay );

        } else {
            _largestDateInView = null;
        }
    }

    function buildDay( actualDay, elementDayNumber, month, year, isMuted, includeMonthName ) {
        var dayElement = getElementByID( _elementID_DayElement + elementDayNumber );
        
        if ( dayElement !== null ) {
            var today = new Date(),
                dayIsToday = actualDay === today.getDate() && year === today.getFullYear() && month === today.getMonth(),
                dayText = createElement( "span" ),
                dayDate = new Date( year, month, actualDay ),
                dayMutedClass = isMuted ? " day-muted" : "",
                allowDatePickerHoverAndSelect = true;
            
            includeMonthName = isDefined( includeMonthName ) ? includeMonthName : false;

            dayElement.innerHTML = "";
            dayElement.className = dayElement.className.replace( " cell-today", "" ).replace( " cell-selected", "" ).replace( " cell-no-click", "" );
            
            if ( _datePickerModeEnabled && dayIsToday ) {
                dayElement.className += " cell-today";
            }

            if ( _datePickerModeEnabled && !dayIsToday && _currentDateForDatePicker !== null && doDatesMatch( dayDate, _currentDateForDatePicker ) ) {
                dayElement.className += " cell-selected";
            }

            if ( _datePickerModeEnabled ) {
                allowDatePickerHoverAndSelect = isDateValidForDatePicker( dayDate );
    
                if ( !allowDatePickerHoverAndSelect ) {
                    dayElement.className += " cell-no-click";
                    dayText.className = "no-click";
                }
                
            } else {
                dayText.className = "";
            }

            dayText.className += dayMutedClass;
            dayText.className += dayIsToday && !_datePickerModeEnabled ? " today" : "";
            dayText.innerText = actualDay;

            if ( actualDay === 1 && !_datePickerModeEnabled ) {
                dayText.className += " first-day";
            }

            if ( isWeekendDay( dayDate ) && dayElement.className.indexOf( "weekend-day" ) === -1 ) {
                dayElement.className += " weekend-day";
            }

            dayElement.oncontextmenu = function( e ) {
                showDayDropDownMenu( e, dayDate );
            };

            if ( _options.showDayNumberOrdinals ) {
                var sup = createElement( "sup" );
                sup.innerText = getDayOrdinal( actualDay );
                dayText.appendChild( sup );
            }

            dayElement.appendChild( dayText );
            dayElement.appendChild( createElement( "span", "blank" ) );
            
            var expandDayButton = createElement( "div", "ib-arrow-expand-left-right-icon" );
            dayElement.appendChild( expandDayButton );

            addToolTip( expandDayButton, _options.expandDayTooltipText );

            expandDayButton.onclick = function() {
                showFullDayView( dayDate, true );
            };

            if ( includeMonthName && _options.showPreviousNextMonthNamesInMainDisplay ) {
                createSpanElement( dayElement, _options.monthNames[ month ], "month-name" + dayMutedClass, function() {
                    if ( actualDay === 1 ) {
                        moveForwardMonth();
                    } else {
                        moveBackMonth();
                    }
                }, true );
            }

            addHolidays( dayDate, dayMutedClass, dayElement );

            if ( _options.manualEditingEnabled ) {
                dayElement.ondblclick = function() {
                    if ( _options.useTemplateWhenAddingNewEvent ) {
                        var newBlankTemplateEvent = buildBlankTemplateEvent( dayDate, dayDate );

                        showEventEditingDialog( newBlankTemplateEvent );
                    } else {
                        showEventEditingDialog( null, dayDate );
                    }
                };

                makeAreaDroppable( dayElement, year, month, actualDay );
            }

            if ( _datePickerModeEnabled ) {
                if ( allowDatePickerHoverAndSelect ) {
                    dayElement.onclick = function( e ) {
                        setDatePickerDate( e, dayDate );
                    };
                } else {
                    dayElement.onclick = cancelBubble;
                }
            }
        }
    }

    function getHolidaysText( date ) {
        var result = null;

        if ( _options.showHolidays ) {
            var holidayTextItems = [],
                holidayTextItemsAnyCase = [],
                holidaysLength = _options.holidays.length;

            for ( var holidayIndex = 0; holidayIndex < holidaysLength; holidayIndex++ ) {
                var holiday = _options.holidays[ holidayIndex ],
                    holidayText = getString( holiday.title, "" );

                if ( getNumber( holiday.day ) === date.getDate() && getNumber( holiday.month ) === date.getMonth() + 1 && holidayText !== "" && holidayTextItemsAnyCase.indexOf( holidayText.toLowerCase() ) ) {
                    holidayTextItems.push( holidayText );
                    holidayTextItemsAnyCase.push( holidayText.toLowerCase() );
                }
            }

            if ( holidayTextItems.length > 0 ) {
                result = holidayTextItems.join( ", " );
            }
        }

        return result;
    }

    function addHolidays( date, dayMutedClass, dayElement ) {
        if ( _options.showHolidays ) {
            var holidayTextItemsAnyCase = [],
                holidaysLength = _options.holidays.length;

            for ( var holidayIndex = 0; holidayIndex < holidaysLength; holidayIndex++ ) {
                var holiday = _options.holidays[ holidayIndex ],
                    holidayText = getString( holiday.title, "" );

                if ( getNumber( holiday.day ) === date.getDate() && getNumber( holiday.month ) === date.getMonth() + 1 && holidayText !== "" && holidayTextItemsAnyCase.indexOf( holidayText.toLowerCase() ) ) {
                    var className = isDefinedFunction( holiday.onClick ) ? "holiday-link" : "holiday";
                    
                    createSpanElement( dayElement, holidayText, className + dayMutedClass, holiday.onClick, true );

                    holidayTextItemsAnyCase.push( holidayText.toLowerCase() );
                }
            }
        }
    }

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Drag & Drop
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function makeEventDraggable( event, eventDetails, dragFromDate, container ) {
        if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
            var draggedFromDate = new Date( dragFromDate ),
                isDateWeekendDay = isWeekendDay( draggedFromDate ),
                dragDisabledClass = !isDateWeekendDay ? " drag-not-allowed" : " drag-not-allowed-weekend-day";

            event.setAttribute( "draggable", true );
            
            event.ondragstart = function() {
                _eventDetails_Dragged_DateFrom = draggedFromDate;
                _eventDetails_Dragged = eventDetails;

                if ( isDefined( container ) ) {
                    container.className += dragDisabledClass;

                    makeAreaNonDroppable( container );
                }

                updateContainerClassChildren( "cell", function( element ) {
                    element.className += " prevent-pointer-events";
                }, event );

                updateContainerClassChildren( "events", function( element ) {
                    element.className += " prevent-pointer-events";
                }, event );
            };

            event.ondragend = function() {
                _eventDetails_Dragged_DateFrom = null;
                _eventDetails_Dragged = null;

                if ( isDefined( container ) ) {
                    container.className = container.className.replace( dragDisabledClass, "" );

                    makeAreaDroppable( container, draggedFromDate.getFullYear(), draggedFromDate.getMonth(), draggedFromDate.getDate() );
                }

                updateContainerClassChildren( "cell", function( element ) {
                    element.className = element.className.replace( " prevent-pointer-events", "" );
                }, event );
                
                updateContainerClassChildren( "events", function( element ) {
                    element.className = element.className.replace( " prevent-pointer-events", "" );
                }, event );
            };
        }
    }

    function makeAreaDroppable( element, year, month, actualDay ) {
        if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
            var areaDate = new Date( year, month, actualDay );

            element.ondragover = function( e ) {
                showDraggingEffect( e, element, areaDate );
            };
        
            element.ondragenter = function( e ) {
                showDraggingEffect( e, element, areaDate );
            };
        
            element.ondragleave = function( e ) {
                hideDraggingEffect( e, element, areaDate );
            };
        
            element.ondrop = function( e ) {
                hideDraggingEffect( e, element, areaDate );

                if ( e.dataTransfer.files.length === 0 ) {
                    dropEventOnDay( e, year, month, actualDay );
                } else {
                    dropFileOnDisplay( e );
                }
            };
        }
    }

    function makeAreaNonDroppable( element ) {
        if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
            element.ondragover = null;
            element.ondragenter = null;
            element.ondragleave = null;
            element.ondrop = null;
        }
    }

    function showDraggingEffect( e, dayElement, areaDate ) {
        cancelBubble( e );

        if ( _eventDetails_Dragged !== null && dayElement.className.indexOf( " drag-over" ) === -1 && !doDatesMatch( _eventDetails_Dragged_DateFrom, areaDate ) ) {
            dayElement.className += " drag-over";
        }
    }

    function hideDraggingEffect( e, dayElement, areaDate ) {
        cancelBubble( e );

        if ( _eventDetails_Dragged !== null && dayElement.className.indexOf( " drag-over" ) > -1 && !doDatesMatch( _eventDetails_Dragged_DateFrom, areaDate ) ) {
            dayElement.className = dayElement.className.replace( " drag-over", "" );
        }
    }

    function dropEventOnDay( e, year, month, day ) {
        cancelBubble( e );

        var dropDate = new Date( year, month, day );
        if ( _eventDetails_Dragged !== null && !doDatesMatch( _eventDetails_Dragged_DateFrom, dropDate ) ) {
            
            if ( !isDefined( day ) ) {
                var totalDaysInMonth = getTotalDaysInMonth( year, month );
                day = _eventDetails_Dragged.from.getDate();

                if ( day > totalDaysInMonth ) {
                    day = totalDaysInMonth;
                }
            }

            var daysBetweenDraggedFromAndFrom = getTotalDaysBetweenDates( _eventDetails_Dragged.from, _eventDetails_Dragged_DateFrom ),
                daysBetweenFromAndTo = getTotalDaysBetweenDates( _eventDetails_Dragged.from, _eventDetails_Dragged.to ),
                fromDate = new Date( year, month, day, _eventDetails_Dragged.from.getHours(), _eventDetails_Dragged.from.getMinutes() ),
                toDate = new Date( year, month, day, _eventDetails_Dragged.to.getHours(), _eventDetails_Dragged.to.getMinutes() ),
                repeatEndsDate = _eventDetails_Dragged.repeatEnds;               

            if ( daysBetweenDraggedFromAndFrom > 0 ) {
                fromDate.setDate( fromDate.getDate() - daysBetweenDraggedFromAndFrom );
                toDate.setDate( toDate.getDate() - daysBetweenDraggedFromAndFrom );
            }

            if ( isDefined( repeatEndsDate ) ) {
                var newFromDaysDifference = getTotalDaysBetweenDates( fromDate, _eventDetails_Dragged.from );

                if ( fromDate > _eventDetails_Dragged.from ) {
                    repeatEndsDate.setDate( repeatEndsDate.getDate() + newFromDaysDifference );
                } else {
                    repeatEndsDate.setDate( repeatEndsDate.getDate() - newFromDaysDifference );
                }
            }

            if ( daysBetweenFromAndTo > 0 ) {
                toDate.setDate( toDate.getDate() + daysBetweenFromAndTo );
            }

            _this.updateEventDateTimes( _eventDetails_Dragged.id, fromDate, toDate, repeatEndsDate );            
            refreshViews();
        }
    }

    function dropFileOnDisplay( e ) {
        if ( isDefined( _window.FileReader ) ) {
            var reader = new FileReader();

            reader.onload = function( event ) {
                _this.addEventsFromJson( event.target.result );
            };
    
            reader.readAsText( e.dataTransfer.files[ 0 ] );
        }
    }

    function getObjectFromString( objectString ) {
        var result;

        try {
            result = JSON.parse( objectString );
        } catch ( e1 ) {

            try {
                result = eval( "(" + objectString + ")" );
            } catch ( e2 ) {
                console.error( "Errors in object: " + e1.message + ", " + e2.message );
                result = null;
            }
        }

        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Drop-Down Menus
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDropDownMenus() {
        if ( !_datePickerModeEnabled ) {
            buildDayDropDownMenu();
            buildEventDropDownMenu();
            buildFullDayViewDropDownMenu();
            buildDayHeaderDropDownMenu();
        }
    }

    function buildDayDropDownMenu() {
        if ( _element_DropDownMenu_Day !== null ) {
            removeNode( _document.body, _element_DropDownMenu_Day );

            _element_DropDownMenu_Day_Paste_Separator = null;
            _element_DropDownMenu_Day_Paste = null;
        }

        _element_DropDownMenu_Day = createElement( "div", "calendar-drop-down-menu" );
        _document.body.appendChild( _element_DropDownMenu_Day );

        if ( _options.manualEditingEnabled ) {
            buildMenuItemWithIcon( _element_DropDownMenu_Day, "ib-plus-icon", _options.addEventTitle + "...", function() {
                if ( _options.useTemplateWhenAddingNewEvent ) {
                    var newBlankTemplateEvent = buildBlankTemplateEvent( _element_DropDownMenu_Day_DateSelected, _element_DropDownMenu_Day_DateSelected );

                    showEventEditingDialog( newBlankTemplateEvent );
                } else {
                    showEventEditingDialog( null, _element_DropDownMenu_Day_DateSelected );
                }
            }, true );
    
            buildMenuSeparator( _element_DropDownMenu_Day );
        }

        buildMenuItemWithIcon( _element_DropDownMenu_Day, "ib-arrow-expand-left-right-icon", _options.expandDayTooltipText, function() {
            showFullDayView( _element_DropDownMenu_Day_DateSelected, true );
        } );

        buildMenuSeparator( _element_DropDownMenu_Day );

        buildMenuItemWithIcon( _element_DropDownMenu_Day, "ib-hamburger-icon", _options.viewWeekEventsText, function() {
            showListAllWeekEventsView( _element_DropDownMenu_Day_DateSelected, true );
        } );

        if ( _options.manualEditingEnabled ) {
            _element_DropDownMenu_Day_Paste_Separator = buildMenuSeparator( _element_DropDownMenu_Day );
            
            _element_DropDownMenu_Day_Paste = buildMenuItemWithIcon( _element_DropDownMenu_Day, "ib-circle-icon", _options.pasteText, function() {
                addClonedEventToDate( _element_DropDownMenu_Day_DateSelected );
            } );
        }
    }

    function buildEventDropDownMenu() {
        if ( _element_DropDownMenu_Event !== null ) {
            removeNode( _document.body, _element_DropDownMenu_Event );
            _element_DropDownMenu_Event = null;
            _element_DropDownMenu_Event_OpenUrlSeparator = null;
        }

        _element_DropDownMenu_Event = createElement( "div", "calendar-drop-down-menu" );
        _document.body.appendChild( _element_DropDownMenu_Event );

        if ( _options.manualEditingEnabled ) {
            buildMenuItemWithIcon( _element_DropDownMenu_Event, "ib-plus-icon", _options.editEventTitle + "...", function() {
                showEventEditingDialog( _element_DropDownMenu_Event_EventDetails );
            }, true );

            buildMenuSeparator( _element_DropDownMenu_Event );
            
            buildMenuItemWithIcon( _element_DropDownMenu_Event, "ib-circle-hollow-icon", _options.copyText, function() {
                _copiedEventDetails = cloneEventDetails( _element_DropDownMenu_Event_EventDetails );
            } );

            buildMenuSeparator( _element_DropDownMenu_Event );

            buildMenuItemWithIcon( _element_DropDownMenu_Event, "ib-minus-icon", _options.duplicateText, function() {
                showEventEditingDialog( _element_DropDownMenu_Event_EventDetails );
                setEventEditingDialogInDuplicateMode();
            } );

            buildMenuSeparator( _element_DropDownMenu_Event );

            buildMenuItemWithIcon( _element_DropDownMenu_Event, "ib-close-icon", _options.removeEventText, function() {
                addNode( _document.body, _element_DisabledBackground );
    
                var onNoEvent = function() {
                    removeNode( _document.body, _element_DisabledBackground );
                };
    
                var onYesEvent = function() {
                    onNoEvent();
    
                    if ( isDefined( _element_DropDownMenu_Event_EventDetails.id ) ) {
                        if ( !_element_ConfirmationDialog_RemoveAllEvents.checked && _element_DropDownMenu_Event_FormattedDateSelected !== null ) {

                            if ( isDefinedArray( _element_DropDownMenu_Event_EventDetails.seriesIgnoreDates ) ) {
                                _element_DropDownMenu_Event_EventDetails.seriesIgnoreDates.push( _element_DropDownMenu_Event_FormattedDateSelected );
                            } else {
                                _element_DropDownMenu_Event_EventDetails.seriesIgnoreDates = [ _element_DropDownMenu_Event_FormattedDateSelected ];
                            }

                            buildDayEvents();

                        } else {
                            _this.removeEvent( _element_DropDownMenu_Event_EventDetails.id, true );
                        }
                        
                        refreshOpenedViews();
                    }
                };

                var repeatEvery = getNumber( _element_DropDownMenu_Event_EventDetails.repeatEvery ),
                    showCheckBox = repeatEvery > _repeatType.never && _element_DropDownMenu_Event_FormattedDateSelected !== null;
        
                showConfirmationDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent, showCheckBox );
            } );

            _element_DropDownMenu_Event_OpenUrlSeparator = buildMenuSeparator( _element_DropDownMenu_Event );
        }

        _element_DropDownMenu_Event_OpenUrl = buildMenuItemWithIcon( _element_DropDownMenu_Event, "ib-arrow-top-right-icon", _options.openUrlText, function() {
            openEventUrl( _element_DropDownMenu_Event_EventDetails.url );
        } );
    }

    function buildFullDayViewDropDownMenu() {
        if ( _element_DropDownMenu_FullDay !== null ) {
            removeNode( _document.body, _element_DropDownMenu_FullDay );

            _element_DropDownMenu_FullDay = null;
            _element_DropDownMenu_FullDay_RemoveEvents_Separator = null;
            _element_DropDownMenu_FullDay_RemoveEvents = null;
            _element_DropDownMenu_FullDay_Paste_Separator = null;
            _element_DropDownMenu_FullDay_Paste = null;
        }

        if ( _options.manualEditingEnabled ) {
            _element_DropDownMenu_FullDay = createElement( "div", "calendar-drop-down-menu" );
            _document.body.appendChild( _element_DropDownMenu_FullDay );

            buildMenuItemWithIcon( _element_DropDownMenu_FullDay, "ib-plus-icon", _options.addEventTitle + "...", function() {
                if ( _options.useTemplateWhenAddingNewEvent ) {
                    var newBlankTemplateEvent = buildBlankTemplateEvent( _element_FullDayView_DateSelected, _element_FullDayView_DateSelected );

                    showEventEditingDialog( newBlankTemplateEvent );
                } else {
                    showEventEditingDialog( null, _element_FullDayView_DateSelected );
                }
            }, true );

            _element_DropDownMenu_FullDay_RemoveEvents_Separator = buildMenuSeparator( _element_DropDownMenu_FullDay );

            _element_DropDownMenu_FullDay_RemoveEvents = buildMenuItemWithIcon( _element_DropDownMenu_FullDay, "ib-close-icon", _options.removeEventsTooltipText, function() {
                removeNonRepeatingEventsOnSpecificDate( _element_FullDayView_DateSelected, doDatesMatch );
            } );

            if ( _options.manualEditingEnabled ) {
                _element_DropDownMenu_FullDay_Paste_Separator = buildMenuSeparator( _element_DropDownMenu_FullDay );
                
                _element_DropDownMenu_FullDay_Paste = buildMenuItemWithIcon( _element_DropDownMenu_FullDay, "ib-circle-icon", _options.pasteText, function() {
                    addClonedEventToDate( _element_FullDayView_DateSelected );
                } );
            }
        }
    }

    function buildDayHeaderDropDownMenu() {
        if ( _element_DropDownMenu_HeaderDay !== null ) {
            removeNode( _document.body, _element_DropDownMenu_HeaderDay );

            _element_DropDownMenu_HeaderDay = null;
        }

        _element_DropDownMenu_HeaderDay = createElement( "div", "calendar-drop-down-menu" );
        _document.body.appendChild( _element_DropDownMenu_HeaderDay );

        buildMenuItemWithIcon( _element_DropDownMenu_HeaderDay, "ib-minus-icon", _options.hideDayText, function() {
            _options.visibleDays.splice( _options.visibleDays.indexOf( _element_DropDownMenu_HeaderDay_SelectedDay ), 1 );
            _initialized = false;

            triggerOptionsEventWithData( "onOptionsUpdated", _options );
            build( _currentDate, true );
        }, true );

        buildMenuSeparator( _element_DropDownMenu_HeaderDay );

        buildMenuItemWithIcon( _element_DropDownMenu_HeaderDay, "ib-octagon-hollow-icon", _options.visibleDaysTabText + "...", function() {
            selectTab( _element_ConfigurationDialog, 3 );
            showConfigurationDialog();
        } );
    }

    function buildMenuItemWithIcon( container, iconCSS, text, onClickEvent, isBold ) {
        isBold = isDefined( isBold ) ? isBold : false;

        var menuItem = createElement( "div", "item" );
        container.appendChild( menuItem );

        menuItem.appendChild( createElement( "div", iconCSS ) );

        var menuText = createElement( "div", "menu-text" );
        setNodeText( menuText, text );
        menuItem.appendChild( menuText );

        if ( isBold ) {
            menuText.className += " bold";
        }

        menuItem.onclick = function() {
            onClickEvent();
        };

        return menuItem;
    }

    function buildMenuSeparator( container ) {
        var separator = createElement( "div", "separator" );

        container.appendChild( separator );

        return separator;
    }

    function showDayDropDownMenu( e, date ) {
        if ( !_datePickerModeEnabled ) {
            _element_DropDownMenu_Day_DateSelected = new Date( date );

            if ( _element_DropDownMenu_Day_Paste !== null ) {
                var display = _copiedEventDetails !== null ? "block" : "none";
    
                _element_DropDownMenu_Day_Paste_Separator.style.display = display;
                _element_DropDownMenu_Day_Paste.style.display = display;
            }
    
            hideAllDropDowns();
            cancelBubble( e );
            showElementAtMousePosition( e, _element_DropDownMenu_Day );
        }
    }

    function showEventDropDownMenu( e, eventDetails, selectedDate ) {
        var url = getString( eventDetails.url ),
            display = url !== "" ? "block" : "none";

        _element_DropDownMenu_Event_EventDetails = eventDetails;
        _element_DropDownMenu_Event_FormattedDateSelected = isDefined( selectedDate ) ? selectedDate : null;
        _element_DropDownMenu_Event_OpenUrl.style.display = display;

        if ( _element_DropDownMenu_Event_OpenUrlSeparator !== null ) {
            _element_DropDownMenu_Event_OpenUrlSeparator.style.display = display;
        }

        if ( display === "block" || _element_DropDownMenu_Event.childElementCount > 2 ) {
            hideAllDropDowns();
            cancelBubble( e );
            showElementAtMousePosition( e, _element_DropDownMenu_Event );
        }
    }

    function showFullDayDropDownMenu( e ) {
        if ( _element_DropDownMenu_FullDay !== null ) {
            if ( _element_DropDownMenu_FullDay_Paste !== null ) {
                var pasteDisplay = _copiedEventDetails !== null ? "block" : "none";
    
                _element_DropDownMenu_FullDay_Paste_Separator.style.display = pasteDisplay;
                _element_DropDownMenu_FullDay_Paste.style.display = pasteDisplay;
            }

            if ( _element_FullDayView_EventsShown !== null ) {
                var removeEventsDisplay = _element_FullDayView_EventsShown.length > 0 ? "block" : "none";

                _element_DropDownMenu_FullDay_RemoveEvents_Separator.style.display = removeEventsDisplay;
                _element_DropDownMenu_FullDay_RemoveEvents.style.display = removeEventsDisplay;
            }

            hideAllDropDowns();
            cancelBubble( e );
            showElementAtMousePosition( e, _element_DropDownMenu_FullDay );
        }
    }

    function showDayHeaderDropDownMenu( e, selectedDay ) {
        if ( _options.visibleDays.length > 1 && !_datePickerModeEnabled ) {
            _element_DropDownMenu_HeaderDay_SelectedDay = selectedDay;

            hideAllDropDowns();
            cancelBubble( e );
            showElementAtMousePosition( e, _element_DropDownMenu_HeaderDay );
        }
    }

    function hideDropDownMenu( element ) {
        if ( isDropDownMenuVisible( element ) ) {
            element.style.display = "none";
        }
    }

    function isDropDownMenuVisible( element ) {
        return element !== null && element.style.display === "block";
    }

    function areDropDownMenusVisible() {
        return isDropDownMenuVisible( _element_DropDownMenu_Day ) || isDropDownMenuVisible( _element_DropDownMenu_Event ) || isDropDownMenuVisible( _element_DropDownMenu_FullDay ) || isDropDownMenuVisible( _element_DropDownMenu_HeaderDay );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Disabled Background
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDisabledBackground() {
        if ( _element_DisabledBackground === null && !_datePickerModeEnabled ) {
            _element_DisabledBackground = createElement( "div", "disabled-background" );
        }
    }

    function isDisabledBackgroundDisplayed() {
        return _document.body.contains( _element_DisabledBackground );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingDialog() {
        if ( !_datePickerModeEnabled ) {
            if ( _element_EventEditorDialog !== null ) {
                removeNode( _document.body, _element_EventEditorDialog );
            }
    
            _element_EventEditorDialog = createElement( "div", "calendar-dialog event-editor" );
            _document.body.appendChild( _element_EventEditorDialog );
    
            var view = createElement( "div", "view" );
            _element_EventEditorDialog.appendChild( view );
    
            _element_EventEditorDialog_DisabledArea = createElement( "div", "disabled-area" );
            view.appendChild( _element_EventEditorDialog_DisabledArea );
    
            _element_EventEditorDialog_TitleBar = createElement( "div", "title-bar" );
            view.appendChild( _element_EventEditorDialog_TitleBar );
    
            var contents = createElement( "div", "contents" );
            view.appendChild( contents );
    
            var tabsContainer = buildTabContainer( contents );
    
            buildTab( tabsContainer, _options.eventText, function( tab ) {
                showTabContents( tab, _element_EventEditorDialog_Tab_Event, _element_EventEditorDialog );
            }, true );
            
            buildTab( tabsContainer, _options.repeatsText.replace( ":", "" ), function( tab ) {
                showTabContents( tab, _element_EventEditorDialog_Tab_Repeats, _element_EventEditorDialog );
            } );
            
            buildTab( tabsContainer, _options.optionalText, function( tab ) {
                showTabContents( tab, _element_EventEditorDialog_Tab_Extra, _element_EventEditorDialog );
            } );
            
            _element_EventEditorDialog_Tab_Event = buildTabContents( contents, true, false );
            _element_EventEditorDialog_Tab_Repeats = buildTabContents( contents, false, false );
            _element_EventEditorDialog_Tab_Extra = buildTabContents( contents, false, false );
    
            buildEventEditorEventTabContent();
            buildEventEditorRepeatsTabContent();
            buildEventEditorExtraTabContent();
    
            _element_EventEditorDialog_ErrorMessage = createElement( "p", "error" );
            contents.appendChild( _element_EventEditorDialog_ErrorMessage );
    
            var buttonsSplitContainer = createElement( "div", "split" );
            contents.appendChild( buttonsSplitContainer );
    
            _element_EventEditorDialog_OKButton = createButtonElement( buttonsSplitContainer, _options.addText, "ok", eventDialogEvent_OK );
            createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", eventDialogEvent_Cancel );
            _element_EventEditorDialog_RemoveButton = createButtonElement( contents, _options.removeEventText, "remove", eventDialogEvent_Remove );
        }
    }

    function buildEventEditorEventTabContent() {
        createTextHeaderElement( _element_EventEditorDialog_Tab_Event, _options.titleText );

        var inputTitleContainer = createElement( "div", "input-title-container" );
        _element_EventEditorDialog_Tab_Event.appendChild( inputTitleContainer );

        _element_EventEditorDialog_Title = createElement( "input", null, "text" );
        inputTitleContainer.appendChild( _element_EventEditorDialog_Title );

        if ( _options.maximumEventTitleLength > 0 ) {
            _element_EventEditorDialog_Title.maxLength = _options.maximumEventTitleLength ;
        }

        createButtonElement( inputTitleContainer, "...", "select-colors", showEventEditorColorsDialog, _options.selectColorsText );

        createTextHeaderElement( _element_EventEditorDialog_Tab_Event, _options.fromText.replace( ":", "" ) + "/" + _options.toText );

        var fromSplitContainer = createElement( "div", "split" );
        _element_EventEditorDialog_Tab_Event.appendChild( fromSplitContainer );

        _element_EventEditorDialog_DateFrom = createElement( "input" );
        _element_EventEditorDialog_DateFrom.onchange = isAllDayChanged;
        fromSplitContainer.appendChild( _element_EventEditorDialog_DateFrom );

        setInputType( _element_EventEditorDialog_DateFrom, "date" );

        _element_EventEditorDialog_TimeFrom = createElement( "input" );
        fromSplitContainer.appendChild( _element_EventEditorDialog_TimeFrom );

        setInputType( _element_EventEditorDialog_TimeFrom, "time" );

        var toSplitContainer = createElement( "div", "split" );
        _element_EventEditorDialog_Tab_Event.appendChild( toSplitContainer );

        _element_EventEditorDialog_DateTo = createElement( "input" );
        _element_EventEditorDialog_DateTo.onchange = isAllDayChanged;
        toSplitContainer.appendChild( _element_EventEditorDialog_DateTo );

        setInputType( _element_EventEditorDialog_DateTo, "date" );

        _element_EventEditorDialog_TimeTo = createElement( "input" );
        toSplitContainer.appendChild( _element_EventEditorDialog_TimeTo );

        setInputType( _element_EventEditorDialog_TimeTo, "time" );

        _element_EventEditorDialog_IsAllDay = buildCheckBox( _element_EventEditorDialog_Tab_Event, _options.isAllDayText, isAllDayChanged )[ 0 ];
        _element_EventEditorDialog_ShowAlerts = buildCheckBox( _element_EventEditorDialog_Tab_Event, _options.showAlertsText )[ 0 ];
    }

    function buildEventEditorRepeatsTabContent() {
        var radioButtonsRepeatsContainer = createElement( "div", "radioButtonsContainer" );
        _element_EventEditorDialog_Tab_Repeats.appendChild( radioButtonsRepeatsContainer );

        _element_EventEditorDialog_RepeatEvery_Never = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsNever, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryDay = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryDayText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryWeek = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryWeekText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_Every2Weeks = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEvery2WeeksText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryMonth = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryMonthText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryYear = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryYearText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_Custom = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsCustomText, "RepeatType", repeatEveryEvent );

        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton = createButtonElement( radioButtonsRepeatsContainer, "...", "repeat-options", showEventEditorRepeatOptionsDialog, _options.repeatOptionsTitle );

        var toSplitContainer = createElement( "div", "split split-margin" );
        _element_EventEditorDialog_Tab_Repeats.appendChild( toSplitContainer );

        _element_EventEditorDialog_RepeatEvery_Custom_Value = createElement( "input", null, "number" );
        _element_EventEditorDialog_RepeatEvery_Custom_Value.setAttribute( "min", "1" );
        toSplitContainer.appendChild( _element_EventEditorDialog_RepeatEvery_Custom_Value );

        var radioButtonsCustomRepeatsContainer = createElement( "div", "radioButtonsContainer split-contents" );
        toSplitContainer.appendChild( radioButtonsCustomRepeatsContainer );

        _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.dailyText, "RepeatCustomType" );
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Weekly = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.weeklyText, "RepeatCustomType" );
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Monthly = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.monthlyText, "RepeatCustomType" );
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Yearly = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.yearlyText, "RepeatCustomType" );
    }

    function buildEventEditorExtraTabContent() {
        var inputFields1TextSplitContainer = createElement( "div", "split" );
        _element_EventEditorDialog_Tab_Extra.appendChild( inputFields1TextSplitContainer );

        createTextHeaderElement( inputFields1TextSplitContainer, _options.locationText );
        createTextHeaderElement( inputFields1TextSplitContainer, _options.groupText );

        var inputFields1SplitContainer = createElement( "div", "split" );
        _element_EventEditorDialog_Tab_Extra.appendChild( inputFields1SplitContainer );

        _element_EventEditorDialog_Location = createElement( "input", null, "text" );
        inputFields1SplitContainer.appendChild( _element_EventEditorDialog_Location );

        if ( _options.maximumEventLocationLength > 0 ) {
            _element_EventEditorDialog_Location.maxLength = _options.maximumEventLocationLength ;
        }

        _element_EventEditorDialog_Group = createElement( "input", null, "text" );
        inputFields1SplitContainer.appendChild( _element_EventEditorDialog_Group );

        if ( _options.maximumEventGroupLength > 0 ) {
            _element_EventEditorDialog_Group.maxLength = _options.maximumEventGroupLength ;
        }

        createTextHeaderElement( _element_EventEditorDialog_Tab_Extra, _options.descriptionText );

        _element_EventEditorDialog_Description = createElement( "textarea", "custom-scroll-bars" );
        _element_EventEditorDialog_Tab_Extra.appendChild( _element_EventEditorDialog_Description );

        if ( _options.maximumEventDescriptionLength > 0 ) {
            _element_EventEditorDialog_Description.maxLength = _options.maximumEventDescriptionLength ;
        }

        createTextHeaderElement( _element_EventEditorDialog_Tab_Extra, _options.urlText );

        _element_EventEditorDialog_Url = createElement( "input", null, "url" );
        _element_EventEditorDialog_Tab_Extra.appendChild( _element_EventEditorDialog_Url );
    }

    function addNewEvent() {
        showEventEditingDialog( null, _element_FullDayView_DateSelected );
    }

    function repeatEveryEvent() {
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton.disabled = _element_EventEditorDialog_RepeatEvery_Never.checked;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Yearly.disabled = !_element_EventEditorDialog_RepeatEvery_Custom.checked;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily.disabled = !_element_EventEditorDialog_RepeatEvery_Custom.checked;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Weekly.disabled = !_element_EventEditorDialog_RepeatEvery_Custom.checked;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Monthly.disabled = !_element_EventEditorDialog_RepeatEvery_Custom.checked;
        _element_EventEditorDialog_RepeatEvery_Custom_Value.disabled = !_element_EventEditorDialog_RepeatEvery_Custom.checked;
    }

    function isAllDayChanged() {
        var disabled = false;

        if ( _element_EventEditorDialog_IsAllDay.checked ) {
            _element_EventEditorDialog_DateTo.value = _element_EventEditorDialog_DateFrom.value;
            _element_EventEditorDialog_TimeFrom.value = "00:00";
            _element_EventEditorDialog_TimeTo.value = "23:59";
            disabled = true;
        }

        _element_EventEditorDialog_DateTo.disabled = disabled;
        _element_EventEditorDialog_TimeFrom.disabled = disabled;
        _element_EventEditorDialog_TimeTo.disabled = disabled;

        var fromDate = getSelectedDate( _element_EventEditorDialog_DateFrom ),
            toDate = getSelectedDate( _element_EventEditorDialog_DateTo );

        setMinimumDate( _element_EventEditorDialog_DateTo, fromDate );
        setMinimumDate( _element_EventEditorRepeatOptionsDialog_RepeatEnds, toDate );

        if ( fromDate > toDate ) {
            setSelectedDate( fromDate, _element_EventEditorDialog_DateTo );
        }

        if ( toDate > fromDate || toDate < fromDate ) {
            disabled = true;
            _element_EventEditorDialog_RepeatEvery_Never.checked = true;
        } else {
            disabled = false;
        }

        _element_EventEditorDialog_RepeatEvery_Never.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryDay.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryWeek.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_Every2Weeks.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryMonth.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryYear.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_Custom.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_Custom_Value.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Weekly.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Monthly.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_Custom_Type_Yearly.disabled = disabled;
        repeatEveryEvent();
    }

    function showEventEditingDialog( eventDetails, overrideTodayDate, overrideTimeValues ) {
        addNode( _document.body, _element_DisabledBackground );
        selectTab( _element_EventEditorDialog );

        if ( isDefined( eventDetails ) ) {
            setNodeText( _element_EventEditorDialog_TitleBar, _options.editEventTitle );

            _element_EventEditorDialog_OKButton.value = _options.updateText;
            _element_EventEditorDialog_RemoveButton.style.display = "block";
            _element_EventEditorDialog_EventDetails = eventDetails;
            _element_EventEditorDialog_TimeFrom.value = toFormattedTime( eventDetails.from );
            _element_EventEditorDialog_TimeTo.value = toFormattedTime( eventDetails.to );
            _element_EventEditorDialog_IsAllDay.checked = getBoolean( eventDetails.isAllDay );
            _element_EventEditorDialog_ShowAlerts.checked = getBoolean( eventDetails.showAlerts, true );
            _element_EventEditorDialog_Title.value = getString( eventDetails.title );
            _element_EventEditorDialog_Description.value = getString( eventDetails.description );
            _element_EventEditorDialog_Location.value = getString( eventDetails.location );
            _element_EventEditorDialog_Group.value = getString( eventDetails.group );
            _element_EventEditorDialog_Url.value = getString( eventDetails.url );
            _element_EventEditorColorsDialog_Color.value = getString( eventDetails.color, _options.defaultEventBackgroundColor );
            _element_EventEditorColorsDialog_ColorText.value = getString( eventDetails.colorText, _options.defaultEventTextColor );
            _element_EventEditorColorsDialog_ColorBorder.value = getString( eventDetails.colorBorder, _options.defaultEventBorderColor );
            _element_EventEditorDialog_RepeatEvery_Custom_Value.value = getNumber( eventDetails.repeatEveryCustomValue, 1 );

            setSelectedDate( eventDetails.from, _element_EventEditorDialog_DateFrom );
            setSelectedDate( eventDetails.to, _element_EventEditorDialog_DateTo );

            var repeatEvery = getNumber( eventDetails.repeatEvery );
            if ( repeatEvery === _repeatType.never ) {
                _element_EventEditorDialog_RepeatEvery_Never.checked = true;
            } else if ( repeatEvery === _repeatType.everyDay ) {
                _element_EventEditorDialog_RepeatEvery_EveryDay.checked = true;
            } else if ( repeatEvery === _repeatType.everyWeek ) {
                _element_EventEditorDialog_RepeatEvery_EveryWeek.checked = true;
            } else if ( repeatEvery === _repeatType.every2Weeks ) {
                _element_EventEditorDialog_RepeatEvery_Every2Weeks.checked = true;
            } else if ( repeatEvery === _repeatType.everyMonth ) {
                _element_EventEditorDialog_RepeatEvery_EveryMonth.checked = true;
            } else if ( repeatEvery === _repeatType.everyYear ) {
                _element_EventEditorDialog_RepeatEvery_EveryYear.checked = true;
            } else if ( repeatEvery === _repeatType.custom ) {
                _element_EventEditorDialog_RepeatEvery_Custom.checked = true;
            }

            var repeatEveryCustomType = getNumber( eventDetails.repeatEveryCustomType );
            if ( repeatEveryCustomType === _repeatCustomType.daily ) {
                _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily.checked = true;
            } else if ( repeatEveryCustomType === _repeatCustomType.weekly ) {
                _element_EventEditorDialog_RepeatEvery_Custom_Type_Weekly.checked = true;
            } else if ( repeatEveryCustomType === _repeatCustomType.monthly ) {
                _element_EventEditorDialog_RepeatEvery_Custom_Type_Monthly.checked = true;
            } else if ( repeatEveryCustomType === _repeatCustomType.yearly ) {
                _element_EventEditorDialog_RepeatEvery_Custom_Type_Yearly.checked = true;
            }

            var excludeDays = getArray( eventDetails.repeatEveryExcludeDays );
            _element_EventEditorRepeatOptionsDialog_Mon.checked = excludeDays.indexOf( 1 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Tue.checked = excludeDays.indexOf( 2 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Wed.checked = excludeDays.indexOf( 3 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Thu.checked = excludeDays.indexOf( 4 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Fri.checked = excludeDays.indexOf( 5 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Sat.checked = excludeDays.indexOf( 6 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Sun.checked = excludeDays.indexOf( 0 ) > -1;

            setSelectedDate( eventDetails.repeatEnds, _element_EventEditorRepeatOptionsDialog_RepeatEnds );
        } else {

            var date = new Date(),
                today = !isDefined( overrideTodayDate ) ? date : overrideTodayDate;

            if ( isDateToday( today ) ) {
                today.setHours( date.getHours() );
                today.setMinutes( date.getMinutes() );
            }

            setNodeText( _element_EventEditorDialog_TitleBar, _options.addEventTitle );

            _element_EventEditorDialog_OKButton.value = _options.addText;
            _element_EventEditorDialog_RemoveButton.style.display = "none";
            _element_EventEditorDialog_EventDetails = {};
            _element_EventEditorDialog_IsAllDay.checked = false;
            _element_EventEditorDialog_ShowAlerts.checked = true;
            _element_EventEditorDialog_Title.value = "";
            _element_EventEditorDialog_Description.value = "";
            _element_EventEditorDialog_Location.value = "";
            _element_EventEditorDialog_Group.value = "";
            _element_EventEditorDialog_Url.value = "";
            _element_EventEditorColorsDialog_Color.value = _options.defaultEventBackgroundColor;
            _element_EventEditorColorsDialog_ColorText.value = _options.defaultEventTextColor;
            _element_EventEditorColorsDialog_ColorBorder.value = _options.defaultEventBorderColor;
            _element_EventEditorDialog_RepeatEvery_Never.checked = true;
            _element_EventEditorRepeatOptionsDialog_Mon.checked = false;
            _element_EventEditorRepeatOptionsDialog_Tue.checked = false;
            _element_EventEditorRepeatOptionsDialog_Wed.checked = false;
            _element_EventEditorRepeatOptionsDialog_Thu.checked = false;
            _element_EventEditorRepeatOptionsDialog_Fri.checked = false;
            _element_EventEditorRepeatOptionsDialog_Sat.checked = false;
            _element_EventEditorRepeatOptionsDialog_Sun.checked = false;
            _element_EventEditorRepeatOptionsDialog_RepeatEnds.value = null;
            _element_EventEditorDialog_RepeatEvery_Custom_Value.value = "1";
            _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily.checked = true;

            if ( !isDefinedArray( overrideTimeValues ) ) {
                _element_EventEditorDialog_TimeFrom.value = toFormattedTime( today );
                _element_EventEditorDialog_TimeTo.value = toFormattedTime( today );
            } else {

                var newTimeToDisplay = padNumber( overrideTimeValues[ 0 ] ) + ":" + padNumber( overrideTimeValues[ 1 ] );

                _element_EventEditorDialog_TimeFrom.value = newTimeToDisplay;
                _element_EventEditorDialog_TimeTo.value = newTimeToDisplay;
            }

            setSelectedDate( today, _element_EventEditorDialog_DateFrom );
            setSelectedDate( today, _element_EventEditorDialog_DateTo );
        }

        buildToolbarButton( _element_EventEditorDialog_TitleBar, "ib-close", _options.closeTooltipText, eventDialogEvent_Cancel, true );
        isAllDayChanged();

        _openDialogs.push( eventDialogEvent_Cancel );
        _element_EventEditorDialog.style.display = "block";
        _element_EventEditorDialog_ErrorMessage.style.display = "none";
        _element_EventEditorDialog_Title.focus();
    }

    function setEventEditingDialogInDuplicateMode() {
        setNodeText( _element_EventEditorDialog_TitleBar, _options.addEventTitle );

        _element_EventEditorDialog_OKButton.value = _options.addText;
        _element_EventEditorDialog_RemoveButton.style.display = "none";
        _element_EventEditorDialog_EventDetails = cloneEventDetails( _element_EventEditorDialog_EventDetails );

        buildToolbarButton( _element_EventEditorDialog_TitleBar, "ib-close", _options.closeTooltipText, eventDialogEvent_Cancel, true );
    }

    function eventDialogEvent_OK() {
        var fromTime = _element_EventEditorDialog_TimeFrom.value.split( ":" ),
            toTime = _element_EventEditorDialog_TimeTo.value.split( ":" ),
            title = trimString( _element_EventEditorDialog_Title.value ),
            url = trimString( _element_EventEditorDialog_Url.value );

        if ( fromTime.length < 2 ) {
            showEventDialogErrorMessage( _options.fromTimeErrorMessage, _element_EventEditorDialog_TimeFrom );
        } else if ( toTime.length < 2 ) {
            showEventDialogErrorMessage( _options.toTimeErrorMessage, _element_EventEditorDialog_TimeTo );
        } else if ( title === "" ) {
            showEventDialogErrorMessage( _options.titleErrorMessage, _element_EventEditorDialog_Title );
        } else if ( url.length > 0 && !isValidUrl( url ) ) {
            showEventDialogErrorMessage( _options.urlErrorMessage, _element_EventEditorDialog_Url );
        }
        else {

            var fromDate = getSelectedDate( _element_EventEditorDialog_DateFrom ),
                toDate = getSelectedDate( _element_EventEditorDialog_DateTo ),
                description = trimString( _element_EventEditorDialog_Description.value ),
                location = trimString( _element_EventEditorDialog_Location.value ),
                group = trimString( _element_EventEditorDialog_Group.value ),
                repeatEnds = getSelectedDate( _element_EventEditorRepeatOptionsDialog_RepeatEnds, null ),
                repeatEveryCustomValue = parseInt( _element_EventEditorDialog_RepeatEvery_Custom_Value.value );

            setTimeOnDate( fromDate, _element_EventEditorDialog_TimeFrom.value );
            setTimeOnDate( toDate, _element_EventEditorDialog_TimeTo.value );

            if ( isNaN( repeatEveryCustomValue ) ) {
                repeatEveryCustomValue = 0;
                _element_EventEditorDialog_RepeatEvery_Never.checked = true;
                _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily.checked = true;
            }

            if ( toDate < fromDate ) {
                showEventDialogErrorMessage( _options.toSmallerThanFromErrorMessage, _element_EventEditorDialog_DateTo );
            } else {
                
                eventDialogEvent_Cancel();

                var isExistingEvent = isDefined( _element_EventEditorDialog_EventDetails.id ),
                    newEvent = {
                        from: fromDate,
                        to: toDate,
                        title: title,
                        description: description,
                        location: location,
                        group: group,
                        isAllDay: _element_EventEditorDialog_IsAllDay.checked,
                        showAlerts: _element_EventEditorDialog_ShowAlerts.checked,
                        color: _element_EventEditorDialog_EventDetails.color,
                        colorText: _element_EventEditorDialog_EventDetails.colorText,
                        colorBorder: _element_EventEditorDialog_EventDetails.colorBorder,
                        repeatEveryExcludeDays: _element_EventEditorDialog_EventDetails.repeatEveryExcludeDays,
                        repeatEnds: repeatEnds,
                        url: url,
                        repeatEveryCustomValue: repeatEveryCustomValue
                    };

                if ( _element_EventEditorDialog_RepeatEvery_Never.checked ) {
                    newEvent.repeatEvery = _repeatType.never;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryDay.checked ) {
                    newEvent.repeatEvery = _repeatType.everyDay;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryWeek.checked ) {
                    newEvent.repeatEvery = _repeatType.everyWeek;
                } else if ( _element_EventEditorDialog_RepeatEvery_Every2Weeks.checked ) {
                    newEvent.repeatEvery = _repeatType.every2Weeks;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryMonth.checked ) {
                    newEvent.repeatEvery = _repeatType.everyMonth;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryYear.checked ) {
                    newEvent.repeatEvery = _repeatType.everyYear;
                } else if ( _element_EventEditorDialog_RepeatEvery_Custom.checked ) {
                    newEvent.repeatEvery = _repeatType.custom;
                }

                if ( _element_EventEditorDialog_RepeatEvery_Custom_Type_Daily.checked ) {
                    newEvent.repeatEveryCustomType = _repeatCustomType.daily;
                } else if ( _element_EventEditorDialog_RepeatEvery_Custom_Type_Weekly.checked ) {
                    newEvent.repeatEveryCustomType = _repeatCustomType.weekly;
                } else if ( _element_EventEditorDialog_RepeatEvery_Custom_Type_Monthly.checked ) {
                    newEvent.repeatEveryCustomType = _repeatCustomType.monthly;
                } else if ( _element_EventEditorDialog_RepeatEvery_Custom_Type_Yearly.checked ) {
                    newEvent.repeatEveryCustomType = _repeatCustomType.yearly;
                }

                if ( !isExistingEvent ) {
                    newEvent.organizerName = _options.organizerName;
                    newEvent.organizerEmailAddress = _options.organizerEmailAddress;
                } else {
                    newEvent.id = _element_EventEditorDialog_EventDetails.id;
                }
    
                if ( isExistingEvent ) {
                    _this.updateEvent( _element_EventEditorDialog_EventDetails.id, newEvent, false );
                } else {
                    _this.addEvent( newEvent, false );
                }
    
                buildDayEvents();
                refreshOpenedViews();
            }
        }
    }

    function eventDialogEvent_Cancel( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        removeNode( _document.body, _element_DisabledBackground );

        _element_EventEditorDialog.style.display = "none";
    }

    function eventDialogEvent_Remove() {
        _element_EventEditorDialog_DisabledArea.style.display = "block";

        var onNoEvent = function() {
            _element_EventEditorDialog_DisabledArea.style.display = "none";
        };

        var onYesEvent = function() {
            onNoEvent();
            eventDialogEvent_Cancel();

            if ( isDefined( _element_EventEditorDialog_EventDetails.id ) ) {
                _this.removeEvent( _element_EventEditorDialog_EventDetails.id, true );
                refreshOpenedViews();
            }
        };

        showConfirmationDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent );
    }

    function showEventDialogErrorMessage( message, input ) {
        setNodeText( _element_EventEditorDialog_ErrorMessage, message );
        _element_EventEditorDialog_ErrorMessage.style.display = "block";

        input.focus();
    }

    function refreshOpenedViews() {
        updateFullDayViewFromEventEdit();
        updateViewAllEventsViewFromEventEdit();
        updateViewAllWeekEventsViewFromEventEdit();
    }

    function buildBlankTemplateEvent( fromDate, toDate, fromTime, toTime ) {
        fromTime = isDefined( fromTime ) ? fromTime : "09:00";
        toTime = isDefined( toTime ) ? fromTime : "09:00";

        setTimeOnDate( fromDate, fromTime );
        setTimeOnDate( toDate, toTime );

        var newEvent = {
            from: fromDate,
            to: toDate,
            title: _options.newEventDefaultTitle,
            description: "",
            location: "",
            group: "",
            isAllDay: false,
            showAlerts: true,
            color: _options.defaultEventBackgroundColor,
            colorText: _options.defaultEventTextColor,
            colorBorder: _options.defaultEventBorderColor,
            repeatEveryExcludeDays: [],
            repeatEnds: null,
            url: "",
            repeatEveryCustomValue: "",
            repeatEvery: _repeatType.never,
            repeatEveryCustomType: _repeatCustomType.daily,
            organizerName: "",
            organizerEmailAddress: "",
        };

        _this.addEvent( newEvent, false );

        buildDayEvents();
        refreshOpenedViews();

        return newEvent;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Colors Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingColorDialog() {
        if ( !_datePickerModeEnabled ) {
            if ( _element_EventEditorColorsDialog !== null ) {
                removeNode( _document.body, _element_EventEditorColorsDialog );
            }
    
            _element_EventEditorColorsDialog = createElement( "div", "calendar-dialog event-editor-colors" );
            _document.body.appendChild( _element_EventEditorColorsDialog );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.selectColorsText );
            _element_EventEditorColorsDialog.appendChild( titleBar );
    
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, eventColorsDialogEvent_Cancel, true );
    
            var contents = createElement( "div", "contents" );
            _element_EventEditorColorsDialog.appendChild( contents );
    
            createTextHeaderElement( contents, _options.backgroundColorText );
    
            _element_EventEditorColorsDialog_Color = createElement( "input" );
            contents.appendChild( _element_EventEditorColorsDialog_Color );
    
            setInputType( _element_EventEditorColorsDialog_Color, "color" );
    
            createTextHeaderElement( contents, _options.textColorText );
    
            _element_EventEditorColorsDialog_ColorText = createElement( "input" );
            contents.appendChild( _element_EventEditorColorsDialog_ColorText );
    
            setInputType( _element_EventEditorColorsDialog_ColorText, "color" );
    
            createTextHeaderElement( contents, _options.borderColorText );
    
            _element_EventEditorColorsDialog_ColorBorder = createElement( "input" );
            contents.appendChild( _element_EventEditorColorsDialog_ColorBorder );
    
            setInputType( _element_EventEditorColorsDialog_ColorBorder, "color" );
    
            var buttonsSplitContainer = createElement( "div", "split" );
            contents.appendChild( buttonsSplitContainer );
    
            createButtonElement( buttonsSplitContainer, _options.okText, "ok", eventColorsDialogEvent_OK );
            createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", eventColorsDialogEvent_Cancel );
        }
    }

    function eventColorsDialogEvent_OK() {
        eventColorsDialogEvent_Cancel();

        _element_EventEditorDialog_EventDetails.color = _element_EventEditorColorsDialog_Color.value;
        _element_EventEditorDialog_EventDetails.colorText = _element_EventEditorColorsDialog_ColorText.value;
        _element_EventEditorDialog_EventDetails.colorBorder = _element_EventEditorColorsDialog_ColorBorder.value;
    }

    function eventColorsDialogEvent_Cancel( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );

        _element_EventEditorColorsDialog.style.display = "none";
        _element_EventEditorDialog_DisabledArea.style.display = "none";
    }

    function showEventEditorColorsDialog() {
        _openDialogs.push( eventColorsDialogEvent_Cancel );
        _element_EventEditorColorsDialog.style.display = "block";
        _element_EventEditorDialog_DisabledArea.style.display = "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Repeat Options Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingRepeatOptionsDialog() {
        if ( !_datePickerModeEnabled ) {
            if ( _element_EventEditorRepeatOptionsDialog !== null ) {
                removeNode( _document.body, _element_EventEditorRepeatOptionsDialog );
            }
    
            _element_EventEditorRepeatOptionsDialog = createElement( "div", "calendar-dialog event-editor-repeat-options" );
            _document.body.appendChild( _element_EventEditorRepeatOptionsDialog );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.repeatOptionsTitle );
            _element_EventEditorRepeatOptionsDialog.appendChild( titleBar );
    
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, eventRepeatOptionsDialogEvent_Cancel, true );
    
            var contents = createElement( "div", "contents" );
            _element_EventEditorRepeatOptionsDialog.appendChild( contents );
    
            createTextHeaderElement( contents, _options.daysToExcludeText );
    
            _element_EventEditorRepeatOptionsDialog_Mon = buildCheckBox( contents, _options.dayNames[ 0 ] )[ 0 ];
            _element_EventEditorRepeatOptionsDialog_Tue = buildCheckBox( contents, _options.dayNames[ 1 ] )[ 0 ];
            _element_EventEditorRepeatOptionsDialog_Wed = buildCheckBox( contents, _options.dayNames[ 2 ] )[ 0 ];
            _element_EventEditorRepeatOptionsDialog_Thu = buildCheckBox( contents, _options.dayNames[ 3 ] )[ 0 ];
            _element_EventEditorRepeatOptionsDialog_Fri = buildCheckBox( contents, _options.dayNames[ 4 ] )[ 0 ];
            _element_EventEditorRepeatOptionsDialog_Sat = buildCheckBox( contents, _options.dayNames[ 5 ] )[ 0 ];
            _element_EventEditorRepeatOptionsDialog_Sun = buildCheckBox( contents, _options.dayNames[ 6 ] )[ 0 ];
    
            createTextHeaderElement( contents, _options.repeatEndsText );
    
            _element_EventEditorRepeatOptionsDialog_RepeatEnds = createElement( "input" );
            contents.appendChild( _element_EventEditorRepeatOptionsDialog_RepeatEnds );
    
            setInputType( _element_EventEditorRepeatOptionsDialog_RepeatEnds, "date" );
    
            var buttonsSplitContainer = createElement( "div", "split" );
            contents.appendChild( buttonsSplitContainer );
    
            createButtonElement( buttonsSplitContainer, _options.okText, "ok", eventRepeatOptionsDialogEvent_OK );
            createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", eventRepeatOptionsDialogEvent_Cancel );
        }
    }

    function eventRepeatOptionsDialogEvent_OK() {
        eventRepeatOptionsDialogEvent_Cancel();

        var repeatEveryExcludeDays = [];

        if ( _element_EventEditorRepeatOptionsDialog_Mon.checked ) {
            repeatEveryExcludeDays.push( 1 );
        }

        if ( _element_EventEditorRepeatOptionsDialog_Tue.checked ) {
            repeatEveryExcludeDays.push( 2 );
        }

        if ( _element_EventEditorRepeatOptionsDialog_Wed.checked ) {
            repeatEveryExcludeDays.push( 3 );
        }

        if ( _element_EventEditorRepeatOptionsDialog_Thu.checked ) {
            repeatEveryExcludeDays.push( 4 );
        }

        if ( _element_EventEditorRepeatOptionsDialog_Fri.checked ) {
            repeatEveryExcludeDays.push( 5 );
        }

        if ( _element_EventEditorRepeatOptionsDialog_Sat.checked ) {
            repeatEveryExcludeDays.push( 6 );
        }

        if ( _element_EventEditorRepeatOptionsDialog_Sun.checked ) {
            repeatEveryExcludeDays.push( 0 );
        }

        _element_EventEditorDialog_EventDetails.repeatEveryExcludeDays = repeatEveryExcludeDays;
    }

    function eventRepeatOptionsDialogEvent_Cancel( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );

        _element_EventEditorRepeatOptionsDialog.style.display = "none";
        _element_EventEditorDialog_DisabledArea.style.display = "none";
    }

    function showEventEditorRepeatOptionsDialog() {
        _openDialogs.push( eventRepeatOptionsDialogEvent_Cancel );
        _element_EventEditorRepeatOptionsDialog.style.display = "block";
        _element_EventEditorDialog_DisabledArea.style.display = "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Confirmation Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildConfirmationDialog() {
        if ( !_datePickerModeEnabled ) {
            if ( _element_ConfirmationDialog !== null ) {
                removeNode( _document.body, _element_ConfirmationDialog );
            }
    
            _element_ConfirmationDialog = createElement( "div", "calendar-dialog confirmation" );
            _document.body.appendChild( _element_ConfirmationDialog );
    
            _element_ConfirmationDialog_TitleBar = createElement( "div", "title-bar" );
            _element_ConfirmationDialog.appendChild( _element_ConfirmationDialog_TitleBar );
    
            var contents = createElement( "div", "contents" );
            _element_ConfirmationDialog.appendChild( contents );
    
            _element_ConfirmationDialog_Message = createElement( "div", "message" );
            contents.appendChild( _element_ConfirmationDialog_Message );
    
            var checkbox = buildCheckBox( contents, _options.removeAllEventsInSeriesText );
            _element_ConfirmationDialog_RemoveAllEvents = checkbox[ 0 ];
            _element_ConfirmationDialog_RemoveAllEvents_Label = checkbox[ 1 ];
    
            var buttonsSplitContainer = createElement( "div", "split" );
            contents.appendChild( buttonsSplitContainer );
    
            _element_ConfirmationDialog_YesButton = createElement( "input", "yes", "button" );
            _element_ConfirmationDialog_YesButton.value = _options.yesText;
            buttonsSplitContainer.appendChild( _element_ConfirmationDialog_YesButton );
    
            _element_ConfirmationDialog_NoButton = createElement( "input", "no", "button" );
            _element_ConfirmationDialog_NoButton.value = _options.noText;
            buttonsSplitContainer.appendChild( _element_ConfirmationDialog_NoButton );
        }
    }

    function showConfirmationDialog( title, message, onYesEvent, onNoEvent, showRemoveAllEventsCheckBox ) {
        showRemoveAllEventsCheckBox = isDefined( showRemoveAllEventsCheckBox ) ? showRemoveAllEventsCheckBox : false;

        _openDialogs.push( false );
        _element_ConfirmationDialog.style.display = "block";

        setNodeText( _element_ConfirmationDialog_TitleBar, title );
        setNodeText( _element_ConfirmationDialog_Message, message );

        _element_ConfirmationDialog_YesButton.onclick = hideConfirmationDialog;
        _element_ConfirmationDialog_NoButton.onclick = hideConfirmationDialog;
        _element_ConfirmationDialog_YesButton.addEventListener( "click", onYesEvent );

        if ( showRemoveAllEventsCheckBox ) {
            _element_ConfirmationDialog_RemoveAllEvents_Label.style.display = "block";
            _element_ConfirmationDialog_RemoveAllEvents.checked = false;
        } else {
            _element_ConfirmationDialog_RemoveAllEvents_Label.style.display = "none";
            _element_ConfirmationDialog_RemoveAllEvents.checked = true;
        }

        if ( isDefinedFunction( onNoEvent ) ) {
            _element_ConfirmationDialog_NoButton.addEventListener( "click", onNoEvent );
        }
    }

    function hideConfirmationDialog() {
        _openDialogs.pop();
        _element_ConfirmationDialog.style.display = "none";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Select Export Type Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSelectExportTypeDialog() {
        if ( !_datePickerModeEnabled ) {
            if ( _element_SelectExportTypeDialog !== null ) {
                removeNode( _document.body, _element_SelectExportTypeDialog );
            }
    
            _element_SelectExportTypeDialog = createElement( "div", "calendar-dialog select-export-type" );
            _document.body.appendChild( _element_SelectExportTypeDialog );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.selectExportTypeTitle );
            _element_SelectExportTypeDialog.appendChild( titleBar );
    
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideSelectExportTypeDialog, true );
    
            var contents = createElement( "div", "contents" );
            _element_SelectExportTypeDialog.appendChild( contents );
    
            var radioButtonsSplitContainer = createElement( "div", "split" );
            contents.appendChild( radioButtonsSplitContainer );
    
            var radioButtonsContainer1 = createElement( "div", "radioButtonsContainer split-contents" );
            radioButtonsSplitContainer.appendChild( radioButtonsContainer1 );
    
            var radioButtonsContainer2 = createElement( "div", "radioButtonsContainer split-contents" );
            radioButtonsSplitContainer.appendChild( radioButtonsContainer2 );
    
            _element_SelectExportTypeDialog_Option_CSV = buildRadioButton( radioButtonsContainer1, "CSV", "ExportType" );
            _element_SelectExportTypeDialog_Option_XML = buildRadioButton( radioButtonsContainer1, "XML", "ExportType" );
            _element_SelectExportTypeDialog_Option_JSON = buildRadioButton( radioButtonsContainer1, "JSON", "ExportType" );
            _element_SelectExportTypeDialog_Option_TEXT = buildRadioButton( radioButtonsContainer1, "TEXT", "ExportType" );
    
            _element_SelectExportTypeDialog_Option_iCAL = buildRadioButton( radioButtonsContainer2, "iCAL", "ExportType" );
            _element_SelectExportTypeDialog_Option_MD = buildRadioButton( radioButtonsContainer2, "MD", "ExportType" );
            _element_SelectExportTypeDialog_Option_HTML = buildRadioButton( radioButtonsContainer2, "HTML", "ExportType" );
            _element_SelectExportTypeDialog_Option_TSV = buildRadioButton( radioButtonsContainer2, "TSV", "ExportType" );
    
            var buttonsSplitContainer = createElement( "div", "split" );
            contents.appendChild( buttonsSplitContainer );
    
            createButtonElement( buttonsSplitContainer, _options.okText, "ok", exportEventsFromOptionSelected );
            createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", hideSelectExportTypeDialog );
        }
    }

    function showSelectExportTypeDialog( events ) {
        addNode( _document.body, _element_DisabledBackground );

        _openDialogs.push( hideSelectExportTypeDialog );
        _element_SelectExportTypeDialog.style.display = "block";
        _element_SelectExportTypeDialog_ExportEvents = events;
        _element_SelectExportTypeDialog_Option_CSV.checked = true;
    }

    function hideSelectExportTypeDialog( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        removeNode( _document.body, _element_DisabledBackground );

        _element_SelectExportTypeDialog.style.display = "none";
    }

    function exportEventsFromOptionSelected() {
        hideSelectExportTypeDialog();

        if ( _element_SelectExportTypeDialog_Option_CSV.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "csv" );
        } else if ( _element_SelectExportTypeDialog_Option_XML.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "xml" );
        } else if ( _element_SelectExportTypeDialog_Option_JSON.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "json" );
        } else if ( _element_SelectExportTypeDialog_Option_TEXT.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "text" );
        } else if ( _element_SelectExportTypeDialog_Option_iCAL.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "ical" );
        } else if ( _element_SelectExportTypeDialog_Option_MD.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "md" );
        } else if ( _element_SelectExportTypeDialog_Option_HTML.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "html" );
        } else if ( _element_SelectExportTypeDialog_Option_TSV.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "tsv" );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Search Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSearchDialog() {
        if ( !_datePickerModeEnabled ) {
            if ( _element_SearchDialog !== null ) {
                removeNode( _document.body, _element_SearchDialog );
            }
    
            _element_SearchDialog = createElement( "div", "calendar-dialog search" );
            _document.body.appendChild( _element_SearchDialog );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.searchEventsTitle );
            titleBar.onmousedown = searchOnTitleBarMouseDown;
            titleBar.onmouseup = searchOnTitleBarMouseUp;
            titleBar.oncontextmenu = searchOnTitleBarMouseUp;
            titleBar.ondblclick = minimizeRestoreDialog;
            _element_SearchDialog.appendChild( titleBar );
    
            var closeButton = buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideSearchDialog );
            closeButton.onmousedown = cancelBubble;
            closeButton.onmouseup = cancelBubble;
            
            _element_SearchDialog_MinimizedRestoreButton = buildToolbarButton( titleBar, "ib-minus", _options.minimizedTooltipText, minimizeRestoreDialog );
            _element_SearchDialog_MinimizedRestoreButton.onmousedown = cancelBubble;
            _element_SearchDialog_MinimizedRestoreButton.onmouseup = cancelBubble;

            _element_SearchDialog_Contents = createElement( "div", "contents" );
            _element_SearchDialog.appendChild( _element_SearchDialog_Contents );
    
            _element_SearchDialog_For = createElement( "input", null, "text" );
            _element_SearchDialog_For.placeholder = _options.searchTextBoxPlaceholder;
            _element_SearchDialog_For.oninput = searchForTextChanged;
            _element_SearchDialog_For.onpropertychange = searchForTextChanged;
            _element_SearchDialog_For.onkeypress = searchOnEnter;
            _element_SearchDialog_Contents.appendChild( _element_SearchDialog_For );
            
            var checkboxOptionsContainer = createElement( "div", "checkboxContainer" );
            _element_SearchDialog_Contents.appendChild( checkboxOptionsContainer );
    
            _element_SearchDialog_Not = buildCheckBox( checkboxOptionsContainer, _options.notSearchText, searchOptionsChanged )[ 0 ];
            _element_SearchDialog_MatchCase = buildCheckBox( checkboxOptionsContainer, _options.matchCaseText, searchOptionsChanged )[ 0 ];
            _element_SearchDialog_Advanced = buildCheckBox( checkboxOptionsContainer, _options.advancedText + ":", searchAdvancedChecked )[ 0 ];
            _element_SearchDialog_Advanced.checked = true;
    
            _element_SearchDialog_Advanced_Container = createElement( "div", "advanced" );
            _element_SearchDialog_Contents.appendChild( _element_SearchDialog_Advanced_Container );
    
            var optionsSplitContainer = createElement( "div", "split" );
            _element_SearchDialog_Advanced_Container.appendChild( optionsSplitContainer );
    
            var splitContents1 = createElement( "div", "split-contents" );
            optionsSplitContainer.appendChild( splitContents1 );
    
            var splitContents2 = createElement( "div", "split-contents" );
            optionsSplitContainer.appendChild( splitContents2 );
    
            createTextHeaderElement( splitContents1, _options.includeText );
    
            var checkboxContainer = createElement( "div", "checkboxContainer" );
            splitContents1.appendChild( checkboxContainer );
    
            _element_SearchDialog_Include_Title = buildCheckBox( checkboxContainer, _options.titleText.replace( ":", "" ), searchOptionsChanged )[ 0 ];
            _element_SearchDialog_Include_Location = buildCheckBox( checkboxContainer, _options.locationText.replace( ":", "" ), searchOptionsChanged )[ 0 ];
            _element_SearchDialog_Include_Description = buildCheckBox( checkboxContainer, _options.descriptionText.replace( ":", "" ), searchOptionsChanged )[ 0 ];
            _element_SearchDialog_Include_Group = buildCheckBox( checkboxContainer, _options.groupText.replace( ":", "" ), searchOptionsChanged )[ 0 ];
            _element_SearchDialog_Include_Url = buildCheckBox( checkboxContainer, _options.urlText.replace( ":", "" ), searchOptionsChanged )[ 0 ];
    
            _element_SearchDialog_Include_Title.checked = true;
    
            createTextHeaderElement( splitContents2, _options.optionsText );
    
            var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
            splitContents2.appendChild( radioButtonsContainer );
    
            _element_SearchDialog_Option_StartsWith = buildRadioButton( radioButtonsContainer, _options.startsWithText, "SearchOptionType", searchOptionsChanged );
            _element_SearchDialog_Option_EndsWith = buildRadioButton( radioButtonsContainer, _options.endsWithText, "SearchOptionType", searchOptionsChanged );
            _element_SearchDialog_Option_Contains = buildRadioButton( radioButtonsContainer, _options.containsText, "SearchOptionType", searchOptionsChanged );
    
            _element_SearchDialog_Option_Contains.checked = true;
    
            var buttonsSplitContainer = createElement( "div", "split last-split" );
            _element_SearchDialog_Contents.appendChild( buttonsSplitContainer );
    
            _element_SearchDialog_Previous = createButtonElement( buttonsSplitContainer, _options.previousText, "previous", searchOnPrevious );
            _element_SearchDialog_Next = createButtonElement( buttonsSplitContainer, _options.nextText, "next", searchOnNext );
    
            _document.body.addEventListener( "mousemove", searchOnDocumentMouseMove );
        }
    }

    function searchAdvancedChecked() {
        if ( _element_SearchDialog_Advanced.checked ) {
            _element_SearchDialog_Advanced_Container.style.display = "block";
        } else {
            _element_SearchDialog_Advanced_Container.style.display = "none";
        }
        
        centerSearchDialog();
        storeSearchOptions();
    }

    function searchOnTitleBarMouseDown( e ) {
        if ( !_element_SearchDialog_IsMoving ) {
            _element_SearchDialog_IsMoving = true;
            _element_SearchDialog_X = e.pageX - _element_SearchDialog.offsetLeft;
            _element_SearchDialog_Y = e.pageY - _element_SearchDialog.offsetTop;
        }
    }

    function searchOnDocumentMouseMove( e ) {
        if ( _element_SearchDialog_IsMoving ) {
            _element_SearchDialog.style.left = ( e.pageX - _element_SearchDialog_X ) + "px";
            _element_SearchDialog.style.top = ( e.pageY - _element_SearchDialog_Y ) + "px";
        }
    }

    function searchOnTitleBarMouseUp() {
        if ( _element_SearchDialog_IsMoving ) {
            _element_SearchDialog_IsMoving = false;
            _element_SearchDialog_Moved = true;

            storeSearchOptions();
        }
    }

    function searchOptionsChanged() {
        storeSearchOptions();
        searchForTextChanged();
    }

    function searchForTextChanged() {
        if ( _element_SearchDialog_SearchResults.length > 0 ) {
            removeElementsClassName( _element_Calendar, " focused-event" );
        }

        _element_SearchDialog_Previous.disabled = true;
        _element_SearchDialog_Next.disabled = _element_SearchDialog_For.value === "";
        _element_SearchDialog_SearchResults = [];
        _element_SearchDialog_SearchIndex = 0;
        _element_SearchDialog_FocusedEventID = null;

        storeSearchOptions();
    }

    function showSearchDialog() {
        if ( _element_SearchDialog.style.display !== "block" ) {
            _element_SearchDialog_SearchResults = [];
            _element_SearchDialog.style.display = "block";
    
            searchForTextChanged();
            setupSearchOptions();
            centerSearchDialog();
        }

        if ( !isSearchDialogContentVisible() ) {
            minimizeRestoreDialog();
        }

        _element_SearchDialog_For.focus();
        _element_SearchDialog_For.select();
    }

    function centerSearchDialog() {
        if ( !_element_SearchDialog_Moved && !_datePickerModeEnabled ) {

            if ( isDefinedNumber( _optionsForSearch.left ) ) {
                _element_SearchDialog.style.left = _optionsForSearch.left + "px";
            } else {
                _element_SearchDialog.style.left = ( _window.innerWidth / 2 - _element_SearchDialog.offsetWidth / 2 ) + "px";
            }
    
            if ( isDefinedNumber( _optionsForSearch.top ) ) {
                _element_SearchDialog.style.top = _optionsForSearch.top + "px";
            } else {
                _element_SearchDialog.style.top = ( _window.innerHeight / 2 - _element_SearchDialog.offsetHeight / 2 ) + "px";
            }
        }
    }

    function hideSearchDialog() {
        if ( _element_SearchDialog.style.display === "block" ) {
            _element_SearchDialog.style.display = "none";
            searchForTextChanged();
        }
    }

    function minimizeRestoreDialog() {
        if ( isSearchDialogContentVisible() ) {
            _element_SearchDialog_Contents.style.display = "none";
            _element_SearchDialog_MinimizedRestoreButton.className = "ib-square-hollow";
            addToolTip( _element_SearchDialog_MinimizedRestoreButton, _options.restoreTooltipText );
        } else {
            _element_SearchDialog_Contents.style.display = "block";
            _element_SearchDialog_MinimizedRestoreButton.className = "ib-minus";
            addToolTip( _element_SearchDialog_MinimizedRestoreButton, _options.minimizedTooltipText );
        }
    }

    function isSearchDialogContentVisible() {
        return _element_SearchDialog_Contents.style.display === "block";
    }

    function searchOnPrevious() {
        if ( _element_SearchDialog_SearchIndex > 0 ) {
            _element_SearchDialog_SearchIndex--;

            var eventDetails = _element_SearchDialog_SearchResults[ _element_SearchDialog_SearchIndex ];

            updateSearchButtons();
            build( eventDetails.from );
            updatedFocusedElementAfterSearch( eventDetails );
        }
    }

    function searchOnEnter( e ) {
        if ( e.keyCode === _keyCodes.enter && isControlKey( e ) && !_element_SearchDialog_Previous.disabled ) {
            searchOnPrevious();
        } else if ( e.keyCode === _keyCodes.enter && !_element_SearchDialog_Next.disabled ) {
            searchOnNext();
        }
    }

    function searchOnNext() {
        if ( _element_SearchDialog_SearchResults.length === 0 ) {
            var startingID = _elementID_Day,
                not = _element_SearchDialog_Not.checked,
                matchCase = _element_SearchDialog_MatchCase.checked,
                search = !matchCase ? _element_SearchDialog_For.value.toLowerCase() : _element_SearchDialog_For.value,
                monthYearsFound = {},
                orderedEvents = getOrderedEvents( getAllEvents() ),
                orderedEventsLength = orderedEvents.length,
                isFullDayViewVisible = isOverlayVisible( _element_FullDayView ),
                isAllEventsViewVisible = isOverlayVisible( _element_ListAllEventsView ),
                isAllWeekEventsViewVisible = isOverlayVisible( _element_ListAllWeekEventsView );
            
            if ( isFullDayViewVisible ) {
                startingID = _elementID_FullDay;
            } else if ( isAllEventsViewVisible ) {
                startingID = _elementID_Month;
            } else if ( isAllWeekEventsViewVisible ) {
                startingID = _elementID_WeekDay;
            }

            for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
                var event = orderedEvents[ orderedEventIndex ];

                if ( isEventVisible( event ) ) {
                    var title = getString( event.title ),
                        location = getString( event.location ),
                        description = getString( event.description ),
                        group = getString( event.group ),
                        url = getString( event.url ),
                        found = false;

                    if ( !matchCase ) {
                        title = title.toLowerCase();
                        description = description.toLowerCase();
                        location = location.toLowerCase();
                        group = group.toLowerCase();
                        url = url.toLowerCase();
                    }

                    if ( _element_SearchDialog_Include_Title.checked && isSearchTextAvailable( title, search ) ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Location.checked && isSearchTextAvailable( location, search ) ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Description.checked && isSearchTextAvailable( description, search ) ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Group.checked && isSearchTextAvailable( group, search ) ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Url.checked && isSearchTextAvailable( url, search ) ) {
                        found = true;
                    }

                    if ( not ) {
                        found = !found;
                    }

                    if ( found ) {
                        var eventElement = getElementByID( startingID + event.id );
                        if ( eventElement !== null ) {

                            if ( isFullDayViewVisible || isAllEventsViewVisible || isAllWeekEventsViewVisible ) {
                                _element_SearchDialog_SearchResults.push( event );
                            } else {
                                
                                var monthYear = event.from.getMonth() + "-" + event.from.getFullYear();
        
                                if ( !monthYearsFound.hasOwnProperty( monthYear ) ) {
                                    _element_SearchDialog_SearchResults.push( event );
                                    monthYearsFound[ monthYear ] = true;
                                }
                            }
                        }
                    }
                }
            }

        } else {
            _element_SearchDialog_SearchIndex++;
        }

        updateSearchButtons();

        if ( _element_SearchDialog_SearchResults.length > 0 ) {
            var eventDetails = _element_SearchDialog_SearchResults[ _element_SearchDialog_SearchIndex ],
                dateFrom = new Date( eventDetails.from );

            build( dateFrom );
            updatedFocusedElementAfterSearch( eventDetails );
        }
    }

    function updatedFocusedElementAfterSearch( eventDetails ) {
        var startingID = _elementID_Day,
            isFullDayViewVisible = isOverlayVisible( _element_FullDayView ),
            isAllEventsViewVisible = isOverlayVisible( _element_ListAllEventsView ),
            isAllWeekEventsViewVisible = isOverlayVisible( _element_ListAllWeekEventsView );
        
        removeElementsClassName( _element_Calendar, " focused-event" );

        if ( isFullDayViewVisible ) {
            startingID = _elementID_FullDay;
        } else if ( isAllEventsViewVisible ) {
            startingID = _elementID_Month;
        } else if ( isAllWeekEventsViewVisible ) {
            startingID = _elementID_WeekDay;
        }

        var event = getElementByID( startingID + eventDetails.id );
        if ( event !== null ) {
            event.className += " focused-event";
            _element_SearchDialog_FocusedEventID = eventDetails.id;

            if ( isFullDayViewVisible || isAllEventsViewVisible || isAllWeekEventsViewVisible ) {
                event.scrollIntoView();
            }
        }
    }

    function updateSearchButtons() {
        _element_SearchDialog_Previous.disabled = _element_SearchDialog_SearchIndex === 0;
        _element_SearchDialog_Next.disabled = _element_SearchDialog_SearchIndex === _element_SearchDialog_SearchResults.length - 1 || _element_SearchDialog_SearchResults.length === 0;
    }

    function isSearchTextAvailable( data, searchText ) {
        var found = false;
        
        if ( _element_SearchDialog_Option_StartsWith.checked ) {
            found = startsWith( data, searchText );
        } else if ( _element_SearchDialog_Option_EndsWith.checked ) {
            found = endsWith( data, searchText );
        } else {
            found = data.indexOf( searchText ) > -1;
        }

        return found;
    }

    function storeSearchOptions() {
        if ( _timer_CallSearchOptionsEvent !== null ) {
            clearTimeout( _timer_CallSearchOptionsEvent );
        }

        _timer_CallSearchOptionsEvent = setTimeout( function() {
            _optionsForSearch.lastSearchText = _element_SearchDialog_For.value;
            _optionsForSearch.not = _element_SearchDialog_Not.checked;
            _optionsForSearch.matchCase = _element_SearchDialog_MatchCase.checked;
            _optionsForSearch.showAdvanced = _element_SearchDialog_Advanced.checked;
            _optionsForSearch.searchTitle = _element_SearchDialog_Include_Title.checked;
            _optionsForSearch.searchLocation = _element_SearchDialog_Include_Location.checked;
            _optionsForSearch.searchDescription = _element_SearchDialog_Include_Description.checked;
            _optionsForSearch.searchGroup = _element_SearchDialog_Include_Group.checked;
            _optionsForSearch.searchUrl = _element_SearchDialog_Include_Url.checked;
            _optionsForSearch.startsWith = _element_SearchDialog_Option_StartsWith.checked;
            _optionsForSearch.endsWith = _element_SearchDialog_Option_EndsWith.checked;
            _optionsForSearch.contains = _element_SearchDialog_Option_Contains.checked;

            if ( _element_SearchDialog_Moved ) {
                _optionsForSearch.left = _element_SearchDialog.offsetLeft;
                _optionsForSearch.top = _element_SearchDialog.offsetTop;
            }

            triggerOptionsEventWithData( "onSearchOptionsUpdated", _optionsForSearch );
        }, 2000 );
    }

    function setupSearchOptions() {
        _element_SearchDialog_For.value = _optionsForSearch.lastSearchText;
        _element_SearchDialog_Not.checked = _optionsForSearch.not;
        _element_SearchDialog_MatchCase.checked = _optionsForSearch.matchCase;
        _element_SearchDialog_Advanced.checked = _optionsForSearch.showAdvanced;
        _element_SearchDialog_Include_Title.checked = _optionsForSearch.searchTitle;
        _element_SearchDialog_Include_Location.checked = _optionsForSearch.searchLocation;
        _element_SearchDialog_Include_Description.checked = _optionsForSearch.searchDescription;
        _element_SearchDialog_Include_Group.checked = _optionsForSearch.searchGroup;
        _element_SearchDialog_Include_Url.checked = _optionsForSearch.searchUrl;
        _element_SearchDialog_Option_StartsWith.checked = _optionsForSearch.startsWith;
        _element_SearchDialog_Option_EndsWith.checked = _optionsForSearch.endsWith;
        _element_SearchDialog_Option_Contains.checked = _optionsForSearch.contains;

        if ( _element_SearchDialog_Advanced.checked ) {
            _element_SearchDialog_Advanced_Container.style.display = "block";
        } else {
            _element_SearchDialog_Advanced_Container.style.display = "none";
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Configuration Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildConfigurationDialog() {
        if ( !_datePickerModeEnabled ) {
            if ( _element_ConfigurationDialog !== null ) {
                removeNode( _document.body, _element_ConfigurationDialog );
            }
    
            _element_ConfigurationDialog = createElement( "div", "calendar-dialog configuration" );
            _document.body.appendChild( _element_ConfigurationDialog );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.configurationTitleText );
            _element_ConfigurationDialog.appendChild( titleBar );
    
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, configurationDialogEvent_Cancel, true );
    
            var contents = createElement( "div", "contents" );
            _element_ConfigurationDialog.appendChild( contents );
    
            var tabsContainer = buildTabContainer( contents );
    
            buildTab( tabsContainer, _options.groupsTabText, function( tab ) {
                showTabContents( tab, _element_ConfigurationDialog_Groups, _element_ConfigurationDialog );
            }, true );
    
            buildTab( tabsContainer, _options.displayTabText, function( tab ) {
                showTabContents( tab, _element_ConfigurationDialog_Display, _element_ConfigurationDialog );
            } );
    
            buildTab( tabsContainer, _options.organizerTabText, function( tab ) {
                showTabContents( tab, _element_ConfigurationDialog_Organizer, _element_ConfigurationDialog );
            } );
    
            buildTab( tabsContainer, _options.visibleDaysTabText, function( tab ) {
                showTabContents( tab, _element_ConfigurationDialog_VisibleDays, _element_ConfigurationDialog );
            } );
    
            _element_ConfigurationDialog_Groups = buildTabContents( contents, true );
            _element_ConfigurationDialog_Display = buildTabContents( contents, false, false );
            _element_ConfigurationDialog_Organizer = buildTabContents( contents, false, false );
            _element_ConfigurationDialog_VisibleDays = buildTabContents( contents, false, false );
    
            _element_ConfigurationDialog_Display_EnableAutoRefresh = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableAutoRefreshForEventsText )[ 0 ];
            _element_ConfigurationDialog_Display_EnableBrowserNotifications = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in" )[ 0 ];
            _element_ConfigurationDialog_Display_EnableTooltips = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableTooltipsText, null, null, null, "checkbox-tabbed-down" )[ 0 ];
            _element_ConfigurationDialog_Display_EnableDragAndDropForEvents = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableDragAndDropForEventText )[ 0 ];
            _element_ConfigurationDialog_Display_EnableDayNamesInMainDisplay = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableDayNameHeadersInMainDisplayText )[ 0 ];
            _element_ConfigurationDialog_Display_ShowEmptyDaysInWeekView = buildCheckBox( _element_ConfigurationDialog_Display, _options.showEmptyDaysInWeekViewText )[ 0 ];
            _element_ConfigurationDialog_Display_ShowHolidaysInTheDisplays = buildCheckBox( _element_ConfigurationDialog_Display, _options.showHolidaysInTheDisplaysText )[ 0 ];
    
            createTextHeaderElement( _element_ConfigurationDialog_Organizer, _options.organizerNameText );
    
            _element_ConfigurationDialog_Organizer_Name = createElement( "input", null, "text" );
            _element_ConfigurationDialog_Organizer.appendChild( _element_ConfigurationDialog_Organizer_Name );
    
            createTextHeaderElement( _element_ConfigurationDialog_Organizer, _options.organizerEmailAddressText );
    
            _element_ConfigurationDialog_Organizer_Email = createElement( "input", null, "email" );
            _element_ConfigurationDialog_Organizer.appendChild( _element_ConfigurationDialog_Organizer_Email );
    
            var buttonsSplitContainer = createElement( "div", "split" );
            contents.appendChild( buttonsSplitContainer );
    
            createButtonElement( buttonsSplitContainer, _options.okText, "ok", configurationDialogEvent_OK );
            createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", configurationDialogEvent_Cancel );
    
            _element_ConfigurationDialog_VisibleDays_Mon = buildCheckBox( _element_ConfigurationDialog_VisibleDays, _options.dayNames[ 0 ] )[ 0 ];
            _element_ConfigurationDialog_VisibleDays_Tue = buildCheckBox( _element_ConfigurationDialog_VisibleDays, _options.dayNames[ 1 ] )[ 0 ];
            _element_ConfigurationDialog_VisibleDays_Wed = buildCheckBox( _element_ConfigurationDialog_VisibleDays, _options.dayNames[ 2 ] )[ 0 ];
            _element_ConfigurationDialog_VisibleDays_Thu = buildCheckBox( _element_ConfigurationDialog_VisibleDays, _options.dayNames[ 3 ] )[ 0 ];
            _element_ConfigurationDialog_VisibleDays_Fri = buildCheckBox( _element_ConfigurationDialog_VisibleDays, _options.dayNames[ 4 ] )[ 0 ];
            _element_ConfigurationDialog_VisibleDays_Sat = buildCheckBox( _element_ConfigurationDialog_VisibleDays, _options.dayNames[ 5 ] )[ 0 ];
            _element_ConfigurationDialog_VisibleDays_Sun = buildCheckBox( _element_ConfigurationDialog_VisibleDays, _options.dayNames[ 6 ] )[ 0 ];
        }
    }

    function buildConfigurationGroupOptions() {
        _element_ConfigurationDialog_Groups.innerHTML = "";

        var groups = getGroups(),
            groupsLength = groups.length;

        for ( var groupIndex = 0; groupIndex < groupsLength; groupIndex++ ) {
            var groupName = groups[ groupIndex ],
                configGroupName = getGroupName( groupName ),
                visible = true;
            
            if ( isDefined( _configuration.visibleGroups ) ) {
                visible = _configuration.visibleGroups.indexOf( configGroupName ) > -1;
            }

            buildCheckBox( _element_ConfigurationDialog_Groups, groupName, null, configGroupName, visible );
        }
    }

    function configurationDialogEvent_OK() {
        var checkboxes = _element_ConfigurationDialog_Groups.getElementsByTagName( "input" ),
            checkboxesLength = checkboxes.length,
            visibleDays = [];
        
        if ( checkboxesLength > 0 ) {
            _configuration.visibleGroups = [];
        
            for ( var checkboxIndex = 0; checkboxIndex < checkboxesLength; checkboxIndex++ ) {
                var checkbox = checkboxes[ checkboxIndex ];
                if ( checkbox.checked ) {
                    _configuration.visibleGroups.push( checkbox.name );
                }
            }

        } else {
            _configuration.visibleGroups = null;
        }

        if ( _element_ConfigurationDialog_Display_EnableAutoRefresh.checked ) {
            _this.startTheAutoRefreshTimer();
        } else {
            _this.stopTheAutoRefreshTimer();
        }

        if ( _element_ConfigurationDialog_VisibleDays_Mon.checked ) {
            visibleDays.push( 0 );
        }
    
        if ( _element_ConfigurationDialog_VisibleDays_Tue.checked ) {
            visibleDays.push( 1 );
        }
    
        if ( _element_ConfigurationDialog_VisibleDays_Wed.checked ) {
            visibleDays.push( 2 );
        }
    
        if ( _element_ConfigurationDialog_VisibleDays_Thu.checked ) {
            visibleDays.push( 3 );
        }
    
        if ( _element_ConfigurationDialog_VisibleDays_Fri.checked ) {
            visibleDays.push( 4 );
        }
    
        if ( _element_ConfigurationDialog_VisibleDays_Sat.checked ) {
            visibleDays.push( 5 );
        }
    
        if ( _element_ConfigurationDialog_VisibleDays_Sun.checked ) {
            visibleDays.push( 6 );
        }

        _options.eventNotificationsEnabled = _element_ConfigurationDialog_Display_EnableBrowserNotifications.checked;
        _options.tooltipsEnabled = _element_ConfigurationDialog_Display_EnableTooltips.checked;
        _options.dragAndDropForEventsEnabled = _element_ConfigurationDialog_Display_EnableDragAndDropForEvents.checked;
        _options.showDayNamesInMainDisplay = _element_ConfigurationDialog_Display_EnableDayNamesInMainDisplay.checked;
        _options.showEmptyDaysInWeekView = _element_ConfigurationDialog_Display_ShowEmptyDaysInWeekView.checked;
        _options.showHolidays = _element_ConfigurationDialog_Display_ShowHolidaysInTheDisplays.checked;
        _options.organizerName = _element_ConfigurationDialog_Organizer_Name.value;
        _options.organizerEmailAddress = _element_ConfigurationDialog_Organizer_Email.value;

        if ( visibleDays.length > 0 ) {
            _options.visibleDays = visibleDays;
        }

        _initialized = false;

        triggerOptionsEventWithData( "onOptionsUpdated", _options );
        checkForBrowserNotificationsPermission();
        hideConfigurationDialog();
        build( _currentDate, true );
    }

    function configurationDialogEvent_Cancel() {
        hideConfigurationDialog();
    }

    function showConfigurationDialog() {
        addNode( _document.body, _element_DisabledBackground );
        buildConfigurationGroupOptions();

        _element_ConfigurationDialog_Display_EnableAutoRefresh.checked = _timer_RefreshMainDisplay !== null;
        _element_ConfigurationDialog_Display_EnableBrowserNotifications.checked = _options.eventNotificationsEnabled;
        _element_ConfigurationDialog_Display_EnableTooltips.checked = _options.tooltipsEnabled;
        _element_ConfigurationDialog_Display_EnableDragAndDropForEvents.checked = _options.dragAndDropForEventsEnabled;
        _element_ConfigurationDialog_Display_EnableDayNamesInMainDisplay.checked = _options.showDayNamesInMainDisplay;
        _element_ConfigurationDialog_Display_ShowEmptyDaysInWeekView.checked = _options.showEmptyDaysInWeekView;
        _element_ConfigurationDialog_Display_ShowHolidaysInTheDisplays.checked = _options.showHolidays;
        _element_ConfigurationDialog_Organizer_Name.value = _options.organizerName;
        _element_ConfigurationDialog_Organizer_Email.value = _options.organizerEmailAddress;
        _element_ConfigurationDialog_VisibleDays_Mon.checked = _options.visibleDays.indexOf( 0 ) > -1;
        _element_ConfigurationDialog_VisibleDays_Tue.checked = _options.visibleDays.indexOf( 1 ) > -1;
        _element_ConfigurationDialog_VisibleDays_Wed.checked = _options.visibleDays.indexOf( 2 ) > -1;
        _element_ConfigurationDialog_VisibleDays_Thu.checked = _options.visibleDays.indexOf( 3 ) > -1;
        _element_ConfigurationDialog_VisibleDays_Fri.checked = _options.visibleDays.indexOf( 4 ) > -1;
        _element_ConfigurationDialog_VisibleDays_Sat.checked = _options.visibleDays.indexOf( 5 ) > -1;
        _element_ConfigurationDialog_VisibleDays_Sun.checked = _options.visibleDays.indexOf( 6 ) > -1;

        _openDialogs.push( hideConfigurationDialog );
        _element_ConfigurationDialog.style.display = "block";
    }

    function hideConfigurationDialog( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        removeNode( _document.body, _element_DisabledBackground );

        _element_ConfigurationDialog.style.display = "none";
    }

    function getGroupName( group ) {
        return group.toLowerCase();
    }

    function isEventVisible( event ) {
        var group = getString( event.group ),
            configGroup = getGroupName( group ),
            visible = true;
        
        if ( group !== "" ) {
            if ( isDefined( _configuration.visibleGroups ) ) {
                visible = _configuration.visibleGroups.indexOf( configGroup ) > -1;
            }
        } else {
            visible = !_options.hideEventsWithoutGroupAssigned;
        }

        return visible;
    }

    function getGroups() {
        var groups = [],
            groupsAnyCase = [];

        getAllEventsFunc( function( event ) {
            var group = getString( event.group );
            if ( group !== "" && groupsAnyCase.indexOf( group.toLowerCase() ) === -1 ) {
                groups.push( group );
                groupsAnyCase.push( group.toLowerCase() );
            }
        } );

        groups.sort();

        return groups;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Tooltip
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildTooltip() {
        if ( _element_Tooltip === null ) {
            _element_Tooltip = createElement( "div" );
            _document.body.appendChild( _element_Tooltip );

            _element_Tooltip_TitleButtons_CloseButton = createElement( "div", "ib-close" );
            _element_Tooltip_TitleButtons_EditButton = createElement( "div", "ib-plus" );

            _element_Tooltip_TitleButtons = createElement( "div", "title-buttons" );
            _element_Tooltip_TitleButtons.appendChild( _element_Tooltip_TitleButtons_CloseButton );
            _element_Tooltip_TitleButtons.appendChild( _element_Tooltip_TitleButtons_EditButton );

            _element_Tooltip_Title = createElement( "div", "title" );
            _element_Tooltip_Date = createElement( "div", "date" );
            _element_Tooltip_TotalTime = createElement( "div", "duration" );
            _element_Tooltip_Repeats = createElement( "div", "repeats" );
            _element_Tooltip_Description = createElement( "div", "description" );
            _element_Tooltip_Location = createElement( "div", "location" );
            _element_Tooltip_Url = createElement( "div", "url" );

            _element_Tooltip_TitleButtons_CloseButton.onclick = hideTooltip;
            _element_Tooltip_TitleButtons_EditButton.onclick = function() {
                showEventEditingDialog( _element_Tooltip_EventDetails );
            };

            document.body.addEventListener( "mousemove", hideTooltip );
        }
    }

    function showTooltip( e, eventDetails, text, overrideShow ) {
        cancelBubble( e );
        clearTooltipTimer();
        hideTooltip();

        overrideShow = isDefined( overrideShow ) ? overrideShow : false;

        if ( _element_Tooltip.style.display !== "block" && _options.tooltipsEnabled ) {
            _element_Tooltip_ShowTimer = setTimeout( function() {
                if ( overrideShow || ( !isDisabledBackgroundDisplayed() && !isYearSelectorDropDownVisible() && !areDropDownMenusVisible() && _eventDetails_Dragged === null ) ) {
                    text = isDefined( text ) ? text : "";

                    _element_Tooltip.className = text === "" ? "calendar-tooltip-event" : "calendar-tooltip";

                    if ( text !== "" ) {
                        setNodeText( _element_Tooltip, text );
                    } else {

                        _element_Tooltip.onmousemove = cancelBubble;
                        _element_Tooltip_EventDetails = eventDetails;
                        _element_Tooltip.innerHTML = "";
                        _element_Tooltip_Title.innerHTML = "";
                        _element_Tooltip_TotalTime.innerHTML = "";
                        _element_Tooltip.appendChild( _element_Tooltip_TitleButtons );
                        _element_Tooltip.appendChild( _element_Tooltip_Title );
                        _element_Tooltip.appendChild( _element_Tooltip_Date );
                        _element_Tooltip.appendChild( _element_Tooltip_TotalTime );

                        updateToolbarButtonVisibleState( _element_Tooltip_TitleButtons_EditButton, _options.manualEditingEnabled );

                        if ( isDefinedStringAndSet( eventDetails.url ) ) {
                            setNodeText( _element_Tooltip_Url, getShortUrlString( eventDetails.url ) );
                            addNode( _element_Tooltip, _element_Tooltip_Url );

                            _element_Tooltip_Url.onclick = function( e ) {
                                cancelBubble( e );
                                openEventUrl( eventDetails.url );
                                hideTooltip();
                            };

                        } else {
                            _element_Tooltip_Url.innerHTML = "";
                            _element_Tooltip_Url.onclick = null;
                            removeNode( _element_Tooltip, _element_Tooltip_Url );
                        }

                        var repeatEvery = getNumber( eventDetails.repeatEvery );
                        if ( repeatEvery > _repeatType.never ) {
                            var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                            icon.style.borderColor = _element_Tooltip_Title.style.color;
                            _element_Tooltip_Title.appendChild( icon );
                        }
                        
                        _element_Tooltip_Title.innerHTML += stripHTMLTagsFromText( eventDetails.title );

                        if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _repeatType.never ) {
                            setNodeText( _element_Tooltip_Repeats, _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery ) );
                            addNode( _element_Tooltip, _element_Tooltip_Repeats );
                        } else {
                            _element_Tooltip_Repeats.innerHTML = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Repeats );
                        }

                        if ( isDefinedStringAndSet( eventDetails.location ) ) {
                            setNodeText( _element_Tooltip_Location, eventDetails.location );
                            addNode( _element_Tooltip, _element_Tooltip_Location );
                        } else {
                            _element_Tooltip_Location.innerHTML = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Location );
                        }
    
                        if ( isDefinedStringAndSet( eventDetails.description ) ) {
                            setNodeText( _element_Tooltip_Description, eventDetails.description );
                            addNode( _element_Tooltip, _element_Tooltip_Description );
                        } else {
                            _element_Tooltip_Description.innerHTML = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Description );
                        }
        
                        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                            if ( eventDetails.isAllDay ) {
                                setNodeText( _element_Tooltip_Date, _options.allDayText );
                            } else {
                                setNodeText( _element_Tooltip_Date, getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) );
                                setNodeText( _element_Tooltip_TotalTime, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
                            }
                        } else {

                            buildDateTimeToDateTimeDisplay( _element_Tooltip_Date, eventDetails.from, eventDetails.to );
                            setNodeText( _element_Tooltip_TotalTime, getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to ) );
                        }
                    }

                    showElementAtMousePosition( e, _element_Tooltip );
                }

            }, _options.eventTooltipDelay );
        }
    }

    function hideTooltip() {
        clearTooltipTimer();

        if ( isTooltipVisible() ) {
            _element_Tooltip.style.display = "none";
            _element_Tooltip_EventDetails = null;
            _element_Tooltip.onmousemove = null;
        }
    }

    function clearTooltipTimer() {
        if ( _element_Tooltip_ShowTimer !== null ) {
            clearTimeout( _element_Tooltip_ShowTimer );
            _element_Tooltip_ShowTimer = null;
        }
    }

    function isTooltipVisible() {
        return _element_Tooltip_ShowTimer !== null || ( _element_Tooltip !== null && _element_Tooltip.style.display === "block" );
    }

    function addToolTip( element, text, overrideShow ) {
        if ( element !== null ) {
            element.onmousemove = function( e ) {
                showTooltip( e, null, text, overrideShow );
            };
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Tabs
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildTabContainer( container ) {
        var tabsContainer = createElement( "div" );
        container.appendChild( tabsContainer );

        return tabsContainer;
    }

    function buildTab( container, text, onClickEvent, selected ) {
        selected = isDefined( selected ) ? selected : false;

        var className = "tab tab-control" + ( selected ? "-selected" : "" ),
            tab = createElement( "div", className );

        setNodeText( tab, text );
        container.appendChild( tab );

        tab.onclick = function () {
            onClickEvent( tab );
        };
    }

    function buildTabContents( container, selected, canScroll ) {
        selected = isDefined( selected ) ? selected : false;
        canScroll = isDefined( canScroll ) ? canScroll : true;

        var tabContainer = createElement( "div", "checkboxContainer tab-content" );
        container.appendChild( tabContainer );

        if ( canScroll ) {
            tabContainer.className += " custom-scroll-bars";
        }

        if ( !selected ) {
            tabContainer.style.display = "none";
        }

        return tabContainer;
    }

    function showTabContents( tab, contents, container ) {
        var tabs = container.getElementsByClassName( "tab-control-selected" ),
            tabsLength = tabs.length,
            allContents = container.getElementsByClassName( "tab-content" ),
            allContentsLength = allContents.length;
    
        for ( var tabIndex = 0; tabIndex < tabsLength; tabIndex++ ) {
            tabs[ tabIndex ].className = "tab tab-control";
        }
    
        for ( var allContentsIndex = 0; allContentsIndex < allContentsLength; allContentsIndex++ ) {
            allContents[ allContentsIndex ].style.display = "none";
        }
    
        tab.className = "tab tab-control-selected";
        contents.style.display = "block";
    }

    function selectTab( container, tabIndex ) {
        tabIndex = isDefined( tabIndex ) ? tabIndex : 0;

        var tabs = container.getElementsByClassName( "tab" ),
            tabsLength = tabs.length;
        
        if ( tabsLength > 0 ) {
            tabs[ tabIndex ].click();
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Browser Notifications
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function checkEventForBrowserNotifications( date, event ) {
        runBrowserNotificationAction( function() {
            if ( isDateToday( date ) && !_eventNotificationsTriggered.hasOwnProperty( event.id ) ) {
                if ( !isDefinedBoolean( event.showAlerts ) || event.showAlerts ) {
                    var newFrom = new Date(),
                        newTo = new Date(),
                        today = new Date(),
                        repeatEvery = getNumber( event.repeatEvery );
        
                    newFrom.setHours( event.from.getHours(), event.from.getMinutes(), 0, 0 );
                    newTo.setHours( event.to.getHours(), event.to.getMinutes(), 0, 0 );
        
                    if ( repeatEvery === _repeatType.never && !isDateToday( event.from ) ) {
                        newFrom.setHours( 0, 0, 0, 0 );
                    }
        
                    if ( repeatEvery === _repeatType.never && !isDateToday( event.to ) ) {
                        newTo.setHours( 23, 59, 59, 99 );
                    }
                    
                    if ( today >= newFrom && today <= newTo ) {
                        launchBrowserNotificationForEvent( event );
                    }
                }
            }
        }, false );
    }

    function launchBrowserNotificationForEvent( event ) {
        _eventNotificationsTriggered[ event.id ] = true;
    
        var notification = new Notification( _options.eventNotificationTitle, {
            body: _options.eventNotificationBody.replace( "{0}", event.title ),
        });

        notification.onclick = function() {
            var url = getString( event.url );

            if ( url === "" ) {
                showEventEditingDialog( event );
            } else {
                openEventUrl( url );
            }

            triggerOptionsEventWithData( "onNotificationClicked", event );
        };
    }

    function checkForBrowserNotificationsPermission() {
        runBrowserNotificationAction( function() {
            if ( Notification.permission !== "granted" ) {
                Notification.requestPermission();
            }
        } );
    }

    function runBrowserNotificationAction( action, writeConsoleLog ) {
        if ( _options.eventNotificationsEnabled && !_datePickerModeEnabled ) {
            writeConsoleLog = isDefined( writeConsoleLog ) ? writeConsoleLog : true;

            if ( !Notification ) {
                if ( writeConsoleLog ) {
                    console.error( "Browser notifications API unavailable." );
                }
            } else {
                action();
            }
        }
    }

    function openEventUrl( url ) {
        _window.open( url, _options.urlWindowTarget );

        triggerOptionsEvent( "onEventUrlClicked", url );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Auto-Refresh Timer
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function startAutoRefreshTimer() {
        if ( _timer_RefreshMainDisplay === null && _options.autoRefreshTimerDelay > 0 && !_datePickerModeEnabled && _timer_RefreshMainDisplay_Enabled ) {
            _timer_RefreshMainDisplay = setInterval( function() {
                refreshViews();
            }, _options.autoRefreshTimerDelay );
        }
    }

    function clearAutoRefreshTimer() {
        if ( _timer_RefreshMainDisplay !== null && _options.autoRefreshTimerDelay > 0 && !_datePickerModeEnabled && _timer_RefreshMainDisplay_Enabled ) {
            clearTimeout( _timer_RefreshMainDisplay );
            _timer_RefreshMainDisplay = null;
        }
    }

    function refreshViews( fromButton ) {
        fromButton = isDefined( fromButton ) ? fromButton : false;

        if ( isOnlyMainDisplayVisible() || fromButton ) {
            refreshOpenedViews();
            updateFullDayViewTimeArrowPosition();

            if ( _isDateToday ) {
                build();
            } else {
                buildDayEvents();
            }
        }
    }

    function isOnlyMainDisplayVisible() {
        return !isTooltipVisible() && !isDisabledBackgroundDisplayed() && !isYearSelectorDropDownVisible() && !areDropDownMenusVisible() && _eventDetails_Dragged === null;
    }

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Overlay Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function showOverlay( element ) {
        if ( !isOverlayVisible( element ) ) {
            element.className += " overlay-shown";
            
            hideSearchDialog();
        }
    }

    function hideOverlay( element ) {
        if ( isOverlayVisible( element ) ) {
            element.className = element.className.replace( " overlay-shown", "" );
        }
    }

    function isOverlayVisible( element ) {
        return element.className.indexOf( "overlay-shown" ) > -1;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Element Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function createElement( type, className, inputType ) {
        var result = null,
            nodeType = type.toLowerCase(),
            isText = nodeType === "text";

        if ( !_elementTypes.hasOwnProperty( nodeType ) ) {
            _elementTypes[ nodeType ] = isText ? _document.createTextNode( "" ) : _document.createElement( nodeType );
        }

        result = _elementTypes[ nodeType ].cloneNode( false );

        if ( isDefined( className ) ) {
            result.className = className;
        }

        if ( isDefined( inputType ) ) {
            result.type = inputType;
        }

        return result;
    }

    function createTextHeaderElement( container, text ) {
        var element = createElement( "p" );
        setNodeText( element, text );
        container.appendChild( element );
    }

    function createSpanElement( container, text, className, event, cancelDblClick ) {
        cancelDblClick = isDefined( cancelDblClick ) ? cancelDblClick : false;

        var element = createElement( "span", className ),
            isEventDefined = isDefinedFunction( event );
 
        setNodeText( element, text );    
        container.appendChild( element );

        if ( isEventDefined ) {
            element.onclick = event;
        }

        if ( cancelDblClick && isEventDefined ) {
            element.ondblclick = cancelBubble;
        }
    }

    function createButtonElement( container, text, className, event, tooltipText ) {
        var button = createElement( "input", className, "button" );
        button.value = text;
        button.onclick = event;
        container.appendChild( button );

        if ( isDefined( tooltipText ) ) {
            addToolTip( button, tooltipText, true );
        }

        return button;
    }

    function getElementByID( id ) {
        if ( !_elements.hasOwnProperty( id ) || _elements[ id ] === null ) {
            _elements[ id ] = getInternalElementByID( id );
        }

        if ( !_document.body.contains( _elements[ id ] ) ) {
            _elements[ id ] = getInternalElementByID( id );
        }

        return _elements[ id ];
    }

    function getInternalElementByID( id ) {
        var element = null;

        if ( _element_Calendar === null ) {
            element = _document.getElementById( id );
        } else {

            var elements = _element_Calendar.getElementsByTagName( "*" ),
                elementsLength = elements.length;

            for ( var elementIndex = 0; elementIndex < elementsLength; elementIndex++ ) {
                if ( elements[ elementIndex ].id === id ) {
                    element = elements[ elementIndex ];
                    break;
                }
            }
        }

        return element;
    }

    function addNode( parent, node ) {
        try {
            if ( !parent.contains( node ) ) {
                parent.appendChild( node );
            }
        } catch ( e ) {
            console.warn( e.message );
        }
    }

    function removeNode( parent, node ) {
        try {
            if ( parent.contains( node ) ) {
                parent.removeChild( node );
            }
        } catch ( e ) {
            console.warn( e.message );
        }
    }

    function cancelBubble( e ) {
        e.preventDefault();
        e.cancelBubble = true;
    }

    function showElementAtMousePosition( e, element ) {
        var left = e.pageX,
            top = e.pageY;

        element.style.display = "block";

        if ( left + element.offsetWidth > _window.innerWidth ) {
            left -= element.offsetWidth;
        } else {
            left++;
        }

        if ( top + element.offsetHeight > _window.innerHeight ) {
            top -= element.offsetHeight;
        } else {
            top++;
        }
        
        element.style.left = left + "px";
        element.style.top = top + "px";
    }

    function setInputType( input, type ) {
        try {
            input.type = type;
        } catch ( e ) {
            console.error( e.message );
            input.type = "text";
        }
    }

    function getOffset( element ) {
        var left = 0,
            top = 0;

        while ( element && !isNaN( element.offsetLeft ) && !isNaN( element.offsetTop ) ) {
            left += element.offsetLeft - element.scrollLeft;
            top += element.offsetTop - element.scrollTop;

            element = element.offsetParent;
        }

        return {
            left: left,
            top: top
        };
    }

    function getScrollPosition() {
        var doc = _document.documentElement,
            left = ( _window.pageXOffset || doc.scrollLeft )  - ( doc.clientLeft || 0 ),
            top = ( _window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 );

        return {
            left: left,
            top: top
        };
    }

    function removeLastCloseWindowEvent( popCloseWindowEvent ) {
        popCloseWindowEvent = isDefined( popCloseWindowEvent ) ? popCloseWindowEvent : true;
        
        if ( popCloseWindowEvent ) {
            _openDialogs.pop();
        }
    }

    function cloneEventDetails( value ) {
        var object = JSON.parse( JSON.stringify( value ) );
        object.from = new Date( object.from );
        object.to = new Date( object.to );

        if ( isDefined( object.repeatEnds ) ) {
            object.repeatEnds = new Date( object.repeatEnds );
        }
        
        delete object.created;
        delete object.lastUpdated;
        delete object.id;

        return object;
    }

    function addClonedEventToDate( date ) {
        var newEvent = cloneEventDetails( _copiedEventDetails );
        newEvent.from.setDate( date.getDate() );
        newEvent.from.setMonth( date.getMonth() );
        newEvent.from.setFullYear( date.getFullYear() );
        newEvent.to.setDate( date.getDate() );
        newEvent.to.setMonth( date.getMonth() );
        newEvent.to.setFullYear( date.getFullYear() );
        newEvent.id = null;

        _this.addEvent( newEvent );
    }

    function setElementClassName( element, className ) {
        if ( element !== null ) {
            element.className = className;
        }
    }

    function stripHTMLTagsFromText( text ) {
        var result = text;

        if ( !_options.allowHtmlInDisplay ) {
            var div = createElement( "div" );
            div.innerHTML = text;
    
            result = div.innerText;
        }

        return result;
    }

    function getStyleValueByName( element, stylePropertyName ) {
        var value = null;

        if ( _window.getComputedStyle ) {
            value = document.defaultView.getComputedStyle( element, null ).getPropertyValue( stylePropertyName ); 
        }  
        else if ( element.currentStyle ) {
            value = element.currentStyle[ stylePropertyName ];
        }                     

        return value;
    }

    function setNodeText( element, text ) {
        if ( !_options.allowHtmlInDisplay ) {
            element.innerText = stripHTMLTagsFromText( text );
        } else {
            element.innerHTML = text;
        }
    }

    function updateToolbarButtonVisibleState( button, flag ) {
        if ( button !== null ) {
            if ( !flag ) {
                button.style.display = "none";
            } else {
                button.style.display = "inline-block";
            }
        }
    }

    function updateContainerClassChildren( containerClass, func, ignoreElement ) {
        var elements = _element_Calendar.getElementsByClassName( containerClass ),
            elementsLength = elements.length;

        for ( var elementIndex = 0; elementIndex < elementsLength; elementIndex++ ) {
            var element = elements[ elementIndex ],
                elementChildren = element.children,
                elementChildrenLength = elementChildren.length;

            for ( var elementChildrenIndex = 0; elementChildrenIndex < elementChildrenLength; elementChildrenIndex++ ) {
                if ( elementChildren[ elementChildrenIndex ] !== ignoreElement ) {
                    func( elementChildren[ elementChildrenIndex ] );
                }
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Controls/Text
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildRadioButton( container, labelText, groupName, onChangeEvent ) {
        var lineContents = createElement( "div", "radioButtonContainer" );
        container.appendChild( lineContents );

        var label = createElement( "label", "radioButton" );
        lineContents.appendChild( label );

        var input = createElement( "input", null, "radio" );
        input.name = groupName;
        label.appendChild( input );

        if ( isDefined( onChangeEvent ) ) {
            input.onchange = onChangeEvent;
        }

        label.appendChild( createElement( "span", "check-mark" ) );

        createSpanElement( label, labelText, "text" );

        return input;
    }

    function buildCheckBox( container, labelText, onChangeEvent, name, checked, extraClassName ) {
        extraClassName = isDefined( extraClassName ) ? " " + extraClassName : "";

        var lineContents = createElement( "div" );
        container.appendChild( lineContents );

        var label = createElement( "label", "checkbox" + extraClassName );
        setNodeText( label, labelText );
        lineContents.appendChild( label );

        var input = createElement( "input", null, "checkbox" );
        label.appendChild( input );

        if ( isDefined( name ) ) {
            input.name = name;
        }

        if ( isDefined( onChangeEvent ) ) {
            input.onchange = onChangeEvent;
        }

        if ( isDefined( checked ) ) {
            input.checked = checked;
        }

        label.appendChild( createElement( "span", "check-mark" ) );

        return [ input, label ];
    }

    function buildToolbarButton( container, cssClass, tooltipText, onClickEvent, overrideShow ) {
        var button = createElement( "div", cssClass );
        button.ondblclick = cancelBubble;
        button.onclick = onClickEvent;
        container.appendChild( button );

        addToolTip( button, tooltipText, overrideShow );

        return button;
    }

    function buildNoEventsAvailableText( container, onClickEvent ) {
        container.innerHTML = "";

        var contents = createElement( "div", "no-events-available-text" );
        container.appendChild( contents );

        createTextHeaderElement( contents, _options.noEventsAvailableFullText );

        if ( _options.manualEditingEnabled ) {
            contents.appendChild( createElement( "div" ) );

            createSpanElement( contents, _options.clickText + " " );
            createSpanElement( contents, _options.hereText, "link", onClickEvent );
            createSpanElement( contents, " " + _options.toAddANewEventText );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * String Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function padNumber( number ) {
        var numberString = number.toString();

        return numberString.length === 1 ? "0" + numberString : numberString;
    }
    
    function trimString( string ) {
        return string.replace( /^\s+|\s+$/g , "" );
    }

    function newGuid() {
        var result = [];

        for ( var charIndex = 0; charIndex < 32; charIndex++ ) {
            if ( charIndex === 8 || charIndex === 12 || charIndex === 16 || charIndex === 20 ) {
                result.push( "-" );
            }

            var character = Math.floor( Math.random() * 16 ).toString( 16 );
            result.push( character );
        }

        return result.join( "" );
    }

    function startsWith( data, start ) {
        return data.substring( 0, start.length ) === start;
    }

    function endsWith( data, end ) {
        return data.substring( data.length - end.length, data.length ) === end;
    }

    function getShortUrlString( url, maxLength ) {
        var result = url;

        maxLength = isDefined( maxLength ) ? maxLength : 30;

        if ( url.length > maxLength ) {
            var sideLength = maxLength % 2 === 0 ? maxLength / 2 : ( maxLength - 1 ) / 2;

            result = url.substring( 0, sideLength ) + "..." + url.substring( url.length - sideLength );
        }

        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Validation
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function isDefinedOnly( data ) {
        return data !== undefined;
    }

    function isDefined( data ) {
        return isDefinedOnly( data ) && data !== null && data !== "";
    }

    function isFunction( object ) {
        return typeof object === "function";
    }

    function isDefinedFunction( object ) {
        return isDefined( object ) && isFunction( object );
    }

    function isDefinedString( object ) {
        return isDefined( object ) && typeof object === "string";
    }

    function isDefinedNumber( object ) {
        return isDefined( object ) && typeof object === "number";
    }

    function isDefinedBoolean( object ) {
        return isDefined( object ) && typeof object === "boolean";
    }

    function isDefinedObject( object ) {
        return isDefined( object ) && typeof object === "object";
    }

    function isDefinedArray( object ) {
        return isDefinedObject( object ) && object instanceof Array;
    }

    function isDefinedStringAndSet( object ) {
        return isDefinedString( object ) && object !== "";
    }

    function isDefinedDate( object ) {
        return isDefinedObject( object ) && object instanceof Date;
    }

    function isValidUrl( url ) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( url );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Export Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function exportEvents( events, type ) {
        type = isDefined( type ) ? type.toLowerCase() : "csv";

        var contents = "",
            contentsEvents = getOrderedEvents( getExportEvents( events ), false );

        if ( type === "csv" ) {
            contents = getCsvContents( contentsEvents );
        } else if ( type === "xml" ) {
            contents = getXmlContents( contentsEvents );
        } else if ( type === "json" ) {
            contents = getJsonContents( contentsEvents );
        } else if ( type === "text" ) {
            contents = getTextContents( contentsEvents );
        } else if ( type === "ical" ) {
            contents = getICalContents( contentsEvents );
        } else if ( type === "md" ) {
            contents = getMdContents( contentsEvents );
        } else if ( type === "html" ) {
            contents = getHtmlContents( contentsEvents );
        } else if ( type === "tsv" ) {
            contents = getTsvContents( contentsEvents );
        }

        if ( contents !== "" ) {
            var tempLink = createElement( "a" ),
                fileAttributes = getExportFileAttributes( type ),
                mimeTypeStart = fileAttributes[ 0 ],
                mimeTypeEnd = fileAttributes[ 1 ],
                extension = fileAttributes[ 2 ];

            tempLink.style.display = "none";
            tempLink.setAttribute( "target", "_blank" );
            tempLink.setAttribute( "href", "data:" + mimeTypeStart + "/" + mimeTypeEnd + ";charset=utf-8," + encodeURIComponent( contents ) );
            tempLink.setAttribute( "download", getExportDownloadFilename( extension ) );
    
            _document.body.appendChild( tempLink );
            tempLink.click();
            _document.body.removeChild( tempLink );
    
            triggerOptionsEvent( "onEventsExported" );
        }
    }

    function getExportFileAttributes( exportType ) {
        var mimeTypeStart = "text",
            mimeTypeEnd = exportType,
            extension = exportType;

        if ( exportType === "text" ) {
            mimeTypeEnd = "plain";
            extension = "txt";

        } else if ( exportType === "ical" ) {
            mimeTypeEnd = "calendar";
            extension = "ics";

        } else if ( exportType === "json" ) {
            mimeTypeStart = "application";

        } else if ( exportType === "md" ) {
            mimeTypeEnd = "x-markdown";

        } else if ( exportType === "html" ) {
            mimeTypeEnd = "html";

        } else if ( exportType === "tsv" ) {
            mimeTypeEnd = "tab-separated-values";
        }

        return [ mimeTypeStart, mimeTypeEnd, extension ];
    }

    function getExportEvents( events ) {
        var csvOrderedEvents = [];

        if ( isDefined( events ) ) {
            csvOrderedEvents = csvOrderedEvents.concat( events );
        } else {
            csvOrderedEvents = getAllEvents();
        }

        csvOrderedEvents = getOrderedEvents( csvOrderedEvents );

        return csvOrderedEvents;
    }

    function getExportDownloadFilename( extension ) {
        var date = new Date(),
            datePart = padNumber( date.getDate() ) + "-" + padNumber( date.getMonth() + 1 ) + "-" + date.getFullYear(),
            timePart = padNumber( date.getHours() ) + "-" + padNumber( date.getMinutes() );

        return _options.exportStartFilename + datePart + "_" + timePart + "." + extension;
    }

    function getYesNoFromBoolean( flag ) {
        return flag ? _options.yesText : _options.noText;
    }

    function getStringFromDateTime( eventDate ) {
        var result = _options.repeatsNever;

        if ( isDefined( eventDate ) ) {
            var date = padNumber( eventDate.getDate() ) + "/" + padNumber( eventDate.getMonth() + 1 ) + "/" + eventDate.getFullYear(),
                time = padNumber( eventDate.getHours() ) + ":" + padNumber( eventDate.getMinutes() );

            result = date + " " + time;
        }

        return result;
    }

    function getString( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : "";

        return isDefinedString( value ) ? value : defaultValue;
    }

    function getNumber( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : 0;

        return isDefinedNumber( value ) ? value : defaultValue;
    }

    function getBooleanAsNumber( value, defaultValue  ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : 0;

        return isDefinedBoolean( value ) ? value ? 1 : 0 : defaultValue;
    }

    function getBoolean( value, defaultValue  ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : false;

        return isDefinedBoolean( value ) ? value : defaultValue;
    }

    function getArray( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : [];

        return isDefinedArray( value ) ? value : defaultValue;
    }

    function getRepeatsText( value ) {
        var result = _options.dailyText,
            repeatEvery = getNumber( value );

        if ( repeatEvery === _repeatType.everyDay ) {
            result = _options.repeatsEveryDayText;
        } else if ( repeatEvery === _repeatType.everyWeek ) {
            result = _options.repeatsEveryWeekText;
        } else if ( repeatEvery === _repeatType.every2Weeks ) {
            result = _options.repeatsEvery2WeeksText;
        } else if ( repeatEvery === _repeatType.everyMonth ) {
            result = _options.repeatsEveryMonthText;
        } else if ( repeatEvery === _repeatType.everyYear ) {
            result = _options.repeatsEveryYearText;
        } else if ( repeatEvery === _repeatType.custom ) {
            result = _options.repeatsByCustomSettingsText;
        }

        return result;
    }

    function getRepeatsCustomTypeText( value ) {
        var result = _options.dailyText,
            repeatEveryCustomType = getNumber( value );

        if ( repeatEveryCustomType === _repeatCustomType.daily ) {
            result = _options.dailyText;
        } else if ( repeatEveryCustomType === _repeatCustomType.weekly ) {
            result = _options.weeklyText;
        } else if ( repeatEveryCustomType === _repeatCustomType.monthly ) {
            result = _options.monthlyText;
        } else if ( repeatEveryCustomType === _repeatCustomType.yearly ) {
            result = _options.yearlyText;
        }

        return result;
    }

    function getArrayText( value, includeSpeechMarks ) {
        includeSpeechMarks = isDefined( includeSpeechMarks ) ? includeSpeechMarks : false;

        var array = getArray( value );

        if ( includeSpeechMarks ) {
            var arrayLength = array.length;

            for ( var arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++ ) {
                array[ arrayIndex ] = "\"" + array[ arrayIndex ] + "\"";
            }
        }

        return array.join( "," );
    }

    function getPropertyName( name ) {
        return name.charAt( 0 ).toUpperCase() + name.slice( 1 );
    }

    function getPropertyValue( name, value, forJson ) {
        forJson = isDefined( forJson ) ? forJson : false;

        var result = !forJson ? getString( value ) : "\"" + getString( value ) + "\"";

        if ( typeof value === "boolean" ) {
            result = !forJson ? getYesNoFromBoolean( value ) : value.toString();

        } else if ( typeof value === "object" && value instanceof Date ) {
            result = !forJson ? getStringFromDateTime( value ) : "\"" + value.toISOString() + "\"";

        } else if ( typeof value === "object" && value instanceof Array ) {
            if ( name === "repeatEveryExcludeDays" && !forJson ) {
                result = getArrayDays( value );
            } else {

                if ( forJson ) {
                    result = "[" + getArrayText( value, true ) + "]";
                } else {
                    result = getArrayText( value );
                }
            }

        } else if ( typeof value === "number" ) {
            if ( name === "repeatEvery" && !forJson ) {
                result = getRepeatsText( value );
            } else if ( name === "repeatEveryCustomType" && !forJson ) {
                result = getRepeatsCustomTypeText( value );
            } else {
                result = value.toString();
            }
        }

        return result;
    }

    function getICalDateTimeString( eventDate ) {
        var format = [];
        format.push( eventDate.getFullYear() );
        format.push( padNumber( eventDate.getMonth() + 1 ) );
        format.push( padNumber( eventDate.getDate() ) );
        format.push( "T" );
        format.push( padNumber( eventDate.getHours() ) );
        format.push( padNumber( eventDate.getMinutes() ) );
        format.push( "00Z" );

        return format.join( "" );
    }

    function getArrayDays( days ) {
        var daysNames = [];

        if ( isDefinedArray( days ) ) {
            var daysLength = days.length;

            for ( var dayIndex = 0; dayIndex < daysLength; dayIndex++ ) {
                var weekDayNumber = days[ dayIndex ] - 1;
                if ( weekDayNumber === -1 ) {
                    weekDayNumber = 6;
                }

                daysNames.push( _options.dayNames[ weekDayNumber ] );
            }
        }

        return getArrayText( daysNames );
    }

    function getExportHeaders() {
        var headers = [ 
                _options.idText,
                _options.fromText,
                _options.toText,
                _options.isAllDayText,
                _options.titleText,
                _options.descriptionText,
                _options.locationText,
                _options.backgroundColorText,
                _options.textColorText,
                _options.borderColorText,
                _options.repeatsText,
                _options.repeatEndsText,
                _options.repeatDaysToExcludeText,
                _options.seriesIgnoreDatesText,
                _options.createdText,
                _options.lastUpdatedText,
                _options.organizerNameText,
                _options.organizerEmailAddressText,
                _options.urlText
            ],
            headersLength = headers.length;

        return [ headers, headersLength ];
    }

    function getExportRow( eventDetails ) {
        var eventContents = [];

        eventContents.push( getString( eventDetails.id ) );
        eventContents.push( getStringFromDateTime( eventDetails.from ) );
        eventContents.push( getStringFromDateTime( eventDetails.to ) );
        eventContents.push( getYesNoFromBoolean( eventDetails.isAllDay ) );
        eventContents.push( getString( eventDetails.title ) );
        eventContents.push( getString( eventDetails.description ) );
        eventContents.push( getString( eventDetails.location ) );
        eventContents.push( getString( eventDetails.color ) );
        eventContents.push( getString( eventDetails.colorText ) );
        eventContents.push( getString( eventDetails.colorBorder ) );
        eventContents.push( getRepeatsText( eventDetails.repeatEvery ) );
        eventContents.push( getStringFromDateTime( eventDetails.repeatEnds ) );
        eventContents.push( getArrayDays( eventDetails.repeatEveryExcludeDays ) );
        eventContents.push( getArrayText( eventDetails.seriesIgnoreDates ) );
        eventContents.push( getStringFromDateTime( eventDetails.created ) );
        eventContents.push( getStringFromDateTime( eventDetails.lastUpdated ) );
        eventContents.push( getString( eventDetails.organizerName ) );
        eventContents.push( getString( eventDetails.organizerEmailAddress ) );
        eventContents.push( getString( eventDetails.url ) );

        return eventContents;
    }

    function getOrderedEventPropertyNameList( event ) {
        var propertyNames = [];

        for ( var propertyName in event ) {
            if ( event.hasOwnProperty( propertyName ) ) {
                propertyNames.push( propertyName );
            }
        }

        propertyNames.sort();

        return propertyNames;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To CSV
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getCsvContents( orderedEvents ) {
        var orderedEventLength = orderedEvents.length,
            exportHeaders = getExportHeaders(),
            headers = exportHeaders[ 0 ],
            headersLength = exportHeaders[ 1 ],
            csvHeaders = [],
            csvContents = [];

        for ( var headerIndex = 0; headerIndex < headersLength; headerIndex++ ) {
            csvHeaders.push( getCsvValue( headers[ headerIndex ] ) );
        }
        
        csvContents.push( getCsvValueLine( csvHeaders ) );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            storeCsvData( csvContents, orderedEvents[ orderedEventIndex ] );
        }

        return csvContents.join( "\n" );
    }

    function storeCsvData( csvContents, eventDetails ) {
        var eventContents = getExportRow( eventDetails ),
            eventContentsLength = eventContents.length;

        for ( var eventContentsIndex = 0; eventContentsIndex < eventContentsLength; eventContentsIndex++ ) {
            eventContents[ eventContentsIndex ] = getCsvValue( eventContents[ eventContentsIndex ] );
        }

        csvContents.push( getCsvValueLine( eventContents ) );
    }

    function getCsvValue( text ) {
        text = text.replace( /(\r\n|\n|\r)/gm, "" ).replace( /(\s\s)/gm, " " );
        text = text.replace( /"/g, '""' );
        text = '"' + text + '"';

        return text;
    }

    function getCsvValueLine( csvValues ) {
        return csvValues.join( "," );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To XML
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getXmlContents( orderedEvents ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        contents.push( "<?xml version=\"1.0\" ?>" );
        contents.push( "<Events>" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                propertyNames = getOrderedEventPropertyNameList( orderedEvent ),
                propertyNamesLength = propertyNames.length;

            contents.push( "<Event>" );

            for ( var propertyNameIndex = 0; propertyNameIndex < propertyNamesLength; propertyNameIndex++ ) {
                var propertyName = propertyNames[ propertyNameIndex ];

                if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                    var newPropertyName = getPropertyName( propertyName );
                    
                    contents.push( "<" + newPropertyName + ">" + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) + "</" + newPropertyName + ">" );
                }
            }
    
            contents.push( "</Event>" );
        }

        contents.push( "</Events>" );

        return contents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To JSON
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getJsonContents( orderedEvents ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        contents.push( "{" );
        contents.push( "\"events\": [" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                propertyNames = getOrderedEventPropertyNameList( orderedEvent ),
                propertyNamesLength = propertyNames.length;

            contents.push( "{" );

            for ( var propertyNameIndex = 0; propertyNameIndex < propertyNamesLength; propertyNameIndex++ ) {
                var propertyName = propertyNames[ propertyNameIndex ];

                if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                    contents.push( "\"" + propertyName + "\":" + getPropertyValue( propertyName, orderedEvent[ propertyName ], true ) + "," );
                }
            }

            var lastJsonEntry = contents[ contents.length - 1 ];
            contents[ contents.length - 1 ] = lastJsonEntry.substring( 0, lastJsonEntry.length - 1 );
            contents.push( "}," );
        }

        contents[ contents.length - 1 ] = "}";
        contents.push( "]" );
        contents.push( "}" );

        return contents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To TEXT
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getTextContents( orderedEvents ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                propertyNames = getOrderedEventPropertyNameList( orderedEvent ),
                propertyNamesLength = propertyNames.length;

            for ( var propertyNameIndex = 0; propertyNameIndex < propertyNamesLength; propertyNameIndex++ ) {
                var propertyName = propertyNames[ propertyNameIndex ];

                if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                    contents.push( getPropertyName( propertyName ) + ": " + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) );
                }
            }
    
            contents.push( "" );
        }

        contents.pop();

        return contents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To iCAL
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getICalContents( orderedEvents ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        contents.push( "BEGIN:VCALENDAR" );
        contents.push( "VERSION:2.0" );
        contents.push( "PRODID:Calendar.js v" + _this.getVersion() );
        contents.push( "CALSCALE:GREGORIAN" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ];

            contents.push( "BEGIN:VEVENT" );
            contents.push( "UID:" + getString( orderedEvent.id ) );
            contents.push( "CREATED:" + getICalDateTimeString( orderedEvent.created ) );
            contents.push( "LAST-MODIFIED:" + getICalDateTimeString( orderedEvent.lastUpdated ) );
            contents.push( "ORGANIZER;CN=" + getString( orderedEvent.organizerName ) + ":MAILTO:" + getString( orderedEvent.organizerEmailAddress ) );
            contents.push( "DTSTART:" + getICalDateTimeString( orderedEvent.from ) );
            contents.push( "DTEND:" + getICalDateTimeString( orderedEvent.to ) );
            contents.push( "SUMMARY:" + getString( orderedEvent.title ) );
            contents.push( "END:VEVENT" );
        }

        contents.push( "END:VCALENDAR" );

        return contents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To MD
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getMdContents( orderedEvents ) {
        var orderedEventLength = orderedEvents.length,
            exportHeaders = getExportHeaders(),
            headersLength = exportHeaders[ 1 ],
            contents = [ getMdFileRow( exportHeaders[ 0 ] ) ],
            headerLines = [];

        for ( var headerIndex = 0; headerIndex < headersLength; headerIndex++ ) {
            headerLines.push( "---" );
        }

        contents.push( getMdFileRow( headerLines ) );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var rowContents = getExportRow( orderedEvents[ orderedEventIndex ] );

            contents.push( getMdFileRow( rowContents ) );
        }

        return contents.join( "\n" );
    }

    function getMdFileRow( contents ) {
        return "| " + contents.join( " | " ) + " |";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To HTML
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getHtmlContents( orderedEvents ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        contents.push( "<html>" );
        contents.push( "<body>" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                propertyNames = getOrderedEventPropertyNameList( orderedEvent ),
                propertyNamesLength = propertyNames.length;

            contents.push( "<h3><b>" + orderedEvent.id + ":</b></h3>" );
            contents.push( "<ul>" );

            for ( var propertyNameIndex = 0; propertyNameIndex < propertyNamesLength; propertyNameIndex++ ) {
                var propertyName = propertyNames[ propertyNameIndex ];

                if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                    contents.push( "<li><b>" + getPropertyName( propertyName ) + "</b>: " + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) + "</li>" );
                }
            }

            contents.push( "</ul>" );
        }

        contents.push( "</body>" );
        contents.push( "</html>" );

        return contents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To TSV
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getTsvContents( orderedEvents ) {
        var orderedEventLength = orderedEvents.length,
            exportHeaders = getExportHeaders(),
            headers = exportHeaders[ 0 ],
            headersLength = exportHeaders[ 1 ],
            csvHeaders = [],
            csvContents = [];

        for ( var headerIndex = 0; headerIndex < headersLength; headerIndex++ ) {
            csvHeaders.push( getTsvValue( headers[ headerIndex ] ) );
        }
        
        csvContents.push( getTsvValueLine( csvHeaders ) );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            storeTsvData( csvContents, orderedEvents[ orderedEventIndex ] );
        }

        return csvContents.join( "\n" );
    }

    function storeTsvData( csvContents, eventDetails ) {
        var eventContents = getExportRow( eventDetails ),
            eventContentsLength = eventContents.length;

        for ( var eventContentsIndex = 0; eventContentsIndex < eventContentsLength; eventContentsIndex++ ) {
            eventContents[ eventContentsIndex ] = getTsvValue( eventContents[ eventContentsIndex ] );
        }

        csvContents.push( getTsvValueLine( eventContents ) );
    }

    function getTsvValue( text ) {
        text = text.replace(/\\/g, '\\\\');

        return text;
    }

    function getTsvValueLine( csvValues ) {
        return csvValues.join( "\t" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Main Controls (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * turnOnFullScreen().
     * 
     * Turns on the full-screen mode (if enabled).
     * 
     * @public
     */
    this.turnOnFullScreen = function() {
        if ( !_datePickerModeEnabled ) {
            turnOnFullScreenMode();
        }
    };

    /**
     * turnOffFullScreen().
     * 
     * Turns off the full-screen mode (if enabled).
     * 
     * @public
     */
    this.turnOffFullScreen = function() {
        if ( !_datePickerModeEnabled ) {
            turnOffFullScreenMode();
        }
    };

    /**
     * isFullScreenActivated().
     * 
     * States if full-screen mode is activated.
     * 
     * @public
     * 
     * @returns     {boolean}                                               States if full-screen mode is activated.
     */
    this.isFullScreenActivated = function() {
        return _isFullScreenModeActivated;
    };

    /**
     * startTheAutoRefreshTimer().
     * 
     * Starts the auto-refresh timer (if enabled).
     * 
     * @public
     */
    this.startTheAutoRefreshTimer = function() {
        if ( !_datePickerModeEnabled ) {
            _timer_RefreshMainDisplay_Enabled = true;

            startAutoRefreshTimer();
        }
    };

    /**
     * stopTheAutoRefreshTimer().
     * 
     * Stops the auto-refresh timer (if enabled).
     * 
     * @public
     */
    this.stopTheAutoRefreshTimer = function() {
        if ( !_datePickerModeEnabled ) {
            clearAutoRefreshTimer();
        
            _timer_RefreshMainDisplay_Enabled = false;
        }
    };

    /**
     * destroy().
     * 
     * Removes the calendar from the DOM.
     * 
     * @public
     */
    this.destroy = function() {
        _element_Calendar.className = "";
        _element_Calendar.innerHTML = "";

        clearElementsByClassName( _document.body, "calendar-dialog" );
        clearElementsByClassName( _document.body, "calendar-drop-down-menu" );
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Navigation, Exporting and Refreshing (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * moveToPreviousMonth().
     * 
     * Moves to the previous month.
     * 
     * @public
     * @fires       onPreviousMonth
     */
    this.moveToPreviousMonth = function() {
        moveBackMonth();
    };

    /**
     * moveToNextMonth().
     * 
     * Moves to the next month.
     * 
     * @public
     * @fires       onNextMonth
     */
    this.moveToNextMonth = function() {
        moveForwardMonth();
    };

    /**
     * moveToPreviousYear().
     * 
     * Moves to the previous year.
     * 
     * @public
     * @fires       onPreviousYear
     */
    this.moveToPreviousYear = function() {
        moveBackYear();
    };

    /**
     * moveToNextYear().
     * 
     * Moves to the next year.
     * 
     * @public
     * @fires       onNextYear
     */
    this.moveToNextYear = function() {
        moveForwardYear();
    };

    /**
     * moveToToday().
     * 
     * Moves to the current month.
     * 
     * @public
     * @fires       onToday
     */
    this.moveToToday = function() {
        moveToday();
    };

    /**
     * getCurrentDisplayDate().
     * 
     * Returns the current date that is being used in the main display.
     * 
     * @public
     * 
     * @returns     {Object}                                                A Date() object (day is always set to the 1st).
     */
    this.getCurrentDisplayDate = function() {
        return new Date( _currentDate );
    };

    /**
     * setCurrentDisplayDate().
     * 
     * Sets the current date that is being used in the main display.
     * 
     * @public
     * @fires       onSetDate
     * 
     * @param       {Object}    date                                        The Date() object to set.
     */
     this.setCurrentDisplayDate = function( date ) {
        if ( !_datePickerModeEnabled || _datePickerVisible ) {
            var newDate = new Date( date );

            if ( !doDatesMatch( _currentDate, newDate ) ) {
                build( newDate );
                triggerOptionsEventWithData( "onSetDate", newDate );
            }
        }
    };

    /**
     * getSelectedDatePickerDate().
     * 
     * Returns the current date that has been selected in DatePicker mode.
     * 
     * @public
     * 
     * @returns     {Object}                                                A Date() object.
     */
    this.getSelectedDatePickerDate = function() {
        return _datePickerModeEnabled ? new Date( _currentDateForDatePicker ) : null;
    };

    /**
     * setSelectedDatePickerDate().
     * 
     * Sets the current date that is being used in DatePicker mode.
     * 
     * @public
     * @fires       onDatePickerDateChanged
     * 
     * @param       {Object}    date                                        The Date() object to set.
     */
    this.setSelectedDatePickerDate = function( date ) {
        if ( _datePickerModeEnabled ) {
            var newDate = new Date( date ),
                newDateAllowed = isDateValidForDatePicker( newDate );
            
            if ( newDateAllowed && !doDatesMatch( newDate, _currentDateForDatePicker ) ) {
                newDate.setHours( 0, 0, 0, 0 );

                hideDatePickerMode();
                updateDatePickerInputValueDisplay( newDate );
                triggerOptionsEventWithData( "onDatePickerDateChanged", newDate );

                _currentDateForDatePicker = newDate;
            }
        }
    };

    /**
     * exportAllEvents().
     * 
     * Exports all the events into a downloadable file.
     * 
     * @public
     * @fires       onEventsExported
     * 
     * @param       {string}    type                                        The data type to export to (defaults to "csv", accepts "csv", "xml", "json", "txt", "ical", "md", "html", and "tsv").
     */
    this.exportAllEvents = function( type ) {
        if ( _options.exportEventsEnabled && !_datePickerModeEnabled ) {
            type = !isDefinedString( type ) ? "csv" : type;

            exportEvents( null, type );
        }
    };

    /**
     * refresh().
     * 
     * Refreshes all of the views.
     * 
     * @public
     */
    this.refresh = function() {
        if ( !_datePickerModeEnabled ) {
            refreshViews();
        }
    };

    function moveBackMonth( e ) {
        if ( isDefined( e ) ) {
            cancelBubble( e );
        }

        if ( !_datePickerModeEnabled || _datePickerVisible ) {
            var previousMonth = new Date( _currentDate );
            previousMonth.setMonth( previousMonth.getMonth() - 1 );
    
            build( previousMonth );
            triggerOptionsEventWithData( "onPreviousMonth", previousMonth );
        }
    }

    function moveForwardMonth( e ) {
        if ( isDefined( e ) ) {
            cancelBubble( e );
        }

        if ( !_datePickerModeEnabled || _datePickerVisible ) {
            var nextMonth = new Date( _currentDate );
            nextMonth.setMonth( nextMonth.getMonth() + 1 );
    
            build( nextMonth );
            triggerOptionsEventWithData( "onNextMonth", nextMonth );
        }
    }

    function moveBackYear() {
        if ( !_datePickerModeEnabled || _datePickerVisible ) {
            var previousYear = new Date( _currentDate );
            previousYear.setFullYear( previousYear.getFullYear() - 1 );
    
            build( previousYear );
            triggerOptionsEventWithData( "onPreviousYear", previousYear );
        }
    }

    function moveForwardYear() {
        if ( !_datePickerModeEnabled || _datePickerVisible ) {
            var nextYear = new Date( _currentDate );
            nextYear.setFullYear( nextYear.getFullYear() + 1 );
    
            build( nextYear );
            triggerOptionsEventWithData( "onNextYear", nextYear );
        }
    }

    function moveToday() {
        if ( !_datePickerModeEnabled || _datePickerVisible ) {
            var today = new Date();

            if ( _currentDate.getMonth() !== today.getMonth() || _currentDate.getFullYear() !== today.getFullYear() ) {
                build();
                triggerOptionsEvent( "onToday" );
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Add/Remove Events (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * setEvents().
     * 
     * Sets the events and clears any existing ones.
     * 
     * @public
     * @fires       onEventsSet
     * 
     * @param       {Event[]}   events                                      The array of events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventsSet" event should be triggered.
     */
    this.setEvents = function( events, updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
            _events = {};
    
            this.addEvents( events, updateEvents, false );
    
            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onEventsSet", events );
            }
        }
    };

    /**
     * setEventsFromJson().
     * 
     * Sets new events from JSON data and clears any existing ones.
     * 
     * @public
     * @fires       onEventsSetFromJSON
     * 
     * @param       {string}    json                                        The JSON string containing the events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventsSetFromJSON" event should be triggered.
     */
    this.setEventsFromJson = function( json, updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;

            var dataObject = getObjectFromString( json );
    
            if ( isDefinedArray( dataObject ) ) { 
                this.setEvents( dataObject, updateEvents, false );
            } else if ( isDefinedObject( dataObject ) && dataObject.hasOwnProperty( "events" ) ) {
                this.setEvents( dataObject.events, updateEvents, false );
            }
    
            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onEventsSetFromJSON", json );
            }
        }
    };

    /**
     * addEvents().
     * 
     * Adds an array of new events.
     * 
     * @public
     * @fires       onEventsAdded
     * 
     * @param       {Event[]}   events                                      The array of events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventsAdded" event should be triggered.
     */
    this.addEvents = function( events, updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
    
            var eventsLength = events.length;
            for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                var event = events[ eventIndex ];
    
                this.addEvent( event, false, false, false );
            }
    
            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onEventsAdded", events );
            }
    
            if ( updateEvents ) {
                buildDayEvents();
                refreshOpenedViews();
            }
        }
    };

    /**
     * addEventsFromJson().
     * 
     * Adds new events from JSON data.
     * 
     * @public
     * @fires       onEventsAddedFromJSON
     * 
     * @param       {string}    json                                        The JSON string containing the events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventsAddedFromJSON" event should be triggered.
     */
    this.addEventsFromJson = function( json, updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;

            var dataObject = getObjectFromString( json );
    
            if ( isDefinedArray( dataObject ) ) { 
                this.addEvents( dataObject, updateEvents, false );
            } else if ( isDefinedObject( dataObject ) && dataObject.hasOwnProperty( "events" ) ) {
                this.addEvents( dataObject.events, updateEvents, false );
            }
    
            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onEventsAddedFromJSON", json );
            }
        }
    };

    /**
     * addEvent().
     * 
     * Adds a of new event.
     * 
     * @public
     * @fires       onEventAdded
     * 
     * @param       {Event}     event                                       The event (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventAdded" event should be triggered.
     * @param       {boolean}   setLastUpdated                              States if the "lastUpdated" date should be set (defaults to true).
     * 
     * @returns     {boolean}                                               States if the event was added.
     */
    this.addEvent = function( event, updateEvents, triggerEvent, setLastUpdated ) {
        var added = false;

        if ( !_datePickerModeEnabled ) {
            setLastUpdated = !isDefinedBoolean( setLastUpdated ) ? true : setLastUpdated;

            if ( isDefinedString( event.from ) ) {
                event.from = new Date( event.from );
            }
    
            if ( isDefinedString( event.to ) ) {
                event.to = new Date( event.to );
            }
    
            if ( isDefinedString( event.repeatEnds ) ) {
                event.repeatEnds = new Date( event.repeatEnds );
            }
    
            if ( isDefinedString( event.created ) ) {
                event.created = new Date( event.created );
            }
    
            if ( isDefinedString( event.lastUpdated ) ) {
                event.lastUpdated = new Date( event.lastUpdated );
            }
    
            if ( event.from <= event.to ) {
                var storageDate = toStorageDate( event.from ),
                    storageGuid = newGuid(),
                    title = getString( event.title ),
                    description = getString( event.description ),
                    location = getString( event.location ),
                    group = getString( event.group ),
                    url = getString( event.url );
    
                if ( !_events.hasOwnProperty( storageDate ) ) {
                    _events[ storageDate ] = {};
                }
    
                if ( !_events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                    updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
                    triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
    
                    if ( !isDefined( event.id ) ) {
                        event.id = storageGuid;
                    } else {
                        storageGuid = event.id;
                    }
    
                    if ( _options.maximumEventTitleLength > 0 && title !== "" && title.length > _options.maximumEventTitleLength ) {
                        event.title = event.title.substring( 0, _options.maximumEventTitleLength );
                    }
    
                    if ( _options.maximumEventDescriptionLength > 0 && description !== "" && description.length > _options.maximumEventDescriptionLength ) {
                        event.description = event.description.substring( 0, _options.maximumEventDescriptionLength );
                    }
    
                    if ( _options.maximumEventLocationLength > 0 && location !== "" && location.length > _options.maximumEventLocationLength ) {
                        event.location = event.location.substring( 0, _options.maximumEventLocationLength );
                    }
    
                    if ( _options.maximumEventGroupLength > 0 && group !== "" && group.length > _options.maximumEventGroupLength ) {
                        event.group = event.group.substring( 0, _options.maximumEventGroupLength );
                    }
    
                    if ( url !== "" && !isValidUrl( url ) ) {
                        event.url = "";
                    }
    
                    if ( !isDefinedDate( event.created ) ) {
                        event.created = new Date();
                    }
    
                    if ( setLastUpdated ) {
                        event.lastUpdated = new Date();
                    }
    
                    _events[ storageDate ][ storageGuid ] = getAdjustedAllDayEvent( event );
                    added = true;
    
                    if ( triggerEvent ) {
                        triggerOptionsEventWithData( "onEventAdded", event );
                    }
            
                    if ( updateEvents ) {
                        buildDayEvents();
                        refreshOpenedViews();
                    }
                }
            }
        }

        return added;
    };

    /**
     * updateEvents().
     * 
     * Updates an array of existing events.
     * 
     * @public
     * @fires       onEventsUpdated
     * 
     * @param       {Event[]}   events                                      The array of events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventsUpdated" event should be triggered.
     */
    this.updateEvents = function( events, updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
    
            var eventsLength = events.length;
            for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                var event = events[ eventIndex ];
    
                this.updateEvent( event.id, event, false, false );
            }
    
            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onEventsUpdated", events );
            }
    
            if ( updateEvents ) {
                buildDayEvents();
                refreshOpenedViews();
            }
        }
    };

    /**
     * updateEvent().
     * 
     * Updates an existing event.
     * 
     * @public
     * @fires       onEventUpdated
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {Event}     event                                       The event (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventUpdated" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was updated.
     */
    this.updateEvent = function( id, event, updateEvents, triggerEvent ) {
        var updated = false;

        if ( !_datePickerModeEnabled ) {
            updated = this.removeEvent( id, false, false );

            if ( updated ) {
                updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
                triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
    
                updated = this.addEvent( event, updateEvents, false );
    
                if ( updated && triggerEvent ) {
                    triggerOptionsEventWithData( "onEventUpdated", event );
                }
            }
        }

        return updated;
    };

    /**
     * updateEventDateTimes().
     * 
     * Updates an existing events from, to, and repeatEnds dates.
     * 
     * @public
     * @fires       onEventUpdated
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {Object}    from                                        The new from date.
     * @param       {Object}    to                                          The new to date.
     * @param       {Object}    repeatEnds                                  The new repeat ends day.
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventUpdated" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was updated.
     */
    this.updateEventDateTimes = function( id, from, to, repeatEnds, updateEvents, triggerEvent ) {
        var updated = false;

        if ( !_datePickerModeEnabled ) {
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;

            getAllEventsFunc( function( event ) {
                if ( event.id === id ) {
                    event.from = from;
                    event.to = to;
                    event.repeatEnds = repeatEnds;
                    updated = true;
    
                    if ( triggerEvent ) {
                        triggerOptionsEventWithData( "onEventUpdated", event );
                    }
    
                    if ( updateEvents ) {
                        buildDayEvents();
                        refreshOpenedViews();
                    }
    
                    return true;
                }
            } );
        }
        
        return updated;
    };

    /**
     * removeEvent().
     * 
     * Removes an event.
     * 
     * @public
     * @fires       onEventRemoved
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventRemoved" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was removed.
     */
    this.removeEvent = function( id, updateEvents, triggerEvent ) {
        var removed = false;

        if ( !_datePickerModeEnabled ) {
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
            
            getAllEventsFunc( function( event, storageDate, storageGuid ) {
                if ( storageGuid === id ) {
                    delete _events[ storageDate ][ storageGuid ];
                    removed = true;
    
                    if ( triggerEvent ) {
                        triggerOptionsEventWithData( "onEventRemoved", event );
                    }
    
                    if ( updateEvents ) {
                        buildDayEvents();
                        refreshOpenedViews();
                    }
    
                    return true;
                }
            } );
        }

        return removed;
    };

    /**
     * clearEvents().
     * 
     * Clears all the events.
     * 
     * @public
     * @fires       onEventsCleared
     * 
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onEventsCleared" event should be triggered.
     */
    this.clearEvents = function( updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
    
            _events = {};
    
            if ( triggerEvent ) {
                triggerOptionsEvent( "onEventsCleared" );
            }
    
            if ( updateEvents ) {
                buildDayEvents();
                refreshOpenedViews();
            }
        }
    };

    /**
     * getEvents().
     * 
     * Returns an array of the events available.
     * 
     * @public
     * 
     * @returns     {Event[]}                                               An array of events.
     */
    this.getEvents = function() {
        var events = [];

        if ( !_datePickerModeEnabled ) {
            events = getOrderedEvents( getAllEvents() );
        }

        return events;
    };

    /**
     * getEvent().
     * 
     * Returns an event that matches the ID passed.
     * 
     * @public
     * 
     * @param       {string}    id                                          The ID of the event to get.
     * 
     * @returns     {Event}                                                 The event details (or null if the ID cannot be found).
     */
    this.getEvent = function( id ) {
        var returnEvent = null;

        if ( !_datePickerModeEnabled ) {
            getAllEventsFunc( function( event ) {
                if ( event.id === id ) {
                    returnEvent = event;
                    return true;
                }
            } );
        }

        return returnEvent;
    };

    function toStorageDate( date ) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Add/Remove Groups (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * getAllGroups().
     * 
     * Returns an array of group names being used.
     * 
     * @public
     * 
     * @returns     {string[]}                                              An array of the group names.
     */
    this.getAllGroups = function() {
        return getGroups();
    };

    /**
     * clearAllGroups().
     * 
     * Clears all the event groups.
     * 
     * @public
     * @fires       onGroupsCleared
     * 
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onGroupsCleared" event should be triggered.
     */
    this.clearAllGroups = function( updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;

            getAllEventsFunc( function( event ) {
                event.group = null;
            } );

            if ( triggerEvent ) {
                triggerOptionsEvent( "onGroupsCleared" );
            }

            if ( updateEvents ) {
                buildDayEvents();
                refreshOpenedViews();
            }
        }
    };

    /**
     * removeGroup().
     * 
     * Removes a group by name.
     * 
     * @public
     * @fires       onGroupRemoved
     * 
     * @param       {string}    groupName                                   The name of the group to remove.
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States if the "onGroupRemoved" event should be triggered.
     */
    this.removeGroup = function( groupName, updateEvents, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;

            var checkGroupName = groupName.toLowerCase();

            getAllEventsFunc( function( event ) {
                if ( event.group !== null && event.group.toLowerCase() === checkGroupName ) {
                    event.group = null;
                }
            } );

            if ( triggerEvent ) {
                triggerOptionsEvent( "onGroupRemoved", groupName );
            }

            if ( updateEvents ) {
                buildDayEvents();
                refreshOpenedViews();
            }
        }
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Internal Clipboard (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * setClipboardEvent().
     * 
     * Set the clipboard event.
     * 
     * @public
     * 
     * @param       {Event}    event                                        The event to set (refer to "Day Event" documentation for properties).
     */
    this.setClipboardEvent = function( event ) {
        _copiedEventDetails = cloneEventDetails( event );
    };

    /**
     * getClipboardEvent().
     * 
     * Returns the event copied in the clipboard.
     * 
     * @public
     * 
     * @returns     {Event}                                                 The copied event details.
     */
    this.getClipboardEvent = function() {
        return _copiedEventDetails;
    };

    /**
     * clearClipboard().
     * 
     * Clears the internal clipboard.
     * 
     * @public
     */
    this.clearClipboard = function() {
        _copiedEventDetails = null;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Get/Set Additional Data (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * getVersion().
     * 
     * Returns the version of Calendar.js.
     * 
     * @public
     * 
     * @returns     {string}                                                The version number.
     */
    this.getVersion = function() {
        return "1.6.5";
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Setting Options (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * setOptions().
     * 
     * Sets the specific options that should be used.
     * 
     * @public
     * @fires       onOptionsUpdated
     * 
     * @param       {Options}   newOptions                                  All the options that should be set (refer to "Options" documentation for properties).
     * @param       {boolean}   triggerEvent                                States if the "onOptionsUpdated" event should be triggered.
     */
    this.setOptions = function( newOptions, triggerEvent ) {
        newOptions = getOptions( newOptions );

        for ( var propertyName in newOptions ) {
            if ( newOptions.hasOwnProperty( propertyName ) ) {
                _options[ propertyName ] = newOptions[ propertyName ];
            }
        }

        resetOptionsForDatePickerMode();
        checkForBrowserNotificationsPermission();

        if ( _initialized ) {
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;

            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onOptionsUpdated", _options );
            }

            _initialized = false;

            if ( !_datePickerModeEnabled || _datePickerVisible ) {
                build( _currentDate, true );
            }
        }
    };

    /**
     * setSearchOptions().
     * 
     * Sets the specific search options that should be used.
     * 
     * @public
     * @fires       onSearchOptionsUpdated
     * 
     * @param       {Search}    newSearchOptions                            All the search options that should be set (refer to "Search Options" documentation for properties).
     * @param       {boolean}   triggerEvent                                States if the "onSearchOptionsUpdated" event should be triggered.
     */
    this.setSearchOptions = function( newSearchOptions, triggerEvent ) {
        if ( !_datePickerModeEnabled ) {
            newSearchOptions = getOptions( newSearchOptions );
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
    
            hideSearchDialog();
    
            for ( var propertyName in newSearchOptions ) {
                if ( newSearchOptions.hasOwnProperty( propertyName ) ) {
                    _optionsForSearch[ propertyName ] = newSearchOptions[ propertyName ];
                }
            }
    
            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onSearchOptionsUpdated", _optionsForSearch );
            }
        }
    };

    /**
     * addHolidays().
     * 
     * Adds new holidays.
     * 
     * @public
     * @fires       onOptionsUpdated
     * 
     * @param       {Holiday[]} holidays                                    The holidays to add (refer to "Holiday" documentation for properties).
     * @param       {boolean}   triggerEvent                                States if the "onOptionsUpdated" event should be triggered.
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     */
    this.addHolidays = function( holidays, triggerEvent, updateEvents ) {
        if ( !_datePickerModeEnabled ) {
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;
    
            _options.holidays = _options.holidays.concat( holidays );
    
            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onOptionsUpdated", _options );
            }
    
            if ( updateEvents ) {
                build( _currentDate, true );
            }   
        }
    };

    /**
     * removeHolidays().
     * 
     * Removes holidays.
     * 
     * @public
     * @fires       onOptionsUpdated
     * 
     * @param       {string[]}  holidayNames                                The names of the holidays to remove (case sensitive).
     * @param       {boolean}   triggerEvent                                States if the "onOptionsUpdated" event should be triggered.
     * @param       {boolean}   updateEvents                                States if the calendar display should be updated (defaults to true).
     */
    this.removeHolidays = function( holidayNames, triggerEvent, updateEvents ) {
        if ( !_datePickerModeEnabled ) {
            triggerEvent = !isDefinedBoolean( triggerEvent ) ? true : triggerEvent;
            updateEvents = !isDefinedBoolean( updateEvents ) ? true : updateEvents;

            var holidaysLength = _options.holidays.length,
                holidaysRemaining = [];

            for ( var holidayIndex = 0; holidayIndex < holidaysLength; holidayIndex++ ) {
                var holiday = _options.holidays[ holidayIndex ],
                    holidayText = getString( holiday.title, "" );

                if ( holidayNames.indexOf( holidayText ) === -1 ) {
                    holidaysRemaining.push( holiday );
                }
            }

            _options.holidays = holidaysRemaining;

            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onOptionsUpdated", _options );
            }

            if ( updateEvents ) {
                build( _currentDate, true );
            }
        }
    };

    function buildDefaultOptions( newOptions ) {
        _options = getOptions( newOptions );

        if ( !isDefinedBoolean( _options.showDayNumberOrdinals ) ) {
            _options.showDayNumberOrdinals = true;
        }

        if ( !isDefinedBoolean( _options.dragAndDropForEventsEnabled ) ) {
            _options.dragAndDropForEventsEnabled = true;
        }

        if ( !isDefinedNumber( _options.maximumEventsPerDayDisplay ) ) {
            _options.maximumEventsPerDayDisplay = 3;
        }

        if ( !isDefinedNumber( _options.extraSelectableYearsAhead ) ) {
            _options.extraSelectableYearsAhead = 51;
        }

        if ( !isDefinedBoolean( _options.exportEventsEnabled ) ) {
            _options.exportEventsEnabled = true;
        }

        if ( !isDefinedBoolean( _options.manualEditingEnabled ) ) {
            _options.manualEditingEnabled = true;
        }

        if ( !isDefinedBoolean( _options.showTimesInMainCalendarEvents ) ) {
            _options.showTimesInMainCalendarEvents = false;
        }

        if ( !isDefinedNumber( _options.autoRefreshTimerDelay ) ) {
            _options.autoRefreshTimerDelay = 30000;
        }

        if ( !isDefinedBoolean( _options.fullScreenModeEnabled ) ) {
            _options.fullScreenModeEnabled = true;
        }

        if ( !isDefinedNumber( _options.eventTooltipDelay ) ) {
            _options.eventTooltipDelay = 1000;
        }

        if ( !isDefinedNumber( _options.minimumDayHeight ) ) {
            _options.minimumDayHeight = 0;
        }

        if ( !isDefinedArray( _options.holidays ) ) {
            _options.holidays = getStandardHolidays();
        }

        if ( !isDefinedString( _options.organizerName ) ) {
            _options.organizerName = "";
        }
        
        if ( !isDefinedString( _options.organizerEmailAddress ) ) {
            _options.organizerEmailAddress = "";
        }

        if ( !isDefinedNumber( _options.spacing ) ) {
            _options.spacing = 10;
        }

        if ( !isDefinedBoolean( _options.showAllDayEventDetailsInFullDayView ) ) {
            _options.showAllDayEventDetailsInFullDayView = false;
        }

        if ( !isDefinedBoolean( _options.showWeekNumbersInTitles ) ) {
            _options.showWeekNumbersInTitles = false;
        }

        if ( !isDefinedBoolean( _options.showTimelineArrowOnFullDayView ) ) {
            _options.showTimelineArrowOnFullDayView = true;
        }

        if ( !isDefinedNumber( _options.maximumEventTitleLength ) ) {
            _options.maximumEventTitleLength = 0;
        }

        if ( !isDefinedNumber( _options.maximumEventDescriptionLength ) ) {
            _options.maximumEventDescriptionLength = 0;
        }

        if ( !isDefinedNumber( _options.maximumEventLocationLength ) ) {
            _options.maximumEventLocationLength = 0;
        }

        if ( !isDefinedNumber( _options.maximumEventGroupLength ) ) {
            _options.maximumEventGroupLength = 0;
        }

        if ( !isDefinedBoolean( _options.eventNotificationsEnabled ) ) {
            _options.eventNotificationsEnabled = false;
        }

        if ( !isDefinedBoolean( _options.showPreviousNextMonthNamesInMainDisplay ) ) {
            _options.showPreviousNextMonthNamesInMainDisplay = true;
        }

        if ( !isDefinedBoolean( _options.showDayNamesInMainDisplay ) ) {
            _options.showDayNamesInMainDisplay = true;
        }

        if ( !isDefinedBoolean( _options.tooltipsEnabled ) ) {
            _options.tooltipsEnabled = true;
        }

        if ( !isDefinedBoolean( _options.useOnlyDotEventsForMainDisplay ) ) {
            _options.useOnlyDotEventsForMainDisplay = false;
        }

        if ( isInvalidOptionArray( _options.visibleDays ) ) {
            _options.visibleDays = [ 0, 1, 2, 3, 4, 5, 6 ];
        }

        if ( !isDefinedBoolean( _options.allowEventScrollingOnMainDisplay ) ) {
            _options.allowEventScrollingOnMainDisplay = false;

            if ( _options.allowEventScrollingOnMainDisplay ) {
                _options.maximumEventsPerDayDisplay = 0;
            }
        }

        if ( !isDefinedString( _options.urlWindowTarget ) ) {
            _options.urlWindowTarget = "_blank";
        }

        if ( !isDefinedString( _options.defaultEventBackgroundColor ) ) {
            _options.defaultEventBackgroundColor = "#484848";
        }

        if ( !isDefinedString( _options.defaultEventTextColor ) ) {
            _options.defaultEventTextColor = "#F5F5F5";
        }

        if ( !isDefinedString( _options.defaultEventBorderColor ) ) {
            _options.defaultEventBorderColor = "#282828";
        }

        if ( !isDefinedBoolean( _options.showExtraToolbarButtons ) ) {
            _options.showExtraToolbarButtons = true;
        }

        if ( !isDefinedBoolean( _options.showEmptyDaysInWeekView ) ) {
            _options.showEmptyDaysInWeekView = true;
        }

        if ( !isDefinedBoolean( _options.hideEventsWithoutGroupAssigned ) ) {
            _options.hideEventsWithoutGroupAssigned = false;
        }

        if ( !isDefinedBoolean( _options.showHolidays ) ) {
            _options.showHolidays = true;
        }

        if ( !isDefinedBoolean( _options.useTemplateWhenAddingNewEvent ) ) {
            _options.useTemplateWhenAddingNewEvent = true;
        }

        if ( !isDefinedBoolean( _options.useEscapeKeyToExitFullScreenMode ) ) {
            _options.useEscapeKeyToExitFullScreenMode = true;
        }

        if ( !isDefinedDate( _options.minimumDatePickerDate ) ) {
            _options.minimumDatePickerDate = null;
        }

        if ( !isDefinedDate( _options.maximumDatePickerDate ) ) {
            _options.maximumDatePickerDate = null;
        }

        if ( !isDefinedBoolean( _options.allowHtmlInDisplay ) ) {
            _options.allowHtmlInDisplay = false;
        }

        if ( !isDefinedString( _options.datePickerSelectedDateFormat ) ) {
            _options.datePickerSelectedDateFormat = "{d}{o} {mmm} {yyyy}";
        }

        if ( isInvalidOptionArray( _options.weekendDays, 0 ) ) {
            _options.weekendDays = [ 0, 6 ];
        }

        setTranslationStringOptions();
        checkForBrowserNotificationsPermission();
    }

    function buildDefaultSearchOptions( newSearchOptions ) {
        _optionsForSearch = getOptions( newSearchOptions );

        if ( !isDefinedString( _optionsForSearch.lastSearchText ) ) {
            _optionsForSearch.lastSearchText = "";
        }

        if ( !isDefinedBoolean( _optionsForSearch.not ) ) {
            _optionsForSearch.not = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.matchCase ) ) {
            _optionsForSearch.matchCase = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.showAdvanced ) ) {
            _optionsForSearch.showAdvanced = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.searchTitle ) ) {
            _optionsForSearch.searchTitle = true;
        }

        if ( !isDefinedBoolean( _optionsForSearch.searchLocation ) ) {
            _optionsForSearch.searchLocation = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.searchDescription ) ) {
            _optionsForSearch.searchDescription = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.searchGroup ) ) {
            _optionsForSearch.searchGroup = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.searchUrl ) ) {
            _optionsForSearch.searchUrl = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.startsWith ) ) {
            _optionsForSearch.startsWith = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.endsWith ) ) {
            _optionsForSearch.endsWith = false;
        }

        if ( !isDefinedBoolean( _optionsForSearch.contains ) ) {
            _optionsForSearch.contains = true;
        }

        if ( !isDefinedNumber( _optionsForSearch.left ) ) {
            _optionsForSearch.left = null;
        }

        if ( !isDefinedNumber( _optionsForSearch.top ) ) {
            _optionsForSearch.top = null;
        }
    }

    function setTranslationStringOptions() {
        if ( !isDefinedString( _options.previousMonthTooltipText ) ) {
            _options.previousMonthTooltipText = "Previous Month";
        }

        if ( !isDefinedString( _options.nextMonthTooltipText ) ) {
            _options.nextMonthTooltipText = "Next Month";
        }

        if ( !isDefinedString( _options.previousDayTooltipText ) ) {
            _options.previousDayTooltipText = "Previous Day";
        }

        if ( !isDefinedString( _options.nextDayTooltipText ) ) {
            _options.nextDayTooltipText = "Next Day";
        }

        if ( !isDefinedString( _options.previousWeekTooltipText ) ) {
            _options.previousWeekTooltipText = "Previous Week";
        }

        if ( !isDefinedString( _options.nextWeekTooltipText ) ) {
            _options.nextWeekTooltipText = "Next Week";
        }

        if ( !isDefinedString( _options.addEventTooltipText ) ) {
            _options.addEventTooltipText = "Add Event";
        }

        if ( !isDefinedString( _options.closeTooltipText ) ) {
            _options.closeTooltipText = "Close";
        }

        if ( !isDefinedString( _options.exportEventsTooltipText ) ) {
            _options.exportEventsTooltipText = "Export Events";
        }

        if ( !isDefinedString( _options.todayTooltipText ) ) {
            _options.todayTooltipText = "Today";
        }

        if ( !isDefinedString( _options.refreshTooltipText ) ) {
            _options.refreshTooltipText = "Refresh";
        }

        if ( !isDefinedString( _options.searchTooltipText ) ) {
            _options.searchTooltipText = "Search";
        }

        if ( !isDefinedString( _options.expandDayTooltipText ) ) {
            _options.expandDayTooltipText = "Expand Day";
        }

        if ( !isDefinedString( _options.listAllEventsTooltipText ) ) {
            _options.listAllEventsTooltipText = "View All Events";
        }

        if ( !isDefinedString( _options.listWeekEventsTooltipText ) ) {
            _options.listWeekEventsTooltipText = "View Current Week Events";
        }

        if ( isInvalidOptionArray( _options.dayHeaderNames, 7 ) ) {
            _options.dayHeaderNames = [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ];
        }

        if ( isInvalidOptionArray( _options.dayNames, 7 ) ) {
            _options.dayNames = [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ];
        }

        if ( isInvalidOptionArray( _options.monthNames, 12 ) ) {
            _options.monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
        }

        if ( !isDefinedString( _options.fromText ) ) {
            _options.fromText = "From:";
        }

        if ( !isDefinedString( _options.toText ) ) {
            _options.toText = "To:";
        }

        if ( !isDefinedString( _options.isAllDayText ) ) {
            _options.isAllDayText = "Is All-Day";
        }

        if ( !isDefinedString( _options.titleText ) ) {
            _options.titleText = "Title:";
        }

        if ( !isDefinedString( _options.descriptionText ) ) {
            _options.descriptionText = "Description:";
        }

        if ( !isDefinedString( _options.locationText ) ) {
            _options.locationText = "Location:";
        }

        if ( !isDefinedString( _options.addText ) ) {
            _options.addText = "Add";
        }

        if ( !isDefinedString( _options.updateText ) ) {
            _options.updateText = "Update";
        }

        if ( !isDefinedString( _options.cancelText ) ) {
            _options.cancelText = "Cancel";
        }

        if ( !isDefinedString( _options.removeEventText ) ) {
            _options.removeEventText = "Remove";
        }

        if ( !isDefinedString( _options.addEventTitle ) ) {
            _options.addEventTitle = "Add Event";
        }

        if ( !isDefinedString( _options.editEventTitle ) ) {
            _options.editEventTitle = "Edit Event";
        }

        if ( !isDefinedString( _options.exportStartFilename ) ) {
            _options.exportStartFilename = "exported_events_";
        }

        if ( !isDefinedString( _options.fromTimeErrorMessage ) ) {
            _options.fromTimeErrorMessage = "Please select a valid 'From' time.";
        }

        if ( !isDefinedString( _options.toTimeErrorMessage ) ) {
            _options.toTimeErrorMessage = "Please select a valid 'To' time.";
        }

        if ( !isDefinedString( _options.toSmallerThanFromErrorMessage ) ) {
            _options.toSmallerThanFromErrorMessage = "Please select a 'To' date that is larger than the 'From' date.";
        }

        if ( !isDefinedString( _options.titleErrorMessage ) ) {
            _options.titleErrorMessage = "Please enter a value in the 'Title' field (no empty space).";
        }

        if ( !isDefinedString( _options.stText ) ) {
            _options.stText = "st";
        }

        if ( !isDefinedString( _options.ndText ) ) {
            _options.ndText = "nd";
        }

        if ( !isDefinedString( _options.rdText ) ) {
            _options.rdText = "rd";
        }

        if ( !isDefinedString( _options.thText ) ) {
            _options.thText = "th";
        }

        if ( !isDefinedString( _options.yesText ) ) {
            _options.yesText = "Yes";
        }

        if ( !isDefinedString( _options.noText ) ) {
            _options.noText = "No";
        }

        if ( !isDefinedString( _options.allDayText ) ) {
            _options.allDayText = "All-Day";
        }

        if ( !isDefinedString( _options.allEventsText ) ) {
            _options.allEventsText = "All Events";
        }

        if ( !isDefinedString( _options.toTimeText ) ) {
            _options.toTimeText = "to";
        }
        
        if ( !isDefinedString( _options.confirmEventRemoveTitle ) ) {
            _options.confirmEventRemoveTitle = "Confirm Event Removal";
        }
        
        if ( !isDefinedString( _options.confirmEventRemoveMessage ) ) {
            _options.confirmEventRemoveMessage = "Removing this event cannot be undone.  Do you want to continue?";
        }
        
        if ( !isDefinedString( _options.okText ) ) {
            _options.okText = "OK";
        }
        
        if ( !isDefinedString( _options.selectExportTypeTitle ) ) {
            _options.selectExportTypeTitle = "Select Export Type";
        }
        
        if ( !isDefinedString( _options.selectColorsText ) ) {
            _options.selectColorsText = "Select Colors";
        }
        
        if ( !isDefinedString( _options.backgroundColorText ) ) {
            _options.backgroundColorText = "Background Color:";
        }
        
        if ( !isDefinedString( _options.textColorText ) ) {
            _options.textColorText = "Text Color:";
        }
        
        if ( !isDefinedString( _options.borderColorText ) ) {
            _options.borderColorText = "Border Color:";
        }
        
        if ( !isDefinedString( _options.searchEventsTitle ) ) {
            _options.searchEventsTitle = "Search Events";
        }
        
        if ( !isDefinedString( _options.previousText ) ) {
            _options.previousText = "Previous";
        }
        
        if ( !isDefinedString( _options.nextText ) ) {
            _options.nextText = "Next";
        }
        
        if ( !isDefinedString( _options.matchCaseText ) ) {
            _options.matchCaseText = "Match Case";
        }
        
        if ( !isDefinedString( _options.repeatsText ) ) {
            _options.repeatsText = "Repeats:";
        }
        
        if ( !isDefinedString( _options.repeatDaysToExcludeText ) ) {
            _options.repeatDaysToExcludeText = "Repeat Days To Exclude:";
        }
        
        if ( !isDefinedString( _options.daysToExcludeText ) ) {
            _options.daysToExcludeText = "Days To Exclude:";
        }
        
        if ( !isDefinedString( _options.seriesIgnoreDatesText ) ) {
            _options.seriesIgnoreDatesText = "Series Ignore Dates:";
        }
        
        if ( !isDefinedString( _options.repeatsNever ) ) {
            _options.repeatsNever = "Never";
        }
        
        if ( !isDefinedString( _options.repeatsEveryDayText ) ) {
            _options.repeatsEveryDayText = "Every Day";
        }
        
        if ( !isDefinedString( _options.repeatsEveryWeekText ) ) {
            _options.repeatsEveryWeekText = "Every Week";
        }

        if ( !isDefinedString( _options.repeatsEvery2WeeksText ) ) {
            _options.repeatsEvery2WeeksText = "Every 2 Weeks";
        }
        
        if ( !isDefinedString( _options.repeatsEveryMonthText ) ) {
            _options.repeatsEveryMonthText = "Every Month";
        }
        
        if ( !isDefinedString( _options.repeatsEveryYearText ) ) {
            _options.repeatsEveryYearText = "Every Year";
        }

        if ( !isDefinedString( _options.repeatsCustomText ) ) {
            _options.repeatsCustomText = "Custom:";
        }
        
        if ( !isDefinedString( _options.repeatOptionsTitle ) ) {
            _options.repeatOptionsTitle = "Repeat Options";
        }
        
        if ( !isDefinedString( _options.moreText ) ) {
            _options.moreText = "More";
        }
        
        if ( !isDefinedString( _options.includeText ) ) {
            _options.includeText = "Include:";
        }
        
        if ( !isDefinedString( _options.minimizedTooltipText ) ) {
            _options.minimizedTooltipText = "Minimize";
        }
        
        if ( !isDefinedString( _options.restoreTooltipText ) ) {
            _options.restoreTooltipText = "Restore";
        }
        
        if ( !isDefinedString( _options.removeAllEventsInSeriesText ) ) {
            _options.removeAllEventsInSeriesText = "Remove All Events In Series";
        }
        
        if ( !isDefinedString( _options.createdText ) ) {
            _options.createdText = "Created:";
        }
        
        if ( !isDefinedString( _options.organizerNameText ) ) {
            _options.organizerNameText = "Organizer:";
        }
        
        if ( !isDefinedString( _options.organizerEmailAddressText ) ) {
            _options.organizerEmailAddressText = "Organizer Email:";
        }
        
        if ( !isDefinedString( _options.enableFullScreenTooltipText ) ) {
            _options.enableFullScreenTooltipText = "Turn On Full-Screen Mode";
        }
        
        if ( !isDefinedString( _options.disableFullScreenTooltipText ) ) {
            _options.disableFullScreenTooltipText = "Turn Off Full-Screen Mode";
        }
        
        if ( !isDefinedString( _options.idText ) ) {
            _options.idText = "ID:";
        }
        
        if ( !isDefinedString( _options.expandMonthTooltipText ) ) {
            _options.expandMonthTooltipText = "Expand Month";
        }
        
        if ( !isDefinedString( _options.repeatEndsText ) ) {
            _options.repeatEndsText = "Repeat Ends:";
        }
        
        if ( !isDefinedString( _options.noEventsAvailableText ) ) {
            _options.noEventsAvailableText = "No events available.";
        }
        
        if ( !isDefinedString( _options.viewWeekEventsText ) ) {
            _options.viewWeekEventsText = "View Week Events";
        }
        
        if ( !isDefinedString( _options.noEventsAvailableFullText ) ) {
            _options.noEventsAvailableFullText = "There are no events available to view.";
        }
        
        if ( !isDefinedString( _options.clickText ) ) {
            _options.clickText = "Click";
        }
        
        if ( !isDefinedString( _options.hereText ) ) {
            _options.hereText = "here";
        }
        
        if ( !isDefinedString( _options.toAddANewEventText ) ) {
            _options.toAddANewEventText = "to add a new event.";
        }
        
        if ( !isDefinedString( _options.weekText ) ) {
            _options.weekText = "Week";
        }
        
        if ( !isDefinedString( _options.groupText ) ) {
            _options.groupText = "Group:";
        }
        
        if ( !isDefinedString( _options.configurationTooltipText ) ) {
            _options.configurationTooltipText = "Configuration";
        }
        
        if ( !isDefinedString( _options.configurationTitleText ) ) {
            _options.configurationTitleText = "Configuration";
        }
        
        if ( !isDefinedString( _options.groupsTabText ) ) {
            _options.groupsTabText = "Groups";
        }
        
        if ( !isDefinedString( _options.eventNotificationTitle ) ) {
            _options.eventNotificationTitle = "Calendar.js";
        }
        
        if ( !isDefinedString( _options.eventNotificationBody ) ) {
            _options.eventNotificationBody = "The event '{0}' has started.";
        }

        if ( !isDefinedString( _options.optionsText ) ) {
            _options.optionsText = "Options:";
        }

        if ( !isDefinedString( _options.startsWithText ) ) {
            _options.startsWithText = "Starts With";
        }

        if ( !isDefinedString( _options.endsWithText ) ) {
            _options.endsWithText = "Ends With";
        }

        if ( !isDefinedString( _options.containsText ) ) {
            _options.containsText = "Contains";
        }

        if ( !isDefinedString( _options.displayTabText ) ) {
            _options.displayTabText = "Display";
        }
        
        if ( !isDefinedString( _options.enableAutoRefreshForEventsText ) ) {
            _options.enableAutoRefreshForEventsText = "Enable auto-refresh for events";
        }

        if ( !isDefinedString( _options.enableBrowserNotificationsText ) ) {
            _options.enableBrowserNotificationsText = "Enable browser notifications";
        }

        if ( !isDefinedString( _options.enableTooltipsText ) ) {
            _options.enableTooltipsText = "Enable tooltips";
        }

        if ( !isDefinedString( _options.dayText ) ) {
            _options.dayText = "day";
        }

        if ( !isDefinedString( _options.daysText ) ) {
            _options.daysText = "days";
        }

        if ( !isDefinedString( _options.hourText ) ) {
            _options.hourText = "hour";
        }

        if ( !isDefinedString( _options.hoursText ) ) {
            _options.hoursText = "hours";
        }

        if ( !isDefinedString( _options.minuteText ) ) {
            _options.minuteText = "minute";
        }

        if ( !isDefinedString( _options.minutesText ) ) {
            _options.minutesText = "minutes";
        }

        if ( !isDefinedString( _options.enableDragAndDropForEventText ) ) {
            _options.enableDragAndDropForEventText = "Enable drag & drop for events";
        }

        if ( !isDefinedString( _options.organizerTabText ) ) {
            _options.organizerTabText = "Organizer";
        }

        if ( !isDefinedString( _options.removeEventsTooltipText ) ) {
            _options.removeEventsTooltipText = "Remove Events";
        }

        if ( !isDefinedString( _options.confirmEventsRemoveTitle ) ) {
            _options.confirmEventsRemoveTitle = "Confirm Events Removal";
        }
        
        if ( !isDefinedString( _options.confirmEventsRemoveMessage ) ) {
            _options.confirmEventsRemoveMessage = "Removing these non-repeating events cannot be undone.  Do you want to continue?";
        }

        if ( !isDefinedString( _options.eventText ) ) {
            _options.eventText = "Event";
        }

        if ( !isDefinedString( _options.optionalText ) ) {
            _options.optionalText = "Optional";
        }

        if ( !isDefinedString( _options.urlText ) ) {
            _options.urlText = "Url:";
        }

        if ( !isDefinedString( _options.openUrlText ) ) {
            _options.openUrlText = "Open Url";
        }

        if ( !isDefinedString( _options.visibleDaysTabText ) ) {
            _options.visibleDaysTabText = "Visible Days";
        }

        if ( !isDefinedString( _options.enableDayNameHeadersInMainDisplayText ) ) {
            _options.enableDayNameHeadersInMainDisplayText = "Enable day name headers in the main display";
        }

        if ( !isDefinedString( _options.thisWeekTooltipText ) ) {
            _options.thisWeekTooltipText = "This Week";
        }

        if ( !isDefinedString( _options.dailyText ) ) {
            _options.dailyText = "Daily";
        }

        if ( !isDefinedString( _options.weeklyText ) ) {
            _options.weeklyText = "Weekly";
        }

        if ( !isDefinedString( _options.monthlyText ) ) {
            _options.monthlyText = "Monthly";
        }

        if ( !isDefinedString( _options.yearlyText ) ) {
            _options.yearlyText = "Yearly";
        }

        if ( !isDefinedString( _options.repeatsByCustomSettingsText ) ) {
            _options.repeatsByCustomSettingsText = "By Custom Settings";
        }

        if ( !isDefinedString( _options.lastUpdatedText ) ) {
            _options.lastUpdatedText = "Last Updated:";
        }

        if ( !isDefinedString( _options.advancedText ) ) {
            _options.advancedText = "Advanced";
        }

        if ( !isDefinedString( _options.copyText ) ) {
            _options.copyText = "Copy";
        }

        if ( !isDefinedString( _options.pasteText ) ) {
            _options.pasteText = "Paste";
        }

        if ( !isDefinedString( _options.duplicateText ) ) {
            _options.duplicateText = "Duplicate";
        }

        if ( !isDefinedString( _options.showAlertsText ) ) {
            _options.showAlertsText = "Show Alerts";
        }

        if ( !isDefinedString( _options.selectDatePlaceholderText ) ) {
            _options.selectDatePlaceholderText = "Select date...";
        }

        if ( !isDefinedString( _options.hideDayText ) ) {
            _options.hideDayText = "Hide Day";
        }

        if ( !isDefinedString( _options.notSearchText ) ) {
            _options.notSearchText = "Not (opposite)";
        }

        if ( !isDefinedString( _options.showEmptyDaysInWeekViewText ) ) {
            _options.showEmptyDaysInWeekViewText = "Show empty days in the week view";
        }

        if ( !isDefinedString( _options.showHolidaysInTheDisplaysText ) ) {
            _options.showHolidaysInTheDisplaysText = "Show holidays in the main display and title bars";
        }

        if ( !isDefinedString( _options.newEventDefaultTitle ) ) {
            _options.newEventDefaultTitle = "* New Event";
        }

        if ( !isDefinedString( _options.urlErrorMessage ) ) {
            _options.urlErrorMessage = "Please enter a valid Url in the 'Url' field (or leave blank).";
        }

        if ( !isDefinedString( _options.dropDownMenuSymbol ) ) {
            _options.dropDownMenuSymbol = "▾";
        }

        if ( !isDefinedString( _options.searchTextBoxPlaceholder ) ) {
            _options.searchTextBoxPlaceholder = "Search title, description, etc...";
        }
    }

    function isInvalidOptionArray( array, minimumLength ) {
        minimumLength = isDefinedNumber( minimumLength ) ? minimumLength : 1;

        return !isDefinedArray( array ) || array.length < minimumLength;
    }

    function getOptions( newOptions ) {
        if ( !isDefined( newOptions ) || typeof newOptions !== "object" ) {
            newOptions = {};
        }

        return newOptions;
    }

    function getStandardHolidays() {
        return [
            {
                day: 1,
                month: 1,
                title: "New Year's Day"
            },
            {
                day: 14,
                month: 2,
                title: "Valentine's Day"
            },
            {
                day: 1,
                month: 4,
                title: "April Fools' Day"
            },
            {
                day: 22,
                month: 4,
                title: "Earth Day"
            },
            {
                day: 31,
                month: 10,
                title: "Halloween"
            },
            {
                day: 11,
                month: 11,
                title: "Remembrance Day"
            },
            {
                day: 24,
                month: 12,
                title: "Christmas Eve"
            },
            {
                day: 25,
                month: 12,
                title: "Christmas Day"
            },
            {
                day: 26,
                month: 12,
                title: "Boxing Day"
            },
            {
                day: 31,
                month: 12,
                title: "New Year's Eve"
            }
        ];
    }

    function triggerOptionsEvent( name ) {
        if ( _options !== null && isDefinedFunction( _options[ name ] ) ) {
            _options[ name ]();
        }
    }

    function triggerOptionsEventWithData( name, data ) {
        if ( _options !== null && isDefinedFunction( _options[ name ] ) ) {
            _options[ name ]( data );
        }
    }

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Initialize Calendar.js
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    ( function ( documentObject, windowObject ) {
        _document = documentObject;
        _window = windowObject;
        _elementID = id;

        if ( isDefinedString( _elementID ) ) {
            buildDefaultOptions( options );
            buildDefaultSearchOptions( searchOptions );
            build( startDateTime, true );
    
            if ( isDefinedBoolean( _options.openInFullScreenMode ) && _options.openInFullScreenMode && !_datePickerModeEnabled ) {
                turnOnFullScreenMode( true );
            }
        }

    } ) ( document, window );
}