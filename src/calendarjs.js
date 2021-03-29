/*
 * Calendar.js Library v0.9.0
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
 */


/**
 * Options.
 * 
 * These are the options that are used to control how Calendar.js works and renders.
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
 * @property    {string}    monthNames                                  The names to use for months (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]').
 * @property    {boolean}   showDayNumberOrdinals                       States if the day ordinal values should be shown (defaults to true).  
 * @property    {boolean}   dragAndDropForEventsEnabled                 States if dragging and dropping events around the days of the month is enabled (defaults to true).
 * @property    {string}    exportStartFilename                         The starting filename that should be used when exporting all the calendar events (defaults to "exported_events_").
 * @property    {string}    fromTimeErrorMessage                        The error message shown for the "Please select a valid 'From' time." label.
 * @property    {string}    toTimeErrorMessage                          The error message shown for the "Please select a valid 'To' time." label.
 * @property    {string}    toSmallerThanFromErrorMessage               The error message shown for the "Please select a 'To' date that is larger than the 'From' date." label.
 * @property    {string}    titleErrorMessage                           The error message shown for the "Please enter a value in the 'Title' field (no empty space)." label.
 * @property    {string}    stText                                      The day ordinal text for "st".
 * @property    {string}    ndText                                      The day ordinal text for "nd".
 * @property    {string}    rdText                                      The day ordinal text for "rd".
 * @property    {string}    thText                                      The day ordinal text for "th".
 * @property    {number}    maximumEventsPerDayDisplay                  The maximum number of events that should be display per day in the main calendar display (defaults to 3, 0 disables it).
 * @property    {string}    yesText                                     The text that should be displayed for the "Yes" label.
 * @property    {string}    noText                                      The text that should be displayed for the "No" label.
 * @property    {number}    extraSelectableYearsAhead                   The number of extra years ahead that are selectable in the drop down (defaults to 51).
 * @property    {string}    allDayText                                  The text that should be displayed for the "All-Day" label.
 * @property    {string}    allEventsText                               The text that should be displayed for the "All Events" label.
 * @property    {boolean}   exportEventsEnabled                         States if exporting events is enabled (defaults to true).
 * @property    {boolean}   manualEditingEnabled                        States if adding, editing, dragging and removing events is enabled (defaults to true).
 * @property    {boolean}   showTimesInMainCalendarEvents               States if the time should be shown on the main calendar view events (defaults to false).
 * @property    {string}    toTimeText                                  The text that should be displayed for the "to" label.
 * @property    {number}    autoRefreshTimerDelay                       The amount of time to wait before each full refresh (defaults to 30000 milliseconds, 0 disables it).
 * @property    {string}    confirmEventRemoveTitle                     The title of the confirmation message shown when removing an event (defaults to "Confirm Event Removal").
 * @property    {string}    confirmEventRemoveMessage                   The text for the confirmation message shown when removing an event (defaults to "Removing this event cannot be undone.  Do you want to continue?").
 * @property    {string}    okText                                      The text that should be displayed for the "OK" button.
 * @property    {string}    selectExportTypeTitle                       The text that should be displayed for the "Select Export Type" label.
 * @property    {boolean}   fullScreenModeEnabled                       States if double click on the main title bar activates full screen mode (defaults to true).
 * @property    {number}    eventTooltipDelay                           The amount of time to wait until an event tooltip is shown (defaults to 1000 milliseconds).
 * @property    {string}    selectColorsText                            The text that should be displayed for the "Select Colors" label.
 * @property    {string}    backgroundColorText                         The text that should be displayed for the "Background Color:" label.
 * @property    {string}    textColorText                               The text that should be displayed for the "Text Color:" label.
 * @property    {string}    borderColorText                             The text that should be displayed for the "Border Color:" label.
 * @property    {string}    searchEventsTitle                           The text that should be displayed for the "Search Events" label.
 * @property    {string}    forText                                     The text that should be displayed for the "For:" label.
 * @property    {string}    previousText                                The text that should be displayed for the "Previous" button.
 * @property    {string}    nextText                                    The text that should be displayed for the "Next" button.
 * @property    {string}    matchCaseText                               The text that should be displayed for the "Match Case" label.
 * @property    {number}    minimumDayHeight                            States the height the main calendar days should used (defaults to 0 - auto).
 * @property    {string}    repeatsText                                 The text that should be displayed for the "Repeats:" label.
 * @property    {string}    repeatDaysToExcludeText                     The text that should be displayed for the "Repeat Days To Exclude:" label.
 * @property    {string}    daysToExcludeText                           The text that should be displayed for the "Days To Exclude:" label.
 * @property    {string}    seriesIgnoreDatesText                       The text that should be displayed for the "Series Ignore Dates:" label.
 * @property    {string}    repeatsNever                                The text that should be displayed for the "Never" label.
 * @property    {string}    repeatsEveryDayText                         The text that should be displayed for the "Every Day" label.
 * @property    {string}    repeatsEveryWeekText                        The text that should be displayed for the "Every Week" label.
 * @property    {string}    repeatsEveryMonthText                       The text that should be displayed for the "Every Month" label.
 * @property    {string}    repeatsEveryYearText                        The text that should be displayed for the "Every Year" label.
 * @property    {string}    repeatOptionsTitle                          The text that should be displayed for the "Repeat Options" label.
 * @property    {string}    moreText                                    The text that should be displayed for the "More" label.
 * @property    {Object[]}  holidays                                    The holidays that should be shown for specific days/months (refer to "Holiday" documentation for properties).
 * @property    {string}    includeText                                 The text that should be displayed for the "Include:" label.
 * @property    {string}    minimizedTooltipText                        The tooltip text that should be used for for the "Minimize" button.
 * @property    {string}    restoreTooltipText                          The tooltip text that should be used for for the "Restore" button.
 * @property    {string}    removeAllEventsInSeriesText                 The text that should be displayed for the "Remove All Events In Series" label.
 * @property    {string}    createdText                                 The text that should be displayed for the "Created:" label.
 * @property    {string}    organizerName                               The default name of the organizer (defaults to empty string).
 * @property    {string}    organizerEmailAddress                       The default email address of the organizer (defaults to empty string).
 * @property    {string}    organizerNameText                           The text that should be displayed for the "Organizer:" label.
 * @property    {string}    organizerEmailAddressText                   The text that should be displayed for the "Organizer Email:" label.
 * @property    {string}    enableFullScreenTooltipText                 The tooltip text that should be used for for the "Turn On Full-Screen Mode" button.
 * @property    {string}    disableFullScreenTooltipText                The tooltip text that should be used for for the "Turn Off Full-Screen Mode" button.
 * @property    {string}    idText                                      The text that should be displayed for the "ID:" label.
 * @property    {number}    spacing                                     States the default spacing that should be used for additional margins.
 * @property    {string}    expandMonthTooltipText                      The tooltip text that should be used for for the "Expand Month" button.
 * @property    {string}    repeatEndsText                              The text that should be displayed for the "Repeat Ends:" label.
 * @property    {string}    noEventsAvailableText                       The text that should be displayed for the "No events available" label.
 * @property    {string}    viewWeekEventsText                          The text that should be displayed for the "View Week Events" label.
 * @property    {string}    noEventsAvailableFullText                   The text that should be displayed for the "There are no events available to view." label.
 * @property    {string}    clickText                                   The text that should be displayed for the "Click" label.
 * @property    {string}    hereText                                    The text that should be displayed for the "here" label.
 * @property    {string}    toAddANewEventText                          The text that should be displayed for the "to add a new event." label.
 * @property    {boolean}   showAllDayEventDetailsInFullDayView         States if the extra details for an All Day event should be shown in the Full Day view (defaults to false).
 * @property    {boolean}   showWeekNumbersInTitles                     States if week numbers should be shown in the title bars (defaults to false).
 * @property    {string}    weekText                                    The text that should be displayed for the "Week" label.
 * @property    {string}    groupText                                   The text that should be displayed for the "Group:" label.
 * @property    {string}    configurationTooltipText                    The tooltip text that should be used for for the "Configuration" button.
 * @property    {string}    configurationTitleText                      The text that should be displayed for the "Configuration" label.
 * @property    {string}    visibleGroupsText                           The text that should be displayed for the "Visible Groups:" label.
 * @property    {boolean}   showTimelineArrowOnFullDayView              States if the timeline arrow should be shown in the full day view (defaults to true).
 * @property    {number}    maximumEventTitleLength                     States the maximum length allowed for an event title (defaults to 0 to allow any size).
 * @property    {number}    maximumEventDescriptionLength               States the maximum length allowed for an event description (defaults to 0 to allow any size).
 * @property    {number}    maximumEventLocationLength                  States the maximum length allowed for an event location (defaults to 0 to allow any size).
 * @property    {number}    maximumEventGroupLength                     States the maximum length allowed for an event group (defaults to 0 to allow any size).
 * @property    {boolean}   eventNotificationsEnabled                   States if notifications should be shown for events (defaults to false).
 * @property    {string}    eventNotificationTitle                      The text that should be displayed for the notification title (defaults to "Calendar.js").
 * @property    {string}    eventNotificationBody                       The text that should be displayed for the notification body (defaults to "The event '{0}' has started.").
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
        _const_Repeat_EveryMonth = 3,
        _const_Repeat_EveryYear = 4,
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
        _element_HeaderDateDisplay_ConfigurationButton = null,
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
        _element_SelectExportTypeDialog_ExportEvents = null,
        _element_Tooltip = null,
        _element_Tooltip_Title = null,
        _element_Tooltip_Date = null,
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
        _element_ConfigurationDialog_VisibleGroups = null;


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

        _element_HeaderDateDisplay_ConfigurationButton = buildToolbarButton( _element_HeaderDateDisplay, "ib-octagon-hollow", _options.configurationTooltipText, showConfigurationDialog );
        
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
        var headerRow = createElement( "div", _elementClassName_Row + " header-days" ),
            headerNamesLength = _options.dayHeaderNames.length;

        _element_Calendar.appendChild( headerRow );

        for ( var headerNameIndex = 0; headerNameIndex < headerNamesLength; headerNameIndex++ ) {
            var headerName = _options.dayHeaderNames[ headerNameIndex ],
                header = createElement( "div", _elementClassName_Cell );

            header.innerText = headerName;
            headerRow.appendChild( header );
        }
    }

    function buildDayRows() {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            var rowData = createElement( "div", _elementClassName_Row );
            _element_Calendar.appendChild( rowData );

            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                    columnData = createElement( "div", _elementClassName_Cell );

                columnData.id = _elementID_DayElement + columnDataNumber;
                rowData.appendChild( columnData );

                if ( _options.minimumDayHeight > 0 ) {
                    columnData.style.height = _options.minimumDayHeight + "px";
                }
            }
        }
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

            date.setFullYear( date.getFullYear() + 1 );
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
            
            var year = updateYearSelectorDropDownMenuColors();

            _element_HeaderDateDisplay_YearSelector.style.display = "block";

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
                yearSelected[ yearsSelectedIndex ].className = "year";
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
        weekEndDate.setDate( lastDayNumber);
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
            orderedEventsLength = orderedEvents.length,
            groupsAvailable = false;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                elementDay = getDayElement( orderedEvent.from );

            if ( elementDay !== null ) {
                buildDayEventAcrossDays( orderedEvent );
            }

            if ( getString( orderedEvent.group ) !== "" ) {
                groupsAvailable = true;
            }

            if ( isEventVisible( orderedEvent ) ) {
                _element_Calendar_AllVisibleEvents.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery );
            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setDate( date.getDate() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setDate( date.getDate() + 7 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setMonth( date.getMonth() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setFullYear( date.getFullYear() + 1 );
                    } );
                }
            }
        }
    
        updateExportButtonsVisibleState( _element_Calendar_AllVisibleEvents.length, groupsAvailable );
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
                    nextDayDate.setDate( nextDayDate.getDate() + 1 );
    
                    var elementNextDay = getDayElement( nextDayDate );
                    if ( elementNextDay !== null ) {
                        buildDayEvent( nextDayDate, orderedEvent );
                    }
                }
            }
        }
    }
    
    function buildDayEvent( dayDate, eventDetails ) {
        var elementDay = getDayElement( dayDate );
        if ( elementDay !== null && isEventVisible( eventDetails ) ) {
            checkEventForNotifications( dayDate, eventDetails );
            
            var eventClassName = getEventClassName(),
                events = elementDay.getElementsByClassName( eventClassName );

            if ( events.length < _options.maximumEventsPerDayDisplay || _options.maximumEventsPerDayDisplay <= 0 ) {
                var event = createElement( "div", eventClassName ),
                    eventTitle = eventDetails.title;

                if ( _options.showTimesInMainCalendarEvents && !eventDetails.isAllDay && eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                    eventTitle = getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) + ": " + eventTitle;
                }

                event.innerText = eventTitle;
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

    function updateExportButtonsVisibleState( orderedEventsLength, groupsAvailable ) {
        if ( _options.exportEventsEnabled ) {
            if ( orderedEventsLength === 0 ) {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "none";
            } else {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "inline-block";
            }
        }

        if ( !groupsAvailable ) {
            _element_HeaderDateDisplay_ConfigurationButton.style.display = "none";
        } else {
            _element_HeaderDateDisplay_ConfigurationButton.style.display = "inline-block";
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
        clearElementsByClassName( elementDay, getEventClassName() );
        clearElementsByClassName( elementDay, "plus-x-events" );
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
            var holiday = createElement( "span", "holiday" );
            holiday.innerText = " (" + holidayText + ")";
            _element_FullDayView_Title.appendChild( holiday );
        }

        getAllEventsFunc( function( event ) {
            var totalDays = getTotalDaysBetweenDates( event.from, event.to ) + 1,
                nextDate = new Date( event.from );
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( doDatesMatch( nextDate, date ) ) {
                    orderedEvents.push( event );
                    break;
                }

                nextDate.setDate( nextDate.getDate() + 1 );
            }
            
            var repeatEvery = getNumber( event.repeatEvery );
            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setDate( date.getDate() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setDate( date.getDate() + 7 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setMonth( date.getMonth() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setFullYear( date.getFullYear() + 1 );
                    } );
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
    
            var title = createElement( "div", "title" );
            title.innerText = eventDetails.title;
            event.appendChild( title );
    
            if ( !eventDetails.isAllDay || _options.showAllDayEventDetailsInFullDayView ) {
                var startTime = createElement( "div", "date" );
                event.appendChild( startTime );
        
                if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                    if ( eventDetails.isAllDay ) {
                        startTime.innerText = _options.allDayText;
                    } else {
                        startTime.innerText = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
                    }
                } else {
                    buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
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
        _element_FullDayView_DateSelected.setDate( _element_FullDayView_DateSelected.getDate() - 1 );
        showFullDayView( _element_FullDayView_DateSelected, true );
    }

    function onNextDay() {
        _element_FullDayView_DateSelected.setDate( _element_FullDayView_DateSelected.getDate() + 1 );
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
    
            setEventClassesAndColors( event, eventDetails );
    
            var title = createElement( "div", "title" );
            title.innerText = eventDetails.title;
            event.appendChild( title );
    
            var startTime = createElement( "div", "date" );
            event.appendChild( startTime );
    
            if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                if ( eventDetails.isAllDay ) {
                    buildDayDisplay( startTime, eventDetails.from, null, " - " + _options.allDayText );
                } else {
                    buildDayDisplay( startTime, eventDetails.from, null, " - " + getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) );
                }
            } else {
                buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
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
            monthContents = getElementByID( monthContentsID ),
            expandMonthDate = new Date( date );
        
        if ( monthContents === null ) {
            var month = createElement( "div", "month" );
            _element_ListAllEventsView_Contents.appendChild( month );

            var header = createElement( "div", "header" );
            header.innerText = _options.monthNames[ date.getMonth() ] + " " + date.getFullYear();
            month.appendChild( header );

            var expandMonth = createElement( "div", "ib-arrow-expand-left-right" );
            expandMonth.ondblclick = cancelBubble;
            header.appendChild( expandMonth );

            expandMonth.onclick = function() {
                hideOverlay( _element_ListAllEventsView );
                build( expandMonthDate );
            };
    
            addToolTip( expandMonth, _options.expandMonthTooltipText );

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

                nextDate.setDate( nextDate.getDate() + 1 );
            }

            if ( addedNow ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery ),
                repeatAdded = false;

            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setDate( date.getDate() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setDate( date.getDate() + 7 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setMonth( date.getMonth() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setFullYear( date.getFullYear() + 1 );
                    } );
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
            var week = createElement( "span" );
            week.innerText = _options.weekText + " " + getWeekNumber( weekStartDate ) + ": ";
            _element_ListAllWeekEventsView_Title.appendChild( week );
        }
        
        if ( weekStartDate.getFullYear() === weekEndDate.getFullYear() ) {
            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekStartDate, false, false );

            var dash1 = createElement( "span" );
            dash1.innerText = " - ";
            _element_ListAllWeekEventsView_Title.appendChild( dash1 );

            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekEndDate, false, false );

            var year = createElement( "span" );
            year.innerText = ", " + weekStartDate.getFullYear();
            _element_ListAllWeekEventsView_Title.appendChild( year );

        } else {
            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekStartDate, false, true );

            var dash2 = createElement( "span" );
            dash2.innerText = " - ";
            _element_ListAllWeekEventsView_Title.appendChild( dash2 );

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
    
            var title = createElement( "div", "title" );
            title.innerText = eventDetails.title;
            event.appendChild( title );
    
            var startTime = createElement( "div", "date" );
            event.appendChild( startTime );
    
            if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                if ( eventDetails.isAllDay ) {
                    startTime.innerText = _options.allDayText;
                } else {
                    startTime.innerText = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
                }
            } else {
                buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
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
            startOfWeek.setDate( startOfWeek.getDate() + 1 );

        } while ( startOfWeek < weekEndDate );
    }

    function buildListAllEventsDay( date ) {
        var weekDayNumber = getWeekdayNumber( date ),
            dateID = date.getFullYear() + date.getMonth() + weekDayNumber,
            dayContents = null,
            expandDate = new Date( date );

        if ( !_element_ListAllWeekEventsView_Contents_FullView.hasOwnProperty( dateID ) ) {
            var day = createElement( "div", "day" );
            _element_ListAllWeekEventsView_Contents_FullView[ dateID ] = day;

            if ( isWeekendDay( date ) ) {
                day.className += " weekend-day";
            }

            makeAreaDroppable( day, expandDate.getFullYear(), expandDate.getMonth(), expandDate.getDate() );

            var header = createElement( "div", "header" );
            day.appendChild( header );

            buildDayDisplay( header, date, _options.dayNames[ weekDayNumber ] + ", " );

            var expandDay = createElement( "div", "ib-arrow-expand-left-right" );
            expandDay.ondblclick = cancelBubble;
            header.appendChild( expandDay );

            expandDay.onclick = function() {
                showFullDayView( expandDate, true );
            };
    
            addToolTip( expandDay, _options.expandDayTooltipText );

            dayContents = createElement( "div", "events" );
            day.appendChild( dayContents );

            var noEventsText = createElement( "div", "no-events-text" );
            noEventsText.innerText = _options.noEventsAvailableText;
            dayContents.appendChild( noEventsText );

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
        _element_ListAllWeekEventsView_DateSelected.setDate( _element_ListAllWeekEventsView_DateSelected.getDate() - 7 );
        showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected, true );
    }

    function onNextWeek() {
        _element_ListAllWeekEventsView_DateSelected.setDate( _element_ListAllWeekEventsView_DateSelected.getDate() + 7 );
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

        var toText = createElement( "span" );
        toText.innerText = " " + _options.toTimeText + " ";
        container.appendChild( toText );

        buildDateTimeDisplay( container, toDate );
    }

    function buildDateTimeDisplay( container, date, addTime, addYear, addDayName ) {
        addTime = !isDefined( addTime ) ? true : addTime;
        addYear = !isDefined( addYear ) ? true : addYear;
        addDayName = !isDefined( addDayName ) ? false : addDayName;

        if ( addDayName ) {
            var weekDayNumber = getWeekdayNumber( date ),
                weekDay = createElement( "span" );

            weekDay.innerText = _options.dayNames[ weekDayNumber ] + ", ";
            container.appendChild( weekDay );
        }

        buildDayDisplay( container, date );

        var month = createElement( "span" );
        month.innerText = " " + _options.monthNames[ date.getMonth() ];
        container.appendChild( month );

        if ( addYear ) {
            var year = createElement( "span" );
            year.innerText = " " + date.getFullYear();
            container.appendChild( year );
        }

        if ( addTime ) {
            var end = createElement( "span" );
            end.innerText = " " + getTimeForDisplay( date );
            container.appendChild( end );
        }
    }

    function buildDayDisplay( container, date, beforeText, afterText ) {
        if ( isDefined( beforeText ) ) {
            var before = createElement( "span" );
            before.innerText = beforeText;
            container.appendChild( before );
        }

        var dayNumber = createElement( "span" );
        dayNumber.innerText = date.getDate();
        container.appendChild( dayNumber );

        if ( _options.showDayNumberOrdinals ) {
            var sup = createElement( "sup" );
            sup.innerText = getDayOrdinal( date.getDate() );
            container.appendChild( sup );
        }

        if ( isDefined( afterText ) ) {
            var after = createElement( "span" );
            after.innerText = afterText;
            container.appendChild( after );
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
                buildDay( day + 1 , elementDayNumber, previousMonth.getMonth(), previousMonth.getFullYear(), true );
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
                buildDay( actualDay, elementDayNumber, nextMonth.getMonth(), nextMonth.getFullYear(), true );
                actualDay++;
            }

            var nextDay = getTotalDaysInMonth( nextMonth.getFullYear(), nextMonth.getMonth() );
            nextDay = Math.round( nextDay / 2 );

            _largestDateInView = new Date( nextMonth.getFullYear(), nextMonth.getMonth(), nextDay );

        } else {
            _largestDateInView = null;
        }
    }

    function buildDay( actualDay, elementDayNumber, month, year, isMuted ) {
        var today = new Date(),
            dayIsToday = actualDay === today.getDate() && year === today.getFullYear() && month === today.getMonth(),
            dayElement = getElementByID( _elementID_DayElement + elementDayNumber ),
            dayText = createElement( "span" ),
            dayDate = new Date( year, month, actualDay );
        
        dayElement.innerHTML = "";

        dayText.className = isMuted ? "day-muted" : "";
        dayText.className += dayIsToday ? " today" : "";
        dayText.innerText = actualDay;

        if ( isWeekendDay( dayDate ) && dayElement.className === _elementClassName_Cell ) {
            dayElement.className = _elementClassName_Cell + " weekend-day";
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
        
        var expandDayButton = createElement( "div", "ib-arrow-top-right" );
        dayElement.appendChild( expandDayButton );

        addToolTip( expandDayButton, _options.expandDayTooltipText );

        var holidayText = getHoliday( dayDate );
        if ( holidayText !== null ) {
            var holiday = createElement( "span", "holiday" );
            holiday.innerText = holidayText;
            dayText.appendChild( holiday );
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
            var daysBetweenDraggedFromAndFrom = getTotalDaysBetweenDates( _eventDetails_Dragged.from, _eventDetails_Dragged_DateFrom ),
                daysBetweenFromAndTo = getTotalDaysBetweenDates( _eventDetails_Dragged.from, _eventDetails_Dragged.to ),
                fromDate = new Date( year, month, day, _eventDetails_Dragged.from.getHours(), _eventDetails_Dragged.from.getMinutes() ),
                toDate = new Date( year, month, day, _eventDetails_Dragged.to.getHours(), _eventDetails_Dragged.to.getMinutes() );               

            if ( daysBetweenDraggedFromAndFrom > 0 ) {
                fromDate.setDate( fromDate.getDate() - daysBetweenDraggedFromAndFrom );
                toDate.setDate( toDate.getDate() - daysBetweenDraggedFromAndFrom );
            }

            if ( daysBetweenFromAndTo > 0 ) {
                toDate.setDate( toDate.getDate() + daysBetweenFromAndTo );
            }

            var newEvent = {
                from: fromDate,
                to: toDate,
                title: _eventDetails_Dragged.title,
                description: _eventDetails_Dragged.description,
                location: _eventDetails_Dragged.location,
                isAllDay: _eventDetails_Dragged.isAllDay,
                color: _eventDetails_Dragged.color,
                colorText: _eventDetails_Dragged.colorText,
                colorBorder: _eventDetails_Dragged.colorBorder,
                repeatEvery: _eventDetails_Dragged.repeatEvery,
                repeatEveryExcludeDays: _eventDetails_Dragged.repeatEveryExcludeDays
            };

            _this.updateEvent( _eventDetails_Dragged.id, newEvent );
            
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
        if (_element_DropDownMenu_Day !== null) {
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
        if (_element_DropDownMenu_Event !== null) {
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

        var menuIcon = createElement( "div", iconCSS );
        menuItem.appendChild( menuIcon );

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

        var textTitle = createElement( "p" );
        textTitle.innerText = _options.titleText;
        contents.appendChild( textTitle );

        var inputTitleContainer = createElement( "div", "input-title-container" );
        contents.appendChild( inputTitleContainer );

        _element_EventEditorDialog_Title = createElement( "input", null, "text" );
        inputTitleContainer.appendChild( _element_EventEditorDialog_Title );

        if ( _options.maximumEventTitleLength > 0 ) {
            _element_EventEditorDialog_Title.maxLength = _options.maximumEventTitleLength ;
        }

        var selectColorsButton = createElement( "input", "select-colors", "button" );
        selectColorsButton.value = "...";
        selectColorsButton.onclick = showEventEditorColorsDialog;
        inputTitleContainer.appendChild( selectColorsButton );

        var textFrom = createElement( "p" );
        textFrom.innerText = _options.fromText.replace( ":", "" ) + "/" + _options.toText;
        contents.appendChild( textFrom );

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

        var textRepeatEvery = createElement( "p" );
        textRepeatEvery.innerText = _options.repeatsText;
        contents.appendChild( textRepeatEvery );

        var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
        contents.appendChild( radioButtonsContainer );

        _element_EventEditorDialog_RepeatEvery_Never = buildRadioButton( radioButtonsContainer, _options.repeatsNever, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryDay = buildRadioButton( radioButtonsContainer, _options.repeatsEveryDayText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryWeek = buildRadioButton( radioButtonsContainer, _options.repeatsEveryWeekText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryMonth = buildRadioButton( radioButtonsContainer, _options.repeatsEveryMonthText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryYear = buildRadioButton( radioButtonsContainer, _options.repeatsEveryYearText, "RepeatType", repeatEveryEvent );

        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton = createElement( "input", "repeat-options", "button" );
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton.value = "...";
        _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton.onclick = showEventEditorRepeatOptionsDialog;
        radioButtonsContainer.appendChild( _element_EventEditorDialog_RepeatEvery_RepeatOptionsButton );

        var inputFields1TextSplitContainer = createElement( "div", "split" );
        contents.appendChild( inputFields1TextSplitContainer );

        var textLocation = createElement( "p" );
        textLocation.innerText = _options.locationText;
        inputFields1TextSplitContainer.appendChild( textLocation );

        var groupLocation = createElement( "p" );
        groupLocation.innerText = _options.groupText;
        inputFields1TextSplitContainer.appendChild( groupLocation );

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

        var textDescription = createElement( "p" );
        textDescription.innerText = _options.descriptionText;
        contents.appendChild( textDescription );

        _element_EventEditorDialog_Description = createElement( "textarea", "custom-scroll-bars" );
        contents.appendChild( _element_EventEditorDialog_Description );

        if ( _options.maximumEventDescriptionLength > 0 ) {
            _element_EventEditorDialog_Description.maxLength = _options.maximumEventDescriptionLength ;
        }

        _element_EventEditorDialog_ErrorMessage = createElement( "p", "error" );
        contents.appendChild( _element_EventEditorDialog_ErrorMessage );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        _element_EventEditorDialog_OKButton = createElement( "input", "ok", "button" );
        _element_EventEditorDialog_OKButton.value = _options.addText;
        _element_EventEditorDialog_OKButton.onclick = eventDialogEvent_OK;
        buttonsSplitContainer.appendChild( _element_EventEditorDialog_OKButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = eventDialogEvent_Cancel;
        buttonsSplitContainer.appendChild( cancelButton );

        _element_EventEditorDialog_RemoveButton = createElement( "input", "remove", "button" );
        _element_EventEditorDialog_RemoveButton.value = _options.removeEventText;
        _element_EventEditorDialog_RemoveButton.onclick = eventDialogEvent_Remove;
        contents.appendChild( _element_EventEditorDialog_RemoveButton );
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
            } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
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
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryMonth.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryMonth;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryYear.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryYear;
                }

                if ( !isExistingEvent ) {
                    newEvent.organizerName = _options.organizerName;
                    newEvent.organizerEmailAddress = _options.organizerEmailAddress;
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
                result = new Date( input.value );
            } else {
    
                var match = input.value.match( /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/ );
                if ( match ) {
    
                    var newDate = new Date( match[ 3 ], match[ 2 ] - 1, match[ 1 ] );
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

        var contents = createElement( "div", "contents" );
        _element_EventEditorColorsDialog.appendChild( contents );

        var backgroundColorText = createElement( "p" );
        backgroundColorText.innerText = _options.backgroundColorText;
        contents.appendChild( backgroundColorText );

        _element_EventEditorColorsDialog_Color = createElement( "input" );
        contents.appendChild( _element_EventEditorColorsDialog_Color );

        setInputType( _element_EventEditorColorsDialog_Color, "color" );

        var textColorText = createElement( "p" );
        textColorText.innerText = _options.textColorText;
        contents.appendChild( textColorText );

        _element_EventEditorColorsDialog_ColorText = createElement( "input" );
        contents.appendChild( _element_EventEditorColorsDialog_ColorText );

        setInputType( _element_EventEditorColorsDialog_ColorText, "color" );

        var borderColorText = createElement( "p" );
        borderColorText.innerText = _options.borderColorText;
        contents.appendChild( borderColorText );

        _element_EventEditorColorsDialog_ColorBorder = createElement( "input" );
        contents.appendChild( _element_EventEditorColorsDialog_ColorBorder );

        setInputType( _element_EventEditorColorsDialog_ColorBorder, "color" );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        var okButton = createElement( "input", "ok", "button" );
        okButton.value = _options.okText;
        okButton.onclick = eventColorsDialogEvent_OK;
        buttonsSplitContainer.appendChild( okButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = eventColorsDialogEvent_Cancel;
        buttonsSplitContainer.appendChild( cancelButton );
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

        var contents = createElement( "div", "contents" );
        _element_EventEditorRepeatOptionsDialog.appendChild( contents );

        var daysToExcludeText = createElement( "p" );
        daysToExcludeText.innerText = _options.daysToExcludeText;
        contents.appendChild( daysToExcludeText );

        _element_EventEditorRepeatOptionsDialog_Mon = buildCheckBox( contents, _options.dayNames[ 0 ] )[ 0 ];
        _element_EventEditorRepeatOptionsDialog_Tue = buildCheckBox( contents, _options.dayNames[ 1 ] )[ 0 ];
        _element_EventEditorRepeatOptionsDialog_Wed = buildCheckBox( contents, _options.dayNames[ 2 ] )[ 0 ];
        _element_EventEditorRepeatOptionsDialog_Thu = buildCheckBox( contents, _options.dayNames[ 3 ] )[ 0 ];
        _element_EventEditorRepeatOptionsDialog_Fri = buildCheckBox( contents, _options.dayNames[ 4 ] )[ 0 ];
        _element_EventEditorRepeatOptionsDialog_Sat = buildCheckBox( contents, _options.dayNames[ 5 ] )[ 0 ];
        _element_EventEditorRepeatOptionsDialog_Sun = buildCheckBox( contents, _options.dayNames[ 6 ] )[ 0 ];

        var repeatEndsText = createElement( "p" );
        repeatEndsText.innerText = _options.repeatEndsText;
        contents.appendChild( repeatEndsText );

        _element_EventEditorRepeatOptionsDialog_RepeatEnds = createElement( "input" );
        contents.appendChild( _element_EventEditorRepeatOptionsDialog_RepeatEnds );

        setInputType( _element_EventEditorRepeatOptionsDialog_RepeatEnds, "date" );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        var okButton = createElement( "input", "ok", "button" );
        okButton.value = _options.okText;
        okButton.onclick = eventRepeatOptionsDialogEvent_OK;
        buttonsSplitContainer.appendChild( okButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = eventRepeatOptionsDialogEvent_Cancel;
        buttonsSplitContainer.appendChild( cancelButton );
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

        var contents = createElement( "div", "contents" );
        _element_SelectExportTypeDialog.appendChild( contents );

        var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
        contents.appendChild( radioButtonsContainer );

        _element_SelectExportTypeDialog_Option_CSV = buildRadioButton( radioButtonsContainer, "CSV", "ExportType" );
        _element_SelectExportTypeDialog_Option_XML = buildRadioButton( radioButtonsContainer, "XML", "ExportType" );
        _element_SelectExportTypeDialog_Option_JSON = buildRadioButton( radioButtonsContainer, "JSON", "ExportType" );
        _element_SelectExportTypeDialog_Option_TEXT = buildRadioButton( radioButtonsContainer, "TEXT", "ExportType" );
        _element_SelectExportTypeDialog_Option_iCAL = buildRadioButton( radioButtonsContainer, "iCAL", "ExportType" );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        var okButton = createElement( "input", "ok", "button" );
        okButton.value = _options.okText;
        okButton.onclick = exportEventsFromOptionSelected;
        buttonsSplitContainer.appendChild( okButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = hideSelectExportTypeDialog;
        buttonsSplitContainer.appendChild( cancelButton );
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
        _element_SearchDialog.appendChild( titleBar );

        var closeButton = createElement( "div", "ib-close" );
        closeButton.onclick = hideSearchDialog;
        titleBar.appendChild( closeButton );

        addToolTip( closeButton, _options.closeTooltipText );

        _element_SearchDialog_MinimizedRestoreButton = createElement( "div", "ib-minus" );
        _element_SearchDialog_MinimizedRestoreButton.onclick = minimizeRestoreDialog;
        titleBar.appendChild( _element_SearchDialog_MinimizedRestoreButton );

        addToolTip( _element_SearchDialog_MinimizedRestoreButton, _options.minimizedTooltipText );

        _element_SearchDialog_Contents = createElement( "div", "contents" );
        _element_SearchDialog.appendChild( _element_SearchDialog_Contents );

        var textFor = createElement( "p" );
        textFor.innerText = _options.forText;
        _element_SearchDialog_Contents.appendChild( textFor );

        _element_SearchDialog_For = createElement( "input", null, "text" );
        _element_SearchDialog_For.oninput = searchForTextChanged;
        _element_SearchDialog_For.onpropertychange = searchForTextChanged;
        _element_SearchDialog_For.onkeypress = searchOnEnter;
        _element_SearchDialog_Contents.appendChild( _element_SearchDialog_For );
        
        _element_SearchDialog_MatchCase = buildCheckBox( _element_SearchDialog_Contents, _options.matchCaseText, searchForTextChanged )[ 0 ];

        var textInclude = createElement( "p" );
        textInclude.innerText = _options.includeText;
        _element_SearchDialog_Contents.appendChild( textInclude );

        var checkboxContainer = createElement( "div", "checkboxContainer" );
        _element_SearchDialog_Contents.appendChild( checkboxContainer );

        _element_SearchDialog_Include_Title = buildCheckBox( checkboxContainer, _options.titleText.replace( ":", "" ), searchForTextChanged )[ 0 ];
        _element_SearchDialog_Include_Location = buildCheckBox( checkboxContainer, _options.locationText.replace( ":", "" ), searchForTextChanged )[ 0 ];
        _element_SearchDialog_Include_Description = buildCheckBox( checkboxContainer, _options.descriptionText.replace( ":", "" ), searchForTextChanged )[ 0 ];

        _element_SearchDialog_Include_Title.checked = true;

        var buttonsSplitContainer = createElement( "div", "split" );
        _element_SearchDialog_Contents.appendChild( buttonsSplitContainer );

        _element_SearchDialog_Previous = createElement( "input", "previous", "button" );
        _element_SearchDialog_Previous.value = _options.previousText;
        _element_SearchDialog_Previous.onclick = searchOnPrevious;
        buttonsSplitContainer.appendChild( _element_SearchDialog_Previous );

        _element_SearchDialog_Next = createElement( "input", "next", "button" );
        _element_SearchDialog_Next.value = _options.nextText;
        _element_SearchDialog_Next.onclick = searchOnNext;
        buttonsSplitContainer.appendChild( _element_SearchDialog_Next );

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

            updateSearchButtons();
            build( _element_SearchDialog_SearchResults[ _element_SearchDialog_SearchIndex ].from );
        }
    }

    function searchOnEnter( e ) {
        if ( e.keyCode === 13 && !_element_SearchDialog_Next.disabled ) {
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

                    if ( _element_SearchDialog_Include_Title.checked && title.indexOf( search ) > -1 ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Location.checked && location.indexOf( search ) > -1 ) {
                        found = true;
                    } else if ( _element_SearchDialog_Include_Description.checked && description.indexOf( search ) > -1 ) {
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

        var contents = createElement( "div", "contents" );
        _element_ConfigurationDialog.appendChild( contents );

        var visibleGroupsText = createElement( "p" );
        visibleGroupsText.innerText = _options.visibleGroupsText;
        contents.appendChild( visibleGroupsText );

        _element_ConfigurationDialog_VisibleGroups = createElement( "div", "checkboxContainer controls-container custom-scroll-bars" );
        contents.appendChild( _element_ConfigurationDialog_VisibleGroups );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        var okButton = createElement( "input", "ok", "button" );
        okButton.value = _options.okText;
        okButton.onclick = configurationDialogEvent_OK;
        buttonsSplitContainer.appendChild( okButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = configurationDialogEvent_Cancel;
        buttonsSplitContainer.appendChild( cancelButton );
    }

    function buildConfigurationVisibleGroupOptions() {
        _element_ConfigurationDialog_VisibleGroups.innerHTML = "";

        var groups = getGroups(),
            groupsLength = groups.length;

        for ( var groupIndex = 0; groupIndex < groupsLength; groupIndex++ ) {
            var groupName = groups[ groupIndex ],
                configGroupName = getGroupName( groupName ),
                visible = true;
            
            if ( isDefined( _configuration.visibleGroups ) ) {
                visible = _configuration.visibleGroups.indexOf( configGroupName ) > -1;
            }

            buildCheckBox( _element_ConfigurationDialog_VisibleGroups, groupName, null, configGroupName, visible );
        }
    }

    function configurationDialogEvent_OK() {
        var checkboxes = _element_ConfigurationDialog_VisibleGroups.getElementsByTagName( "input" ),
            checkboxesLength = checkboxes.length;
        
        _configuration.visibleGroups = [];
        
        for ( var checkboxIndex = 0; checkboxIndex < checkboxesLength; checkboxIndex++ ) {
            var checkbox = checkboxes[ checkboxIndex ];
            if ( checkbox.checked ) {
                _configuration.visibleGroups.push( checkbox.name );
            }
        }

        buildDayEvents();
        hideConfigurationDialog();
    }

    function configurationDialogEvent_Cancel() {
        hideConfigurationDialog();
    }

    function showConfigurationDialog() {
        addNode( _document.body, _element_DisabledBackground );
        buildConfigurationVisibleGroupOptions();
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
            _element_Tooltip_Repeats = createElement( "div", "repeats" );
            _element_Tooltip_Description = createElement( "div", "description" );
            _element_Tooltip_Location = createElement( "div", "location" );

            document.body.addEventListener( "mousemove", hideTooltip );
        }
    }

    function showTooltip( e, eventDetails, text ) {
        cancelBubble( e );
        clearTooltipTimer();
        hideTooltip();

        if ( _element_Tooltip.style.display !== "block" ) {
            _element_Tooltip_ShowTimer = setTimeout( function() {
                if ( !isDisabledBackgroundDisplayed() && !isYearSelectorDropDownVisible() && !isDayDropDownMenuVisible() && !isEventDropDownMenuVisible() ) {
                    text = isDefined( text ) ? text : "";

                    _element_Tooltip.className = text === "" ? "calendar-tooltip-event" : "calendar-tooltip";

                    if ( text !== "" ) {
                        _element_Tooltip.innerText = text;
                    } else {

                        _element_Tooltip.innerHTML = "";
                        _element_Tooltip.appendChild( _element_Tooltip_Title );
                        _element_Tooltip.appendChild( _element_Tooltip_Date );
                        _element_Tooltip_Title.innerText = eventDetails.title;

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
                            }
                        } else {
                            buildDateTimeToDateTimeDisplay( _element_Tooltip_Date, eventDetails.from, eventDetails.to );
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

    function addToolTip( element, text ) {
        element.onmousemove = function( e ) {
            showTooltip( e, null, text );
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

        var labelSpan = createElement( "span", "check-mark" );
        label.appendChild( labelSpan );

        var labelSpanText = createElement( "span", "text" );
        labelSpanText.innerText = labelText;
        label.appendChild( labelSpanText );

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

        var labelSpan = createElement( "span", "check-mark" );
        label.appendChild( labelSpan );

        return [ input, label ];
    }

    function buildToolbarButton( container, cssClass, tooltipText, onClickEvent ) {
        var button = createElement( "div", cssClass );
        button.ondblclick = cancelBubble;
        button.onclick = onClickEvent;
        container.appendChild( button );

        addToolTip( button, tooltipText );

        return button;
    }

    function buildNoEventsAvailableText( container, onClickEvent ) {
        container.innerHTML = "";

        var contents = createElement( "div", "no-events-available-text" );
        container.appendChild( contents );

        var startText = createElement( "p" );
        startText.innerText = _options.noEventsAvailableFullText;
        contents.appendChild( startText );

        if ( _options.manualEditingEnabled ) {
            var addText = createElement( "div" );
            contents.appendChild( addText );
    
            var clickText = createElement( "span" );
            clickText.innerText = _options.clickText + " ";
            contents.appendChild( clickText );
    
            var hereText = createElement( "span", "link" );
            hereText.innerText = _options.hereText;
            hereText.onclick = onClickEvent;
            contents.appendChild( hereText );
    
            var remainingText = createElement( "span" );
            remainingText.innerText = " " + _options.toAddANewEventText;
            contents.appendChild( remainingText );
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
        } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
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


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To CSV
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getCsvContents( orderedEvents ) {
        var headers = [ _options.idText, _options.fromText, _options.toText, _options.isAllDayText, _options.titleText, _options.descriptionText, _options.locationText, _options.backgroundColorText, _options.textColorText, _options.borderColorText, _options.repeatsText, _options.repeatEndsText, _options.repeatDaysToExcludeText, _options.seriesIgnoreDatesText, _options.createdText, _options.organizerNameText, _options.organizerEmailAddressText ],
            headersLength = headers.length,
            csvHeaders = [],
            csvContents = [];

        for ( var headerIndex = 0; headerIndex < headersLength; headerIndex++ ) {
            csvHeaders.push( getCsvValue( headers[ headerIndex ] ) );
        }
        
        csvContents.push( getCsvValueLine( csvHeaders ) );

        var orderedEventLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            storeCsvData( csvContents, orderedEvents[ orderedEventIndex ] );
        }

        return csvContents.join( "\n" );
    }

    function storeCsvData( csvContents, eventDetails ) {
        var eventContents = [];

        eventContents.push( getCsvValue( getString( eventDetails.id ) ) );
        eventContents.push( getCsvValue( getStringFromDateTime( eventDetails.from ) ) );
        eventContents.push( getCsvValue( getStringFromDateTime( eventDetails.to ) ) );
        eventContents.push( getCsvValue( getYesNoFromBoolean( eventDetails.isAllDay ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.title ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.description ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.location ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.color ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.colorText ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.colorBorder ) ) );
        eventContents.push( getCsvValue( getRepeatsText( eventDetails.repeatEvery ) ) );
        eventContents.push( getCsvValue( getStringFromDateTime( eventDetails.repeatEnds ) ) );
        eventContents.push( getCsvValue( getArrayDays( eventDetails.repeatEveryExcludeDays ) ) );
        eventContents.push( getCsvValue( getArrayText( eventDetails.seriesIgnoreDates ) ) );
        eventContents.push( getCsvValue( getStringFromDateTime( eventDetails.created ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.organizerName ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.organizerEmailAddress ) ) );

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
        var contents = [];
        contents.push( "<?xml version=\"1.0\" ?>" );
        contents.push( "<Events>" );

        var orderedEventLength = orderedEvents.length;
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
        var contents = [];
        contents.push( "{" );
        contents.push( "\"events:\": [" );

        var orderedEventLength = orderedEvents.length;
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
        var contents = [];

        var orderedEventLength = orderedEvents.length;
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
        var contents = [];
        contents.push( "BEGIN:VCALENDAR" );
        contents.push( "VERSION:2.0" );
        contents.push( "PRODID:-//hacksw/handcal//NONSGML v1.0//EN" );

        var orderedEventLength = orderedEvents.length;
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
     * @param       {string}    type                                        The data type to export to (defaults to "csv", accepts "csv", "xml", "json", "txt" and "ical").
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
            triggerOptionsEventWithEventData( "onEventsSet", events );
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
            triggerOptionsEventWithEventData( "onEventAdded", events );
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
                    triggerOptionsEventWithEventData( "onEventAdded", event );
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

            event.id = newGuid();

            updated = this.addEvent( event, updateEvents, false );

            if ( updated && triggerEvent ) {
                triggerOptionsEventWithEventData( "onEventUpdated", event );
            }
        }
        
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
                    triggerOptionsEventWithEventData( "onEventRemoved", event );
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

        getAllEventsFunc( function( event, _, storageGuid ) {
            if ( storageGuid === id ) {
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
     * Setting Options (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * setOptions().
     * 
     * Sets the specific options that should be used.
     * 
     * @param {Object}      newOptions                                  All the options that should be set (refer to "Options" documentation for properties).
     */
    this.setOptions = function( newOptions ) {
        newOptions = getOptions( newOptions );

        for ( var propertyName in newOptions ) {
            if ( newOptions.hasOwnProperty( propertyName ) ) {
                _options[ propertyName ] = newOptions[ propertyName ];
            }
        }

        checkForBrowserNotificationsPermission();

        if ( _initialized ) {
            _initialized = false;

            build( _currentDate, true );
        }
    };

    function buildDefaultOptions( newOptions ) {
        _options = getOptions( newOptions );

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
            _options.dayHeaderNames = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ];
        }

        if ( !isDefined( _options.dayNames ) ) {
            _options.dayNames = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
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

        if ( !isDefined( _options.showDayNumberOrdinals ) ) {
            _options.showDayNumberOrdinals = true;
        }

        if ( !isDefined( _options.dragAndDropForEventsEnabled ) ) {
            _options.dragAndDropForEventsEnabled = true;
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

        if ( !isDefined( _options.maximumEventsPerDayDisplay ) ) {
            _options.maximumEventsPerDayDisplay = 3;
        }

        if ( !isDefined( _options.yesText ) ) {
            _options.yesText = "Yes";
        }

        if ( !isDefined( _options.noText ) ) {
            _options.noText = "No";
        }

        if ( !isDefined( _options.extraSelectableYearsAhead ) ) {
            _options.extraSelectableYearsAhead = 51;
        }

        if ( !isDefined( _options.allDayText ) ) {
            _options.allDayText = "All-Day";
        }

        if ( !isDefined( _options.allEventsText ) ) {
            _options.allEventsText = "All Events";
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

        if ( !isDefined( _options.toTimeText ) ) {
            _options.toTimeText = "to";
        }

        if ( !isDefined( _options.autoRefreshTimerDelay ) ) {
            _options.autoRefreshTimerDelay = 30000;
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

        if ( !isDefined( _options.fullScreenModeEnabled ) ) {
            _options.fullScreenModeEnabled = true;
        }

        if ( !isDefined( _options.eventTooltipDelay ) ) {
            _options.eventTooltipDelay = 1000;
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

        if ( !isDefined( _options.forText ) ) {
            _options.forText = "For:";
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

        if ( !isDefined( _options.minimumDayHeight ) ) {
            _options.minimumDayHeight = 0;
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

        if ( !isDefined( _options.holidays ) ) {
            _options.holidays = getStandardHolidays();
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

        if ( !isDefined( _options.organizerName ) ) {
            _options.organizerName = "";
        }
        
        if ( !isDefined( _options.organizerEmailAddress ) ) {
            _options.organizerEmailAddress = "";
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

        if ( !isDefined( _options.spacing ) ) {
            _options.spacing = 10;
        }

        if ( !isDefined( _options.expandMonthTooltipText ) ) {
            _options.expandMonthTooltipText = "Expand Month";
        }

        if ( !isDefined( _options.repeatEndsText ) ) {
            _options.repeatEndsText = "Repeat Ends:";
        }

        if ( !isDefined( _options.noEventsAvailableText ) ) {
            _options.noEventsAvailableText = "No events available";
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

        if ( !isDefined( _options.showAllDayEventDetailsInFullDayView ) ) {
            _options.showAllDayEventDetailsInFullDayView = false;
        }

        if ( !isDefined( _options.showWeekNumbersInTitles ) ) {
            _options.showWeekNumbersInTitles = false;
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

        if ( !isDefined( _options.visibleGroupsText ) ) {
            _options.visibleGroupsText = "Visible Groups:";
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

        if ( !isDefined( _options.eventNotificationTitle ) ) {
            _options.eventNotificationTitle = "Calendar.js";
        }

        if ( !isDefined( _options.eventNotificationBody ) ) {
            _options.eventNotificationBody = "The event '{0}' has started.";
        }

        checkForBrowserNotificationsPermission();
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
            },
            {
                day: 1,
                month: 1,
                title: "New Year's Day"
            }
        ];
    }

    function triggerOptionsEvent( name ) {
        if ( _options !== null && isDefinedFunction( _options[ name ] ) ) {
            _options[ name ]();
        }
    }

    function triggerOptionsEventWithEventData( name, event ) {
        if ( _options !== null && isDefinedFunction( _options[ name ] ) ) {
            _options[ name ]( event );
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