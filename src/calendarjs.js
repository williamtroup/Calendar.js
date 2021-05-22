/*
 * Calendar.js Library v0.9.7
 *
 * Copyright 2021 Bunoon
 * Released under the GNU AGPLv3 license
 */

 
/**
 * Day Event.
 * 
 * This is the object format that is used to store the details about a day event.
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
 * @property    {number}    repeatEvery                                 States how often the event should repeat (0 = Never, 1 = Every Day, 2 = Every Week, 3 = Every Month, 4 = Every Year).
 * @property    {Object[]}  repeatEveryExcludeDays                      States the days that should be excluded when an event is repeated.
 * @property    {Object[]}  seriesIgnoreDates                           States the dates (string format) that should be ignored when an event is repeated.
 * @property    {Object}    created                                     The date that the event was created.
 * @property    {string}    organizerName                               The name of the organizer.
 * @property    {string}    organizerEmailAddress                       The email address of the organizer.
 * @property    {Object}    repeatEnds                                  The date when a repeating series should end.
 * @property    {string}    group                                       The name of the group the event belongs to.
 */


/**
 * Holiday.
 * 
 * This is the object format that is used to display a holiday.
 *
 * @property    {number}    day                                         The day that the holiday occurs.
 * @property    {number}    month                                       The month that the holiday occurs.
 * @property    {string}    title                                       The title for the holiday (i.e. Christmas Day).
 */


/**
 * Options - Events.
 * 
 * These are the properties that store the events that should be fired when various actions are triggered.
 *
 * @property    {Object}    onPreviousMonth                             Specifies an event that will be triggered when the "Previous Month" button is pressed.
 * @property    {Object}    onNextMonth                                 Specifies an event that will be triggered when the "Next Month" button is pressed.
 * @property    {Object}    onPreviousYear                              Specifies an event that will be triggered when moving to the previous year.
 * @property    {Object}    onNextYear                                  Specifies an event that will be triggered when moving to the next year.
 * @property    {Object}    onToday                                     Specifies an event that will be triggered when the "Today" button is pressed.
 * @property    {Object}    onEventAdded                                Specifies an event that will be triggered when an event is added (passes the event to the function).
 * @property    {Object}    onEventUpdated                              Specifies an event that will be triggered when an event is updated (passes the event to the function).
 * @property    {Object}    onEventRemoved                              Specifies an event that will be triggered when an event is removed (passes the event to the function).
 * @property    {Object}    onEventsAdded                               Specifies an event that will be triggered when events are added (passes the events to the function).
 * @property    {Object}    onEventsCleared                             Specifies an event that will be triggered when the events are cleared.
 * @property    {Object}    onEventsExported                            Specifies an event that will be triggered when the "Export Events" button is pressed.
 * @property    {Object}    onSetDate                                   Specifies an event that will be triggered when the date on the main display is set externally.
 * @property    {Object}    onEventsSet                                 Specifies an event that will be triggered when events are set and the originals are cleared (passes the events to the function).
 * @property    {Object}    onGroupsCleared                             Specifies an event that will be triggered when the event groups are cleared.
 * @property    {Object}    onEventsUpdated                             Specifies an event that will be triggered when events are updated (passes the events to the function).
 * @property    {Object}    onOptionsUpdated                            Specifies an event that will be triggered when the options are updated (passes the options to the function).
 */


/**
 * Options - Translatable Strings.
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
 * @property    {Object[]}  dayHeaderNames                              The names to use for the day headers (defaults to '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]').
 * @property    {Object[]}  dayNames                                    The full names (defaults to '[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]').
 * @property    {Object[]}  monthNames                                  The names to use for months (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]').
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
 */


/**
 * Options.
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
 * @property    {boolean}   fullScreenModeEnabled                       States if double click on the main title bar activates full screen mode (defaults to true).
 * @property    {number}    eventTooltipDelay                           The amount of time to wait until an event tooltip is shown (defaults to 1000 milliseconds).
 * @property    {number}    minimumDayHeight                            States the height the main calendar days should used (defaults to 0 - auto).
 * @property    {Object[]}  holidays                                    The holidays that should be shown for specific days/months (refer to "Holiday" documentation for properties).
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
 * @property    {Object[]}  visibleDays                                 States the day numbers that should be visible (Outside listing all events.  Defaults to [ 0, 1, 2, 3, 4, 5, 6 ], Mon=0, Sun=6).
 */


/**
 * calendarJs().
 * 
 * The main Calendar.js class.
 * 
 * @class
 * 
 * @param       {string}    id                                          The ID of the element that should be used to display the calendar.
 * @param       {Object}    options                                     All the configurable options that should be used (refer to "Options" documentation for properties).
 * @param       {Object}    startDateTime                               The date that the calendar should start from by default (defaults to today).
 */
function calendarJs( id, options, startDateTime ) {
    var _options = {},
        _this = this,
        _currentDate = null,
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
        _timer_RefreshMainDisplay = null,
        _eventDetails_Dragged_DateFrom = null,
        _eventDetails_Dragged = null,
        _cachedStyles = null,
        _isFullScreenModeActivated = false,
        _isDateToday = false,
        _const_Repeat_Never = 0,
        _const_Repeat_EveryDay = 1,
        _const_Repeat_EveryWeek = 2,
        _const_Repeat_Every2Weeks = 3,
        _const_Repeat_EveryMonth = 4,
        _const_Repeat_EveryYear = 5,
        _elementID_Day = "day-",
        _elementID_DayElement = "calendar-day-",
        _elementID_YearSelected = "year-selected-",
        _elementClassName_Row = "row",
        _elementClassName_Cell = "cell",
        _minutesInDay = 1440,
        _element_Calendar = null,
        _element_Calendar_AllVisibleEvents = [],
        _element_HeaderDateDisplay = null,
        _element_HeaderDateDisplay_Text = null,
        _element_HeaderDateDisplay_YearSelector = null,
        _element_HeaderDateDisplay_YearSelector_Contents = null,
        _element_HeaderDateDisplay_ExportEventsButton = null,
        _element_HeaderDateDisplay_FullScreenButton = null,
        _element_DisabledBackground = null,
        _element_EventEditorDialog = null,
        _element_EventEditorDialog_DisabledArea = null,
        _element_EventEditorDialog_TitleBar = null,
        _element_EventEditorDialog_DateFrom = null,
        _element_EventEditorDialog_TimeFrom = null,
        _element_EventEditorDialog_DateTo = null,
        _element_EventEditorDialog_TimeTo = null,
        _element_EventEditorDialog_IsAllDay = null,
        _element_EventEditorDialog_Title = null,
        _element_EventEditorDialog_Description = null,
        _element_EventEditorDialog_Location = null,
        _element_EventEditorDialog_Group = null,
        _element_EventEditorDialog_RepeatEvery_Never = null,
        _element_EventEditorDialog_RepeatEvery_EveryDay = null,
        _element_EventEditorDialog_RepeatEvery_EveryWeek = null,
        _element_EventEditorDialog_RepeatEvery_Every2Weeks = null,
        _element_EventEditorDialog_RepeatEvery_EveryMonth = null,
        _element_EventEditorDialog_RepeatEvery_EveryYear = null,
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton = null,
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
        _element_FullDayView_TimeArrow = null,
        _element_ListAllEventsView = null,
        _element_ListAllEventsView_ExportEventsButton = null,
        _element_ListAllEventsView_FullScreenButton = null,
        _element_ListAllEventsView_Contents = null,
        _element_ListAllEventsView_EventsShown = [],
        _element_ListAllWeekEventsView = null,
        _element_ListAllWeekEventsView_Title = null,
        _element_ListAllWeekEventsView_ExportEventsButton = null,
        _element_ListAllWeekEventsView_FullScreenButton = null,
        _element_ListAllWeekEventsView_Contents = null,
        _element_ListAllWeekEventsView_Contents_FullView = {},
        _element_ListAllWeekEventsView_Contents_FullView_Contents = {},
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
        _element_SelectExportTypeDialog_ExportEvents = null,
        _element_Tooltip = null,
        _element_Tooltip_Title = null,
        _element_Tooltip_Date = null,
        _element_Tooltip_TotalTime = null,
        _element_Tooltip_Repeats = null,
        _element_Tooltip_Description = null,
        _element_Tooltip_Location = null,
        _element_Tooltip_ShowTimer = null,
        _element_DropDownMenu_Day = null,
        _element_DropDownMenu_Day_DateSelected = null,
        _element_DropDownMenu_Event = null,
        _element_DropDownMenu_Event_EventDetails = null,
        _element_DropDownMenu_Event_FormattedDateSelected = null,
        _element_SearchDialog = null,
        _element_SearchDialog_MinimizedRestoreButton = null,
        _element_SearchDialog_Contents = null,
        _element_SearchDialog_For = null,
        _element_SearchDialog_MatchCase = null,
        _element_SearchDialog_Include_Title = null,
        _element_SearchDialog_Include_Location = null,
        _element_SearchDialog_Include_Description = null,
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
        _element_ConfigurationDialog_Display_EnableAutoRefresh = null,
        _element_ConfigurationDialog_Display_EnableBrowserNotifications = null,
        _element_ConfigurationDialog_Display_EnableTooltips = null,
        _element_ConfigurationDialog_Display_EnableDragAndDropForEvents = null,
        _element_ConfigurationDialog_Organizer = null,
        _element_ConfigurationDialog_Organizer_Name = null,
        _element_ConfigurationDialog_Organizer_Email = null;

    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build (layout, days, etc)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function build( newStartDateTime, fullRebuild ) {
        _currentDate = isDefined( newStartDateTime ) ? newStartDateTime : new Date();
        _currentDate.setDate( 1 );
        _currentDate.setHours( 0, 0, 0, 0 );
        _isDateToday = isDateTodaysMonthAndYear( _currentDate );

        fullRebuild = isDefined( fullRebuild ) ? fullRebuild : false;

        var firstDay = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), 1 ),
            startDay = firstDay.getDay(),
            totalDaysInMonth = getTotalDaysInMonth( _currentDate.getFullYear(), _currentDate.getMonth() );

        if ( startDay === 0 ) {
            startDay = 7;
        }

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

        _element_HeaderDateDisplay_Text.innerText = _options.monthNames[ _currentDate.getMonth() ] + ", " + _currentDate.getFullYear() + " ▾";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Getting Events
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
        _element_Calendar = getElementByID( _elementID );
        _element_Calendar.className = "calendar";
        _element_Calendar.innerHTML = "";
    }

    function buildDateHeader() {
        _element_HeaderDateDisplay = createElement( "div", "header-date" );
        _element_Calendar.appendChild( _element_HeaderDateDisplay );

        if ( _options.fullScreenModeEnabled ) {
            _element_HeaderDateDisplay.ondblclick = headerDoubleClick;
        }

        buildToolbarButton( _element_HeaderDateDisplay, "ib-arrow-left-full", _options.previousMonthTooltipText, moveBackMonth );
        buildToolbarButton( _element_HeaderDateDisplay, "ib-pin", _options.todayTooltipText, moveToday );
        buildToolbarButton( _element_HeaderDateDisplay, "ib-refresh", _options.refreshTooltipText, refreshViews );
        buildToolbarButton( _element_HeaderDateDisplay, "ib-search", _options.searchTooltipText, showSearchDialog );
        buildToolbarButton( _element_HeaderDateDisplay, "ib-octagon-hollow", _options.configurationTooltipText, showConfigurationDialog );
        buildToolbarButton( _element_HeaderDateDisplay, "ib-arrow-right-full", _options.nextMonthTooltipText, moveForwardMonth );

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

        var titleContainer = createElement( "div", "title-container" );
        _element_HeaderDateDisplay.appendChild( titleContainer );
        
        _element_HeaderDateDisplay_Text = createElement( "span" );
        _element_HeaderDateDisplay_Text.ondblclick = cancelBubble;
        titleContainer.appendChild( _element_HeaderDateDisplay_Text );

        buildYearSelectorDropDown( titleContainer );
    }

    function buildDayNamesHeader() {
        if ( _options.showDayNamesInMainDisplay ) {
            var headerRow = createElement( "div", _elementClassName_Row + " header-days" ),
                headerNamesLength = _options.dayHeaderNames.length;

            _element_Calendar.appendChild( headerRow );

            for ( var headerNameIndex = 0; headerNameIndex < headerNamesLength; headerNameIndex++ ) {
                if ( _options.visibleDays.indexOf( headerNameIndex ) > -1 ) {
                    var headerName = _options.dayHeaderNames[ headerNameIndex ],
                        header = createElement( "div", getCellName() );

                    header.innerText = headerName;
                    headerRow.appendChild( header );
                }
            }
        }
    }

    function buildDayRows() {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            var rowData = createElement( "div", _elementClassName_Row );
            _element_Calendar.appendChild( rowData );

            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                if ( _options.visibleDays.indexOf( columnDataIndex ) > -1 ) {
                    var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                        columnData = createElement( "div", getCellName() );

                    columnData.id = _elementID_DayElement + columnDataNumber;
                    rowData.appendChild( columnData );

                    if ( _options.minimumDayHeight > 0 ) {
                        columnData.style.height = _options.minimumDayHeight + "px";
                    }
                }
            }
        }
    }

    function getCellName() {
        return _elementClassName_Cell + " cell-" + _options.visibleDays.length;
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

    function turnOnFullScreenMode() {
        if ( !_isFullScreenModeActivated && _options.fullScreenModeEnabled ) {
            _cachedStyles = _element_Calendar.style.cssText;
            _isFullScreenModeActivated = true;
            _element_Calendar.className += " full-screen-view";
            _element_Calendar.removeAttribute( "style" );

            updateExpandButtons( "ib-arrow-contract-left-right", _options.disableFullScreenTooltipText );
        }
    }

    function turnOffFullScreenMode() {
        if ( _isFullScreenModeActivated && _options.fullScreenModeEnabled ) {
            _isFullScreenModeActivated = false;
            _element_Calendar.className = _element_Calendar.className.replace( " full-screen-view", "" );
            _element_Calendar.style.cssText = _cachedStyles;

            updateExpandButtons( "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText );
        }
    }

    function updateExpandButtons( className, tooltipText ) {
        _element_HeaderDateDisplay_FullScreenButton.className = className;
        _element_FullDayView_FullScreenButton.className = className;
        _element_ListAllEventsView_FullScreenButton.className = className;
        _element_ListAllWeekEventsView_FullScreenButton.className = className;

        addToolTip( _element_HeaderDateDisplay_FullScreenButton, tooltipText );
        addToolTip( _element_FullDayView_FullScreenButton, tooltipText );
        addToolTip( _element_ListAllEventsView_FullScreenButton, tooltipText );
        addToolTip( _element_ListAllWeekEventsView_FullScreenButton, tooltipText );
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
            moveDateForwardOneYear( date );
        }

        _element_HeaderDateDisplay_Text.onclick = showYearSelectorDropDownMenu;
    }

    function buildYearSelectorDropDownYear( actualYear ) {
        var year = createElement( "div" );
        year.className = "year";
        year.innerText = actualYear.toString();
        year.id = _elementID_YearSelected + actualYear.toString();
        _element_HeaderDateDisplay_YearSelector_Contents.appendChild( year );

        year.onclick = function() {
            _currentDate.setFullYear( actualYear );

            build( _currentDate );
            hideYearSelectorDropDown();
        };
    }

    function showYearSelectorDropDownMenu( e ) {
        if ( _element_HeaderDateDisplay_YearSelector.style.display !== "block" ) {
            hideAllDropDowns();
            cancelBubble( e );

            _element_HeaderDateDisplay_YearSelector.style.display = "block";

            var year = updateYearSelectorDropDownMenuColors();
            if ( year !== null ) {
                _element_HeaderDateDisplay_YearSelector_Contents.scrollTop = year.offsetTop - ( _element_HeaderDateDisplay_YearSelector.offsetHeight / 2 );
            } else {
                _element_HeaderDateDisplay_YearSelector_Contents.scrollTop = 0;
            }
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
            year.className += " current-year-selected";
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
            _document.addEventListener( "keydown", onWindowKeyDown );
            _window.addEventListener( "resize", hideAllDropDowns );
            _window.addEventListener( "resize", centerSearchDialog );

            _initializedDocumentEvents = true;
        }
    }

    function hideAllDropDowns() {
        hideDayDropDownMenu();
        hideEventDropDownMenu();
        hideYearSelectorDropDown();
        hideTooltip();
    }

    function onWindowKeyDown( e ) {
        if ( _isFullScreenModeActivated && isOnlyMainDisplayVisible() ) {
            if ( e.keyCode === 37 && isControlKey( e ) ) {
                e.preventDefault();
                moveBackYear();
            } else if ( e.keyCode === 39 && isControlKey( e ) ) {
                e.preventDefault();
                moveForwardYear();
            } else if ( e.keyCode === 70 && isControlKey( e ) ) {
                e.preventDefault();
                showSearchDialog();
            } else if ( e.keyCode === 27 ) {
                headerDoubleClick();
            } else if ( e.keyCode === 37 ) {
                moveBackMonth();
            } else if ( e.keyCode === 39 ) {
                moveForwardMonth();
            } else if ( e.keyCode === 40 ) {
                moveToday();
            } else if ( e.keyCode === 116 ) {
                refreshViews();
            }
        }
    }

    function isControlKey( e ) {
        return e.ctrlKey || e.metaKey;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Date/Time Validation & Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function doDatesMatch( date1, date2 ) {
        return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
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

    function toFormattedDate( date, inputType ) {
        var formatted = null;

        if ( isDefined( date ) ) {
            var day = ( "0" + date.getDate() ).slice( -2 ),
                month = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 );

            if ( inputType === "date" ) {
                formatted = date.getFullYear() + "-" + month + "-" + day;
            } else {
                formatted = day + "/" + month + "/" + date.getFullYear();
            }
        }

        return formatted;
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
        return date.getDay() === 6 || date.getDay() === 0;
    }

    function moveDateBackOneDay( date ) {
        date.setDate( date.getDate() - 1 );
    }

    function moveDateForwardOneDay( date ) {
        date.setDate( date.getDate() + 1 );
    }

    function moveDateBackOneWeek( date ) {
        date.setDate( date.getDate() - 7 );
    }

    function moveDateForwardOneWeek( date ) {
        date.setDate( date.getDate() + 7 );
    }

    function moveDateForwardTwoWeeks( date ) {
        date.setDate( date.getDate() + 14 );
    }

    function moveDateForwardOneMonth( date ) {
        date.setMonth( date.getMonth() + 1 );
    }

    function moveDateForwardOneYear( date ) {
        date.setFullYear( date.getFullYear() + 1 );
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
            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardOneDay );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardOneWeek );
                } else if ( repeatEvery === _const_Repeat_Every2Weeks ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardTwoWeeks );
                }  else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardOneMonth );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    buildRepeatedDayEvents( orderedEvent, moveDateForwardOneYear );
                }
            }
        }
    
        updateExportButtonsVisibleState( _element_Calendar_AllVisibleEvents.length );
        startAutoRefreshTimer();
    }

    function buildRepeatedDayEvents( orderedEvent, dateFunc ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays ),
            seriesIgnoreDates = getArray( orderedEvent.seriesIgnoreDates );

        while ( newFromDate < _largestDateInView ) {
            dateFunc( newFromDate );

            var formattedDate = toStorageFormattedDate( newFromDate ),
                repeatEnded = !( !isDefined( orderedEvent.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, orderedEvent.repeatEnds ) );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 && seriesIgnoreDates.indexOf( formattedDate ) === -1 && !repeatEnded ) {
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
                    moveDateForwardOneDay( nextDayDate );
    
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
            formattedDayDate = toStorageFormattedDate( dayDate ),
            seriesIgnoreDates = getArray( eventDetails.seriesIgnoreDates );

        if ( elementDay !== null && isEventVisible( eventDetails ) && seriesIgnoreDates.indexOf( formattedDayDate ) === -1  ) {
            checkEventForNotifications( dayDate, eventDetails );
            
            var eventClassName = getEventClassName(),
                events = elementDay.getElementsByClassName( eventClassName );

            if ( events.length < _options.maximumEventsPerDayDisplay || _options.maximumEventsPerDayDisplay <= 0 ) {
                var event = createElement( "div", eventClassName ),
                    eventTitle = eventDetails.title;

                if ( _options.showTimesInMainCalendarEvents && !eventDetails.isAllDay && eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                    eventTitle = getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) + ": " + eventTitle;
                }

                if ( !_options.useOnlyDotEventsForMainDisplay ) {
                    var repeatEvery = getNumber( eventDetails.repeatEvery );
                    if ( repeatEvery > _const_Repeat_Never ) {
                        var icon = createElement( "div", "ib-refresh-small" );
                        icon.style.borderColor = event.style.color;
                        event.appendChild( icon );
                    }

                    event.innerHTML += eventTitle;

                } else {
                    event.className += " event-circle";
                }
                
                elementDay.appendChild( event );

                makeEventDraggable( event, eventDetails, dayDate );
                setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, dayDate ) );

                if ( doDatesMatch( eventDetails.from, dayDate ) ) {
                    event.id = _elementID_Day + eventDetails.id;

                    if ( _element_SearchDialog_FocusedEventID === eventDetails.id ) {
                        event.className += " focused-event";
                    }
                }

                event.onmousemove = function( e ) {
                    showTooltip( e, eventDetails );
                };

                if ( _options.manualEditingEnabled ) {
                    var formattedDate = toStorageFormattedDate( dayDate );

                    event.oncontextmenu = function( e ) {
                        showEventDropDownMenu( e, eventDetails, formattedDate );
                    };
                }
    
                if ( _options.manualEditingEnabled ) {
                    event.onclick = function() {
                        showEventDialog( eventDetails );
                    };
                }

            } else {
                buildDayEventPlusText( elementDay, dayDate );
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
            plusXEventsText.innerText = "+1 " + _options.moreText;
            plusXEventsText.ondblclick = cancelBubble;
            elementDay.appendChild( plusXEventsText );

            plusXEventsText.onclick = function() {
                showFullDayView( showFullDayDay, true );
            };
        } else {

            var numberOfEvents = parseInt( plusXEventsText.getAttribute( "events" ) ) + 1;
            plusXEventsText.setAttribute( "events", numberOfEvents.toString() );
            plusXEventsText.innerText = "+" + numberOfEvents + " " + _options.moreText;
        }
    }

    function updateExportButtonsVisibleState( orderedEventsLength ) {
        if ( _options.exportEventsEnabled ) {
            if ( orderedEventsLength === 0 ) {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "none";
            } else {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "inline-block";
            }
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
            clearElementsByClassName( elementDay, getEventClassName() );
            clearElementsByClassName( elementDay, "plus-x-events" );
        }
    }

    function clearElementsByClassName( container, className ) {
        var elements = container.getElementsByClassName( className );

        while ( elements[ 0 ] ) {
            elements[ 0 ].parentNode.removeChild( elements[ 0 ] );
        }
    }

    function removeElementsClassName( container, className ) {
        var elements = container.getElementsByClassName( className ),
            elementsLength = elements.length;

        for ( var elementIndex = 0; elementIndex < elementsLength; elementIndex++ ) {
            elements[ elementIndex ].className = elements[ elementIndex ].className.replace( className, "" );
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
        
        if ( repeatEvery > _const_Repeat_Never ) {
            var newCurrentDate = new Date( date );
            newCurrentDate.setHours( toDate.getHours(), toDate.getMinutes() );

            toDate = newCurrentDate;
        }

        return toDate;
    }

    function getEventClassName() {
        return _options.manualEditingEnabled ? "event" : "event-no-hover";
    }

    function checkEventForNotifications( date, event ) {
        if (  _options.eventNotificationsEnabled && isDateToday( date ) && !_eventNotificationsTriggered.hasOwnProperty( event.id ) ) {
            var newFrom = new Date(),
                newTo = new Date(),
                today = new Date(),
                repeatEvery = getNumber( event.repeatEvery );

            newFrom.setHours( event.from.getHours(), event.from.getMinutes(), 0, 0 );
            newTo.setHours( event.to.getHours(), event.to.getMinutes(), 0, 0 );

            if ( repeatEvery === _const_Repeat_Never && !isDateToday( event.from ) ) {
                newFrom.setHours( 0, 0, 0, 0 );
            }

            if ( repeatEvery === _const_Repeat_Never && !isDateToday( event.to ) ) {
                newTo.setHours( 23, 59, 59, 99 );
            }
            
            if ( today >= newFrom && today <= newTo ) {
                _eventNotificationsTriggered[ event.id ] = true;

                var notification = new Notification( _options.eventNotificationTitle, {
                    body: _options.eventNotificationBody.replace( "{0}", event.title ),
                });
    
                notification.onclick = function() {
                    showEventDialog( event );
                };
            }
        }
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

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
            hideOverlay( _element_FullDayView );
            _element_FullDayView_DateSelected = null;
        } );

        if ( _options.manualEditingEnabled ) {
            buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, addNewEvent );
        }

        buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextDayTooltipText, onNextDay );
        buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousDayTooltipText, onPreviousDay );

        if ( _options.exportEventsEnabled ) {
            _element_FullDayView_ExportEventsButton = buildToolbarButton( titleBar, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                showSelectExportTypeDialog( _element_FullDayView_EventsShown );
            } );
        }

        if ( _options.fullScreenModeEnabled ) {
            _element_FullDayView_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, headerDoubleClick );
        }

        _element_FullDayView_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_FullDayView.appendChild( _element_FullDayView_Contents );

        _element_FullDayView_Contents_AllDayEvents = createElement( "div", "content-events-all-day" );
        _element_FullDayView_Contents.appendChild( _element_FullDayView_Contents_AllDayEvents );

        var allDayText = createElement( "div", "all-day-text" );
        allDayText.innerText = _options.allDayText;
        _element_FullDayView_Contents_AllDayEvents.appendChild( allDayText );

        _element_FullDayView_Contents_Hours = createElement( "div", "contents-events" );
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

    function updateFullDayViewFromEventEdit() {
        if ( isOverlayVisible( _element_FullDayView ) ) {
            showFullDayView( _element_FullDayView_DateSelected );
        }
    }

    function showFullDayView( date, fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        _element_FullDayView_Title.innerText = "";
        _element_FullDayView_DateSelected = new Date( date );
        _element_FullDayView_EventsShown = [];
        _element_FullDayView_Contents_AllDayEvents.style.display = "block";

        clearElementsByClassName( _element_FullDayView_Contents, getEventClassName() );
        showOverlay( _element_FullDayView );
        buildDateTimeDisplay( _element_FullDayView_Title, date, false, true, true );

        var holidayText = getHoliday( date ),
            orderedEvents = [];

        if ( holidayText !== null ) {
            createSpanElement( _element_FullDayView_Title, " (" + holidayText + ")" );
        }

        getAllEventsFunc( function( event ) {
            var totalDays = getTotalDaysBetweenDates( event.from, event.to ) + 1,
                nextDate = new Date( event.from );
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( doDatesMatch( nextDate, date ) ) {
                    orderedEvents.push( event );
                    break;
                }

                moveDateForwardOneDay( nextDate );
            }
            
            var repeatEvery = getNumber( event.repeatEvery );
            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardOneDay );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardOneWeek );
                } else if ( repeatEvery === _const_Repeat_Every2Weeks ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardTwoWeeks );
                }  else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardOneMonth );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, moveDateForwardOneYear );
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
            if ( _element_FullDayView_EventsShown.length === 0 ) {
                _element_FullDayView_ExportEventsButton.style.display = "none";
            } else {
                _element_FullDayView_ExportEventsButton.style.display = "inline-block";
            }
        }
    }

    function buildFullDayRepeatedDayEvents( event, orderedEvents, date, dateFunc ) {
        var newFromDate = new Date( event.from ),
            excludeDays = getArray( event.repeatEveryExcludeDays ),
            seriesIgnoreDates = getArray( event.seriesIgnoreDates );
    
        while ( newFromDate < date ) {
            dateFunc( newFromDate );

            var formattedDate = toStorageFormattedDate( newFromDate ),
                repeatEnded = !( !isDefined( event.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, event.repeatEnds ) );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 && seriesIgnoreDates.indexOf( formattedDate ) === -1 && !repeatEnded ) {
                if ( doDatesMatch( newFromDate, date ) ) {
                    orderedEvents.push( event );
                    break;
                }
            }
        }
    }

    function buildFullDayDayEvent( eventDetails, displayDate ) {
        var scrollTop = 0;

        if ( isEventVisible( eventDetails ) ) {
            var event = createElement( "div", getEventClassName() );

            if ( eventDetails.isAllDay ) {
                _element_FullDayView_Contents_AllDayEvents.appendChild( event );
            } else {
                _element_FullDayView_Contents_Hours.appendChild( event );
            }
    
            if ( _options.manualEditingEnabled ) {
                var formattedDate = toStorageFormattedDate( displayDate );
    
                event.oncontextmenu = function( e ) {
                    showEventDropDownMenu( e, eventDetails, formattedDate );
                };
            }
    
            setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, displayDate ) );
    
            var title = createElement( "div", "title" ),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _const_Repeat_Never ) {
                var icon = createElement( "div", "ib-refresh-medium" );
                icon.style.borderColor = event.style.color;
                title.appendChild( icon );
            }
            
            title.innerHTML += eventDetails.title;
            event.appendChild( title );
    
            if ( !eventDetails.isAllDay || _options.showAllDayEventDetailsInFullDayView ) {
                var startTime = createElement( "div", "date" );
                event.appendChild( startTime );

                var duration = createElement( "div", "duration" );
                event.appendChild( duration );
        
                if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                    if ( eventDetails.isAllDay ) {
                        startTime.innerText = _options.allDayText;
                    } else {
                        startTime.innerText = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
                        duration.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
                    }
                } else {
                    buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );

                    duration.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
                }
        
                if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
                    var repeats = createElement( "div", "repeats" );
                    repeats.innerText = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
                    event.appendChild( repeats );
                }
        
                if ( isDefinedStringAndSet( eventDetails.location ) ) {
                    var location = createElement( "div", "location" );
                    location.innerText = eventDetails.location;
                    event.appendChild( location );
                }
        
                if ( isDefinedStringAndSet( eventDetails.description ) ) {
                    var description = createElement( "div", "description" );
                    description.innerText = eventDetails.description;
                    event.appendChild( description );
                }
            }
    
            if ( _options.manualEditingEnabled ) {
                event.onclick = function() {
                    showEventDialog( eventDetails );
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
            pixelsPerMinute = contentHoursHeight / _minutesInDay,
            minutesTop = _options.spacing,
            minutesHeight = null;

        if ( !eventDetails.isAllDay ) {
            var repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( doDatesMatch( eventDetails.from, displayDate ) || repeatEvery > _const_Repeat_Never ) {
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
        showFullDayView( _element_FullDayView_DateSelected, true );
    }

    function onNextDay() {
        moveDateForwardOneDay( _element_FullDayView_DateSelected );
        showFullDayView( _element_FullDayView_DateSelected, true );
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
            var contentHoursHeight = _element_FullDayView_Contents_Hours.offsetHeight,
                pixelsPerMinute = contentHoursHeight / _minutesInDay,
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
        title.innerText = _options.allEventsText;
        titleBar.appendChild( title );

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
            hideOverlay( _element_ListAllEventsView );
        } );

        if ( _options.manualEditingEnabled ) {
            buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, addNewEvent );
        }

        if ( _options.exportEventsEnabled ) {
            _element_ListAllEventsView_ExportEventsButton = buildToolbarButton( titleBar, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                showSelectExportTypeDialog( _element_ListAllEventsView_EventsShown );
            } );
        }

        if ( _options.fullScreenModeEnabled ) {
            _element_ListAllEventsView_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, headerDoubleClick );
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
            if ( _element_ListAllEventsView_EventsShown.length === 0 ) {
                _element_ListAllEventsView_ExportEventsButton.style.display = "none";
            } else {
                _element_ListAllEventsView_ExportEventsButton.style.display = "inline-block";
            }
        }

        if ( _element_ListAllEventsView_EventsShown.length === 0 ) {
            buildNoEventsAvailableText( _element_ListAllEventsView_Contents, addNewEvent );
        }
    }

    function buildListAllEventsEvent( eventDetails ) {
        if ( isEventVisible( eventDetails ) ) {
            var container = buildListAllEventsMonth( eventDetails.from ),
                event = createElement( "div", getEventClassName() );

            container.appendChild( event );
    
            if ( _options.manualEditingEnabled ) {
                event.oncontextmenu = function( e ) {
                    showEventDropDownMenu( e, eventDetails );
                };
            }
    
            makeEventDraggable( event, eventDetails, eventDetails.from );
            setEventClassesAndColors( event, eventDetails );
    
            var title = createElement( "div", "title" ),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _const_Repeat_Never ) {
                var icon = createElement( "div", "ib-refresh-medium" );
                icon.style.borderColor = event.style.color;
                title.appendChild( icon );
            }
            
            title.innerHTML += eventDetails.title;
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

                    duration.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
                }
            } else {
                buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );

                duration.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
            }
    
            if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
                var repeats = createElement( "div", "repeats" );
                repeats.innerText = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
                event.appendChild( repeats );
            }
    
            if ( isDefinedStringAndSet( eventDetails.location ) ) {
                var location = createElement( "div", "location" );
                location.innerText = eventDetails.location;
                event.appendChild( location );
            }
    
            if ( isDefinedStringAndSet( eventDetails.description ) ) {
                var description = createElement( "div", "description" );
                description.innerText = eventDetails.description;
                event.appendChild( description );
            }
    
            if ( _options.manualEditingEnabled ) {
                event.onclick = function() {
                    showEventDialog( eventDetails );
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
                    hideOverlay( _element_ListAllEventsView );
                    build( expandMonthDate );
                };

            var month = createElement( "div", "month" );
            _element_ListAllEventsView_Contents.appendChild( month );

            makeAreaDroppable( month, date.getFullYear(), date.getMonth() );

            var header = createElement( "div", "header" );
            header.innerText = _options.monthNames[ date.getMonth() ] + " " + date.getFullYear();
            header.ondblclick = expandFunction;
            month.appendChild( header );

            buildToolbarButton( header, "ib-arrow-expand-left-right", _options.expandMonthTooltipText, expandFunction );

            if ( _options.manualEditingEnabled ) {
                var addNewEventDate = new Date( date.getFullYear(), date.getMonth(), 1 );

                buildToolbarButton( header, "ib-plus", _options.addEventTooltipText, function() {
                    showEventDialog( null, addNewEventDate );
                } );
            }

            monthContents = createElement( "div", "events" );
            monthContents.id = monthContentsID;
            month.appendChild( monthContents );
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

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
            hideOverlay( _element_ListAllWeekEventsView );
        } );

        if ( _options.manualEditingEnabled ) {
            buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, addNewEvent );
        }

        buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextWeekTooltipText, onNextWeek );
        buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousWeekTooltipText, onPreviousWeek );

        if ( _options.exportEventsEnabled ) {
            _element_ListAllWeekEventsView_ExportEventsButton = buildToolbarButton( titleBar, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                showSelectExportTypeDialog( _element_ListAllWeekEventsView_EventsShown );
            } );
        }

        if ( _options.fullScreenModeEnabled ) {
            _element_ListAllWeekEventsView_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, headerDoubleClick );
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
                    var dayContents = buildListAllEventsDay( nextDate );
    
                    var added = buildListAllWeekEventsEvent( orderedEvent, dayContents, nextDate );
                    if ( added ) {
                        addedNow = true;
                    }
                }

                moveDateForwardOneDay( nextDate );
            }

            if ( addedNow ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery ),
                repeatAdded = false;

            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardOneDay );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardOneWeek );
                } else if ( repeatEvery === _const_Repeat_Every2Weeks ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardTwoWeeks );
                }  else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardOneMonth );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardOneYear );
                }
            }

            if ( repeatAdded && !addedNow ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }
        }

        for ( var dateID in _element_ListAllWeekEventsView_Contents_FullView ) {
            if ( _element_ListAllWeekEventsView_Contents_FullView.hasOwnProperty( dateID ) ) {
                _element_ListAllWeekEventsView_Contents.appendChild( _element_ListAllWeekEventsView_Contents_FullView[ dateID ] );
            }
        }

        if ( _options.exportEventsEnabled ) {
            if ( _element_ListAllWeekEventsView_EventsShown.length === 0 ) {
                _element_ListAllWeekEventsView_ExportEventsButton.style.display = "none";
            } else {
                _element_ListAllWeekEventsView_ExportEventsButton.style.display = "inline-block";
            }
        }

        if ( _element_ListAllWeekEventsView_EventsShown.length === 0 ) {
            buildNoEventsAvailableText( _element_ListAllWeekEventsView_Contents, addNewEvent );
        }
    }

    function buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, dateFunc ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays ),
            seriesIgnoreDates = getArray( orderedEvent.seriesIgnoreDates ),
            added = false;
    
        while ( newFromDate < weekEndDate ) {
            dateFunc( newFromDate );

            var formattedDate = toStorageFormattedDate( newFromDate ),
                repeatEnded = !( !isDefined( orderedEvent.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, orderedEvent.repeatEnds ) );
            
            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 && seriesIgnoreDates.indexOf( formattedDate ) === -1 && !repeatEnded ) {
                if ( newFromDate >= weekStartDate && newFromDate <= weekEndDate ) {
                    var dayContents = buildListAllEventsDay( newFromDate );
    
                    buildListAllWeekEventsEvent( orderedEvent, dayContents, newFromDate );
                    added = true;
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

    function buildListAllWeekEventsEvent( eventDetails, container, displayDate ) {
        var added = false;

        if ( isEventVisible( eventDetails ) ) {
            clearElementsByClassName( container, "no-events-text" );
            
            var event = createElement( "div", getEventClassName() );
            container.appendChild( event );
    
            if ( _options.manualEditingEnabled ) {
                var formattedDate = toStorageFormattedDate( displayDate );
    
                event.oncontextmenu = function( e ) {
                    showEventDropDownMenu( e, eventDetails, formattedDate );
                };
            }
    
            makeEventDraggable( event, eventDetails, displayDate );
            setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, displayDate ) );
    
            var title = createElement( "div", "title" ),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _const_Repeat_Never ) {
                var icon = createElement( "div", "ib-refresh-medium" );
                icon.style.borderColor = event.style.color;
                title.appendChild( icon );
            }
            
            title.innerHTML += eventDetails.title;
            event.appendChild( title );

            var startTime = createElement( "div", "date" );
            event.appendChild( startTime );

            var duration = createElement( "div", "duration" );
            event.appendChild( duration );
    
            if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                if ( eventDetails.isAllDay ) {
                    startTime.innerText = _options.allDayText;
                } else {
                    startTime.innerText = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
                    duration.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
                }
            } else {
                buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );

                duration.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
            }
    
            if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
                var repeats = createElement( "div", "repeats" );
                repeats.innerText = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
                event.appendChild( repeats );
            }
    
            if ( isDefinedStringAndSet( eventDetails.location ) ) {
                var location = createElement( "div", "location" );
                location.innerText = eventDetails.location;
                event.appendChild( location );
            }
    
            if ( isDefinedStringAndSet( eventDetails.description ) ) {
                var description = createElement( "div", "description" );
                description.innerText = eventDetails.description;
                event.appendChild( description );
            }
    
            if ( _options.manualEditingEnabled ) {
                event.onclick = function() {
                    showEventDialog( eventDetails );
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
            moveDateForwardOneDay( startOfWeek );

        } while ( startOfWeek < weekEndDate );
    }

    function buildListAllEventsDay( date ) {
        var weekDayNumber = getWeekdayNumber( date ),
            dateID = date.getFullYear() + date.getMonth() + weekDayNumber,
            dayContents = null;

        if ( !_element_ListAllWeekEventsView_Contents_FullView.hasOwnProperty( dateID ) ) {
            var expandDate = new Date( date ),
                expandFunction = function() {
                    showFullDayView( expandDate, true );
                },
                addEventFunction = function() {
                    showEventDialog( null, expandDate );
                };

            var day = createElement( "div", "day" );
            _element_ListAllWeekEventsView_Contents_FullView[ dateID ] = day;

            if ( isWeekendDay( date ) ) {
                day.className += " weekend-day";
            }

            makeAreaDroppable( day, expandDate.getFullYear(), expandDate.getMonth(), expandDate.getDate() );

            var header = createElement( "div", "header" );
            header.ondblclick = expandFunction;
            day.appendChild( header );

            buildDayDisplay( header, date, _options.dayNames[ weekDayNumber ] + ", " );
            buildToolbarButton( header, "ib-arrow-expand-left-right", _options.expandDayTooltipText, expandFunction );

            if ( _options.manualEditingEnabled ) {
                buildToolbarButton( header, "ib-plus", _options.addEventTooltipText, addEventFunction );
            }

            dayContents = createElement( "div", "events" );
            day.appendChild( dayContents );

            var noEventsTextContainer = createElement( "div", "no-events-text" );
            dayContents.appendChild( noEventsTextContainer );

            createSpanElement( noEventsTextContainer, _options.noEventsAvailableText );
            createSpanElement( noEventsTextContainer, " " + _options.clickText + " " );
            createSpanElement( noEventsTextContainer, _options.hereText, "link", addEventFunction );
            createSpanElement( noEventsTextContainer, " " + _options.toAddANewEventText );

            _element_ListAllWeekEventsView_Contents_FullView_Contents[ dateID ] = dayContents;

        } else {
            dayContents = _element_ListAllWeekEventsView_Contents_FullView_Contents[ dateID ];
        }

        return dayContents;
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
        moveDateForwardOneWeek( _element_ListAllWeekEventsView_DateSelected );
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
                dayDate = new Date( year, month, actualDay );
            
            includeMonthName = isDefined( includeMonthName ) ? includeMonthName : false;

            dayElement.innerHTML = "";
            dayText.className = isMuted ? "day-muted" : "";
            dayText.className += dayIsToday ? " today" : "";
            dayText.innerText = actualDay;

            if ( actualDay === 1 ) {
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
            
            var expandDayButton = createElement( "div", "ib-arrow-top-right" );
            dayElement.appendChild( expandDayButton );

            addToolTip( expandDayButton, _options.expandDayTooltipText );

            if ( includeMonthName && _options.showPreviousNextMonthNamesInMainDisplay ) {
                createSpanElement( dayElement, _options.monthNames[ month ], "month-name" + ( isMuted ? " day-muted" : "" ) );
            }

            var holidayText = getHoliday( dayDate );
            if ( holidayText !== null ) {
                createSpanElement( dayElement, holidayText, "holiday" + ( isMuted ? " day-muted" : "" ) );
            }

            expandDayButton.onclick = function() {
                showFullDayView( dayDate, true );
            };

            if ( _options.manualEditingEnabled ) {
                dayElement.ondblclick = function() {
                    showEventDialog( null, dayDate );
                };

                makeAreaDroppable( dayElement, year, month, actualDay );
            }
        }
    }

    function getHoliday( date ) {
        var result = null,
            holidayTextItems = [],
            holidaysLength = _options.holidays.length;

        for ( var holidayIndex = 0; holidayIndex < holidaysLength; holidayIndex++ ) {
            var holiday = _options.holidays[ holidayIndex ];

            if ( getNumber( holiday.day ) === date.getDate() && getNumber( holiday.month ) === date.getMonth() + 1 ) {
                var holidayText = getString( holiday.title, null );
                
                if ( holidayText !== null ) {
                    holidayTextItems.push( holidayText );
                }
            }
        }

        if ( holidayTextItems.length > 0 ) {
            result = holidayTextItems.join( ", " );
        }

        return result;
    }

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Drag & Drop
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function makeEventDraggable( event, eventDetails, dragFromDate ) {
        if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
            var draggedFromDate = new Date( dragFromDate );

            event.setAttribute( "draggable", true );
            
            event.ondragstart = function() {
                _eventDetails_Dragged_DateFrom = draggedFromDate;
                _eventDetails_Dragged = eventDetails;
            };
        }
    }

    function makeAreaDroppable( element, year, month, actualDay ) {
        if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
            element.ondragover = function( e ) {
                showDraggingEffect( e, element );
            };
        
            element.ondragenter = function( e ) {
                showDraggingEffect( e, element );
            };
        
            element.ondragleave = function( e ) {
                hideDraggingEffect( e, element );
            };
        
            element.ondrop = function( e ) {
                hideDraggingEffect( e, element );
                dropEventOnDay( e, year, month, actualDay );
            };
        }
    }

    function showDraggingEffect( e, dayElement ) {
        cancelBubble( e );

        if ( _eventDetails_Dragged !== null && dayElement.className.indexOf( " drag-over" ) === -1 ) {
            dayElement.className += " drag-over";
        }
    }

    function hideDraggingEffect( e, dayElement ) {
        cancelBubble( e );

        if ( _eventDetails_Dragged !== null && dayElement.className.indexOf( " drag-over" ) > -1 ) {
            dayElement.className = dayElement.className.replace( " drag-over", "" );
        }
    }

    function dropEventOnDay( e, year, month, day ) {
        cancelBubble( e );

        if ( _eventDetails_Dragged !== null ) {
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


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Drop-Down Menus
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDropDownMenus() {
        buildDayDropDownMenu();
        buildEventDropDownMenu();
    }

    function buildDayDropDownMenu() {
        if ( _element_DropDownMenu_Day !== null ) {
            removeNode( _document.body, _element_DropDownMenu_Day );
        }

        _element_DropDownMenu_Day = createElement( "div", "calendar-drop-down-menu" );
        _document.body.appendChild( _element_DropDownMenu_Day );

        if ( _options.manualEditingEnabled ) {
            buildMenuItemWithIcon( _element_DropDownMenu_Day, "ib-plus-icon", _options.addEventTitle, function() {
                showEventDialog( null, _element_DropDownMenu_Day_DateSelected );
            } );
    
            buildMenuSeparator( _element_DropDownMenu_Day );
        }

        buildMenuItemWithIcon( _element_DropDownMenu_Day, "ib-arrow-top-right-icon", _options.expandDayTooltipText, function() {
            showFullDayView( _element_DropDownMenu_Day_DateSelected, true );
        } );

        buildMenuSeparator( _element_DropDownMenu_Day );

        buildMenuItemWithIcon( _element_DropDownMenu_Day, "ib-hamburger-icon", _options.viewWeekEventsText, function() {
            showListAllWeekEventsView( _element_DropDownMenu_Day_DateSelected, true );
        } );
    }

    function buildEventDropDownMenu() {
        if ( _element_DropDownMenu_Event !== null ) {
            removeNode( _document.body, _element_DropDownMenu_Event );
        }

        if ( _options.manualEditingEnabled ) {
            _element_DropDownMenu_Event = createElement( "div", "calendar-drop-down-menu" );
            _document.body.appendChild( _element_DropDownMenu_Event );
            
            var remove = createElement( "div", "item" );
            remove.innerText = _options.removeEventText;
            _element_DropDownMenu_Event.appendChild( remove );
    
            remove.onclick = function() {
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
                    showCheckBox = repeatEvery > _const_Repeat_Never && _element_DropDownMenu_Event_FormattedDateSelected !== null;
        
                showConfirmationDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent, showCheckBox );
            };

            buildMenuSeparator( _element_DropDownMenu_Event );
    
            var editEvent = createElement( "div", "item" );
            editEvent.innerText = _options.editEventTitle;
            _element_DropDownMenu_Event.appendChild( editEvent );
    
            editEvent.onclick = function() {
                showEventDialog( _element_DropDownMenu_Event_EventDetails );
            };
        }
    }

    function buildMenuItemWithIcon( container, iconCSS, text, onClickEvent ) {
        var menuItem = createElement( "div", "item" );
        container.appendChild( menuItem );

        menuItem.appendChild( createElement( "div", iconCSS ) );

        var menuText = createElement( "div", "menu-text" );
        menuText.innerText = text;
        menuItem.appendChild( menuText );

        menuItem.onclick = function() {
            onClickEvent();
        };
    }

    function buildMenuSeparator( container ) {
        container.appendChild( createElement( "div", "separator" ) );
    }

    function showDayDropDownMenu( e, date ) {
        _element_DropDownMenu_Day_DateSelected = new Date( date );

        hideAllDropDowns();
        cancelBubble( e );
        showElementAtMousePosition( e, _element_DropDownMenu_Day );
    }

    function showEventDropDownMenu( e, eventDetails, selectedDate ) {
        _element_DropDownMenu_Event_EventDetails = eventDetails;
        _element_DropDownMenu_Event_FormattedDateSelected = isDefined( selectedDate ) ? selectedDate : null;

        hideAllDropDowns();
        cancelBubble( e );
        showElementAtMousePosition( e, _element_DropDownMenu_Event );
    }

    function hideDayDropDownMenu() {
        if ( isDayDropDownMenuVisible() ) {
            _element_DropDownMenu_Day.style.display = "none";
        }
    }

    function hideEventDropDownMenu() {
        if ( isEventDropDownMenuVisible() ) {
            _element_DropDownMenu_Event.style.display = "none";
        }
    }

    function isDayDropDownMenuVisible() {
        return _element_DropDownMenu_Day !== null && _element_DropDownMenu_Day.style.display === "block";
    }

    function isEventDropDownMenuVisible() {
        return _element_DropDownMenu_Event !== null && _element_DropDownMenu_Event.style.display === "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Disabled Background
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDisabledBackground() {
        if ( _element_DisabledBackground === null ) {
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

        createTextHeaderElement( contents, _options.titleText );

        var inputTitleContainer = createElement( "div", "input-title-container" );
        contents.appendChild( inputTitleContainer );

        _element_EventEditorDialog_Title = createElement( "input", null, "text" );
        inputTitleContainer.appendChild( _element_EventEditorDialog_Title );

        if ( _options.maximumEventTitleLength > 0 ) {
            _element_EventEditorDialog_Title.maxLength = _options.maximumEventTitleLength ;
        }

        createButtonElement( inputTitleContainer, "...", "select-colors", showEventEditorColorsDialog, _options.selectColorsText );

        createTextHeaderElement( contents, _options.fromText.replace( ":", "" ) + "/" + _options.toText );

        var fromSplitContainer = createElement( "div", "split" );
        contents.appendChild( fromSplitContainer );

        _element_EventEditorDialog_DateFrom = createElement( "input" );
        _element_EventEditorDialog_DateFrom.onchange = isAllDayChanged;
        fromSplitContainer.appendChild( _element_EventEditorDialog_DateFrom );

        setInputType( _element_EventEditorDialog_DateFrom, "date" );

        _element_EventEditorDialog_TimeFrom = createElement( "input" );
        fromSplitContainer.appendChild( _element_EventEditorDialog_TimeFrom );

        setInputType( _element_EventEditorDialog_TimeFrom, "time" );

        var toSplitContainer = createElement( "div", "split" );
        contents.appendChild( toSplitContainer );

        _element_EventEditorDialog_DateTo = createElement( "input" );
        _element_EventEditorDialog_DateTo.onchange = isAllDayChanged;
        toSplitContainer.appendChild( _element_EventEditorDialog_DateTo );

        setInputType( _element_EventEditorDialog_DateTo, "date" );

        _element_EventEditorDialog_TimeTo = createElement( "input" );
        toSplitContainer.appendChild( _element_EventEditorDialog_TimeTo );

        setInputType( _element_EventEditorDialog_TimeTo, "time" );

        _element_EventEditorDialog_IsAllDay = buildCheckBox( contents, _options.isAllDayText, isAllDayChanged )[ 0 ];

        createTextHeaderElement( contents, _options.repeatsText );

        var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
        contents.appendChild( radioButtonsContainer );

        _element_EventEditorDialog_RepeatEvery_Never = buildRadioButton( radioButtonsContainer, _options.repeatsNever, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryDay = buildRadioButton( radioButtonsContainer, _options.repeatsEveryDayText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryWeek = buildRadioButton( radioButtonsContainer, _options.repeatsEveryWeekText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_Every2Weeks = buildRadioButton( radioButtonsContainer, _options.repeatsEvery2WeeksText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryMonth = buildRadioButton( radioButtonsContainer, _options.repeatsEveryMonthText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryYear = buildRadioButton( radioButtonsContainer, _options.repeatsEveryYearText, "RepeatType", repeatEveryEvent );

        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton = createButtonElement( radioButtonsContainer, "...", "repeat-options", showEventEditorRepeatOptionsDialog, _options.repeatOptionsTitle );

        var inputFields1TextSplitContainer = createElement( "div", "split" );
        contents.appendChild( inputFields1TextSplitContainer );

        createTextHeaderElement( inputFields1TextSplitContainer, _options.locationText );
        createTextHeaderElement( inputFields1TextSplitContainer, _options.groupText );

        var inputFields1SplitContainer = createElement( "div", "split" );
        contents.appendChild( inputFields1SplitContainer );

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

        createTextHeaderElement( contents, _options.descriptionText );

        _element_EventEditorDialog_Description = createElement( "textarea", "custom-scroll-bars" );
        contents.appendChild( _element_EventEditorDialog_Description );

        if ( _options.maximumEventDescriptionLength > 0 ) {
            _element_EventEditorDialog_Description.maxLength = _options.maximumEventDescriptionLength ;
        }

        _element_EventEditorDialog_ErrorMessage = createElement( "p", "error" );
        contents.appendChild( _element_EventEditorDialog_ErrorMessage );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        _element_EventEditorDialog_OKButton = createButtonElement( buttonsSplitContainer, _options.addText, "ok", eventDialogEvent_OK );
        createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", eventDialogEvent_Cancel );
        _element_EventEditorDialog_RemoveButton = createButtonElement( contents, _options.removeEventText, "remove", eventDialogEvent_Remove );
    }

    function addNewEvent() {
        showEventDialog( null, _element_FullDayView_DateSelected );
    }

    function repeatEveryEvent() {
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton.disabled = _element_EventEditorDialog_RepeatEvery_Never.checked;
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
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton.disabled = disabled;

        repeatEveryEvent();
    }

    function showEventDialog( eventDetails, overrideTodayDate ) {
        addNode( _document.body, _element_DisabledBackground );

        if ( isDefined( eventDetails ) ) {
            _element_EventEditorDialog_OKButton.value = _options.updateText;
            _element_EventEditorDialog_RemoveButton.style.display = "block";
            _element_EventEditorDialog_TitleBar.innerText = _options.editEventTitle;
            _element_EventEditorDialog_EventDetails = eventDetails;
            _element_EventEditorDialog_DateFrom.value = toFormattedDate( eventDetails.from, _element_EventEditorDialog_DateFrom.type );
            _element_EventEditorDialog_TimeFrom.value = toFormattedTime( eventDetails.from );
            _element_EventEditorDialog_DateTo.value = toFormattedDate( eventDetails.to, _element_EventEditorDialog_DateTo.type );
            _element_EventEditorDialog_TimeTo.value = toFormattedTime( eventDetails.to );
            _element_EventEditorDialog_IsAllDay.checked = eventDetails.isAllDay;
            _element_EventEditorDialog_Title.value = getString( eventDetails.title );
            _element_EventEditorDialog_Description.value = getString( eventDetails.description );
            _element_EventEditorDialog_Location.value = getString( eventDetails.location );
            _element_EventEditorDialog_Group.value = getString( eventDetails.group );
            _element_EventEditorColorsDialog_Color.value = getString( eventDetails.color, "#484848" );
            _element_EventEditorColorsDialog_ColorText.value = getString( eventDetails.colorText, "#F5F5F5" );
            _element_EventEditorColorsDialog_ColorBorder.value = getString( eventDetails.colorBorder, "#282828" );

            var repeatEvery = getNumber( eventDetails.repeatEvery );
            if ( repeatEvery === _const_Repeat_Never ) {
                _element_EventEditorDialog_RepeatEvery_Never.checked = true;
            } else if ( repeatEvery === _const_Repeat_EveryDay ) {
                _element_EventEditorDialog_RepeatEvery_EveryDay.checked = true;
            } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                _element_EventEditorDialog_RepeatEvery_EveryWeek.checked = true;
            } else if ( repeatEvery === _const_Repeat_Every2Weeks ) {
                _element_EventEditorDialog_RepeatEvery_Every2Weeks.checked = true;
            }  else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                _element_EventEditorDialog_RepeatEvery_EveryMonth.checked = true;
            } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                _element_EventEditorDialog_RepeatEvery_EveryYear.checked = true;
            }

            var excludeDays = getArray( eventDetails.repeatEveryExcludeDays );
            _element_EventEditorRepeatOptionsDialog_Mon.checked = excludeDays.indexOf( 1 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Tue.checked = excludeDays.indexOf( 2 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Wed.checked = excludeDays.indexOf( 3 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Thu.checked = excludeDays.indexOf( 4 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Fri.checked = excludeDays.indexOf( 5 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Sat.checked = excludeDays.indexOf( 6 ) > -1;
            _element_EventEditorRepeatOptionsDialog_Sun.checked = excludeDays.indexOf( 0 ) > -1;
            _element_EventEditorRepeatOptionsDialog_RepeatEnds.value = toFormattedDate( eventDetails.repeatEnds, _element_EventEditorRepeatOptionsDialog_RepeatEnds.type );
        } else {

            var date = new Date(),
                today = !isDefined( overrideTodayDate ) ? date : overrideTodayDate;

            if ( isDateToday( today ) ) {
                today.setHours( date.getHours() );
                today.setMinutes( date.getMinutes() );
            }

            _element_EventEditorDialog_OKButton.value = _options.addText;
            _element_EventEditorDialog_RemoveButton.style.display = "none";
            _element_EventEditorDialog_TitleBar.innerText = _options.addEventTitle;
            _element_EventEditorDialog_EventDetails = {};
            _element_EventEditorDialog_DateFrom.value = toFormattedDate( today, _element_EventEditorDialog_DateFrom.type );
            _element_EventEditorDialog_TimeFrom.value = toFormattedTime( today );
            _element_EventEditorDialog_DateTo.value = toFormattedDate( today, _element_EventEditorDialog_DateTo.type );
            _element_EventEditorDialog_TimeTo.value = toFormattedTime( today );
            _element_EventEditorDialog_IsAllDay.checked = false;
            _element_EventEditorDialog_Title.value = "";
            _element_EventEditorDialog_Description.value = "";
            _element_EventEditorDialog_Location.value = "";
            _element_EventEditorDialog_Group.value = "";
            _element_EventEditorColorsDialog_Color.value = "#484848";
            _element_EventEditorColorsDialog_ColorText.value = "#F5F5F5";
            _element_EventEditorColorsDialog_ColorBorder.value = "#282828";
            _element_EventEditorDialog_RepeatEvery_Never.checked = true;
            _element_EventEditorRepeatOptionsDialog_Mon.checked = false;
            _element_EventEditorRepeatOptionsDialog_Tue.checked = false;
            _element_EventEditorRepeatOptionsDialog_Wed.checked = false;
            _element_EventEditorRepeatOptionsDialog_Thu.checked = false;
            _element_EventEditorRepeatOptionsDialog_Fri.checked = false;
            _element_EventEditorRepeatOptionsDialog_Sat.checked = false;
            _element_EventEditorRepeatOptionsDialog_Sun.checked = false;
            _element_EventEditorRepeatOptionsDialog_RepeatEnds.value = null;
        }

        buildToolbarButton( _element_EventEditorDialog_TitleBar, "ib-close", _options.closeTooltipText, eventDialogEvent_Cancel, true );
        isAllDayChanged();

        _element_EventEditorDialog.style.display = "block";
        _element_EventEditorDialog_ErrorMessage.style.display = "none";
        _element_EventEditorDialog_Title.focus();
    }

    function eventDialogEvent_OK() {
        var fromDate = getSelectedDate( _element_EventEditorDialog_DateFrom ),
            toDate = getSelectedDate( _element_EventEditorDialog_DateTo ),
            fromTime = _element_EventEditorDialog_TimeFrom.value.split( ":" ),
            toTime = _element_EventEditorDialog_TimeTo.value.split( ":" ),
            title = trimString( _element_EventEditorDialog_Title.value ),
            description = trimString( _element_EventEditorDialog_Description.value ),
            location = trimString( _element_EventEditorDialog_Location.value ),
            group = trimString( _element_EventEditorDialog_Group.value ),
            repeatEnds = getSelectedDate( _element_EventEditorRepeatOptionsDialog_RepeatEnds, null );

        if ( fromTime.length < 2 ) {
            showEventDialogErrorMessage( _options.fromTimeErrorMessage, _element_EventEditorDialog_TimeFrom );
        } else if ( toTime.length < 2 ) {
            showEventDialogErrorMessage( _options.toTimeErrorMessage, _element_EventEditorDialog_TimeTo );
        } else if ( title === "" ) {
            showEventDialogErrorMessage( _options.titleErrorMessage, _element_EventEditorDialog_Title );
        }
        else {

            setTimeOnDate( fromDate, _element_EventEditorDialog_TimeFrom.value );
            setTimeOnDate( toDate, _element_EventEditorDialog_TimeTo.value );

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
                    color: _element_EventEditorDialog_EventDetails.color,
                    colorText: _element_EventEditorDialog_EventDetails.colorText,
                    colorBorder: _element_EventEditorDialog_EventDetails.colorBorder,
                    repeatEveryExcludeDays: _element_EventEditorDialog_EventDetails.repeatEveryExcludeDays,
                    repeatEnds: repeatEnds
                };
    
                if ( _element_EventEditorDialog_RepeatEvery_Never.checked ) {
                    newEvent.repeatEvery = _const_Repeat_Never;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryDay.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryDay;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryWeek.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryWeek;
                } else if ( _element_EventEditorDialog_RepeatEvery_Every2Weeks.checked ) {
                    newEvent.repeatEvery = _const_Repeat_Every2Weeks;
                }  else if ( _element_EventEditorDialog_RepeatEvery_EveryMonth.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryMonth;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryYear.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryYear;
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

        return result;
    }

    function eventDialogEvent_Cancel() {
        _element_EventEditorDialog.style.display = "none";

        removeNode( _document.body, _element_DisabledBackground );
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
        _element_EventEditorDialog_ErrorMessage.innerText = message;
        _element_EventEditorDialog_ErrorMessage.style.display = "block";

        input.focus();
    }

    function refreshOpenedViews() {
        updateFullDayViewFromEventEdit();
        updateViewAllEventsViewFromEventEdit();
        updateViewAllWeekEventsViewFromEventEdit();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Colors Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingColorDialog() {
        if ( _element_EventEditorColorsDialog !== null ) {
            removeNode( _document.body, _element_EventEditorColorsDialog );
        }

        _element_EventEditorColorsDialog = createElement( "div", "calendar-dialog event-editor-colors" );
        _document.body.appendChild( _element_EventEditorColorsDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerText = _options.selectColorsText;
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

    function eventColorsDialogEvent_OK() {
        eventColorsDialogEvent_Cancel();

        _element_EventEditorDialog_EventDetails.color = _element_EventEditorColorsDialog_Color.value;
        _element_EventEditorDialog_EventDetails.colorText = _element_EventEditorColorsDialog_ColorText.value;
        _element_EventEditorDialog_EventDetails.colorBorder = _element_EventEditorColorsDialog_ColorBorder.value;
    }

    function eventColorsDialogEvent_Cancel() {
        _element_EventEditorColorsDialog.style.display = "none";
        _element_EventEditorDialog_DisabledArea.style.display = "none";
    }

    function showEventEditorColorsDialog() {
        _element_EventEditorColorsDialog.style.display = "block";
        _element_EventEditorDialog_DisabledArea.style.display = "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Repeat Options Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingRepeatOptionsDialog() {
        if ( _element_EventEditorRepeatOptionsDialog !== null ) {
            removeNode( _document.body, _element_EventEditorRepeatOptionsDialog );
        }

        _element_EventEditorRepeatOptionsDialog = createElement( "div", "calendar-dialog event-editor-repeat-options" );
        _document.body.appendChild( _element_EventEditorRepeatOptionsDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerText = _options.repeatOptionsTitle;
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

    function eventRepeatOptionsDialogEvent_Cancel() {
        _element_EventEditorRepeatOptionsDialog.style.display = "none";
        _element_EventEditorDialog_DisabledArea.style.display = "none";
    }

    function showEventEditorRepeatOptionsDialog() {
        _element_EventEditorRepeatOptionsDialog.style.display = "block";
        _element_EventEditorDialog_DisabledArea.style.display = "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Confirmation Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildConfirmationDialog() {
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

    function showConfirmationDialog( title, message, onYesEvent, onNoEvent, showRemoveAllEventsCheckBox ) {
        showRemoveAllEventsCheckBox = isDefined( showRemoveAllEventsCheckBox ) ? showRemoveAllEventsCheckBox : false;

        _element_ConfirmationDialog.style.display = "block";
        _element_ConfirmationDialog_TitleBar.innerText = title;
        _element_ConfirmationDialog_Message.innerText = message;
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
        _element_ConfirmationDialog.style.display = "none";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Select Export Type Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSelectExportTypeDialog() {
        if ( _element_SelectExportTypeDialog !== null ) {
            removeNode( _document.body, _element_SelectExportTypeDialog );
        }

        _element_SelectExportTypeDialog = createElement( "div", "calendar-dialog select-export-type" );
        _document.body.appendChild( _element_SelectExportTypeDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerText = _options.selectExportTypeTitle;
        _element_SelectExportTypeDialog.appendChild( titleBar );

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideSelectExportTypeDialog, true );

        var contents = createElement( "div", "contents" );
        _element_SelectExportTypeDialog.appendChild( contents );

        var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
        contents.appendChild( radioButtonsContainer );

        _element_SelectExportTypeDialog_Option_CSV = buildRadioButton( radioButtonsContainer, "CSV", "ExportType" );
        _element_SelectExportTypeDialog_Option_XML = buildRadioButton( radioButtonsContainer, "XML", "ExportType" );
        _element_SelectExportTypeDialog_Option_JSON = buildRadioButton( radioButtonsContainer, "JSON", "ExportType" );
        _element_SelectExportTypeDialog_Option_TEXT = buildRadioButton( radioButtonsContainer, "TEXT", "ExportType" );
        _element_SelectExportTypeDialog_Option_iCAL = buildRadioButton( radioButtonsContainer, "iCAL", "ExportType" );
        _element_SelectExportTypeDialog_Option_MD = buildRadioButton( radioButtonsContainer, "MD", "ExportType" );
        _element_SelectExportTypeDialog_Option_HTML = buildRadioButton( radioButtonsContainer, "HTML", "ExportType" );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        createButtonElement( buttonsSplitContainer, _options.okText, "ok", exportEventsFromOptionSelected );
        createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", hideSelectExportTypeDialog );
    }

    function showSelectExportTypeDialog( events ) {
        addNode( _document.body, _element_DisabledBackground );
        _element_SelectExportTypeDialog.style.display = "block";
        _element_SelectExportTypeDialog_ExportEvents = events;
        _element_SelectExportTypeDialog_Option_CSV.checked = true;
    }

    function hideSelectExportTypeDialog() {
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
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Search Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSearchDialog() {
        if ( _element_SearchDialog !== null ) {
            removeNode( _document.body, _element_SearchDialog );
        }

        _element_SearchDialog = createElement( "div", "calendar-dialog search" );
        _document.body.appendChild( _element_SearchDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerText = _options.searchEventsTitle;
        titleBar.onmousedown = searchOnTitleBarMouseDown;
        titleBar.onmouseup = searchOnTitleBarMouseUp;
        titleBar.ondblclick = minimizeRestoreDialog;
        _element_SearchDialog.appendChild( titleBar );

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideSearchDialog );
        
        _element_SearchDialog_MinimizedRestoreButton = buildToolbarButton( titleBar, "ib-minus", _options.minimizedTooltipText, minimizeRestoreDialog );

        _element_SearchDialog_Contents = createElement( "div", "contents" );
        _element_SearchDialog.appendChild( _element_SearchDialog_Contents );

        _element_SearchDialog_For = createElement( "input", null, "text" );
        _element_SearchDialog_For.oninput = searchForTextChanged;
        _element_SearchDialog_For.onpropertychange = searchForTextChanged;
        _element_SearchDialog_For.onkeypress = searchOnEnter;
        _element_SearchDialog_Contents.appendChild( _element_SearchDialog_For );
        
        _element_SearchDialog_MatchCase = buildCheckBox( _element_SearchDialog_Contents, _options.matchCaseText, searchForTextChanged )[ 0 ];

        var optionsSplitContainer = createElement( "div", "split" );
        _element_SearchDialog_Contents.appendChild( optionsSplitContainer );

        var splitContents1 = createElement( "div", "split-contents" );
        optionsSplitContainer.appendChild( splitContents1 );

        var splitContents2 = createElement( "div", "split-contents" );
        optionsSplitContainer.appendChild( splitContents2 );

        createTextHeaderElement( splitContents1, _options.includeText );

        var checkboxContainer = createElement( "div", "checkboxContainer" );
        splitContents1.appendChild( checkboxContainer );

        _element_SearchDialog_Include_Title = buildCheckBox( checkboxContainer, _options.titleText.replace( ":", "" ), searchForTextChanged )[ 0 ];
        _element_SearchDialog_Include_Location = buildCheckBox( checkboxContainer, _options.locationText.replace( ":", "" ), searchForTextChanged )[ 0 ];
        _element_SearchDialog_Include_Description = buildCheckBox( checkboxContainer, _options.descriptionText.replace( ":", "" ), searchForTextChanged )[ 0 ];

        _element_SearchDialog_Include_Title.checked = true;

        createTextHeaderElement( splitContents2, _options.optionsText );

        var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
        splitContents2.appendChild( radioButtonsContainer );

        _element_SearchDialog_Option_StartsWith = buildRadioButton( radioButtonsContainer, _options.startsWithText, "SearchOptionType", searchForTextChanged );
        _element_SearchDialog_Option_EndsWith = buildRadioButton( radioButtonsContainer, _options.endsWithText, "SearchOptionType", searchForTextChanged );
        _element_SearchDialog_Option_Contains = buildRadioButton( radioButtonsContainer, _options.containsText, "SearchOptionType", searchForTextChanged );

        _element_SearchDialog_Option_Contains.checked = true;

        var buttonsSplitContainer = createElement( "div", "split last-split" );
        _element_SearchDialog_Contents.appendChild( buttonsSplitContainer );

        _element_SearchDialog_Previous = createButtonElement( buttonsSplitContainer, _options.previousText, "previous", searchOnPrevious );
        _element_SearchDialog_Next = createButtonElement( buttonsSplitContainer, _options.nextText, "next", searchOnNext );

        _document.body.addEventListener( "mousemove", searchOnDocumentMouseMove );
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
        }
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
    }

    function showSearchDialog() {
        if ( _element_SearchDialog.style.display !== "block" ) {
            _element_SearchDialog_SearchResults = [];
            _element_SearchDialog.style.display = "block";
            _element_SearchDialog_For.value = "";
    
            centerSearchDialog();
            searchForTextChanged();
        }

        if ( !isSearchDialogContentVisible() ) {
            minimizeRestoreDialog();
        }

        _element_SearchDialog_For.focus();
    }

    function centerSearchDialog() {
        if ( !_element_SearchDialog_Moved ) {
            _element_SearchDialog.style.left = ( _window.innerWidth / 2 - _element_SearchDialog.offsetWidth / 2 ) + "px";
            _element_SearchDialog.style.top = ( _window.innerHeight / 2 - _element_SearchDialog.offsetHeight / 2 ) + "px";
        }
    }

    function hideSearchDialog() {
        _element_SearchDialog.style.display = "none";
        searchForTextChanged();
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
        if ( e.keyCode === 13 && isControlKey( e ) && !_element_SearchDialog_Previous.disabled ) {
            searchOnPrevious();
        } else if ( e.keyCode === 13 && !_element_SearchDialog_Next.disabled ) {
            searchOnNext();
        }
    }

    function searchOnNext() {
        if ( _element_SearchDialog_SearchResults.length === 0 ) {
            var matchCase = _element_SearchDialog_MatchCase.checked,
                search = !matchCase ? _element_SearchDialog_For.value.toLowerCase() : _element_SearchDialog_For.value,
                monthYearsFound = {};

            getAllEventsFunc( function( event ) {
                if ( isEventVisible( event ) ) {
                    var title = getString( event.title ),
                        location = getString( event.location ),
                        description = getString( event.description ),
                        found = false;

                    if ( !matchCase ) {
                        title = title.toLowerCase();
                        description = description.toLowerCase();
                        location = location.toLowerCase();
                    }

                    if ( _element_SearchDialog_Include_Title.checked && isSearchTextAvailable( title, search ) ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Location.checked && isSearchTextAvailable( location, search ) ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Description.checked && isSearchTextAvailable( description, search ) ) {
                        found = true;
                    }

                    if ( found ) {
                        var monthYear = event.from.getMonth() + "-" + event.from.getFullYear();

                        if ( !monthYearsFound.hasOwnProperty( monthYear ) ) {
                            _element_SearchDialog_SearchResults.push( event );
                            monthYearsFound[ monthYear ] = true;
                        }
                    }
                }
            } );

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
        removeElementsClassName( _element_Calendar, " focused-event" );

        var event = getElementByID( _elementID_Day + eventDetails.id );
        if ( event !== null ) {
            event.className += " focused-event";
            _element_SearchDialog_FocusedEventID = eventDetails.id;
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


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Configuration Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildConfigurationDialog() {
        if ( _element_ConfigurationDialog !== null ) {
            removeNode( _document.body, _element_ConfigurationDialog );
        }

        _element_ConfigurationDialog = createElement( "div", "calendar-dialog configuration" );
        _document.body.appendChild( _element_ConfigurationDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerText = _options.configurationTitleText;
        _element_ConfigurationDialog.appendChild( titleBar );

        buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, configurationDialogEvent_Cancel, true );

        var contents = createElement( "div", "contents" );
        _element_ConfigurationDialog.appendChild( contents );

        var tabsContainer = createElement( "div" );
        contents.appendChild( tabsContainer );

        var visibleGroupsTab = createElement( "div", "controls-tab-selected" );
        visibleGroupsTab.innerText = _options.groupsTabText;
        tabsContainer.appendChild( visibleGroupsTab );

        visibleGroupsTab.onclick = function () {
            showTabContents( visibleGroupsTab, _element_ConfigurationDialog_Groups );
        };

        var displayTab = createElement( "div", "controls-tab" );
        displayTab.innerText = _options.displayTabText;
        tabsContainer.appendChild( displayTab );

        displayTab.onclick = function () {
            showTabContents( displayTab, _element_ConfigurationDialog_Display );
        };

        var organizerTab = createElement( "div", "controls-tab" );
        organizerTab.innerText = _options.organizerTabText;
        tabsContainer.appendChild( organizerTab );

        organizerTab.onclick = function () {
            showTabContents( organizerTab, _element_ConfigurationDialog_Organizer );
        };

        _element_ConfigurationDialog_Groups = createElement( "div", "checkboxContainer controls-container custom-scroll-bars" );
        contents.appendChild( _element_ConfigurationDialog_Groups );

        _element_ConfigurationDialog_Display = createElement( "div", "checkboxContainer controls-container custom-scroll-bars" );
        _element_ConfigurationDialog_Display.style.display = "none";
        contents.appendChild( _element_ConfigurationDialog_Display );

        _element_ConfigurationDialog_Display_EnableAutoRefresh = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableAutoRefreshForEventsText )[ 0 ];
        _element_ConfigurationDialog_Display_EnableBrowserNotifications = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableBrowserNotificationsText )[ 0 ];
        _element_ConfigurationDialog_Display_EnableTooltips = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableTooltipsText )[ 0 ];
        _element_ConfigurationDialog_Display_EnableDragAndDropForEvents = buildCheckBox( _element_ConfigurationDialog_Display, _options.enableDragAndDropForEventText )[ 0 ];

        _element_ConfigurationDialog_Organizer = createElement( "div", "checkboxContainer controls-container custom-scroll-bars" );
        _element_ConfigurationDialog_Organizer.style.display = "none";
        contents.appendChild( _element_ConfigurationDialog_Organizer );

        createTextHeaderElement( _element_ConfigurationDialog_Organizer, _options.organizerNameText );

        _element_ConfigurationDialog_Organizer_Name = createElement( "input", null, "text" );
        _element_ConfigurationDialog_Organizer.appendChild( _element_ConfigurationDialog_Organizer_Name );

        createTextHeaderElement( _element_ConfigurationDialog_Organizer, _options.organizerEmailAddressText );

        _element_ConfigurationDialog_Organizer_Email = createElement( "input", null, "text" );
        _element_ConfigurationDialog_Organizer.appendChild( _element_ConfigurationDialog_Organizer_Email );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        createButtonElement( buttonsSplitContainer, _options.okText, "ok", configurationDialogEvent_OK );
        createButtonElement( buttonsSplitContainer, _options.cancelText, "cancel", configurationDialogEvent_Cancel );
    }

    function showTabContents( tab, contents ) {
        var tabs = _element_ConfigurationDialog.getElementsByClassName( "controls-tab-selected" ),
            tabsLength = tabs.length,
            allContents = _element_ConfigurationDialog.getElementsByClassName( "controls-container " ),
            allContentsLength = allContents.length;

        for ( var tabIndex = 0; tabIndex < tabsLength; tabIndex++ ) {
            tabs[ tabIndex ].className = "controls-tab";
        }

        for ( var allContentsIndex = 0; allContentsIndex < allContentsLength; allContentsIndex++ ) {
            allContents[ allContentsIndex ].style.display = "none";
        }

        tab.className = "controls-tab-selected";
        contents.style.display = "block";
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
            checkboxesLength = checkboxes.length;
        
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

        _options.eventNotificationsEnabled = _element_ConfigurationDialog_Display_EnableBrowserNotifications.checked;
        _options.tooltipsEnabled = _element_ConfigurationDialog_Display_EnableTooltips.checked;
        _options.dragAndDropForEventsEnabled = _element_ConfigurationDialog_Display_EnableDragAndDropForEvents.checked;
        _options.organizerName = _element_ConfigurationDialog_Organizer_Name.value;
        _options.organizerEmailAddress = _element_ConfigurationDialog_Organizer_Email.value;

        triggerOptionsEventWithData( "onOptionsUpdated", _options );
        checkForBrowserNotificationsPermission();
        buildDayEvents();
        hideConfigurationDialog();
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
        _element_ConfigurationDialog_Organizer_Name.value = _options.organizerName;
        _element_ConfigurationDialog_Organizer_Email.value = _options.organizerEmailAddress;

        _element_ConfigurationDialog.style.display = "block";
    }

    function hideConfigurationDialog() {
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
        
        if ( isDefined( _configuration.visibleGroups ) ) {
            visible = _configuration.visibleGroups.indexOf( configGroup ) > -1;
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

            _element_Tooltip_Title = createElement( "div", "title" );
            _element_Tooltip_Date = createElement( "div", "date" );
            _element_Tooltip_TotalTime = createElement( "div", "duration" );
            _element_Tooltip_Repeats = createElement( "div", "repeats" );
            _element_Tooltip_Description = createElement( "div", "description" );
            _element_Tooltip_Location = createElement( "div", "location" );

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
                if ( overrideShow || ( !isDisabledBackgroundDisplayed() && !isYearSelectorDropDownVisible() && !isDayDropDownMenuVisible() && !isEventDropDownMenuVisible() ) ) {
                    text = isDefined( text ) ? text : "";

                    _element_Tooltip.className = text === "" ? "calendar-tooltip-event" : "calendar-tooltip";

                    if ( text !== "" ) {
                        _element_Tooltip.innerText = text;
                    } else {

                        _element_Tooltip.innerHTML = "";
                        _element_Tooltip_Title.innerHTML = "";
                        _element_Tooltip_TotalTime.innerHTML = "";
                        _element_Tooltip.appendChild( _element_Tooltip_Title );
                        _element_Tooltip.appendChild( _element_Tooltip_Date );
                        _element_Tooltip.appendChild( _element_Tooltip_TotalTime );

                        var repeatEvery = getNumber( eventDetails.repeatEvery );
                        if ( repeatEvery > _const_Repeat_Never ) {
                            var icon = createElement( "div", "ib-refresh-medium" );
                            icon.style.borderColor = _element_Tooltip_Title.style.color;
                            _element_Tooltip_Title.appendChild( icon );
                        }
                        
                        _element_Tooltip_Title.innerHTML += eventDetails.title;

                        if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
                            _element_Tooltip_Repeats.innerText = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
                            addNode( _element_Tooltip, _element_Tooltip_Repeats );
                        } else {
                            _element_Tooltip_Repeats.innerText = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Repeats );
                        }

                        if ( isDefinedStringAndSet( eventDetails.location ) ) {
                            _element_Tooltip_Location.innerText = eventDetails.location;
                            addNode( _element_Tooltip, _element_Tooltip_Location );
                        } else {
                            _element_Tooltip_Location.innerText = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Location );
                        }
    
                        if ( isDefinedStringAndSet( eventDetails.description ) ) {
                            _element_Tooltip_Description.innerText = eventDetails.description;
                            addNode( _element_Tooltip, _element_Tooltip_Description );
                        } else {
                            _element_Tooltip_Description.innerText = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Description );
                        }
        
                        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                            if ( eventDetails.isAllDay ) {
                                _element_Tooltip_Date.innerText = _options.allDayText;
                            } else {
                                _element_Tooltip_Date.innerText = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
                                _element_Tooltip_TotalTime.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
                            }
                        } else {
                            buildDateTimeToDateTimeDisplay( _element_Tooltip_Date, eventDetails.from, eventDetails.to );

                            _element_Tooltip_TotalTime.innerText = getFriendlyTimeBetweenTwoDate( eventDetails.from, eventDetails.to );
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
        element.onmousemove = function( e ) {
            showTooltip( e, null, text, overrideShow );
        };
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Auto-Refresh Timer
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function startAutoRefreshTimer() {
        if ( _timer_RefreshMainDisplay === null && _options.autoRefreshTimerDelay > 0 ) {
            _timer_RefreshMainDisplay = setInterval( function() {
                refreshViews();
            }, _options.autoRefreshTimerDelay );
        }
    }

    function clearAutoRefreshTimer() {
        if ( _timer_RefreshMainDisplay !== null && _options.autoRefreshTimerDelay > 0 ) {
            clearTimeout( _timer_RefreshMainDisplay );
            _timer_RefreshMainDisplay = null;
        }
    }

    function refreshViews() {
        if ( isOnlyMainDisplayVisible() ) {
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
        return !isTooltipVisible() && !isDisabledBackgroundDisplayed() && !isYearSelectorDropDownVisible() && !isDayDropDownMenuVisible() && !isEventDropDownMenuVisible();
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
        element.innerText = text;
        container.appendChild( element );
    }

    function createSpanElement( container, text, className, event ) {
        var element = createElement( "span", className );
        element.innerText = text;        
        container.appendChild( element );

        if ( isDefined( event ) ) {
            element.onclick = event;
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
            _elements[ id ] = _document.getElementById( id );
        }

        if ( !_document.body.contains( _elements[ id ] ) ) {
            _elements[ id ] = _document.getElementById( id );
        }

        return _elements[ id ];
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

    function buildCheckBox( container, labelText, onChangeEvent, name, checked ) {
        var lineContents = createElement( "div" );
        container.appendChild( lineContents );

        var label = createElement( "label", "checkbox" );
        label.innerText = labelText;
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

    function isDefinedArray( object ) {
        return isDefined( object ) && typeof object === "object" && object instanceof Array;
    }

    function isDefinedStringAndSet( object ) {
        return isDefinedString( object ) && object !== "";
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
        }

        if ( contents !== "" ) {
            var tempLink = createElement( "a" ),
                mimeTypeStart = "text",
                mimeTypeEnd = type,
                extension = type;

            if ( type === "text" ) {
                mimeTypeEnd = "plain";
                extension = "txt";
            } else if ( type === "ical" ) {
                mimeTypeEnd = "calendar";
                extension = "ics";
            } else if ( type === "json" ) {
                mimeTypeStart = "application";
            } else if ( type === "md" ) {
                mimeTypeEnd = "x-markdown";
            } else if ( type === "html" ) {
                mimeTypeEnd = "html";
            }

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
            datePart = padNumber( date.getDate() ) + "-" + padNumber( date.getMonth() ) + "-" + date.getFullYear(),
            timePart = padNumber( date.getHours() ) + "-" + padNumber( date.getMinutes() );

        return _options.exportStartFilename + datePart + "_" + timePart + "." + extension;
    }

    function getYesNoFromBoolean( flag ) {
        return flag ? _options.yesText : _options.noText;
    }

    function getStringFromDateTime( eventDate ) {
        var result = _options.repeatsNever;

        if ( isDefined( eventDate ) ) {
            var date = padNumber( eventDate.getDate() ) + "/" + padNumber( eventDate.getMonth() ) + "/" + eventDate.getFullYear(),
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

    function getArray( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : [];

        return isDefinedArray( value ) ? value : defaultValue;
    }

    function getRepeatsText( value ) {
        var result = _options.repeatsNever,
            repeatEvery = getNumber( value );

        if ( repeatEvery === _const_Repeat_EveryDay ) {
            result = _options.repeatsEveryDayText;
        } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
            result = _options.repeatsEveryWeekText;
        } else if ( repeatEvery === _const_Repeat_Every2Weeks ) {
            result = _options.repeatsEvery2WeeksText;
        }  else if ( repeatEvery === _const_Repeat_EveryMonth ) {
            result = _options.repeatsEveryMonthText;
        } else if ( repeatEvery === _const_Repeat_EveryYear ) {
            result = _options.repeatsEveryYearText;
        }

        return result;
    }

    function getArrayText( value ) {
        return getArray( value ).join( "," );
    }

    function getPropertyName( name ) {
        return name.charAt( 0 ).toUpperCase() + name.slice( 1 );
    }

    function getPropertyValue( name, value ) {
        var result = getString( value );

        if ( typeof value === "boolean" ) {
            result = getYesNoFromBoolean( value );
        } else if ( typeof value === "object" && value instanceof Date ) {
            result = getStringFromDateTime( value );
        } else if ( typeof value === "object" && value instanceof Array ) {
            if ( name === "repeatEveryExcludeDays" ) {
                result = getArrayDays( value );
            } else {
                result = getArrayText( value );
            }
        } else if ( typeof value === "number" ) {
            if ( name === "repeatEvery" ) {
                result = getRepeatsText( value );
            } else {
                result = value.toString();
            }
        }

        return result;
    }

    function getICalDateTimeString( eventDate ) {
        var format = [];
        format.push( eventDate.getFullYear() );
        format.push( eventDate.getMonth() );
        format.push( eventDate.getDate() );
        format.push( "T" );
        format.push( eventDate.getHours() );
        format.push( eventDate.getMinutes() );
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
                _options.organizerNameText,
                _options.organizerEmailAddressText
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
        eventContents.push( getString( eventDetails.organizerName ) );
        eventContents.push( getString( eventDetails.organizerEmailAddress ) );

        return eventContents;
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
            var orderedEvent = orderedEvents[ orderedEventIndex ];

            contents.push( "<Event>" );

            for ( var propertyName in orderedEvent ) {
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
        contents.push( "\"events:\": [" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ];
            
            contents.push( "{" );

            for ( var propertyName in orderedEvent ) {
                if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                    contents.push( "\"" + propertyName + "\":\"" + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) + "\"," );
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
            var orderedEvent = orderedEvents[ orderedEventIndex ];

            for ( var propertyName in orderedEvent ) {
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
            contents.push( "DTSTAMP:" + getICalDateTimeString( orderedEvent.created ) );
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
            var orderedEvent = orderedEvents[ orderedEventIndex ];

            contents.push( "<h3><b>" + orderedEvent.id + ":</b></h3>" );
            contents.push( "<ul>" );

            for ( var propertyName in orderedEvent ) {
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
     * Main Controls (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * turnOnFullScreen().
     * 
     * Turns on the full-screen mode (if enabled).
     */
    this.turnOnFullScreen = function() {
        turnOnFullScreenMode();
    };

    /**
     * turnOffFullScreen().
     * 
     * Turns off the full-screen mode (if enabled).
     */
    this.turnOffFullScreen = function() {
        turnOffFullScreenMode();
    };

    /**
     * startTheAutoRefreshTimer().
     * 
     * Starts the auto-refresh timer (if enabled).
     */
    this.startTheAutoRefreshTimer = function() {
        startAutoRefreshTimer();
    };

    /**
     * stopTheAutoRefreshTimer().
     * 
     * Stops the auto-refresh timer (if enabled).
     */
    this.stopTheAutoRefreshTimer = function() {
        clearAutoRefreshTimer();
    };

    /**
     * destroy().
     * 
     * Removes the calendar from the DOM.
     */
    this.destroy = function() {
        _element_Calendar.className = "";
        _element_Calendar.innerHTML = "";
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
     * @fires onPreviousMonth
     */
    this.moveToPreviousMonth = function() {
        moveBackMonth();
    };

    /**
     * moveToNextMonth().
     * 
     * Moves to the next month.
     * 
     * @fires onNextMonth
     */
    this.moveToNextMonth = function() {
        moveForwardMonth();
    };

    /**
     * moveToPreviousYear().
     * 
     * Moves to the previous year.
     * 
     * @fires onPreviousYear
     */
    this.moveToPreviousYear = function() {
        moveBackYear();
    };

    /**
     * moveToNextYear().
     * 
     * Moves to the next year.
     * 
     * @fires onNextYear
     */
    this.moveToNextYear = function() {
        moveForwardYear();
    };

    /**
     * moveToToday().
     * 
     * Moves to the current month.
     * 
     * @fires onToday
     */
    this.moveToToday = function() {
        moveToday();
    };

    /**
     * getCurrentDisplayDate().
     * 
     * Returns the current date that is being used in the main display.
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
     * @fires onSetDate
     * 
     * @param       {Object}    date                                        The Date() object to set.
     */
    this.setCurrentDisplayDate = function( date ) {
        build( new Date( date ) );
        triggerOptionsEvent( "onSetDate" );
    };

    /**
     * exportAllEvents().
     * 
     * Exports all the events into a downloadable file.
     * 
     * @fires onEventsExported
     * 
     * @param       {string}    type                                        The data type to export to (defaults to "csv", accepts "csv", "xml", "json", "txt", "ical", "md", and "html").
     */
    this.exportAllEvents = function( type ) {
        if ( _options.exportEventsEnabled ) {
            type = !isDefined( type ) ? "csv" : type;

            exportEvents( null, type );
        }
    };

    /**
     * refresh().
     * 
     * Refreshes all of the views.
     */
    this.refresh = function() {
        refreshViews();
    };

    function moveBackMonth() {
        var previousMonth = new Date( _currentDate );
        previousMonth.setMonth( previousMonth.getMonth() - 1 );

        build( previousMonth );
        triggerOptionsEvent( "onPreviousMonth" );
    }

    function moveForwardMonth() {
        var nextMonth = new Date( _currentDate );
        nextMonth.setMonth( nextMonth.getMonth() + 1 );

        build( nextMonth );
        triggerOptionsEvent( "onNextMonth" );
    }

    function moveBackYear() {
        var previousYear = new Date( _currentDate );
        previousYear.setFullYear( previousYear.getFullYear() - 1 );

        build( previousYear );
        triggerOptionsEvent( "onPreviousYear" );
    }

    function moveForwardYear() {
        var nextYear = new Date( _currentDate );
        nextYear.setFullYear( nextYear.getFullYear() + 1 );

        build( nextYear );
        triggerOptionsEvent( "onNextYear" );
    }

    function moveToday() {
        var today = new Date();

        if ( _currentDate.getMonth() !== today.getMonth() || _currentDate.getFullYear() !== today.getFullYear() ) {
            build();
            triggerOptionsEvent( "onToday" );
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
     * @fires       onEventsSet
     * 
     * @param       {Object[]}  events                                      The array of events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventsSet" event should be triggered.
     */
    this.setEvents = function( events, updateEvents, triggerEvent ) {
        triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;
        _events = {};

        this.addEvents( events, updateEvents, false );

        if ( triggerEvent ) {
            triggerOptionsEventWithData( "onEventsSet", events );
        }
    };

    /**
     * addEvents().
     * 
     * Adds an array of new events.
     * 
     * @fires       onEventsAdded
     * 
     * @param       {Object[]}  events                                      The array of events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventsAdded" event should be triggered.
     */
    this.addEvents = function( events, updateEvents, triggerEvent ) {
        updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
        triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

        var eventsLength = events.length;
        for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
            var event = events[ eventIndex ];

            this.addEvent( event, false, false );
        }

        if ( triggerEvent ) {
            triggerOptionsEventWithData( "onEventsAdded", events );
        }

        if ( updateEvents ) {
            buildDayEvents();
            refreshOpenedViews();
        }
    };

    /**
     * addEvent().
     * 
     * Adds a of new event.
     * 
     * @fires       onEventAdded
     * 
     * @param       {Object}    event                                       The event (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventAdded" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was added.
     */
    this.addEvent = function( event, updateEvents, triggerEvent ) {
        var added = false;

        if ( event.from <= event.to ) {
            var storageDate = toStorageDate( event.from ),
                storageGuid = newGuid(),
                title = getString( event.title ),
                description = getString( event.description ),
                location = getString( event.location ),
                group = getString( event.group );

            if ( !_events.hasOwnProperty( storageDate ) ) {
                _events[ storageDate ] = {};
            }

            if ( !_events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
                triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

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

                if ( !isDefined( event.created ) ) {
                    event.created = new Date();
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

        return added;
    };

    /**
     * updateEvents().
     * 
     * Updates an array of existing events.
     * 
     * @fires       onEventsUpdated
     * 
     * @param       {Object[]}  events                                      The array of events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventsUpdated" event should be triggered.
     */
     this.updateEvents = function( events, updateEvents, triggerEvent ) {
        updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
        triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

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
    };

    /**
     * updateEvent().
     * 
     * Updates an existing event.
     * 
     * @fires       onEventUpdated
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {Object}    event                                       The event (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventUpdated" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was updated.
     */
    this.updateEvent = function( id, event, updateEvents, triggerEvent ) {
        var updated = this.removeEvent( id, false, false );
        if ( updated ) {
            updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

            updated = this.addEvent( event, updateEvents, false );

            if ( updated && triggerEvent ) {
                triggerOptionsEventWithData( "onEventUpdated", event );
            }
        }
        
        return updated;
    };

    /**
     * updateEventDateTimes().
     * 
     * Updates an existing events from, to, and repeatEnds dates.
     * 
     * @fires       onEventUpdated
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {Object}    from                                        The new from date.
     * @param       {Object}    to                                          The new to date.
     * @param       {Object}    repeatEnds                                  The new repeat ends day.
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventUpdated" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was updated.
     */
     this.updateEventDateTimes = function( id, from, to, repeatEnds, updateEvents, triggerEvent ) {
        var updated = false;

        getAllEventsFunc( function( event ) {
            if ( event.id === id ) {
                updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
                triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

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
        
        return updated;
    };

    /**
     * removeEvent().
     * 
     * Removes an event.
     * 
     * @fires       onEventRemoved
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventRemoved" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was removed.
     */
    this.removeEvent = function( id, updateEvents, triggerEvent ) {
        var removed = false;

        getAllEventsFunc( function( event, storageDate, storageGuid ) {
            if ( storageGuid === id ) {
                updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
                triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

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

        return removed;
    };

    /**
     * clearEvents().
     * 
     * Clears all the events.
     * 
     * @fires       onEventsCleared
     * 
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     */
    this.clearEvents = function( updateEvents ) {
        updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
        _events = {};

        triggerOptionsEvent( "onEventsCleared" );

        if ( updateEvents ) {
            buildDayEvents();
            refreshOpenedViews();
        }
    };

    /**
     * getEvents().
     * 
     * Returns an array of the events available.
     * 
     * @returns     {Object[]}                                              An array of the event.
     */
    this.getEvents = function() {
        return getOrderedEvents( getAllEvents() );
    };

    /**
     * getEvent().
     * 
     * Returns an event that matches the ID passed.
     * 
     * @param       {string}    id                                          The ID of the event to get.
     * 
     * @returns     {Object}                                                The event details (or null if the ID cannot be found).
     */
    this.getEvent = function( id ) {
        var returnEvent = null;

        getAllEventsFunc( function( event ) {
            if ( event.id === id ) {
                returnEvent = event;
                return true;
            }
        } );

        return returnEvent;
    };

    function toStorageDate( date ) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Get/Set Additional Data (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * getAllGroups().
     * 
     * Returns an array of group names being used.
     * 
     * @returns     {Object[]}                                              An array of the group names.
     */
    this.getAllGroups = function() {
        return getGroups();
    };

    /**
     * clearAllGroups().
     * 
     * Clears all the event groups.
     * 
     * @fires       onGroupsCleared
     * 
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     */
    this.clearAllGroups = function( updateEvents ) {
        updateEvents = !isDefined( updateEvents ) ? true : updateEvents;

        getAllEventsFunc( function( event ) {
            event.group = null;
        } );

        triggerOptionsEvent( "onGroupsCleared" );

        if ( updateEvents ) {
            buildDayEvents();
            refreshOpenedViews();
        }
    };

    /**
     * getVersion().
     * 
     * Returns the version of Calendar.js.
     * 
     * @returns     {string}                                                The version number.
     */
    this.getVersion = function() {
        return "0.9.7";
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Setting Options (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * setOptions().
     * 
     * @fires       onOptionsUpdated
     * 
     * Sets the specific options that should be used.
     * 
     * @param       {Object}    newOptions                                  All the options that should be set (refer to "Options" documentation for properties).
     * @param       {boolean}   triggerEvent                                States of the "onOptionsUpdated" event should be triggered.
     */
    this.setOptions = function( newOptions, triggerEvent ) {
        newOptions = getOptions( newOptions );

        for ( var propertyName in newOptions ) {
            if ( newOptions.hasOwnProperty( propertyName ) ) {
                _options[ propertyName ] = newOptions[ propertyName ];
            }
        }

        checkForBrowserNotificationsPermission();

        if ( _initialized ) {
            triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

            if ( triggerEvent ) {
                triggerOptionsEventWithData( "onOptionsUpdated", _options );
            }

            _initialized = false;

            build( _currentDate, true );
        }
    };

    function buildDefaultOptions( newOptions ) {
        _options = getOptions( newOptions );

        if ( !isDefined( _options.showDayNumberOrdinals ) ) {
            _options.showDayNumberOrdinals = true;
        }

        if ( !isDefined( _options.dragAndDropForEventsEnabled ) ) {
            _options.dragAndDropForEventsEnabled = true;
        }

        if ( !isDefined( _options.maximumEventsPerDayDisplay ) ) {
            _options.maximumEventsPerDayDisplay = 3;
        }

        if ( !isDefined( _options.extraSelectableYearsAhead ) ) {
            _options.extraSelectableYearsAhead = 51;
        }

        if ( !isDefined( _options.exportEventsEnabled ) ) {
            _options.exportEventsEnabled = true;
        }

        if ( !isDefined( _options.manualEditingEnabled ) ) {
            _options.manualEditingEnabled = true;
        }

        if ( !isDefined( _options.showTimesInMainCalendarEvents ) ) {
            _options.showTimesInMainCalendarEvents = false;
        }

        if ( !isDefined( _options.autoRefreshTimerDelay ) ) {
            _options.autoRefreshTimerDelay = 30000;
        }

        if ( !isDefined( _options.fullScreenModeEnabled ) ) {
            _options.fullScreenModeEnabled = true;
        }

        if ( !isDefined( _options.eventTooltipDelay ) ) {
            _options.eventTooltipDelay = 1000;
        }

        if ( !isDefined( _options.minimumDayHeight ) ) {
            _options.minimumDayHeight = 0;
        }

        if ( !isDefined( _options.holidays ) ) {
            _options.holidays = getStandardHolidays();
        }

        if ( !isDefined( _options.organizerName ) ) {
            _options.organizerName = "";
        }
        
        if ( !isDefined( _options.organizerEmailAddress ) ) {
            _options.organizerEmailAddress = "";
        }

        if ( !isDefined( _options.spacing ) ) {
            _options.spacing = 10;
        }

        if ( !isDefined( _options.showAllDayEventDetailsInFullDayView ) ) {
            _options.showAllDayEventDetailsInFullDayView = false;
        }

        if ( !isDefined( _options.showWeekNumbersInTitles ) ) {
            _options.showWeekNumbersInTitles = false;
        }

        if ( !isDefined( _options.showTimelineArrowOnFullDayView ) ) {
            _options.showTimelineArrowOnFullDayView = true;
        }

        if ( !isDefined( _options.maximumEventTitleLength ) ) {
            _options.maximumEventTitleLength = 0;
        }

        if ( !isDefined( _options.maximumEventDescriptionLength ) ) {
            _options.maximumEventDescriptionLength = 0;
        }

        if ( !isDefined( _options.maximumEventLocationLength ) ) {
            _options.maximumEventLocationLength = 0;
        }

        if ( !isDefined( _options.maximumEventGroupLength ) ) {
            _options.maximumEventGroupLength = 0;
        }

        if ( !isDefined( _options.eventNotificationsEnabled ) ) {
            _options.eventNotificationsEnabled = false;
        }

        if ( !isDefined( _options.showPreviousNextMonthNamesInMainDisplay ) ) {
            _options.showPreviousNextMonthNamesInMainDisplay = true;
        }

        if ( !isDefined( _options.showDayNamesInMainDisplay ) ) {
            _options.showDayNamesInMainDisplay = true;
        }

        if ( !isDefined( _options.tooltipsEnabled ) ) {
            _options.tooltipsEnabled = true;
        }

        if ( !isDefined( _options.useOnlyDotEventsForMainDisplay ) ) {
            _options.useOnlyDotEventsForMainDisplay = false;
        }

        if ( !isDefined( _options.visibleDays ) ) {
            _options.visibleDays = [ 0, 1, 2, 3, 4, 5, 6 ];
        }

        setTranslationStringOptions();
        checkForBrowserNotificationsPermission();
    }

    function setTranslationStringOptions() {
        if ( !isDefined( _options.previousMonthTooltipText ) ) {
            _options.previousMonthTooltipText = "Previous Month";
        }

        if ( !isDefined( _options.nextMonthTooltipText ) ) {
            _options.nextMonthTooltipText = "Next Month";
        }

        if ( !isDefined( _options.previousDayTooltipText ) ) {
            _options.previousDayTooltipText = "Previous Day";
        }

        if ( !isDefined( _options.nextDayTooltipText ) ) {
            _options.nextDayTooltipText = "Next Day";
        }

        if ( !isDefined( _options.previousWeekTooltipText ) ) {
            _options.previousWeekTooltipText = "Previous Week";
        }

        if ( !isDefined( _options.nextWeekTooltipText ) ) {
            _options.nextWeekTooltipText = "Next Week";
        }

        if ( !isDefined( _options.addEventTooltipText ) ) {
            _options.addEventTooltipText = "Add Event";
        }

        if ( !isDefined( _options.closeTooltipText ) ) {
            _options.closeTooltipText = "Close";
        }

        if ( !isDefined( _options.exportEventsTooltipText ) ) {
            _options.exportEventsTooltipText = "Export Events";
        }

        if ( !isDefined( _options.todayTooltipText ) ) {
            _options.todayTooltipText = "Today";
        }

        if ( !isDefined( _options.refreshTooltipText ) ) {
            _options.refreshTooltipText = "Refresh";
        }

        if ( !isDefined( _options.searchTooltipText ) ) {
            _options.searchTooltipText = "Search";
        }

        if ( !isDefined( _options.expandDayTooltipText ) ) {
            _options.expandDayTooltipText = "Expand Day";
        }

        if ( !isDefined( _options.listAllEventsTooltipText ) ) {
            _options.listAllEventsTooltipText = "View All Events";
        }

        if ( !isDefined( _options.listWeekEventsTooltipText ) ) {
            _options.listWeekEventsTooltipText = "View Current Week Events";
        }

        if ( !isDefined( _options.dayHeaderNames ) ) {
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

        if ( !isDefined( _options.dayNames ) ) {
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

        if ( !isDefined( _options.monthNames ) ) {
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

        if ( !isDefined( _options.fromText ) ) {
            _options.fromText = "From:";
        }

        if ( !isDefined( _options.toText ) ) {
            _options.toText = "To:";
        }

        if ( !isDefined( _options.isAllDayText ) ) {
            _options.isAllDayText = "Is All-Day";
        }

        if ( !isDefined( _options.titleText ) ) {
            _options.titleText = "Title:";
        }

        if ( !isDefined( _options.descriptionText ) ) {
            _options.descriptionText = "Description:";
        }

        if ( !isDefined( _options.locationText ) ) {
            _options.locationText = "Location:";
        }

        if ( !isDefined( _options.addText ) ) {
            _options.addText = "Add";
        }

        if ( !isDefined( _options.updateText ) ) {
            _options.updateText = "Update";
        }

        if ( !isDefined( _options.cancelText ) ) {
            _options.cancelText = "Cancel";
        }

        if ( !isDefined( _options.removeEventText ) ) {
            _options.removeEventText = "Remove";
        }

        if ( !isDefined( _options.addEventTitle ) ) {
            _options.addEventTitle = "Add Event";
        }

        if ( !isDefined( _options.editEventTitle ) ) {
            _options.editEventTitle = "Edit Event";
        }

        if ( !isDefined( _options.exportStartFilename ) ) {
            _options.exportStartFilename = "exported_events_";
        }

        if ( !isDefined( _options.fromTimeErrorMessage ) ) {
            _options.fromTimeErrorMessage = "Please select a valid 'From' time.";
        }

        if ( !isDefined( _options.toTimeErrorMessage ) ) {
            _options.toTimeErrorMessage = "Please select a valid 'To' time.";
        }

        if ( !isDefined( _options.toSmallerThanFromErrorMessage ) ) {
            _options.toSmallerThanFromErrorMessage = "Please select a 'To' date that is larger than the 'From' date.";
        }

        if ( !isDefined( _options.titleErrorMessage ) ) {
            _options.titleErrorMessage = "Please enter a value in the 'Title' field (no empty space).";
        }

        if ( !isDefined( _options.stText ) ) {
            _options.stText = "st";
        }

        if ( !isDefined( _options.ndText ) ) {
            _options.ndText = "nd";
        }

        if ( !isDefined( _options.rdText ) ) {
            _options.rdText = "rd";
        }

        if ( !isDefined( _options.thText ) ) {
            _options.thText = "th";
        }

        if ( !isDefined( _options.yesText ) ) {
            _options.yesText = "Yes";
        }

        if ( !isDefined( _options.noText ) ) {
            _options.noText = "No";
        }

        if ( !isDefined( _options.allDayText ) ) {
            _options.allDayText = "All-Day";
        }

        if ( !isDefined( _options.allEventsText ) ) {
            _options.allEventsText = "All Events";
        }

        if ( !isDefined( _options.toTimeText ) ) {
            _options.toTimeText = "to";
        }
        
        if ( !isDefined( _options.confirmEventRemoveTitle ) ) {
            _options.confirmEventRemoveTitle = "Confirm Event Removal";
        }
        
        if ( !isDefined( _options.confirmEventRemoveMessage ) ) {
            _options.confirmEventRemoveMessage = "Removing this event cannot be undone.  Do you want to continue?";
        }
        
        if ( !isDefined( _options.okText ) ) {
            _options.okText = "OK";
        }
        
        if ( !isDefined( _options.selectExportTypeTitle ) ) {
            _options.selectExportTypeTitle = "Select Export Type";
        }
        
        if ( !isDefined( _options.selectColorsText ) ) {
            _options.selectColorsText = "Select Colors";
        }
        
        if ( !isDefined( _options.backgroundColorText ) ) {
            _options.backgroundColorText = "Background Color:";
        }
        
        if ( !isDefined( _options.textColorText ) ) {
            _options.textColorText = "Text Color:";
        }
        
        if ( !isDefined( _options.borderColorText ) ) {
            _options.borderColorText = "Border Color:";
        }
        
        if ( !isDefined( _options.searchEventsTitle ) ) {
            _options.searchEventsTitle = "Search Events";
        }
        
        if ( !isDefined( _options.previousText ) ) {
            _options.previousText = "Previous";
        }
        
        if ( !isDefined( _options.nextText ) ) {
            _options.nextText = "Next";
        }
        
        if ( !isDefined( _options.matchCaseText ) ) {
            _options.matchCaseText = "Match Case";
        }
        
        if ( !isDefined( _options.repeatsText ) ) {
            _options.repeatsText = "Repeats:";
        }
        
        if ( !isDefined( _options.repeatDaysToExcludeText ) ) {
            _options.repeatDaysToExcludeText = "Repeat Days To Exclude:";
        }
        
        if ( !isDefined( _options.daysToExcludeText ) ) {
            _options.daysToExcludeText = "Days To Exclude:";
        }
        
        if ( !isDefined( _options.seriesIgnoreDatesText ) ) {
            _options.seriesIgnoreDatesText = "Series Ignore Dates:";
        }
        
        if ( !isDefined( _options.repeatsNever ) ) {
            _options.repeatsNever = "Never";
        }
        
        if ( !isDefined( _options.repeatsEveryDayText ) ) {
            _options.repeatsEveryDayText = "Every Day";
        }
        
        if ( !isDefined( _options.repeatsEveryWeekText ) ) {
            _options.repeatsEveryWeekText = "Every Week";
        }

        if ( !isDefined( _options.repeatsEvery2WeeksText ) ) {
            _options.repeatsEvery2WeeksText = "Every 2 Weeks";
        }
        
        if ( !isDefined( _options.repeatsEveryMonthText ) ) {
            _options.repeatsEveryMonthText = "Every Month";
        }
        
        if ( !isDefined( _options.repeatsEveryYearText ) ) {
            _options.repeatsEveryYearText = "Every Year";
        }
        
        if ( !isDefined( _options.repeatOptionsTitle ) ) {
            _options.repeatOptionsTitle = "Repeat Options";
        }
        
        if ( !isDefined( _options.moreText ) ) {
            _options.moreText = "More";
        }
        
        if ( !isDefined( _options.includeText ) ) {
            _options.includeText = "Include:";
        }
        
        if ( !isDefined( _options.minimizedTooltipText ) ) {
            _options.minimizedTooltipText = "Minimize";
        }
        
        if ( !isDefined( _options.restoreTooltipText ) ) {
            _options.restoreTooltipText = "Restore";
        }
        
        if ( !isDefined( _options.removeAllEventsInSeriesText ) ) {
            _options.removeAllEventsInSeriesText = "Remove All Events In Series";
        }
        
        if ( !isDefined( _options.createdText ) ) {
            _options.createdText = "Created:";
        }
        
        if ( !isDefined( _options.organizerNameText ) ) {
            _options.organizerNameText = "Organizer:";
        }
        
        if ( !isDefined( _options.organizerEmailAddressText ) ) {
            _options.organizerEmailAddressText = "Organizer Email:";
        }
        
        if ( !isDefined( _options.enableFullScreenTooltipText ) ) {
            _options.enableFullScreenTooltipText = "Turn On Full-Screen Mode";
        }
        
        if ( !isDefined( _options.disableFullScreenTooltipText ) ) {
            _options.disableFullScreenTooltipText = "Turn Off Full-Screen Mode";
        }
        
        if ( !isDefined( _options.idText ) ) {
            _options.idText = "ID:";
        }
        
        if ( !isDefined( _options.expandMonthTooltipText ) ) {
            _options.expandMonthTooltipText = "Expand Month";
        }
        
        if ( !isDefined( _options.repeatEndsText ) ) {
            _options.repeatEndsText = "Repeat Ends:";
        }
        
        if ( !isDefined( _options.noEventsAvailableText ) ) {
            _options.noEventsAvailableText = "No events available.";
        }
        
        if ( !isDefined( _options.viewWeekEventsText ) ) {
            _options.viewWeekEventsText = "View Week Events";
        }
        
        if ( !isDefined( _options.noEventsAvailableFullText ) ) {
            _options.noEventsAvailableFullText = "There are no events available to view.";
        }
        
        if ( !isDefined( _options.clickText ) ) {
            _options.clickText = "Click";
        }
        
        if ( !isDefined( _options.hereText ) ) {
            _options.hereText = "here";
        }
        
        if ( !isDefined( _options.toAddANewEventText ) ) {
            _options.toAddANewEventText = "to add a new event.";
        }
        
        if ( !isDefined( _options.weekText ) ) {
            _options.weekText = "Week";
        }
        
        if ( !isDefined( _options.groupText ) ) {
            _options.groupText = "Group:";
        }
        
        if ( !isDefined( _options.configurationTooltipText ) ) {
            _options.configurationTooltipText = "Configuration";
        }
        
        if ( !isDefined( _options.configurationTitleText ) ) {
            _options.configurationTitleText = "Configuration";
        }
        
        if ( !isDefined( _options.groupsTabText ) ) {
            _options.groupsTabText = "Groups";
        }
        
        if ( !isDefined( _options.eventNotificationTitle ) ) {
            _options.eventNotificationTitle = "Calendar.js";
        }
        
        if ( !isDefined( _options.eventNotificationBody ) ) {
            _options.eventNotificationBody = "The event '{0}' has started.";
        }

        if ( !isDefined( _options.optionsText ) ) {
            _options.optionsText = "Options:";
        }

        if ( !isDefined( _options.startsWithText ) ) {
            _options.startsWithText = "Starts With";
        }

        if ( !isDefined( _options.endsWithText ) ) {
            _options.endsWithText = "Ends With";
        }

        if ( !isDefined( _options.containsText ) ) {
            _options.containsText = "Contains";
        }

        if ( !isDefined( _options.displayTabText ) ) {
            _options.displayTabText = "Display";
        }
        
        if ( !isDefined( _options.enableAutoRefreshForEventsText ) ) {
            _options.enableAutoRefreshForEventsText = "Enable auto-refresh for events";
        }

        if ( !isDefined( _options.enableBrowserNotificationsText ) ) {
            _options.enableBrowserNotificationsText = "Enable browser notifications";
        }

        if ( !isDefined( _options.enableTooltipsText ) ) {
            _options.enableTooltipsText = "Enable tooltips";
        }

        if ( !isDefined( _options.dayText ) ) {
            _options.dayText = "day";
        }

        if ( !isDefined( _options.daysText ) ) {
            _options.daysText = "days";
        }

        if ( !isDefined( _options.hourText ) ) {
            _options.hourText = "hour";
        }

        if ( !isDefined( _options.hoursText ) ) {
            _options.hoursText = "hours";
        }

        if ( !isDefined( _options.minuteText ) ) {
            _options.minuteText = "minute";
        }

        if ( !isDefined( _options.minutesText ) ) {
            _options.minutesText = "minutes";
        }

        if ( !isDefined( _options.enableDragAndDropForEventText ) ) {
            _options.enableDragAndDropForEventText = "Enable drag & drop for events";
        }

        if ( !isDefined( _options.organizerTabText ) ) {
            _options.organizerTabText = "Organizer";
        }
    }

    function checkForBrowserNotificationsPermission() {
        if ( _options.eventNotificationsEnabled ) {
            if ( !Notification ) {
                console.error( "Browser notifications API unavailable." );
            } else {

                if ( Notification.permission !== "granted" ) {
                    Notification.requestPermission();
                }
            }
        }
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

        buildDefaultOptions( options );
        build( startDateTime, true );

    } ) ( document, window );
}