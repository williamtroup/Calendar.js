/**
 * Calendar.js
 * 
 * A javascript drag & drop event calendar, that is fully responsive and compatible with all modern browsers.
 * 
 * @file        calendar.js
 * @version     v2.11.0
 * @author      Bunoon
 * @license     MIT License
 * @copyright   Bunoon 2024
 */


/**
 * calendarJs().
 * 
 * The main Calendar.js class.
 * 
 * @public
 * @class
 * 
 * @param       {Object}    elementOrId                                 The ID of the element (or the element itself) that should be used to display the calendar (or input to assign a DatePicker).
 * @param       {Options}   [options]                                   All the configurable options that should be used (refer to "Options" documentation for properties).
 * @param       {Search}    [searchOptions]                             All the configurable search options that should be used (refer to "Search Options" documentation for properties).
 * 
 * @returns     {Object}                                                The Calendar.js instance.
 */
function calendarJs( elementOrId, options, searchOptions ) {
    var _that = this,

        // Variables: Constructor Parameters
        _parameter_Document = null,
        _parameter_Window = null,
        _parameter_Navigator = null,
        _parameter_ElementID = null,
        _parameter_Math = null,
        _parameter_Json = null,

        // Variables: Strings
        _string = {
            empty: "",
            space: " ",
            newLine: "\n",
            newLineCharacterReturn: "\r\n",
        },

        // Variables: Values
        _value = {
            notFound: -1
        },

        // Variables: Enums
        _enum_Day = {
            monday: 0,
            saturday: 5,
            sunday: 6
        },
        _enum_KeyCodes = {
            enter: 13,
            escape: 27,
            left: 37,
            right: 39,
            down: 40,
            a: 65,
            c: 67,
            e: 69,
            f: 70,
            g: 71,
            j: 74,
            m: 77,
            o: 79,
            v: 86,
            x: 88,
            f5: 116,
            f11: 122
        },
        _enum_RepeatType = {
            never: 0,
            everyDay: 1,
            everyWeek: 2,
            every2Weeks: 3,
            everyMonth: 4,
            everyYear: 5,
            custom: 6
        },
        _enum_RepeatCustomType = {
            daily: 0,
            weekly: 1,
            monthly: 2,
            yearly: 3
        },

        // Variables: Options & Configuration
        _options = {},
        _options_Search = {},
        _options_EventType = {
            0: {
                text: "Normal Label",
                eventEditorInput: null
            },
            1: {
                text: "Meeting Label",
                eventEditorInput: null
            },
            2: {
                text: "Birthday Label",
                eventEditorInput: null
            },
            3: {
                text: "Holiday Label",
                eventEditorInput: null
            },
            4: {
                text: "Task Label",
                eventEditorInput: null
            }
        },
        _options_Configuration = {
            visibleGroups: null,
            visibleEventTypes: null,
            visibleAllEventsMonths: {}
        },

        // Variables: Initialized
        _initialized = false,
        _initialized_FirstTime = false,
        _initialized_DocumentEvents = false,

        // Variables: Events
        _events = {},
        _events_DatesAvailable = {},
        _events_Selected = [],
        _events_Copied = [],
        _events_Copied_Cut = false,
        _events_Dragged_DateFrom = null,
        _events_Dragged = null,
        _events_NotificationsTriggered = {},

        // Variables: Current Date
        _calendar_CurrentDate = null,
        _calendar_CurrentDate_IsToday = false,
        _calendar_CurrentDate_ForDatePicker = null,
        _calendar_IsBusy = false,
        _calendar_IsBusy_LastState = false,

        // Variables: Elements
        _elements = {},
        _elements_InDocumentBody = [],
        _elements_Type = {},

        // Variables: Element ID
        _element_ID_Event_Day = "day-",
        _element_ID_Event_Month = "month-",
        _element_ID_Event_WeekDay = "week-day-",
        _element_ID_Event_FullDay = "full-day-",
        _element_ID_Event_Widget_Day = "widget-day-",
        _element_ID_Event_Timeline_Day = "timeline-day-",
        _element_ID_DayElement = "calendar-day-",
        _element_ID_WeekDayElement = "calendar-week-day-",
        _element_ID_WeekAllDayElement = "calendar-week-all-day-",
        _element_ID_YearSelected = "year-selected-",

        // Variables: Timers
        _timer = {},
        _timer_AutoRefresh_Enabled = true,
        _timer_Name = {
            windowResize: "WindowResize",
            searchOptionsChanged: "SearchOptionsChanged",
            searchEventsHistoryDropDown: "SearchEventsHistoryDropDown",
            showToolTip: "ShowToolTip",
            autoRefresh: "AutoRefresh",
            hideNotification: "HideNotification",
            sideMenuEvents: "SideMenuEvents"
        },

        // Variables: Side Menu
        _element_SideMenu = null,
        _element_SideMenu_Header = null,
        _element_SideMenu_Changed = false,
        _element_SideMenu_TitleBar_ExportEventsButton = null,
        _element_SideMenu_Content = null,
        _element_SideMenu_Content_Section_Groups = null,
        _element_SideMenu_Content_Section_Groups_Content = null,
        _element_SideMenu_Content_Section_EventTypes = null,
        _element_SideMenu_Content_Section_EventTypes_Content = null,
        _element_SideMenu_Content_Section_Days = null,
        _element_SideMenu_Content_Section_Days_Content = null,
        _element_SideMenu_Content_Section_WorkingDays = null,
        _element_SideMenu_Content_Section_WorkingDays_Content = null,
        _element_SideMenu_Content_Section_WeekendDays = null,
        _element_SideMenu_Content_Section_WeekendDays_Content = null,
        _element_SideMenu_DisabledBackground = null,

        // Variables: Mode - Date Picker
        _element_Mode_DatePicker_Input = null,
        _element_Mode_DatePicker_HiddenInput = null,
        _element_Mode_DatePicker_Enabled = false,
        _element_Mode_DatePicker_Visible = false,
        _element_Mode_DatePicker_OriginalTop = null,

        // Variables: View Name
        _element_View_Name = {
            fullMonth: "full-month",
            fullDay: "full-day",
            fullWeek: "full-week",
            fullYear: "full-year",
            timeline: "timeline",
            allEvents: "all-events"
        },

        // Variables: View
        _element_View_Opened = [],
        _element_View_LastZIndex = 0,
        _element_View_Event_Dragged = null,
        _element_View_Event_Dragged_OffsetTop = null,
        _element_View_Event_Dragged_EventDetails = null,
        _element_View_Event_Dragged_ClickOffset = null,
        _element_View_Event_Dragged_FromDate = null,

        // Variables: View - Full Calendar
        _element_Calendar = null,
        _element_Calendar_DisabledBackground = null,
        _element_Calendar_FullScreenModeOn = false,
        _element_Calendar_FullScreenModeCachedStyled = null,
        _element_Calendar_PreviousDaysVisibleBeforeSingleDayView = [],

        // Variables: View - Full Day
        _element_View_FullDay = null,
        _element_View_FullDay_TitleBar = null,
        _element_View_FullDay_Contents = null,
        _element_View_FullDay_Contents_AllDayEvents = null,
        _element_View_FullDay_Contents_Hours = null,
        _element_View_FullDay_Contents_WorkingHours = null,
        _element_View_FullDay_DateSelected = null,
        _element_View_FullDay_EventsShown = [],
        _element_View_FullDay_FullScreenButton = null,
        _element_View_FullDay_TodayButton = null,
        _element_View_FullDay_TimeArrow = null,
        _element_View_FullDay_SearchButton = null,
        _element_View_FullDay_Events_Dragged_Sizes = [],

        // Variables: View - Full Week
        _element_View_FullWeek = null,
        _element_View_FullWeek_TitleBar = null,
        _element_View_FullWeek_FullScreenButton = null,
        _element_View_FullWeek_SearchButton = null,
        _element_View_FullWeek_Contents = null,
        _element_View_FullWeek_Contents_DayNamesHeader = null,
        _element_View_FullWeek_Contents_AllDayEvents = null,
        _element_View_FullWeek_Contents_Hours = null,
        _element_View_FullWeek_Contents_Days_AllDay = null,
        _element_View_FullWeek_Contents_Days = null,
        _element_View_FullWeek_EventsShown = [],
        _element_View_FullWeek_EventsShown_PerDay = {},
        _element_View_FullWeek_DateSelected = null,
        _element_View_FullWeek_DateSelected_StartOfWeek = null,
        _element_View_FullWeek_TimeArrow = null,
        _element_View_FullWeek_AllDayEventsAdded = false,
        _element_View_FullWeek_TimeArrow_Position = null,
        _element_View_FullWeek_Contents_SmallestEventTop = 0,
        _element_View_FullWeek_Events_Dragged_Sizes = [],

        // Variables: View - Full Month (default)
        _element_View_FullMonth = null,
        _element_View_FullMonth_Rows = [],
        _element_View_FullMonth_TitleBar = null,
        _element_View_FullMonth_TitleBar_YearSelector_DropDown = null,
        _element_View_FullMonth_TitleBar_YearSelector_DropDown_Text = null,
        _element_View_FullMonth_TitleBar_YearSelector_DropDown_Arrow = null,
        _element_View_FullMonth_TitleBar_YearSelector = null,
        _element_View_FullMonth_TitleBar_YearSelector_Contents = null,
        _element_View_FullMonth_TitleBar_YearSelector_Contents_Months = {},
        _element_View_FullMonth_TitleBar_FullScreenButton = null,
        _element_View_FullMonth_TitleBar_SearchButton = null,
        _element_View_FullMonth_PinUp = null,
        _element_View_FullMonth_PinUp_ImageIndex = 0,
        _element_View_FullMonth_PinUp_CurrentDate = null,
        _element_View_FullMonth_DayNamesHeader = null,
        _element_View_FullMonth_EventsShown = [],
        _element_View_FullMonth_LargestDateAvailable = null,

        // Variables: View - Full Year
        _element_View_FullYear = null,
        _element_View_FullYear_FullScreenButton = null,
        _element_View_FullYear_TitleBar = null,
        _element_View_FullYear_Contents = null,
        _element_View_FullYear_CurrentYear = null,
        _element_View_FullYear_Contents_CurrentMonthTop = 0,

        // Variables: View - All Events
        _element_View_AllEvents = null,
        _element_View_AllEvents_FullScreenButton = null,
        _element_View_AllEvents_SearchButton = null,
        _element_View_AllEvents_Contents = null,
        _element_View_AllEvents_EventsShown = [],
        _element_View_AllEvents_MinimizeRestoreFunctions = [],
        _element_View_AllEvents_YearHeadersAdded = [],

        // Variables: View - Timeline
        _element_View_Timeline = null,
        _element_View_Timeline_FullScreenButton = null,
        _element_View_Timeline_SearchButton = null,
        _element_View_Timeline_TodayButton = null,
        _element_View_Timeline_Contents = null,
        _element_View_Timeline_Contents_Header = null,
        _element_View_Timeline_Contents_SmallestEventLeft = null,
        _element_View_Timeline_Contents_SmallestEventTop = null,
        _element_View_Timeline_Contents_Groups_Rows_Cache = {},
        _element_View_Timeline_Contents_Columns = [],
        _element_View_Timeline_EventsShown = [],
        _element_View_Timeline_DateSelected = null,
        _element_View_Timeline_TitleBar = null,
        _element_View_Timeline_Selected_Axis = null,
        _element_View_Timeline_Selected_Axis_Supported = [
            "location",
            "organizerName",
            "group",
            "organizerEmailAddress",
            "url",
            "title",
            "description"
        ],

        // Variables: Dialogs
        _element_Dialog_AllOpened = [],
        _element_Dialog_Move = null,
        _element_Dialog_Move_Original_X = 0,
        _element_Dialog_Move_Original_Y = 0,
        _element_Dialog_Move_IsMoving = false,
        _element_Dialog_Move_X = 0,
        _element_Dialog_Move_Y = 0,

        // Variables: Dialog - Event Editor
        _element_Dialog_EventEditor = null,
        _element_Dialog_EventEditor_Tab_Event = null,
        _element_Dialog_EventEditor_Tab_Type = null,
        _element_Dialog_EventEditor_Tab_Repeats = null,
        _element_Dialog_EventEditor_Tab_Extra = null,
        _element_Dialog_EventEditor_DisabledArea = null,
        _element_Dialog_EventEditor_TitleBar = null,
        _element_Dialog_EventEditor_DateFrom = null,
        _element_Dialog_EventEditor_TimeFrom = null,
        _element_Dialog_EventEditor_DateTo = null,
        _element_Dialog_EventEditor_TimeTo = null,
        _element_Dialog_EventEditor_IsAllDay = null,
        _element_Dialog_EventEditor_ShowAlerts = null,
        _element_Dialog_EventEditor_ShowAsBusy = null,
        _element_Dialog_EventEditor_Title = null,
        _element_Dialog_EventEditor_SelectColors = null,
        _element_Dialog_EventEditor_Description = null,
        _element_Dialog_EventEditor_Location = null,
        _element_Dialog_EventEditor_Group = null,
        _element_Dialog_EventEditor_Url = null,
        _element_Dialog_EventEditor_RepeatEvery_Never = null,
        _element_Dialog_EventEditor_RepeatEvery_EveryDay = null,
        _element_Dialog_EventEditor_RepeatEvery_EveryWeek = null,
        _element_Dialog_EventEditor_RepeatEvery_Every2Weeks = null,
        _element_Dialog_EventEditor_RepeatEvery_EveryMonth = null,
        _element_Dialog_EventEditor_RepeatEvery_EveryYear = null,
        _element_Dialog_EventEditor_RepeatEvery_Custom = null,
        _element_Dialog_EventEditor_RepeatEvery_RepeatOptionsButton = null,
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily = null,
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Weekly = null,
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Monthly = null,
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Yearly = null,
        _element_Dialog_EventEditor_RepeatEvery_Custom_Value = null,
        _element_Dialog_EventEditor_EventDetails = {},
        _element_Dialog_EventEditor_AddUpdateButton = null,
        _element_Dialog_EventEditor_RemoveButton = null,
        _element_Dialog_EventEditor_AlertOffset = null,
        _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarning = null,
        _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarningDate = null,

        // Variables: Dialog - Event Editor - Repeat Options
        _element_Dialog_EventEditor_Colors = null,
        _element_Dialog_EventEditor_Colors_Color = null,
        _element_Dialog_EventEditor_Colors_ColorText = null,
        _element_Dialog_EventEditor_Colors_ColorBorder = null,

        // Variables: Dialog - Event Editor - Repeat Options
        _element_Dialog_EventEditor_RepeatOptions = null,
        _element_Dialog_EventEditor_RepeatOptions_Mon = null,
        _element_Dialog_EventEditor_RepeatOptions_Tue = null,
        _element_Dialog_EventEditor_RepeatOptions_Wed = null,
        _element_Dialog_EventEditor_RepeatOptions_Thu = null,
        _element_Dialog_EventEditor_RepeatOptions_Fri = null,
        _element_Dialog_EventEditor_RepeatOptions_Sat = null,
        _element_Dialog_EventEditor_RepeatOptions_Sun = null,
        _element_Dialog_EventEditor_RepeatOptions_RepeatEnds = null,

        // Variables: Dialog - Message
        _element_Dialog_Message = null,
        _element_Dialog_Message_TitleBar = null,
        _element_Dialog_Message_Message = null,
        _element_Dialog_Message_RemoveAllEvents = null,
        _element_Dialog_Message_RemoveAllEvents_Label = null,
        _element_Dialog_Message_ButtonContainer = null,

        // Variables: Dialog - Export Events
        _element_Dialog_ExportEvents = null,
        _element_Dialog_ExportEvents_Filename = null,
        _element_Dialog_ExportEvents_Option_CSV = null,
        _element_Dialog_ExportEvents_Option_XML = null,
        _element_Dialog_ExportEvents_Option_JSON = null,
        _element_Dialog_ExportEvents_Option_TEXT = null,
        _element_Dialog_ExportEvents_Option_iCAL = null,
        _element_Dialog_ExportEvents_Option_MD = null,
        _element_Dialog_ExportEvents_Option_HTML = null,
        _element_Dialog_ExportEvents_Option_TSV = null,
        _element_Dialog_ExportEvents_ExportEvents = null,
        _element_Dialog_ExportEvents_Option_ExportEventsToClipboard = null,
        _element_Dialog_ExportEvents_Options = null,

        // Variables: Dialog - Search
        _element_Dialog_Search = null,
        _element_Dialog_Search_MinimizedRestoreButton = null,
        _element_Dialog_Search_Contents = null,
        _element_Dialog_Search_For = null,
        _element_Dialog_Search_MatchCase = null,
        _element_Dialog_Search_Not = null,
        _element_Dialog_Search_Advanced = null,
        _element_Dialog_Search_Advanced_Container = null,
        _element_Dialog_Search_Include_Title = null,
        _element_Dialog_Search_Include_Location = null,
        _element_Dialog_Search_Include_Description = null,
        _element_Dialog_Search_Include_Group = null,
        _element_Dialog_Search_Include_Url = null,
        _element_Dialog_Search_Option_StartsWith = null,
        _element_Dialog_Search_Option_EndsWith = null,
        _element_Dialog_Search_Option_Contains = null,
        _element_Dialog_Search_Previous = null,
        _element_Dialog_Search_Next = null,
        _element_Dialog_Search_Moved = false,
        _element_Dialog_Search_SearchResults = [],
        _element_Dialog_Search_SearchIndex = 0,
        _element_Dialog_Search_FocusedEventID = null,
        _element_Dialog_Search_History_DropDown = null,
        _element_Dialog_Search_History_DropDown_Button = null,

        // Variables: Dialog - Configuration
        _element_Dialog_Configuration = null,
        _element_Dialog_Configuration_Display = null,
        _element_Dialog_Configuration_Organizer = null,
        _element_Dialog_Configuration_Display_EnableAutoRefresh = null,
        _element_Dialog_Configuration_Display_EnableBrowserNotifications = null,
        _element_Dialog_Configuration_Display_EnableTooltips = null,
        _element_Dialog_Configuration_Display_EnableDragAndDropForEvents = null,
        _element_Dialog_Configuration_Display_ShowHolidaysInTheDisplays = null,
        _element_Dialog_Configuration_Organizer_Name = null,
        _element_Dialog_Configuration_Organizer_Email = null,

        // Variables: Dialog - Jump To Date Dialog
        _element_Dialog_JumpToDate = null,
        _element_Dialog_JumpToDate_Date = null,

        // Variables: Context Menu - Month Day
        _element_ContextMenu_Day = null,
        _element_ContextMenu_Day_Paste_Separator = null,
        _element_ContextMenu_Day_Paste = null,
        _element_ContextMenu_Day_DateSelected = null,

        // Variables: Context Menu - Event
        _element_ContextMenu_Event = null,
        _element_ContextMenu_Event_EventDetails = null,
        _element_ContextMenu_Event_DateSelected = null,
        _element_ContextMenu_Event_FormattedDateSelected = null,
        _element_ContextMenu_Event_OpenUrlSeparator = null,
        _element_ContextMenu_Event_OpenUrl = null,
        _element_ContextMenu_Event_DuplicateSeparator = null,
        _element_ContextMenu_Event_Duplicate = null,
        _element_ContextMenu_Event_EditEvent = null,
        _element_ContextMenu_Event_CutSeparator = null,
        _element_ContextMenu_Event_Cut = null,
        _element_ContextMenu_Event_CopySeparator = null,
        _element_ContextMenu_Event_Copy = null,
        _element_ContextMenu_Event_RemoveSeparator = null,
        _element_ContextMenu_Event_Remove = null,
        _element_ContextMenu_Event_ExportEventsSeparator = null,
        _element_ContextMenu_Event_ExportEvents = null,

        // Variables: Context Menu - Full Day
        _element_ContextMenu_FullDay = null,
        _element_ContextMenu_FullDay_RemoveEvents_Separator = null,
        _element_ContextMenu_FullDay_RemoveEvents = null,
        _element_ContextMenu_FullDay_Paste_Separator = null,
        _element_ContextMenu_FullDay_Paste = null,
        _element_ContextMenu_FullDay_ClickPositionHourMinutes = null,
        _element_ContextMenu_FullDay_DateSelected = null,

        // Variables: Context Menu - Day Header
        _element_ContextMenu_HeaderDay = null,
        _element_ContextMenu_HeaderDay_HideDay = null,
        _element_ContextMenu_HeaderDay_HideDay_Separator = null,
        _element_ContextMenu_HeaderDay_ShowOnlyWorkingDays = null,
        _element_ContextMenu_HeaderDay_ShowOnlyWorkingDays_Separator = null,
        _element_ContextMenu_HeaderDay_SelectedDay = null,

        // Variables: ToolTip
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
        _element_Tooltip_EventDetails = null,

        // Variables: PopUp Notifications
        _element_Notification = null;


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build (layout, days, etc)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function build( newStartDateTime, fullRebuild, forceRefreshViews ) {
        _calendar_CurrentDate = isDefinedDate( newStartDateTime ) ? newStartDateTime : new Date();

        fullRebuild = isDefined( fullRebuild ) ? fullRebuild : false;
        forceRefreshViews = isDefined( forceRefreshViews ) ? forceRefreshViews : false;

        buildLayout( fullRebuild, forceRefreshViews );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Layout
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildLayout( fullRebuild, forceRefreshViews ) {
        if ( _options.isWidget ) {
            buildLayoutWidget();
        } else {

            _calendar_CurrentDate.setDate( 1 );
            _calendar_CurrentDate.setHours( 0, 0, 0, 0 );
            _calendar_CurrentDate_IsToday = isDateTodaysMonthAndYear( _calendar_CurrentDate );
    
            var firstDay = new Date( _calendar_CurrentDate.getFullYear(), _calendar_CurrentDate.getMonth(), 1 ),
                startDay = getStartOfWeekDayNumber( firstDay.getDay() === 0 ? 7 : firstDay.getDay() ),
                firstRender = !_initialized_FirstTime;

            if ( isSideMenuOpen() ) {
                hideSideMenu();
            }
    
            hideAllDropDowns();
            
            if ( !_initialized ) {
                buildContainer();
    
                if ( _element_Calendar !== null ) {
                    buildSideMenu();
                    buildFullDayView();
                    buildFullWeekView();
                    buildFullMonthView();
                    buildFullYearView();
                    buildAllEventsView();
                    buildTimelineView();
                    buildDocumentEvents();
                    buildLayoutEventsFromSources();
                    buildLayoutTriggerRenderComplete();
                }
            }
    
            buildLayoutModalsAndMainView( startDay, fullRebuild, forceRefreshViews, firstRender );
        }
    }

    function buildLayoutModalsAndMainView( startDay, fullRebuild, forceRefreshViews, firstRender ) {
        buildFullMonthViewDays( startDay );

        if ( fullRebuild ) {
            buildDisabledBackground();
            buildEventEditingDialog();
            buildEventEditingColorDialog();
            buildEventEditingRepeatOptionsDialog();
            buildMessageDialog();
            buildExportEventsDialog();
            buildSearchDialog();
            buildConfigurationDialog();
            buildJumpTpDateDialog();
            buildTooltip();
            buildContextMenus();
            buildNotificationPopUp();
        }

        if ( forceRefreshViews ) {
            refreshViews( true, false );
        }

        if ( _element_Calendar !== null ) {
            setFullMonthViewYearDropDownButtonText();

            if ( firstRender && isDefinedString( _options.viewToOpenOnFirstLoad ) ) {
                if ( _options.viewToOpenOnFirstLoad.toLowerCase() === _element_View_Name.fullDay ) {
                    showFullDayView();
                } else if ( _options.viewToOpenOnFirstLoad.toLowerCase() === _element_View_Name.fullWeek ) {
                    showFullWeekView();
                } else if ( _options.viewToOpenOnFirstLoad.toLowerCase() === _element_View_Name.fullYear ) {
                    showFullYearView();
                } else if ( _options.viewToOpenOnFirstLoad.toLowerCase() === _element_View_Name.timeline ) {
                    showTimelineView();
                } else if ( _options.viewToOpenOnFirstLoad.toLowerCase() === _element_View_Name.allEvents ) {
                    showAllEventsView();
                }
            }
        }
    }

    function buildLayoutWidget() {
        _calendar_CurrentDate_IsToday = isDateToday( _calendar_CurrentDate );
        
        if ( !_initialized ) {
            buildContainer( true );

            if ( _element_Calendar !== null ) {
                buildDisabledBackground();
                buildEventEditingDialog();
                buildEventEditingColorDialog();
                buildEventEditingRepeatOptionsDialog();
                buildMessageDialog();
                buildDocumentEvents();
                buildTooltip();
                buildLayoutEventsFromSources();
                buildLayoutTriggerRenderComplete();
            }
        }

        buildWidgetMode();
    }

    function buildLayoutEventsFromSources() {
        if ( isDefinedArray( _options.data ) ) {
            _that.addEvents( _options.data, false, false, false );
        }

        loadEventsFromLocalStorage();
        loadEventsToAddOrUpdateFromFetchTrigger();
    }

    function buildLayoutTriggerRenderComplete() {
        _initialized = true;
    
        if ( !_initialized_FirstTime ) {
            fireCustomTrigger( _options.events.onRender, _parameter_ElementID );
            _initialized_FirstTime = true;
        }
    }

    function buildContainer( isWidget ) {
        isWidget = isDefined( isWidget ) ? isWidget : false;

        if ( _element_Calendar === null ) {
            var element;

            if ( !isDefinedDOMElement( _parameter_ElementID ) ) {
                element = getElementByID( _parameter_ElementID );
            } else {
    
                element = _parameter_ElementID;
                _parameter_ElementID = element.id;
    
                if ( !isDefinedString( _parameter_ElementID ) ) {
                    _parameter_ElementID = newGuid();
                }
            }
    
            if ( element !== null ) {
                if ( element.tagName.toLowerCase() === "input" && ( element.type === "text" || element.type === "date" ) ) {
                    buildDatePickerMode( element );
                } else {
        
                    _element_Calendar = element;
                    _element_Calendar.className = !isWidget ? "calendar" : "calendar-widget";
                    _element_Calendar.innerHTML = _string.empty;

                    var height = getStyleValueByName( _element_Calendar, "height" );

                    if ( height >= 100 ) {
                        _element_Calendar.className += _string.space + "fixed-height";
                    } else {
                        _element_Calendar.style.removeProperty( "height" );
                    }
                }
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Side-Menu
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSideMenu() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            buildSideMenuDisabledBackground();
            buildFullSideMenu();
        }
    }

    function buildSideMenuDisabledBackground() {
        if ( _element_SideMenu_DisabledBackground === null ) {
            _element_SideMenu_DisabledBackground = createElement( "div", "side-menu-disabled-background" );
            _element_SideMenu_DisabledBackground.onclick = hideSideMenu;
            _element_Calendar.appendChild( _element_SideMenu_DisabledBackground );
        }
    }

    function buildFullSideMenu() {
        if ( !_initialized_FirstTime ) {
            _element_SideMenu = createElement( "div", "side-menu custom-scroll-bars dark-thumb-scroll" );
            _element_SideMenu.onclick = cancelBubble;
            _element_Calendar.appendChild( _element_SideMenu );
    
            _element_SideMenu_Header = createElement( "div", "main-header" );
            _element_SideMenu.appendChild( _element_SideMenu_Header );
        }

        _element_SideMenu_Header.innerHTML = _string.empty;

        createTextHeaderElement( _element_SideMenu_Header, _options.sideMenuHeaderText );
        buildToolbarButton( _element_SideMenu_Header, "ib-close", _options.closeTooltipText, hideSideMenu );

        if ( _options.configurationDialogEnabled || _options.exportEventsEnabled || ( _options.importEventsEnabled && _options.manualEditingEnabled ) ) {
            _element_SideMenu_Header.appendChild( createElement( "div", "right-divider-line" ) );
        }

        if ( _options.configurationDialogEnabled ) {
            buildToolbarButton( _element_SideMenu_Header, "ib-octagon-hollow", _options.configurationTooltipText, function() {
                hideSideMenu();
                showConfigurationDialog();
            } );
        }

        if ( _options.configurationDialogEnabled && _options.exportEventsEnabled || ( _options.importEventsEnabled && _options.manualEditingEnabled ) ) {
            _element_SideMenu_Header.appendChild( createElement( "div", "right-divider-line" ) );
        }

        if ( _options.exportEventsEnabled ) {
            _element_SideMenu_TitleBar_ExportEventsButton = buildToolbarButton( _element_SideMenu_Header, "ib-arrow-down-full-line", _options.exportEventsTooltipText, function() {
                var viewOpen = getActiveView();

                if ( viewOpen === null ) {
                    showExportEventsDialog( _element_View_FullMonth_EventsShown );
                } else {
        
                    if ( viewOpen === _element_View_FullDay ) {
                        showExportEventsDialog( _element_View_FullDay_EventsShown );
                    } else if ( viewOpen === _element_View_FullWeek ) {
                        showExportEventsDialog( _element_View_FullWeek_EventsShown );
                    } else if ( viewOpen === _element_View_Timeline ) {
                        showExportEventsDialog( _element_View_Timeline_EventsShown );
                    } else if ( viewOpen === _element_View_AllEvents ) {
                        showExportEventsDialog( _element_View_AllEvents_EventsShown );
                    }
                }
            } );
        }

        if ( _options.importEventsEnabled && _options.manualEditingEnabled ) {
            buildToolbarButton( _element_SideMenu_Header, "ib-arrow-up-full-line", _options.importEventsTooltipText, importEventsFromFileSelected );
        }

        if ( !_initialized_FirstTime ) {
            _element_SideMenu_Content = createElement( "div", "content" );
            _element_SideMenu.appendChild( _element_SideMenu_Content );
        }
    }

    function buildSideMenuContent( openDays ) {
        var isDaysOpen = isSideMenuContentOpen( _element_SideMenu_Content_Section_Days_Content ) || openDays === true,
            isEventTypesOpen = isSideMenuContentOpen( _element_SideMenu_Content_Section_EventTypes_Content, true ),
            isGroupsOpen = isSideMenuContentOpen( _element_SideMenu_Content_Section_Groups_Content, true ),
            isWorkingDaysOpen = isSideMenuContentOpen( _element_SideMenu_Content_Section_WorkingDays_Content, true ),
            isWeekendDaysOpen = isSideMenuContentOpen( _element_SideMenu_Content_Section_WeekendDays_Content, true );

        _element_SideMenu_Content.innerHTML = _string.empty;
        _element_SideMenu_Content_Section_Days = null;
        _element_SideMenu_Content_Section_Days_Content = null;
        _element_SideMenu_Content_Section_EventTypes = null;
        _element_SideMenu_Content_Section_EventTypes_Content = null;
        _element_SideMenu_Content_Section_Groups = null;
        _element_SideMenu_Content_Section_Groups_Content = null;
        _element_SideMenu_Content_Section_WorkingDays = null;
        _element_SideMenu_Content_Section_WorkingDays_Content = null;
        _element_SideMenu_Content_Section_WeekendDays = null;
        _element_SideMenu_Content_Section_WeekendDays_Content = null;

        hideSearchDialog();
        updateSideMenuExportButtonVisibleState();

        if ( _options.sideMenu.showDays ) {
            buildSideMenuDays( isDaysOpen );
        }

        if ( _options.sideMenu.showEventTypes ) {
            buildSideMenuEventTypes( isEventTypesOpen );
        }

        if ( _options.sideMenu.showGroups ) {
            buildSideMenuGroups( isGroupsOpen );
        }
        
        if ( _options.sideMenu.showWorkingDays ) {
            buildSideMenuWorkingDays( isWorkingDaysOpen );
        }

        if ( _options.sideMenu.showWeekendDays ) {
            buildSideMenuWeekendDays( isWeekendDaysOpen );
        }
    }

    function updateSideMenuExportButtonVisibleState() {
        var viewOpen = getActiveView();

        if ( viewOpen === null ) {
            updateToolbarButtonVisibleState( _element_SideMenu_TitleBar_ExportEventsButton, _element_View_FullMonth_EventsShown.length > 0 );
        } else {

            if ( viewOpen === _element_View_FullDay ) {
                updateToolbarButtonVisibleState( _element_SideMenu_TitleBar_ExportEventsButton, _element_View_FullDay_EventsShown.length > 0 );
            } else if ( viewOpen === _element_View_AllEvents ) {
                updateToolbarButtonVisibleState( _element_SideMenu_TitleBar_ExportEventsButton, _element_View_AllEvents_EventsShown.length > 0 );
            } else if ( viewOpen === _element_View_FullWeek ) {
                updateToolbarButtonVisibleState( _element_SideMenu_TitleBar_ExportEventsButton, _element_View_FullWeek_EventsShown.length > 0 );
            } else if ( viewOpen === _element_View_Timeline ) {
                updateToolbarButtonVisibleState( _element_SideMenu_TitleBar_ExportEventsButton, _element_View_Timeline_EventsShown.length > 0 );
            } else {
                updateToolbarButtonVisibleState( _element_SideMenu_TitleBar_ExportEventsButton, false );
            }
        }
    }

    function isSideMenuAvailable() {
        return _options.sideMenu.showDays || _options.sideMenu.showEventTypes || _options.sideMenu.showGroups || _options.sideMenu.showWorkingDays || _options.sideMenu.showWeekendDays;
    }

    function updateSideMenu() {
        if ( isSideMenuOpen() ) {
            buildSideMenuContent();
        }
    }

    function showSideMenu( openDays ) {
        buildSideMenuContent( isDefined( openDays ) ? openDays : false );

        _element_SideMenu_Changed = false;
        _element_SideMenu.className += " side-menu-open";
        _element_SideMenu_DisabledBackground.style.display = "block";

        startTimer( _timer_Name.sideMenuEvents, function() {
            _parameter_Document.body.addEventListener( "click", hideSideMenu );
        }, 500, false );
    }

    function hideSideMenu() {
        if ( _element_SideMenu !== null ) {
            _element_SideMenu.className = "side-menu custom-scroll-bars";
            _element_SideMenu_DisabledBackground.style.display = "none";
    
            saveSideMenuSelections();
            hideTooltip();

            _parameter_Document.body.removeEventListener( "click", hideSideMenu );
        }
    }

    function isSideMenuOpen() {
        return _element_SideMenu !== null && _element_SideMenu.className.indexOf( "side-menu-open" ) > _value.notFound;
    }

    function saveSideMenuSelections() {
        if ( _element_SideMenu_Changed ) {
            var fireOptionsCustomTrigger = false,
                itemWasChanged = false;

            if ( _element_SideMenu_Content_Section_Groups !== null ) {
                var visibleGroups = getSideMenuCheckedCheckBoxNames( _element_SideMenu_Content_Section_Groups );

                if ( !areArraysTheSame( _options_Configuration.visibleGroups, visibleGroups ) ) {
                    _options_Configuration.visibleGroups = [].slice.call( visibleGroups );
                    itemWasChanged = true;

                    fireCustomTrigger( _options.events.onVisibleGroupsChanged, _options_Configuration.visibleGroups );
                }
            }
            
            if ( _element_SideMenu_Content_Section_EventTypes !== null ) {
                var visibleEventTypes = getSideMenuCheckedCheckBoxNames( _element_SideMenu_Content_Section_EventTypes, true );

                if ( !areArraysTheSame( _options_Configuration.visibleEventTypes, visibleEventTypes ) ) {
                    _options_Configuration.visibleEventTypes = [].slice.call( visibleEventTypes );
                    itemWasChanged = true;

                    fireCustomTrigger( _options.events.onVisibleEventTypesChanged, _options_Configuration.visibleEventTypes );
                }
            }
    
            if ( _element_SideMenu_Content_Section_Days !== null ) {
                var visibleDays = getSideMenuCheckedCheckBoxNames( _element_SideMenu_Content_Section_Days, true );

                if ( visibleDays.length >= 1 && !areArraysTheSame( _options.visibleDays, visibleDays ) ) {
                    _options.visibleDays = [].slice.call( visibleDays );
                    _element_Calendar_PreviousDaysVisibleBeforeSingleDayView = [];
                    
                    fireOptionsCustomTrigger = true;
                    itemWasChanged = true;
                }
            }

            if ( _element_SideMenu_Content_Section_WorkingDays !== null ) {
                var workingDays = getSideMenuCheckedCheckBoxNames( _element_SideMenu_Content_Section_WorkingDays, true );

                if ( !areArraysTheSame( _options.workingDays, workingDays ) ) {
                    _options.workingDays = [].slice.call( workingDays );

                    fireOptionsCustomTrigger = true;
                    itemWasChanged = true;
                }
            }

            if ( _element_SideMenu_Content_Section_WeekendDays !== null ) {
                var weekendDays = getSideMenuCheckedCheckBoxNames( _element_SideMenu_Content_Section_WeekendDays, true );

                if ( !areArraysTheSame( _options.weekendDays, weekendDays ) ) {
                    _options.weekendDays = weekendDays;

                    fireOptionsCustomTrigger = true;
                    itemWasChanged = true;
                }
            }

            if ( itemWasChanged ) {
                if ( fireOptionsCustomTrigger ) {
                    fireCustomTrigger( _options.events.onOptionsUpdated, _options );
                }
        
                _initialized = false;
        
                build( _calendar_CurrentDate, true, true );
            }
        }
    }

    function getSideMenuCheckedCheckBoxNames( container, isNumericName ) {
        isNumericName = isDefined( isNumericName ) ? isNumericName : false;

        var checkboxes = container.getElementsByTagName( "input" ),
            checkboxesLength = checkboxes.length,
            names = [];
        
        if ( checkboxesLength > 0 ) {
            for ( var checkboxIndex = 0; checkboxIndex < checkboxesLength; checkboxIndex++ ) {
                var checkbox = checkboxes[ checkboxIndex ];

                if ( checkbox.checked ) {
                    if ( isNumericName ) {
                        names.push( parseInt( checkbox.name ) );
                    } else {
                        names.push( checkbox.name );
                    }
                }
            }
        }

        return names;
    }

    function buildSideMenuWeekendDays( opened ) {
        opened = isDefined( opened ) ? opened : true;

        _element_SideMenu_Content_Section_WeekendDays = createElement( "div", "content-section content-section-opened" );
        _element_SideMenu_Content_Section_WeekendDays_Content = createElement( "div", "checkbox-container" );
        _element_SideMenu_Content.appendChild( _element_SideMenu_Content_Section_WeekendDays );

        var dayIndex = 1,
            dayEndIndex = 8,
            processOtherDays = false,
            checkBoxes = [];

        buildSideMenuHeaderAndContentOpener( _element_SideMenu_Content_Section_WeekendDays, _element_SideMenu_Content_Section_WeekendDays_Content, _options.weekendDaysText, opened, checkBoxes );

        _element_SideMenu_Content_Section_WeekendDays.appendChild( _element_SideMenu_Content_Section_WeekendDays_Content );

        if ( _options.startOfWeekDay === _enum_Day.saturday || _options.startOfWeekDay === _enum_Day.sunday ) {
            dayIndex = _options.startOfWeekDay + 1;
            processOtherDays = true;
        }

        for ( ; dayIndex < dayEndIndex; dayIndex++ ) {
            var actualDayIndex1 = dayIndex > 6 ? 0 : dayIndex,
                visible1 = _options.weekendDays.indexOf( actualDayIndex1 ) > _value.notFound;

            checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_WeekendDays_Content, _options.dayNames[ dayIndex - 1 ], sideMenuSelectionsChanged, actualDayIndex1.toString(), visible1, null, cancelBubbleOnly )[ 0 ] );
        }

        if ( processOtherDays ) {
            dayEndIndex = _options.startOfWeekDay + 1;
            dayIndex = 1;

            for ( ; dayIndex < dayEndIndex; dayIndex++ ) {
                var actualDayIndex2 = dayIndex > 6 ? 0 : dayIndex,
                    visible2 = _options.weekendDays.indexOf( actualDayIndex2 ) > _value.notFound;
    
                checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_WeekendDays_Content, _options.dayNames[ dayIndex - 1 ], sideMenuSelectionsChanged, actualDayIndex2.toString(), visible2, null, cancelBubbleOnly )[ 0 ] );
            }
        }

        if ( _options.reverseOrderDaysOfWeek ) {
            reverseElementsOrder( _element_SideMenu_Content_Section_WeekendDays_Content );
        }
    }

    function buildSideMenuWorkingDays( opened ) {
        opened = isDefined( opened ) ? opened : true;

        _element_SideMenu_Content_Section_WorkingDays = createElement( "div", "content-section content-section-opened" );
        _element_SideMenu_Content_Section_WorkingDays_Content = createElement( "div", "checkbox-container" );
        _element_SideMenu_Content.appendChild( _element_SideMenu_Content_Section_WorkingDays );

        var dayIndex = 0,
            dayEndIndex = 7,
            processOtherDays = false,
            checkBoxes = [];

        buildSideMenuHeaderAndContentOpener( _element_SideMenu_Content_Section_WorkingDays, _element_SideMenu_Content_Section_WorkingDays_Content, _options.workingDaysText, opened, checkBoxes );

        _element_SideMenu_Content_Section_WorkingDays.appendChild( _element_SideMenu_Content_Section_WorkingDays_Content );

        if ( _options.startOfWeekDay === _enum_Day.saturday || _options.startOfWeekDay === _enum_Day.sunday ) {
            dayIndex = _options.startOfWeekDay;
            processOtherDays = true;
        }

        for ( ; dayIndex < dayEndIndex; dayIndex++ ) {
            var visible1 = _options.workingDays.indexOf( dayIndex ) > _value.notFound;

            checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_WorkingDays_Content, _options.dayNames[ dayIndex ], sideMenuSelectionsChanged, dayIndex.toString(), visible1, null, cancelBubbleOnly )[ 0 ] );
        }

        if ( processOtherDays ) {
            dayEndIndex = _options.startOfWeekDay;
            dayIndex = 0;

            for ( ; dayIndex < dayEndIndex; dayIndex++ ) {
                var visible2 = _options.workingDays.indexOf( dayIndex ) > _value.notFound;
    
                checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_WorkingDays_Content, _options.dayNames[ dayIndex ], sideMenuSelectionsChanged, dayIndex.toString(), visible2, null, cancelBubbleOnly )[ 0 ] );
            }
        }

        if ( _options.reverseOrderDaysOfWeek ) {
            reverseElementsOrder( _element_SideMenu_Content_Section_WorkingDays_Content );
        }
    }

    function buildSideMenuGroups( opened ) {
        opened = isDefined( opened ) ? opened : true;

        _element_SideMenu_Content_Section_Groups = null;
        _element_SideMenu_Content_Section_Groups_Content = null;

        var groups = getGroups(),
            groupsLength = groups.length;

        if ( groupsLength > 0 ) {
            var checkBoxes = [];
            
            _element_SideMenu_Content_Section_Groups = createElement( "div", "content-section content-section-opened" );
            _element_SideMenu_Content_Section_Groups_Content = createElement( "div", "checkbox-container" );

            _element_SideMenu_Content.appendChild( _element_SideMenu_Content_Section_Groups );

            buildSideMenuHeaderAndContentOpener( _element_SideMenu_Content_Section_Groups, _element_SideMenu_Content_Section_Groups_Content, _options.groupsText, opened, checkBoxes );

            _element_SideMenu_Content_Section_Groups.appendChild( _element_SideMenu_Content_Section_Groups_Content );

            for ( var groupIndex = 0; groupIndex < groupsLength; groupIndex++ ) {
                var groupName = groups[ groupIndex ],
                    configGroupName = getGroupName( groupName ),
                    visible = true;
                
                if ( isDefined( _options_Configuration.visibleGroups ) ) {
                    visible = _options_Configuration.visibleGroups.indexOf( configGroupName ) > _value.notFound;
                }
    
                checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_Groups_Content, groupName, sideMenuSelectionsChanged, configGroupName, visible, null, cancelBubbleOnly )[ 0 ] );
            }
        }
    }

    function buildSideMenuEventTypes( opened ) {
        opened = isDefined( opened ) ? opened : true;

        _element_SideMenu_Content_Section_EventTypes = null;
        _element_SideMenu_Content_Section_EventTypes_Content = null;

        var sectionAndHeaderAdded = false,
            checkBoxes = [];

        for ( var eventType in _options_EventType ) {
            if ( _options_EventType.hasOwnProperty( eventType ) ) {
                if ( !sectionAndHeaderAdded ) {
                    _element_SideMenu_Content_Section_EventTypes = createElement( "div", "content-section content-section-opened" );
                    _element_SideMenu_Content.appendChild( _element_SideMenu_Content_Section_EventTypes );
            
                    _element_SideMenu_Content_Section_EventTypes_Content = createElement( "div", "checkbox-container" );
            
                    buildSideMenuHeaderAndContentOpener( _element_SideMenu_Content_Section_EventTypes, _element_SideMenu_Content_Section_EventTypes_Content, _options.eventTypesText, opened, checkBoxes );
            
                    _element_SideMenu_Content_Section_EventTypes.appendChild( _element_SideMenu_Content_Section_EventTypes_Content );

                    sectionAndHeaderAdded = true;
                }

                var visible = true;

                if ( isDefined( _options_Configuration.visibleEventTypes ) ) {
                    visible = _options_Configuration.visibleEventTypes.indexOf( parseInt( eventType ) ) > _value.notFound;
                }

                checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_EventTypes_Content, _options_EventType[ eventType ].text, sideMenuSelectionsChanged, eventType, visible, null, cancelBubbleOnly )[ 0 ] );
            }
        }
    }

    function buildSideMenuDays( opened ) {
        opened = isDefined( opened ) ? opened : true;

        _element_SideMenu_Content_Section_Days = createElement( "div", "content-section content-section-opened" );
        _element_SideMenu_Content_Section_Days_Content = createElement( "div", "checkbox-container" );
        _element_SideMenu_Content.appendChild( _element_SideMenu_Content_Section_Days );

        var dayIndex = 0,
            dayEndIndex = 7,
            processOtherDays = false,
            checkBoxes = [];

        buildSideMenuHeaderAndContentOpener( _element_SideMenu_Content_Section_Days, _element_SideMenu_Content_Section_Days_Content, _options.sideMenuDaysText, opened, checkBoxes );

        _element_SideMenu_Content_Section_Days.appendChild( _element_SideMenu_Content_Section_Days_Content );

        if ( _options.startOfWeekDay === _enum_Day.saturday || _options.startOfWeekDay === _enum_Day.sunday ) {
            dayIndex = _options.startOfWeekDay;
            processOtherDays = true;
        }

        for ( ; dayIndex < dayEndIndex; dayIndex++ ) {
            var visible1 = _options.visibleDays.indexOf( dayIndex ) > _value.notFound;

            checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_Days_Content, _options.dayNames[ dayIndex ], sideMenuSelectionsChanged, dayIndex.toString(), visible1, null, cancelBubbleOnly )[ 0 ] );
        }

        if ( processOtherDays ) {
            dayEndIndex = _options.startOfWeekDay;
            dayIndex = 0;

            for ( ; dayIndex < dayEndIndex; dayIndex++ ) {
                var visible2 = _options.visibleDays.indexOf( dayIndex ) > _value.notFound;
    
                checkBoxes.push( buildCheckBox( _element_SideMenu_Content_Section_Days_Content, _options.dayNames[ dayIndex ], sideMenuSelectionsChanged, dayIndex.toString(), visible2, null, cancelBubbleOnly )[ 0 ] );
            }
        }

        if ( _options.reverseOrderDaysOfWeek ) {
            reverseElementsOrder( _element_SideMenu_Content_Section_Days_Content );
        }
    }

    function buildSideMenuHeaderAndContentOpener( mainContainer, mainContent, text, opened, checkBoxes ) {
        var header = createElement( "div", "text-header" );
        mainContainer.appendChild( header );

        setNodeText( header, text + ":" );

        var arrow = createElement( "div", "ib-arrow-up-full" );
        header.appendChild( arrow );

        var buttonDividerLine = createElement( "div", "right-divider-line" );
        header.appendChild( buttonDividerLine );

        var selectAll = buildToolbarButton( header, "ib-square", _options.selectAllText, function( e ) {
            changeCheckboxesCheckedState( e, checkBoxes, true );
        } );

        var selectNone = buildToolbarButton( header, "ib-square-hollow", _options.selectNoneText, function( e ) {
            changeCheckboxesCheckedState( e, checkBoxes, false );
        } );

        header.onclick = function() {
            var isClosed = mainContent.style.display === "none";

            header.className = isClosed ? "text-header" : "text-header-closed";
            mainContent.style.display = isClosed ? "block" : "none";
            arrow.className = isClosed ? "ib-arrow-up-full" : "ib-arrow-down-full";
            mainContainer.className = isClosed ? "content-section content-section-opened" : "content-section";
            buttonDividerLine.style.display = isClosed ? "block" : "none";
            selectAll.style.display = isClosed ? "block" : "none";
            selectNone.style.display = isClosed ? "block" : "none";
        };

        if ( !opened ) {
            mainContent.style.display = "none";
            header.className = "text-header-closed";
            arrow.className = "ib-arrow-down-full";
            mainContainer.className = "content-section";
            buttonDividerLine.style.display = "none";
            selectAll.style.display = "none";
            selectNone.style.display = "none";
        }

        return [ selectAll, selectNone ];
    }

    function changeCheckboxesCheckedState( e, checkBoxes, state ) {
        cancelBubble( e );

        var checkBoxesLength = checkBoxes.length,
            checkBoxStatesChanged = false;

        for ( var checkBoxIndex = 0; checkBoxIndex < checkBoxesLength; checkBoxIndex++ ) {
            if ( checkBoxes[ checkBoxIndex ].checked !== state ) {
                checkBoxes[ checkBoxIndex ].checked = state;
                checkBoxStatesChanged = true;
            }
        }

        _element_SideMenu_Changed = checkBoxStatesChanged;
    }

    function isSideMenuContentOpen( element, closed ) {
        return closed && element === null ? false : element === null || element.style.display !== "none";
    }

    function sideMenuSelectionsChanged() {
        _element_SideMenu_Changed = true;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Widget Mode
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildWidgetMode() {
        clearAutoRefreshTimer();

        _element_Calendar.innerHTML = _string.empty;

        var weekDayNumber = getWeekdayNumber( _calendar_CurrentDate );

        var dayName = createElement( "div", "day-name" );
        setNodeText( dayName, _options.dayNames[ weekDayNumber ] );
        _element_Calendar.appendChild( dayName );

        buildToolbarButton( dayName, "ib-arrow-right-full", _options.nextDayTooltipText, onNextWidgetDay );
        buildToolbarButton( dayName, "ib-arrow-left-full", _options.previousDayTooltipText, onPreviousWidgetDay );

        dayName.appendChild( createElement( "div", "right-divider-line" ) );
        
        if ( _options.manualEditingEnabled ) {
            buildToolbarButton( dayName, "ib-plus", _options.addEventTooltipText, function() {
                showEventEditingDialog( null, new Date( _calendar_CurrentDate ) );
            } );
        }

        buildToolbarButton( dayName, "ib-pin", _options.todayTooltipText, onCurrentWidgetDay );

        var dayDate = createElement( "div", "day-date" );
        buildDateTimeDisplay( dayDate, _calendar_CurrentDate, false, true, false );
        _element_Calendar.appendChild( dayDate );

        buildWidgetModeEvents();
        startAutoRefreshTimer();
    }

    function buildWidgetModeEvents() {
        var events = createElement( "div", "events custom-scroll-bars" ),
            orderedEvents = [];

        _element_Calendar.appendChild( events );

        getFullDayViewOrderedEvents( _calendar_CurrentDate, orderedEvents );

        orderedEvents = getOrderedEvents( orderedEvents );

        var orderedEventsLength = orderedEvents.length;

        if ( orderedEventsLength > 0 ) {
            for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
                buildWidgetModeEvent( events, orderedEvents[ orderedEventIndex ] );
            }
        } else {
            createTextHeaderElement( events, _options.noEventsAvailableFullText );
        }
    }

    function buildWidgetModeEvent( events, eventDetails ) {
        var event = createElement( "div", "event" );
        events.appendChild( event );

        setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, _calendar_CurrentDate ) );
        setEventCustomTriggers( event, eventDetails );

        event.id = _element_ID_Event_Widget_Day + eventDetails.id;
        event.setAttribute( "event-type", getNumber( eventDetails.type ) );
        event.setAttribute( "event-id", eventDetails.id );
        event.setAttribute( "event-is-all-day", eventDetails.isAllDay );

        if ( !fireCustomTrigger( _options.events.onWidgetEventRender, event, eventDetails ) ) {
            var title = createElement( "div", "title" ),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _enum_RepeatType.never ) {
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

            if ( duration.innerHTML === _string.empty ) {
                event.removeChild( duration );
            }

            if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _enum_RepeatType.never ) {
                var repeats = createElement( "div", "repeats" );
                setNodeText( repeats, _options.repeatsText.replace( ":", _string.empty ) + _string.space + getRepeatsText( eventDetails.repeatEvery ) );
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

        if ( events.scrollHeight > events.clientHeight && events.className.indexOf( " scroll-margin" ) === _value.notFound ) {
            events.className += " scroll-margin";
        }
    }

    function onCurrentWidgetDay( e ) {
        cancelBubble( e );
        build();
    }

    function onNextWidgetDay( e ) {
        cancelBubble( e );

        var nextDay = new Date( _calendar_CurrentDate );
        nextDay.setDate( nextDay.getDate() + 1 );

        if ( nextDay.getFullYear() <= _options.maximumYear ) {
            build( nextDay );
        }
    }

    function onPreviousWidgetDay( e ) {
        cancelBubble( e );

        var previousDay = new Date( _calendar_CurrentDate );
        previousDay.setDate( previousDay.getDate() - 1 );

        if ( previousDay.getFullYear() >= _options.minimumYear ) {
            build( previousDay );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Date-Picker Mode
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDatePickerMode( element ) {
        _element_Mode_DatePicker_HiddenInput = element;

        setInputType( _element_Mode_DatePicker_HiddenInput, "hidden" );

        _element_Mode_DatePicker_Input = createElement( "input", "calendar-date-picker-input" );
        _element_Mode_DatePicker_Input.readOnly = true;
        _element_Mode_DatePicker_Input.placeholder = _options.selectDatePlaceholderText;
        _element_Mode_DatePicker_Enabled = true;

        var container = createElement( "div", "calendar-date-picker" );
        element.insertAdjacentElement( "afterend", container );
        element.remove( element );

        container.appendChild( _element_Mode_DatePicker_HiddenInput );
        container.appendChild( _element_Mode_DatePicker_Input );

        _element_Calendar = createElement( "div", "calendar calendar-hidden" );
        _element_Calendar.id = _parameter_ElementID;
        container.appendChild( _element_Calendar );

        _element_Mode_DatePicker_Input.onclick = toggleDatePickerModeVisible;
        _parameter_Document.addEventListener( "click", hideDatePickerMode );

        resetOptionsForDatePickerMode();
        getDataPickerInputValueDate();
    }

    function resetOptionsForDatePickerMode() {
        if ( _element_Mode_DatePicker_Enabled ) {
            _options.exportEventsEnabled = false;
            _options.manualEditingEnabled = false;
            _options.fullScreenModeEnabled = false;
            _options.eventNotificationsEnabled = false;
            _options.views.fullMonth.showPreviousNextMonthNames = false;
            _options.views.fullMonth.showExtraTitleBarButtons = false;
            _options.holidays = [];
        }
    }

    function toggleDatePickerModeVisible( e ) {
        cancelBubble( e );
        hideAllElementsAcrossInstances( "calendar calendar-shown", "calendar calendar-hidden" );

        if ( !_element_Mode_DatePicker_Visible ) {
            _element_Calendar.className = "calendar calendar-shown";

            build( new Date( _calendar_CurrentDate_ForDatePicker ), !_initialized );
            fireCustomTrigger( _options.events.onDatePickerOpened, _parameter_ElementID );
            updateDatePickerPosition();
        } else {

            _element_Calendar.className = "calendar calendar-hidden";
            
            hideAllDropDowns();
            fireCustomTrigger( _options.events.onDatePickerClosed, _parameter_ElementID );
        }

        _element_Mode_DatePicker_Visible = !_element_Mode_DatePicker_Visible;
    }

    function updateDatePickerPosition() {
        var actualTop = _element_Mode_DatePicker_OriginalTop;

        if ( actualTop === null ) {
            _element_Mode_DatePicker_OriginalTop = _element_Calendar.offsetTop;
            actualTop = _element_Calendar.offsetTop;
        }

        _element_Calendar.style.top = actualTop + "px";

        var offset = getOffset( _element_Calendar ),
            scrollPosition = getScrollPosition(),
            top = ( offset.top - scrollPosition.top );

        if ( top + _element_Calendar.offsetHeight > _parameter_Window.innerHeight ) {
            var calendarBorderWidth = getStyleValueByName( _element_Calendar, "border-width" ),
                inputBorderWidth = getStyleValueByName( _element_Mode_DatePicker_Input, "border-width" );

            actualTop -= ( _element_Calendar.offsetHeight + _element_Mode_DatePicker_Input.clientHeight + ( calendarBorderWidth * 4 ) + ( inputBorderWidth * 2 ) );
            _element_Calendar.className += " calendar-shadow-top";

            _element_Calendar.style.top = actualTop + "px";
            
        } else {
            _element_Calendar.className += " calendar-shadow-bottom";
        }
    }

    function hideDatePickerMode() {
        if ( _element_Mode_DatePicker_Visible ) {
            _element_Calendar.className = "calendar calendar-hidden";
            _element_Mode_DatePicker_Visible = false;

            hideAllDropDowns();
            fireCustomTrigger( _options.events.onDatePickerClosed, _parameter_ElementID );
        }
    }

    function setDatePickerDate( e, date ) {
        cancelBubble( e );

        if ( !isFullMonthViewYearDropDownVisible() ) {
            var newDate = new Date( date );
            newDate.setHours( 0, 0, 0, 0 );
            
            hideDatePickerMode();
            updateDatePickerInputValueDisplay( date );
            fireCustomTrigger( _options.events.onDatePickerDateChanged, newDate );

            _calendar_CurrentDate_ForDatePicker = newDate;
            
        } else {
            hideAllDropDowns();
        }
    }

    function updateDatePickerInputValueDisplay( date ) {
        _element_Mode_DatePicker_Input.value = getCustomFormattedDateText( _options.views.datePicker.selectedDateFormat, date );
        _element_Mode_DatePicker_HiddenInput.value = date.getFullYear() + '-' + padNumber( date.getMonth() + 1 ) + "-" + padNumber( date.getDate() );
    }

    function getDataPickerInputValueDate() {
        var values = _element_Mode_DatePicker_HiddenInput.value.split( "/" ),
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

        _calendar_CurrentDate_ForDatePicker = valuesDate;
    }

    function isDateValidForDatePicker( newDate ) {
        var newDateAllowed = true;

        if ( _options.views.datePicker.minimumDate !== null ) {
            newDateAllowed = isDateSmallerOrEqualToDate( _options.views.datePicker.minimumDate, newDate );
        }

        if ( newDateAllowed && _options.views.datePicker.maximumDate !== null ) {
            newDateAllowed = isDateSmallerOrEqualToDate( newDate, _options.views.datePicker.maximumDate );
        }

        return newDateAllowed;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Document Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDocumentEvents() {
        if ( !_initialized_DocumentEvents ) {
            handleDocumentEvents();
            
            _initialized_DocumentEvents = true;
        }
    }

    function removeDocumentEvents() {
        if ( _initialized_DocumentEvents ) {
            handleDocumentEvents( false );
        }
    }

    function handleDocumentEvents( addEvents ) {
        addEvents = isDefined( addEvents ) ? addEvents : true;

        var documentBodyFunc = addEvents ? _parameter_Document.body.addEventListener : _parameter_Document.body.removeEventListener,
            documentFunc = addEvents ? _parameter_Document.addEventListener : _parameter_Document.removeEventListener,
            windowFunc = addEvents ? _parameter_Window.addEventListener : _parameter_Window.removeEventListener;

        documentBodyFunc( "click", onDocumentClick );
        documentBodyFunc( "contextmenu", onEventHideAllDropDowns );
        documentBodyFunc( "mousemove", onMoveDocumentMouseMove );
        documentBodyFunc( "mouseup", onMouseUpResizeTracking );
        documentBodyFunc( "mouseleave", onMoveDocumentMouseLeave );
        documentFunc( "scroll", onEventHideAllDropDowns );
        windowFunc( "resize", onEventHideAllDropDowns );
        windowFunc( "resize", centerSearchDialog );
        windowFunc( "resize", onWindowResizeRefreshViews );
        windowFunc( "blur", onWindowFocusOut );

        if ( _options.shortcutKeysEnabled ) {
            documentFunc( "keydown", onWindowKeyDown );
        }
    }

    function onDocumentClick( e ) {
        hideAllDropDowns();

        if ( !isControlKey( e ) ) {
            clearSelectedEvents();
        }
    }

    function onWindowFocusOut() {
        hideAllDropDowns();
        hideTooltip();

        if ( _element_Mode_DatePicker_Enabled ) {
            hideDatePickerMode();
        }
    }

    function onWindowResizeRefreshViews() {
        stopAndResetTimer( _timer_Name.windowResize );

        startTimer( _timer_Name.windowResize, function() {
            refreshViews( true, false );
        }, 50, false );
    }

    function onEventHideAllDropDowns() {
        hideAllDropDowns();
    }

    function hideAllDropDowns( hideSearchHistoryDropDown ) {
        var itemClosed = false;

        hideSearchHistoryDropDown = isDefined( hideSearchHistoryDropDown ) ? hideSearchHistoryDropDown : true;

        if ( hideContextMenu( _element_ContextMenu_Day ) ) {
            itemClosed = true;
        }

        if ( hideContextMenu( _element_ContextMenu_Event ) ) {
            itemClosed = true;
        }

        if ( hideContextMenu( _element_ContextMenu_FullDay ) ) {
            itemClosed = true;
        }

        if ( hideContextMenu( _element_ContextMenu_HeaderDay ) ) {
            itemClosed = true;
        }

        if ( hideFullMonthViewYearDropDown() ) {
            itemClosed = true;
        }

        hideTooltip();
        hideAllElementsAcrossInstances( "calendar-context-menu" );
        hideAllElementsAcrossInstances( "years-drop-down" );
        hideAllElementsAcrossInstances( "years-drop-down-no-months" );

        if ( hideSearchHistoryDropDown ) {
            hideSearchHistoryDropDownMenu();
        }

        return itemClosed;
    }

    function onWindowKeyDown( e ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            if ( !isSideMenuOpen() ) {
                if ( _element_Calendar_FullScreenModeOn ) {
                    var isMainDisplayVisible = isOnlyMainDisplayVisible();
        
                    if ( isControlKey( e ) && e.keyCode === _enum_KeyCodes.left && isMainDisplayVisible ) {
                        e.preventDefault();
                        moveBackYear();
        
                    } else if ( isControlKey( e ) && e.keyCode === _enum_KeyCodes.right && isMainDisplayVisible ) {
                        e.preventDefault();
                        moveForwardYear();
        
                    } else if ( e.keyCode === _enum_KeyCodes.escape ) {
                        if ( !closeActiveDialog() && isMainDisplayVisible && _options.useEscapeKeyToExitFullScreenMode ) {
                            fullScreenModeHeaderDoubleClick();
                        }
        
                    } else if ( e.keyCode === _enum_KeyCodes.left && isMainDisplayVisible ) {
                        onLeftKey( e );
        
                    } else if ( e.keyCode === _enum_KeyCodes.right && isMainDisplayVisible ) {
                        onRightKey( e );
        
                    } else if ( e.keyCode === _enum_KeyCodes.down && isMainDisplayVisible ) {
                        onDownKey( e );
                        
                    } else if ( e.keyCode === _enum_KeyCodes.f5 && isMainDisplayVisible ) {
                        refreshViews( false, true );
                    }
                } else {

                    if ( e.keyCode === _enum_KeyCodes.escape ) {
                        closeActiveDialog();
                    }
                }
        
                if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.a ) {
                    e.preventDefault();
        
                    if ( _options.manualEditingEnabled ) {
                        showEventEditingDialog( null, new Date() );
                    }

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.c ) {
                    e.preventDefault();
                    setCopiedEventsFromKeyDown();

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.e ) {
                    e.preventDefault();
    
                    if ( _options.exportEventsEnabled ) {
                        showExportDialogFromWindowKeyDown();
                    }

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.g ) {
                    e.preventDefault();
    
                    if ( _options.configurationDialogEnabled ) {
                        showConfigurationDialog();
                    }

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.j ) {
                    e.preventDefault();
                    showJumpToDateDialog();
                
                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.f ) {
                    onFKey( e );

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.m ) {
                    e.preventDefault();
                    callMinimizeRestoreFunctionsForAllEventView();

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.o ) {
                    e.preventDefault();
    
                    if ( isSideMenuAvailable() ) {
                        showSideMenu();
                    }

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.v ) {
                    e.preventDefault();
                    pasteCopiedEventsFromKeyDown();

                } else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.x ) {
                    e.preventDefault();
                    setCopiedEventsFromKeyDown( true );
    
                }  else if ( isControlKey( e ) && isShiftKey( e ) && e.keyCode === _enum_KeyCodes.f11 ) {
                    e.preventDefault();
                    fullScreenModeHeaderDoubleClick();
                }
            } else {

                if ( e.keyCode === _enum_KeyCodes.escape && isSideMenuOpen() ) {
                    e.preventDefault();
                    hideSideMenu();
                }
            }
        } else {

            if ( _element_Mode_DatePicker_Visible ) {
                if ( e.keyCode === _enum_KeyCodes.escape ) {
                    e.preventDefault();
                    hideDatePickerMode();

                } else if ( isControlKey( e ) && e.keyCode === _enum_KeyCodes.left ) {
                    e.preventDefault();
                    moveBackYear();
    
                } else if ( isControlKey( e ) && e.keyCode === _enum_KeyCodes.right ) {
                    e.preventDefault();
                    moveForwardYear();

                } else if ( e.keyCode === _enum_KeyCodes.left ) {
                    e.preventDefault();
                    onPreviousMonth();
    
                } else if ( e.keyCode === _enum_KeyCodes.right ) {
                    e.preventDefault();
                    onNextMonth();
    
                } else if ( e.keyCode === _enum_KeyCodes.down ) {
                    e.preventDefault();
                    onCurrentMonth();
                }
            }
        }
    }

    function onLeftKey( e ) {
        e.preventDefault();

        var viewOpen = getActiveView();

        if ( viewOpen === null ) {
            onPreviousMonth();
        } else {

            if ( viewOpen === _element_View_FullDay ) {
                onPreviousFullDay();
            } else if ( viewOpen === _element_View_FullWeek ) {
                onPreviousFullWeek();
            } else if ( viewOpen === _element_View_FullYear ) {
                onPreviousFullYear();
            } else if ( viewOpen === _element_View_Timeline ) {
                onPreviousTimelineDay();
            }
        }
    }

    function onRightKey( e ) {
        e.preventDefault();

        var viewOpen = getActiveView();
        
        if ( viewOpen === null ) {
            onNextMonth();
        } else {

            if ( viewOpen === _element_View_FullDay ) {
                onNextFullDay();
            } else if ( viewOpen === _element_View_FullWeek ) {
                onNextFullWeek();
            } else if ( viewOpen === _element_View_FullYear ) {
                onNextFullYear();
            } else if ( viewOpen === _element_View_Timeline ) {
                onNextTimelineDay();
            }
        }
    }

    function onDownKey( e ) {
        e.preventDefault();

        var viewOpen = getActiveView();
        
        if ( viewOpen === null ) {
            onCurrentMonth();
        } else {

            if ( viewOpen === _element_View_FullDay ) {
                onCurrentFullDay();
            } else if ( viewOpen === _element_View_FullWeek ) {
                onCurrentFullWeek();
            } else if ( viewOpen === _element_View_FullYear ) {
                onCurrentFullYear();
            } else if ( viewOpen === _element_View_Timeline ) {
                onCurrentTimelineDay();
            }
        }
    }

    function onFKey( e ) {
        e.preventDefault();

        var openSearch = false,
            viewOpen = getActiveView();
        
        if ( viewOpen === null ) {
            openSearch = _element_View_FullMonth_EventsShown.length > 0;
        } else {

            if ( viewOpen === _element_View_FullDay ) {
                openSearch = _element_View_FullDay_EventsShown.length > 0;
            } else if ( viewOpen === _element_View_FullWeek ) {
                openSearch = _element_View_AllEvents_EventsShown.length > 0;
            } else if ( viewOpen === _element_View_FullYear ) {
                openSearch = _element_View_FullWeek_EventsShown.length > 0;
            } else if ( viewOpen === _element_View_Timeline ) {
                openSearch = _element_View_Timeline_EventsShown.length > 0;
            }
        }

        if ( openSearch ) {
            showSearchDialog();
        }
    }

    function isShiftKey( e ) {
        return e.shiftKey;
    }

    function isControlKey( e ) {
        return e.ctrlKey || e.metaKey;
    }

    function closeActiveDialog() {
        var done = hideAllDropDowns( false );

        if ( !done ) {
            done = hideSearchHistoryDropDownMenu();
        }

        if ( !done && _element_Dialog_AllOpened.length > 0 ) {
            var lastFunc = _element_Dialog_AllOpened[ _element_Dialog_AllOpened.length - 1 ];

            if ( isFunction( lastFunc ) ) {    
                _element_Dialog_AllOpened.pop();
                lastFunc( false );
            }

            done = true;
        }

        if ( !done ) {
            done = hideSearchDialog();
        }

        if ( !done ) {
            done = clearSelectedEvents();
        }

        if ( !done && _events_Copied.length > 0 ) {
            setCopiedEventsClasses();

            _events_Copied = [];
            _events_Copied_Cut = false;

            done = true;
        }

        if ( !done && _element_View_Opened.length > 0 ) {
            closeLastViewOpened();
            done = true;
        }
        
        return done;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Day View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullDayView() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            var wasAddedAlready = _element_View_FullDay !== null;

            if ( wasAddedAlready ) {
                _element_View_FullDay.innerHTML = _string.empty;
            }

            if ( !wasAddedAlready ) {
                _element_View_FullDay = createElement( "div", "full-day-view" );
                _element_View_FullDay.id = newGuid();
                _element_Calendar.appendChild( _element_View_FullDay );
            }
    
            var titleBar = createElement( "div", "title-bar" );
            _element_View_FullDay.appendChild( titleBar );
    
            if ( _options.fullScreenModeEnabled ) {
                titleBar.ondblclick = fullScreenModeHeaderDoubleClick;
            }
    
            _element_View_FullDay_TitleBar = createElement( "div", "title" );
            titleBar.appendChild( _element_View_FullDay_TitleBar );

            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideFullDayView );

            titleBar.appendChild( createElement( "div", "right-divider-line" ) );

            if ( _options.views.fullDay.showExtraTitleBarButtons && _options.fullScreenModeEnabled ) {
                _element_View_FullDay_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, fullScreenModeHeaderDoubleClick );

                titleBar.appendChild( createElement( "div", "right-divider-line-full-screen-mode" ) );
            }
    
            buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextDayTooltipText, onNextFullDay );
    
            if ( _options.manualEditingEnabled && _options.views.fullDay.showExtraTitleBarButtons ) {
                buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, function() {
                    if ( _options.useTemplateWhenAddingNewEvent ) {
                        var newBlankTemplateEvent = buildBlankTemplateEvent( _element_View_FullDay_DateSelected, _element_View_FullDay_DateSelected );
        
                        showEventEditingDialog( newBlankTemplateEvent );
                        showEventEditingDialogTitleSelected();
                    } else {
                        showEventEditingDialog( null, _element_View_FullDay_DateSelected );
                    }
                } );
            }

            titleBar.appendChild( createElement( "div", "right-divider-line-views" ) );

            buildToolbarButton( titleBar, "ib-bar-graph", _options.viewTimelineTooltipText, function() {
                showTimelineView( _element_View_FullDay_DateSelected, true );
            } );
            
            if ( !_element_Mode_DatePicker_Enabled && isSideMenuAvailable() ) {
                buildToolbarButton( titleBar, "ib-hamburger", _options.showMenuTooltipText, showSideMenu );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );
            }

            buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousDayTooltipText, onPreviousFullDay );
    
            if ( _options.views.fullDay.showExtraTitleBarButtons ) {
                _element_View_FullDay_TodayButton = buildToolbarButton( titleBar, "ib-pin", _options.todayTooltipText, onCurrentFullDay );

                buildToolbarButton( titleBar, "ib-arrow-right-full-line", _options.jumpToDateTitle, function() {
                    showJumpToDateDialog();
                } );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );
    
                buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                    refreshViews( true, true );
                } );

                if ( _options_Search.enabled ) {
                    _element_View_FullDay_SearchButton = buildToolbarButton( titleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
                }
            }
    
            _element_View_FullDay_Contents = createElement( "div", "contents custom-scroll-bars" );
            _element_View_FullDay.appendChild( _element_View_FullDay_Contents );
    
            _element_View_FullDay_Contents.oncontextmenu = function( e ) {
                 var hoursMinutes = getHourMinutesFromMousePositionClick( e, _element_View_FullDay_Contents_Hours );

                 _element_ContextMenu_FullDay_ClickPositionHourMinutes = padNumber( hoursMinutes[ 0 ] ) + ":" + padNumber( hoursMinutes[ 1 ] );

                showFullDayContextMenu( e, _element_View_FullDay_DateSelected, _element_View_FullDay_EventsShown );
            };
    
            _element_View_FullDay_Contents_AllDayEvents = createElement( "div", "content-events-all-day" );
            _element_View_FullDay_Contents.appendChild( _element_View_FullDay_Contents_AllDayEvents );
    
            var allDayText = createElement( "div", "all-day-text" );
            setNodeText( allDayText, _options.allDayText );
    
            _element_View_FullDay_Contents_AllDayEvents.appendChild( allDayText );
    
            _element_View_FullDay_Contents_Hours = createElement( "div", "contents-events" );
            _element_View_FullDay_Contents_Hours.ondblclick = onFullDayViewDoubleClick;
            _element_View_FullDay_Contents.appendChild( _element_View_FullDay_Contents_Hours );

            _element_View_FullDay_Contents_WorkingHours = createElement( "div", "working-hours" );
            _element_View_FullDay_Contents.appendChild( _element_View_FullDay_Contents_WorkingHours );

            if ( _options.manualEditingEnabled && _options.dragAndDropForEventsEnabled ) {
                _element_View_FullDay_Contents_Hours.ondragover = cancelBubble;
                _element_View_FullDay_Contents_Hours.ondragenter = cancelBubble;
                _element_View_FullDay_Contents_Hours.ondragleave = cancelBubble;
                _element_View_FullDay_Contents_Hours.ondrop = function( e ) {
                    onViewEventDropped( e, _element_View_FullDay_DateSelected, _element_View_FullDay_Contents_Hours );
                };
            }

            buildHoursForTimeBasedView( _element_View_FullDay_Contents_Hours, _options.views.fullDay.minutesBetweenSections );
            buildFullDayViewTimeArrow();
        }
    }

    function buildFullDayViewWorkingHours() {
        if ( _options.workingHoursStart !== null && _options.workingHoursEnd !== null ) {
            var workingHoursStart = null,
                workingHoursEnd = null;

            if ( isDefinedObject( _options.workingHoursStart ) ) {
                var startWeekdayNumber = getWeekdayNumber( _element_View_FullDay_DateSelected );

                if ( _options.workingHoursStart.hasOwnProperty( startWeekdayNumber.toString() ) ) {
                    workingHoursStart =  _options.workingHoursStart[ startWeekdayNumber.toString() ];
                }

            } else {
                workingHoursStart =  _options.workingHoursStart;
            }

            if ( isDefinedObject( _options.workingHoursEnd ) ) {
                var endWeekdayNumber = getWeekdayNumber( _element_View_FullDay_DateSelected );

                if ( _options.workingHoursEnd.hasOwnProperty( endWeekdayNumber.toString() ) ) {
                    workingHoursEnd =  _options.workingHoursEnd[ endWeekdayNumber.toString() ];
                }

            } else {
                workingHoursEnd =  _options.workingHoursEnd;
            }

            if ( workingHoursStart !== null && workingHoursEnd !== null && workingHoursStart !== workingHoursEnd ) {
                var pixelsPerMinute = getPixelsPerMinuteForHeight( _element_View_FullDay_Contents_Hours ),
                    workingHoursStartParts = workingHoursStart.split( ":" ),
                    workingHoursEndParts = workingHoursEnd.split( ":" ),
                    top = ( ( parseInt( workingHoursStartParts[ 0 ] ) * 60 ) + parseInt( workingHoursStartParts[ 1 ] ) ) * pixelsPerMinute,
                    height = ( ( ( parseInt( workingHoursEndParts[ 0 ] ) * 60 ) + parseInt( workingHoursEndParts[ 1 ] ) ) * pixelsPerMinute ) - top;

                _element_View_FullDay_Contents_WorkingHours.style.display = "block";
                _element_View_FullDay_Contents_WorkingHours.style.top = top + "px";
                _element_View_FullDay_Contents_WorkingHours.style.height = height + "px";
            }
        }
    }

    function buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, dateFunc, dateFuncForwardValue ) {
        var newFromDate = new Date( eventDetails.from ),
            excludeDays = getArray( eventDetails.repeatEveryExcludeDays );
    
        while ( newFromDate < date ) {
            dateFunc( newFromDate, dateFuncForwardValue );

            var repeatEnded = !( !isDefined( eventDetails.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, eventDetails.repeatEnds ) );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === _value.notFound && !repeatEnded ) {
                if ( doDatesMatch( newFromDate, date ) ) {
                    orderedEvents.push( eventDetails );
                    break;
                }
            }
        }
    }

    function buildFullDayViewEvent( eventDetails, displayDate ) {
        var scrollTop = 0,
            seriesIgnoreDates = getArray( eventDetails.seriesIgnoreDates ),
            formattedDate = toStorageFormattedDate( displayDate ),
            editEventDate = new Date( displayDate );

        if ( isEventVisible( eventDetails ) && seriesIgnoreDates.indexOf( formattedDate ) === _value.notFound ) {
            var event = createElement( "div", "event" );
            event.ondblclick = cancelBubble;
            event.setAttribute( "event-type", getNumber( eventDetails.type ) );
            event.setAttribute( "event-id", eventDetails.id );
            event.setAttribute( "event-is-all-day", eventDetails.isAllDay );

            event.onclick = function ( e ) {
                increaseEventZIndex( e, event );
            };

            if ( eventDetails.isAllDay ) {
                _element_View_FullDay_Contents_AllDayEvents.appendChild( event );
            } else {

                if ( _options.manualEditingEnabled && _options.dragAndDropForEventsEnabled ) {
                    if ( doDatesMatch( eventDetails.from, eventDetails.to ) ) {
                        event.className += " resizable";
                    }

                    event.ondragstart = function( e ) {
                        onViewEventDragStart( e, event, eventDetails, displayDate );
                    };

                    event.ondragEnd = onMouseUpResizeTracking;
                    event.setAttribute( "draggable", true );
                }

                _element_View_FullDay_Contents_Hours.appendChild( event );
            }
    
            event.oncontextmenu = function( e ) {
                showEventContextMenu( e, eventDetails, formattedDate );
            };
    
            setEventClassesForActions( event, eventDetails );
            setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, displayDate ) );
            setEventCustomTriggers( event, eventDetails, editEventDate );

            if ( doDatesMatch( eventDetails.from, displayDate ) ) {
                event.id = _element_ID_Event_FullDay + eventDetails.id;
            }

            if ( !fireCustomTrigger( _options.events.onFullDayEventRender, event, eventDetails ) ) {
                var title = createElement( "div", "title" ),
                    repeatEvery = getNumber( eventDetails.repeatEvery );

                if ( repeatEvery > _enum_RepeatType.never ) {
                    var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                    icon.style.borderColor = event.style.color;
                    title.appendChild( icon );
                }
                
                title.innerHTML += stripHTMLTagsFromText( eventDetails.title );
                event.appendChild( title );
        
                if ( !eventDetails.isAllDay || _options.views.fullDay.showAllDayEventDetails ) {
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

                    if ( duration.innerHTML === _string.empty ) {
                        event.removeChild( duration );
                    }
            
                    if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _enum_RepeatType.never ) {
                        var repeats = createElement( "div", "repeats" );
                        setNodeText( repeats, _options.repeatsText.replace( ":", _string.empty ) + _string.space + getRepeatsText( eventDetails.repeatEvery ) );
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
            }

            event.addEventListener( "click", function( e ) {
                storeMultiSelectEvent( e, eventDetails );
            } );
            
            if ( !eventDetails.isAllDay ) {
                scrollTop = setEventPositionAndGetScrollTop( _element_View_FullDay_Contents, _element_View_FullDay_Contents_Hours, displayDate, event, eventDetails );
            }

            _element_View_FullDay_EventsShown.push( eventDetails );

            if ( !eventDetails.isAllDay ) {
                _element_View_FullDay_Events_Dragged_Sizes.push( {
                    eventDetails: eventDetails,
                    eventElement: event,
                    height: event.offsetHeight
                } );
            }
        }

        return scrollTop;
    }

    function buildFullDayViewTimeArrow() {
        _element_View_FullDay_TimeArrow = createElement( "div", "time-arrow" );
        _element_View_FullDay_Contents_Hours.appendChild( _element_View_FullDay_TimeArrow );

        _element_View_FullDay_TimeArrow.appendChild( createElement( "div", "arrow-left" ) );
        _element_View_FullDay_TimeArrow.appendChild( createElement( "div", "line" ) );
    }

    function buildFullDayViewTitle() {
        if ( !fireCustomTrigger( _options.events.onFullDayTitleRender, _element_View_FullDay_DateSelected ) ) {
            buildDateTimeDisplay( _element_View_FullDay_TitleBar, _element_View_FullDay_DateSelected, false, true, true );
        }
    }

    function showFullDayView( date, fromOpen ) {
        date = isDefined( date ) ? new Date( date ) : new Date();
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        var currentDate = new Date(),
            weekDayNumber = getWeekdayNumber( currentDate ),
            isCurrentDateVisible = _options.visibleDays.indexOf( weekDayNumber ) > _value.notFound;

        _element_View_FullDay_TitleBar.innerHTML = _string.empty;
        _element_View_FullDay_DateSelected = new Date( date );
        _element_View_FullDay_EventsShown = [];
        _element_View_FullDay_Events_Dragged_Sizes = [];    
        _element_View_FullDay_Contents_AllDayEvents.style.display = "block";
        _element_View_FullDay_Contents_WorkingHours.style.display = "none";

        if ( doDatesMatch( date, currentDate ) && !isCurrentDateVisible ) {
            moveFullDayDateToNextDay();
        }

        updateToolbarButtonVisibleState( _element_View_FullDay_TodayButton, isCurrentDateVisible );
        clearElementsByClassName( _element_View_FullDay_Contents, "event" );
        hideSearchDialog();
        buildFullDayViewTitle();
        showView( _element_View_FullDay );

        if ( isWorkingDay( date ) ) {
            buildFullDayViewWorkingHours();
        }

        var holidayText = getHolidaysText( date ),
            orderedEvents = [];

        if ( holidayText !== null ) {
            createSpanElement( _element_View_FullDay_TitleBar, " (" + holidayText + ")", "light-title-bar-text" );
        }

        getFullDayViewOrderedEvents( date, orderedEvents );

        orderedEvents = getOrderedEvents( orderedEvents );

        var orderedEventsLength = orderedEvents.length,
            orderedEventsFirstTopPosition = null,
            timeArrowPosition = updateViewTimeArrowPosition( _element_View_FullDay_DateSelected, _element_View_FullDay, _element_View_FullDay_TimeArrow, _element_View_FullDay_Contents_Hours, _options.views.fullDay.showTimelineArrow );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var newTopPosition = buildFullDayViewEvent( orderedEvents[ orderedEventIndex ], date );
            if ( orderedEventsFirstTopPosition === null ) {
                orderedEventsFirstTopPosition = newTopPosition;
            }
        }

        if ( fromOpen ) {
            if ( isTimeArrowVisible( _element_View_FullDay_DateSelected, _element_View_FullDay, _options.views.fullDay.showTimelineArrow  ) ) {
                var allDayEventsHeight = _element_View_FullDay_Contents_AllDayEvents.offsetHeight;
                allDayEventsHeight = allDayEventsHeight <= 1 ? _options.spacing * 4 : allDayEventsHeight;

                _element_View_FullDay_Contents.scrollTop = timeArrowPosition - allDayEventsHeight;
            } else {
                _element_View_FullDay_Contents.scrollTop = orderedEventsFirstTopPosition - ( _element_View_FullDay_Contents.offsetHeight / 2 );
            }
        }

        if ( _element_View_FullDay_Contents_AllDayEvents.offsetHeight <= 1 ) {
            _element_View_FullDay_Contents_AllDayEvents.style.display = "none";
        }

        updateToolbarButtonVisibleState( _element_View_FullDay_SearchButton, _element_View_FullDay_EventsShown.length > 0 );
        adjustViewEventsThatOverlap( _element_View_FullDay_Contents_Hours );
    }

    function getFullDayViewOrderedEvents( date, orderedEvents ) {
        getAllEventsFunc( function( eventDetails ) {
            var totalDays = getTotalDaysBetweenDates( eventDetails.from, eventDetails.to ) + 1,
                nextDate = new Date( eventDetails.from );
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( doDatesMatch( nextDate, date ) ) {
                    orderedEvents.push( eventDetails );
                    break;
                }

                moveDateForwardDay( nextDate );
            }
            
            var repeatEvery = getNumber( eventDetails.repeatEvery );
            if ( repeatEvery > _enum_RepeatType.never ) {
                if ( repeatEvery === _enum_RepeatType.everyDay ) {
                    buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardDay, 1 );
                } else if ( repeatEvery === _enum_RepeatType.everyWeek ) {
                    buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardWeek, 1 );
                } else if ( repeatEvery === _enum_RepeatType.every2Weeks ) {
                    buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardWeek, 2 );
                } else if ( repeatEvery === _enum_RepeatType.everyMonth ) {
                    buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardMonth, 1 );
                } else if ( repeatEvery === _enum_RepeatType.everyYear ) {
                    buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardYear, 1 );
                } else if ( repeatEvery === _enum_RepeatType.custom ) {

                    var repeatEveryCustomType = getNumber( eventDetails.repeatEveryCustomType ),
                        repeatEveryCustomValue = getNumber( eventDetails.repeatEveryCustomValue );
                    
                    if ( repeatEveryCustomValue > 0 ) {
                        if ( repeatEveryCustomType === _enum_RepeatCustomType.daily ) {
                            buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardDay, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.weekly ) {
                            buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardWeek, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.monthly ) {
                            buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardMonth, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.yearly ) {
                            buildFullDayViewRepeatedDayEvents( eventDetails, orderedEvents, date, moveDateForwardYear, repeatEveryCustomValue );
                        }
                    }
                }
            }
        } );
    }

    function updateFullDayView() {
        if ( isViewVisible( _element_View_FullDay ) ) {
            showFullDayView( _element_View_FullDay_DateSelected );
        }
    }

    function hideFullDayView() {
        hideView( _element_View_FullDay );

        _element_View_FullDay_DateSelected = null;
        _element_View_FullDay_EventsShown = [];
        _element_View_FullDay_Events_Dragged_Sizes = [];
    }

    function onFullDayViewDoubleClick( e ) {
        if ( _options.manualEditingEnabled ) {
            var hoursMinutes = getHourMinutesFromMousePositionClick( e, _element_View_FullDay_Contents_Hours );
            
            if ( _options.useTemplateWhenAddingNewEvent ) {
                var newBlankTemplateEventTime = padNumber( hoursMinutes[ 0 ] ) + ":" + padNumber( hoursMinutes[ 1 ] ),
                    newBlankTemplateEvent = buildBlankTemplateEvent( _element_View_FullDay_DateSelected, _element_View_FullDay_DateSelected, newBlankTemplateEventTime, newBlankTemplateEventTime );

                showEventEditingDialog( newBlankTemplateEvent );
                showEventEditingDialogTitleSelected();
            } else {
                showEventEditingDialog( null, _element_View_FullDay_DateSelected, hoursMinutes );
            }
        }
    }

    function onPreviousFullDay() {
        moveDateBackOneDay( _element_View_FullDay_DateSelected );

        if ( _options.visibleDays.length < 7 ) {
            var weekDayNumber = getWeekdayNumber( _element_View_FullDay_DateSelected );

            while ( _options.visibleDays.indexOf( weekDayNumber ) === _value.notFound ) {
                moveDateBackOneDay( _element_View_FullDay_DateSelected );
    
                weekDayNumber = getWeekdayNumber( _element_View_FullDay_DateSelected );
            }
        }

        showFullDayView( _element_View_FullDay_DateSelected, true );
    }

    function onNextFullDay() {
        moveFullDayDateToNextDay( true );
    }

    function onCurrentFullDay() {
        _element_View_FullDay_DateSelected = new Date();
            
        showFullDayView( _element_View_FullDay_DateSelected, true );
    }

    function moveFullDayDateToNextDay( showView ) {
        showView = isDefined( showView ) ? showView : false;

        moveDateForwardDay( _element_View_FullDay_DateSelected );

        if ( _options.visibleDays.length < 7 ) {
            var weekDayNumber = getWeekdayNumber( _element_View_FullDay_DateSelected );

            while ( _options.visibleDays.indexOf( weekDayNumber ) === _value.notFound ) {
                moveDateForwardDay( _element_View_FullDay_DateSelected );
    
                weekDayNumber = getWeekdayNumber( _element_View_FullDay_DateSelected );
            }
        }

        if ( showView ) {
            showFullDayView( _element_View_FullDay_DateSelected, true );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Week View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullWeekView() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            var wasAddedAlready = _element_View_FullWeek !== null;

            if ( wasAddedAlready ) {
                _element_View_FullWeek.innerHTML = _string.empty;
                _element_View_FullWeek_Contents_DayNamesHeader = null;
            }

            if ( !wasAddedAlready ) {
                _element_View_FullWeek = createElement( "div", "full-week-view" );
                _element_View_FullWeek.id = newGuid();
                _element_Calendar.appendChild( _element_View_FullWeek );
            }
    
            var titleBar = createElement( "div", "title-bar" );
            _element_View_FullWeek.appendChild( titleBar );
    
            if ( _options.fullScreenModeEnabled ) {
                titleBar.ondblclick = fullScreenModeHeaderDoubleClick;
            }
    
            _element_View_FullWeek_TitleBar = createElement( "div", "title" );
            titleBar.appendChild( _element_View_FullWeek_TitleBar );

            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
                _element_View_FullWeek_EventsShown = [];
    
                hideView( _element_View_FullWeek );
            } );

            titleBar.appendChild( createElement( "div", "right-divider-line" ) );

            if ( _options.views.fullWeek.showExtraTitleBarButtons && _options.fullScreenModeEnabled ) {
                _element_View_FullWeek_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, fullScreenModeHeaderDoubleClick );

                titleBar.appendChild( createElement( "div", "right-divider-line-full-screen-mode" ) );
            }
    
            buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextWeekTooltipText, onNextFullWeek );
    
            if ( _options.manualEditingEnabled && _options.views.fullWeek.showExtraTitleBarButtons ) {
                buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, function() {
                    showEventEditingDialog( null, new Date( _element_View_FullWeek_DateSelected_StartOfWeek ) );
                } );
            }
    
            if ( !_element_Mode_DatePicker_Enabled && isSideMenuAvailable() ) {
                buildToolbarButton( titleBar, "ib-hamburger", _options.showMenuTooltipText, showSideMenu );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );
            }

            buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousWeekTooltipText, onPreviousFullWeek );
    
            if ( _options.views.fullWeek.showExtraTitleBarButtons ) {
                buildToolbarButton( titleBar, "ib-pin", _options.thisWeekTooltipText, onCurrentFullWeek );

                buildToolbarButton( titleBar, "ib-arrow-right-full-line", _options.jumpToDateTitle, function() {
                    showJumpToDateDialog();
                } );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );

                buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                    refreshViews( true, true );
                } );
        
                if ( _options_Search.enabled ) {
                    _element_View_FullWeek_SearchButton = buildToolbarButton( titleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
                }
            }
    
            _element_View_FullWeek_Contents = createElement( "div", "contents custom-scroll-bars" );
            _element_View_FullWeek.appendChild( _element_View_FullWeek_Contents );

            buildFullWeekViewLayout();
        }
    }

    function buildFullWeekViewLayout() {
        var dayNamesHeaderContainer = createElement( "div", "header-days-container" );
        _element_View_FullWeek_Contents.appendChild( dayNamesHeaderContainer );

        if ( _options.views.fullWeek.showDayNamesHeaders ) {
            _element_View_FullWeek_Contents_DayNamesHeader = createElement( "div", "row-cells header-days" );
            dayNamesHeaderContainer.appendChild( _element_View_FullWeek_Contents_DayNamesHeader );
        }

        _element_View_FullWeek_Contents_AllDayEvents = createElement( "div", "content-events-all-day" );
        _element_View_FullWeek_Contents.appendChild( _element_View_FullWeek_Contents_AllDayEvents );

        _element_View_FullWeek_Contents_Days_AllDay = createElement( "div", "row-cells days" );
        _element_View_FullWeek_Contents_AllDayEvents.appendChild( _element_View_FullWeek_Contents_Days_AllDay );

        var allDayText = createElement( "div", "all-day-text" );
        setNodeText( allDayText, _options.allDayText );
        _element_View_FullWeek_Contents_AllDayEvents.appendChild( allDayText );

        _element_View_FullWeek_Contents_Hours = createElement( "div", "hours" );
        _element_View_FullWeek_Contents.appendChild( _element_View_FullWeek_Contents_Hours );

        buildHoursForTimeBasedView( _element_View_FullWeek_Contents_Hours, _options.views.fullWeek.minutesBetweenSections );

        _element_View_FullWeek_Contents_Days = createElement( "div", "row-cells days" );
        _element_View_FullWeek_Contents_Hours.appendChild( _element_View_FullWeek_Contents_Days );
    }

    function buildFullWeekViewDayColumns( weekStartDate, weekEndDate ) {
        var headerNamesLength = _options.dayHeaderNames.length,
            droppableDates = {},
            startWeekDate = new Date( weekStartDate );

        while ( startWeekDate < weekEndDate ) {
            droppableDates[ getWeekdayNumber( startWeekDate ) ] = new Date( startWeekDate );

            startWeekDate.setDate( startWeekDate.getDate() + 1 );
        }

        _element_View_FullWeek_Contents_Days.innerHTML = _string.empty;
        _element_View_FullWeek_Contents_Days_AllDay.innerHTML = _string.empty;
    
        if ( _options.startOfWeekDay === _enum_Day.saturday || _options.startOfWeekDay === _enum_Day.sunday ) {
            buildFullWeekViewDayColumn( _options.startOfWeekDay, headerNamesLength, droppableDates );
            buildFullWeekViewDayColumn( 0, _options.startOfWeekDay, droppableDates );
        } else {
            buildFullWeekViewDayColumn( 0, headerNamesLength, droppableDates );
        }

        if ( _options.reverseOrderDaysOfWeek ) {
            reverseElementsOrder( _element_View_FullWeek_Contents_Days );
        }
    }

    function buildFullWeekViewDayColumn( startIndex, endIndex, droppableDates ) {
        for ( var headerNameIndex = startIndex; headerNameIndex < endIndex; headerNameIndex++ ) {
            if ( _options.visibleDays.indexOf( headerNameIndex ) > _value.notFound ) {
                buildFullWeekDayViewColumnWithEvents( droppableDates, headerNameIndex );
            }
        }
    }

    function buildFullWeekDayViewColumnWithEvents( droppableDates, headerNameIndex ) {
        var column = createElement( "div", getCellName() ),
            columnAll = createElement( "div", getCellName() ),
            columnDate = new Date( droppableDates[ headerNameIndex ] );

        column.id = _element_ID_WeekDayElement + headerNameIndex;
        columnAll.id = _element_ID_WeekAllDayElement + headerNameIndex;

        _element_View_FullWeek_Contents_Days.appendChild( column );
        _element_View_FullWeek_Contents_Days_AllDay.appendChild( columnAll );

        column.ondblclick = function( e ) {
            onFullWeekViewDayColumnDoubleClick( e, column, columnDate );
        };

        makeAreaDroppable( columnAll, columnDate.getFullYear(), columnDate.getMonth(), columnDate.getDate() );
        buildFullWeekViewDayColumnWorkingHours( column, headerNameIndex );

        if ( isDateToday( columnDate ) ) {
            buildFullWeekViewDayColumnTimeArrow( column, columnDate );
        }

        if ( _options.manualEditingEnabled && _options.dragAndDropForEventsEnabled ) {
            column.ondragover = cancelBubble;
            column.ondragenter = cancelBubble;
            column.ondragleave = cancelBubble;
            column.ondrop = function( e ) {
                onViewEventDropped( e, columnDate, _element_View_FullWeek_Contents_Hours );
            };
        }

        column.oncontextmenu = function( e ) {
            var hoursMinutes = getHourMinutesFromMousePositionClick( e, column );

            _element_ContextMenu_FullDay_ClickPositionHourMinutes = padNumber( hoursMinutes[ 0 ] ) + ":" + padNumber( hoursMinutes[ 1 ] );

            showFullDayContextMenu( e, columnDate, _element_View_FullWeek_EventsShown_PerDay[ headerNameIndex ] );
        };
    }

    function buildFullWeekViewDayColumnTimeArrow( column, columnDate ) {
        _element_View_FullWeek_TimeArrow = createElement( "div", "time-arrow" );
        column.appendChild( _element_View_FullWeek_TimeArrow );

        _element_View_FullWeek_TimeArrow.appendChild( createElement( "div", "arrow-left" ) );
        _element_View_FullWeek_TimeArrow.appendChild( createElement( "div", "line" ) );

        _element_View_FullWeek_TimeArrow_Position = updateViewTimeArrowPosition( columnDate, _element_View_FullWeek, _element_View_FullWeek_TimeArrow, column, _options.views.fullWeek.showTimelineArrow  );
    }

    function buildFullWeekViewDayColumnWorkingHours( column, headerNameIndex ) {
        if ( _options.workingHoursStart !== null && _options.workingHoursEnd !== null && isIndexWorkingDay( headerNameIndex ) ) {
            var workingHoursStart = null,
                workingHoursEnd = null;

            if ( isDefinedObject( _options.workingHoursStart ) && _options.workingHoursStart.hasOwnProperty( headerNameIndex.toString() ) ) {
                workingHoursStart =  _options.workingHoursStart[ headerNameIndex.toString() ];
            } else {
                workingHoursStart =  _options.workingHoursStart;
            }

            if ( isDefinedObject( _options.workingHoursEnd ) && _options.workingHoursEnd.hasOwnProperty( headerNameIndex.toString() ) ) {
                workingHoursEnd =  _options.workingHoursEnd[ headerNameIndex.toString() ];
            } else {
                workingHoursEnd =  _options.workingHoursEnd;
            }

            if ( workingHoursStart !== null && workingHoursEnd !== null && workingHoursStart !== workingHoursEnd ) {
                var pixelsPerMinute = getPixelsPerMinuteForHeight( column ),
                    workingHoursStartParts = workingHoursStart.split( ":" ),
                    workingHoursEndParts = workingHoursEnd.split( ":" ),
                    top = ( ( parseInt( workingHoursStartParts[ 0 ] ) * 60 ) + parseInt( workingHoursStartParts[ 1 ] ) ) * pixelsPerMinute,
                    height = ( ( ( parseInt( workingHoursEndParts[ 0 ] ) * 60 ) + parseInt( workingHoursEndParts[ 1 ] ) ) * pixelsPerMinute ) - top;

                var workingHours = createElement( "div", "working-hours" );
                column.appendChild( workingHours );

                workingHours.style.display = "block";
                workingHours.style.top = top + "px";
                workingHours.style.height = height + "px";
            }
        }
    }

    function buildFullWeekViewTitle( weekStartDate, weekEndDate ) {
        _element_View_FullWeek_TitleBar.innerHTML = _string.empty;

        if ( !fireCustomTrigger( _options.events.onFullWeekTitleRender, weekStartDate, weekEndDate ) ) {
            if ( _options.views.fullWeek.showWeekNumbersInTitles ) {
                createSpanElement( _element_View_FullWeek_TitleBar, _options.weekText + _string.space + getWeekNumber( weekStartDate ) + ": " );
            }
    
            if ( _options.reverseOrderDaysOfWeek ) {
                buildFullWeekViewTitleDate( weekEndDate, weekStartDate );
            } else {
                buildFullWeekViewTitleDate( weekStartDate, weekEndDate );
            }
        }
    }

    function buildFullWeekViewTitleDate( from, to ) {
        if ( from.getFullYear() === to.getFullYear() ) {
            if ( from.getMonth() === to.getMonth() ) {
                buildDayDisplay( _element_View_FullWeek_TitleBar, from );
                createSpanElement( _element_View_FullWeek_TitleBar, " - " );
                buildDayDisplay( _element_View_FullWeek_TitleBar, to, null, _string.space );
                createSpanElement( _element_View_FullWeek_TitleBar, _options.monthNames[ from.getMonth() ] );
            } else {
                buildDateTimeDisplay( _element_View_FullWeek_TitleBar, from, false, false );
                createSpanElement( _element_View_FullWeek_TitleBar, " - " );
                buildDateTimeDisplay( _element_View_FullWeek_TitleBar, to, false, false );
            }

            createSpanElement( _element_View_FullWeek_TitleBar, ", " + from.getFullYear() );

        } else {
            buildDateTimeDisplay( _element_View_FullWeek_TitleBar, from, false, true );
            createSpanElement( _element_View_FullWeek_TitleBar, " - " );
            buildDateTimeDisplay( _element_View_FullWeek_TitleBar, to, false, true );
        }
    }

    function buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, dateFunc, dateFuncForwardValue ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays ),
            added = false;
    
        while ( newFromDate < weekEndDate ) {
            dateFunc( newFromDate, dateFuncForwardValue );

            var repeatEnded = !( !isDefined( orderedEvent.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, orderedEvent.repeatEnds ) );
            
            if ( excludeDays.indexOf( newFromDate.getDay() ) === _value.notFound && !repeatEnded ) {
                if ( newFromDate >= weekStartDate && newFromDate <= weekEndDate ) {
                    var column = getElementByID( _element_ID_WeekDayElement + getWeekdayNumber( newFromDate ) ),
                        columnAllDay = getElementByID( _element_ID_WeekAllDayElement + getWeekdayNumber( newFromDate ) );

                    if ( column !== null ) {
                        buildFullWeekViewEvent( column, columnAllDay, orderedEvent, newFromDate );
                        added = true;
                    }
                }
            }
        }

        return added;
    }

    function buildFullWeekViewEvent( column, columnAllDay, eventDetails, displayDate ) {
        var added = false,
            seriesIgnoreDates = getArray( eventDetails.seriesIgnoreDates ),
            actualDisplayDate = new Date( displayDate ),
            formattedDate = toStorageFormattedDate( actualDisplayDate ),
            editEventDate = new Date( displayDate );

        if ( isEventVisible( eventDetails ) && seriesIgnoreDates.indexOf( formattedDate ) === _value.notFound ) {
            var event = createElement( "div", "event" ),
                weekdayNumber = getWeekdayNumber( actualDisplayDate );

            event.setAttribute( "event-type", getNumber( eventDetails.type ) );
            event.setAttribute( "event-id", eventDetails.id );
            event.setAttribute( "event-is-all-day", eventDetails.isAllDay );
            column.appendChild( event );

            event.onclick = function ( e ) {
                increaseEventZIndex( e, event );
            };

            event.oncontextmenu = function( e ) {
                showEventContextMenu( e, eventDetails, formattedDate );
            };

            if ( eventDetails.isAllDay ) {
                columnAllDay.appendChild( event );

                makeEventDraggable( event, eventDetails, actualDisplayDate, columnAllDay );
                
                _element_View_FullWeek_AllDayEventsAdded = true;
            } else {

                if ( _options.manualEditingEnabled && _options.dragAndDropForEventsEnabled && !isEventLocked( eventDetails ) ) {
                    if ( doDatesMatch( eventDetails.from, eventDetails.to ) && !eventDetails.isAllDay ) {
                        event.className += " resizable";
                    }
    
                    event.ondragstart = function( e ) {
                        onViewEventDragStart( e, event, eventDetails, actualDisplayDate );
                    };
    
                    event.ondragEnd = onMouseUpResizeTracking;
                    event.setAttribute( "draggable", true );
                }
            }
            
            setEventClassesForActions( event, eventDetails );
            setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, actualDisplayDate ) );
            setEventCustomTriggers( event, eventDetails, editEventDate );

            if ( doDatesMatch( eventDetails.from, actualDisplayDate ) ) {
                event.id = _element_ID_Event_WeekDay + eventDetails.id;
            }

            if ( !fireCustomTrigger( _options.events.onFullWeekEventRender, event, eventDetails ) ) {
                var title = createElement( "div", "title" ),
                    repeatEvery = getNumber( eventDetails.repeatEvery );

                if ( repeatEvery > _enum_RepeatType.never ) {
                    var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                    icon.style.borderColor = event.style.color;
                    title.appendChild( icon );
                }
                
                title.innerHTML += stripHTMLTagsFromText( eventDetails.title );
                event.appendChild( title );

                if ( !eventDetails.isAllDay || _options.views.fullWeek.showAllDayEventDetails ) {
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

                    if ( duration.innerHTML === _string.empty ) {
                        event.removeChild( duration );
                    }
            
                    if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _enum_RepeatType.never ) {
                        var repeats = createElement( "div", "repeats" );
                        setNodeText( repeats, _options.repeatsText.replace( ":", _string.empty ) + _string.space + getRepeatsText( eventDetails.repeatEvery ) );
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
            }

            event.addEventListener( "click", function( e ) {
                storeMultiSelectEvent( e, eventDetails );
            } );

            if ( !eventDetails.isAllDay ) {
                setEventPositionAndGetScrollTop( column, column, actualDisplayDate, event, eventDetails, true );
            }

            if ( !eventDetails.isAllDay ) {
                _element_View_FullWeek_Events_Dragged_Sizes.push( {
                    eventDetails: eventDetails,
                    eventElement: event,
                    height: event.offsetHeight
                } );
            }

            if ( !_element_View_FullWeek_EventsShown_PerDay.hasOwnProperty( weekdayNumber ) ) {
                _element_View_FullWeek_EventsShown_PerDay[ weekdayNumber ] = [];
            }

            if ( _element_View_FullWeek_Contents_SmallestEventTop === 0 ) {
                _element_View_FullWeek_Contents_SmallestEventTop = event.offsetTop;
            } else {
                _element_View_FullWeek_Contents_SmallestEventTop = _parameter_Math.min( _element_View_FullWeek_Contents_SmallestEventTop, event.offsetTop );
            }
            
            _element_View_FullWeek_EventsShown_PerDay[ weekdayNumber ].push( eventDetails );
            added = true;
        }

        return added;
    }

    function buildFullWeekViewDayNameHeaderDates( weekStartDate, weekEndDate ) {
        if ( _element_View_FullWeek_Contents_DayNamesHeader !== null ) {
            var fromDate = new Date( weekStartDate ),
                childrenIndex = 0,
                children = _element_View_FullWeek_Contents_DayNamesHeader.children;

            while ( fromDate < weekEndDate ) {
                var weekDayNumber = getWeekdayNumber( fromDate );

                if ( _options.visibleDays.indexOf( weekDayNumber ) > _value.notFound ) {
                    children[ childrenIndex ].innerHTML += _string.space + fromDate.getDate() + "/" + ( fromDate.getMonth() + 1 );
                    childrenIndex++;
                }

                fromDate.setDate( fromDate.getDate() + 1 );
            }

            if ( _options.reverseOrderDaysOfWeek ) {
                reverseElementsOrder( _element_View_FullWeek_Contents_DayNamesHeader );
            }
        }
    }

    function showFullWeekView( weekDate, fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        var actualWeekDate = !isDefined( weekDate ) ? new Date() : new Date( weekDate ),
            weekStartEndDates = getWeekStartEndDates( actualWeekDate ),
            weekStartDate = weekStartEndDates[ 0 ],
            weekEndDate = weekStartEndDates[ 1 ];

        _element_View_FullWeek_DateSelected = actualWeekDate;
        _element_View_FullWeek_TimeArrow = null;
        _element_View_FullWeek_EventsShown = [];
        _element_View_FullWeek_EventsShown_PerDay = {};
        _element_View_FullWeek_AllDayEventsAdded = false;
        _element_View_FullWeek_TimeArrow_Position = null;
        _element_View_FullWeek_Contents_SmallestEventTop = 0;
        _element_View_FullWeek_Contents_AllDayEvents.style.display = "none";
        _element_View_FullWeek_Events_Dragged_Sizes = [];
        _element_View_FullWeek_DateSelected_StartOfWeek = weekStartDate;

        showView( _element_View_FullWeek );
        hideSearchDialog();
        buildFullWeekViewTitle( weekStartDate, weekEndDate );
        buildViewDayNamesHeader( _element_View_FullWeek_Contents_DayNamesHeader, false );
        buildFullWeekViewDayColumns( weekStartDate, weekEndDate );
        buildFullWeekViewDayNameHeaderDates( weekStartDate, weekEndDate );

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to ) + 1,
                nextDate = new Date( orderedEvent.from ),
                addedNow = false;
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( nextDate >= weekStartDate && nextDate <= weekEndDate ) {
                    var column = getElementByID( _element_ID_WeekDayElement + getWeekdayNumber( nextDate ) ),
                        columnAllDay = getElementByID( _element_ID_WeekAllDayElement + getWeekdayNumber( nextDate ) );
                    
                    if ( column !== null ) {
                        var added = buildFullWeekViewEvent( column, columnAllDay, orderedEvent, nextDate );
                        if ( added ) {
                            addedNow = true;
                        }
                    }
                }

                moveDateForwardDay( nextDate );
            }

            if ( addedNow ) {
                _element_View_FullWeek_EventsShown.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery ),
                repeatAdded = false;

            if ( repeatEvery > _enum_RepeatType.never ) {
                if ( repeatEvery === _enum_RepeatType.everyDay ) {
                    repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardDay, 1 );
                } else if ( repeatEvery === _enum_RepeatType.everyWeek ) {
                    repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardWeek, 1 );
                } else if ( repeatEvery === _enum_RepeatType.every2Weeks ) {
                    repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardWeek, 2 );
                } else if ( repeatEvery === _enum_RepeatType.everyMonth ) {
                    repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardMonth, 1 );
                } else if ( repeatEvery === _enum_RepeatType.everyYear ) {
                    repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardYear, 1 );
                } else if ( repeatEvery === _enum_RepeatType.custom ) {

                    var repeatEveryCustomType = getNumber( orderedEvent.repeatEveryCustomType ),
                        repeatEveryCustomValue = getNumber( orderedEvent.repeatEveryCustomValue );
                    
                    if ( repeatEveryCustomValue > 0 ) {
                        if ( repeatEveryCustomType === _enum_RepeatCustomType.daily ) {
                            repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardDay, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.weekly ) {
                            repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardWeek, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.monthly ) {
                            repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardMonth, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.yearly ) {
                            repeatAdded = buildFullWeekViewRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, moveDateForwardYear, repeatEveryCustomValue );
                        }
                    }
                }
            }

            if ( repeatAdded && !addedNow ) {
                _element_View_FullWeek_EventsShown.push( orderedEvent );
            }
        }

        var headerNamesLength = _options.dayHeaderNames.length;
        for ( var headerNamesIndex = 0; headerNamesIndex < headerNamesLength; headerNamesIndex++ ) {
            var columnForOverlapChecks = getElementByID( _element_ID_WeekDayElement + headerNamesIndex );
                    
            if ( columnForOverlapChecks !== null ) {
                adjustViewEventsThatOverlap( columnForOverlapChecks );
            }
        }
        
        var allDayEventsHeight = updateUpdateFullViewAllDayEventsHeight();

        if ( fromOpen ) {
            if ( _element_View_FullWeek_TimeArrow_Position !== null ) {
                allDayEventsHeight = allDayEventsHeight <= 0 ? _options.spacing * 4 : allDayEventsHeight;

                _element_View_FullWeek_Contents.scrollTop = _element_View_FullWeek_TimeArrow_Position - allDayEventsHeight;
            } else {
                _element_View_FullWeek_Contents.scrollTop = _element_View_FullWeek_Contents_SmallestEventTop;
            }
        }

        updateToolbarButtonVisibleState( _element_View_FullWeek_SearchButton, _element_View_FullWeek_EventsShown.length > 0 );
    }

    function updateFullWeekView() {
        if ( isViewVisible( _element_View_FullWeek ) ) {
            showFullWeekView( _element_View_FullWeek_DateSelected );
        }
    }

    function updateUpdateFullViewAllDayEventsHeight() {
        var height = 0;

        if ( _element_View_FullWeek_AllDayEventsAdded ) {
            _element_View_FullWeek_Contents_AllDayEvents.style.display = "block";

            var columnsLength = _element_View_FullWeek_Contents_Days_AllDay.children.length;

            for ( var columnIndex = 0; columnIndex < columnsLength; columnIndex++ ) {
                var events = _element_View_FullWeek_Contents_Days_AllDay.children[ columnIndex ].children,
                    eventsLength = events.length,
                    newHeight = 0;

                for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                    newHeight += ( events[ eventIndex ].offsetHeight + _options.spacing );
                }

                height = _parameter_Math.max( height, newHeight );
            }

            _element_View_FullWeek_Contents_AllDayEvents.style.height = ( height + _options.spacing ) + "px";
        }

        return height;
    }

    function onFullWeekViewDayColumnDoubleClick( e, column, columnDate ) {
        if ( _options.manualEditingEnabled ) {
            var hoursMinutes = getHourMinutesFromMousePositionClick( e, column );
            
            if ( _options.useTemplateWhenAddingNewEvent ) {
                var newBlankTemplateEventTime = padNumber( hoursMinutes[ 0 ] ) + ":" + padNumber( hoursMinutes[ 1 ] ),
                    newBlankTemplateEvent = buildBlankTemplateEvent( columnDate, columnDate, newBlankTemplateEventTime, newBlankTemplateEventTime );

                showEventEditingDialog( newBlankTemplateEvent );
                showEventEditingDialogTitleSelected();
            } else {
                showEventEditingDialog( null, columnDate, hoursMinutes );
            }
        }
    }

    function onPreviousFullWeek() {
        moveDateBackOneWeek( _element_View_FullWeek_DateSelected );
        showFullWeekView( _element_View_FullWeek_DateSelected, true );
    }

    function onNextFullWeek() {
        moveDateForwardWeek( _element_View_FullWeek_DateSelected );
        showFullWeekView( _element_View_FullWeek_DateSelected, true );
    }

    function onCurrentFullWeek() {
        _element_View_FullWeek_DateSelected = new Date();
        
        showFullWeekView( _element_View_FullWeek_DateSelected, true );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Month View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullMonthView() {
        if ( _element_View_FullMonth === null ) {
            _element_View_FullMonth = createElement( "div", "full-month-view" );
            _element_View_FullMonth.id = newGuid();
            _element_Calendar.appendChild( _element_View_FullMonth );
        }

        buildFullMonthViewTitleBar();
        buildFullMonthViewPinUp();
        buildFullMonthViewDayNamesHeader();
        buildFullMonthViewDayRows();
    }

    function buildFullMonthViewTitleBar() {
        _element_View_FullMonth_TitleBar_FullScreenButton = null;
        _element_View_FullMonth_TitleBar_SearchButton = null;

        var wasAddedAlready = _element_View_FullMonth_TitleBar !== null;

        if ( wasAddedAlready ) {
            _element_View_FullMonth_TitleBar.innerHTML = _string.empty;
        }

        if ( !wasAddedAlready ) {
            _element_View_FullMonth_TitleBar = createElement( "div", "title-bar" );
            _element_View_FullMonth.appendChild( _element_View_FullMonth_TitleBar );
        }

        if ( _options.fullScreenModeEnabled ) {
            _element_View_FullMonth_TitleBar.ondblclick = fullScreenModeHeaderDoubleClick;
        }

        if ( _element_Mode_DatePicker_Enabled ) {
            _element_View_FullMonth_TitleBar.onclick = function( e ) {
                cancelBubble( e );
                hideAllDropDowns();
            };
        }

        if ( !_element_Mode_DatePicker_Enabled && isSideMenuAvailable() ) {
            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-hamburger", _options.showMenuTooltipText, showSideMenu );
            
            _element_View_FullMonth_TitleBar.appendChild( createElement( "div", "left-divider-line" ) );
        }

        buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-arrow-left-full", _options.previousMonthTooltipText, onPreviousMonth );

        if ( _options.views.fullMonth.addYearButtons ) {
            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-rewind", _options.previousYearTooltipText, moveBackYear );
        }

        if ( _element_Mode_DatePicker_Enabled || _options.views.fullMonth.showExtraTitleBarButtons ) {
            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-pin", _options.currentMonthTooltipText, onCurrentMonth );
        }

        if ( _options.views.fullMonth.showExtraTitleBarButtons ) {
            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-arrow-right-full-line", _options.jumpToDateTitle, function() {
                showJumpToDateDialog();
            } );

            _element_View_FullMonth_TitleBar.appendChild( createElement( "div", "left-divider-line" ) );

            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-refresh", _options.refreshTooltipText, function() {
                refreshViews( true, true );
            } );

            if ( _options_Search.enabled ) {
                _element_View_FullMonth_TitleBar_SearchButton = buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
            }
        }

        if ( _element_Mode_DatePicker_Enabled ) {
            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-close", _options.closeTooltipText, hideDatePickerMode );

            _element_View_FullMonth_TitleBar.appendChild( createElement( "div", "right-divider-line" ) );
        }

        if ( _options.views.fullMonth.showExtraTitleBarButtons && _options.fullScreenModeEnabled ) {
            _element_View_FullMonth_TitleBar_FullScreenButton = buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, fullScreenModeHeaderDoubleClick );

            _element_View_FullMonth_TitleBar.appendChild( createElement( "div", "right-divider-line-full-screen-mode" ) );
        }

        buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-arrow-right-full", _options.nextMonthTooltipText, onNextMonth );

        if ( _options.views.fullMonth.addYearButtons ) {
            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-forward", _options.nextYearTooltipText, moveForwardYear );
        }

        if ( _options.views.fullMonth.showExtraTitleBarButtons && _options.manualEditingEnabled ) {
            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-plus", _options.addEventTooltipText, function() {
                if ( doDatesMatchMonthAndYear( _calendar_CurrentDate, new Date() ) ) {
                    showEventEditingDialog( null );
                } else {
                    showEventEditingDialog( null, new Date( _calendar_CurrentDate.getFullYear(), _calendar_CurrentDate.getMonth(), 1 ) );
                }
            } );
        }

        if ( !_element_Mode_DatePicker_Enabled ) {
            _element_View_FullMonth_TitleBar.appendChild( createElement( "div", "right-divider-line-views" ) );

            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-bar-graph", _options.viewTimelineTooltipText, function() {
                showTimelineView( null, true );
            } );

            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-eye", _options.viewAllEventsTooltipText, function() {
                showAllEventsView( true );
            } );

            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-expand", _options.viewFullYearTooltipText, function() {
                showFullYearView( null, true );
            } );

            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-hamburger-side", _options.viewFullWeekTooltipText, function() {
                showFullWeekView( null, true );
            } );

            buildToolbarButton( _element_View_FullMonth_TitleBar, "ib-hourglass", _options.viewFullDayTooltipText, function() {
                showFullDayView( null, true );
            } );
        }

        var titleContainer = createElement( "div", "title-container" );
        _element_View_FullMonth_TitleBar.appendChild( titleContainer );

        buildFullMonthViewYearDropDownButton( titleContainer );
        buildFullMonthViewYearDropDown( titleContainer );
    }

    function buildFullMonthViewPinUp() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            var wasAddedAlready = _element_View_FullMonth_PinUp !== null;

            if ( _options.views.fullMonth.isPinUpViewEnabled ) {
                if ( !wasAddedAlready ) {
                    _element_View_FullMonth_PinUp = createElement( "div", "pin-up" );
                    _element_View_FullMonth.appendChild( _element_View_FullMonth_PinUp );
                }
    
                buildFullMonthViewPinUpImageCache();
    
                if ( !_initialized_FirstTime ) {
                    buildFullMonthViewPinUpImage();
                }
    
            } else {
                if ( wasAddedAlready ) {
                    _element_View_FullMonth.removeChild( _element_View_FullMonth_PinUp );
                    _element_View_FullMonth_PinUp = null;
                }
            }
        }
    }

    function buildFullMonthViewPinUpImageCache() {
        var imagesLength = _options.views.fullMonth.pinUpViewImageUrls.length;

        if ( imagesLength > 0 ) {
            for ( var imageIndex = 0; imageIndex < imagesLength; imageIndex++ ) {
                var image = new Image();
                image.src = _options.views.fullMonth.pinUpViewImageUrls[ imageIndex ];
            }
        }
    }

    function buildFullMonthViewPinUpImage() {
        if ( !_element_Mode_DatePicker_Enabled && _element_View_FullMonth_PinUp !== null ) {
            if ( _options.views.fullMonth.pinUpViewImageUrls.length > 0 ) {
                _element_View_FullMonth_PinUp.style.backgroundImage = "url('" + _options.views.fullMonth.pinUpViewImageUrls[ _element_View_FullMonth_PinUp_ImageIndex ] + "')";

                _element_View_FullMonth_PinUp_ImageIndex++;
                if ( _element_View_FullMonth_PinUp_ImageIndex === _options.views.fullMonth.pinUpViewImageUrls.length ) {
                    _element_View_FullMonth_PinUp_ImageIndex = 0;
                }
            }

            buildFullMonthViewPinUpImageText();
        }
    }

    function buildFullMonthViewPinUpImageText() {
        if ( !_element_Mode_DatePicker_Enabled && _element_View_FullMonth_PinUp !== null && !fireCustomTrigger( _options.events.onFullMonthPinUpRender, _element_View_FullMonth_PinUp, _calendar_CurrentDate ) ) {
            var currentDate = new Date();

            if ( _element_View_FullMonth_PinUp_CurrentDate === null || !doDatesMatch( _element_View_FullMonth_PinUp_CurrentDate, currentDate ) ) {
                _element_View_FullMonth_PinUp.innerHTML = _string.empty;
                _element_View_FullMonth_PinUp_CurrentDate = currentDate;

                var pinUpText = createElement( "div", "pin-up-text" ),
                    pinUpTextDay = createElement( "div", "day" ),
                    pinUpTextMonth = createElement( "div", "month" ),
                    pinUpTextYear = createElement( "div", "year" );
    
                pinUpText.onclick = function() {
                    showEventEditingDialog( null, currentDate );
                };

                addToolTip( pinUpText, _options.addEventTooltipText );
    
                _element_View_FullMonth_PinUp.appendChild( pinUpText );
                pinUpText.appendChild( pinUpTextDay );
                pinUpText.appendChild( pinUpTextMonth );
                pinUpText.appendChild( pinUpTextYear );
    
                createSpanElement( pinUpTextDay, currentDate.getDate() );
    
                if ( _options.showDayNumberOrdinals ) {
                    var ordinal = getDayOrdinal( currentDate.getDate() );
        
                    if ( isDefined( ordinal ) ) {
                        var sup = createElement( "sup" );
                        sup.innerText = ordinal;
                        pinUpTextDay.appendChild( sup );
                    }
                }
    
                setNodeText( pinUpTextMonth, _options.monthNames[ currentDate.getMonth() ] );
                setNodeText( pinUpTextYear, currentDate.getFullYear() );
            }
        }
    }

    function buildFullMonthViewDayNamesHeader() {
        var wasAddedAlready = _element_View_FullMonth_DayNamesHeader !== null;
        
        if ( _options.views.fullMonth.showDayNamesHeaders ) {
            if ( wasAddedAlready ) {
                _element_View_FullMonth_DayNamesHeader.innerHTML = _string.empty;
            }

            if ( !wasAddedAlready ) {
                _element_View_FullMonth_DayNamesHeader = createElement( "div", "row-cells header-days" );
                _element_View_FullMonth.appendChild( _element_View_FullMonth_DayNamesHeader );
            }

            if ( _element_Mode_DatePicker_Enabled ) {
                _element_View_FullMonth_DayNamesHeader.onclick = cancelBubble;
            }

            buildViewDayNamesHeader( _element_View_FullMonth_DayNamesHeader );
        } else {

            if ( wasAddedAlready ) {
                _element_View_FullMonth.removeChild( _element_View_FullMonth_DayNamesHeader );
                _element_View_FullMonth_DayNamesHeader = null;
            }
        }
    }

    function buildFullMonthViewDayRows( container, dayStartID ) {
        var isForCustomContainer = isDefined( container );

        container = !isForCustomContainer ? _element_View_FullMonth : container;
        dayStartID = isDefined( dayStartID ) ? dayStartID : _element_ID_DayElement;

        if ( !isForCustomContainer && _element_View_FullMonth_Rows.length > 0 ) {
            var rowsLength = _element_View_FullMonth_Rows.length;
            
            for ( var rowsIndex = 0; rowsIndex < rowsLength; rowsIndex++ ) {
                container.removeChild( _element_View_FullMonth_Rows[ rowsIndex ] );
            }

            _element_View_FullMonth_Rows = [];
        }

        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            var rowData = createElement( "div", "row-cells days" );
            container.appendChild( rowData );

            if ( !isForCustomContainer ) {
                _element_View_FullMonth_Rows.push( rowData );
            }

            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                var dayNumber = columnDataIndex;

                if ( _options.startOfWeekDay === _enum_Day.saturday || _options.startOfWeekDay === _enum_Day.sunday ) {
                    dayNumber = _options.startOfWeekDay + columnDataIndex;

                    if ( dayNumber >= 7 ) {
                        dayNumber = ( dayNumber - 7 );
                    }
                }

                if ( _options.visibleDays.indexOf( dayNumber ) > _value.notFound ) {
                    var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                        columnData = createElement( "div", getCellName( _options.views.fullMonth.allowEventScrolling ) );

                    columnData.id = dayStartID + columnDataNumber;
                    rowData.appendChild( columnData );

                    if ( _options.views.fullMonth.allowEventScrolling ) {
                        columnData.className += " scrollY";
                    }

                    if ( _options.views.fullMonth.minimumDayHeight > 0 ) {
                        columnData.style.height = _options.views.fullMonth.minimumDayHeight + "px";
                    }
                }
            }

            if ( _options.reverseOrderDaysOfWeek ) {
                reverseElementsOrder( rowData );
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


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Month View - Years Drop-Down Menu
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullMonthViewYearDropDownButton( titleContainer ) {
        _element_View_FullMonth_TitleBar_YearSelector_DropDown = createElement( "span", "year-dropdown-button" );
        _element_View_FullMonth_TitleBar_YearSelector_DropDown.ondblclick = cancelBubble;
        _element_View_FullMonth_TitleBar_YearSelector_DropDown.onclick = showFullMonthViewYearDropDown;
        titleContainer.appendChild( _element_View_FullMonth_TitleBar_YearSelector_DropDown );

        _element_View_FullMonth_TitleBar_YearSelector_DropDown_Text = createElement( "span" );
        _element_View_FullMonth_TitleBar_YearSelector_DropDown.appendChild( _element_View_FullMonth_TitleBar_YearSelector_DropDown_Text );

        _element_View_FullMonth_TitleBar_YearSelector_DropDown_Arrow = createElement( "span", "ib-arrow-down-full-medium" );
        _element_View_FullMonth_TitleBar_YearSelector_DropDown.appendChild( _element_View_FullMonth_TitleBar_YearSelector_DropDown_Arrow );
    }

    function buildFullMonthViewYearDropDown( container ) {
        var yearDate = new Date( _options.minimumYear, 1, 1 ),
            monthContainer = null;

        _element_View_FullMonth_TitleBar_YearSelector = createElement( "div", _options.views.fullMonth.showMonthButtonsInYearDropDownMenu ? "years-drop-down" : "years-drop-down-no-months" );
        container.appendChild( _element_View_FullMonth_TitleBar_YearSelector );

        if ( _options.views.fullMonth.showMonthButtonsInYearDropDownMenu ) {
            for ( var monthIndex = 0; monthIndex < 12; monthIndex++ ) {
                if ( monthIndex % 3 === 0 ) {
                    monthContainer = createElement( "div", "months" );
    
                    _element_View_FullMonth_TitleBar_YearSelector.appendChild( monthContainer );
                }
    
                buildFullMonthViewYearDropDownMonthNameButton( monthContainer, monthIndex );
            }
        }

        _element_View_FullMonth_TitleBar_YearSelector_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_View_FullMonth_TitleBar_YearSelector.appendChild( _element_View_FullMonth_TitleBar_YearSelector_Contents );

        while ( true ) {
            buildFullMonthViewYearDropDownYearButton( yearDate.getFullYear() );
            moveDateForwardYear( yearDate );

            if ( yearDate.getFullYear() > _options.maximumYear ) {
                break;
            }
        }
    }

    function buildFullMonthViewYearDropDownMonthNameButton( container, monthNumber ) {
        var button = createElement( "div", "month-name" ),
            buttonText = _options.monthNamesAbbreviated[ monthNumber ];

        button.onclick = function( e ) {
            cancelBubble( e );

            if ( _calendar_CurrentDate.getMonth() !== monthNumber ) {
                _calendar_CurrentDate.setMonth( monthNumber );

                fireCustomTrigger( _options.events.onSetDate, _calendar_CurrentDate );
                build( _calendar_CurrentDate );
                hideFullMonthViewYearDropDown();
                buildFullMonthViewPinUpImage();
            }
        };

        setNodeText( button, buttonText );

        container.appendChild( button );

        _element_View_FullMonth_TitleBar_YearSelector_Contents_Months[ monthNumber.toString() ] = button;
    }

    function buildFullMonthViewYearDropDownYearButton( actualYear ) {
        var year = createElement( "div" );
        year.className = "year";
        year.innerText = actualYear.toString();
        year.id = _element_ID_YearSelected + actualYear.toString();
        _element_View_FullMonth_TitleBar_YearSelector_Contents.appendChild( year );

        year.ondblclick = cancelBubble;
        year.onclick = function( e ) {
            cancelBubble( e );

            if ( _calendar_CurrentDate.getFullYear() !== actualYear ) {
                _calendar_CurrentDate.setFullYear( actualYear );

                fireCustomTrigger( _options.events.onSetDate, _calendar_CurrentDate );
                build( _calendar_CurrentDate );
                hideFullMonthViewYearDropDown();
                buildFullMonthViewPinUpImage();
            }
        };
    }

    function setFullMonthViewYearDropDownButtonText() {
        _element_View_FullMonth_TitleBar_YearSelector_DropDown_Text.innerText = getCustomFormattedDateText( _options.views.fullMonth.titleBarDateFormat, _calendar_CurrentDate );
    }

    function updateFullMonthViewYearMonthSelected() {
        for ( var monthNumber in _element_View_FullMonth_TitleBar_YearSelector_Contents_Months ) {
            if ( _element_View_FullMonth_TitleBar_YearSelector_Contents_Months.hasOwnProperty( monthNumber.toString() ) ) {
                _element_View_FullMonth_TitleBar_YearSelector_Contents_Months[ monthNumber.toString() ].className = "month-name";
            }
        }

        var monthNumberSelected = _calendar_CurrentDate.getMonth().toString(),
            today = new Date();

        if ( _calendar_CurrentDate.getFullYear() === today.getFullYear() ) {
            var currentMonthNumber = today.getMonth().toString();

            if ( _element_View_FullMonth_TitleBar_YearSelector_Contents_Months.hasOwnProperty( currentMonthNumber ) ) {
                _element_View_FullMonth_TitleBar_YearSelector_Contents_Months[ currentMonthNumber ].className = "month-name-current-month";
            }
        }

        if ( _element_View_FullMonth_TitleBar_YearSelector_Contents_Months.hasOwnProperty( monthNumberSelected ) ) {
            _element_View_FullMonth_TitleBar_YearSelector_Contents_Months[ monthNumberSelected ].className = "month-name-selected";
        }
    }

    function updateFullMonthViewYearDropDownColors() {
        var yearSelected = _element_View_FullMonth_TitleBar_YearSelector.getElementsByClassName( "year" ),
            yearSelectedLength = yearSelected.length;

        if ( yearSelectedLength >= 1 ) {
            for ( var yearsSelectedIndex = 0; yearsSelectedIndex < yearSelectedLength; yearsSelectedIndex++ ) {
                if ( yearSelected[ yearsSelectedIndex ].className !== "year" ) {
                    yearSelected[ yearsSelectedIndex ].className = "year";
                }
            }
        }

        var year = getElementByID( _element_ID_YearSelected + _calendar_CurrentDate.getFullYear() );
        if ( year !== null ) {
            year.className += " year-selected";
        }
        
        if ( !_element_Mode_DatePicker_Enabled ) {
            var yearsHandledForEvents = [];

            getAllEventsFunc( function( eventDetails ) {
                var fromYear = eventDetails.from.getFullYear();
    
                if ( yearsHandledForEvents.indexOf( fromYear ) === _value.notFound ) {
                    var yearEvents = getElementByID( _element_ID_YearSelected + fromYear );

                    if ( yearEvents !== null && yearEvents.className.indexOf( " year-selected" ) === _value.notFound ) {
                        yearEvents.className += " year-has-events";
                    }
    
                    yearsHandledForEvents.push( fromYear );
                }
            } );
        }

        return year;
    }

    function showFullMonthViewYearDropDown( e ) {
        cancelBubble( e );

        if ( _element_View_FullMonth_TitleBar_YearSelector.style.display !== "block" ) {
            hideAllDropDowns();

            _element_View_FullMonth_TitleBar_YearSelector.style.display = "block";
            _element_View_FullMonth_TitleBar_YearSelector_DropDown_Arrow.className = "ib-arrow-up-full-medium";

            updateFullMonthViewYearMonthSelected();

            var year = updateFullMonthViewYearDropDownColors();
            if ( year !== null ) {
                _element_View_FullMonth_TitleBar_YearSelector_Contents.scrollTop = ( year.offsetTop - _element_View_FullMonth_TitleBar_YearSelector_Contents.offsetTop ) - _options.spacing;
            } else {
                _element_View_FullMonth_TitleBar_YearSelector_Contents.scrollTop = 0;
            }
            
        } else {
            hideFullMonthViewYearDropDown();
        }
    }

    function hideFullMonthViewYearDropDown() {
        var closed = false;

        if ( isFullMonthViewYearDropDownVisible() ) {
            _element_View_FullMonth_TitleBar_YearSelector_DropDown_Arrow.className = "ib-arrow-down-full-medium";
            _element_View_FullMonth_TitleBar_YearSelector.style.display = "none";
            closed = true;
        }

        return closed;
    }

    function isFullMonthViewYearDropDownVisible() {
        return _element_View_FullMonth_TitleBar_YearSelector !== null && _element_View_FullMonth_TitleBar_YearSelector.style.display === "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Month View - Days
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullMonthViewDays( startDay ) {
        buildFullMonthViewPreviousMonthDays( startDay );

        var lastDayFilled = buildFullMonthViewMonthDays( startDay );

        buildFullMonthViewNextMonthDays( lastDayFilled );
        buildFullMonthViewDayEvents();
    }
    
    function buildFullMonthViewPreviousMonthDays( startDay ) {
        if ( startDay > 1 ) {
            var previousMonth = new Date( _calendar_CurrentDate );
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

    function buildFullMonthViewMonthDays( startDay ) {
        var elementDayNumber = 0,
            totalDaysInMonth = getTotalDaysInMonth( _calendar_CurrentDate.getFullYear(), _calendar_CurrentDate.getMonth() );

        for ( var day = 0; day < totalDaysInMonth; day++ ) {
            elementDayNumber = startDay + day;

            buildDay( day + 1, elementDayNumber, _calendar_CurrentDate.getMonth(), _calendar_CurrentDate.getFullYear(), false );
        }

        return elementDayNumber;
    }

    function buildFullMonthViewNextMonthDays( lastDayFilled ) {
        if ( lastDayFilled < 42 ) {
            var actualDay = 1,
                nextMonth = new Date( _calendar_CurrentDate );

            nextMonth.setMonth( nextMonth.getMonth() + 1 );

            for ( var elementDayNumber = lastDayFilled + 1; elementDayNumber < 43; elementDayNumber++ ) {
                var addMonthName = actualDay === 1;

                buildDay( actualDay, elementDayNumber, nextMonth.getMonth(), nextMonth.getFullYear(), true, addMonthName );
                actualDay++;
            }

            var nextDay = getTotalDaysInMonth( nextMonth.getFullYear(), nextMonth.getMonth() );
            nextDay = _parameter_Math.round( nextDay / 2 );

            _element_View_FullMonth_LargestDateAvailable = new Date( nextMonth.getFullYear(), nextMonth.getMonth(), nextDay );

        } else {
            _element_View_FullMonth_LargestDateAvailable = null;
        }
    }

    function buildDay( actualDay, elementDayNumber, month, year, isMuted, includeMonthName ) {
        var dayElement = getElementByID( _element_ID_DayElement + elementDayNumber );
        
        if ( dayElement !== null ) {
            var today = new Date(),
                dayIsToday = actualDay === today.getDate() && year === today.getFullYear() && month === today.getMonth(),
                dayText = createElement( "span" ),
                dayDate = new Date( year, month, actualDay ),
                dayMutedClass = isMuted ? " day-muted" : _string.empty,
                allowDatePickerHoverAndSelect = true;
            
            includeMonthName = isDefined( includeMonthName ) ? includeMonthName : false;

            dayElement.innerHTML = _string.empty;
            dayElement.className = dayElement.className.replace( " cell-today", _string.empty ).replace( " cell-selected", _string.empty ).replace( " cell-no-click", _string.empty );
            
            if ( _element_Mode_DatePicker_Enabled && dayIsToday ) {
                dayElement.className += " cell-today";
            }

            if ( _element_Mode_DatePicker_Enabled && !dayIsToday && _calendar_CurrentDate_ForDatePicker !== null && doDatesMatch( dayDate, _calendar_CurrentDate_ForDatePicker ) ) {
                dayElement.className += " cell-selected";
            }

            if ( _element_Mode_DatePicker_Enabled ) {
                allowDatePickerHoverAndSelect = isDateValidForDatePicker( dayDate );
    
                if ( !allowDatePickerHoverAndSelect ) {
                    dayElement.className += " cell-no-click";
                    dayText.className = "no-click";
                }
                
            } else {
                dayText.className = _string.empty;
            }

            dayText.className += dayMutedClass;
            dayText.className += dayIsToday && !_element_Mode_DatePicker_Enabled ? " today" : _string.empty;
            dayText.innerText = actualDay;

            if ( actualDay === 1 && !_element_Mode_DatePicker_Enabled ) {
                dayText.className += " first-day";
            }

            if ( isWeekendDay( dayDate ) && dayElement.className.indexOf( "weekend-day" ) === _value.notFound ) {
                dayElement.className += " weekend-day";
            }

            if ( isWorkingDay( dayDate ) && dayElement.className.indexOf( "working-day" ) === _value.notFound ) {
                dayElement.className += " working-day";
            }

            dayElement.oncontextmenu = function( e ) {
                showDayContextMenu( e, dayDate );
            };

            if ( _options.showDayNumberOrdinals ) {
                var ordinal = getDayOrdinal( actualDay );

                if ( isDefined( ordinal ) ) {
                    var sup = createElement( "sup" );
                    sup.innerText = ordinal;
                    dayText.appendChild( sup );
                }
            }

            dayElement.appendChild( dayText );
            dayElement.appendChild( createElement( "span", "blank" ) );
            
            var expandDayButton = createElement( "div", "ib-arrow-expand-left-right-icon" );
            dayElement.appendChild( expandDayButton );

            addToolTip( expandDayButton, _options.expandDayTooltipText );

            expandDayButton.onclick = function() {
                showFullDayView( dayDate, true );
            };

            if ( includeMonthName && _options.views.fullMonth.showPreviousNextMonthNames ) {
                createSpanElement( dayElement, _options.monthNames[ month ], "month-name" + dayMutedClass, function() {
                    if ( actualDay === 1 ) {
                        onNextMonth();
                    } else {
                        onPreviousMonth();
                    }
                }, true, true );
            }

            addHolidays( dayDate, dayMutedClass, dayElement );

            if ( _options.manualEditingEnabled ) {
                dayElement.ondblclick = function() {
                    if ( _options.useTemplateWhenAddingNewEvent ) {
                        var newBlankTemplateEvent = buildBlankTemplateEvent( dayDate, dayDate );

                        showEventEditingDialog( newBlankTemplateEvent );
                        showEventEditingDialogTitleSelected();
                    } else {
                        showEventEditingDialog( null, dayDate );
                    }
                };

                makeAreaDroppable( dayElement, year, month, actualDay );
            }

            if ( _element_Mode_DatePicker_Enabled ) {
                if ( allowDatePickerHoverAndSelect ) {
                    dayElement.onclick = function( e ) {
                        setDatePickerDate( e, dayDate );
                    };
                } else {
                    dayElement.onclick = cancelBubble;
                }
            }

            if ( _options.views.fullMonth.useOnlyDotEvents ) {
                dayElement.appendChild( createElement( "div", "dots-separator" ) );
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Month View - Day Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullMonthViewDayEvents() {
        clearFullMonthViewEventsFromDays();
        clearAutoRefreshTimer();

        _calendar_IsBusy = false;
        _element_View_FullMonth_EventsShown = [];
        _events_DatesAvailable = {};

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ];

            buildFullMonthViewDayEventAcrossDays( orderedEvent );

            if ( isEventVisible( orderedEvent ) ) {
                _element_View_FullMonth_EventsShown.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery );
            if ( repeatEvery > _enum_RepeatType.never ) {
                if ( repeatEvery === _enum_RepeatType.everyDay ) {
                    buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardDay, 1 );
                } else if ( repeatEvery === _enum_RepeatType.everyWeek ) {
                    buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardWeek, 1 );
                } else if ( repeatEvery === _enum_RepeatType.every2Weeks ) {
                    buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardWeek, 2 );
                } else if ( repeatEvery === _enum_RepeatType.everyMonth ) {
                    buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardMonth, 1 );
                } else if ( repeatEvery === _enum_RepeatType.everyYear ) {
                    buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardYear, 1 );
                } else if ( repeatEvery === _enum_RepeatType.custom ) {

                    var repeatEveryCustomType = getNumber( orderedEvent.repeatEveryCustomType ),
                        repeatEveryCustomValue = getNumber( orderedEvent.repeatEveryCustomValue );
                    
                    if ( repeatEveryCustomValue > 0 ) {
                        if ( repeatEveryCustomType === _enum_RepeatCustomType.daily ) {
                            buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardDay, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.weekly ) {
                            buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardWeek, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.monthly ) {
                            buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardMonth, repeatEveryCustomValue );
                        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.yearly ) {
                            buildFullMonthViewRepeatedDayEvents( orderedEvent, moveDateForwardYear, repeatEveryCustomValue );
                        }
                    }
                }
            }
        }
        
        updateCalendarsLastBusyState();
        updateFullMonthViewTitleBarButtonsVisibleStates( _element_View_FullMonth_EventsShown.length );
        startAutoRefreshTimer();
    }

    function buildFullMonthViewRepeatedDayEvents( orderedEvent, dateFunc, dateFuncForwardValue ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays ),
            largestDate = new Date( _options.maximumYear, 11, 31 );

        while ( newFromDate < largestDate ) {
            dateFunc( newFromDate, dateFuncForwardValue );

            var repeatEnded = !( !isDefined( orderedEvent.repeatEnds ) || isDateSmallerOrEqualToDate( newFromDate, orderedEvent.repeatEnds ) );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === _value.notFound && !repeatEnded ) {
                updateDateTotalEventsTracked( toStorageFormattedDate( newFromDate ), orderedEvent.id );

                if ( newFromDate < _element_View_FullMonth_LargestDateAvailable ) {
                    var repeatDayElement = getFullMonthViewDayElement( newFromDate );

                    if ( repeatDayElement !== null ) {
                        buildFullMonthViewDayEvent( newFromDate, orderedEvent );
                    }
                }
            }
        }
    }
    
    function buildFullMonthViewDayEventAcrossDays( orderedEvent ) {
        buildFullMonthViewDayEvent( orderedEvent.from, orderedEvent );
    
        if ( orderedEvent.from.getDate() !== orderedEvent.to.getDate() || orderedEvent.from.getMonth() !== orderedEvent.to.getMonth() || orderedEvent.from.getFullYear() !== orderedEvent.to.getFullYear() ) {
            var totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to );
            if ( totalDays > 0 ) {
    
                var nextDayDate = new Date( orderedEvent.from );
                for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                    moveDateForwardDay( nextDayDate );
                    updateDateTotalEventsTracked( toStorageFormattedDate( nextDayDate ), orderedEvent.id );
    
                    var elementNextDay = getFullMonthViewDayElement( nextDayDate );
                    if ( elementNextDay !== null ) {
                        buildFullMonthViewDayEvent( nextDayDate, orderedEvent );
                    }
                }
            }
        }
    }
    
    function buildFullMonthViewDayEvent( dayDate, eventDetails ) {
        var elementDay = getFullMonthViewDayElement( dayDate ),
            seriesIgnoreDates = getArray( eventDetails.seriesIgnoreDates ),
            formattedDayDate = toStorageFormattedDate( dayDate ),
            editEventDate = new Date( dayDate );

        if ( isEventVisible( eventDetails ) && seriesIgnoreDates.indexOf( formattedDayDate ) === _value.notFound  ) {
            updateDateTotalEventsTracked( formattedDayDate, eventDetails.id );

            if ( elementDay !== null ) {
                checkEventForBrowserNotifications( dayDate, eventDetails );
            
                if ( !_element_Mode_DatePicker_Enabled ) {
                    var events = elementDay.getElementsByClassName( "event" );
    
                    if ( events.length < _options.views.fullMonth.maximumEventsPerDayDisplay || _options.views.fullMonth.maximumEventsPerDayDisplay <= 0 || _options.views.fullMonth.useOnlyDotEvents ) {
                        var event = createElement( "div", "event" ),
                            eventRendered = false;
    
                        event.setAttribute( "event-type", getNumber( eventDetails.type ) );
                        event.setAttribute( "event-id", eventDetails.id );
                        event.setAttribute( "event-is-all-day", eventDetails.isAllDay );

                        if ( !_options.views.fullMonth.useOnlyDotEvents ) {
                            if ( !fireCustomTrigger( _options.events.onFullMonthEventRender, event, eventDetails ) ) {
                                var eventTitle = eventDetails.title,
                                    repeatEvery = getNumber( eventDetails.repeatEvery );
            
                                if ( _options.views.fullMonth.showTimesInEvents && !eventDetails.isAllDay && eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                                    eventTitle = getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) + ": " + eventTitle;
                                }

                                if ( repeatEvery > _enum_RepeatType.never ) {
                                    var icon = createElement( "div", "ib-refresh-small ib-no-hover ib-no-active" );
                                    icon.style.borderColor = event.style.color;
                                    event.appendChild( icon );
                                }
            
                                event.innerHTML += stripHTMLTagsFromText( eventTitle );
                                eventRendered = true;
                            }
        
                        } else {
                            event.className += " event-circle";
                            eventRendered = true;
                        }
                        
                        elementDay.appendChild( event );
        
                        makeEventDraggable( event, eventDetails, dayDate, elementDay );
                        setEventClassesForActions( event, eventDetails );
                        setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, dayDate ), _options.views.fullMonth.applyCssToEventsNotInCurrentMonth );
                        setEventCustomTriggers( event, eventDetails, editEventDate );

                        if ( doDatesMatch( eventDetails.from, dayDate ) ) {
                            event.id = _element_ID_Event_Day + eventDetails.id;
                        }
        
                        event.onmousemove = function( e ) {
                            if ( _element_Tooltip_EventDetails !== null && _element_Tooltip_EventDetails.id === eventDetails.id ) {
                                cancelBubble( e );
                            } else {
                                showTooltip( e, eventDetails );
                            }
                        };
        
                        event.oncontextmenu = function( e ) {
                            showEventContextMenu( e, eventDetails, formattedDayDate );
                        };
    
                        event.addEventListener( "click", function( e ) {
                            storeMultiSelectEvent( e, eventDetails );
                        } );
        
                    } else {
                        buildFullMonthViewDayEventPlusText( elementDay, dayDate );
                    }
                }
            }
        }
    }

    function buildFullMonthViewDayEventPlusText( elementDay, dayDate ) {
        var plusXEvents = elementDay.getElementsByClassName( "plus-x-events" ),
            plusXEventsText = plusXEvents.length > 0 ? plusXEvents[ 0 ] : null;

        if ( plusXEventsText === null ) {
            var showFullDayDay = new Date( dayDate );

            plusXEventsText = createElement( "div", "plus-x-events" );
            plusXEventsText.setAttribute( "events", "1" );
            plusXEventsText.ondblclick = cancelBubble;
            elementDay.appendChild( plusXEventsText );

            if ( _options.views.fullMonth.applyCssToEventsNotInCurrentMonth && dayDate.getMonth() !== _calendar_CurrentDate.getMonth() || dayDate.getFullYear() !== _calendar_CurrentDate.getFullYear() ) {
                plusXEventsText.className += " day-muted";
            }

            setNodeText( plusXEventsText, "+1 " + _options.moreText );

            plusXEventsText.onclick = function() {
                showFullDayView( showFullDayDay, true );
            };
        } else {

            var numberOfEvents = parseInt( plusXEventsText.getAttribute( "events" ) ) + 1;
            plusXEventsText.setAttribute( "events", numberOfEvents.toString() );

            setNodeText( plusXEventsText, "+" + numberOfEvents + _string.space + _options.moreText );
        }
    }

    function updateFullMonthViewTitleBarButtonsVisibleStates( orderedEventsLength ) {
        if ( _element_View_FullMonth_TitleBar_SearchButton !== null ) {
            updateToolbarButtonVisibleState( _element_View_FullMonth_TitleBar_SearchButton, orderedEventsLength > 0 );
        }
    }

    function getFullMonthViewDayElement( date ) {
        var firstDay = new Date( _calendar_CurrentDate.getFullYear(), _calendar_CurrentDate.getMonth(), 1 ),
            startDay = -1,
            nextMonth = new Date( _calendar_CurrentDate ),
            previousMonth = new Date( _calendar_CurrentDate ),
            elementDay = null,
            elementDayNumber = 0,
            firstDayNumber = getWeekdayNumber( firstDay );
        
        nextMonth.setMonth( nextMonth.getMonth() + 1 );
        previousMonth.setMonth( previousMonth.getMonth() - 1 );

        if ( date.getMonth() === nextMonth.getMonth() && date.getFullYear() === nextMonth.getFullYear() ) {
            startDay = firstDayNumber + getTotalDaysInMonth( _calendar_CurrentDate.getFullYear(), _calendar_CurrentDate.getMonth() );
            elementDayNumber = getStartOfWeekDayNumber( date.getDate() + startDay );

        } else if ( date.getMonth() === previousMonth.getMonth() && date.getFullYear() === previousMonth.getFullYear() ) {
            elementDayNumber = getStartOfWeekDayNumber( firstDayNumber - getTotalDaysBetweenDates( date, _calendar_CurrentDate ) + 1 );
            
        } else if ( date.getMonth() === _calendar_CurrentDate.getMonth() && date.getFullYear() === _calendar_CurrentDate.getFullYear() ) {
            startDay = firstDayNumber;
            elementDayNumber = getStartOfWeekDayNumber( date.getDate() + startDay );
        }

        if ( elementDayNumber > 0 ) {
            elementDay = getElementByID( _element_ID_DayElement + elementDayNumber );
        }

        return elementDay;
    }

    function clearFullMonthViewEventsFromDays() {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                    columnDataElement = getElementByID( _element_ID_DayElement + columnDataNumber );

                clearFullMonthViewEventsFromDay( columnDataElement );
            }
        }
    }

    function clearFullMonthViewEventsFromDay( elementDay ) {
        if ( elementDay !== null ) {
            clearElementsByClassName( elementDay, "event" );
            clearElementsByClassName( elementDay, "plus-x-events" );
        }
    }

    function updateCalendarsLastBusyState() {
        if ( _calendar_IsBusy_LastState !== _calendar_IsBusy ) {
            _calendar_IsBusy_LastState = _calendar_IsBusy;

            fireCustomTrigger( _options.events.onBusyStateChange, _calendar_IsBusy );
        }
    }

    function updateDateTotalEventsTracked( formattedNewFromDate, eventId ) {
        if ( !_events_DatesAvailable.hasOwnProperty( formattedNewFromDate ) ) {
            _events_DatesAvailable[ formattedNewFromDate ] = [];
        }

        if ( _events_DatesAvailable[ formattedNewFromDate ].indexOf( eventId ) === _value.notFound ) {
            _events_DatesAvailable[ formattedNewFromDate ].push( eventId );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Year View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullYearView() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            var wasAddedAlready = _element_View_FullYear !== null;

            if ( wasAddedAlready ) {
                _element_View_FullYear.innerHTML = _string.empty;
            }

            if ( !wasAddedAlready ) {
                _element_View_FullYear = createElement( "div", "full-year-view" );
                _element_View_FullYear.id = newGuid();
                _element_Calendar.appendChild( _element_View_FullYear );
            }
    
            var titleBar = createElement( "div", "title-bar" );
            _element_View_FullYear.appendChild( titleBar );
    
            if ( _options.fullScreenModeEnabled ) {
                titleBar.ondblclick = fullScreenModeHeaderDoubleClick;
            }
    
            _element_View_FullYear_TitleBar = createElement( "div", "title" );
            titleBar.appendChild( _element_View_FullYear_TitleBar );

            if ( !_element_Mode_DatePicker_Enabled && isSideMenuAvailable() ) {
                buildToolbarButton( titleBar, "ib-hamburger", _options.showMenuTooltipText, showSideMenu );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );
            }
    
            buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousYearTooltipText, onPreviousFullYear );

            if ( _options.views.fullYear.showExtraTitleBarButtons ) {
                buildToolbarButton( titleBar, "ib-pin", _options.currentYearTooltipText, onCurrentFullYear );

                buildToolbarButton( titleBar, "ib-arrow-right-full-line", _options.jumpToDateTitle, function() {
                    showJumpToDateDialog();
                } );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );

                buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                    refreshViews( true, true );
                } );
            }
    
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
                hideView( _element_View_FullYear );
            } );
    
            titleBar.appendChild( createElement( "div", "right-divider-line" ) );

            if ( _options.views.fullYear.showExtraTitleBarButtons && _options.fullScreenModeEnabled ) {
                _element_View_FullYear_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, fullScreenModeHeaderDoubleClick );

                titleBar.appendChild( createElement( "div", "right-divider-line-full-screen-mode" ) );
            }

            buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextYearTooltipText, onNextFullYear );
                
            if ( _options.views.fullYear.showExtraTitleBarButtons && _options.manualEditingEnabled ) {
                buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, function() {
                    showEventEditingDialog( null, new Date( _element_View_FullYear_CurrentYear, 0, 1 ) );
                } );
            }
    
            _element_View_FullYear_Contents = createElement( "div", "contents custom-scroll-bars" );
            _element_View_FullYear.appendChild( _element_View_FullYear_Contents );
        }
    }

    function buildFullYearMonths( fromOpen ) {
        var previousScrollTop = !fromOpen ? _element_View_FullYear_Contents.scrollTop : 0;

        _element_View_FullYear_Contents.innerHTML = _string.empty;

        for ( var monthIndex = 0; monthIndex < 12; monthIndex++ ) {
            buildFullYearViewMonth( monthIndex );
        }

        if ( fromOpen ) {
            if ( _element_View_FullYear_Contents_CurrentMonthTop > 0 ) {
                _element_View_FullYear_Contents.scrollTop = _element_View_FullYear_Contents_CurrentMonthTop - ( _options.spacing * 4 );
            } else {
                _element_View_FullYear_Contents.scrollTop = 0;
            }
            
        } else {
            _element_View_FullYear_Contents.scrollTop = previousScrollTop;
        }
    }

    function buildFullYearViewMonth( monthIndex ) {
        var expandMonthDate = new Date( _element_View_FullYear_CurrentYear, monthIndex, 1 ),
            expandFunction = function() {
                if ( !doDatesMatch( _calendar_CurrentDate, expandMonthDate ) ) {
                    build( expandMonthDate );
                    buildFullMonthViewPinUpImage();
                }

                closeAllViews();
            };

        var yearMonth = createElement( "div", "year-month" );
        _element_View_FullYear_Contents.appendChild( yearMonth );

        var titleBarContainer = createElement( "div", "title-bar-container" );
        yearMonth.appendChild( titleBarContainer );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.ondblclick = expandFunction;
        setNodeText( titleBar, _options.monthNames[ monthIndex ] );
        titleBarContainer.appendChild( titleBar );

        buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.expandMonthTooltipText, expandFunction );

        if ( _options.manualEditingEnabled ) {
            titleBar.appendChild( createElement( "div", "right-divider-line" ) );

            buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, function() {
                showEventEditingDialog( null, expandMonthDate );
            } );
        }

        var daysHeader = createElement( "div", "row-cells header-days" );
        yearMonth.appendChild( daysHeader );

        buildViewDayNamesHeader( daysHeader );
        
        var monthDayId = ( monthIndex + 1 ) + "-month-",
            firstDay = new Date( _element_View_FullYear_CurrentYear, monthIndex, 1 ),
            startDay = getStartOfWeekDayNumber( firstDay.getDay() === 0 ? 7 : firstDay.getDay() );

        buildFullMonthViewDayRows( yearMonth, monthDayId );

        if ( startDay > 1 ) {
            buildFullYearViewMonthPreviousMonthDays( startDay, monthDayId, monthIndex );
        }

        var currentMonthFillDetails = buildFullYearViewMonthDays( startDay, monthDayId, monthIndex ),
            isCurrentMonth = currentMonthFillDetails[ 0 ],
            lastFilledDay = currentMonthFillDetails[ 1 ];

        buildFullYearViewMonthNextMonthDays( lastFilledDay, monthDayId, monthIndex );

        if ( isCurrentMonth ) {
            _element_View_FullYear_Contents_CurrentMonthTop = yearMonth.offsetTop;
        }
    }

    function buildFullYearViewMonthPreviousMonthDays( startDay, monthDayId, monthIndex ) {
        var previousMonth = new Date( _element_View_FullYear_CurrentYear, monthIndex, 1 );
        previousMonth.setMonth( previousMonth.getMonth() - 1 );

        var totalDaysInMonthInPreviousMonth = getTotalDaysInMonth( previousMonth.getFullYear(), previousMonth.getMonth() ),
            previousDayIndex = startDay - 1,
            previousDay = totalDaysInMonthInPreviousMonth;

        while ( previousDayIndex > 0 ) {
            buildFullYearViewMonthPreviousMonthDay( monthDayId, previousDayIndex, previousMonth, previousDay );

            previousDayIndex--;
            previousDay--;
        }
    }

    function buildFullYearViewMonthPreviousMonthDay( monthDayId, previousDayIndex, previousMonth, previousDay ) {
        var previousMonthDayFullDayElement = getElementByID( monthDayId + previousDayIndex );
        if ( previousMonthDayFullDayElement !== null ) {
            var previousMonthDate = new Date( previousMonth.getFullYear(), previousMonth.getMonth(), previousDay );

            previousMonthDayFullDayElement.className += " cell-muted";
            previousMonthDayFullDayElement.onclick = function() {
                showFullDayView( previousMonthDate, true );
            };

            previousMonthDayFullDayElement.oncontextmenu = function( e ) {
                showDayContextMenu( e, previousMonthDate );
            };

            buildFullYearViewMonthDayClasses( previousMonthDayFullDayElement, previousMonthDate );
            buildDayDisplay( previousMonthDayFullDayElement, previousMonthDate );
        }
    }

    function buildFullYearViewMonthDays( startDay, monthDayId, monthIndex ) {
        var elementDayNumber = 0,
            totalDaysInMonth = getTotalDaysInMonth( _element_View_FullYear_CurrentYear, monthIndex ),
            isCurrentMonth = false;

        for ( var day = 0; day < totalDaysInMonth; day++ ) {
            elementDayNumber = startDay + day;
            
            var isDayInCurrentMonth = buildFullYearViewMonthDay( monthDayId, monthIndex, day, elementDayNumber );
            if ( isDayInCurrentMonth ) {
                isCurrentMonth = true;
            }
        }

        return [ isCurrentMonth, elementDayNumber ];
    }

    function buildFullYearViewMonthDay( monthDayId, monthIndex, day, elementDayNumber ) {
        var currentMonthDayFullDayElement = getElementByID( monthDayId + elementDayNumber ),
            isCurrentMonth = false;

        if ( currentMonthDayFullDayElement !== null ) {
            var currentMonthDayDate = new Date( _element_View_FullYear_CurrentYear, monthIndex, day + 1 );

            currentMonthDayFullDayElement.onclick = function() {
                showFullDayView( currentMonthDayDate, true );
            };

            currentMonthDayFullDayElement.oncontextmenu = function( e ) {
                showDayContextMenu( e, currentMonthDayDate );
            };

            isCurrentMonth = buildFullYearViewMonthDayClasses( currentMonthDayFullDayElement, currentMonthDayDate, true );
            buildDayDisplay( currentMonthDayFullDayElement, currentMonthDayDate );
        }

        return isCurrentMonth;
    }

    function buildFullYearViewMonthNextMonthDays( lastDayFilled, monthDayId, monthIndex  ) {
        if ( lastDayFilled < 42 ) {
            var nextMonth = new Date( _element_View_FullYear_CurrentYear, monthIndex, 1 ),
                actualDay = 1;
            
            nextMonth.setMonth( nextMonth.getMonth() + 1 );

            for ( var day = lastDayFilled + 1; day < 43; day++ ) {
                buildFullYearViewMonthNextMonthDay( monthDayId, nextMonth, day, actualDay );
                actualDay++;
            }
        }
    }

    function buildFullYearViewMonthNextMonthDay( monthDayId, nextMonth, day, actualDay ) {
        var nextMonthDayFullDayElement = getElementByID( monthDayId + day );
        if ( nextMonthDayFullDayElement !== null ) {
            var nextMonthDayDate = new Date( nextMonth.getFullYear(), nextMonth.getMonth(), actualDay );

            nextMonthDayFullDayElement.className += " cell-muted";
            nextMonthDayFullDayElement.onclick = function() {
                showFullDayView( nextMonthDayDate, true );
            };

            nextMonthDayFullDayElement.oncontextmenu = function( e ) {
                showDayContextMenu( e, nextMonthDayDate );
            };

            buildFullYearViewMonthDayClasses( nextMonthDayFullDayElement, nextMonthDayDate );
            buildDayDisplay( nextMonthDayFullDayElement, nextMonthDayDate );
        }
    }

    function buildFullYearViewMonthDayClasses( element, date, showTodayCss ) {
        var formattedDate = toStorageFormattedDate( date ),
            isCurrentMonth = false;

        showTodayCss = isDefined( showTodayCss ) ? showTodayCss : false;

        if ( isWeekendDay( date ) ) {
            element.className += " weekend-day";
        }

        if ( isWorkingDay( date ) ) {
            element.className += " working-day";
        }

        if ( _events_DatesAvailable.hasOwnProperty( formattedDate ) ) {
            element.className += " has-events";

            var eventsCount = _events_DatesAvailable[ formattedDate ].length,
                eventsCountElement = createElement( "div", "events-count" );

            eventsCountElement.innerText = eventsCount.toString();
            element.appendChild( eventsCountElement );
        }

        if ( showTodayCss && isDateToday( date ) ) {
            element.className += " cell-today";
            isCurrentMonth = true;
        }

        return isCurrentMonth;
    }

    function showFullYearView( year, fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;
        _element_View_FullYear_CurrentYear = isDefined( year ) ? year : _calendar_CurrentDate.getFullYear();

        _element_View_FullYear_Contents_CurrentMonthTop = 0;
        _element_View_FullYear_TitleBar.innerText = _element_View_FullYear_CurrentYear;

        buildFullYearMonths( fromOpen );
        showView( _element_View_FullYear );
    }

    function updateFullYearView() {
        if ( isViewVisible( _element_View_FullYear ) ) {
            showFullYearView( _element_View_FullYear_CurrentYear );
        }
    }

    function onPreviousFullYear() {
        if ( _element_View_FullYear_CurrentYear > _options.minimumYear ) {
            _element_View_FullYear_CurrentYear -= 1;

            showFullYearView( _element_View_FullYear_CurrentYear, true );
        }
    }

    function onNextFullYear() {
        if ( _element_View_FullYear_CurrentYear < _options.maximumYear ) {
            _element_View_FullYear_CurrentYear += 1;

            showFullYearView( _element_View_FullYear_CurrentYear, true );
        }
    }

    function onCurrentFullYear() {
        var today = new Date();
        _element_View_FullYear_CurrentYear = today.getFullYear();

        showFullYearView( _element_View_FullYear_CurrentYear, true );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * All Events View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildAllEventsView() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            var wasAddedAlready = _element_View_AllEvents !== null;

            if ( wasAddedAlready ) {
                _element_View_AllEvents.innerHTML = _string.empty;
            }

            if ( !wasAddedAlready ) {
                _element_View_AllEvents = createElement( "div", "all-events-view" );
                _element_View_AllEvents.id = newGuid();
                _element_Calendar.appendChild( _element_View_AllEvents );
            }
    
            var titleBar = createElement( "div", "title-bar" );
            _element_View_AllEvents.appendChild( titleBar );
    
            if ( _options.fullScreenModeEnabled ) {
                titleBar.ondblclick = fullScreenModeHeaderDoubleClick;
            }
    
            var title = createElement( "div", "title" );
            setNodeText( title, _options.allEventsText );
            titleBar.appendChild( title );
    
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
                _element_View_AllEvents_EventsShown = [];
    
                hideView( _element_View_AllEvents );
            } );
    
            if ( _options.views.allEvents.showExtraTitleBarButtons ) {
                titleBar.appendChild( createElement( "div", "right-divider-line" ) );

                if ( _options.fullScreenModeEnabled ) {
                    _element_View_AllEvents_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, fullScreenModeHeaderDoubleClick );

                    titleBar.appendChild( createElement( "div", "right-divider-line-full-screen-mode" ) );
                }

                if ( _options.manualEditingEnabled ) {
                    buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, function() {
                        showEventEditingDialog( null );
                    } );
                }
            }

            if ( !_element_Mode_DatePicker_Enabled && isSideMenuAvailable() ) {
                buildToolbarButton( titleBar, "ib-hamburger", _options.showMenuTooltipText, showSideMenu );
            }

            if ( _options.views.allEvents.showExtraTitleBarButtons ) {
                titleBar.appendChild( createElement( "div", "left-divider-line" ) );
                
                buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                    refreshViews( true, true );
                } );

                if ( _options_Search.enabled ) {
                    _element_View_AllEvents_SearchButton = buildToolbarButton( titleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
                }
            }
    
            _element_View_AllEvents_Contents = createElement( "div", "contents custom-scroll-bars" );
            _element_View_AllEvents.appendChild( _element_View_AllEvents_Contents );
        }
    }

    function buildAllEventsViewEvent( eventDetails ) {
        if ( isEventVisible( eventDetails ) ) {
            var container = buildAllEventsViewMonth( eventDetails.from ),
                event = createElement( "div", "event" );

            container.appendChild( event );
    
            event.oncontextmenu = function( e ) {
                showEventContextMenu( e, eventDetails );
            };
    
            makeEventDraggable( event, eventDetails, eventDetails.from, container );
            setEventClassesForActions( event, eventDetails );
            setEventClassesAndColors( event, eventDetails );
            setEventCustomTriggers( event, eventDetails );

            event.id = _element_ID_Event_Month + eventDetails.id;
            event.setAttribute( "event-type", getNumber( eventDetails.type ) );
            event.setAttribute( "event-id", eventDetails.id );
            event.setAttribute( "event-is-all-day", eventDetails.isAllDay );

            if ( !fireCustomTrigger( _options.events.onAllEventsEventRender, event, eventDetails ) ) {
                var title = createElement( "div", "title" ),
                    repeatEvery = getNumber( eventDetails.repeatEvery );
    
                if ( repeatEvery > _enum_RepeatType.never ) {
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
    
                if ( duration.innerHTML === _string.empty ) {
                    event.removeChild( duration );
                }
        
                if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _enum_RepeatType.never ) {
                    var repeats = createElement( "div", "repeats" );
                    setNodeText( repeats, _options.repeatsText.replace( ":", _string.empty ) + _string.space + getRepeatsText( eventDetails.repeatEvery ) );
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

            event.addEventListener( "click", function( e ) {
                storeMultiSelectEvent( e, eventDetails );
            } );

            _element_View_AllEvents_EventsShown.push( eventDetails );
        }
    }

    function buildAllEventsViewMonth( date ) {
        var monthContentsID = "month-" + date.getMonth() + "-" + date.getFullYear(),
            monthContents = getElementByID( monthContentsID );
        
        if ( monthContents === null ) {
            var expandMonthDate = new Date( date ),
                expandFunction = function() {
                    _element_View_AllEvents_EventsShown = [];

                    hideView( _element_View_AllEvents );
                    build( expandMonthDate );
                    buildFullMonthViewPinUpImage();
                };

            var yearHeader = buildAllEventsViewMonthHeader( date );
            if ( yearHeader !== null ) {
                _element_View_AllEvents_Contents.appendChild( yearHeader );
            }

            var month = createElement( "div", "month" );
            _element_View_AllEvents_Contents.appendChild( month );

            var header = createElement( "div", "header" );
            setNodeText( header, _options.monthNames[ date.getMonth() ] + _string.space + date.getFullYear() );
            header.ondblclick = expandFunction;
            month.appendChild( header );

            buildToolbarButton( header, "ib-arrow-expand-left-right", _options.expandMonthTooltipText, expandFunction );

            header.appendChild( createElement( "div", "right-divider-line" ) );

            if ( _options.manualEditingEnabled ) {
                var addNewEventDate = new Date( date.getFullYear(), date.getMonth(), 1 );

                buildToolbarButton( header, "ib-plus", _options.addEventTooltipText, function() {
                    if ( _options.useTemplateWhenAddingNewEvent ) {
                        var newBlankTemplateEvent = buildBlankTemplateEvent( addNewEventDate, addNewEventDate );

                        showEventEditingDialog( newBlankTemplateEvent );
                        showEventEditingDialogTitleSelected();
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

            var minimizeRestoreFunction = function() {
                minimizeRestoreAllEventsViewMonth( minimizeButton, monthContents, monthContentsID );
            };

            var minimizeButton = buildToolbarButton( header, "ib-minus", _options.minimizedTooltipText, minimizeRestoreFunction );

            _element_View_AllEvents_MinimizeRestoreFunctions.push( minimizeRestoreFunction );

            monthContents = createElement( "div", "events" );
            monthContents.id = monthContentsID;
            month.appendChild( monthContents );

            if ( _options_Configuration.visibleAllEventsMonths.hasOwnProperty( monthContentsID ) && !_options_Configuration.visibleAllEventsMonths[ monthContentsID ] ) {
                monthContents.style.display = "none";
                minimizeButton.className = "ib-square-hollow";
                addToolTip( minimizeButton, _options.restoreTooltipText );
            }

            makeAreaDroppable( monthContents, date.getFullYear(), date.getMonth(), date.getDate() );
        }

        return monthContents;
    }

    function buildAllEventsViewMonthHeader( date ) {
        var yearHeader = null;

        if ( _element_View_AllEvents_YearHeadersAdded.indexOf( date.getFullYear() ) === _value.notFound ) {
            _element_View_AllEvents_YearHeadersAdded.push( date.getFullYear() );

            yearHeader = createElement( "div", "year-header" );

            var text = createElement( "span", "header-text" );
            setNodeText( text, date.getFullYear() + ":" );
            yearHeader.appendChild( text );

            text.onclick = function() {
                showFullYearView( date.getFullYear(), true );
            };

            yearHeader.appendChild( createElement( "div", "line" ) );
        }

        return yearHeader;
    }

    function showAllEventsView( fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        showView( _element_View_AllEvents );

        _element_View_AllEvents_Contents.innerHTML = _string.empty;
        _element_View_AllEvents_EventsShown = [];
        _element_View_AllEvents_MinimizeRestoreFunctions = [];
        _element_View_AllEvents_YearHeadersAdded = [];

        if ( fromOpen ) {
            _element_View_AllEvents_Contents.scrollTop = 0;
        }

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            buildAllEventsViewEvent( orderedEvents[ orderedEventIndex ] );
        }

        updateToolbarButtonVisibleState( _element_View_AllEvents_SearchButton, _element_View_AllEvents_EventsShown.length > 0 );

        if ( _element_View_AllEvents_EventsShown.length === 0 ) {
            buildNoEventsAvailableText( _element_View_AllEvents_Contents, function() {
                showEventEditingDialog( null );
            } );
        }
    }

    function updateAllEventsView() {
        if ( isViewVisible( _element_View_AllEvents ) ) {
            showAllEventsView();
        }
    }

    function minimizeRestoreAllEventsViewMonth( minimizeButton, monthContents, monthContentsID ) {
        if ( monthContents.style.display !== "none" ) {
            monthContents.style.display = "none";
            minimizeButton.className = "ib-square-hollow";
            _options_Configuration.visibleAllEventsMonths[ monthContentsID ] = false;
            addToolTip( minimizeButton, _options.restoreTooltipText );
        
        } else {
            monthContents.style.display = "block";
            minimizeButton.className = "ib-minus";
            _options_Configuration.visibleAllEventsMonths[ monthContentsID ] = true;
            addToolTip( minimizeButton, _options.minimizedTooltipText );
        }
    }

    function callMinimizeRestoreFunctionsForAllEventView() {
        if ( isViewVisible( _element_View_AllEvents ) ) {
            var functionsLength = _element_View_AllEvents_MinimizeRestoreFunctions.length;

            for ( var functionIndex = 0; functionIndex < functionsLength; functionIndex++ ) {
                _element_View_AllEvents_MinimizeRestoreFunctions[ functionIndex ]();
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Timeline View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildTimelineView() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            var wasAddedAlready = _element_View_Timeline !== null;

            if ( wasAddedAlready ) {
                _element_View_Timeline.innerHTML = _string.empty;
            }

            if ( _element_View_Timeline_Selected_Axis === null ) {
                _element_View_Timeline_Selected_Axis = _options.views.timeline.defaultAxis;
            }

            if ( !wasAddedAlready ) {
                _element_View_Timeline = createElement( "div", "timeline-view" );
                _element_View_Timeline.id = newGuid();
                _element_Calendar.appendChild( _element_View_Timeline );
            }
    
            var titleBar = createElement( "div", "title-bar" );
            _element_View_Timeline.appendChild( titleBar );
    
            if ( _options.fullScreenModeEnabled ) {
                titleBar.ondblclick = fullScreenModeHeaderDoubleClick;
            }
    
            _element_View_Timeline_TitleBar = createElement( "div", "title" );
            titleBar.appendChild( _element_View_Timeline_TitleBar );
    
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, function() {
                _element_View_Timeline_EventsShown = [];
    
                hideView( _element_View_Timeline );
            } );

            titleBar.appendChild( createElement( "div", "right-divider-line" ) );
    
            if ( _options.views.timeline.showExtraTitleBarButtons ) {
                if ( _options.fullScreenModeEnabled ) {
                    _element_View_Timeline_FullScreenButton = buildToolbarButton( titleBar, "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText, fullScreenModeHeaderDoubleClick );

                    titleBar.appendChild( createElement( "div", "right-divider-line-full-screen-mode" ) );
                }
            }

            buildToolbarButton( titleBar, "ib-arrow-right-full", _options.nextYearTooltipText, onNextTimelineDay );

            if ( _options.views.timeline.showExtraTitleBarButtons && _options.manualEditingEnabled ) {
                buildToolbarButton( titleBar, "ib-plus", _options.addEventTooltipText, function() {
                    showEventEditingDialog( null, new Date( _element_View_Timeline_DateSelected ) );
                } );
            }

            titleBar.appendChild( createElement( "div", "right-divider-line-views" ) );

            buildToolbarButton( titleBar, "ib-hourglass", _options.viewFullDayTooltipText, function() {
                showFullDayView( _element_View_Timeline_DateSelected, true );
            } );

            if ( !_element_Mode_DatePicker_Enabled && isSideMenuAvailable() ) {
                buildToolbarButton( titleBar, "ib-hamburger", _options.showMenuTooltipText, showSideMenu );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );
            }
    
            buildToolbarButton( titleBar, "ib-arrow-left-full", _options.previousYearTooltipText, onPreviousTimelineDay );

            if ( _options.views.timeline.showExtraTitleBarButtons ) {
                _element_View_Timeline_TodayButton = buildToolbarButton( titleBar, "ib-pin", _options.currentYearTooltipText, onCurrentTimelineDay );

                buildToolbarButton( titleBar, "ib-arrow-right-full-line", _options.jumpToDateTitle, function() {
                    showJumpToDateDialog();
                } );

                titleBar.appendChild( createElement( "div", "left-divider-line" ) );

                buildToolbarButton( titleBar, "ib-refresh", _options.refreshTooltipText, function() {
                    refreshViews( true, true );
                } );

                if ( _options_Search.enabled ) {
                    _element_View_Timeline_SearchButton = buildToolbarButton( titleBar, "ib-search", _options.searchTooltipText, showSearchDialog );
                }
            }
    
            _element_View_Timeline_Contents = createElement( "div", "contents custom-scroll-bars" );
            _element_View_Timeline_Contents.addEventListener( "scroll", hideTooltip );
            _element_View_Timeline.appendChild( _element_View_Timeline_Contents );
        }
    }

    function buildTimelineViewContentLayout() {
        _element_View_Timeline_Contents_Header = createElement( "div", "timeline-header" );
        _element_View_Timeline_Contents.appendChild( _element_View_Timeline_Contents_Header );

        var groupHeader = createElement( "div", "timeline-header-item" );
        groupHeader.innerHTML = getTimelineViewAxisSelectedText();
        _element_View_Timeline_Contents_Header.appendChild( groupHeader );

        buildToolbarButton( groupHeader, "ib-arrow-left-full", _options.previousPropertyTooltipText, onPreviousAxisTimelineView );
        buildToolbarButton( groupHeader, "ib-arrow-right-full", _options.nextPropertyTooltipText, onNextAxisTimelineView );

        var loopDateMinutesIncrease = _options.views.timeline.minutesBetweenSections,
            loopDateToday = new Date(),
            loopDate = new Date(),
            offsetLeft = 0,
            actualWidth = 0;
        
        loopDate.setHours( 0, 0, 0, 0 );
        
        if ( 60 % loopDateMinutesIncrease !== 0 ) {
            loopDateMinutesIncrease = 30;
        }
        
        while ( doDatesMatch( loopDate, loopDateToday ) ) {
            var headerItem1 = createElement( "div", "timeline-header-item" );
            headerItem1.innerText = getTimeForDisplay( new Date( loopDate ) );
            _element_View_Timeline_Contents_Header.appendChild( headerItem1 );
            
            loopDate = addMinutesToDate( loopDate, loopDateMinutesIncrease );
            
            var headerItem2 = createElement( "div", "timeline-header-item" );
            headerItem2.innerText = getTimeForDisplay( new Date( loopDate ) );
            _element_View_Timeline_Contents_Header.appendChild( headerItem2 );
            
            loopDate = addMinutesToDate( loopDate, loopDateMinutesIncrease );

            var newColumn1 = createElement( "div", "timeline-column" );
            newColumn1.style.left = offsetLeft + "px";
            _element_View_Timeline_Contents.appendChild( newColumn1 );

            if ( actualWidth === 0 ) {
                var borderWidth = getStyleValueByName( newColumn1, "border-right-width" );
                
                actualWidth = newColumn1.clientWidth + borderWidth;
            }

            offsetLeft += actualWidth;

            var newColumn2 = createElement( "div", "timeline-column" );
            newColumn2.style.left = offsetLeft + "px";
            _element_View_Timeline_Contents.appendChild( newColumn2 );

            offsetLeft += actualWidth;

            _element_View_Timeline_Contents_Columns.push( newColumn1 );
            _element_View_Timeline_Contents_Columns.push( newColumn2 );
        }
    }

    function buildTimelineViewEvents( orderedEvents ) {
        var orderedEventsLength = orderedEvents.length,
            rowCount = 0;

        if ( orderedEventsLength > 0 ) {
            for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
                var eventDetails = orderedEvents[ orderedEventIndex ],
                    axisName = getString( eventDetails[ _element_View_Timeline_Selected_Axis ], _options.noneText ),
                    storageAxisName = axisName.toLowerCase(),
                    timelineRowItems = null;

                if ( eventDetails.isAllDay ) {
                    axisName = _options.allDayText + ": " + axisName;
                    storageAxisName = storageAxisName + "-" + eventDetails.id;
                }
        
                if ( !_element_View_Timeline_Contents_Groups_Rows_Cache.hasOwnProperty( storageAxisName ) ) {
                    var timelineRow = createElement( "div", "timeline-row" );
                    _element_View_Timeline_Contents.appendChild( timelineRow );
            
                    var axisNameRowName = createElement( "div", "timeline-row-item" + ( rowCount % 2 !== 0 ? " timeline-row-item-odd" : _string.empty ) );
                    setNodeText( axisNameRowName, axisName );
                    timelineRow.appendChild( axisNameRowName );

                    timelineRowItems = createElement( "div", "timeline-row-items" );
                    timelineRow.appendChild( timelineRowItems );

                    var loopDateMinutesIncrease = _options.views.timeline.minutesBetweenSections,
                        loopDateToday = new Date(),
                        loopDate = new Date();
                        
                    loopDate.setHours( 0, 0, 0, 0 );
                    
                    if ( 60 % loopDateMinutesIncrease !== 0 ) {
                        loopDateMinutesIncrease = 30;
                    }
                    
                    while ( doDatesMatch( loopDate, loopDateToday ) ) {
                        var spacing1 = createElement( "div", "timeline-row-item-spacing" );
                        timelineRowItems.appendChild( spacing1 );
                        
                        loopDate = addMinutesToDate( loopDate, loopDateMinutesIncrease );
                        
                        var spacing2 = createElement( "div", "timeline-row-item-spacing" );
                        timelineRowItems.appendChild( spacing2 );
                        
                        loopDate = addMinutesToDate( loopDate, loopDateMinutesIncrease );
                    }
        
                    _element_View_Timeline_Contents_Groups_Rows_Cache[ storageAxisName ] = timelineRowItems;
                    rowCount++;
        
                } else {
                    timelineRowItems = _element_View_Timeline_Contents_Groups_Rows_Cache[ storageAxisName ];
                }

                buildTimelineViewEvent( timelineRowItems, eventDetails );

                _element_View_Timeline_EventsShown.push( eventDetails );
            }
        }
    }

    function buildTimelineViewColumnHeights() {
        var columnsLength = _element_View_Timeline_Contents_Columns.length,
            columnHeight = 0;
            
        for ( var columnIndex = 0; columnIndex < columnsLength; columnIndex++ ) {
            var column = _element_View_Timeline_Contents_Columns[ columnIndex ];

            if ( columnHeight === 0 ) {
                columnHeight = _element_View_Timeline_Contents.scrollHeight  - column.offsetTop;
            }

            column.style.height = columnHeight + "px";
        }
    }

    function buildTimelineViewEvent( timelineRowItems, eventDetails ) {
        var event = createElement( "div", "event" ),
            formattedDate = toStorageFormattedDate( _element_View_Timeline_DateSelected ),
            editEventDate = new Date( _element_View_Timeline_DateSelected );
        
        event.id = _element_ID_Event_Timeline_Day + eventDetails.id;
        event.setAttribute( "event-type", getNumber( eventDetails.type ) );
        event.setAttribute( "event-id", eventDetails.id );
        event.setAttribute( "event-is-all-day", eventDetails.isAllDay );
        timelineRowItems.appendChild( event );

        if ( !fireCustomTrigger( _options.events.onTimelineEventRender, event, eventDetails ) ) {
            var repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( repeatEvery > _enum_RepeatType.never ) {
                var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                icon.style.borderColor = event.style.color;
                event.appendChild( icon );
            }
    
            event.innerHTML += stripHTMLTagsFromText( eventDetails.title );
        }
    
        event.oncontextmenu = function( e ) {
            showEventContextMenu( e, eventDetails, formattedDate );
        };

        event.addEventListener( "click", function( e ) {
            storeMultiSelectEvent( e, eventDetails );
        } );

        event.onmousemove = function( e ) {
            if ( _element_Tooltip_EventDetails !== null && _element_Tooltip_EventDetails.id === eventDetails.id ) {
                cancelBubble( e );
            } else {
                showTooltip( e, eventDetails );
            }
        };

        setEventCustomTriggers( event, eventDetails, editEventDate );
        setEventClassesForActions( event, eventDetails );
        setEventClassesAndColors( event, eventDetails, getToTimeWithPassedDate( eventDetails, _element_View_Timeline_DateSelected ) );
        
        var scrollLeft = setEventPositionAndGetScrollLeft( timelineRowItems, _element_View_Timeline_DateSelected, event, eventDetails );

        if ( _element_View_Timeline_Contents_SmallestEventLeft === null ) {
            _element_View_Timeline_Contents_SmallestEventLeft = scrollLeft;
        } else {
            _element_View_Timeline_Contents_SmallestEventLeft = _parameter_Math.min( _element_View_Timeline_Contents_SmallestEventLeft, scrollLeft );
        }

        if ( _element_View_Timeline_Contents_SmallestEventTop === null ) {
            _element_View_Timeline_Contents_SmallestEventTop = timelineRowItems.offsetTop;
        } else {
            _element_View_Timeline_Contents_SmallestEventTop = _parameter_Math.min( _element_View_Timeline_Contents_SmallestEventTop, timelineRowItems.offsetTop );
        }
    }

    function buildTimelineViewTitle() {
        if ( !fireCustomTrigger( _options.events.onTimelineTitleRender, _element_View_FullDay_DateSelected ) ) {
            buildDateTimeDisplay( _element_View_Timeline_TitleBar, _element_View_Timeline_DateSelected, false, true, true );
        }
    }

    function showTimelineView( date, fromOpen ) {
        date = isDefined( date ) ? new Date( date ) : new Date();
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        var currentDate = new Date(),
            weekDayNumber = getWeekdayNumber( currentDate ),
            isCurrentDateVisible = _options.visibleDays.indexOf( weekDayNumber ) > _value.notFound,
            orderedEvents = [],
            scrollLeft = _element_View_Timeline_Contents.scrollLeft,
            scrollTop = _element_View_Timeline_Contents.scrollTop;
        
        _element_View_Timeline_TitleBar.innerHTML = _string.empty;
        _element_View_Timeline_Contents.innerHTML = _string.empty;
        _element_View_Timeline_EventsShown = [];
        _element_View_Timeline_DateSelected = date;
        _element_View_Timeline_Contents_Groups_Rows_Cache = {};
        _element_View_Timeline_Contents_SmallestEventLeft = null;
        _element_View_Timeline_Contents_SmallestEventTop = null;
        _element_View_Timeline_Contents_Columns = [];

        if ( doDatesMatch( date, currentDate ) && !isCurrentDateVisible ) {
            moveTimelineDateToNextDay();
        }

        getFullDayViewOrderedEvents( _element_View_Timeline_DateSelected, orderedEvents );
        updateToolbarButtonVisibleState( _element_View_Timeline_TodayButton, isCurrentDateVisible );
        buildTimelineViewContentLayout();
        showView( _element_View_Timeline );
        buildTimelineViewEvents( getOrderedEvents( orderedEvents ) );
        buildTimelineViewColumnHeights();
        buildTimelineViewTitle();
        
        if ( fromOpen ) {
            _element_View_Timeline_Contents.scrollLeft = _element_View_Timeline_Contents_SmallestEventLeft;
            _element_View_Timeline_Contents.scrollTop = _element_View_Timeline_Contents_SmallestEventTop;
        } else {
            _element_View_Timeline_Contents.scrollLeft = scrollLeft;
            _element_View_Timeline_Contents.scrollTop = scrollTop;
        }

        updateToolbarButtonVisibleState( _element_View_Timeline_SearchButton, _element_View_Timeline_EventsShown.length > 0 );
    }

    function updateTimelineView() {
        if ( isViewVisible( _element_View_Timeline ) ) {
            showTimelineView( _element_View_Timeline_DateSelected );
        }
    }

    function onPreviousTimelineDay() {
        moveDateBackOneDay( _element_View_Timeline_DateSelected );

        if ( _options.visibleDays.length < 7 ) {
            var weekDayNumber = getWeekdayNumber( _element_View_Timeline_DateSelected );

            while ( _options.visibleDays.indexOf( weekDayNumber ) === _value.notFound ) {
                moveDateBackOneDay( _element_View_Timeline_DateSelected );
    
                weekDayNumber = getWeekdayNumber( _element_View_Timeline_DateSelected );
            }
        }

        showTimelineView( _element_View_Timeline_DateSelected, true );
    }

    function onNextTimelineDay() {
        moveTimelineDateToNextDay( true );
    }

    function onCurrentTimelineDay() {
        _element_View_Timeline_DateSelected = new Date();
            
        showTimelineView( _element_View_Timeline_DateSelected, true );
    }

    function onPreviousAxisTimelineView() {
        var indexOf = _element_View_Timeline_Selected_Axis_Supported.indexOf( _element_View_Timeline_Selected_Axis );
        indexOf--;

        if ( indexOf < 0 ) {
            indexOf = _element_View_Timeline_Selected_Axis_Supported.length - 1;
        }

        _element_View_Timeline_Selected_Axis = _element_View_Timeline_Selected_Axis_Supported[ indexOf ];

        showTimelineView( _element_View_Timeline_DateSelected );
    }

    function onNextAxisTimelineView() {
        var indexOf = _element_View_Timeline_Selected_Axis_Supported.indexOf( _element_View_Timeline_Selected_Axis );
        indexOf++;

        if ( indexOf > ( _element_View_Timeline_Selected_Axis_Supported.length - 1 ) ) {
            indexOf = 0;
        }

        _element_View_Timeline_Selected_Axis = _element_View_Timeline_Selected_Axis_Supported[ indexOf ];

        showTimelineView( _element_View_Timeline_DateSelected );
    }

    function moveTimelineDateToNextDay( showView ) {
        showView = isDefined( showView ) ? showView : false;

        moveDateForwardDay( _element_View_Timeline_DateSelected );

        if ( _options.visibleDays.length < 7 ) {
            var weekDayNumber = getWeekdayNumber( _element_View_Timeline_DateSelected );

            while ( _options.visibleDays.indexOf( weekDayNumber ) === _value.notFound ) {
                moveDateForwardDay( _element_View_Timeline_DateSelected );
    
                weekDayNumber = getWeekdayNumber( _element_View_Timeline_DateSelected );
            }
        }

        if ( showView ) {
            showTimelineView( _element_View_Timeline_DateSelected, true );
        }
    }

    function getTimelineViewAxisSelectedText() {
        var result = _string.empty;

        if ( _element_View_Timeline_Selected_Axis === "group" ) {
            result = _options.groupText;
        } else if ( _element_View_Timeline_Selected_Axis === "organizerName" ) {
            result = _options.organizerNameText;
        } else if ( _element_View_Timeline_Selected_Axis === "location" ) {
            result = _options.locationText;
        } else if ( _element_View_Timeline_Selected_Axis === "organizerEmailAddress" ) {
            result = _options.organizerEmailAddressText;
        } else if ( _element_View_Timeline_Selected_Axis === "url" ) {
            result = _options.urlText;
        } else if ( _element_View_Timeline_Selected_Axis === "title" ) {
            result = _options.titleText;
        } else if ( _element_View_Timeline_Selected_Axis === "description" ) {
            result = _options.descriptionText;
        }

        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Context Menus
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildContextMenus() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            buildDayContextMenu();
            buildEventContextMenu();
            buildFullDayViewContextMenu();
            buildDayHeaderContextMenu();
        }
    }

    function buildContextMenuItemWithIcon( container, iconCSS, text, onClickEvent, isBold ) {
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

    function buildContextMenuSeparator( container ) {
        var separator = createElement( "div", "separator" );

        container.appendChild( separator );

        return separator;
    }

    function hideContextMenu( element ) {
        var closed = false;

        if ( isContextMenuVisible( element ) ) {
            element.style.display = "none";
            closed = true;
        }

        return closed;
    }

    function isContextMenuVisible( element ) {
        return element !== null && element.style.display === "block";
    }

    function areContextMenusVisible() {
        return isContextMenuVisible( _element_ContextMenu_Day ) || isContextMenuVisible( _element_ContextMenu_Event ) || isContextMenuVisible( _element_ContextMenu_FullDay ) || isContextMenuVisible( _element_ContextMenu_HeaderDay ) || isContextMenuVisible( _element_Dialog_Search_History_DropDown );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Context Menu - Month Day
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDayContextMenu() {
        if ( _element_ContextMenu_Day !== null ) {
            removeNode( _parameter_Document.body, _element_ContextMenu_Day );

            _element_ContextMenu_Day_Paste_Separator = null;
            _element_ContextMenu_Day_Paste = null;
        }

        _element_ContextMenu_Day = createElement( "div", "calendar-context-menu" );
        _elements_InDocumentBody.push( _element_ContextMenu_Day );
        _parameter_Document.body.appendChild( _element_ContextMenu_Day );

        if ( _options.manualEditingEnabled ) {
            buildContextMenuItemWithIcon( _element_ContextMenu_Day, "ib-plus-icon", _options.addEventTitle + "...", function() {
                if ( _options.useTemplateWhenAddingNewEvent ) {
                    var newBlankTemplateEvent = buildBlankTemplateEvent( _element_ContextMenu_Day_DateSelected, _element_ContextMenu_Day_DateSelected );

                    showEventEditingDialog( newBlankTemplateEvent );
                    showEventEditingDialogTitleSelected();
                } else {
                    showEventEditingDialog( null, _element_ContextMenu_Day_DateSelected );
                }
            }, true );
    
            buildContextMenuSeparator( _element_ContextMenu_Day );
        }

        buildContextMenuItemWithIcon( _element_ContextMenu_Day, "ib-arrow-expand-left-right-icon", _options.expandDayTooltipText, function() {
            showFullDayView( _element_ContextMenu_Day_DateSelected, true );
        } );

        buildContextMenuSeparator( _element_ContextMenu_Day );

        buildContextMenuItemWithIcon( _element_ContextMenu_Day, "ib-hamburger-side-icon", _options.viewFullWeekText, function() {
            showFullWeekView( _element_ContextMenu_Day_DateSelected, true );
        } );

        if ( _options.manualEditingEnabled ) {
            _element_ContextMenu_Day_Paste_Separator = buildContextMenuSeparator( _element_ContextMenu_Day );
            
            _element_ContextMenu_Day_Paste = buildContextMenuItemWithIcon( _element_ContextMenu_Day, "ib-circle-icon", _options.pasteText, function() {
                pasteEventsToDate( _element_ContextMenu_Day_DateSelected, _events_Copied_Cut );
            } );
        }
    }

    function showDayContextMenu( e, date ) {
        if ( !_element_Mode_DatePicker_Enabled && _element_ContextMenu_Day !== null ) {
            if ( !isControlKey( e ) ) {
                clearSelectedEvents();
            }

            _element_ContextMenu_Day_DateSelected = new Date( date );

            if ( _element_ContextMenu_Day_Paste !== null ) {
                var display = _events_Copied.length > 0 ? "block" : "none";
    
                _element_ContextMenu_Day_Paste_Separator.style.display = display;
                _element_ContextMenu_Day_Paste.style.display = display;
            }
    
            hideAllDropDowns();
            cancelBubble( e );
            showElementAtMousePosition( e, _element_ContextMenu_Day );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Context Menu - Event
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventContextMenu() {
        if ( _element_ContextMenu_Event !== null ) {
            removeNode( _parameter_Document.body, _element_ContextMenu_Event );
            _element_ContextMenu_Event = null;
            _element_ContextMenu_Event_OpenUrlSeparator = null;
            _element_ContextMenu_Event_DuplicateSeparator = null;
            _element_ContextMenu_Event_Duplicate = null;
            _element_ContextMenu_Event_CutSeparator = null;
            _element_ContextMenu_Event_Cut = null;
            _element_ContextMenu_Event_CopySeparator = null;
            _element_ContextMenu_Event_Copy = null;
            _element_ContextMenu_Event_EditEvent = null;
            _element_ContextMenu_Event_RemoveSeparator = null;
            _element_ContextMenu_Event_Remove = null;
            _element_ContextMenu_Event_ExportEventsSeparator = null;
            _element_ContextMenu_Event_ExportEvents = null;
        }

        _element_ContextMenu_Event = createElement( "div", "calendar-context-menu" );
        _elements_InDocumentBody.push( _element_ContextMenu_Event );
        _parameter_Document.body.appendChild( _element_ContextMenu_Event );

        if ( _options.manualEditingEnabled ) {
            _element_ContextMenu_Event_EditEvent = buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-edit-icon", _options.editEventTitle + "...", function() {
                showEventEditingDialog( _element_ContextMenu_Event_EventDetails, null, null, _element_ContextMenu_Event_DateSelected );
            }, true );

            _element_ContextMenu_Event_CutSeparator = buildContextMenuSeparator( _element_ContextMenu_Event );

            _element_ContextMenu_Event_Cut = buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-pipe-icon", _options.cutText, function() {
                setCopiedEventsClasses();

                _events_Copied_Cut = true;

                setCopiedEvents( _element_ContextMenu_Event_EventDetails );
                setCopiedEventsClasses( false );
            } );

            _element_ContextMenu_Event_CopySeparator = buildContextMenuSeparator( _element_ContextMenu_Event );
            
            _element_ContextMenu_Event_Copy = buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-circle-hollow-icon", _options.copyText, function() {
                setCopiedEventsClasses();

                _events_Copied_Cut = false;

                setCopiedEvents( _element_ContextMenu_Event_EventDetails );
                setCopiedEventsClasses( false );
            } );

            _element_ContextMenu_Event_DuplicateSeparator = buildContextMenuSeparator( _element_ContextMenu_Event );

            _element_ContextMenu_Event_Duplicate = buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-equals-icon", _options.duplicateText + "...", function() {
                showEventEditingDialog( _element_ContextMenu_Event_EventDetails );
                setEventEditingDialogInDuplicateMode();
            } );

            _element_ContextMenu_Event_RemoveSeparator = buildContextMenuSeparator( _element_ContextMenu_Event );

            _element_ContextMenu_Event_Remove = buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-close-icon", _options.removeEventText, function() {
                addNode( _parameter_Document.body, _element_Calendar_DisabledBackground );
    
                var onNoEvent = function() {
                    removeNode( _parameter_Document.body, _element_Calendar_DisabledBackground );
                };
    
                var onYesEvent = function() {
                    onNoEvent();
    
                    if ( isDefined( _element_ContextMenu_Event_EventDetails.id ) ) {
                        if ( !_element_Dialog_Message_RemoveAllEvents.checked && _element_ContextMenu_Event_FormattedDateSelected !== null ) {

                            if ( isDefinedArray( _element_ContextMenu_Event_EventDetails.seriesIgnoreDates ) ) {
                                _element_ContextMenu_Event_EventDetails.seriesIgnoreDates.push( _element_ContextMenu_Event_FormattedDateSelected );
                            } else {
                                _element_ContextMenu_Event_EventDetails.seriesIgnoreDates = [ _element_ContextMenu_Event_FormattedDateSelected ];
                            }

                            buildFullMonthViewDayEvents();

                        } else {
                            _that.removeEvent( _element_ContextMenu_Event_EventDetails.id, true );

                            showNotificationPopUp( _options.eventRemovedText.replace( "{0}", _element_ContextMenu_Event_EventDetails.title ) );
                        }
                        
                        refreshOpenedViews();
                    }
                };

                var repeatEvery = getNumber( _element_ContextMenu_Event_EventDetails.repeatEvery ),
                    showCheckBox = repeatEvery > _enum_RepeatType.never && _element_ContextMenu_Event_FormattedDateSelected !== null;
        
                showMessageDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent, showCheckBox );
            } );

            _element_ContextMenu_Event_OpenUrlSeparator = buildContextMenuSeparator( _element_ContextMenu_Event );
        }

        _element_ContextMenu_Event_OpenUrl = buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-arrow-top-right-icon", _options.openUrlText, function() {
            openEventUrl( _element_ContextMenu_Event_EventDetails.url );
        } );

        if ( _options.exportEventsEnabled ) {
            _element_ContextMenu_Event_ExportEventsSeparator = buildContextMenuSeparator( _element_ContextMenu_Event );

            _element_ContextMenu_Event_ExportEvents = buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-arrow-down-full-line-icon", _options.exportEventsTooltipText + "...", function() {
                showExportEventsDialog( _events_Selected );
            } );
        }

        if ( _options.exportEventsEnabled && _parameter_Navigator.share ) {
            buildContextMenuSeparator( _element_ContextMenu_Event );
        
            buildContextMenuItemWithIcon( _element_ContextMenu_Event, "ib-arrow-up-full-line-share-icon", _options.shareText + "...", function() {
                exportEventsForSharing( _events_Selected.length > 0 ? _events_Selected : [ _element_ContextMenu_Event_EventDetails ] );
            } );
        }
    }

    function showEventContextMenu( e, eventDetails, selectedDate ) {
        if ( _element_ContextMenu_Event !== null ) {
            var url = getString( eventDetails.url ),
                locked = isEventLocked( eventDetails );

            if ( !isControlKey( e ) ) {
                clearSelectedEvents();
            }

            _element_ContextMenu_Event_EventDetails = eventDetails;
            _element_ContextMenu_Event_DateSelected = new Date( selectedDate );
            _element_ContextMenu_Event_FormattedDateSelected = isDefined( selectedDate ) ? selectedDate : null;

            if ( _events_Selected.length > 1 ) {
                if ( _options.manualEditingEnabled ) {
                    _element_ContextMenu_Event_EditEvent.style.display = "none";
                    _element_ContextMenu_Event_CutSeparator.style.display = "none";
                    _element_ContextMenu_Event_Cut.style.display = "block";
                    _element_ContextMenu_Event_CopySeparator.style.display = "block";
                    _element_ContextMenu_Event_Copy.style.display = "block";
                    _element_ContextMenu_Event_DuplicateSeparator.style.display = "none";
                    _element_ContextMenu_Event_Duplicate.style.display = "none";
                    _element_ContextMenu_Event_RemoveSeparator.style.display = "none";
                    _element_ContextMenu_Event_Remove.style.display = "none";
                }

                _element_ContextMenu_Event_OpenUrlSeparator.style.display = "none";
                _element_ContextMenu_Event_OpenUrl.style.display = "none";

                if ( _options.exportEventsEnabled ) {
                    _element_ContextMenu_Event_ExportEventsSeparator.style.display = "block";
                    _element_ContextMenu_Event_ExportEvents.style.display = "block";
                }

            } else if ( locked ) {
                if ( _options.manualEditingEnabled ) {
                    _element_ContextMenu_Event_EditEvent.style.display = "block";
                    _element_ContextMenu_Event_CutSeparator.style.display = "none";
                    _element_ContextMenu_Event_Cut.style.display = "none";
                    _element_ContextMenu_Event_CopySeparator.style.display = "none";
                    _element_ContextMenu_Event_Copy.style.display = "none";
                    _element_ContextMenu_Event_DuplicateSeparator.style.display = "none";
                    _element_ContextMenu_Event_Duplicate.style.display = "none";
                    _element_ContextMenu_Event_RemoveSeparator.style.display = "block";
                    _element_ContextMenu_Event_Remove.style.display = "block";

                    if ( url !== _string.empty ) {
                        _element_ContextMenu_Event_OpenUrlSeparator.style.display = "block";
                    } else {
                        _element_ContextMenu_Event_OpenUrlSeparator.style.display = "none";
                    }
                }

                if ( url !== _string.empty ) {
                    _element_ContextMenu_Event_OpenUrl.style.display = "block";
                } else {
                    _element_ContextMenu_Event_OpenUrl.style.display = "none";
                }

                if ( _options.exportEventsEnabled ) {
                    _element_ContextMenu_Event_ExportEventsSeparator.style.display = "none";
                    _element_ContextMenu_Event_ExportEvents.style.display = "none";
                }

            } else {
                if ( _options.manualEditingEnabled ) {
                    _element_ContextMenu_Event_EditEvent.style.display = "block";
                    _element_ContextMenu_Event_CutSeparator.style.display = "block";
                    _element_ContextMenu_Event_Cut.style.display = "block";
                    _element_ContextMenu_Event_CopySeparator.style.display = "block";
                    _element_ContextMenu_Event_Copy.style.display = "block";
                    _element_ContextMenu_Event_DuplicateSeparator.style.display = "block";
                    _element_ContextMenu_Event_Duplicate.style.display = "block";
                    _element_ContextMenu_Event_RemoveSeparator.style.display = "block";
                    _element_ContextMenu_Event_Remove.style.display = "block";

                    if ( url !== _string.empty ) {
                        _element_ContextMenu_Event_OpenUrlSeparator.style.display = "block";
                    } else {
                        _element_ContextMenu_Event_OpenUrlSeparator.style.display = "none";
                    }
                }

                if ( url !== _string.empty ) {
                    _element_ContextMenu_Event_OpenUrl.style.display = "block";
                } else {
                    _element_ContextMenu_Event_OpenUrl.style.display = "none";
                }

                if ( _options.exportEventsEnabled ) {
                    _element_ContextMenu_Event_ExportEventsSeparator.style.display = "none";
                    _element_ContextMenu_Event_ExportEvents.style.display = "none";
                }
            }

            if ( url !== _string.empty || _element_ContextMenu_Event.childElementCount > 1 ) {
                hideAllDropDowns();
                cancelBubble( e );
                showElementAtMousePosition( e, _element_ContextMenu_Event );
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Context Menu - Full Day
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullDayViewContextMenu() {
        if ( _element_ContextMenu_FullDay !== null ) {
            removeNode( _parameter_Document.body, _element_ContextMenu_FullDay );

            _element_ContextMenu_FullDay = null;
            _element_ContextMenu_FullDay_RemoveEvents_Separator = null;
            _element_ContextMenu_FullDay_RemoveEvents = null;
            _element_ContextMenu_FullDay_Paste_Separator = null;
            _element_ContextMenu_FullDay_Paste = null;
        }

        if ( _options.manualEditingEnabled ) {
            _element_ContextMenu_FullDay = createElement( "div", "calendar-context-menu" );
            _elements_InDocumentBody.push( _element_ContextMenu_FullDay );
            _parameter_Document.body.appendChild( _element_ContextMenu_FullDay );

            buildContextMenuItemWithIcon( _element_ContextMenu_FullDay, "ib-plus-icon", _options.addEventTitle + "...", function() {
                if ( _options.useTemplateWhenAddingNewEvent ) {
                    var newBlankTemplateEvent = buildBlankTemplateEvent( _element_ContextMenu_FullDay_DateSelected, _element_ContextMenu_FullDay_DateSelected, _element_ContextMenu_FullDay_ClickPositionHourMinutes, _element_ContextMenu_FullDay_ClickPositionHourMinutes );

                    showEventEditingDialog( newBlankTemplateEvent );
                    showEventEditingDialogTitleSelected();
                } else {
                    showEventEditingDialog( null, _element_ContextMenu_FullDay_DateSelected, _element_ContextMenu_FullDay_ClickPositionHourMinutes );
                }
            }, true );

            _element_ContextMenu_FullDay_RemoveEvents_Separator = buildContextMenuSeparator( _element_ContextMenu_FullDay );

            _element_ContextMenu_FullDay_RemoveEvents = buildContextMenuItemWithIcon( _element_ContextMenu_FullDay, "ib-close-icon", _options.removeEventsTooltipText, function() {
                removeNonRepeatingEventsOnSpecificDate( _element_ContextMenu_FullDay_DateSelected, doDatesMatch );
            } );

            _element_ContextMenu_FullDay_Paste_Separator = buildContextMenuSeparator( _element_ContextMenu_FullDay );
                
            _element_ContextMenu_FullDay_Paste = buildContextMenuItemWithIcon( _element_ContextMenu_FullDay, "ib-circle-icon", _options.pasteText, function() {
                pasteEventsToDate( _element_ContextMenu_FullDay_DateSelected, _events_Copied_Cut );
            } );
        }
    }

    function showFullDayContextMenu( e, dateSelected, eventsShown ) {
        if ( _element_ContextMenu_FullDay !== null ) {
            if ( !isControlKey( e ) ) {
                clearSelectedEvents();
            }

            _element_ContextMenu_FullDay_DateSelected = dateSelected;

            if ( _element_ContextMenu_FullDay_Paste !== null ) {
                var pasteDisplay = _events_Copied.length > 0 ? "block" : "none";
    
                _element_ContextMenu_FullDay_Paste_Separator.style.display = pasteDisplay;
                _element_ContextMenu_FullDay_Paste.style.display = pasteDisplay;
            }

            var removeEventsDisplay = isDefinedArray( eventsShown ) && eventsShown.length > 0 ? "block" : "none";

            _element_ContextMenu_FullDay_RemoveEvents_Separator.style.display = removeEventsDisplay;
            _element_ContextMenu_FullDay_RemoveEvents.style.display = removeEventsDisplay;

            hideAllDropDowns();
            cancelBubble( e );
            showElementAtMousePosition( e, _element_ContextMenu_FullDay );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Context Menu - Day Header
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDayHeaderContextMenu() {
        if ( _element_ContextMenu_HeaderDay === null ) {
            _element_ContextMenu_HeaderDay = createElement( "div", "calendar-context-menu" );
            _elements_InDocumentBody.push( _element_ContextMenu_HeaderDay );
            _parameter_Document.body.appendChild( _element_ContextMenu_HeaderDay );
    
            _element_ContextMenu_HeaderDay_HideDay = buildContextMenuItemWithIcon( _element_ContextMenu_HeaderDay, "ib-close-icon", _options.hideDayText, function() {
                _options.visibleDays.splice( _options.visibleDays.indexOf( _element_ContextMenu_HeaderDay_SelectedDay ), 1 );
                _initialized = false;
    
                fireCustomTrigger( _options.events.onOptionsUpdated, _options );
                build( _calendar_CurrentDate, true, true );
            }, true );
    
            _element_ContextMenu_HeaderDay_HideDay_Separator = buildContextMenuSeparator( _element_ContextMenu_HeaderDay );
    
            _element_ContextMenu_HeaderDay_ShowOnlyWorkingDays = buildContextMenuItemWithIcon( _element_ContextMenu_HeaderDay, "ib-rhombus-hollow-icon", _options.showOnlyWorkingDaysText, function() {
                if ( _options.workingDays.length >= 1 ) {
                    _options.visibleDays = [].slice.call( _options.workingDays );
                    _initialized = false;
        
                    fireCustomTrigger( _options.events.onOptionsUpdated, _options );
                    build( _calendar_CurrentDate, true, true );
                }
            } );

            _element_ContextMenu_HeaderDay_ShowOnlyWorkingDays_Separator = buildContextMenuSeparator( _element_ContextMenu_HeaderDay );
    
            buildContextMenuItemWithIcon( _element_ContextMenu_HeaderDay, "ib-octagon-hollow-icon", _options.visibleDaysText + "...", function() {
                showSideMenu( true );
            } );
        }
    }

    function showDayHeaderContextMenu( e, selectedDay ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            if ( !isControlKey( e ) ) {
                clearSelectedEvents();
            }

            hideAllDropDowns();

            if ( _options.sideMenu.showDays ) {
                _element_ContextMenu_HeaderDay_SelectedDay = selectedDay;

                var hideDayDisplay = _options.visibleDays.length > 1 ? "block": "none",
                    showOnlyWorkingDaysDisplay = _options.workingDays.length >= 1 && !areArraysTheSame( _options.workingDays, _options.visibleDays ) ? "block": "none";
    
                _element_ContextMenu_HeaderDay_HideDay.style.display = hideDayDisplay;
                _element_ContextMenu_HeaderDay_HideDay_Separator.style.display = hideDayDisplay;
                _element_ContextMenu_HeaderDay_ShowOnlyWorkingDays.style.display = showOnlyWorkingDaysDisplay;
                _element_ContextMenu_HeaderDay_ShowOnlyWorkingDays_Separator.style.display = showOnlyWorkingDaysDisplay;
                
                cancelBubble( e );
                showElementAtMousePosition( e, _element_ContextMenu_HeaderDay );
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Disabled Background
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDisabledBackground() {
        if ( _element_Calendar_DisabledBackground === null && !_element_Mode_DatePicker_Enabled ) {
            _element_Calendar_DisabledBackground = createElement( "div", "disabled-background" );
        }
    }

    function isDisabledBackgroundDisplayed() {
        return _parameter_Document.body.contains( _element_Calendar_DisabledBackground );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingDialog() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            if ( _element_Dialog_EventEditor === null ) {
                _element_Dialog_EventEditor = createElement( "div", "calendar-dialog event-editor" );
                _elements_InDocumentBody.push( _element_Dialog_EventEditor );
                _parameter_Document.body.appendChild( _element_Dialog_EventEditor );
            }

            _element_Dialog_EventEditor.innerHTML = _string.empty;
    
            var view = createElement( "div", "view" );
            _element_Dialog_EventEditor.appendChild( view );
    
            _element_Dialog_EventEditor_DisabledArea = createElement( "div", "disabled-area" );
            view.appendChild( _element_Dialog_EventEditor_DisabledArea );
    
            _element_Dialog_EventEditor_TitleBar = createElement( "div", "title-bar" );
            view.appendChild( _element_Dialog_EventEditor_TitleBar );

            makeDialogMovable( _element_Dialog_EventEditor_TitleBar, _element_Dialog_EventEditor, null );
    
            var contents = createElement( "div", "contents" );
            view.appendChild( contents );
    
            var tabsContainer = buildTabContainer( contents );
    
            buildTab( tabsContainer, _options.eventText, function( tab ) {
                showTabContents( tab, _element_Dialog_EventEditor_Tab_Event, _element_Dialog_EventEditor );
            }, true );

            buildTab( tabsContainer, _options.typeText.replace( ":", _string.empty ), function( tab ) {
                showTabContents( tab, _element_Dialog_EventEditor_Tab_Type, _element_Dialog_EventEditor );
            } );
            
            buildTab( tabsContainer, _options.repeatsText.replace( ":", _string.empty ), function( tab ) {
                showTabContents( tab, _element_Dialog_EventEditor_Tab_Repeats, _element_Dialog_EventEditor );
            } );
            
            buildTab( tabsContainer, _options.optionalText, function( tab ) {
                showTabContents( tab, _element_Dialog_EventEditor_Tab_Extra, _element_Dialog_EventEditor );
            } );
            
            _element_Dialog_EventEditor_Tab_Event = buildTabContents( contents, true, false );
            _element_Dialog_EventEditor_Tab_Type = buildTabContents( contents, false, false );
            _element_Dialog_EventEditor_Tab_Repeats = buildTabContents( contents, false, false );
            _element_Dialog_EventEditor_Tab_Extra = buildTabContents( contents, false, false );
    
            buildEventEditorEventTabContent();
            buildEventEditorRepeatsTabContent();
            buildEventEditorExtraTabContent();
    
            var buttonsContainer = createElement( "div", "buttons-container" );
            contents.appendChild( buttonsContainer );
    
            _element_Dialog_EventEditor_RemoveButton = createButtonElement( buttonsContainer, _options.removeEventText, "remove", eventDialogEvent_Remove );
            _element_Dialog_EventEditor_AddUpdateButton = createButtonElement( buttonsContainer, _options.addText, "add-update", eventDialogEvent_OK );
            createButtonElement( buttonsContainer, _options.cancelText, "cancel", eventDialogEvent_Cancel );
        }
    }

    function buildEventEditorEventTabContent() {
        createTextHeaderElement( _element_Dialog_EventEditor_Tab_Event, _options.titleText );

        var inputTitleContainer = createElement( "div", "input-title-container" );
        _element_Dialog_EventEditor_Tab_Event.appendChild( inputTitleContainer );

        _element_Dialog_EventEditor_Title = createElement( "input", null, "text" );
        inputTitleContainer.appendChild( _element_Dialog_EventEditor_Title );

        _element_Dialog_EventEditor_Title.onkeydown = function( e ) {
            if ( e.keyCode === _enum_KeyCodes.enter ) {
                eventDialogEvent_OK();
            }
        };

        if ( _options.maximumEventTitleLength > 0 ) {
            _element_Dialog_EventEditor_Title.maxLength = _options.maximumEventTitleLength ;
        }

        var isAllDayChangedEvent = function() {
            isAllDayChanged( null );
        };

        if ( _options.eventColorsEditingEnabled ) {
            _element_Dialog_EventEditor_SelectColors = createButtonElement( inputTitleContainer, "...", "select-colors", showEventEditorColorsDialog, _options.selectColorsText );
        }

        createTextHeaderElement( _element_Dialog_EventEditor_Tab_Event, _options.fromText.replace( ":", _string.empty ) + "/" + _options.toText );

        var fromSplitContainer = createElement( "div", "split" );
        _element_Dialog_EventEditor_Tab_Event.appendChild( fromSplitContainer );

        _element_Dialog_EventEditor_DateFrom = createElement( "input" );
        _element_Dialog_EventEditor_DateFrom.onchange = isAllDayChangedEvent;
        fromSplitContainer.appendChild( _element_Dialog_EventEditor_DateFrom );

        setInputType( _element_Dialog_EventEditor_DateFrom, "date" );

        _element_Dialog_EventEditor_TimeFrom = createElement( "input" );
        fromSplitContainer.appendChild( _element_Dialog_EventEditor_TimeFrom );

        setInputType( _element_Dialog_EventEditor_TimeFrom, "time" );

        var toSplitContainer = createElement( "div", "split" );
        _element_Dialog_EventEditor_Tab_Event.appendChild( toSplitContainer );

        _element_Dialog_EventEditor_DateTo = createElement( "input" );
        _element_Dialog_EventEditor_DateTo.onchange = isAllDayChangedEvent;
        toSplitContainer.appendChild( _element_Dialog_EventEditor_DateTo );

        setInputType( _element_Dialog_EventEditor_DateTo, "date" );

        _element_Dialog_EventEditor_TimeTo = createElement( "input" );
        toSplitContainer.appendChild( _element_Dialog_EventEditor_TimeTo );

        setInputType( _element_Dialog_EventEditor_TimeTo, "time" );

        _element_Dialog_EventEditor_IsAllDay = buildCheckBox( _element_Dialog_EventEditor_Tab_Event, _options.isAllDayText, isAllDayChangedEvent )[ 0 ];
        _element_Dialog_EventEditor_ShowAlerts = buildCheckBox( _element_Dialog_EventEditor_Tab_Event, _options.showAlertsText )[ 0 ];
        _element_Dialog_EventEditor_ShowAsBusy = buildCheckBox( _element_Dialog_EventEditor_Tab_Event, _options.showAsBusyText )[ 0 ];
    }

    function buildEventEditorTypeTabContent() {
        _element_Dialog_EventEditor_Tab_Type.innerHTML = _string.empty;

        var radioButtonsTypesContainer = createElement( "div", "radio-buttons-container" );
        _element_Dialog_EventEditor_Tab_Type.appendChild( radioButtonsTypesContainer );

        for ( var eventType in _options_EventType ) {
            if ( _options_EventType.hasOwnProperty( eventType ) ) {
                _options_EventType[ eventType ].eventEditorInput = buildRadioButton( radioButtonsTypesContainer, _options_EventType[ eventType ].text, "Type" );
            }
        }
    }

    function buildEventEditorRepeatsTabContent() {
        var radioButtonsRepeatsContainer = createElement( "div", "radio-buttons-container" );
        _element_Dialog_EventEditor_Tab_Repeats.appendChild( radioButtonsRepeatsContainer );

        _element_Dialog_EventEditor_RepeatEvery_Never = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsNever, "RepeatType", repeatEveryEvent );
        _element_Dialog_EventEditor_RepeatEvery_EveryDay = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryDayText, "RepeatType", repeatEveryEvent );
        _element_Dialog_EventEditor_RepeatEvery_EveryWeek = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryWeekText, "RepeatType", repeatEveryEvent );
        _element_Dialog_EventEditor_RepeatEvery_Every2Weeks = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEvery2WeeksText, "RepeatType", repeatEveryEvent );
        _element_Dialog_EventEditor_RepeatEvery_EveryMonth = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryMonthText, "RepeatType", repeatEveryEvent );
        _element_Dialog_EventEditor_RepeatEvery_EveryYear = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsEveryYearText, "RepeatType", repeatEveryEvent );
        _element_Dialog_EventEditor_RepeatEvery_Custom = buildRadioButton( radioButtonsRepeatsContainer, _options.repeatsCustomText, "RepeatType", repeatEveryEvent );

        _element_Dialog_EventEditor_RepeatEvery_RepeatOptionsButton = createButtonElement( radioButtonsRepeatsContainer, "...", "repeat-options", showEventEditorRepeatOptionsDialog, _options.repeatOptionsTitle );

        var toSplitContainer = createElement( "div", "split split-margin" );
        _element_Dialog_EventEditor_Tab_Repeats.appendChild( toSplitContainer );

        _element_Dialog_EventEditor_RepeatEvery_Custom_Value = createElement( "input", null, "number" );
        _element_Dialog_EventEditor_RepeatEvery_Custom_Value.setAttribute( "min", "1" );
        toSplitContainer.appendChild( _element_Dialog_EventEditor_RepeatEvery_Custom_Value );

        var radioButtonsCustomRepeatsContainer = createElement( "div", "radio-buttons-container split-contents" );
        toSplitContainer.appendChild( radioButtonsCustomRepeatsContainer );

        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.dailyText, "RepeatCustomType" );
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Weekly = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.weeklyText, "RepeatCustomType" );
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Monthly = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.monthlyText, "RepeatCustomType" );
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Yearly = buildRadioButton( radioButtonsCustomRepeatsContainer, _options.yearlyText, "RepeatCustomType" );
    }

    function buildEventEditorExtraTabContent() {
        var splitContainer1 = createElement( "div", "split" );
        _element_Dialog_EventEditor_Tab_Extra.appendChild( splitContainer1 );

        createTextHeaderElement( splitContainer1, _options.alertOffsetText );
        createTextHeaderElement( splitContainer1, _options.groupText );

        var splitContainer2 = createElement( "div", "split" );
        _element_Dialog_EventEditor_Tab_Extra.appendChild( splitContainer2 );

        _element_Dialog_EventEditor_AlertOffset = createElement( "input", null, "number" );
        _element_Dialog_EventEditor_AlertOffset.setAttribute( "min", "0" );
        splitContainer2.appendChild( _element_Dialog_EventEditor_AlertOffset );

        _element_Dialog_EventEditor_Group = createElement( "input", null, "text" );
        splitContainer2.appendChild( _element_Dialog_EventEditor_Group );

        if ( _options.maximumEventGroupLength > 0 ) {
            _element_Dialog_EventEditor_Group.maxLength = _options.maximumEventGroupLength ;
        }

        createTextHeaderElement( _element_Dialog_EventEditor_Tab_Extra, _options.descriptionText );

        _element_Dialog_EventEditor_Description = createElement( "textarea", "custom-scroll-bars" );
        _element_Dialog_EventEditor_Tab_Extra.appendChild( _element_Dialog_EventEditor_Description );

        if ( _options.maximumEventDescriptionLength > 0 ) {
            _element_Dialog_EventEditor_Description.maxLength = _options.maximumEventDescriptionLength ;
        }

        var splitContainer3 = createElement( "div", "split" );
        _element_Dialog_EventEditor_Tab_Extra.appendChild( splitContainer3 );

        createTextHeaderElement( splitContainer3, _options.urlText );
        createTextHeaderElement( splitContainer3, _options.locationText );

        var splitContainer4 = createElement( "div", "split" );
        _element_Dialog_EventEditor_Tab_Extra.appendChild( splitContainer4 );

        _element_Dialog_EventEditor_Url = createElement( "input", null, "url" );
        splitContainer4.appendChild( _element_Dialog_EventEditor_Url );

        _element_Dialog_EventEditor_Location = createElement( "input", null, "text" );
        splitContainer4.appendChild( _element_Dialog_EventEditor_Location );

        if ( _options.maximumEventLocationLength > 0 ) {
            _element_Dialog_EventEditor_Location.maxLength = _options.maximumEventLocationLength ;
        }
    }

    function repeatEveryEvent() {
        _element_Dialog_EventEditor_RepeatEvery_RepeatOptionsButton.disabled = _element_Dialog_EventEditor_RepeatEvery_Never.checked;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Yearly.disabled = !_element_Dialog_EventEditor_RepeatEvery_Custom.checked;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily.disabled = !_element_Dialog_EventEditor_RepeatEvery_Custom.checked;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Weekly.disabled = !_element_Dialog_EventEditor_RepeatEvery_Custom.checked;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Monthly.disabled = !_element_Dialog_EventEditor_RepeatEvery_Custom.checked;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Value.disabled = !_element_Dialog_EventEditor_RepeatEvery_Custom.checked;
    }

    function isAllDayChanged( eventDetails ) {
        eventDetails = isDefined( eventDetails ) ? eventDetails : _element_Dialog_EventEditor_EventDetails;

        var disabled = false,
            locked = isDefined( eventDetails ) && isDefinedBoolean( eventDetails.locked ) ? eventDetails.locked : false;

        if ( locked ) {
            disabled = true;
        } else {

            if ( _element_Dialog_EventEditor_IsAllDay.checked ) {
                _element_Dialog_EventEditor_DateTo.value = _element_Dialog_EventEditor_DateFrom.value;
                _element_Dialog_EventEditor_TimeFrom.value = "00:00";
                _element_Dialog_EventEditor_TimeTo.value = "23:59";
                disabled = true;
            }
        }

        _element_Dialog_EventEditor_DateTo.disabled = disabled;
        _element_Dialog_EventEditor_TimeFrom.disabled = disabled;
        _element_Dialog_EventEditor_TimeTo.disabled = disabled;

        var fromDate = getSelectedDate( _element_Dialog_EventEditor_DateFrom ),
            toDate = getSelectedDate( _element_Dialog_EventEditor_DateTo );

        setMinimumDate( _element_Dialog_EventEditor_DateTo, fromDate );
        setMinimumDate( _element_Dialog_EventEditor_RepeatOptions_RepeatEnds, toDate );

        if ( fromDate > toDate ) {
            setSelectedDate( fromDate, _element_Dialog_EventEditor_DateTo );
        }

        if ( !locked ) {
            if ( toDate > fromDate || toDate < fromDate ) {
                disabled = true;
                _element_Dialog_EventEditor_RepeatEvery_Never.checked = true;
            } else {
                disabled = false;
            }
        }

        _element_Dialog_EventEditor_RepeatEvery_Never.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_EveryDay.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_EveryWeek.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_Every2Weeks.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_EveryMonth.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_EveryYear.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_Custom.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_RepeatOptionsButton.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Value.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Weekly.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Monthly.disabled = disabled;
        _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Yearly.disabled = disabled;

        if ( !locked ) {
            repeatEveryEvent();
        }
    }

    function showEventEditingDialog( eventDetails, overrideTodayDate, overrideTimeValues, originDayDate ) {
        if ( isFunction( _options.onBeforeEventAddEdit ) ) {
            fireCustomTrigger( _options.events.onBeforeEventAddEdit, eventDetails );
        } else {
            
            addNode( _parameter_Document.body, _element_Calendar_DisabledBackground );
            selectTab( _element_Dialog_EventEditor );
            buildEventEditorTypeTabContent();
    
            if ( isDefined( eventDetails ) ) {
                setNodeText( _element_Dialog_EventEditor_TitleBar, _options.editEventTitle );
                setEventTypeInputCheckedStates( eventDetails.type );
    
                _element_Dialog_EventEditor_AddUpdateButton.value = _options.updateText;
                _element_Dialog_EventEditor_RemoveButton.style.display = "inline-block";
                _element_Dialog_EventEditor_EventDetails = eventDetails;
                _element_Dialog_EventEditor_TimeFrom.value = getTimeForDisplay( eventDetails.from, false );
                _element_Dialog_EventEditor_TimeTo.value = getTimeForDisplay( eventDetails.to, false );
                _element_Dialog_EventEditor_IsAllDay.checked = getBoolean( eventDetails.isAllDay );
                _element_Dialog_EventEditor_ShowAlerts.checked = getBoolean( eventDetails.showAlerts, true );
                _element_Dialog_EventEditor_ShowAsBusy.checked = getBoolean( eventDetails.showAsBusy, true );
                _element_Dialog_EventEditor_Title.value = getString( eventDetails.title );
                _element_Dialog_EventEditor_Description.value = getString( eventDetails.description );
                _element_Dialog_EventEditor_Location.value = getString( eventDetails.location );
                _element_Dialog_EventEditor_Group.value = getString( eventDetails.group );
                _element_Dialog_EventEditor_Url.value = getString( eventDetails.url );
                _element_Dialog_EventEditor_Colors_Color.value = getString( eventDetails.color, _options.defaultEventBackgroundColor );
                _element_Dialog_EventEditor_Colors_ColorText.value = getString( eventDetails.colorText, _options.defaultEventTextColor );
                _element_Dialog_EventEditor_Colors_ColorBorder.value = getString( eventDetails.colorBorder, _options.defaultEventBorderColor );
                _element_Dialog_EventEditor_RepeatEvery_Custom_Value.value = getNumber( eventDetails.repeatEveryCustomValue, 1 );
                _element_Dialog_EventEditor_AlertOffset.value = getNumber( eventDetails.alertOffset, 0 );
    
                setSelectedDate( eventDetails.from, _element_Dialog_EventEditor_DateFrom );
                setSelectedDate( eventDetails.to, _element_Dialog_EventEditor_DateTo );
    
                var repeatEvery = getNumber( eventDetails.repeatEvery );
                if ( repeatEvery === _enum_RepeatType.never ) {
                    _element_Dialog_EventEditor_RepeatEvery_Never.checked = true;
                } else if ( repeatEvery === _enum_RepeatType.everyDay ) {
                    _element_Dialog_EventEditor_RepeatEvery_EveryDay.checked = true;
                } else if ( repeatEvery === _enum_RepeatType.everyWeek ) {
                    _element_Dialog_EventEditor_RepeatEvery_EveryWeek.checked = true;
                } else if ( repeatEvery === _enum_RepeatType.every2Weeks ) {
                    _element_Dialog_EventEditor_RepeatEvery_Every2Weeks.checked = true;
                } else if ( repeatEvery === _enum_RepeatType.everyMonth ) {
                    _element_Dialog_EventEditor_RepeatEvery_EveryMonth.checked = true;
                } else if ( repeatEvery === _enum_RepeatType.everyYear ) {
                    _element_Dialog_EventEditor_RepeatEvery_EveryYear.checked = true;
                } else if ( repeatEvery === _enum_RepeatType.custom ) {
                    _element_Dialog_EventEditor_RepeatEvery_Custom.checked = true;
                }
    
                var repeatEveryCustomType = getNumber( eventDetails.repeatEveryCustomType );
                if ( repeatEveryCustomType === _enum_RepeatCustomType.daily ) {
                    _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily.checked = true;
                } else if ( repeatEveryCustomType === _enum_RepeatCustomType.weekly ) {
                    _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Weekly.checked = true;
                } else if ( repeatEveryCustomType === _enum_RepeatCustomType.monthly ) {
                    _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Monthly.checked = true;
                } else if ( repeatEveryCustomType === _enum_RepeatCustomType.yearly ) {
                    _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Yearly.checked = true;
                }
    
                var excludeDays = getArray( eventDetails.repeatEveryExcludeDays );
                _element_Dialog_EventEditor_RepeatOptions_Mon.checked = excludeDays.indexOf( 1 ) > _value.notFound;
                _element_Dialog_EventEditor_RepeatOptions_Tue.checked = excludeDays.indexOf( 2 ) > _value.notFound;
                _element_Dialog_EventEditor_RepeatOptions_Wed.checked = excludeDays.indexOf( 3 ) > _value.notFound;
                _element_Dialog_EventEditor_RepeatOptions_Thu.checked = excludeDays.indexOf( 4 ) > _value.notFound;
                _element_Dialog_EventEditor_RepeatOptions_Fri.checked = excludeDays.indexOf( 5 ) > _value.notFound;
                _element_Dialog_EventEditor_RepeatOptions_Sat.checked = excludeDays.indexOf( 6 ) > _value.notFound;
                _element_Dialog_EventEditor_RepeatOptions_Sun.checked = excludeDays.indexOf( 0 ) > _value.notFound;
    
                setSelectedDate( eventDetails.repeatEnds, _element_Dialog_EventEditor_RepeatOptions_RepeatEnds );

                _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarning = repeatEvery > _enum_RepeatType.never && isDefined( originDayDate ) && !doDatesMatch( eventDetails.from, originDayDate );
                _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarningDate = originDayDate;
            } else {
    
                var date = new Date(),
                    fromDate = !isDefined( overrideTodayDate ) ? date : overrideTodayDate,
                    toDate = null;
    
                if ( isDateToday( fromDate ) ) {
                    fromDate.setHours( date.getHours() );
                    fromDate.setMinutes( date.getMinutes() );
                }
    
                toDate = addMinutesToDate( fromDate, _options.defaultEventDuration );
    
                setNodeText( _element_Dialog_EventEditor_TitleBar, _options.addEventTitle );
                setEventTypeInputCheckedStates();
    
                _element_Dialog_EventEditor_AddUpdateButton.value = _options.addText;
                _element_Dialog_EventEditor_RemoveButton.style.display = "none";
                _element_Dialog_EventEditor_EventDetails = {};
                _element_Dialog_EventEditor_IsAllDay.checked = false;
                _element_Dialog_EventEditor_ShowAlerts.checked = true;
                _element_Dialog_EventEditor_ShowAsBusy.checked = true;
                _element_Dialog_EventEditor_Title.value = _string.empty;
                _element_Dialog_EventEditor_Description.value = _string.empty;
                _element_Dialog_EventEditor_Location.value = _string.empty;
                _element_Dialog_EventEditor_Group.value = _string.empty;
                _element_Dialog_EventEditor_Url.value = _string.empty;
                _element_Dialog_EventEditor_Colors_Color.value = _options.defaultEventBackgroundColor;
                _element_Dialog_EventEditor_Colors_ColorText.value = _options.defaultEventTextColor;
                _element_Dialog_EventEditor_Colors_ColorBorder.value = _options.defaultEventBorderColor;
                _element_Dialog_EventEditor_RepeatEvery_Never.checked = true;
                _element_Dialog_EventEditor_RepeatOptions_Mon.checked = false;
                _element_Dialog_EventEditor_RepeatOptions_Tue.checked = false;
                _element_Dialog_EventEditor_RepeatOptions_Wed.checked = false;
                _element_Dialog_EventEditor_RepeatOptions_Thu.checked = false;
                _element_Dialog_EventEditor_RepeatOptions_Fri.checked = false;
                _element_Dialog_EventEditor_RepeatOptions_Sat.checked = false;
                _element_Dialog_EventEditor_RepeatOptions_Sun.checked = false;
                _element_Dialog_EventEditor_RepeatOptions_RepeatEnds.value = null;
                _element_Dialog_EventEditor_RepeatEvery_Custom_Value.value = "1";
                _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily.checked = true;
                _element_Dialog_EventEditor_AlertOffset.value = 0;
    
                if ( isDefinedArray( overrideTimeValues ) ) {
                    fromDate.setHours( overrideTimeValues[ 0 ] );
                    fromDate.setMinutes( overrideTimeValues[ 1 ] );
    
                    toDate.setHours( overrideTimeValues[ 0 ] );
                    toDate.setMinutes( overrideTimeValues[ 1 ] );
    
                    toDate = addMinutesToDate( toDate, _options.defaultEventDuration );
                }
    
                _element_Dialog_EventEditor_TimeFrom.value = getTimeForDisplay( fromDate, false );
                _element_Dialog_EventEditor_TimeTo.value = getTimeForDisplay( toDate, false );
    
                setSelectedDate( fromDate, _element_Dialog_EventEditor_DateFrom );
                setSelectedDate( toDate, _element_Dialog_EventEditor_DateTo );

                _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarning = false;
                _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarningDate = null;
            }
    
            buildToolbarButton( _element_Dialog_EventEditor_TitleBar, "ib-close", _options.closeTooltipText, eventDialogEvent_Cancel, true );
            setLockedStatusForEventEditingDialog( eventDetails );
            isAllDayChanged();
    
            _element_Dialog_AllOpened.push( eventDialogEvent_Cancel );
            _element_Dialog_EventEditor.style.display = "block";
            _element_Dialog_EventEditor_Title.focus();
        }
    }

    function showEventEditingDialogTitleSelected() {
        _element_Dialog_EventEditor_Title.focus();
        _element_Dialog_EventEditor_Title.select();
    }

    function setLockedStatusForEventEditingDialog( eventDetails ) {
        var locked = isEventLocked( eventDetails );

        setEventTypeInputDisabledStates( locked );

        _element_Dialog_EventEditor_AddUpdateButton.disabled = locked;
        _element_Dialog_EventEditor_DateFrom.disabled = locked;
        _element_Dialog_EventEditor_DateTo.disabled = locked;
        _element_Dialog_EventEditor_TimeFrom.disabled = locked;
        _element_Dialog_EventEditor_TimeTo.disabled = locked;
        _element_Dialog_EventEditor_IsAllDay.disabled = locked;
        _element_Dialog_EventEditor_ShowAlerts.disabled = locked;
        _element_Dialog_EventEditor_ShowAsBusy.disabled = locked;
        _element_Dialog_EventEditor_Title.disabled = locked;
        _element_Dialog_EventEditor_Description.disabled = locked;
        _element_Dialog_EventEditor_Location.disabled = locked;
        _element_Dialog_EventEditor_Group.disabled = locked;
        _element_Dialog_EventEditor_Url.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_Never.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_EveryDay.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_EveryWeek.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_Every2Weeks.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_EveryMonth.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_EveryYear.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_Custom.disabled = locked;
        _element_Dialog_EventEditor_RepeatEvery_RepeatOptionsButton.disabled = locked;
        _element_Dialog_EventEditor_AlertOffset.disabled = locked;

        if ( _element_Dialog_EventEditor_SelectColors !== null ) {
            _element_Dialog_EventEditor_SelectColors.disabled = locked;
        }
    }

    function setEventEditingDialogInDuplicateMode() {
        setNodeText( _element_Dialog_EventEditor_TitleBar, _options.addEventTitle );

        _element_Dialog_EventEditor_AddUpdateButton.value = _options.addText;
        _element_Dialog_EventEditor_RemoveButton.style.display = "none";
        _element_Dialog_EventEditor_EventDetails = cloneEventDetails( _element_Dialog_EventEditor_EventDetails );

        buildToolbarButton( _element_Dialog_EventEditor_TitleBar, "ib-close", _options.closeTooltipText, eventDialogEvent_Cancel, true );
    }

    function eventDialogEvent_OK() {
        var fromTime = _element_Dialog_EventEditor_TimeFrom.value.split( ":" ),
            toTime = _element_Dialog_EventEditor_TimeTo.value.split( ":" ),
            title = trimString( _element_Dialog_EventEditor_Title.value ),
            url = trimString( _element_Dialog_EventEditor_Url.value );

        if ( fromTime.length < 2 ) {
            showEventEditorErrorMessage( _options.fromTimeErrorMessage );
        } else if ( toTime.length < 2 ) {
            showEventEditorErrorMessage( _options.toTimeErrorMessage );
        } else if ( title === _string.empty ) {
            showEventEditorErrorMessage( _options.titleErrorMessage );
        } else if ( url.length > 0 && !isValidUrl( url ) ) {
            showEventEditorErrorMessage( _options.urlErrorMessage );

        } else {
            var fromDate = getSelectedDate( _element_Dialog_EventEditor_DateFrom ),
                toDate = getSelectedDate( _element_Dialog_EventEditor_DateTo ),
                description = trimString( _element_Dialog_EventEditor_Description.value ),
                location = trimString( _element_Dialog_EventEditor_Location.value ),
                group = trimString( _element_Dialog_EventEditor_Group.value ),
                repeatEnds = getSelectedDate( _element_Dialog_EventEditor_RepeatOptions_RepeatEnds, null ),
                repeatEveryCustomValue = parseInt( _element_Dialog_EventEditor_RepeatEvery_Custom_Value.value ),
                type = getEventTypeInputChecked(),
                alertOffset = parseInt( _element_Dialog_EventEditor_AlertOffset.value );

            if ( isNaN( repeatEveryCustomValue ) ) {
                repeatEveryCustomValue = 0;
                _element_Dialog_EventEditor_RepeatEvery_Never.checked = true;
                _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily.checked = true;
            }

            if ( isNaN( alertOffset ) ) {
                alertOffset = 0;
            }

            if ( toDate < fromDate ) {
                showEventEditorErrorMessage( _options.toSmallerThanFromErrorMessage );
            } else {

                var normalSave = function( newId, newFromDate, newToDate, newRepeatEndsDate, ignoreFields ) {
                    ignoreFields = isDefined( ignoreFields ) ? ignoreFields : false;

                    setTimeOnDate( newFromDate, _element_Dialog_EventEditor_TimeFrom.value );
                    setTimeOnDate( newToDate, _element_Dialog_EventEditor_TimeTo.value );

                    if ( !ignoreFields ) {
                        var isExistingEvent = isDefined( newId ),
                            newEvent = {
                                from: newFromDate,
                                to: newToDate,
                                title: title,
                                description: description,
                                location: location,
                                group: group,
                                isAllDay: _element_Dialog_EventEditor_IsAllDay.checked,
                                showAlerts: _element_Dialog_EventEditor_ShowAlerts.checked,
                                showAsBusy: _element_Dialog_EventEditor_ShowAsBusy.checked,
                                color: _element_Dialog_EventEditor_EventDetails.color,
                                colorText: _element_Dialog_EventEditor_EventDetails.colorText,
                                colorBorder: _element_Dialog_EventEditor_EventDetails.colorBorder,
                                repeatEveryExcludeDays: _element_Dialog_EventEditor_EventDetails.repeatEveryExcludeDays,
                                repeatEnds: newRepeatEndsDate,
                                url: url,
                                repeatEveryCustomValue: repeatEveryCustomValue,
                                type: type,
                                customTags: _element_Dialog_EventEditor_EventDetails.customTags,
                                alertOffset: alertOffset
                            };
        
                        if ( _element_Dialog_EventEditor_RepeatEvery_Never.checked ) {
                            newEvent.repeatEvery = _enum_RepeatType.never;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_EveryDay.checked ) {
                            newEvent.repeatEvery = _enum_RepeatType.everyDay;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_EveryWeek.checked ) {
                            newEvent.repeatEvery = _enum_RepeatType.everyWeek;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_Every2Weeks.checked ) {
                            newEvent.repeatEvery = _enum_RepeatType.every2Weeks;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_EveryMonth.checked ) {
                            newEvent.repeatEvery = _enum_RepeatType.everyMonth;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_EveryYear.checked ) {
                            newEvent.repeatEvery = _enum_RepeatType.everyYear;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_Custom.checked ) {
                            newEvent.repeatEvery = _enum_RepeatType.custom;
                        }
        
                        if ( _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Daily.checked ) {
                            newEvent.repeatEveryCustomType = _enum_RepeatCustomType.daily;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Weekly.checked ) {
                            newEvent.repeatEveryCustomType = _enum_RepeatCustomType.weekly;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Monthly.checked ) {
                            newEvent.repeatEveryCustomType = _enum_RepeatCustomType.monthly;
                        } else if ( _element_Dialog_EventEditor_RepeatEvery_Custom_Type_Yearly.checked ) {
                            newEvent.repeatEveryCustomType = _enum_RepeatCustomType.yearly;
                        }
        
                        if ( !isExistingEvent ) {
                            newEvent.organizerName = _options.organizerName;
                            newEvent.organizerEmailAddress = _options.organizerEmailAddress;
                        } else {
                            newEvent.id = newId;
                        }
            
                        if ( isExistingEvent ) {
                            _that.updateEvent( newId, newEvent, false );
        
                            showNotificationPopUp( _options.eventUpdatedText.replace( "{0}", _element_Dialog_EventEditor_EventDetails.title ) );
                        } else {
                            _that.addEvent( newEvent, false );
        
                            showNotificationPopUp( _options.eventAddedText.replace( "{0}", newEvent.title ) );
                        }

                        if ( _options.isWidget ) {
                            build( _calendar_CurrentDate );
                        } else {
                            buildFullMonthViewDayEvents();
                            refreshOpenedViews();
                        }

                    } else {
                        _element_Dialog_EventEditor_EventDetails.from = newFromDate;
                        _element_Dialog_EventEditor_EventDetails.to = newToDate;
                        _element_Dialog_EventEditor_EventDetails.repeatEnds = newRepeatEndsDate;
                    }
                };
                
                if ( _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarning ) {
                    showEventEditorDisabledArea();

                    var onNoEvent = function() {
                        hideEventEditorDisabledArea();
                        normalSave( _element_Dialog_EventEditor_EventDetails.id, fromDate, toDate, repeatEnds );
                        eventDialogEvent_Cancel();
                    };
            
                    var onYesEvent = function() {
                        var newFromDate = new Date( _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarningDate ),
                            newToDate = new Date( _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarningDate ),
                            newRepeatEndsDate = new Date( _element_Dialog_EventEditor_ShowEditingRepeatSeriesWarningDate );

                        hideEventEditorDisabledArea();
                        moveDateForwardDay( newRepeatEndsDate, -1 );
                        normalSave( _element_Dialog_EventEditor_EventDetails.id, fromDate, toDate, newRepeatEndsDate, true );
                        normalSave( null, newFromDate, newToDate, repeatEnds );
                        eventDialogEvent_Cancel();
                    };
            
                    showMessageDialog( _options.confirmEventUpdateTitle, _options.confirmEventUpdateMessage, onYesEvent, onNoEvent, false, true, _options.forwardText, _options.seriesText );

                } else {
                    normalSave( _element_Dialog_EventEditor_EventDetails.id, fromDate, toDate, repeatEnds );
                    eventDialogEvent_Cancel();
                }
            }
        }
    }

    function eventDialogEvent_Cancel( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        removeNode( _parameter_Document.body, _element_Calendar_DisabledBackground );

        _element_Dialog_EventEditor.style.display = "none";
    }

    function eventDialogEvent_Remove() {
        showEventEditorDisabledArea();

        var onNoEvent = function() {
            hideEventEditorDisabledArea();
        };

        var onYesEvent = function() {
            onNoEvent();
            eventDialogEvent_Cancel();

            if ( isDefined( _element_Dialog_EventEditor_EventDetails.id ) ) {
                _that.removeEvent( _element_Dialog_EventEditor_EventDetails.id, true );

                if ( _options.isWidget ) {
                    build( _calendar_CurrentDate );
                } else {
                    refreshOpenedViews();
                }

                showNotificationPopUp( _options.eventRemovedText.replace( "{0}", _element_Dialog_EventEditor_EventDetails.title ) );
            }
        };

        showMessageDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent );
    }

    function refreshOpenedViews() {
        updateFullDayView();
        updateFullWeekView();
        updateFullYearView();
        updateAllEventsView();
        updateTimelineView();
    }

    function buildBlankTemplateEvent( fromDate, toDate, fromTime, toTime ) {
        fromTime = isDefined( fromTime ) ? fromTime : "09:00";
        toTime = isDefined( toTime ) ? fromTime : "09:00";

        setTimeOnDate( fromDate, fromTime );
        setTimeOnDate( toDate, toTime );

        toDate = addMinutesToDate( toDate, _options.defaultEventDuration );

        var newEvent = {
            from: fromDate,
            to: toDate,
            title: _options.newEventDefaultTitle,
            description: _string.empty,
            location: _string.empty,
            group: _string.empty,
            isAllDay: false,
            showAlerts: true,
            showAsBusy: true,
            color: _options.defaultEventBackgroundColor,
            colorText: _options.defaultEventTextColor,
            colorBorder: _options.defaultEventBorderColor,
            repeatEveryExcludeDays: [],
            repeatEnds: null,
            url: _string.empty,
            repeatEveryCustomValue: _string.empty,
            repeatEvery: _enum_RepeatType.never,
            repeatEveryCustomType: _enum_RepeatCustomType.daily,
            organizerName: _string.empty,
            organizerEmailAddress: _string.empty,
            type: 0,
            locked: false,
            customTags: null,
            alertOffset: 0
        };

        _that.addEvent( newEvent, false );

        showNotificationPopUp( _options.eventAddedText.replace( "{0}", newEvent.title ) );
        buildFullMonthViewDayEvents();
        refreshOpenedViews();
        storeEventsInLocalStorage();

        return newEvent;
    }

    function isEventLocked( eventDetails ) {
        return isDefined( eventDetails ) && isDefinedBoolean( eventDetails.locked ) ? eventDetails.locked : false;
    }

    function showEventEditorErrorMessage( message ) {
        showMessageDialog( _options.errorText, message, hideEventEditorDisabledArea, null, false, false );
        showEventEditorDisabledArea();
    }

    function showEventEditorDisabledArea() {
        _element_Dialog_EventEditor_DisabledArea.style.display = "block";
    }

    function hideEventEditorDisabledArea() {
        _element_Dialog_EventEditor_DisabledArea.style.display = "none";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Colors Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingColorDialog() {
        if ( !_element_Mode_DatePicker_Enabled && _element_Dialog_EventEditor_Colors === null ) {
            _element_Dialog_EventEditor_Colors = createElement( "div", "calendar-dialog event-editor-colors" );
            _elements_InDocumentBody.push( _element_Dialog_EventEditor_Colors );
            _parameter_Document.body.appendChild( _element_Dialog_EventEditor_Colors );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.selectColorsText );
            _element_Dialog_EventEditor_Colors.appendChild( titleBar );

            makeDialogMovable( titleBar, _element_Dialog_EventEditor_Colors, null );
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, eventColorsDialogEvent_Cancel, true );
    
            var contents = createElement( "div", "contents" );
            _element_Dialog_EventEditor_Colors.appendChild( contents );

            var section1 = createElement( "div", "section" );
            contents.appendChild( section1 );
    
            createTextHeaderElement( section1, _options.backgroundColorText, "text-header" );
    
            _element_Dialog_EventEditor_Colors_Color = createElement( "input" );
            section1.appendChild( _element_Dialog_EventEditor_Colors_Color );
    
            setInputType( _element_Dialog_EventEditor_Colors_Color, "color" );
    
            var section2 = createElement( "div", "section" );
            contents.appendChild( section2 );

            createTextHeaderElement( section2, _options.textColorText, "text-header" );
    
            _element_Dialog_EventEditor_Colors_ColorText = createElement( "input" );
            section2.appendChild( _element_Dialog_EventEditor_Colors_ColorText );
    
            setInputType( _element_Dialog_EventEditor_Colors_ColorText, "color" );
    
            var section3 = createElement( "div", "section" );
            contents.appendChild( section3 );

            createTextHeaderElement( section3, _options.borderColorText, "text-header" );
    
            _element_Dialog_EventEditor_Colors_ColorBorder = createElement( "input" );
            section3.appendChild( _element_Dialog_EventEditor_Colors_ColorBorder );
    
            setInputType( _element_Dialog_EventEditor_Colors_ColorBorder, "color" );
    
            var buttonsContainer = createElement( "div", "buttons-container" );
            contents.appendChild( buttonsContainer );
    
            createButtonElement( buttonsContainer, _options.updateText, "update", eventColorsDialogEvent_OK );
            createButtonElement( buttonsContainer, _options.cancelText, "cancel", eventColorsDialogEvent_Cancel );
        }
    }

    function eventColorsDialogEvent_OK() {
        eventColorsDialogEvent_Cancel();

        _element_Dialog_EventEditor_EventDetails.color = _element_Dialog_EventEditor_Colors_Color.value;
        _element_Dialog_EventEditor_EventDetails.colorText = _element_Dialog_EventEditor_Colors_ColorText.value;
        _element_Dialog_EventEditor_EventDetails.colorBorder = _element_Dialog_EventEditor_Colors_ColorBorder.value;
    }

    function eventColorsDialogEvent_Cancel( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        hideEventEditorDisabledArea();

        _element_Dialog_EventEditor_Colors.style.display = "none";
    }

    function showEventEditorColorsDialog() {
        _element_Dialog_AllOpened.push( eventColorsDialogEvent_Cancel );
        _element_Dialog_EventEditor_Colors.style.display = "block";

        showEventEditorDisabledArea();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Repeat Options Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingRepeatOptionsDialog() {
        if ( !_element_Mode_DatePicker_Enabled && _element_Dialog_EventEditor_RepeatOptions === null ) {
            _element_Dialog_EventEditor_RepeatOptions = createElement( "div", "calendar-dialog event-editor-repeat-options" );
            _elements_InDocumentBody.push( _element_Dialog_EventEditor_RepeatOptions );
            _parameter_Document.body.appendChild( _element_Dialog_EventEditor_RepeatOptions );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.repeatOptionsTitle );
            _element_Dialog_EventEditor_RepeatOptions.appendChild( titleBar );

            makeDialogMovable( titleBar, _element_Dialog_EventEditor_RepeatOptions, null );
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, eventRepeatOptionsDialogEvent_Cancel, true );
    
            var contents = createElement( "div", "contents" );
            _element_Dialog_EventEditor_RepeatOptions.appendChild( contents );

            var section1 = createElement( "div", "section" );
            contents.appendChild( section1 );
    
            createTextHeaderElement( section1, _options.daysToExcludeText, "text-header" );
    
            _element_Dialog_EventEditor_RepeatOptions_Mon = buildCheckBox( section1, _options.dayNames[ 0 ] )[ 0 ];
            _element_Dialog_EventEditor_RepeatOptions_Tue = buildCheckBox( section1, _options.dayNames[ 1 ] )[ 0 ];
            _element_Dialog_EventEditor_RepeatOptions_Wed = buildCheckBox( section1, _options.dayNames[ 2 ] )[ 0 ];
            _element_Dialog_EventEditor_RepeatOptions_Thu = buildCheckBox( section1, _options.dayNames[ 3 ] )[ 0 ];
            _element_Dialog_EventEditor_RepeatOptions_Fri = buildCheckBox( section1, _options.dayNames[ 4 ] )[ 0 ];
            _element_Dialog_EventEditor_RepeatOptions_Sat = buildCheckBox( section1, _options.dayNames[ 5 ] )[ 0 ];
            _element_Dialog_EventEditor_RepeatOptions_Sun = buildCheckBox( section1, _options.dayNames[ 6 ] )[ 0 ];
    
            var section2 = createElement( "div", "section" );
            contents.appendChild( section2 );

            createTextHeaderElement( section2, _options.repeatEndsText, "text-header" );
    
            _element_Dialog_EventEditor_RepeatOptions_RepeatEnds = createElement( "input" );
            section2.appendChild( _element_Dialog_EventEditor_RepeatOptions_RepeatEnds );
    
            setInputType( _element_Dialog_EventEditor_RepeatOptions_RepeatEnds, "date" );
    
            var buttonsContainer = createElement( "div", "buttons-container" );
            contents.appendChild( buttonsContainer );
    
            createButtonElement( buttonsContainer, _options.updateText, "update", eventRepeatOptionsDialogEvent_OK );
            createButtonElement( buttonsContainer, _options.cancelText, "cancel", eventRepeatOptionsDialogEvent_Cancel );
        }
    }

    function eventRepeatOptionsDialogEvent_OK() {
        eventRepeatOptionsDialogEvent_Cancel();

        var repeatEveryExcludeDays = [];

        if ( _element_Dialog_EventEditor_RepeatOptions_Mon.checked ) {
            repeatEveryExcludeDays.push( 1 );
        }

        if ( _element_Dialog_EventEditor_RepeatOptions_Tue.checked ) {
            repeatEveryExcludeDays.push( 2 );
        }

        if ( _element_Dialog_EventEditor_RepeatOptions_Wed.checked ) {
            repeatEveryExcludeDays.push( 3 );
        }

        if ( _element_Dialog_EventEditor_RepeatOptions_Thu.checked ) {
            repeatEveryExcludeDays.push( 4 );
        }

        if ( _element_Dialog_EventEditor_RepeatOptions_Fri.checked ) {
            repeatEveryExcludeDays.push( 5 );
        }

        if ( _element_Dialog_EventEditor_RepeatOptions_Sat.checked ) {
            repeatEveryExcludeDays.push( 6 );
        }

        if ( _element_Dialog_EventEditor_RepeatOptions_Sun.checked ) {
            repeatEveryExcludeDays.push( 0 );
        }

        _element_Dialog_EventEditor_EventDetails.repeatEveryExcludeDays = repeatEveryExcludeDays;
    }

    function eventRepeatOptionsDialogEvent_Cancel( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        hideEventEditorDisabledArea();

        _element_Dialog_EventEditor_RepeatOptions.style.display = "none";
    }

    function showEventEditorRepeatOptionsDialog() {
        _element_Dialog_AllOpened.push( eventRepeatOptionsDialogEvent_Cancel );
        _element_Dialog_EventEditor_RepeatOptions.style.display = "block";

        showEventEditorDisabledArea();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Message Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildMessageDialog() {
        if ( !_element_Mode_DatePicker_Enabled && _element_Dialog_Message === null ) {
            _element_Dialog_Message = createElement( "div", "calendar-dialog message" );
            _elements_InDocumentBody.push( _element_Dialog_Message );
            _parameter_Document.body.appendChild( _element_Dialog_Message );
    
            _element_Dialog_Message_TitleBar = createElement( "div", "title-bar" );
            _element_Dialog_Message.appendChild( _element_Dialog_Message_TitleBar );
    
            var contents = createElement( "div", "contents" );
            _element_Dialog_Message.appendChild( contents );
    
            _element_Dialog_Message_Message = createElement( "div", "text" );
            contents.appendChild( _element_Dialog_Message_Message );
    
            var checkbox = buildCheckBox( contents, _options.removeAllEventsInSeriesText );
            _element_Dialog_Message_RemoveAllEvents = checkbox[ 0 ];
            _element_Dialog_Message_RemoveAllEvents_Label = checkbox[ 1 ];
    
            _element_Dialog_Message_ButtonContainer = createElement( "div", "buttons-container" );
            contents.appendChild( _element_Dialog_Message_ButtonContainer );
        }
    }

    function showMessageDialog( title, message, onYesEvent, onNoEvent, showRemoveAllEventsCheckBox, showNoButton, yesText, noText ) {
        showRemoveAllEventsCheckBox = isDefined( showRemoveAllEventsCheckBox ) ? showRemoveAllEventsCheckBox : false;
        showNoButton = isDefined( showNoButton ) ? showNoButton : true;

        var newYesText = isDefined( yesText ) ? yesText : _options.yesText,
            newNoText = isDefined( noText ) ? noText : _options.noText;

        _element_Dialog_Message_ButtonContainer.innerHTML = _string.empty;

        var yesButton = createElement( "input", "yes-ok", "button" );
        yesButton.value = newYesText;
        _element_Dialog_Message_ButtonContainer.appendChild( yesButton );

        var noButton = createElement( "input", "no", "button" );
        noButton.value = newNoText;
        _element_Dialog_Message_ButtonContainer.appendChild( noButton );

        _element_Dialog_AllOpened.push( false );
        _element_Dialog_Message.style.display = "block";

        setNodeText( _element_Dialog_Message_TitleBar, title );
        setNodeText( _element_Dialog_Message_Message, message );

        yesButton.onclick = hideMessageDialog;
        yesButton.addEventListener( "click", onYesEvent );
        noButton.onclick = hideMessageDialog;

        if ( isDefinedFunction( onNoEvent ) ) {
            noButton.addEventListener( "click", onNoEvent );
        }

        if ( !isDefined( yesText ) && !isDefined( noText ) ) {
            if ( showNoButton ) {
                noButton.style.display = "inline-block";
                yesButton.value = _options.yesText;
            } else {
                noButton.style.display = "none";
                yesButton.value = _options.okText;
            }
        }

        if ( showRemoveAllEventsCheckBox ) {
            _element_Dialog_Message_RemoveAllEvents_Label.style.display = "block";
            _element_Dialog_Message_RemoveAllEvents.checked = false;
        } else {
            _element_Dialog_Message_RemoveAllEvents_Label.style.display = "none";
            _element_Dialog_Message_RemoveAllEvents.checked = true;
        }
    }

    function hideMessageDialog() {
        _element_Dialog_AllOpened.pop();
        _element_Dialog_Message.style.display = "none";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Export Events Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildExportEventsDialog() {
        if ( !_element_Mode_DatePicker_Enabled && _element_Dialog_ExportEvents === null ) {
            _element_Dialog_ExportEvents = createElement( "div", "calendar-dialog export-events" );
            _elements_InDocumentBody.push( _element_Dialog_ExportEvents );
            _parameter_Document.body.appendChild( _element_Dialog_ExportEvents );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.exportEventsTitle );
            _element_Dialog_ExportEvents.appendChild( titleBar );

            makeDialogMovable( titleBar, _element_Dialog_ExportEvents, null );
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideExportEventsDialog, true );
    
            var contents = createElement( "div", "contents" );
            _element_Dialog_ExportEvents.appendChild( contents );

            _element_Dialog_ExportEvents_Filename = createElement( "input", null, "text" );
            _element_Dialog_ExportEvents_Filename.placeholder = _options.exportFilenamePlaceholderText;
            contents.appendChild( _element_Dialog_ExportEvents_Filename );

            _element_Dialog_ExportEvents_Filename.onkeydown = function( e ) {
                if ( e.keyCode === _enum_KeyCodes.enter ) {
                    exportEventsFromOptionSelected();
                }
            };

            _element_Dialog_ExportEvents_Option_ExportEventsToClipboard = buildCheckBox( contents, _options.copyToClipboardOnlyText, showExportEventsDialogOptions )[ 0 ];

            _element_Dialog_ExportEvents_Options = createElement( "div", "split options" );
            contents.appendChild( _element_Dialog_ExportEvents_Options );
    
            var radioButtonsContainer1 = createElement( "div", "radio-buttons-container split-contents" );
            _element_Dialog_ExportEvents_Options.appendChild( radioButtonsContainer1 );
    
            var radioButtonsContainer2 = createElement( "div", "radio-buttons-container split-contents" );
            _element_Dialog_ExportEvents_Options.appendChild( radioButtonsContainer2 );
    
            _element_Dialog_ExportEvents_Option_CSV = buildRadioButton( radioButtonsContainer1, "CSV", "ExportType" );
            _element_Dialog_ExportEvents_Option_XML = buildRadioButton( radioButtonsContainer1, "XML", "ExportType" );
            _element_Dialog_ExportEvents_Option_JSON = buildRadioButton( radioButtonsContainer1, "JSON", "ExportType" );
            _element_Dialog_ExportEvents_Option_TEXT = buildRadioButton( radioButtonsContainer1, "TXT", "ExportType" );
    
            _element_Dialog_ExportEvents_Option_iCAL = buildRadioButton( radioButtonsContainer2, "iCAL", "ExportType" );
            _element_Dialog_ExportEvents_Option_MD = buildRadioButton( radioButtonsContainer2, "MD", "ExportType" );
            _element_Dialog_ExportEvents_Option_HTML = buildRadioButton( radioButtonsContainer2, "HTML", "ExportType" );
            _element_Dialog_ExportEvents_Option_TSV = buildRadioButton( radioButtonsContainer2, "TSV", "ExportType" );
    
            var buttonsContainer = createElement( "div", "buttons-container" );
            contents.appendChild( buttonsContainer );
    
            createButtonElement( buttonsContainer, _options.exportText, "export", exportEventsFromOptionSelected );
            createButtonElement( buttonsContainer, _options.cancelText, "cancel", hideExportEventsDialog );
        }
    }

    function showExportEventsDialogOptions() {
        _element_Dialog_ExportEvents_Filename.disabled = _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked;
    }

    function showExportEventsDialog( events ) {
        addNode( _parameter_Document.body, _element_Calendar_DisabledBackground );
        hideSideMenu();

        _element_Dialog_AllOpened.push( hideExportEventsDialog );
        _element_Dialog_ExportEvents.style.display = "block";
        _element_Dialog_ExportEvents_ExportEvents = events;
        _element_Dialog_ExportEvents_Option_CSV.checked = true;
        _element_Dialog_ExportEvents_Filename.value = _string.empty;
        _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked = false;

        showExportEventsDialogOptions();

        _element_Dialog_ExportEvents_Filename.focus();
    }

    function hideExportEventsDialog( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        removeNode( _parameter_Document.body, _element_Calendar_DisabledBackground );

        _element_Dialog_ExportEvents.style.display = "none";
    }

    function exportEventsFromOptionSelected() {
        hideExportEventsDialog();

        if ( _element_Dialog_ExportEvents_Option_CSV.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "csv", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        } else if ( _element_Dialog_ExportEvents_Option_XML.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "xml", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        } else if ( _element_Dialog_ExportEvents_Option_JSON.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "json", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        } else if ( _element_Dialog_ExportEvents_Option_TEXT.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "text", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        } else if ( _element_Dialog_ExportEvents_Option_iCAL.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "ical", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        } else if ( _element_Dialog_ExportEvents_Option_MD.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "md", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        } else if ( _element_Dialog_ExportEvents_Option_HTML.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "html", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        } else if ( _element_Dialog_ExportEvents_Option_TSV.checked ) {
            exportEvents( _element_Dialog_ExportEvents_ExportEvents, "tsv", _element_Dialog_ExportEvents_Filename.value, _element_Dialog_ExportEvents_Option_ExportEventsToClipboard.checked );
        }
    }

    function showExportDialogFromWindowKeyDown() {
        var events = [],
            viewOpen = getActiveView();
        
        if ( viewOpen === null ) {
            events = _element_View_FullMonth_EventsShown;
        } else {

            if ( viewOpen === _element_View_FullDay ) {
                events = _element_View_FullDay_EventsShown;
            } else if ( viewOpen === _element_View_FullWeek ) {
                events = _element_View_FullWeek_EventsShown;
            } else if ( viewOpen === _element_View_Timeline ) {
                events = _element_View_Timeline_EventsShown;
            } else if ( viewOpen === _element_View_AllEvents ) {
                events = _element_View_AllEvents_EventsShown;
            }
        }

        if ( events.length > 0 ) {
            showExportEventsDialog( events );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Search Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSearchDialog() {
        if ( !_element_Mode_DatePicker_Enabled && _element_Dialog_Search === null ) {
            _element_Dialog_Search = createElement( "div", "calendar-dialog search" );
            _elements_InDocumentBody.push( _element_Dialog_Search );
            _parameter_Document.body.appendChild( _element_Dialog_Search );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.searchEventsTitle );
            _element_Dialog_Search.appendChild( titleBar );

            makeDialogMovable( titleBar, _element_Dialog_Search, function() {
                _element_Dialog_Search_Moved = true;

                storeSearchOptions();
            } );

            titleBar.ondblclick = minimizeRestoreDialog;
    
            var closeButton = buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideSearchDialog );
            closeButton.onmousedown = cancelBubble;
            closeButton.onmouseup = cancelBubble;
            
            _element_Dialog_Search_MinimizedRestoreButton = buildToolbarButton( titleBar, "ib-minus", _options.minimizedTooltipText, minimizeRestoreDialog );
            _element_Dialog_Search_MinimizedRestoreButton.onmousedown = cancelBubble;
            _element_Dialog_Search_MinimizedRestoreButton.onmouseup = cancelBubble;

            _element_Dialog_Search_Contents = createElement( "div", "contents" );
            _element_Dialog_Search.appendChild( _element_Dialog_Search_Contents );

            var historyContainer = createElement( "div", "history-container" );
            _element_Dialog_Search_Contents.appendChild( historyContainer );
    
            _element_Dialog_Search_For = createElement( "input", null, "text" );
            _element_Dialog_Search_For.placeholder = _options.searchTextBoxPlaceholder;
            _element_Dialog_Search_For.oninput = searchForTextChanged;
            _element_Dialog_Search_For.onpropertychange = searchForTextChanged;
            _element_Dialog_Search_For.onkeypress = searchOnEnter;
            historyContainer.appendChild( _element_Dialog_Search_For );

            _element_Dialog_Search_History_DropDown_Button = createElement( "div", "ib-arrow-down-full" );
            _element_Dialog_Search_History_DropDown_Button.style.display = "none";
            _element_Dialog_Search_History_DropDown_Button.onclick = showFullSearchHistory;
            historyContainer.appendChild( _element_Dialog_Search_History_DropDown_Button );

            _element_Dialog_Search_History_DropDown = createElement( "div", "history-dropdown custom-scroll-bars" );
            historyContainer.appendChild( _element_Dialog_Search_History_DropDown );
            
            var checkboxOptionsContainer = createElement( "div", "checkbox-container" );
            _element_Dialog_Search_Contents.appendChild( checkboxOptionsContainer );
    
            _element_Dialog_Search_Not = buildCheckBox( checkboxOptionsContainer, _options.notSearchText, searchOptionsChanged )[ 0 ];
            _element_Dialog_Search_MatchCase = buildCheckBox( checkboxOptionsContainer, _options.matchCaseText, searchOptionsChanged )[ 0 ];
            _element_Dialog_Search_Advanced = buildCheckBox( checkboxOptionsContainer, _options.advancedText + ":", searchAdvancedChecked )[ 0 ];
            _element_Dialog_Search_Advanced.checked = true;
    
            _element_Dialog_Search_Advanced_Container = createElement( "div", "advanced" );
            _element_Dialog_Search_Contents.appendChild( _element_Dialog_Search_Advanced_Container );
    
            var optionsSplitContainer = createElement( "div", "split" );
            _element_Dialog_Search_Advanced_Container.appendChild( optionsSplitContainer );
    
            var splitContents1 = createElement( "div", "split-contents" );
            optionsSplitContainer.appendChild( splitContents1 );
    
            var splitContents2 = createElement( "div", "split-contents" );
            optionsSplitContainer.appendChild( splitContents2 );
    
            createTextHeaderElement( splitContents1, _options.includeText, "text-header" );
    
            var checkboxContainer = createElement( "div", "checkbox-container" );
            splitContents1.appendChild( checkboxContainer );
    
            _element_Dialog_Search_Include_Title = buildCheckBox( checkboxContainer, _options.titleText.replace( ":", _string.empty ), searchOptionsChanged )[ 0 ];
            _element_Dialog_Search_Include_Location = buildCheckBox( checkboxContainer, _options.locationText.replace( ":", _string.empty ), searchOptionsChanged )[ 0 ];
            _element_Dialog_Search_Include_Description = buildCheckBox( checkboxContainer, _options.descriptionText.replace( ":", _string.empty ), searchOptionsChanged )[ 0 ];
            _element_Dialog_Search_Include_Group = buildCheckBox( checkboxContainer, _options.groupText.replace( ":", _string.empty ), searchOptionsChanged )[ 0 ];
            _element_Dialog_Search_Include_Url = buildCheckBox( checkboxContainer, _options.urlText.replace( ":", _string.empty ), searchOptionsChanged )[ 0 ];
    
            _element_Dialog_Search_Include_Title.checked = true;
    
            createTextHeaderElement( splitContents2, _options.optionsText, "text-header" );
    
            var radioButtonsContainer = createElement( "div", "radio-buttons-container" );
            splitContents2.appendChild( radioButtonsContainer );
    
            _element_Dialog_Search_Option_StartsWith = buildRadioButton( radioButtonsContainer, _options.startsWithText, "SearchOptionType", searchOptionsChanged );
            _element_Dialog_Search_Option_EndsWith = buildRadioButton( radioButtonsContainer, _options.endsWithText, "SearchOptionType", searchOptionsChanged );
            _element_Dialog_Search_Option_Contains = buildRadioButton( radioButtonsContainer, _options.containsText, "SearchOptionType", searchOptionsChanged );
    
            _element_Dialog_Search_Option_Contains.checked = true;
    
            var buttonsContainer = createElement( "div", "buttons-container" );
            _element_Dialog_Search_Contents.appendChild( buttonsContainer );
    
            _element_Dialog_Search_Previous = createButtonElement( buttonsContainer, _options.previousText, "previous", searchOnPrevious );
            _element_Dialog_Search_Next = createButtonElement( buttonsContainer, _options.nextText, "next", searchOnNext );
        }
    }

    function searchAdvancedChecked() {
        if ( _element_Dialog_Search_Advanced.checked ) {
            _element_Dialog_Search_Advanced_Container.style.display = "block";
        } else {
            _element_Dialog_Search_Advanced_Container.style.display = "none";
        }
        
        centerSearchDialog();
        storeSearchOptions();
    }

    function searchOptionsChanged() {
        storeSearchOptions();
        searchForTextChanged( false );
    }

    function searchForTextChanged( showHistoryDropDown ) {
        showHistoryDropDown = isDefined( showHistoryDropDown ) ? showHistoryDropDown : true;

        if ( _element_Dialog_Search_SearchResults.length > 0 ) {
            removeElementsClassName( _element_Calendar, " focused-event" );
        }

        _element_Dialog_Search_Previous.disabled = true;
        _element_Dialog_Search_Next.disabled = _element_Dialog_Search_For.value === _string.empty;
        _element_Dialog_Search_SearchResults = [];
        _element_Dialog_Search_SearchIndex = 0;
        _element_Dialog_Search_FocusedEventID = null;

        if ( showHistoryDropDown ) {
            showSearchHistoryDropDownForSearch();
        }
        
        storeSearchOptions();
    }

    function showSearchDialog() {
        if ( _element_Dialog_Search.style.display !== "block" ) {
            _element_Dialog_Search_SearchResults = [];
            _element_Dialog_Search.style.display = "block";
    
            searchForTextChanged( false );
            setupSearchOptions();
            centerSearchDialog();
        }

        if ( !isSearchDialogContentVisible() ) {
            minimizeRestoreDialog();
        }

        _element_Dialog_Search_For.focus();
        _element_Dialog_Search_For.select();

        if ( _options_Search.history.length > 0 ) {
            _element_Dialog_Search_History_DropDown_Button.style.display = "block";
        }
    }

    function centerSearchDialog() {
        if ( _element_Dialog_Search !== null && !_element_Dialog_Search_Moved && !_element_Mode_DatePicker_Enabled ) {

            if ( isDefinedNumber( _options_Search.left ) ) {
                _element_Dialog_Search.style.left = _options_Search.left + "px";
            } else {
                _element_Dialog_Search.style.left = ( _parameter_Window.innerWidth / 2 - _element_Dialog_Search.offsetWidth / 2 ) + "px";
            }
    
            if ( isDefinedNumber( _options_Search.top ) ) {
                _element_Dialog_Search.style.top = _options_Search.top + "px";
            } else {
                _element_Dialog_Search.style.top = ( _parameter_Window.innerHeight / 2 - _element_Dialog_Search.offsetHeight / 2 ) + "px";
            }
        }
    }

    function hideSearchDialog() {
        var result = false;

        if ( _element_Dialog_Search !== null && _element_Dialog_Search.style.display === "block" ) {
            _element_Dialog_Search.style.display = "none";
            searchForTextChanged();
            result = true;
        }

        return result;
    }

    function minimizeRestoreDialog() {
        if ( isSearchDialogContentVisible() ) {
            _element_Dialog_Search_Contents.style.display = "none";
            _element_Dialog_Search_MinimizedRestoreButton.className = "ib-square-hollow";
            addToolTip( _element_Dialog_Search_MinimizedRestoreButton, _options.restoreTooltipText );
        } else {
            _element_Dialog_Search_Contents.style.display = "block";
            _element_Dialog_Search_MinimizedRestoreButton.className = "ib-minus";
            addToolTip( _element_Dialog_Search_MinimizedRestoreButton, _options.minimizedTooltipText );
        }
    }

    function isSearchDialogContentVisible() {
        return _element_Dialog_Search_Contents.style.display === "block";
    }

    function searchOnPrevious() {
        if ( _element_Dialog_Search_SearchIndex > 0 ) {
            _element_Dialog_Search_SearchIndex--;

            var eventDetails = _element_Dialog_Search_SearchResults[ _element_Dialog_Search_SearchIndex ];

            updateSearchButtons();
            build( eventDetails.from );
            updatedFocusedElementAfterSearch( eventDetails );
        }
    }

    function searchOnEnter( e ) {
        if ( e.keyCode === _enum_KeyCodes.enter && isControlKey( e ) && !_element_Dialog_Search_Previous.disabled ) {
            searchOnPrevious();
        } else if ( e.keyCode === _enum_KeyCodes.enter && !_element_Dialog_Search_Next.disabled ) {
            searchOnNext();
        } else {
            showSearchHistoryDropDownForSearch();
        }
    }

    function searchOnNext() {
        if ( _element_Dialog_Search_SearchResults.length === 0 ) {
            var startingID = _element_ID_Event_Day,
                not = _element_Dialog_Search_Not.checked,
                matchCase = _element_Dialog_Search_MatchCase.checked,
                search = !matchCase ? _element_Dialog_Search_For.value.toLowerCase() : _element_Dialog_Search_For.value,
                monthYearsFound = {},
                orderedEvents = getOrderedEvents( getAllEvents() ),
                orderedEventsLength = orderedEvents.length,
                viewOpen = getActiveView(),
                isFullDayViewVisible = viewOpen === _element_View_FullDay,
                isAllEventsViewVisible = viewOpen === _element_View_AllEvents,
                isFullWeekViewVisible = viewOpen === _element_View_FullWeek,
                isTimelineViewVisible = viewOpen === _element_View_Timeline;
            
            if ( isFullDayViewVisible ) {
                startingID = _element_ID_Event_FullDay;
            } else if ( isAllEventsViewVisible ) {
                startingID = _element_ID_Event_Month;
            } else if ( isFullWeekViewVisible ) {
                startingID = _element_ID_Event_WeekDay;
            } else if ( isTimelineViewVisible ) {
                startingID = _element_ID_Event_Timeline_Day;
            }

            storeSearchOptions( true );

            for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
                var eventDetails = orderedEvents[ orderedEventIndex ];

                if ( isEventVisible( eventDetails ) ) {
                    var title = getString( eventDetails.title ),
                        location = getString( eventDetails.location ),
                        description = getString( eventDetails.description ),
                        group = getString( eventDetails.group ),
                        url = getString( eventDetails.url ),
                        found = false;

                    if ( !matchCase ) {
                        title = title.toLowerCase();
                        description = description.toLowerCase();
                        location = location.toLowerCase();
                        group = group.toLowerCase();
                        url = url.toLowerCase();
                    }

                    if ( _element_Dialog_Search_Include_Title.checked && isSearchTextAvailable( title, search ) ) {
                        found = true;
                    } else if ( _element_Dialog_Search_Include_Location.checked && isSearchTextAvailable( location, search ) ) {
                        found = true;
                    } else if ( _element_Dialog_Search_Include_Description.checked && isSearchTextAvailable( description, search ) ) {
                        found = true;
                    } else if ( _element_Dialog_Search_Include_Group.checked && isSearchTextAvailable( group, search ) ) {
                        found = true;
                    } else if ( _element_Dialog_Search_Include_Url.checked && isSearchTextAvailable( url, search ) ) {
                        found = true;
                    }

                    if ( not ) {
                        found = !found;
                    }

                    if ( found ) {
                        var eventElement = getElementByID( startingID + eventDetails.id );
                        if ( eventElement !== null || ( !isFullDayViewVisible && !isAllEventsViewVisible && !isFullWeekViewVisible && !isTimelineViewVisible ) ) {

                            if ( isFullDayViewVisible || isAllEventsViewVisible || isFullWeekViewVisible || isTimelineViewVisible ) {
                                _element_Dialog_Search_SearchResults.push( cloneEventDetails( eventDetails, false ) );
                            } else {
                                
                                var monthYear = eventDetails.from.getMonth() + "-" + eventDetails.from.getFullYear();
        
                                if ( !monthYearsFound.hasOwnProperty( monthYear ) ) {
                                    _element_Dialog_Search_SearchResults.push( cloneEventDetails( eventDetails, false ) );
                                    monthYearsFound[ monthYear ] = true;
                                }
                            }
                        }
                    }
                }
            }

        } else {
            _element_Dialog_Search_SearchIndex++;
        }

        updateSearchButtons();

        if ( _element_Dialog_Search_SearchResults.length > 0 ) {
            var eventDetailsSearchResult = _element_Dialog_Search_SearchResults[ _element_Dialog_Search_SearchIndex ],
                dateFrom = new Date( eventDetailsSearchResult.from );

            build( dateFrom );
            updatedFocusedElementAfterSearch( eventDetailsSearchResult );
        }
    }

    function updatedFocusedElementAfterSearch( eventDetails ) {
        var startingID = _element_ID_Event_Day,
            viewOpen = getActiveView(),
            isFullDayViewVisible = viewOpen === _element_View_FullDay,
            isAllEventsViewVisible = viewOpen === _element_View_AllEvents,
            isFullWeekViewVisible = viewOpen === _element_View_FullWeek,
            isTimelineViewVisible = viewOpen === _element_View_Timeline;
        
        removeElementsClassName( _element_Calendar, " focused-event" );

        if ( isFullDayViewVisible ) {
            startingID = _element_ID_Event_FullDay;
        } else if ( isAllEventsViewVisible ) {
            startingID = _element_ID_Event_Month;
        } else if ( isFullWeekViewVisible ) {
            startingID = _element_ID_Event_WeekDay;
        } else if ( isTimelineViewVisible ) {
            startingID = _element_ID_Event_Timeline_Day;
        }

        var event = getElementByID( startingID + eventDetails.id );
        if ( event !== null ) {
            event.className += " focused-event";
            _element_Dialog_Search_FocusedEventID = eventDetails.id;

            if ( isFullDayViewVisible || isAllEventsViewVisible || isFullWeekViewVisible || isTimelineViewVisible ) {
                var parent = event.parentNode;

                while ( true || !isDefined( parent ) ) {
                    if ( parent.scrollHeight > 0 && parent.scrollHeight > parent.offsetHeight ) {
                        parent.scrollTop = event.offsetTop;
                        break;
                    }

                    parent = parent.parentNode;
                }
            }
        }
    }

    function updateSearchButtons() {
        _element_Dialog_Search_Previous.disabled = _element_Dialog_Search_SearchIndex === 0;
        _element_Dialog_Search_Next.disabled = _element_Dialog_Search_SearchIndex === _element_Dialog_Search_SearchResults.length - 1 || _element_Dialog_Search_SearchResults.length === 0;
    }

    function isSearchTextAvailable( data, searchText ) {
        var found = false;
        
        if ( _element_Dialog_Search_Option_StartsWith.checked ) {
            found = startsWith( data, searchText );
        } else if ( _element_Dialog_Search_Option_EndsWith.checked ) {
            found = endsWith( data, searchText );
        } else {
            found = data.indexOf( searchText ) > _value.notFound;
        }

        return found;
    }

    function storeSearchOptions( storeSearchHistory ) {
        storeSearchHistory = isDefined( storeSearchHistory ) ? storeSearchHistory : false;

        stopAndResetTimer( _timer_Name.searchOptionsChanged );

        var searchForText = trimString( _element_Dialog_Search_For.value );

        if ( storeSearchHistory ) {
            _element_Dialog_Search_History_DropDown_Button.style.display = "block";
        }

        startTimer( _timer_Name.searchOptionsChanged, function() {
            var searchForTextAddedToHistory = true,
                historyLength = _options_Search.history.length;

            if ( storeSearchHistory ) {
                searchForTextAddedToHistory = false;

                for ( var historyIndex = 0; historyIndex < historyLength; historyIndex++ ) {
                    var historyText = _options_Search.history[ historyIndex ];
    
                    if ( historyText === searchForText ) {
                        searchForTextAddedToHistory = true;
                        break;
                    }
                }
    
                if ( !searchForTextAddedToHistory ) {
                    _options_Search.history.push( searchForText );
                }
            }

            if ( !storeSearchHistory || searchForTextAddedToHistory ) {
                _options_Search.lastSearchText = searchForText;
                _options_Search.not = _element_Dialog_Search_Not.checked;
                _options_Search.matchCase = _element_Dialog_Search_MatchCase.checked;
                _options_Search.showAdvanced = _element_Dialog_Search_Advanced.checked;
                _options_Search.searchTitle = _element_Dialog_Search_Include_Title.checked;
                _options_Search.searchLocation = _element_Dialog_Search_Include_Location.checked;
                _options_Search.searchDescription = _element_Dialog_Search_Include_Description.checked;
                _options_Search.searchGroup = _element_Dialog_Search_Include_Group.checked;
                _options_Search.searchUrl = _element_Dialog_Search_Include_Url.checked;
                _options_Search.startsWith = _element_Dialog_Search_Option_StartsWith.checked;
                _options_Search.endsWith = _element_Dialog_Search_Option_EndsWith.checked;
                _options_Search.contains = _element_Dialog_Search_Option_Contains.checked;
    
                if ( _element_Dialog_Search_Moved ) {
                    _options_Search.left = _element_Dialog_Search.offsetLeft;
                    _options_Search.top = _element_Dialog_Search.offsetTop;
                }
    
                fireCustomTrigger( _options.events.onSearchOptionsUpdated, _options_Search );
            }
        }, 2000, false );
    }

    function setupSearchOptions() {
        _element_Dialog_Search_For.value = _options_Search.lastSearchText;
        _element_Dialog_Search_Not.checked = _options_Search.not;
        _element_Dialog_Search_MatchCase.checked = _options_Search.matchCase;
        _element_Dialog_Search_Advanced.checked = _options_Search.showAdvanced;
        _element_Dialog_Search_Include_Title.checked = _options_Search.searchTitle;
        _element_Dialog_Search_Include_Location.checked = _options_Search.searchLocation;
        _element_Dialog_Search_Include_Description.checked = _options_Search.searchDescription;
        _element_Dialog_Search_Include_Group.checked = _options_Search.searchGroup;
        _element_Dialog_Search_Include_Url.checked = _options_Search.searchUrl;
        _element_Dialog_Search_Option_StartsWith.checked = _options_Search.startsWith;
        _element_Dialog_Search_Option_EndsWith.checked = _options_Search.endsWith;
        _element_Dialog_Search_Option_Contains.checked = _options_Search.contains;

        if ( _element_Dialog_Search_Advanced.checked ) {
            _element_Dialog_Search_Advanced_Container.style.display = "block";
        } else {
            _element_Dialog_Search_Advanced_Container.style.display = "none";
        }
    }

    function showSearchHistoryDropDownForSearch() {
        var historyLength = _options_Search.history.length;

        if ( historyLength > 0 ) {
            _element_Dialog_Search_History_DropDown_Button.style.display = "block";

            stopAndResetTimer( _timer_Name.searchEventsHistoryDropDown );
    
            startTimer( _timer_Name.searchEventsHistoryDropDown, function() {
                var lookupText = _element_Dialog_Search_For.value,
                    lookupTextFound = false;

                if ( trimString( lookupText ) !== _string.empty ) {
                    sortSearchHistory();

                    _element_Dialog_Search_History_DropDown.innerHTML = _string.empty;
    
                    for ( var historyIndex = 0; historyIndex < historyLength; historyIndex++ ) {
                        var historyText = _options_Search.history[ historyIndex ];
    
                        if ( startsWithAnyCase( historyText, lookupText ) && historyText.toLowerCase() !== lookupText.toLowerCase() ) {
                            addSearchHistoryDropDownItem( _options_Search.history[ historyIndex ], lookupText.length );
                            lookupTextFound = true;
                        }
                    }
                }

                if ( lookupTextFound ) {
                    showSearchHistoryDropDownMenu();
                } else {
                    hideSearchHistoryDropDownMenu();
                }
            }, 150, false );

        } else {
            _element_Dialog_Search_History_DropDown_Button.style.display = "none";
        }
    }

    function sortSearchHistory() {
        _options_Search.history.sort( function( value1, value2 ) {
            var result = 0,
                value1AnyCase = value1.toLowerCase(),
                value2AnyCase = value2.toLowerCase();

            if ( value1AnyCase < value2AnyCase ) { 
                result = -1;
            } else if ( value1AnyCase > value2AnyCase ) { 
                result = 1;
            }

            return result;
        } );
    }

    function showFullSearchHistory( e ) {
        cancelBubble( e );

        if ( _element_Dialog_Search_History_DropDown.style.display !== "block" ) {
            sortSearchHistory();

            var historyLength = _options_Search.history.length;
    
            _element_Dialog_Search_History_DropDown.innerHTML = _string.empty;
            _element_Dialog_Search_For.focus();
    
            for ( var historyIndex = 0; historyIndex < historyLength; historyIndex++ ) {
                addSearchHistoryDropDownItem( _options_Search.history[ historyIndex ], 0 );
            }
    
            showSearchHistoryDropDownMenu();
        
        } else {
            hideSearchHistoryDropDownMenu();
        }
    }

    function addSearchHistoryDropDownItem( historyText, startBoldLength ) {
        var historyDropDownItem = createElement( "div", "history-dropdown-item" );
        _element_Dialog_Search_History_DropDown.appendChild( historyDropDownItem );

        var boldText = createElement( "span", "search-search" );
        setNodeText( boldText, historyText.substring( 0, startBoldLength ) );
        historyDropDownItem.appendChild( boldText );

        var remainingText = createElement( "span" );
        setNodeText( remainingText, historyText.substring( startBoldLength ) );
        historyDropDownItem.appendChild( remainingText );

        historyDropDownItem.onclick = function( e ) {
            cancelBubble( e );
            hideSearchHistoryDropDownMenu();

            _element_Dialog_Search_For.value = historyText;
            _element_Dialog_Search_For.selectionStart = _element_Dialog_Search_For.selectionEnd = _element_Dialog_Search_For.value.length;
            _element_Dialog_Search_For.focus();

            searchForTextChanged( false );
        };
    }

    function hideSearchHistoryDropDownMenu() {
        var closed = false;

        if ( _element_Dialog_Search_History_DropDown !== null && _element_Dialog_Search_History_DropDown_Button.className === "ib-arrow-up-full" ) {
            _element_Dialog_Search_History_DropDown.style.display = "none";
            _element_Dialog_Search_History_DropDown_Button.className = "ib-arrow-down-full";

            closed = true;
        }

        return closed;
    }

    function showSearchHistoryDropDownMenu() {
        if ( _element_Dialog_Search_History_DropDown !== null && _element_Dialog_Search_History_DropDown_Button.className === "ib-arrow-down-full" ) {
            _element_Dialog_Search_History_DropDown.style.display = "block";
            _element_Dialog_Search_History_DropDown_Button.className = "ib-arrow-up-full";
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Configuration Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildConfigurationDialog() {
        if ( !_element_Mode_DatePicker_Enabled && _element_Dialog_Configuration === null ) {
            _element_Dialog_Configuration = createElement( "div", "calendar-dialog configuration" );
            _elements_InDocumentBody.push( _element_Dialog_Configuration );
            _parameter_Document.body.appendChild( _element_Dialog_Configuration );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.configurationTitleText );
            _element_Dialog_Configuration.appendChild( titleBar );

            makeDialogMovable( titleBar, _element_Dialog_Configuration, null );
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, configurationDialogEvent_Cancel, true );
    
            var contents = createElement( "div", "contents" );
            _element_Dialog_Configuration.appendChild( contents );
    
            var tabsContainer = buildTabContainer( contents );
    
            buildTab( tabsContainer, _options.displayTabText, function( tab ) {
                showTabContents( tab, _element_Dialog_Configuration_Display, _element_Dialog_Configuration );
            }, true );
    
            buildTab( tabsContainer, _options.organizerTabText, function( tab ) {
                showTabContents( tab, _element_Dialog_Configuration_Organizer, _element_Dialog_Configuration );
            } );
    
            _element_Dialog_Configuration_Display = buildTabContents( contents, true, false );
            _element_Dialog_Configuration_Organizer = buildTabContents( contents, false, false );
    
            _element_Dialog_Configuration_Display_EnableAutoRefresh = buildCheckBox( _element_Dialog_Configuration_Display, _options.enableAutoRefreshForEventsText )[ 0 ];
            _element_Dialog_Configuration_Display_EnableBrowserNotifications = buildCheckBox( _element_Dialog_Configuration_Display, _options.enableBrowserNotificationsText, null, null, null, "checkbox-tabbed-in" )[ 0 ];
            _element_Dialog_Configuration_Display_EnableTooltips = buildCheckBox( _element_Dialog_Configuration_Display, _options.enableTooltipsText, null, null, null, "checkbox-tabbed-down" )[ 0 ];
            _element_Dialog_Configuration_Display_EnableDragAndDropForEvents = buildCheckBox( _element_Dialog_Configuration_Display, _options.enableDragAndDropForEventText )[ 0 ];
            _element_Dialog_Configuration_Display_ShowHolidaysInTheDisplays = buildCheckBox( _element_Dialog_Configuration_Display, _options.showHolidaysInTheDisplaysText )[ 0 ];
    
            createTextHeaderElement( _element_Dialog_Configuration_Organizer, _options.organizerNameText );
    
            _element_Dialog_Configuration_Organizer_Name = createElement( "input", null, "text" );
            _element_Dialog_Configuration_Organizer.appendChild( _element_Dialog_Configuration_Organizer_Name );
    
            createTextHeaderElement( _element_Dialog_Configuration_Organizer, _options.organizerEmailAddressText );
    
            _element_Dialog_Configuration_Organizer_Email = createElement( "input", null, "email" );
            _element_Dialog_Configuration_Organizer.appendChild( _element_Dialog_Configuration_Organizer_Email );
    
            var buttonsContainer = createElement( "div", "buttons-container" );
            contents.appendChild( buttonsContainer );
    
            createButtonElement( buttonsContainer, _options.updateText, "update", configurationDialogEvent_OK );
            createButtonElement( buttonsContainer, _options.cancelText, "cancel", configurationDialogEvent_Cancel );
        }
    }

    function configurationDialogEvent_OK() {
        if ( _element_Dialog_Configuration_Display_EnableAutoRefresh.checked ) {
            _that.startTheAutoRefreshTimer();
        } else {
            _that.stopTheAutoRefreshTimer();
        }

        _options.eventNotificationsEnabled = _element_Dialog_Configuration_Display_EnableBrowserNotifications.checked;
        _options.tooltipsEnabled = _element_Dialog_Configuration_Display_EnableTooltips.checked;
        _options.dragAndDropForEventsEnabled = _element_Dialog_Configuration_Display_EnableDragAndDropForEvents.checked;
        _options.showHolidays = _element_Dialog_Configuration_Display_ShowHolidaysInTheDisplays.checked;
        _options.organizerName = _element_Dialog_Configuration_Organizer_Name.value;
        _options.organizerEmailAddress = _element_Dialog_Configuration_Organizer_Email.value;

        _initialized = false;

        fireCustomTrigger( _options.events.onOptionsUpdated, _options );
        checkForBrowserNotificationsPermission();
        hideConfigurationDialog();
        build( _calendar_CurrentDate, true, true );
        showNotificationPopUp( _options.configurationUpdatedText );
    }

    function configurationDialogEvent_Cancel() {
        hideConfigurationDialog();
    }

    function showConfigurationDialog() {
        addNode( _parameter_Document.body, _element_Calendar_DisabledBackground );

        _element_Dialog_Configuration_Display_EnableAutoRefresh.checked = _timer_AutoRefresh_Enabled;
        _element_Dialog_Configuration_Display_EnableBrowserNotifications.checked = _options.eventNotificationsEnabled;
        _element_Dialog_Configuration_Display_EnableTooltips.checked = _options.tooltipsEnabled;
        _element_Dialog_Configuration_Display_EnableDragAndDropForEvents.checked = _options.dragAndDropForEventsEnabled;
        _element_Dialog_Configuration_Display_ShowHolidaysInTheDisplays.checked = _options.showHolidays;
        _element_Dialog_Configuration_Organizer_Name.value = _options.organizerName;
        _element_Dialog_Configuration_Organizer_Email.value = _options.organizerEmailAddress;

        _element_Dialog_AllOpened.push( hideConfigurationDialog );
        _element_Dialog_Configuration.style.display = "block";
    }

    function hideConfigurationDialog( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        removeNode( _parameter_Document.body, _element_Calendar_DisabledBackground );

        _element_Dialog_Configuration.style.display = "none";
    }

    function isEventVisible( eventDetails ) {
        var group = getString( eventDetails.group ),
            configGroup = getGroupName( group ),
            type = getNumber( eventDetails.type ),
            visible = true;
        
        if ( group !== _string.empty ) {
            if ( isDefined( _options_Configuration.visibleGroups ) ) {
                visible = _options_Configuration.visibleGroups.indexOf( configGroup ) > _value.notFound;
            }
        } else {
            visible = !_options.hideEventsWithoutGroupAssigned;
        }

        if ( visible && isDefined( _options_Configuration.visibleEventTypes ) && _options_EventType.hasOwnProperty( type ) ) {
            visible = _options_Configuration.visibleEventTypes.indexOf( type ) > _value.notFound;
        }

        return visible;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Jump To Date Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildJumpTpDateDialog() {
        if ( !_element_Mode_DatePicker_Enabled && _element_Dialog_JumpToDate === null ) {
            _element_Dialog_JumpToDate = createElement( "div", "calendar-dialog jump-to-date" );
            _elements_InDocumentBody.push( _element_Dialog_JumpToDate );
            _parameter_Document.body.appendChild( _element_Dialog_JumpToDate );
    
            var titleBar = createElement( "div", "title-bar" );
            setNodeText( titleBar, _options.jumpToDateTitle );
            _element_Dialog_JumpToDate.appendChild( titleBar );

            makeDialogMovable( titleBar, _element_Dialog_JumpToDate, null );
            buildToolbarButton( titleBar, "ib-close", _options.closeTooltipText, hideJumpToDateDialog, true );
    
            var contents = createElement( "div", "contents" );
            _element_Dialog_JumpToDate.appendChild( contents );

            _element_Dialog_JumpToDate_Date = createElement( "input", null, "date" );
            contents.appendChild( _element_Dialog_JumpToDate_Date );
    
            var buttonsContainer = createElement( "div", "buttons-container" );
            contents.appendChild( buttonsContainer );
    
            var goButton = createButtonElement( buttonsContainer, _options.goText, "go", jumpToSelectedDate );
            createButtonElement( buttonsContainer, _options.cancelText, "cancel", hideJumpToDateDialog );

            goButton.onkeydown = function( e ) {
                if ( e.keyCode === _enum_KeyCodes.enter ) {
                    jumpToSelectedDate();
                }
            };
        }
    }

    function showJumpToDateDialog() {
        var viewOpen = getActiveView();

        if ( viewOpen !== _element_View_AllEvents ) {
            addNode( _parameter_Document.body, _element_Calendar_DisabledBackground );
            hideSideMenu();
            setDefaultJumpToDate();
    
            _element_Dialog_AllOpened.push( hideJumpToDateDialog );
            _element_Dialog_JumpToDate.style.display = "block";
            _element_Dialog_JumpToDate_Date.focus();
        }
    }

    function hideJumpToDateDialog( popCloseWindowEvent ) {
        removeLastCloseWindowEvent( popCloseWindowEvent );
        removeNode( _parameter_Document.body, _element_Calendar_DisabledBackground );

        _element_Dialog_JumpToDate.style.display = "none";
    }

    function setDefaultJumpToDate() {
        var viewOpen = getActiveView();

        if ( viewOpen === null ) {
            fireCustomTrigger( _options.events.onSetDate, _element_Dialog_JumpToDate_Date );
            setSelectedDate( _calendar_CurrentDate, _element_Dialog_JumpToDate_Date );
        } else {

            if ( viewOpen === _element_View_FullDay ) {
                setSelectedDate( _element_View_FullDay_DateSelected, _element_Dialog_JumpToDate_Date );
            } else if ( viewOpen === _element_View_FullWeek ) {
                setSelectedDate( _element_View_FullWeek_DateSelected, _element_Dialog_JumpToDate_Date );
            } else if ( viewOpen === _element_View_FullYear ) {
                setSelectedDate( new Date( _element_View_FullYear_CurrentYear, 0, 1 ), _element_Dialog_JumpToDate_Date );
            } else if ( viewOpen === _element_View_Timeline ) {
                setSelectedDate( _element_View_Timeline_DateSelected, _element_Dialog_JumpToDate_Date );
            }
        }
    }

    function jumpToSelectedDate() {
        var viewOpen = getActiveView(),
            selectedDate = getSelectedDate( _element_Dialog_JumpToDate_Date );

        if ( selectedDate.getFullYear() >= _options.minimumYear && selectedDate.getFullYear() <= _options.maximumYear ) {
            if ( viewOpen === null ) {
                build( selectedDate );
                buildFullMonthViewPinUpImage();
            } else {
    
                if ( viewOpen === _element_View_FullDay ) {
                    showFullDayView( selectedDate );
                } else if ( viewOpen === _element_View_FullWeek ) {
                    showFullWeekView( selectedDate );
                } else if ( viewOpen === _element_View_FullYear ) {
                    showFullYearView( selectedDate.getFullYear() );
                } else if ( viewOpen === _element_View_Timeline ) {
                    showTimelineView( selectedDate );
                }
            }

            hideJumpToDateDialog();
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Tooltip
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildTooltip() {
        if ( _element_Tooltip === null ) {
            _element_Tooltip = createElement( "div", "calendar-tooltip" );
            _elements_InDocumentBody.push( _element_Tooltip );
            _parameter_Document.body.appendChild( _element_Tooltip );

            _element_Tooltip_TitleButtons_CloseButton = createElement( "div", "ib-close" );
            _element_Tooltip_TitleButtons_EditButton = createElement( "div", "ib-edit" );

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
        stopAndResetTimer( _timer_Name.showToolTip );
        hideTooltip();

        overrideShow = isDefined( overrideShow ) ? overrideShow : false;

        if ( _element_Tooltip.style.display !== "block" && _options.tooltipsEnabled ) {
            var toolTipDelay = isDefinedString( text ) ? _options.tooltipDelay : _options.eventTooltipDelay;

            startTimer( _timer_Name.showToolTip, function() {
                if ( overrideShow || ( !isDisabledBackgroundDisplayed() && !isFullMonthViewYearDropDownVisible() && !areContextMenusVisible() && _events_Dragged === null ) ) {
                    text = isDefined( text ) ? text : _string.empty;

                    _element_Tooltip.className = text === _string.empty ? "calendar-tooltip-event" : "calendar-tooltip";
                    
                    if ( isDefinedString( text ) ) {
                        setNodeText( _element_Tooltip, text );
                    } else {
                        
                        _element_Tooltip_EventDetails = eventDetails;
                        _element_Tooltip.innerHTML = _string.empty;
                        _element_Tooltip_Title.innerHTML = _string.empty;
                        _element_Tooltip_TotalTime.innerHTML = _string.empty;
                        _element_Tooltip_Url.innerHTML = _string.empty;

                        if ( !fireCustomTrigger( _options.events.onToolTipEventRender, _element_Tooltip, eventDetails ) ) {
                            _element_Tooltip.onmousemove = cancelBubble;
                            _element_Tooltip.appendChild( _element_Tooltip_TitleButtons );
                            _element_Tooltip.appendChild( _element_Tooltip_Title );
                            _element_Tooltip.appendChild( _element_Tooltip_Date );
                            _element_Tooltip.appendChild( _element_Tooltip_TotalTime );
    
                            updateToolbarButtonVisibleState( _element_Tooltip_TitleButtons_EditButton, _options.manualEditingEnabled );
    
                            if ( isDefinedStringAndSet( eventDetails.url ) ) {
                                var urlText = createSpanElement( _element_Tooltip_Url, getShortUrlString( eventDetails.url ), "url-text" );
                                addNode( _element_Tooltip, _element_Tooltip_Url );
    
                                urlText.onclick = function( e ) {
                                    cancelBubble( e );
                                    openEventUrl( eventDetails.url );
                                    hideTooltip();
                                };
    
                            } else {
                                _element_Tooltip_Url.innerHTML = _string.empty;
                                _element_Tooltip_Url.onclick = null;
                                removeNode( _element_Tooltip, _element_Tooltip_Url );
                            }
    
                            var repeatEvery = getNumber( eventDetails.repeatEvery );
                            if ( repeatEvery > _enum_RepeatType.never ) {
                                var icon = createElement( "div", "ib-refresh-medium ib-no-hover ib-no-active" );
                                icon.style.borderColor = _element_Tooltip_Title.style.color;
                                _element_Tooltip_Title.appendChild( icon );
                            }
                            
                            _element_Tooltip_Title.innerHTML += stripHTMLTagsFromText( eventDetails.title );
    
                            if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _enum_RepeatType.never ) {
                                setNodeText( _element_Tooltip_Repeats, _options.repeatsText.replace( ":", _string.empty ) + _string.space + getRepeatsText( eventDetails.repeatEvery ) );
                                addNode( _element_Tooltip, _element_Tooltip_Repeats );
                            } else {
                                _element_Tooltip_Repeats.innerHTML = _string.empty;
                                removeNode( _element_Tooltip, _element_Tooltip_Repeats );
                            }
    
                            if ( isDefinedStringAndSet( eventDetails.location ) ) {
                                setNodeText( _element_Tooltip_Location, eventDetails.location );
                                addNode( _element_Tooltip, _element_Tooltip_Location );
                            } else {
                                _element_Tooltip_Location.innerHTML = _string.empty;
                                removeNode( _element_Tooltip, _element_Tooltip_Location );
                            }
        
                            if ( isDefinedStringAndSet( eventDetails.description ) ) {
                                setNodeText( _element_Tooltip_Description, eventDetails.description );
                                addNode( _element_Tooltip, _element_Tooltip_Description );
                            } else {
                                _element_Tooltip_Description.innerHTML = _string.empty;
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
    
                            if ( _element_Tooltip_TotalTime.innerHTML === _string.empty ) {
                                _element_Tooltip.removeChild( _element_Tooltip_TotalTime );
                            }
                        }
                    }

                    showElementAtMousePosition( e, _element_Tooltip );
                }

            }, toolTipDelay, false );
        }
    }

    function hideTooltip() {
        stopAndResetTimer( _timer_Name.showToolTip );

        if ( isTooltipVisible() ) {
            _element_Tooltip.style.display = "none";
            _element_Tooltip_EventDetails = null;
            _element_Tooltip.onmousemove = null;
        }
    }

    function isTooltipVisible() {
        return doesTimerExist( _timer_Name.showToolTip ) || ( _element_Tooltip !== null && _element_Tooltip.style.display === "block" );
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
     * Notification Pop-Up
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildNotificationPopUp() {
        if ( _element_Notification === null && !_element_Mode_DatePicker_Enabled ) {
            _element_Notification = createElement( "div", "calendar-notification" );
            _elements_InDocumentBody.push( _element_Notification );
            _parameter_Document.body.appendChild( _element_Notification );
        }
    }

    function showNotificationPopUp( text, success ) {
        if ( _element_Notification !== null && _options.popUpNotificationsEnabled ) {
            success = isDefined( success ) ? success : true;

            stopAndResetTimer( _timer_Name.hideNotification );
    
            _element_Notification.innerHTML = _string.empty;
    
            var message = createElement( "div", success ? "success" : "error" );
            _element_Notification.appendChild( message );

            _element_Notification.style.display = "block";
    
            setNodeText( message, text );
            buildToolbarButton( message, "ib-close-icon", _options.closeTooltipText, hideNotificationPopUp );
    
            startTimer( _timer_Name.hideNotification, function() {
                hideNotificationPopUp();
            }, 5000, false );
        }
    }

    function hideNotificationPopUp() {
        _element_Notification.style.display = "none";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Day Name Headers
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildViewDayNamesHeader( container, reverseHeaders ) {
        if ( container !== null ) {
            reverseHeaders = isDefined( reverseHeaders ) ? reverseHeaders : true;

            var headerNamesLength = _options.dayHeaderNames.length;
    
            container.innerHTML = _string.empty;
    
            if ( _options.startOfWeekDay === _enum_Day.saturday || _options.startOfWeekDay === _enum_Day.sunday ) {
                buildViewDayNamesHeaderSection( container, _options.startOfWeekDay, headerNamesLength );
                buildViewDayNamesHeaderSection( container, 0, _options.startOfWeekDay );
            } else {
                buildViewDayNamesHeaderSection( container, 0, headerNamesLength );
            }
    
            if ( _options.reverseOrderDaysOfWeek && reverseHeaders ) {
                reverseElementsOrder( container );
            }
        }
    }

    function buildViewDayNamesHeaderSection( container, startIndex, endIndex ) {
        for ( var headerNameIndex = startIndex; headerNameIndex < endIndex; headerNameIndex++ ) {
            if ( _options.visibleDays.indexOf( headerNameIndex ) > _value.notFound ) {
                buildViewDayNamesHeaderDay( container, headerNameIndex );
            }
        }
    }

    function buildViewDayNamesHeaderDay( container, headerNameIndex ) {
        var headerName = _options.dayHeaderNames[ headerNameIndex ],
            header = createElement( "div", getCellName() );

        setNodeText( header, headerName );

        container.appendChild( header );

        header.oncontextmenu = function( e ) {
            showDayHeaderContextMenu( e, headerNameIndex );
        };

        header.ondblclick = function( e ) {
            toggleSingleDayView( headerNameIndex );
        };
    }

    function toggleSingleDayView( headerNameIndex ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            var updateDisplay = false;

            if ( _element_Calendar_PreviousDaysVisibleBeforeSingleDayView.length === 0 ) {
                var visibleDaysLength = _options.visibleDays.length;

                if ( visibleDaysLength > 1 ) {
                    for ( var visibleDayIndex = 0; visibleDayIndex < visibleDaysLength; visibleDayIndex++ ) {
                        _element_Calendar_PreviousDaysVisibleBeforeSingleDayView.push( _options.visibleDays[ visibleDayIndex ] );
                    }
        
                    _options.visibleDays = [];
                    _options.visibleDays.push( headerNameIndex );

                    updateDisplay = true;
                }
            } else {
    
                _options.visibleDays = [];
    
                var originalVisibleDaysLength = _element_Calendar_PreviousDaysVisibleBeforeSingleDayView.length;
    
                for ( var previousVisibleDayIndex = 0; previousVisibleDayIndex < originalVisibleDaysLength; previousVisibleDayIndex++ ) {
                    _options.visibleDays.push( _element_Calendar_PreviousDaysVisibleBeforeSingleDayView[ previousVisibleDayIndex ] );
                }
    
                _element_Calendar_PreviousDaysVisibleBeforeSingleDayView = [];

                updateDisplay = true;
            }
    
            if ( updateDisplay ) {
                _initialized = false;
    
                fireCustomTrigger( _options.events.onOptionsUpdated, _options );
                build( _calendar_CurrentDate, true, true );
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Views - Management
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function showView( element ) {
        if ( getActiveView() !== element ) {
            removeViewOpened( element, false );

            _element_View_Opened.push( element );
            _element_View_LastZIndex++;
    
            if ( !isViewVisible( element ) ) {
                element.className += " view-shown";
            }
            
            element.style.zIndex = _element_View_LastZIndex;
            
            hideSearchDialog();
            fireViewChangeCustomTrigger();
        }
    }

    function hideView( element, triggerCustomTrigger ) {
        if ( isViewVisible( element ) ) {
            element.className = element.className.replace( " view-shown", _string.empty );

            removeViewOpened( element, triggerCustomTrigger );

            if ( _element_View_Opened.length === 0 ) {
                _element_View_LastZIndex = 0;
            }
        }
    }

    function removeViewOpened( element, triggerCustomTrigger ) {
        triggerCustomTrigger = isDefined( triggerCustomTrigger ) ? triggerCustomTrigger : true;

        var viewsOpened = [],
            viewsOpenedLength = _element_View_Opened.length;

        for ( var viewOpenedIndex = 0; viewOpenedIndex < viewsOpenedLength; viewOpenedIndex++ ) {
            var view = _element_View_Opened[ viewOpenedIndex ];

            if ( isDefined( view ) && view.id !== element.id ) {
                viewsOpened.push( view );
            }
        }

        _element_View_Opened = [].slice.call( viewsOpened );

        if ( triggerCustomTrigger ) {
            fireViewChangeCustomTrigger();
        }
    }

    function isViewVisible( element ) {
        return isDefined( element ) && element.className && element.className.indexOf( "view-shown" ) > _value.notFound;
    }

    function closeLastViewOpened( triggerCustomTrigger ) {
        triggerCustomTrigger = isDefined( triggerCustomTrigger ) ? triggerCustomTrigger : true;

        var viewElement = getActiveView();

        hideView( viewElement, !triggerCustomTrigger );

        if ( _element_View_Opened.length === 0 ) {
            _element_View_LastZIndex = 0;
        }

        if ( triggerCustomTrigger ) {
            fireViewChangeCustomTrigger();
        }
    }

    function getActiveView() {
        return _element_View_Opened.length > 0 ? _element_View_Opened[ _element_View_Opened.length - 1 ] : null;
    }

    function closeAllViews() {
        while ( _element_View_Opened.length > 0 ) {
            closeLastViewOpened( false );
        }

        fireViewChangeCustomTrigger();
    }

    function fireViewChangeCustomTrigger( triggerCustomTrigger ) {
        triggerCustomTrigger = isDefined( triggerCustomTrigger ) ? triggerCustomTrigger : true;

        var viewOpen = getActiveView(),
            viewName = null;

        if ( viewOpen === null ) {
            viewName = _element_View_Name.fullMonth;
        } else if ( viewOpen === _element_View_FullDay ) {
            viewName = _element_View_Name.fullDay;
        } else if ( viewOpen === _element_View_FullWeek ) {
            viewName = _element_View_Name.fullWeek;
        } else if ( viewOpen === _element_View_FullYear ) {
            viewName = _element_View_Name.fullYear;
        } else if ( viewOpen === _element_View_Timeline ) {
            viewName = _element_View_Name.timeline;
        } else if ( viewOpen === _element_View_AllEvents ) {
            viewName = _element_View_Name.allEvents;
        }

        if ( triggerCustomTrigger && isDefinedString( viewName ) ) {
            fireCustomTrigger( _options.events.onViewChange, viewName );
        }

        return viewName;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Views - Management - Positioning
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildHoursForTimeBasedView( container, loopDateMinutesIncrease ) {
        var loopDateToday = new Date(),
            loopDate = new Date();

        loopDate.setHours( 0, 0, 0, 0 );

        if ( 60 % loopDateMinutesIncrease !== 0 ) {
            loopDateMinutesIncrease = 30;
        }

        while ( doDatesMatch( loopDate, loopDateToday ) ) {
            var row = createElement( "div", "hour" );
            container.appendChild( row );
            
            var hourText1 = createElement( "div", "hour-text" );
            hourText1.innerText = getTimeForDisplay( new Date( loopDate ) );
            row.appendChild( hourText1 );
            
            loopDate = addMinutesToDate( loopDate, loopDateMinutesIncrease );
            
            var hourText2 = createElement( "div", "hour-text" );
            hourText2.innerText = getTimeForDisplay( new Date( loopDate ) );
            row.appendChild( hourText2 );
            
            loopDate = addMinutesToDate( loopDate, loopDateMinutesIncrease );
        }
    }

    function getHourMinutesFromMousePositionClick( e, container ) {
        var contentHoursOffset = getOffset( container ),
            pixelsPerMinute = getPixelsPerMinuteForHeight( container ),
            minutesFromTop = _parameter_Math.floor( ( e.pageY - ( contentHoursOffset.top ) ) / pixelsPerMinute ),
            hoursMinutes = getHoursAndMinutesFromMinutes( minutesFromTop );

        return hoursMinutes;
    }

    function getPixelsPerMinuteForHeight( container ) {
        var contentHoursHeight = container.offsetHeight,
            pixelsPerMinute = contentHoursHeight / 1440;

        return pixelsPerMinute;
    }

    function getPixelsPerMinuteForWidth( container ) {
        var contentHoursHeight = container.offsetWidth,
            pixelsPerMinute = contentHoursHeight / 1440;

        return pixelsPerMinute;
    }

    function setEventPositionAndGetScrollTop( contents, container, displayDate, event, eventDetails ) {
        var contentHeight = container.offsetHeight,
            pixelsPerMinute = getPixelsPerMinuteForHeight( container ),
            minutesTop = 0,
            minutesHeight = null;

        if ( !eventDetails.isAllDay ) {
            var repeatEvery = getNumber( eventDetails.repeatEvery );

            if ( doDatesMatch( eventDetails.from, displayDate ) || repeatEvery > _enum_RepeatType.never ) {
                minutesTop = pixelsPerMinute * getMinutesIntoDay( eventDetails.from );
            }

            if ( doDatesMatch( eventDetails.to, displayDate ) || repeatEvery > _enum_RepeatType.never ) {
                minutesHeight = ( pixelsPerMinute * getMinutesIntoDay( eventDetails.to ) ) - minutesTop;
            } else {
                minutesHeight = contentHeight;
            }

            minutesHeight -= _options.spacing * 2;
        }

        if ( minutesTop <= _options.spacing ) {
            minutesTop += _options.spacing;
            minutesHeight -= _options.spacing;
        }

        event.style.top = minutesTop + "px";

        if ( minutesHeight !== null ) {
            event.style.height = minutesHeight + "px";
        }

        if ( event.offsetTop + event.offsetHeight > ( contentHeight - _options.spacing ) ) {
            var newHeight = ( ( contentHeight - event.offsetTop ) - ( _options.spacing * 3 ) ) + "px";

            event.style.height = newHeight;
            event.style.maxHeight = newHeight;

        } else {
            event.style.maxHeight = ( contentHeight - ( event.offsetTop + ( _options.spacing * 2 ) ) - pixelsPerMinute ) + "px";
        }

        var scrollTop = minutesTop + ( contents.offsetHeight / 2 );
        if ( scrollTop <= contents.offsetHeight ) {
            scrollTop = 0;
        }

        return scrollTop;
    }

    function setEventPositionAndGetScrollLeft( contents, displayDate, event, eventDetails ) {
        var contentWidth = contents.scrollWidth,
            pixelsPerMinute = getPixelsPerMinuteForWidth( contents ),
            minutesLeft = 0,
            minutesWidth = null,
            repeatEvery = getNumber( eventDetails.repeatEvery );

        if ( doDatesMatch( eventDetails.from, displayDate ) || repeatEvery > _enum_RepeatType.never ) {
            minutesLeft = pixelsPerMinute * getMinutesIntoDay( eventDetails.from );
        }

        if ( doDatesMatch( eventDetails.to, displayDate ) || repeatEvery > _enum_RepeatType.never ) {
            minutesWidth = ( pixelsPerMinute * getMinutesIntoDay( eventDetails.to ) ) - minutesLeft;
        } else {
            minutesWidth = contentWidth;
        }

        minutesWidth -= _options.spacing * 2;

        if ( minutesLeft <= _options.spacing ) {
            minutesLeft += _options.spacing;
            minutesWidth -= _options.spacing;
        }

        event.style.left = minutesLeft + "px";

        if ( minutesWidth !== null ) {
            event.style.width = minutesWidth + "px";
        }

        if ( event.offsetLeft + event.offsetWidth > ( contentWidth - _options.spacing ) ) {
            var newWidth = ( ( contentWidth - event.offsetLeft ) - ( _options.spacing * 4 ) ) + "px";

            event.style.width = newWidth;
            event.style.maxWidth = newWidth;

        } else {
            event.style.maxWidth = ( contentWidth - ( event.offsetLeft + ( _options.spacing * 2 ) ) - pixelsPerMinute ) + "px";
        }

        return ( minutesLeft - _options.spacing );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Views - Management - Time Arrow
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function updateViewTimeArrowPosition( date, elementView, elementTimeArrow, container, setting ) {
        var topPosition = 0;

        if ( elementTimeArrow !== null ) {
            if ( isTimeArrowVisible( date, elementView, setting ) ) {
                var pixelsPerMinute = getPixelsPerMinuteForHeight( container ),
                    top = pixelsPerMinute * getMinutesIntoDay( new Date() );
    
                elementTimeArrow.style.display = "block";
                elementTimeArrow.style.top = ( top - ( elementTimeArrow.offsetHeight / 2 ) ) + "px";
                topPosition = top;
    
            } else {
                elementTimeArrow.style.display = "none";
            }
        }

        return topPosition;
    }

    function isTimeArrowVisible( date, elementView, setting ) {
        return isDateToday( date ) && isViewVisible( elementView ) && setting ;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Views - Management - Overlapping Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function increaseEventZIndex( e, event ) {
        cancelBubble( e );

        var zIndex = getStyleValueByName( event, "z-index", false );
        if ( zIndex === null || zIndex === "auto" ) {
            zIndex = 1;
        } else {
            zIndex = parseInt( zIndex ) + 1;
        }

        event.style.zIndex = zIndex.toString();
    }

    function adjustViewEventsThatOverlap( container ) {
        var eventsElements = container.getElementsByClassName( "event" ),
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

                            if ( event1Position === _string.empty && event2Position === _string.empty ) {
                                setOverlappingEventWidth( event1 );
                                setOverlappingEventWidth( event2 );
                                setOverlappingEventLeft( event2, event1 );

                                event1.setAttribute( "event-position", "left" );
                                event2.setAttribute( "event-position", "right" );
                            
                            } else if ( event1Position === _string.empty && event2Position === "right" ) {
                                setOverlappingEventWidth( event1 );

                                event1.setAttribute( "event-position", "left" );
                                event2.setAttribute( "event-position", "right" );
                            
                            } else if ( event1Position === _string.empty && event2Position === "left" ) {
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
     * Views - Management - Moving/Resizing Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function onViewEventDragStart( e, event, eventDetails, fromDate ) {
        var offset = getOffset( event );

        _element_View_Event_Dragged = event;
        _element_View_Event_Dragged_OffsetTop = event.offsetTop;
        _element_View_Event_Dragged_EventDetails = eventDetails;
        _element_View_Event_Dragged_ClickOffset = offset.top - e.pageY;
        _element_View_Event_Dragged_FromDate = fromDate;
    }

    function onViewEventDropped( e, dateDropped, container ) {
        cancelBubble( e );

        if ( _element_View_Event_Dragged === null ) {
            if ( e.dataTransfer.files.length === 0 ) {
                dropEventsFromOtherCalendar( e, dateDropped.getFullYear(), dateDropped.getMonth(), dateDropped.getDate() );
            } else {
                dropFileOnDisplay( e );
            }
        } else {

            if ( !doDatesMatch( _element_View_Event_Dragged_FromDate, dateDropped ) ) {
                _events_Dragged = _element_View_Event_Dragged_EventDetails;
                _events_Dragged_DateFrom = _element_View_Event_Dragged_FromDate;

                dropEventOnDay( e, dateDropped.getFullYear(), dateDropped.getMonth(), dateDropped.getDate() );
            }

            var pixelsPerMinute = getPixelsPerMinuteForHeight( container ),
                offset = getOffset( container ),
                top = ( _parameter_Math.abs( e.pageY ) - offset.top ) + _element_View_Event_Dragged_ClickOffset,
                difference = top - _element_View_Event_Dragged_OffsetTop,
                differenceMinutes = difference / pixelsPerMinute;

            _element_View_Event_Dragged_EventDetails.from = addMinutesToDate( _element_View_Event_Dragged_EventDetails.from, differenceMinutes );
            _element_View_Event_Dragged_EventDetails.to = addMinutesToDate( _element_View_Event_Dragged_EventDetails.to, differenceMinutes );
            
            storeEventsInLocalStorage();
            fireCustomTrigger( _options.events.onEventUpdated, _element_View_Event_Dragged_EventDetails );
            showNotificationPopUp( _options.eventUpdatedText.replace( "{0}", _element_View_Event_Dragged_EventDetails.title ) );
            refreshOpenedViews();

            _element_View_Event_Dragged = null;
            _element_View_Event_Dragged_EventDetails = null;
            _element_View_Event_Dragged_ClickOffset = 0;
            _element_View_Event_Dragged_OffsetTop = 0;
        }
    }

    function onMouseUpResizeTracking( e ) {
        cancelBubble( e );

        if ( _options.manualEditingEnabled ) {
            var container = null,
                events = null,
                eventsLength = 0;

            if ( isViewVisible( _element_View_FullDay ) ) {
                container = _element_View_FullDay_Contents_Hours;
                events = _element_View_FullDay_Events_Dragged_Sizes;
                eventsLength = events.length;
            } else if ( isViewVisible( _element_View_FullWeek ) ) {
                container = _element_View_FullWeek_Contents_Hours;
                events = _element_View_FullWeek_Events_Dragged_Sizes;
                eventsLength = events.length;
            }

            if ( container !== null && eventsLength > 0 ) {
                var pixelsPerMinute = getPixelsPerMinuteForHeight( container ),
                    eventsResized = false;

                for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                    var eventSizeDetails = events[ eventIndex ];

                    if ( eventSizeDetails.height !== eventSizeDetails.eventElement.offsetHeight ) {
                        var difference = eventSizeDetails.eventElement.offsetHeight - eventSizeDetails.height,
                            differenceMinutes = difference / pixelsPerMinute;

                        eventSizeDetails.height = eventSizeDetails.eventElement.offsetHeight;
                        eventSizeDetails.eventDetails.to = addMinutesToDate( eventSizeDetails.eventDetails.to, differenceMinutes );
                        eventsResized = true;

                        fireCustomTrigger( _options.events.onEventUpdated, eventSizeDetails.eventDetails );
                        showNotificationPopUp( _options.eventUpdatedText.replace( "{0}", eventSizeDetails.eventDetails.title ) );
                    }
                }

                if ( eventsResized ) {
                    storeEventsInLocalStorage();
                    refreshOpenedViews();
                }
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full-Screen Mode
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function fullScreenModeHeaderDoubleClick() {
        if ( !_element_Calendar_FullScreenModeOn ) {
            turnOnFullScreenMode();
        } else {
            turnOffFullScreenMode();
        }
    }

    function turnOnFullScreenMode() {
        if ( !_element_Calendar_FullScreenModeOn && _options.fullScreenModeEnabled ) {
            forceTurnOnFullScreenMode();
            fireCustomTrigger( _options.events.onFullScreenModeChanged, true );
        }
    }

    function turnOffFullScreenMode() {
        if ( _element_Calendar_FullScreenModeOn && _options.fullScreenModeEnabled ) {
            _element_Calendar_FullScreenModeOn = false;
            _element_Calendar.className = _element_Calendar.className.replace( " full-screen-view", _string.empty );
            _element_Calendar.style.cssText = _element_Calendar_FullScreenModeCachedStyled;

            updateFullScreenModeExpandButtons( "ib-arrow-expand-left-right", _options.enableFullScreenTooltipText );
            refreshOpenedViews();
            fireCustomTrigger( _options.events.onFullScreenModeChanged, false );
        }
    }

    function forceTurnOnFullScreenMode() {
        _element_Calendar_FullScreenModeCachedStyled = _element_Calendar.style.cssText;
        _element_Calendar_FullScreenModeOn = true;
        _element_Calendar.className += " full-screen-view";
        _element_Calendar.removeAttribute( "style" );

        updateFullScreenModeExpandButtons( "ib-arrow-contract-left-right", _options.disableFullScreenTooltipText );
        refreshOpenedViews();
    }

    function updateFullScreenModeExpandButtons( className, tooltipText ) {
        setElementClassName( _element_View_FullMonth_TitleBar_FullScreenButton, className );
        setElementClassName( _element_View_FullDay_FullScreenButton, className );
        setElementClassName( _element_View_AllEvents_FullScreenButton, className );
        setElementClassName( _element_View_FullWeek_FullScreenButton, className );
        setElementClassName( _element_View_FullYear_FullScreenButton, className );
        setElementClassName( _element_View_Timeline_FullScreenButton, className );

        addToolTip( _element_View_FullMonth_TitleBar_FullScreenButton, tooltipText );
        addToolTip( _element_View_FullDay_FullScreenButton, tooltipText );
        addToolTip( _element_View_AllEvents_FullScreenButton, tooltipText );
        addToolTip( _element_View_FullWeek_FullScreenButton, tooltipText );
        addToolTip( _element_View_FullYear_FullScreenButton, tooltipText );
        addToolTip( _element_View_Timeline_FullScreenButton, tooltipText );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Holidays
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getHolidaysText( date ) {
        var result = null;

        if ( _options.showHolidays ) {
            var holidayTextItems = [],
                holidayTextItemsAnyCase = [],
                holidaysLength = _options.holidays.length;

            for ( var holidayIndex = 0; holidayIndex < holidaysLength; holidayIndex++ ) {
                var holiday = _options.holidays[ holidayIndex ],
                    holidayText = getString( holiday.title, _string.empty );

                if ( isHolidayDateValidForDate( holiday, date ) && holidayText !== _string.empty && holidayTextItemsAnyCase.indexOf( holidayText.toLowerCase() ) ) {
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
                    holidayText = getString( holiday.title, _string.empty ),
                    holidayBackgroundColor = getString( holiday.backgroundColor, _string.empty ),
                    holidayTextColor = getString( holiday.textColor, _string.empty );

                if ( isHolidayDateValidForDate( holiday, date ) && holidayText !== _string.empty && holidayTextItemsAnyCase.indexOf( holidayText.toLowerCase() ) ) {
                    addHolidayText( holiday, dayElement, holidayText, dayMutedClass );

                    if ( holidayBackgroundColor !== _string.empty ) {
                        dayElement.style.setProperty( "background-color", holidayBackgroundColor, "important" );
                    }

                    if ( holidayTextColor !== _string.empty ) {
                        dayElement.style.setProperty( "color", holidayTextColor, "important" );
                    }

                    holidayTextItemsAnyCase.push( holidayText.toLowerCase() );
                }
            }
        }
    }

    function addHolidayText( holiday, dayElement, holidayText, dayMutedClass ) {
        var className = isDefinedFunction( holiday.onClick ) || isDefinedString( holiday.onClickUrl ) ? "holiday-link" : "holiday",
            onClickEvent = holiday.onClick;
        
        if ( isDefinedString( holiday.onClickUrl ) ) {
            onClickEvent = function() {
                _parameter_Window.open( holiday.onClickUrl, _options.urlWindowTarget );
            };
        }

        createSpanElement( dayElement, holidayText, className + dayMutedClass, onClickEvent, true, true );
    }

    function isHolidayDateValidForDate( holiday, date ) {
        var day = getNumber( holiday.day ),
            month = getNumber( holiday.month ),
            year = getNumber( holiday.year ),
            valid = false;

        if ( year === 0 && day === date.getDate() && month === date.getMonth() + 1 ) {
            valid = true;
        } else if ( year > 0 && day === date.getDate() && month === date.getMonth() + 1 && year === date.getFullYear() ) {
            valid = true;
        }

        return valid;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Getting/Remove Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getAllEvents() {
        var events = [];
    
        getAllEventsFunc( function( eventDetails ) {
            events.push( eventDetails );
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
        addNode( _parameter_Document.body, _element_Calendar_DisabledBackground );

        var onNoEvent = function() {
            removeNode( _parameter_Document.body, _element_Calendar_DisabledBackground );
        };

        var onYesEvent = function() {
            var eventsRemoved = 0;

            onNoEvent();

            getAllEventsFunc( function( eventDetails ) {
                var repeatEvery = getNumber( eventDetails.repeatEvery );
                if ( repeatEvery === _enum_RepeatType.never && compareFunc( eventDetails.from, date ) ) {
                    _that.removeEvent( eventDetails.id, false );
                    eventsRemoved++;
                }
            } );

            storeEventsInLocalStorage();
            showNotificationPopUp( _options.eventsRemovedText.replace( "{0}", eventsRemoved ) );
            refreshViews();
        };

        showMessageDialog( _options.confirmEventsRemoveTitle, _options.confirmEventsRemoveMessage, onYesEvent, onNoEvent );
    }

    function getAdjustedAllDayEvent( eventDetails ) {
        var adjustedEvent = eventDetails;

        if ( adjustedEvent.isAllDay ) {
            adjustedEvent.from = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 0, 0 );
            adjustedEvent.to = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 23, 59 );
        }

        return adjustedEvent;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Event Types
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function setEventTypeInputCheckedStates( selectedEventType ) {
        selectedEventType = isDefined( selectedEventType ) && _options_EventType.hasOwnProperty( selectedEventType ) ? selectedEventType : 0;

        for ( var eventType in _options_EventType ) {
            if ( _options_EventType.hasOwnProperty( eventType ) && isDefined( _options_EventType[ eventType ].eventEditorInput ) ) {
                _options_EventType[ eventType ].eventEditorInput.checked = false;
            }
        }

        if ( isDefined( _options_EventType[ selectedEventType ].eventEditorInput ) ) {
            _options_EventType[ selectedEventType ].eventEditorInput.checked = true;
        }
    }

    function setEventTypeInputDisabledStates( disabled ) {
        for ( var eventType in _options_EventType ) {
            if ( _options_EventType.hasOwnProperty( eventType ) && isDefined( _options_EventType[ eventType ].eventEditorInput ) ) {
                _options_EventType[ eventType ].eventEditorInput.disabled = disabled;
            }
        }
    }

    function getEventTypeInputChecked() {
        var result = 0;

        for ( var eventType in _options_EventType ) {
            if ( _options_EventType.hasOwnProperty( eventType ) && isDefined( _options_EventType[ eventType ].eventEditorInput ) && _options_EventType[ eventType ].eventEditorInput.checked ) {
                result = parseInt( eventType );
                break;
            }
        }

        return result;
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

    function getWeekdayNumber( date ) {
        return date.getDay() - 1 < 0 ? 6 : date.getDay() - 1;
    }

    function getWeekStartEndDates( date ) {
        date = isDefined( date ) ? new Date( date ) : new Date();

        if ( date.getDay() > 0 ) {
            date.setDate( date.getDate() - date.getDay() );
        } else {

            if ( _options.startOfWeekDay === _enum_Day.monday ) {
                date.setDate( date.getDate() - 7 );
            }
        }

        if ( _options.startOfWeekDay === _enum_Day.monday ) {
            date.setDate( date.getDate() + 1 );
        } else if ( _options.startOfWeekDay === _enum_Day.saturday ) {
            date.setDate( date.getDate() - 1 );
        }

        var weekStartDate = new Date( date ),
            weekEndDate = new Date( date );

        weekStartDate.setHours( 0, 0, 0, 0 );
        weekEndDate.setDate( weekEndDate.getDate() + 6 );
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
            differenceTime = _parameter_Math.abs( toDate - fromDate ),
            differenceDays = _parameter_Math.ceil( differenceTime / ( 1000 * 60 * 60 * 24 ) ); 
        
        return differenceDays;
    }

    function getWeekNumber( date ) {
        var firstDay = new Date( date.getFullYear(), 0, 1 ),
            weekNumber = _parameter_Math.ceil( ( ( ( date - firstDay ) / 86400000 ) + firstDay.getDay() + 1 ) / 7 );
        
        if ( firstDay.getDay() > 4 ) {
            weekNumber--;
        }
        
        return weekNumber;
    }

    function isWeekendDay( date ) {
        return _options.weekendDays.indexOf( date.getDay() ) >= 0;
    }

    function isWorkingDay( date ) {
        return _options.workingDays.indexOf( getWeekdayNumber( date ) ) >= 0;
    }

    function isIndexWorkingDay( index ) {
        return _options.workingDays.indexOf( index ) >= 0;
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
            delta = _parameter_Math.abs( date2 - date1 ) / 1000;

        var days = _parameter_Math.floor( delta / 86400 );
        delta -= days * 86400;

        if ( days > 0 ) {
            text.push( days.toString() + _string.space + ( days === 1 ? _options.dayText : _options.daysText ) );
        }

        var hours = _parameter_Math.floor( delta / 3600 ) % 24;
        delta -= hours * 3600;

        if ( hours > 0 ) {
            text.push( hours.toString() + _string.space + ( hours === 1 ? _options.hourText : _options.hoursText ) );
        }

        var minutes = _parameter_Math.floor( delta / 60 ) % 60;

        if ( minutes > 0 ) {
            text.push( minutes.toString() + _string.space + ( minutes === 1 ? _options.minuteText : _options.minutesText ) );
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

        if ( input.value !== _string.empty ) {
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
            result = new Date( result.getTime() + _parameter_Math.abs( result.getTimezoneOffset() * 60000 ) );
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
            remainingHours = _parameter_Math.floor( hours ),
            remainingMinutes = _parameter_Math.round( ( hours - remainingHours ) * 60 );

        return [ remainingHours, remainingMinutes ];
    }

    function addMinutesToDate( date, minutes ) {
        return new Date( date.getTime() + minutes * 60000 );
    }

    function getCustomFormattedDateText( dateFormat, date ) {
        var result = dateFormat,
            weekDayNumber = getWeekdayNumber( date );

        result = result.replace( "{dddd}", _options.dayNames[ weekDayNumber ] );
        result = result.replace( "{ddd}", _options.dayNamesAbbreviated[ weekDayNumber ] );
        result = result.replace( "{dd}", padNumber( date.getDate() ) );
        result = result.replace( "{d}", date.getDate() );

        result = result.replace( "{o}", getDayOrdinal( date.getDate() ) );

        result = result.replace( "{mmmm}", _options.monthNames[ date.getMonth() ] );
        result = result.replace( "{mmm}", _options.monthNamesAbbreviated[ date.getMonth() ] );
        result = result.replace( "{mm}", padNumber( date.getMonth() + 1 ) );
        result = result.replace( "{m}", date.getMonth() + 1 );

        result = result.replace( "{yyyy}", date.getFullYear() );
        result = result.replace( "{yyy}", date.getFullYear().toString().substring( 1 ) );
        result = result.replace( "{yy}", date.getFullYear().toString().substring( 2 ) );
        result = result.replace( "{y}", parseInt( date.getFullYear().toString().substring( 2 ) ).toString() );

        return result;
    }

    function getStartOfWeekDayNumber( dayNumber ) {
        if ( _options.startOfWeekDay === _enum_Day.saturday || _options.startOfWeekDay === _enum_Day.sunday ) {
            dayNumber += ( 7 - _options.startOfWeekDay );
        }

        return dayNumber;
    }

    function getToTimeWithPassedDate( eventDetails, date ) {
        var repeatEvery = getNumber( eventDetails.repeatEvery ),
            toDate = new Date( eventDetails.to );
        
        if ( repeatEvery > _enum_RepeatType.never ) {
            var newCurrentDate = new Date( date );
            newCurrentDate.setHours( toDate.getHours(), toDate.getMinutes() );

            toDate = newCurrentDate;
        }

        return toDate;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Date/Time Displays
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getTimeToTimeDisplay( fromDate, toDate ) {
        return getTimeForDisplay( fromDate ) + _string.space + _options.toTimeText + _string.space + getTimeForDisplay( toDate );
    }

    function getTimeForDisplay( date, useAmPm ) {
        var result;

        useAmPm = isDefined( useAmPm ) ? useAmPm : _options.useAmPmForTimeDisplays;

        if ( _options.useAmPmForTimeDisplays && useAmPm ) {
            var hours = date.getHours(),
                minutes = date.getMinutes(),
                amPmText = "am";

            if ( hours > 12 ) {
                hours = hours - 12;
                amPmText = "pm";
            } else if ( hours === 12 ) {
                amPmText = "pm";
            } else if ( hours === 0 ) {
                hours = 12;
            }

            result = hours;

            if ( minutes > 0 ) {
                result += ":" + padNumber( date.getMinutes() );
            }

            result += amPmText;

        } else {
            result = padNumber( date.getHours() ) + ":" + padNumber( date.getMinutes() );
        }

        return result;
    }

    function buildDateTimeToDateTimeDisplay( container, fromDate, toDate ) {
        container.innerHTML = _string.empty;

        buildDateTimeDisplay( container, fromDate );
        createSpanElement( container, _string.space + _options.toTimeText + _string.space );
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
        createSpanElement( container, _string.space + _options.monthNames[ date.getMonth() ] );

        if ( addYear ) {
            createSpanElement( container, _string.space + date.getFullYear() );
        }

        if ( addTime ) {
            createSpanElement( container, _string.space + getTimeForDisplay( date ) );
        }
    }

    function buildDayDisplay( container, date, beforeText, afterText ) {
        if ( isDefined( beforeText ) ) {
            createSpanElement( container, beforeText );
        }

        createSpanElement( container, date.getDate() );

        if ( _options.showDayNumberOrdinals ) {
            var ordinal = getDayOrdinal( date.getDate() );

            if ( isDefined( ordinal ) ) {
                var sup = createElement( "sup" );
                sup.innerText = ordinal;
                container.appendChild( sup );
            }
        }

        if ( isDefined( afterText ) ) {
            createSpanElement( container, afterText );
        }
    }

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Drag & Drop
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function makeEventDraggable( event, eventDetails, dragFromDate, container ) {
        if ( !isEventLocked( eventDetails ) && _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
            var draggedFromDate = new Date( dragFromDate ),
                isDateWeekendDay = isWeekendDay( draggedFromDate ),
                dragDisabledClass = !isDateWeekendDay ? " drag-not-allowed" : " drag-not-allowed-weekend-day";

            event.setAttribute( "draggable", true );
            
            event.ondragstart = function( e ) {
                fireCustomTrigger( _options.events.onEventDragStart, eventDetails );

                e.dataTransfer.setData( "event_details", _parameter_Json.stringify( eventDetails ) );

                _events_Dragged_DateFrom = draggedFromDate;
                _events_Dragged = eventDetails;

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
                fireCustomTrigger( _options.events.onEventDragStop, _events_Dragged );

                _events_Dragged_DateFrom = null;
                _events_Dragged = null;

                if ( isDefined( container ) ) {
                    container.className = container.className.replace( dragDisabledClass, _string.empty );

                    makeAreaDroppable( container, draggedFromDate.getFullYear(), draggedFromDate.getMonth(), draggedFromDate.getDate() );
                }

                updateContainerClassChildren( "cell", function( element ) {
                    element.className = element.className.replace( " prevent-pointer-events", _string.empty );
                }, event );
                
                updateContainerClassChildren( "events", function( element ) {
                    element.className = element.className.replace( " prevent-pointer-events", _string.empty );
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
                cancelBubble( e );
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

        if ( _events_Dragged !== null && dayElement.className.indexOf( " drag-over" ) === _value.notFound && !doDatesMatch( _events_Dragged_DateFrom, areaDate ) ) {
            dayElement.className += " drag-over";
        }
    }

    function hideDraggingEffect( e, dayElement, areaDate ) {
        cancelBubble( e );

        if ( _events_Dragged !== null && dayElement.className.indexOf( " drag-over" ) > _value.notFound && !doDatesMatch( _events_Dragged_DateFrom, areaDate ) ) {
            dayElement.className = dayElement.className.replace( " drag-over", _string.empty );
        }
    }

    function dropEventOnDay( e, year, month, day ) {
        var dropDate = new Date( year, month, day );

        if ( _events_Dragged !== null && !doDatesMatch( _events_Dragged_DateFrom, dropDate ) ) {
            fireCustomTrigger( _options.events.onEventDragDrop, _events_Dragged, dropDate );

            if ( !isDefined( day ) ) {
                var totalDaysInMonth = getTotalDaysInMonth( year, month );
                day = _events_Dragged.from.getDate();

                if ( day > totalDaysInMonth ) {
                    day = totalDaysInMonth;
                }
            }

            var daysBetweenDraggedFromAndFrom = getTotalDaysBetweenDates( _events_Dragged.from, _events_Dragged_DateFrom ),
                daysBetweenFromAndTo = getTotalDaysBetweenDates( _events_Dragged.from, _events_Dragged.to ),
                fromDate = new Date( year, month, day, _events_Dragged.from.getHours(), _events_Dragged.from.getMinutes() ),
                toDate = new Date( year, month, day, _events_Dragged.to.getHours(), _events_Dragged.to.getMinutes() ),
                repeatEndsDate = _events_Dragged.repeatEnds;               

            if ( daysBetweenDraggedFromAndFrom > 0 ) {
                fromDate.setDate( fromDate.getDate() - daysBetweenDraggedFromAndFrom );
                toDate.setDate( toDate.getDate() - daysBetweenDraggedFromAndFrom );
            }

            if ( isDefined( repeatEndsDate ) ) {
                var newFromDaysDifference = getTotalDaysBetweenDates( fromDate, _events_Dragged.from );

                if ( fromDate > _events_Dragged.from ) {
                    repeatEndsDate.setDate( repeatEndsDate.getDate() + newFromDaysDifference );
                } else {
                    repeatEndsDate.setDate( repeatEndsDate.getDate() - newFromDaysDifference );
                }
            }

            if ( daysBetweenFromAndTo > 0 ) {
                toDate.setDate( toDate.getDate() + daysBetweenFromAndTo );
            }

            _that.updateEventDateTimes( _events_Dragged.id, fromDate, toDate, repeatEndsDate );
            
            showNotificationPopUp( _options.eventUpdatedText.replace( "{0}", _events_Dragged.title ) );           
            refreshViews();
        } else {

            if ( _events_Dragged === null ) {
                dropEventsFromOtherCalendar( e, year, month, day );
            }
        }
    }

    function dropEventsFromOtherCalendar( e, year, month, day ) {
        var eventDetails = getObjectFromString( e.dataTransfer.getData( "event_details" ) );
        if ( isDefined( eventDetails ) && _events_Dragged === null ) {
            var sourceFromDate = new Date( eventDetails.from ),
                sourceToDate = new Date( eventDetails.to );

            eventDetails.from = new Date( year, month, day, sourceFromDate.getHours(), sourceFromDate.getMinutes(), 0, 0 );
            eventDetails.to = new Date( year, month, day, sourceToDate.getHours(), sourceToDate.getMinutes(), 0, 0 );

            _that.addEvent( eventDetails );

            showNotificationPopUp( _options.eventAddedText.replace( "{0}", eventDetails.title ) );
        }
    }

    function dropFileOnDisplay( e ) {
        if ( isDefined( _parameter_Window.FileReader ) && _options.importEventsEnabled ) {
            importEventsFromFiles( e.dataTransfer.files );
        }
    }

    function getObjectFromString( objectString ) {
        var result;

        try {
            result = _parameter_Json.parse( objectString );
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
     * Moving Dialogs
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function makeDialogMovable( titleBar, dialog, mouseUpFunc ) {
        titleBar.onmousedown = function( e ) {
            onMoveTitleBarMouseDown( e, dialog );
        };

        titleBar.onmouseup = function() {
            onMoveTitleBarMouseUp( mouseUpFunc );
        };

        titleBar.oncontextmenu = function() {
            onMoveTitleBarMouseUp( null );
        };
    }

    function onMoveTitleBarMouseDown( e, dialog ) {
        if ( !_element_Dialog_Move_IsMoving ) {
            hideAllDropDowns();
            
            _element_Dialog_Move = dialog;
            _element_Dialog_Move_IsMoving = true;
            _element_Dialog_Move_X = e.pageX - _element_Dialog_Move.offsetLeft;
            _element_Dialog_Move_Y = e.pageY - _element_Dialog_Move.offsetTop;
            _element_Dialog_Move_Original_X = _element_Dialog_Move.offsetLeft;
            _element_Dialog_Move_Original_Y = _element_Dialog_Move.offsetTop;
        }
    }

    function onMoveTitleBarMouseUp( func ) {
        if ( _element_Dialog_Move_IsMoving ) {
            _element_Dialog_Move_IsMoving = false;
            _element_Dialog_Move = null;
            _element_Dialog_Move_Original_X = 0;
            _element_Dialog_Move_Original_Y = 0;

            if ( func !== null ) {
                func();
            }
        }
    }

    function onMoveDocumentMouseMove( e ) {
        if ( _element_Dialog_Move_IsMoving ) {
            _element_Dialog_Move.style.left = ( e.pageX - _element_Dialog_Move_X ) + "px";
            _element_Dialog_Move.style.top = ( e.pageY - _element_Dialog_Move_Y ) + "px";
        }
    }

    function onMoveDocumentMouseLeave() {
        if ( _element_Dialog_Move_IsMoving ) {
            _element_Dialog_Move.style.left = _element_Dialog_Move_Original_X + "px";
            _element_Dialog_Move.style.top = _element_Dialog_Move_Original_Y + "px";

            _element_Dialog_Move_IsMoving = false;
            _element_Dialog_Move = null;
            _element_Dialog_Move_Original_X = 0;
            _element_Dialog_Move_Original_Y = 0;
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

        var className = "tab tab-control" + ( selected ? "-selected" : _string.empty ),
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

        var tabContainer = createElement( "div", "checkbox-container tab-content custom-scroll-bars" );
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
     * Event Class Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function setEventClassesAndColors( event, eventDetails, toDate, setNotInMonthCss ) {
        setNotInMonthCss = isDefined( setNotInMonthCss ) ? setNotInMonthCss : false;

        if ( isDefined( toDate ) && toDate < new Date() ) {
            event.className += " expired";
        }

        if ( setNotInMonthCss && isDefined( toDate ) && toDate < _calendar_CurrentDate && ( toDate.getFullYear() !== _calendar_CurrentDate.getFullYear() || toDate.getMonth() !== _calendar_CurrentDate.getMonth() ) ) {
            event.className += " not-in-current-month";
        }

        if ( isDefinedStringAndSet( eventDetails.color ) ) {
            event.style.backgroundColor = eventDetails.color;

            if ( isDefinedStringAndSet( eventDetails.colorText ) ) {
                event.style.color = eventDetails.colorText;
            }

            if ( isDefinedStringAndSet( eventDetails.colorBorder ) ) {
                event.style.borderColor = eventDetails.colorBorder;
            }
        } else {

            if ( eventDetails.isAllDay ) {
                event.className += " all-day";
            }
        }
    }

    function setEventClassesForActions( event, eventDetails ) {
        if ( _element_Dialog_Search_FocusedEventID === eventDetails.id ) {
            event.className += " focused-event";
        }

        if ( isEventIdSelected( eventDetails.id ) ) {
            event.className += " selected-event";
        }

        if ( isEventIdCopied( eventDetails.id ) ) {
            if ( _events_Copied_Cut ) {
                event.className += " cut-event";
            } else {
                event.className += " copy-event";
            }
        }
    }

    function updateEventClasses( id, className, remove ) {
        remove = isDefined( remove ) ? remove : false;

        var elements = _parameter_Document.getElementsByClassName( "event" ),
            elementsArray = [].slice.call( elements ),
            elementsArrayLength = elementsArray.length;

        for ( var elementsArrayIndex = 0; elementsArrayIndex < elementsArrayLength; elementsArrayIndex++ ) {
            var element = elementsArray[ elementsArrayIndex ],
                elementAttributeData = element.getAttribute( "event-id" );

            if ( elementAttributeData !== null && elementAttributeData === id.toString() ) {
                if ( !remove ) {
                    element.className += _string.space + className;
                } else {
                    element.className = element.className.replace( _string.space + className, _string.empty );
                }
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Browser Notifications
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function checkEventForBrowserNotifications( date, eventDetails ) {
        if ( isDateToday( date ) && !_element_Mode_DatePicker_Enabled ) {
            var newFrom = new Date(),
                newTo = new Date(),
                today = new Date(),
                repeatEvery = getNumber( eventDetails.repeatEvery );

            newFrom.setHours( eventDetails.from.getHours(), eventDetails.from.getMinutes(), 0, 0 );
            newTo.setHours( eventDetails.to.getHours(), eventDetails.to.getMinutes(), 0, 0 );

            if ( repeatEvery === _enum_RepeatType.never && !isDateToday( eventDetails.from ) ) {
                newFrom.setHours( 0, 0, 0, 0 );
            }

            if ( repeatEvery === _enum_RepeatType.never && !isDateToday( eventDetails.to ) ) {
                newTo.setHours( 23, 59, 59, 99 );
            }

            if ( isDefinedNumber( eventDetails.alertOffset ) && eventDetails.alertOffset > 0 ) {
                newFrom = addMinutesToDate( newFrom, -eventDetails.alertOffset );
            }
            
            if ( today >= newFrom && today <= newTo ) {
                if ( !isDefinedBoolean( eventDetails.showAsBusy ) || eventDetails.showAsBusy ) {
                    _calendar_IsBusy = true;
                }

                if ( !_events_NotificationsTriggered.hasOwnProperty( eventDetails.id ) && !isDefinedBoolean( eventDetails.showAlerts ) || eventDetails.showAlerts ) {
                    runBrowserNotificationAction( function() {
                        launchBrowserNotificationForEvent( eventDetails );
                    }, false, eventDetails );
                }
            }
        }
    }

    function launchBrowserNotificationForEvent( eventDetails ) {
        _events_NotificationsTriggered[ eventDetails.id ] = true;
    
        var notification = new Notification( _options.eventNotificationTitle, {
            body: _options.eventNotificationBody.replace( "{0}", eventDetails.title ),
        });

        notification.onclick = function() {
            var url = getString( eventDetails.url );

            if ( url === _string.empty ) {
                showEventEditingDialog( eventDetails );
            } else {
                openEventUrl( url );
            }

            fireCustomTrigger( _options.events.onNotificationClicked, eventDetails );
        };
    }

    function checkForBrowserNotificationsPermission() {
        runBrowserNotificationAction( function() {
            if ( Notification.permission !== "granted" ) {
                Notification.requestPermission();
            }
        } );
    }

    function runBrowserNotificationAction( action, writeConsoleLog, eventDetails ) {
        if ( _options.eventNotificationsEnabled && !_element_Mode_DatePicker_Enabled ) {
            writeConsoleLog = isDefined( writeConsoleLog ) ? writeConsoleLog : true;

            if ( !Notification ) {
                if ( writeConsoleLog ) {
                    console.error( "Browser notifications API unavailable." );
                }
            } else {
                action();
            }

            if ( isDefined( eventDetails ) ) {
                fireCustomTrigger( _options.events.onNotification, eventDetails );
            }
        }
    }

    function openEventUrl( url ) {
        _parameter_Window.open( url, _options.urlWindowTarget );

        fireCustomTrigger( _options.events.onEventUrlClicked, url );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Selected, Cut, Copy, and Paste
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function setCopiedEventsClasses( clear ) {
        clear = isDefined( clear ) ? clear : true;

        var copiedEventDetailsLength = _events_Copied.length;

        for ( var copiedEventDetailsIndex = 0; copiedEventDetailsIndex < copiedEventDetailsLength; copiedEventDetailsIndex++ ) {
            var eventDetails = _events_Copied[ copiedEventDetailsIndex ];
            
            if ( _events_Copied_Cut ) {
                updateEventClasses( eventDetails.id, "cut-event", clear );
            } else {
                updateEventClasses( eventDetails.id, "copy-event", clear );
            }
        }
    }

    function setCopiedEvents( eventDetails ) {
        _events_Copied = [];

        var selectedEventsLength = _events_Selected.length;

        if ( selectedEventsLength > 0 ) {
            for ( var selectedEventIndex = 0; selectedEventIndex < selectedEventsLength; selectedEventIndex++ ) {
                _events_Copied.push( _events_Selected[ selectedEventIndex ] );
            }
            
        } else {
            _events_Copied.push( eventDetails );
        }
    }

    function isEventIdSelected( id ) {
        var result = false,
            eventsSelectedLength = _events_Selected.length;

        for ( var eventsSelectedIndex = 0; eventsSelectedIndex < eventsSelectedLength; eventsSelectedIndex++ ) {
            if ( _events_Selected[ eventsSelectedIndex ].id === id ) {
                result = true;
                break;
            }
        }

        return result;
    }

    function isEventIdCopied( id ) {
        var result = false,
            copiedEventDetailsLength = _events_Copied.length;

        for ( var copiedEventDetailsIndex = 0; copiedEventDetailsIndex < copiedEventDetailsLength; copiedEventDetailsIndex++ ) {
            if ( _events_Copied[ copiedEventDetailsIndex ].id === id ) {
                result = true;
                break;
            }
        }

        return result;
    }
    
    function pasteEventsToDate( date, cut ) {
        var copiedEventDetailsLength = _events_Copied.length;

        for ( var copiedEventDetailsIndex = 0; copiedEventDetailsIndex < copiedEventDetailsLength; copiedEventDetailsIndex++ ) {
            var eventDetails = _events_Copied[ copiedEventDetailsIndex ],
                totalDays = getTotalDaysBetweenDates( eventDetails.from, eventDetails.to );
            
            var newEvent = !cut ? cloneEventDetails( eventDetails ) : eventDetails;
            newEvent.from.setDate( date.getDate() );
            newEvent.from.setMonth( date.getMonth() );
            newEvent.from.setFullYear( date.getFullYear() );
            newEvent.to.setDate( date.getDate() );
            newEvent.to.setMonth( date.getMonth() );
            newEvent.to.setFullYear( date.getFullYear() );
            newEvent.to.setDate( newEvent.to.getDate() + totalDays );
    
            if ( !cut ) {
                newEvent.id = null;
    
                _that.addEvent( newEvent, false, true );

            } else {
                fireCustomTrigger( _options.events.onEventUpdated, newEvent );
            }
        }

        showNotificationPopUp( _options.eventsPastedText.replace( "{0}", copiedEventDetailsLength ) );

        if ( cut ) {
            clearSelectedEvents();
            
            _events_Copied = [];
            _events_Copied_Cut = false;
        }

        buildFullMonthViewDayEvents();
        refreshOpenedViews();
    }

    function storeMultiSelectEvent( e, eventDetails ) {
        cancelBubble( e );
        hideAllDropDowns();

        if ( !isEventLocked( eventDetails ) ) {
            if ( isControlKey( e ) ) {
                if ( !isEventIdSelected( eventDetails.id ) ) {
                    _events_Selected.push( eventDetails );
        
                    updateEventClasses( eventDetails.id, "selected-event", false );

                } else {
                    var eventsSelectedLength = _events_Selected.length;

                    for ( var eventsSelectedIndex = 0; eventsSelectedIndex < eventsSelectedLength; eventsSelectedIndex++ ) {
                        if ( _events_Selected[ eventsSelectedIndex ].id === eventDetails.id ) {
                            _events_Selected.splice( eventsSelectedIndex, 1 );
                            break;
                        }
                    }

                    updateEventClasses( eventDetails.id, "selected-event", true );
                }

            } else {
                clearSelectedEvents();
            }

        } else {
            if ( !isControlKey( e ) ) {
                clearSelectedEvents();
            }
        }
    }

    function clearSelectedEvents() {
        var cleared = false,
            eventsSelectedLength = _events_Selected.length;

        if ( eventsSelectedLength > 0 ) {
            for ( var eventsSelectedIndex = 0; eventsSelectedIndex < eventsSelectedLength; eventsSelectedIndex++ ) {
                updateEventClasses( _events_Selected[ eventsSelectedIndex ].id, "selected-event", true );
            }
    
            cleared = true;
            _events_Selected = [];
        }

        return cleared;
    }

    function setCopiedEventsFromKeyDown( cut ) {
        _events_Copied = [];
        _events_Copied_Cut = isDefined( cut ) ? cut : false;

        var selectedEventsLength = _events_Selected.length;

        if ( selectedEventsLength > 0 ) {
            for ( var selectedEventIndex = 0; selectedEventIndex < selectedEventsLength; selectedEventIndex++ ) {
                _events_Copied.push( _events_Selected[ selectedEventIndex ] );
            }

            setCopiedEventsClasses( false );
        }
    }

    function pasteCopiedEventsFromKeyDown() {
        var copiedEventsLength = _events_Copied.length;
        
        if ( isViewVisible( _element_View_FullDay ) && copiedEventsLength > 0 ) {
            pasteEventsToDate( _element_View_FullDay_DateSelected, _events_Copied_Cut );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Auto-Refresh Timer
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function startAutoRefreshTimer() {
        if ( _options.autoRefreshTimerDelay > 0 && !_element_Mode_DatePicker_Enabled && _timer_AutoRefresh_Enabled ) {
            startTimer( _timer_Name.autoRefresh, function() {
                loadEventsToAddOrUpdateFromFetchTrigger();
                refreshViews();
            }, _options.autoRefreshTimerDelay );
        }
    }

    function loadEventsToAddOrUpdateFromFetchTrigger() {
        var events = fireCustomTrigger( _options.events.onEventsFetch );
        if ( isDefinedArray( events ) ) {
            var eventsLength = events.length;

            for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                var event = events[ eventIndex ];

                _that.removeEvent( event.id, false, false );
                _that.addEvent( event, false, false );
            }
        }
    }

    function clearAutoRefreshTimer() {
        if ( _options.autoRefreshTimerDelay > 0 && !_element_Mode_DatePicker_Enabled && _timer_AutoRefresh_Enabled ) {
            stopAndResetTimer( _timer_Name.autoRefresh );
        }
    }

    function refreshViews( fromButton, triggerEvent ) {
        if ( _options.isWidget ) {
            if ( _calendar_CurrentDate_IsToday ) {
                build();
            } else {
                build( _calendar_CurrentDate );
            }
        } else {

            fromButton = isDefined( fromButton ) ? fromButton : false;
            triggerEvent = isDefined( triggerEvent ) ? triggerEvent : false;
    
            if ( isOnlyMainDisplayVisible() || fromButton ) {
                refreshOpenedViews();
    
                if ( _calendar_CurrentDate_IsToday ) {
                    build();
                    buildFullMonthViewPinUpImageText();
                } else {
                    buildFullMonthViewDayEvents();
                }
    
                if ( triggerEvent ) {
                    fireCustomTrigger( _options.events.onRefresh );
                }
            }
        }
    }

    function isOnlyMainDisplayVisible() {
        return !isTooltipVisible() && !isDisabledBackgroundDisplayed() && !isFullMonthViewYearDropDownVisible() && !areContextMenusVisible() && !isSideMenuOpen() && _events_Dragged === null;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Timers
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function startTimer( timerName, func, timeout, interval ) {
        interval = isDefined( interval ) ? interval : true;

        if ( !doesTimerExist( timerName ) ) {
            if ( interval ) {
                _timer[ timerName ] = setInterval( func, timeout );
            } else {

                _timer[ timerName ] = setTimeout( function() {
                    func();

                    delete _timer[ timerName ];
                }, timeout );
            }
        }
    }

    function stopAndResetTimer( timerName ) {
        if (  doesTimerExist( timerName ) ) {
            clearTimeout( _timer[ timerName ] );

            delete _timer[ timerName ];
        }
    }

    function doesTimerExist( timerName ) {
        return _timer.hasOwnProperty( timerName ) && _timer[ timerName ] !== null;
    }

    function stopAndResetAllTimers() {
        for ( var timerName in _timer ) {
            if ( _timer.hasOwnProperty( timerName ) && _timer[ timerName ] !== null ) {
                clearTimeout( _timer[ timerName ] );

                delete _timer[ timerName ];
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Groups
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getGroupName( group ) {
        return group.toLowerCase();
    }

    function getGroups() {
        var groups = [],
            groupsAnyCase = [];

        getAllEventsFunc( function( eventDetails ) {
            var group = getString( eventDetails.group );
            if ( group !== _string.empty && groupsAnyCase.indexOf( group.toLowerCase() ) === _value.notFound ) {
                groups.push( group );
                groupsAnyCase.push( group.toLowerCase() );
            }
        } );

        groups.sort();

        return groups;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Element Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function createElement( type, className, inputType, inputId ) {
        var result = null,
            nodeType = type.toLowerCase(),
            isText = nodeType === "text";

        if ( !_elements_Type.hasOwnProperty( nodeType ) ) {
            _elements_Type[ nodeType ] = isText ? _parameter_Document.createTextNode( _string.empty ) : _parameter_Document.createElement( nodeType );
        }

        result = _elements_Type[ nodeType ].cloneNode( false );

        if ( ( type === "input" && inputType !== "button" ) || type === "textarea" ) {
            if ( isDefined( inputId ) ) {
                result.id = inputId;
            } else {
                result.id = newGuid();
            }
        }

        if ( isDefined( className ) ) {
            result.className = className;
        }

        if ( isDefined( inputType ) ) {
            result.type = inputType;
        }

        return result;
    }

    function createTextHeaderElement( container, text, className ) {
        var element = createElement( "p" );
        setNodeText( element, text );
        container.appendChild( element );

        if ( isDefined( className ) ) {
            element.className = className;
        }

        return element;
    }

    function createSpanElement( container, text, className, event, cancelDblClick, addSeparator ) {
        cancelDblClick = isDefined( cancelDblClick ) ? cancelDblClick : false;
        addSeparator = isDefined( addSeparator ) ? addSeparator : false;

        if ( addSeparator ) {
            container.appendChild( createElement( "div", "separator" ) );
        }

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

        return element;
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

        if ( !_parameter_Document.body.contains( _elements[ id ] ) ) {
            _elements[ id ] = getInternalElementByID( id );
        }

        return _elements[ id ];
    }

    function getInternalElementByID( id ) {
        var element = null;

        if ( _element_Calendar === null ) {
            element = _parameter_Document.getElementById( id );
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

    function cancelBubbleOnly( e ) {
        e.cancelBubble = true;
    }

    function showElementAtMousePosition( e, element ) {
        var left = e.pageX,
            top = e.pageY,
            scrollPosition = getScrollPosition();

        element.style.display = "block";

        if ( left + element.offsetWidth > _parameter_Window.innerWidth ) {
            left -= element.offsetWidth;
        } else {
            left++;
        }

        if ( top + element.offsetHeight > _parameter_Window.innerHeight ) {
            top -= element.offsetHeight;
        } else {
            top++;
        }

        if ( left < scrollPosition.left ) {
            left = e.pageX + 1;
        }

        if ( top < scrollPosition.top ) {
            top = e.pageY + 1;
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
        var doc = _parameter_Document.documentElement,
            left = ( _parameter_Window.pageXOffset || doc.scrollLeft )  - ( doc.clientLeft || 0 ),
            top = ( _parameter_Window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 );

        return {
            left: left,
            top: top
        };
    }

    function removeLastCloseWindowEvent( popCloseWindowEvent ) {
        popCloseWindowEvent = isDefined( popCloseWindowEvent ) ? popCloseWindowEvent : true;
        
        if ( popCloseWindowEvent ) {
            _element_Dialog_AllOpened.pop();
        }
    }

    function cloneEventDetails( value, deleteId ) {
        deleteId = isDefined( deleteId ) ? deleteId : true;

        var object = _parameter_Json.parse( _parameter_Json.stringify( value ) );
        object.from = new Date( object.from );
        object.to = new Date( object.to );

        if ( isDefined( object.repeatEnds ) ) {
            object.repeatEnds = new Date( object.repeatEnds );
        }
        
        delete object.created;
        delete object.lastUpdated;

        if ( deleteId ) {
            delete object.id;
        }

        return object;
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

    function getStyleValueByName( element, stylePropertyName, toFloat ) {
        toFloat = isDefined( toFloat ) ? toFloat : true;

        var value = null;

        if ( _parameter_Window.getComputedStyle ) {
            value = _parameter_Document.defaultView.getComputedStyle( element, null ).getPropertyValue( stylePropertyName ); 
        }  
        else if ( element.currentStyle ) {
            value = element.currentStyle[ stylePropertyName ];
        }   
        
        if ( toFloat ) {
            value = parseFloat( value, 10 );
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

    function reverseElementsOrder( parent ) {
        var children = parent.children,
            childrenLength = children.length - 1;

        for ( ; childrenLength--; ) {
            parent.appendChild( children[ childrenLength ] );
        }
    }

    function removeTrackedElementsFromDocument() {
        var elementsLength = _elements_InDocumentBody.length;

        for ( var elementsIndex = 0; elementsIndex < elementsLength; elementsIndex++ ) {
            _parameter_Document.body.removeChild( _elements_InDocumentBody[ elementsIndex ] );
        }

        _elements_InDocumentBody = [];
    }

    function hideAllElementsAcrossInstances( className, hideClassName ) {
        var elements = _parameter_Document.getElementsByClassName( className ),
            elementsArray = [].slice.call( elements ),
            elementsArrayLength = elementsArray.length;

        for ( var elementsArrayIndex = 0; elementsArrayIndex < elementsArrayLength; elementsArrayIndex++ ) {
            var element = elementsArray[ elementsArrayIndex ];

            if ( element.id !== _parameter_ElementID ) {
                if ( isDefined( hideClassName ) ) {
                    element.className = hideClassName;
                } else {
                    element.style.display = "none";
                }
            }
        }
    }

    function clearElementsByClassName( container, className ) {
        var elements = container.getElementsByClassName( className );

        while ( elements[ 0 ] ) {
            elements[ 0 ].parentNode.removeChild( elements[ 0 ] );
        }
    }

    function removeElementsClassName( container, className ) {
        var elements = container.getElementsByClassName( className );

        while ( elements[ 0 ] ) {
            elements[ 0 ].className = elements[ 0 ].className.replace( className, _string.empty );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Controls/Text
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildRadioButton( container, labelText, groupName, onChangeEvent ) {
        var lineContents = createElement( "div", "radio-button-container" );
        container.appendChild( lineContents );

        var label = createElement( "label", "radio-button" );
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

    function buildCheckBox( container, labelText, onChangeEvent, name, checked, extraClassName, onClickEvent ) {
        extraClassName = isDefined( extraClassName ) ? _string.space + extraClassName : _string.empty;

        var lineContents = createElement( "div" );
        container.appendChild( lineContents );

        var label = createElement( "label", "checkbox" + extraClassName );
        lineContents.appendChild( label );

        if ( isDefined( onClickEvent ) ) {
            label.onclick = onClickEvent;
        }

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

        createSpanElement( label, labelText, "text" );

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
        container.innerHTML = _string.empty;

        var contents = createElement( "div", "no-events-available-text" );
        container.appendChild( contents );

        createTextHeaderElement( contents, _options.noEventsAvailableFullText );

        if ( _options.manualEditingEnabled ) {
            contents.appendChild( createElement( "div" ) );

            createSpanElement( contents, _options.clickText + _string.space );
            createSpanElement( contents, _options.hereText, "link", onClickEvent );
            createSpanElement( contents, _string.space + _options.toAddANewEventText );
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
        return string.replace( /^\s+|\s+$/g , _string.empty );
    }

    function newGuid() {
        var result = [];

        for ( var charIndex = 0; charIndex < 32; charIndex++ ) {
            if ( charIndex === 8 || charIndex === 12 || charIndex === 16 || charIndex === 20 ) {
                result.push( "-" );
            }

            var character = _parameter_Math.floor( _parameter_Math.random() * 16 ).toString( 16 );
            result.push( character );
        }

        return result.join( _string.empty );
    }

    function startsWith( data, start ) {
        return data.substring( 0, start.length ) === start;
    }

    function startsWithAnyCase( data, start ) {
        return data.substring( 0, start.length ).toLowerCase() === start.toLowerCase();
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
        return isDefinedOnly( data ) && data !== null && data !== _string.empty;
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
        return isDefinedString( object ) && object !== _string.empty;
    }

    function isDefinedDate( object ) {
        return isDefinedObject( object ) && object instanceof Date;
    }

    function isDefinedDOMElement( object ) {
        return isDefinedObject( object ) && object.tagName !== undefined;
    }

    function isValidUrl( url ) {
        var regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

        return regex.test( url );
    }

    function areArraysTheSame( array1, array2 ) {
        var result = isDefinedArray( array1 ) && isDefinedArray( array2 );
        if ( result ) {
            array1.sort();
            array2.sort();

            result = _parameter_Json.stringify( array1 ) === _parameter_Json.stringify( array2 );
        }

        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Default Parameter/Option Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getDefaultAnyString( value, defaultValue ) {
        return typeof value === "string" ? value : defaultValue;
    }

    function getDefaultString( value, defaultValue ) {
        return isDefinedString( value ) ? value : defaultValue;
    }

    function getDefaultBoolean( value, defaultValue ) {
        return isDefinedBoolean( value ) ? value : defaultValue;
    }

    function getDefaultNumber( value, defaultValue ) {
        return isDefinedNumber( value ) ? value : defaultValue;
    }

    function getDefaultArray( value, defaultValue ) {
        return isDefinedArray( value ) ? value : defaultValue;
    }

    function getDefaultDate( value, defaultValue ) {
        return isDefinedDate( value ) ? value : defaultValue;
    }

    function getDefaultObject( value, defaultValue ) {
        return isDefinedObject( value ) ? value : defaultValue;
    }

    function getDefaultFunction( value, defaultValue ) {
        return isDefinedFunction( value ) ? value : defaultValue;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Local Storage (persistence)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function storeEventsInLocalStorage() {
        if ( _options.useLocalStorageForEvents && _parameter_Window.localStorage ) {
            clearLocalStorageObjects();

            var orderedEvents = getOrderedEvents( getAllEvents() ),
                orderedEventsLength = orderedEvents.length;

            for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
                var orderedEvent = orderedEvents[ orderedEventIndex ],
                    orderedEventsJson = _parameter_Json.stringify( orderedEvent );

                _parameter_Window.localStorage.setItem( "CJS_" + orderedEventIndex.toString(), orderedEventsJson );
            }
        }
    }

    function loadEventsFromLocalStorage() {
        if ( _options.useLocalStorageForEvents && _parameter_Window.localStorage ) {
            var keysLength = _parameter_Window.localStorage.length;

            for ( var keyIndex = 0; keyIndex < keysLength; keyIndex++ ) {
                var eventJson = _parameter_Window.localStorage.getItem( _parameter_Window.localStorage.key( keyIndex ) ),
                    event = getObjectFromString( eventJson );

                if ( isDefined( event ) ) {
                    _that.addEvent( event, false, false, false );
                }
            }
        }
    }

    function clearLocalStorageObjects() {
        if ( _options.useLocalStorageForEvents && _parameter_Window.localStorage ) {
            var keysLength = _parameter_Window.localStorage.length,
                keysToRemove = [];

            for ( var keyIndex = 0; keyIndex < keysLength; keyIndex++ ) {
                if ( startsWith( _parameter_Window.localStorage.key( keyIndex ), "CJS_" ) ) {
                    keysToRemove.push( _parameter_Window.localStorage.key( keyIndex ) );
                }
            }

            var keysToRemoveLength = keysToRemove.length;

            for ( var keyToRemoveIndex = 0; keyToRemoveIndex < keysToRemoveLength; keyToRemoveIndex++ ) {
                _parameter_Window.localStorage.removeItem( keysToRemove[ keyToRemoveIndex ] );
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Import Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function importEventsFromFiles( files ) {
        var filesLength = files.length,
            filesCompleted = [],
            filesCompletedEvents = [];

        var onLoadEnd = function( filename, events ) {
            filesCompleted.push( filename );
            filesCompletedEvents = filesCompletedEvents.concat( events );

            if ( filesCompleted.length === filesLength ) {
                importFromFilesCompleted( filesCompletedEvents );
            }
        };

        for ( var fileIndex = 0; fileIndex < filesLength; fileIndex++ ) {
            var file = files[ fileIndex ],
                fileExtension = file.name.split( "." ).pop().toLowerCase();

            if ( fileExtension === "json" ) {
                importEventsFromJson( file, onLoadEnd );
            } else if ( fileExtension === "ics" || fileExtension === "ical" ) {
                importEventsFromICal( file, onLoadEnd );
            }
        }
    }

    function importEventsFromJson( file, onLoadEnd ) {
        var reader = new FileReader(),
            readingEventsAdded = [];

        reader.readAsText( file );

        reader.onloadend = function() {
            onLoadEnd( file.name, readingEventsAdded );
        };
    
        reader.onload = function( event ) {
            var readingEvents = getObjectFromString( event.target.result );

            if ( isDefinedObject( readingEvents ) && readingEvents.hasOwnProperty( "events" ) ) {
                readingEvents = readingEvents.events;
            }

            var readingEventsLength = readingEvents.length;

            for ( var readingEventsIndex = 0; readingEventsIndex < readingEventsLength; readingEventsIndex++ ) {
                var eventDetails = readingEvents[ readingEventsIndex ];

                _that.removeEvent( eventDetails.id, false, false );

                if ( _that.addEvent( eventDetails, false, false ) ) {
                    readingEventsAdded.push( eventDetails);
                }
            }
        };
    }

    function importEventsFromICal( file, onLoadEnd ) {
        var reader = new FileReader(),
            readingEventsAdded = [];

        reader.readAsText( file );

        reader.onloadend = function() {
            onLoadEnd( file.name, readingEventsAdded );
        };
    
        reader.onload = function( event ) {
            var content = event.target.result,
                contentLines = content.split( _string.newLineCharacterReturn ),
                contentLinesLength = contentLines.length;

            if ( contentLines[ 0 ].indexOf( "BEGIN:VCALENDAR" ) > _value.notFound && contentLines[ contentLinesLength - 1 ].indexOf( "END:VCALENDAR" ) > _value.notFound ) {
                var readingEvent = false,
                    readingEventDetails = {};
                
                for ( var contentLineIndex = 0; contentLineIndex < contentLinesLength; contentLineIndex++ ) {
                    var contentLine = contentLines[ contentLineIndex ];

                    if ( contentLine.indexOf( "BEGIN:VEVENT" ) > _value.notFound ) {
                        readingEvent = true;
                    } else if ( contentLine.indexOf( "END:VEVENT" ) > _value.notFound ) {
                        var eventDetails = _parameter_Json.parse( _parameter_Json.stringify( readingEventDetails ) );

                        readingEvent = false;
                        readingEventDetails = {};

                        _that.removeEvent( eventDetails.id, false, false );

                        if ( _that.addEvent( eventDetails, false, false ) ) {
                            readingEventsAdded.push( eventDetails );
                        }
                    }

                    if ( readingEvent ) {
                        if ( startsWith( contentLine, "UID:" ) ) {
                            readingEventDetails.id = contentLine.split( ":" ).pop();
                        } else if ( startsWith( contentLine, "SUMMARY:" ) ) {
                            readingEventDetails.title = contentLine.split( ":" ).pop();
                        } else if ( startsWith( contentLine, "DESCRIPTION:" ) ) {
                            readingEventDetails.description = contentLine.split( ":" ).pop();
                        } else if ( startsWith( contentLine, "DTSTART:" ) || startsWith( contentLine, "DTSTART;" ) ) {
                            readingEventDetails.from = importICalDateTime( contentLine.split( ":" ).pop() );
                            readingEventDetails.isAllDay = contentLine.split( ":" ).pop().length === 8;
                        } else if ( startsWith( contentLine, "DTEND:" ) || startsWith( contentLine, "DTEND;" ) ) {
                            readingEventDetails.to = importICalDateTime( contentLine.split( ":" ).pop(), true );
                        } else if ( startsWith( contentLine, "CREATED:" ) ) {
                            readingEventDetails.created = importICalDateTime( contentLine.split( ":" ).pop() );
                        } else if ( startsWith( contentLine, "LOCATION:" ) ) {
                            readingEventDetails.location = contentLine.split( ":" ).pop();
                        } else if ( startsWith( contentLine, "URL:" ) ) {
                            readingEventDetails.url = contentLine.split( ":" ).pop();
                        } else if ( startsWith( contentLine, "TRANSP:" ) ) {
                            readingEventDetails.showAsBusy = contentLine.split( ":" ).pop() === "OPAQUE";
                        } else if ( startsWith( contentLine, "BEGIN:VALARM" ) ) {
                            readingEventDetails.showAlerts = true;
                        } else if ( startsWith( contentLine, "CATEGORIES:" ) ) {
                            readingEventDetails.group = contentLine.split( ":" ).pop();
                        } else if ( startsWith( contentLine, "ORGANIZER;" ) ) {
                            importICalOrganizer( readingEventDetails, contentLine );
                        } else if ( startsWith( contentLine, "RRULE:" ) ) {
                            importICalRRule( readingEventDetails, contentLine );
                        }
                    }
                }
            }
        };
    }

    function importICalDateTime( dateTime, isEndDate ) {
        var result = _string.empty,
            isAllDay = dateTime.length === 8;

        result += dateTime.substring( 0, 4 );
        dateTime = dateTime.slice( 4 );

        result += "-" + dateTime.substring( 0, 2 );
        dateTime = dateTime.slice( 2 );

        result += "-" + dateTime.substring( 0, 2 );
        dateTime = dateTime.slice( 2 );

        result += "T";

        if ( !isAllDay ) {
            dateTime = dateTime.slice( 1 );

            result += dateTime.substring( 0, 2 );
            dateTime = dateTime.slice( 2 );
    
            result += ":" + dateTime.substring( 0, 2 );
            dateTime = dateTime.slice( 2 );
    
            result += ":" + dateTime.substring( 0, 2 );
            dateTime = dateTime.slice( 2 );

        } else {
            isEndDate = isDefined( isEndDate ) ? isEndDate : false;
            
            result += !isEndDate ? "00:00:00" : "23:59:00";
        }

        result += "Z";

        return new Date( result );
    }

    function importICalOrganizer( readingEventDetails, contentLine ) {
        var organizerDetails = contentLine.split( ";" ).pop(),
            organizerDetailsParts = organizerDetails.split( ":" );

        readingEventDetails.organizerName = organizerDetailsParts[ 0 ].replace( "CN=", _string.empty );
        readingEventDetails.organizerEmailAddress = organizerDetailsParts[ 2 ];
    }

    function importICalRRule( readingEventDetails, contentLine ) {
        var rRuleDetails = contentLine.split( ":" ).pop(),
            rRuleDetailsParts = rRuleDetails.split( ";" ),
            rRuleDetailsPartsLength = rRuleDetailsParts.length,
            freq = null,
            interval = null,
            until = null;

        for ( var rRuleDetailsPartsIndex = 0; rRuleDetailsPartsIndex < rRuleDetailsPartsLength; rRuleDetailsPartsIndex++ ) {
            var rRulePart = rRuleDetailsParts[ rRuleDetailsPartsIndex ];

            if ( startsWith( rRulePart, "FREQ=" ) ) {
                freq = rRulePart.split( "=" )[ 1 ];
            } else if ( startsWith( rRulePart, "INTERVAL=" ) ) {
                interval = rRulePart.split( "=" )[ 1 ];
            } else if ( startsWith( rRulePart, "UNTIL=" ) ) {
                until = rRulePart.split( "=" )[ 1 ];
            }
        }

        if ( isDefined( freq ) ) {
            if ( isDefined( interval ) ) {
                interval = parseInt( interval );

                if ( interval >= 2 && freq !== "WEEKLY" ) {
                    readingEventDetails.repeatEveryCustomValue = interval;
                }
            }
            
            if ( isDefined( readingEventDetails.repeatEveryCustomValue ) ) {
                if ( freq === "DAILY" ) {
                    readingEventDetails.repeatEveryCustomType = _enum_RepeatCustomType.daily;
                } else if ( freq === "WEEKLY" ) {
                    readingEventDetails.repeatEveryCustomType = _enum_RepeatCustomType.weekly;
                } else if ( freq === "MONTHLY" ) {
                    readingEventDetails.repeatEveryCustomType = _enum_RepeatCustomType.monthly;
                } else if ( freq === "YEARLY" ) {
                    readingEventDetails.repeatEveryCustomType = _enum_RepeatCustomType.yearly;
                }
            } else {
                
                if ( freq === "DAILY" ) {
                    readingEventDetails.repeatEvery = _enum_RepeatType.everyDay;
                } else if ( freq === "WEEKLY" ) {
                    readingEventDetails.repeatEvery = _enum_RepeatType.everyWeek;
                } else if ( freq === "MONTHLY" ) {
                    readingEventDetails.repeatEvery = _enum_RepeatType.everyMonth;
                } else if ( freq === "MONTHLY" && interval === 2 ) {
                    readingEventDetails.repeatEvery = _enum_RepeatType.every2Weeks;
                } else if ( freq === "YEARLY" ) {
                    readingEventDetails.repeatEvery = _enum_RepeatType.everyYear;
                }
            }

            if ( isDefined( until ) ) {
                var repeatEnds = importICalDateTime( until );
                repeatEnds.setDate( repeatEnds.getDate() - 1 );

                readingEventDetails.repeatEnds = repeatEnds;
            }
        }
    }

    function importEventsFromFileSelected() {
        var input = createElement( "input", null, "file" );
        input.accept = ".ical, .ics, .json";
        input.multiple = "multiple";

        input.onchange = function() {
            importEventsFromFiles( input.files );
        };

        hideSideMenu();

        input.click();
    }

    function importFromFilesCompleted( eventsAddedOrUpdated ) {
        if ( eventsAddedOrUpdated.length > 0 ) {
            storeEventsInLocalStorage();
            updateSideMenu();
            buildFullMonthViewDayEvents();
            refreshOpenedViews();
            showNotificationPopUp( _options.eventsImportedText.replace( "{0}", eventsAddedOrUpdated.length ) );
            fireCustomTrigger( _options.events.onEventsImported, eventsAddedOrUpdated );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Export Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function exportEvents( events, type, filename, copyToClipboard ) {
        type = isDefined( type ) ? type.toLowerCase() : "csv";
        copyToClipboard = isDefined( copyToClipboard ) ? copyToClipboard : false;

        var contents = _string.empty,
            contentsEvents = getOrderedEvents( getExportEvents( events ), false );

        if ( type === "csv" ) {
            contents = getCsvContents( contentsEvents );
        } else if ( type === "xml" ) {
            contents = getXmlContents( contentsEvents, filename );
        } else if ( type === "json" ) {
            contents = getJsonContents( contentsEvents );
        } else if ( type === "text" ) {
            contents = getTextContents( contentsEvents, filename );
        } else if ( type === "ical" ) {
            contents = getICalContents( contentsEvents );
        } else if ( type === "md" ) {
            contents = getMdContents( contentsEvents );
        } else if ( type === "html" ) {
            contents = getHtmlContents( contentsEvents, filename );
        } else if ( type === "tsv" ) {
            contents = getTsvContents( contentsEvents );
        }

        if ( contents !== _string.empty ) {
            if ( copyToClipboard ) {
                _parameter_Navigator.clipboard.writeText( contents );

                showNotificationPopUp( _options.eventsExportedText );
            } else {
                
                var tempLink = createElement( "a" ),
                    fileAttributes = getExportFileAttributes( type ),
                    mimeTypeStart = fileAttributes[ 0 ],
                    mimeTypeEnd = fileAttributes[ 1 ],
                    extension = fileAttributes[ 2 ];
    
                filename = isDefined( filename ) ? filename : getExportDownloadFilename( extension );
    
                tempLink.style.display = "none";
                tempLink.setAttribute( "target", "_blank" );
                tempLink.setAttribute( "href", "data:" + mimeTypeStart + "/" + mimeTypeEnd + ";charset=utf-8," + encodeURIComponent( contents ) );
                tempLink.setAttribute( "download", filename );
    
                _parameter_Document.body.appendChild( tempLink );
                tempLink.click();
                _parameter_Document.body.removeChild( tempLink );

                showNotificationPopUp( _options.eventsExportedToText.replace( "{0}", filename ) );
            }

            fireCustomTrigger( _options.events.onEventsExported, contentsEvents );
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

    function getExportDownloadFilename( extension, filenameStart ) {
        filenameStart = isDefined( filenameStart ) ? filenameStart : _options.exportStartFilename;

        var date = new Date(),
            datePart = padNumber( date.getDate() ) + "-" + padNumber( date.getMonth() + 1 ) + "-" + date.getFullYear(),
            timePart = padNumber( date.getHours() ) + "-" + padNumber( date.getMinutes() );

        return filenameStart + datePart + "_" + timePart + "." + extension;
    }

    function getYesNoFromBoolean( flag ) {
        return flag ? _options.yesText : _options.noText;
    }

    function getStringFromDateTime( eventDate ) {
        var result = _options.repeatsNever;

        if ( isDefined( eventDate ) ) {
            var date = padNumber( eventDate.getDate() ) + "/" + padNumber( eventDate.getMonth() + 1 ) + "/" + eventDate.getFullYear(),
                time = padNumber( eventDate.getHours() ) + ":" + padNumber( eventDate.getMinutes() );

            result = date + _string.space + time;
        }

        return result;
    }

    function getString( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : _string.empty;

        return isDefinedString( value ) ? value : defaultValue;
    }

    function stripNewLines( value ) {
        return value.replace( /\n|\r/g, _string.empty );
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

        if ( repeatEvery === _enum_RepeatType.everyDay ) {
            result = _options.repeatsEveryDayText;
        } else if ( repeatEvery === _enum_RepeatType.everyWeek ) {
            result = _options.repeatsEveryWeekText;
        } else if ( repeatEvery === _enum_RepeatType.every2Weeks ) {
            result = _options.repeatsEvery2WeeksText;
        } else if ( repeatEvery === _enum_RepeatType.everyMonth ) {
            result = _options.repeatsEveryMonthText;
        } else if ( repeatEvery === _enum_RepeatType.everyYear ) {
            result = _options.repeatsEveryYearText;
        } else if ( repeatEvery === _enum_RepeatType.custom ) {
            result = _options.repeatsByCustomSettingsText;
        }

        return result;
    }

    function getRepeatsCustomTypeText( value ) {
        var result = _options.dailyText,
            repeatEveryCustomType = getNumber( value );

        if ( repeatEveryCustomType === _enum_RepeatCustomType.daily ) {
            result = _options.dailyText;
        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.weekly ) {
            result = _options.weeklyText;
        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.monthly ) {
            result = _options.monthlyText;
        } else if ( repeatEveryCustomType === _enum_RepeatCustomType.yearly ) {
            result = _options.yearlyText;
        }

        return result;
    }

    function getArrayText( value, includeSpeechMarks ) {
        includeSpeechMarks = isDefined( includeSpeechMarks ) ? includeSpeechMarks : false;

        var array = getArray( value ),
            arrayLength = array.length;

        for ( var arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++ ) {
            if ( includeSpeechMarks ) {
                array[ arrayIndex ] = "\"" + array[ arrayIndex ] + "\"";
            } else {
                array[ arrayIndex ] = array[ arrayIndex ];
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
                    result = "[" + getArrayText( value ) + "]";
                } else {
                    result = getArrayText( value );
                }
            }

        } else if ( typeof value === "number" ) {
            if ( name === "repeatEvery" && !forJson ) {
                result = getRepeatsText( value );
            } else if ( name === "repeatEveryCustomType" && !forJson ) {
                result = getRepeatsCustomTypeText( value );
            } else if ( name === "type" && !forJson ) {
                result = _options_EventType[ parseInt( value ) ].text;
            }  else {
                result = value.toString();
            }
        }

        return result;
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
                _options.typeText,
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
                _options.urlText,
                _options.lockedText,
                _options.showAlertsText,
                _options.showAsBusyText,
                _options.alertOffsetText
            ],
            headersLength = headers.length;

        return [ headers, headersLength ];
    }

    function getExportRow( eventDetails ) {
        var eventContents = [];

        eventContents.push( getString( eventDetails.id ) );
        eventContents.push( _options_EventType[ getNumber( eventDetails.type ) ].text );
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
        eventContents.push( getYesNoFromBoolean( eventDetails.locked ) );
        eventContents.push( getYesNoFromBoolean( !isDefinedBoolean( eventDetails.showAlerts ) || eventDetails.showAlerts ) );
        eventContents.push( getYesNoFromBoolean( !isDefinedBoolean( eventDetails.showAsBusy ) || eventDetails.showAsBusy ) );
        eventContents.push( getNumber( eventDetails.alertOffset ) );

        return eventContents;
    }

    function getOrderedEventPropertyNameList( eventDetails ) {
        var propertyNames = [];

        for ( var propertyName in eventDetails ) {
            if ( eventDetails.hasOwnProperty( propertyName ) ) {
                propertyNames.push( propertyName );
            }
        }

        propertyNames.sort();

        return propertyNames;
    }

    function getExportDateTime() {
        var dateExported = new Date(),
            dateExportedMeta = getCustomFormattedDateText( "{ddd}, {dd} {mmm} {yyyy}", dateExported );

        dateExportedMeta += " " + padNumber( dateExported.getHours() ) + ":" + padNumber( dateExported.getMinutes() ) + ":" + padNumber( dateExported.getSeconds() );

        return dateExportedMeta;
    }

    function exportEventsForSharing( events ) {
        var fileContents = getJsonContents( events ),
            fileMimeType = { 
                type: "text/plain"
            },
            fileBlob = new Blob( [ fileContents ], fileMimeType ),
            file = new File( [ fileBlob ], getExportDownloadFilename( "txt", _options.shareStartFilename ), fileMimeType ),
            fileShareData = {
                files: [ file ]
            };

        if ( _parameter_Navigator.canShare( fileShareData ) ) {
            _parameter_Navigator.share( fileShareData );
        }
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

        return csvContents.join( _string.newLine );
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
        text = text.toString().replace( /(\r\n|\n|\r)/gm, _string.empty ).replace( /(\s\s)/gm, _string.space );
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

    function getXmlContents( orderedEvents, filename ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        contents.push( "<?xml version=\"1.0\" ?>" );
        contents.push( "<Calendar>" );

        if ( isDefined( filename ) ) {
            contents.push( "<Filename>" + filename + "</Filename>" );
        }

        contents.push( "<LastModified>" + getExportDateTime() + "</LastModified>" );
        contents.push( "</Calendar>" );
        contents.push( "<Events>" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                propertyNames = getOrderedEventPropertyNameList( orderedEvent ),
                propertyNamesLength = propertyNames.length;

            contents.push( "<Event>" );

            for ( var propertyNameIndex = 0; propertyNameIndex < propertyNamesLength; propertyNameIndex++ ) {
                var propertyName = propertyNames[ propertyNameIndex ];

                if ( propertyName !== "customTags" ) {
                    if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                        var newPropertyName = getPropertyName( propertyName );
                        
                        contents.push( "<" + newPropertyName + ">" + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) + "</" + newPropertyName + ">" );
                    }
                }
            }
    
            contents.push( "</Event>" );
        }

        contents.push( "</Events>" );

        return contents.join( _string.newLine );
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

                if ( propertyName !== "customTags" ) {
                    if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                        contents.push( "\"" + propertyName + "\":" + getPropertyValue( propertyName, orderedEvent[ propertyName ], true ) + "," );
                    }
                }
            }

            var lastJsonEntry = contents[ contents.length - 1 ];
            contents[ contents.length - 1 ] = lastJsonEntry.substring( 0, lastJsonEntry.length - 1 );
            contents.push( "}," );
        }

        contents[ contents.length - 1 ] = "}";
        contents.push( "]" );
        contents.push( "}" );

        return contents.join( _string.newLine );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To TEXT
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getTextContents( orderedEvents, filename ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        if ( isDefined( filename) ) {
            contents.push( "Filename: " + filename );
        }

        contents.push( "Last Modified: " + getExportDateTime() );
        contents.push( _string.empty );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                propertyNames = getOrderedEventPropertyNameList( orderedEvent ),
                propertyNamesLength = propertyNames.length;

            for ( var propertyNameIndex = 0; propertyNameIndex < propertyNamesLength; propertyNameIndex++ ) {
                var propertyName = propertyNames[ propertyNameIndex ];

                if ( propertyName !== "customTags" ) {
                    if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                        contents.push( getPropertyName( propertyName ) + ": " + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) );
                    }
                }
            }
    
            contents.push( _string.empty );
        }

        contents.pop();

        return contents.join( _string.newLine );
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
        contents.push( "PRODID:-//Bunoon//Calendar.js v" + _that.getVersion() + "//EN" );
        contents.push( "CALSCALE:GREGORIAN" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                organizerName = getString( orderedEvent.organizerName ),
                organizerEmailAddress = getString( orderedEvent.organizerEmailAddress),
                repeatEvery = getNumber( orderedEvent.repeatEvery );

            if ( !isDefinedString( organizerName ) ) {
                organizerName = _options.organizerName;
            }

            if ( !isDefinedString( organizerEmailAddress ) ) {
                organizerEmailAddress = _options.organizerEmailAddress;
            }

            contents.push( "BEGIN:VEVENT" );
            contents.push( "UID:" + getString( orderedEvent.id ) );
            contents.push( "STATUS:CONFIRMED" );
            contents.push( "SEQUENCE:0" );

            if ( !isDefinedBoolean( orderedEvent.showAsBusy ) || orderedEvent.showAsBusy ) {
                contents.push( "TRANSP:OPAQUE" );
            } else {
                contents.push( "TRANSP:TRANSPARENT" );
            }

            if ( orderedEvent.isAllDay ) {
                contents.push( "DTSTART:" + getICalDateString( orderedEvent.from ) );
                contents.push( "DTEND:" + getICalDateString( orderedEvent.to ) );
            } else {
                contents.push( "DTSTART:" + getICalDateTimeString( orderedEvent.from ) );
                contents.push( "DTEND:" + getICalDateTimeString( orderedEvent.to ) );
            }
            
            if ( isDefinedDate( orderedEvent.created ) ) {
                var created = getICalDateTimeString( orderedEvent.created );

                contents.push( "DTSTAMP:" + created );
                contents.push( "CREATED:" + created );
            }

            if ( isDefinedDate( orderedEvent.lastUpdated ) ) {
                contents.push( "LAST-MODIFIED:" + getICalDateTimeString( orderedEvent.lastUpdated ) );
            }

            if ( isDefinedString( organizerName ) && isDefinedString( organizerEmailAddress ) ) {
                contents.push( "ORGANIZER;CN=" + organizerName + ":MAILTO:" + organizerEmailAddress );
            }

            if ( repeatEvery !== _enum_RepeatType.never ) {
                contents.push( "RRULE:" + getICalRRuleForEvent( orderedEvent, repeatEvery ) );
            }

            if ( isDefinedString( orderedEvent.title ) ) {
                contents.push( "SUMMARY:" + getICalSingleLine( orderedEvent.title ) );
            }

            if ( isDefinedString( orderedEvent.description ) ) {
                contents.push( "DESCRIPTION:" + getICalSingleLine( orderedEvent.description ) );
            }

            if ( isDefinedString( orderedEvent.location ) ) {
                contents.push( "LOCATION:" + getICalSingleLine( orderedEvent.location ) );
            }
            
            if ( isDefinedString( orderedEvent.url ) ) {
                contents.push( "URL:" + getICalSingleLine( orderedEvent.url ) );
            }
            
            if ( isDefinedString( orderedEvent.group ) ) {
                contents.push( "CATEGORIES:" + getICalSingleLine( orderedEvent.group ) );
            }

            if ( !isDefinedBoolean( orderedEvent.showAlerts ) || orderedEvent.showAlerts ) {
                contents.push( "BEGIN:VALARM" );
                contents.push( "TRIGGER;VALUE=DATE-TIME:" + getICalDateTimeString( orderedEvent.from ) );
                contents.push( "ACTION:DISPLAY" );
                contents.push( "END:VALARM" );
            }

            contents.push( "END:VEVENT" );
        }

        contents.push( "END:VCALENDAR" );

        return contents.join( _string.newLineCharacterReturn );
    }

    function getICalSingleLine( value ) {
        return stripNewLines( stripHTMLTagsFromText( getString( value ) ) );
    }

    function getICalDateTimeString( eventDate ) {
        var format = [];

        if ( isDefined( eventDate ) ) {
            format.push( eventDate.getFullYear() );
            format.push( padNumber( eventDate.getMonth() + 1 ) );
            format.push( padNumber( eventDate.getDate() ) );
            format.push( "T" );
            format.push( padNumber( eventDate.getHours() ) );
            format.push( padNumber( eventDate.getMinutes() ) );
            format.push( "00Z" );
        }

        return format.join( _string.empty );
    }

    function getICalDateString( eventDate ) {
        var format = [];

        if ( isDefined( eventDate ) ) {
            format.push( eventDate.getFullYear() );
            format.push( padNumber( eventDate.getMonth() + 1 ) );
            format.push( padNumber( eventDate.getDate() ) );
        }

        return format.join( _string.empty );
    }

    function getICalRRuleForEvent( orderedEvent, repeatEvery ) {
        var contents = [];

        if ( repeatEvery === _enum_RepeatType.custom ) {
            var repeatEveryCustomType = getNumber( orderedEvent.repeatEveryCustomType ),
                repeatEveryCustomValue = getNumber( orderedEvent.repeatEveryCustomValue );

            if ( repeatEveryCustomType === _enum_RepeatCustomType.daily ) {
                contents.push( "FREQ=DAILY" );
            } else if ( repeatEveryCustomType === _enum_RepeatCustomType.weekly ) {
                contents.push( "FREQ=WEEKLY" );
            } else if ( repeatEveryCustomType === _enum_RepeatCustomType.monthly ) {
                contents.push( "FREQ=MONTHLY" );
            } else if ( repeatEveryCustomType === _enum_RepeatCustomType.yearly ) {
                contents.push( "FREQ=YEARLY" );
            }

            contents.push( "INTERVAL=" + repeatEveryCustomValue.toString() );
        } else {

            if ( repeatEvery === _enum_RepeatType.everyDay ) {
                contents.push( "FREQ=DAILY" );
            } else if ( repeatEvery === _enum_RepeatType.everyWeek || repeatEvery === _enum_RepeatType.every2Weeks ) {
                contents.push( "FREQ=WEEKLY" );
            }  else if ( repeatEvery === _enum_RepeatType.everyMonth ) {
                contents.push( "FREQ=MONTHLY" );
            } else if ( repeatEvery === _enum_RepeatType.everyYear ) {
                contents.push( "FREQ=YEARLY" );
            }
    
            if ( repeatEvery === _enum_RepeatType.every2Weeks ) {
                contents.push( "INTERVAL=2" );
            } else {
                contents.push( "INTERVAL=1" );
            }
        }

        if ( isDefinedDate( orderedEvent.repeatEnds ) ) {
            var repeatEnds = new Date( orderedEvent.repeatEnds );
            repeatEnds.setDate( repeatEnds.getDate() + 1 );

            contents.push( "UNTIL=" + getICalDateTimeString( repeatEnds ) );
        }

        return contents.join( ";" );
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

        return contents.join( _string.newLine );
    }

    function getMdFileRow( contents ) {
        return "| " + contents.join( " | " ) + " |";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To HTML
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getHtmlContents( orderedEvents, filename ) {
        var contents = [],
            orderedEventLength = orderedEvents.length;

        contents.push( "<!DOCTYPE html>" );
        contents.push( "<html>" );
        contents.push( "<head>" );
        contents.push( "<meta charset=\"utf-8\" />" );
        contents.push( "<meta http-equiv=\"Last-Modified\" content=\"" + getExportDateTime() + " GMT\" />" );

        if ( isDefined( filename ) ) {
            contents.push( "<title>" + filename + "</title>" );
        }
        
        contents.push( "</head>" );
        contents.push( "<body>" );

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                propertyNames = getOrderedEventPropertyNameList( orderedEvent ),
                propertyNamesLength = propertyNames.length;

            contents.push( "<h3><b>" + orderedEvent.id + ":</b></h3>" );
            contents.push( "<ul>" );

            for ( var propertyNameIndex = 0; propertyNameIndex < propertyNamesLength; propertyNameIndex++ ) {
                var propertyName = propertyNames[ propertyNameIndex ];

                if ( propertyName !== "customTags" ) {
                    if ( orderedEvent.hasOwnProperty( propertyName ) && orderedEvent[ propertyName ] !== null ) {
                        contents.push( "<li><b>" + getPropertyName( propertyName ) + "</b>: " + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) + "</li>" );
                    }
                }
            }

            contents.push( "</ul>" );
        }

        contents.push( "</body>" );
        contents.push( "</html>" );

        return contents.join( _string.newLine );
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

        return csvContents.join( _string.newLine );
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
     * Triggering Custom Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function fireCustomTrigger( triggerFunction ) {
        var result = null,
            newArguments = [].slice.call( arguments, 1 );

        if ( newArguments.length > 0 ) {
            result = false;
        }

        if ( isDefinedFunction( triggerFunction ) ) {
            result = triggerFunction.apply( null, newArguments );
        }

        return result;
    }

    function setEventCustomTriggers( event, eventDetails, editEventDate ) {
        if ( isDefinedFunction( _options.events.onEventClick ) ) {
            event.addEventListener( "click", function() {
                fireCustomTrigger( _options.events.onEventClick, eventDetails );
            } );
        }

        if ( _options.manualEditingEnabled ) {
            event.ondblclick = function( e ) {
                cancelBubble( e );

                if ( isDefined( editEventDate ) ) {
                    showEventEditingDialog( eventDetails, null, null, editEventDate );
                } else {
                    showEventEditingDialog( eventDetails );
                }
            };
        } else {

            if ( isDefinedFunction( _options.events.onEventDoubleClick ) ) {
                event.ondblclick = function() {
                    fireCustomTrigger( _options.events.onEventDoubleClick, eventDetails );
                };
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Main Controls
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * turnOnFullScreen().
     * 
     * Turn on the full-screen mode (if enabled).
     * 
     * @public
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.turnOnFullScreen = function() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            turnOnFullScreenMode();
        }

        return _that;
    };

    /**
     * turnOffFullScreen().
     * 
     * Turn off the full-screen mode (if enabled).
     * 
     * @public
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.turnOffFullScreen = function() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            turnOffFullScreenMode();
        }

        return _that;
    };

    /**
     * isFullScreenActivated().
     * 
     * States if the full-screen mode is activated.
     * 
     * @public
     * 
     * @returns     {boolean}                                               States if the full-screen mode is activated.
     */
    _that.isFullScreenActivated = function() {
        return _element_Calendar_FullScreenModeOn;
    };

    /**
     * startTheAutoRefreshTimer().
     * 
     * Starts the auto-refresh timer (if enabled).
     * 
     * @public
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.startTheAutoRefreshTimer = function() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            _timer_AutoRefresh_Enabled = true;

            startAutoRefreshTimer();
        }

        return _that;
    };

    /**
     * stopTheAutoRefreshTimer().
     * 
     * Stops the auto-refresh timer (if enabled).
     * 
     * @public
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.stopTheAutoRefreshTimer = function() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            clearAutoRefreshTimer();
        
            _timer_AutoRefresh_Enabled = false;
        }

        return _that;
    };

    /**
     * destroy().
     * 
     * Removes the calendar from the DOM.
     * 
     * @public
     * @fires       onDestroy
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.destroy = function() {
        if ( _initialized ) {
            removeDocumentEvents();
            stopAndResetAllTimers();
            removeTrackedElementsFromDocument();
    
            if ( _element_Mode_DatePicker_Enabled ) {
                _parameter_Document.removeEventListener( "click", hideDatePickerMode );
            }
    
            if ( _options.tooltipsEnabled ) {
                document.body.removeEventListener( "mousemove", hideTooltip );
            }
    
            if ( isDefined( _element_Calendar ) ) {
                _element_Calendar.className = _string.empty;
                _element_Calendar.innerHTML = _string.empty;
            }
    
            fireCustomTrigger( _options.events.onDestroy, _parameter_ElementID );
        }

        return _that;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Navigation and Refreshing
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * moveToPreviousMonth().
     * 
     * Moves to the previous month.
     * 
     * @public
     * @fires       onPreviousMonth
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.moveToPreviousMonth = function() {
        onPreviousMonth();

        return _that;
    };

    /**
     * moveToNextMonth().
     * 
     * Moves to the next month.
     * 
     * @public
     * @fires       onNextMonth
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.moveToNextMonth = function() {
        onNextMonth();

        return _that;
    };

    /**
     * moveToPreviousYear().
     * 
     * Moves to the previous year.
     * 
     * @public
     * @fires       onPreviousYear
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.moveToPreviousYear = function() {
        moveBackYear();

        return _that;
    };

    /**
     * moveToNextYear().
     * 
     * Moves to the next year.
     * 
     * @public
     * @fires       onNextYear
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.moveToNextYear = function() {
        moveForwardYear();

        return _that;
    };

    /**
     * moveToToday().
     * 
     * Moves to the current month.
     * 
     * @public
     * @fires       onToday
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.moveToToday = function() {
        onCurrentMonth();

        return _that;
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
    _that.getCurrentDisplayDate = function() {
        return new Date( _calendar_CurrentDate );
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
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
     _that.setCurrentDisplayDate = function( date ) {
        if ( isDefinedDate( date ) && ( !_element_Mode_DatePicker_Enabled || _element_Mode_DatePicker_Visible ) ) {
            var newDate = new Date( date );

            if ( !doDatesMatch( _calendar_CurrentDate, newDate ) ) {
                if ( newDate.getFullYear() >= _options.minimumYear && newDate.getFullYear() <= _options.maximumYear ) {
                    build( newDate );
                    fireCustomTrigger( _options.events.onSetDate, newDate );
                }
            }
        }

        return _that;
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
    _that.getSelectedDatePickerDate = function() {
        return _element_Mode_DatePicker_Enabled ? new Date( _calendar_CurrentDate_ForDatePicker ) : null;
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
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setSelectedDatePickerDate = function( date ) {
        if ( isDefinedDate( date ) && _element_Mode_DatePicker_Enabled ) {
            var newDate = new Date( date ),
                newDateAllowed = isDateValidForDatePicker( newDate );
            
            if ( newDateAllowed && !doDatesMatch( newDate, _calendar_CurrentDate_ForDatePicker ) ) {
                if ( newDate.getFullYear() >= _options.minimumYear && newDate.getFullYear() <= _options.maximumYear ) {
                    newDate.setHours( 0, 0, 0, 0 );

                    hideDatePickerMode();
                    updateDatePickerInputValueDisplay( newDate );
                    fireCustomTrigger( _options.events.onDatePickerDateChanged, newDate );
    
                    _calendar_CurrentDate_ForDatePicker = newDate;
                }
            }
        }

        return _that;
    };

    /**
     * refresh().
     * 
     * Refreshes all of the views.
     * 
     * @public
     * @fires       onRefresh
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.refresh = function() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            refreshViews( true, true );
        }

        return _that;
    };

    function onPreviousMonth( e ) {
        if ( isDefined( e ) ) {
            cancelBubble( e );
        }

        if ( !_element_Mode_DatePicker_Enabled || _element_Mode_DatePicker_Visible ) {
            var previousMonth = new Date( _calendar_CurrentDate );
            previousMonth.setMonth( previousMonth.getMonth() - 1 );

            if ( previousMonth.getFullYear() >= _options.minimumYear ) {
                build( previousMonth );
                fireCustomTrigger( _options.events.onPreviousMonth, previousMonth );
                buildFullMonthViewPinUpImage();
            }
        }
    }

    function onNextMonth( e ) {
        if ( isDefined( e ) ) {
            cancelBubble( e );
        }

        if ( !_element_Mode_DatePicker_Enabled || _element_Mode_DatePicker_Visible ) {
            var nextMonth = new Date( _calendar_CurrentDate );
            nextMonth.setMonth( nextMonth.getMonth() + 1 );

            if ( nextMonth.getFullYear() <= _options.maximumYear ) {
                build( nextMonth );
                fireCustomTrigger( _options.events.onNextMonth, nextMonth );
                buildFullMonthViewPinUpImage();
            }
        }
    }

    function moveBackYear() {
        if ( !_element_Mode_DatePicker_Enabled || _element_Mode_DatePicker_Visible ) {
            var previousYear = new Date( _calendar_CurrentDate );
            previousYear.setFullYear( previousYear.getFullYear() - 1 );
    
            if ( previousYear.getFullYear() >= _options.minimumYear ) {
                build( previousYear );
                fireCustomTrigger( _options.events.onPreviousYear, previousYear );
                buildFullMonthViewPinUpImage();
            }
        }
    }

    function moveForwardYear() {
        if ( !_element_Mode_DatePicker_Enabled || _element_Mode_DatePicker_Visible ) {
            var nextYear = new Date( _calendar_CurrentDate );
            nextYear.setFullYear( nextYear.getFullYear() + 1 );

            if ( nextYear.getFullYear() <= _options.maximumYear ) {
                build( nextYear );
                fireCustomTrigger( _options.events.onNextYear, nextYear );
                buildFullMonthViewPinUpImage();
            }
        }
    }

    function onCurrentMonth() {
        if ( !_element_Mode_DatePicker_Enabled || _element_Mode_DatePicker_Visible ) {
            var today = new Date();

            if ( _calendar_CurrentDate.getMonth() !== today.getMonth() || _calendar_CurrentDate.getFullYear() !== today.getFullYear() ) {
                build();
                fireCustomTrigger( _options.events.onToday );
                buildFullMonthViewPinUpImage();
            }
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Export/Import Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * export().
     * 
     * Exports all the events into a downloadable file.
     * 
     * @public
     * @fires       onEventsExported
     * 
     * @param       {string}    [type]                                      The data type to export to (defaults to "csv", accepts "csv", "xml", "json", "txt", "ical", "md", "html", and "tsv").
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.export = function( type ) {
        if ( _options.exportEventsEnabled && !_element_Mode_DatePicker_Enabled ) {
            type = getDefaultString( type, "csv" );

            exportEvents( null, type );
        }

        return _that;
    };

    /**
     * import().
     * 
     * Imports the events from an array of file objects ("json" and "ical" files).
     * 
     * @public
     * @fires       onEventsImported
     * 
     * @param       {Object[]}    files                                     The file objects that the events should be imported from.
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.import = function( files ) {
        if ( _options.importEventsEnabled && !_element_Mode_DatePicker_Enabled ) {
            importEventsFromFiles( files );
        }

        return _that;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Add/Update/Remove Events
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventsSet" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setEvents = function( events, updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );
            _events = {};
    
            _that.addEvents( events, updateEvents, false );
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onEventsSet, events );
            }
        }

        return _that;
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventsSetFromJSON" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setEventsFromJson = function( json, updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            var dataObject = getObjectFromString( json );
    
            if ( isDefinedArray( dataObject ) ) { 
                _that.setEvents( dataObject, updateEvents, false );
            } else if ( isDefinedObject( dataObject ) && dataObject.hasOwnProperty( "events" ) ) {
                _that.setEvents( dataObject.events, updateEvents, false );
            }
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onEventsSetFromJSON, json );
            }
        }

        return _that;
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventsAdded" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.addEvents = function( events, updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );
    
            var eventsLength = events.length;
            for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                var event = events[ eventIndex ];
    
                _that.addEvent( event, false, false, false );
            }

            storeEventsInLocalStorage();
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onEventsAdded, events );
            }
    
            if ( updateEvents ) {
                updateSideMenu();
                buildFullMonthViewDayEvents();
                refreshOpenedViews();
            }
        }

        return _that;
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventsAddedFromJSON" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.addEventsFromJson = function( json, updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            var dataObject = getObjectFromString( json );
    
            if ( isDefinedArray( dataObject ) ) { 
                _that.addEvents( dataObject, updateEvents, false );
            } else if ( isDefinedObject( dataObject ) && dataObject.hasOwnProperty( "events" ) ) {
                _that.addEvents( dataObject.events, updateEvents, false );
            }
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onEventsAddedFromJSON, json );
            }
        }

        return _that;
    };

    /**
     * addEvent().
     * 
     * Adds a new event.
     * 
     * @public
     * @fires       onEventAdded
     * 
     * @param       {Event}     event                                       The event (refer to "Day Event" documentation for properties).
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventAdded" event should be triggered (defaults to true).
     * @param       {boolean}   [setLastUpdated]                            States if the "lastUpdated" date should be set (defaults to true).
     * 
     * @returns     {boolean}                                               States if the event was added.
     */
    _that.addEvent = function( event, updateEvents, triggerEvent, setLastUpdated ) {
        var added = false;

        if ( !_element_Mode_DatePicker_Enabled ) {
            setLastUpdated = getDefaultBoolean( setLastUpdated, true );

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

            if ( event.color === _options.defaultEventBackgroundColor ) {
                event.color = null;
            }

            if ( event.colorText === _options.defaultEventTextColor ) {
                event.colorText = null;
            }

            if ( event.colorBorder === _options.defaultEventBorderColor ) {
                event.colorBorder = null;
            }
    
            if ( event.from <= event.to ) {
                var storageDate = toStorageDate( event.from ),
                    storageGuid = newGuid();
    
                if ( !_events.hasOwnProperty( storageDate ) ) {
                    _events[ storageDate ] = {};
                }
    
                if ( !_events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                    updateEvents = getDefaultBoolean( updateEvents, true );
                    triggerEvent = getDefaultBoolean( triggerEvent, true );

                    var title = getString( event.title ),
                        description = getString( event.description ),
                        location = getString( event.location ),
                        group = getString( event.group ),
                        url = getString( event.url );

                    if ( isDefined( _options_Configuration.visibleGroups ) && !isDefinedFunction( _options.events.onEventsFetch ) ) {
                        var groupName = getGroupName( group );

                        if ( _options_Configuration.visibleGroups.indexOf( groupName ) === _value.notFound ) {
                            _options_Configuration.visibleGroups.push( groupName );
                        }
                    }
    
                    if ( !isDefined( event.id ) ) {
                        event.id = storageGuid;
                    } else {
                        storageGuid = event.id;
                    }
    
                    if ( _options.maximumEventTitleLength > 0 && title !== _string.empty && title.length > _options.maximumEventTitleLength ) {
                        event.title = event.title.substring( 0, _options.maximumEventTitleLength );
                    }
    
                    if ( _options.maximumEventDescriptionLength > 0 && description !== _string.empty && description.length > _options.maximumEventDescriptionLength ) {
                        event.description = event.description.substring( 0, _options.maximumEventDescriptionLength );
                    }
    
                    if ( _options.maximumEventLocationLength > 0 && location !== _string.empty && location.length > _options.maximumEventLocationLength ) {
                        event.location = event.location.substring( 0, _options.maximumEventLocationLength );
                    }
    
                    if ( _options.maximumEventGroupLength > 0 && group !== _string.empty && group.length > _options.maximumEventGroupLength ) {
                        event.group = event.group.substring( 0, _options.maximumEventGroupLength );
                    }
    
                    if ( url !== _string.empty && !isValidUrl( url ) ) {
                        event.url = _string.empty;
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
                        fireCustomTrigger( _options.events.onEventAdded, event );
                    }
            
                    if ( updateEvents ) {
                        storeEventsInLocalStorage();
                        updateSideMenu();
                        buildFullMonthViewDayEvents();
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventsUpdated" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.updateEvents = function( events, updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );
    
            var eventsLength = events.length;
            for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                var event = events[ eventIndex ];
    
                _that.updateEvent( event.id, event, false, false );
            }
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onEventsUpdated, events );
            }
    
            if ( updateEvents ) {
                storeEventsInLocalStorage();
                updateSideMenu();
                buildFullMonthViewDayEvents();
                refreshOpenedViews();
            }
        }

        return _that;
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventUpdated" event should be triggered (defaults to true).
     * 
     * @returns     {boolean}                                               States if the event was updated.
     */
    _that.updateEvent = function( id, event, updateEvents, triggerEvent ) {
        var updated = false;

        if ( !_element_Mode_DatePicker_Enabled ) {
            updated = _that.removeEvent( id, false, false );

            if ( updated ) {
                updateEvents = getDefaultBoolean( updateEvents, true );
                triggerEvent = getDefaultBoolean( triggerEvent, true );
    
                updated = _that.addEvent( event, updateEvents, false );

                storeEventsInLocalStorage();
    
                if ( updated && triggerEvent ) {
                    fireCustomTrigger( _options.events.onEventUpdated, event );
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventUpdated" event should be triggered (defaults to true).
     * 
     * @returns     {boolean}                                               States if the event was updated.
     */
    _that.updateEventDateTimes = function( id, from, to, repeatEnds, updateEvents, triggerEvent ) {
        var updated = false;

        if ( !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            getAllEventsFunc( function( eventDetails ) {
                if ( eventDetails.id === id ) {
                    eventDetails.from = from;
                    eventDetails.to = to;
                    eventDetails.repeatEnds = repeatEnds;
                    updated = true;
    
                    if ( triggerEvent ) {
                        fireCustomTrigger( _options.events.onEventUpdated, eventDetails );
                    }
    
                    if ( updateEvents ) {
                        storeEventsInLocalStorage();
                        updateSideMenu();
                        buildFullMonthViewDayEvents();
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventRemoved" event should be triggered (defaults to true).
     * 
     * @returns     {boolean}                                               States if the event was removed.
     */
    _that.removeEvent = function( id, updateEvents, triggerEvent ) {
        var removed = false;

        if ( !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );
            
            getAllEventsFunc( function( event, storageDate, storageGuid ) {
                if ( storageGuid === id ) {
                    delete _events[ storageDate ][ storageGuid ];
                    removed = true;
    
                    if ( triggerEvent ) {
                        fireCustomTrigger( _options.events.onEventRemoved, event );
                    }
    
                    if ( updateEvents ) {
                        storeEventsInLocalStorage();
                        updateSideMenu();
                        buildFullMonthViewDayEvents();
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventsCleared" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.clearEvents = function( updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );
    
            _events = {};
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onEventsCleared );
            }
    
            if ( updateEvents ) {
                storeEventsInLocalStorage();
                updateSideMenu();
                buildFullMonthViewDayEvents();
                refreshOpenedViews();
            }
        }

        return _that;
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
    _that.getEvents = function() {
        var events = [];

        if ( !_element_Mode_DatePicker_Enabled ) {
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
    _that.getEvent = function( id ) {
        var returnEvent = null;

        if ( isDefinedString( id ) && !_element_Mode_DatePicker_Enabled ) {
            getAllEventsFunc( function( eventDetails ) {
                if ( eventDetails.id === id ) {
                    returnEvent = eventDetails;
                    return true;
                }
            } );
        }

        return returnEvent;
    };

    /**
     * removeExpiredEvents().
     * 
     * Removes all events (non-repeating) that have expired.
     * 
     * @public
     * @fires       onEventRemoved
     * 
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onEventRemoved" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.removeExpiredEvents = function( updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );
    
            getAllEventsFunc( function( eventDetails ) {
                var repeatEvery = getNumber( eventDetails.repeatEvery );
                if ( repeatEvery === _enum_RepeatType.never && eventDetails.to < new Date() ) {
                    _that.removeEvent( eventDetails.id, false, triggerEvent );
                }
            } );
    
            if ( updateEvents ) {
                storeEventsInLocalStorage();
                updateSideMenu();
                buildFullMonthViewDayEvents();
                refreshOpenedViews();
            }
        }

        return _that;
    };

    function toStorageDate( date ) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Setting Event Types
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * addEventType().
     * 
     * Adds a new event type.
     * 
     * @public
     * 
     * @param       {number}    id                                          The ID for the event type.
     * @param       {string}    text                                        The text for the event type.
     * 
     * @returns     {boolean}                                               States if the event type was added.
     */
    _that.addEventType = function( id, text ) {
        var result = false;

        if ( isDefinedNumber( id ) && isDefinedString( text ) && !_element_Mode_DatePicker_Enabled ) {
            if ( !_options_EventType.hasOwnProperty( id ) ) {
                _options_EventType[ id ] = {
                    text: text,
                    eventEditorInput: null
                };

                if ( isDefined( _options_Configuration.visibleEventTypes ) ) {
                    _options_Configuration.visibleEventTypes.push( id );
                }

                result = true;
            }
        }

        return result;
    };

    /**
     * removeEventType().
     * 
     * Removes an event type.
     * 
     * @public
     * 
     * @param       {number}    id                                          The ID for the event type to remove.
     * 
     * @returns     {boolean}                                               States if the event type was removed.
     */
    _that.removeEventType = function( id ) {
        var result = false;

        if ( isDefinedNumber( id ) && !_element_Mode_DatePicker_Enabled ) {
            if ( _options_EventType.hasOwnProperty( id ) ) {
                delete _options_EventType[ id ];
                result = true;
            }
        }

        return result;
    };

    /**
     * setVisibleEventTypes().
     * 
     * Set which event types are visible.
     * 
     * @public
     * @fires       onVisibleEventTypesChanged
     * 
     * @param       {number[]}  ids                                         The IDs of the event types to make visible.
     * @param       {boolean}   [triggerEvent]                              States if the "onVisibleEventTypesChanged" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setVisibleEventTypes = function( ids, triggerEvent ) {
        if ( isDefinedArray( ids ) && !_element_Mode_DatePicker_Enabled ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            _options_Configuration.visibleEventTypes = [];

            var idsLength = ids.length;

            for ( var idIndex = 0; idIndex < idsLength; idIndex++ ) {
                if ( _options_Configuration.visibleEventTypes.indexOf( ids[ idIndex ] ) === _value.notFound ) {
                    _options_Configuration.visibleEventTypes.push( ids[ idIndex ] );
                }
            }

            refreshViews( true, false );

            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onVisibleEventTypesChanged, _options_Configuration.visibleEventTypes );
            }
        }

        return _that;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Add/Clear/Remove Groups
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
    _that.getAllGroups = function() {
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onGroupsCleared" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.clearAllGroups = function( updateEvents, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            getAllEventsFunc( function( eventDetails ) {
                eventDetails.group = null;
            } );

            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onGroupsCleared );
            }

            if ( updateEvents ) {
                updateSideMenu();
                buildFullMonthViewDayEvents();
                refreshOpenedViews();
            }
        }

        return _that;
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
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * @param       {boolean}   [triggerEvent]                              States if the "onGroupRemoved" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.removeGroup = function( groupName, updateEvents, triggerEvent ) {
        if ( isDefinedString( groupName ) && !_element_Mode_DatePicker_Enabled ) {
            updateEvents = getDefaultBoolean( updateEvents, true );
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            var checkGroupName = groupName.toLowerCase();

            getAllEventsFunc( function( eventDetails ) {
                if ( eventDetails.group !== null && eventDetails.group.toLowerCase() === checkGroupName ) {
                    eventDetails.group = null;
                }
            } );

            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onGroupRemoved, groupName );
            }

            if ( updateEvents ) {
                updateSideMenu();
                buildFullMonthViewDayEvents();
                refreshOpenedViews();
            }
        }

        return _that;
    };

    /**
     * setVisibleGroups().
     * 
     * Set which groups are visible.
     * 
     * @public
     * @fires       onVisibleGroupsChanged
     * 
     * @param       {string[]}  groupNames                                  The names of the groups to make visible.
     * @param       {boolean}   [triggerEvent]                              States if the "onVisibleGroupsChanged" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setVisibleGroups = function( groupNames, triggerEvent ) {
        if ( isDefinedArray( groupNames ) && !_element_Mode_DatePicker_Enabled ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            _options_Configuration.visibleGroups = [];

            var groupNamesLength = groupNames.length;

            for ( var groupNameIndex = 0; groupNameIndex < groupNamesLength; groupNameIndex++ ) {
                var groupName = getGroupName( groupNames[ groupNameIndex ] );

                if ( _options_Configuration.visibleGroups.indexOf( groupName ) === _value.notFound ) {
                    _options_Configuration.visibleGroups.push( groupName );
                }
            }

            refreshViews( true, false );

            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onVisibleGroupsChanged, _options_Configuration.visibleGroups );
            }
        }

        return _that;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Internal Clipboard
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
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setClipboardEvent = function( event ) {
        if ( isDefinedObject( event ) && !_element_Mode_DatePicker_Enabled ) {
            _events_Copied = [ cloneEventDetails( event ) ];
        }

        return _that;
    };

    /**
     * setClipboardEvents().
     * 
     * Set the clipboard events.
     * 
     * @public
     * 
     * @param       {Event[]}   events                                      The events to set (refer to "Day Event" documentation for properties).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setClipboardEvents = function( events ) {
        if ( isDefinedArray( events ) && !_element_Mode_DatePicker_Enabled ) {
            _events_Copied = [];

            var eventsLength = events.length;

            for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                _events_Copied.push( cloneEventDetails( events[ eventIndex ] ) );
            }
        }

        return _that;
    };

    /**
     * getClipboardEvents().
     * 
     * Returns the events copied in the clipboard.
     * 
     * @public
     * 
     * @returns     {Event[]}                                               The copied events details.
     */
    _that.getClipboardEvents = function() {
        var result = null;

        if ( !_element_Mode_DatePicker_Enabled ) {
            result = _events_Copied;
        }

        return result;
    };

    /**
     * clearClipboard().
     * 
     * Clears the internal clipboard.
     * 
     * @public
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.clearClipboard = function() {
        if ( !_element_Mode_DatePicker_Enabled ) {
            _events_Copied = [];
        }

        return _that;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Additional Data
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
    _that.getVersion = function() {
        return "2.11.0";
    };

    /**
     * getId().
     * 
     * Returns the ID of this Calendar.js instance.
     * 
     * @public
     * 
     * @returns     {string}                                                The Calendar ID.
     */
    _that.getId = function() {
        return _parameter_ElementID;
    };

    /**
     * isBusy().
     * 
     * Returns a flag that states if the calendar is busy.
     * 
     * @public
     * 
     * @returns     {boolean}                                               States if the calendar is busy.
     */
    _that.isBusy = function() {
        return _calendar_IsBusy;
    };

    /**
     * getCurrentView().
     * 
     * Returns the ID of the current view.
     * 
     * @public
     * 
     * @returns     {string}                                                The current view name ID.
     */
    _that.getCurrentView = function() {
        return fireViewChangeCustomTrigger( false );
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Setting Options
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
     * @param       {boolean}   [triggerEvent]                              States if the "onOptionsUpdated" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setOptions = function( newOptions, triggerEvent ) {
        for ( var propertyName in newOptions ) {
            if ( newOptions.hasOwnProperty( propertyName ) ) {
                _options[ propertyName ] = newOptions[ propertyName ];
            }
        }

        buildDefaultOptions( _options );
        resetOptionsForDatePickerMode();
        checkForBrowserNotificationsPermission();

        if ( _initialized ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );

            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onOptionsUpdated, _options );
            }

            _initialized = false;

            if ( !_element_Mode_DatePicker_Enabled || _element_Mode_DatePicker_Visible ) {
                build( _calendar_CurrentDate, true, true );
            }
        }

        return _that;
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
     * @param       {boolean}   [triggerEvent]                              States if the "onSearchOptionsUpdated" event should be triggered (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.setSearchOptions = function( newSearchOptions, triggerEvent ) {
        if ( !_element_Mode_DatePicker_Enabled ) {
            newSearchOptions = getOptions( newSearchOptions );
            triggerEvent = getDefaultBoolean( triggerEvent, true );
    
            hideSearchDialog();
    
            for ( var propertyName in newSearchOptions ) {
                if ( newSearchOptions.hasOwnProperty( propertyName ) ) {
                    _options_Search[ propertyName ] = newSearchOptions[ propertyName ];
                }
            }
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onSearchOptionsUpdated, _options_Search );
            }
        }

        return _that;
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
     * @param       {boolean}   [triggerEvent]                              States if the "onOptionsUpdated" event should be triggered (defaults to true).
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.addHolidays = function( holidays, triggerEvent, updateEvents ) {
        if ( isDefinedArray( holidays ) && !_element_Mode_DatePicker_Enabled ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );
            updateEvents = getDefaultBoolean( updateEvents, true );
    
            _options.holidays = _options.holidays.concat( holidays );
    
            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onOptionsUpdated, _options );
            }
    
            if ( updateEvents ) {
                build( _calendar_CurrentDate, true, true );
            }   
        }

        return _that;
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
     * @param       {boolean}   [triggerEvent]                              States if the "onOptionsUpdated" event should be triggered (defaults to true).
     * @param       {boolean}   [updateEvents]                              States if the calendar display should be updated (defaults to true).
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _that.removeHolidays = function( holidayNames, triggerEvent, updateEvents ) {
        if ( isDefinedArray( holidayNames ) && !_element_Mode_DatePicker_Enabled ) {
            triggerEvent = getDefaultBoolean( triggerEvent, true );
            updateEvents = getDefaultBoolean( updateEvents, true );

            var holidaysLength = _options.holidays.length,
                holidaysRemaining = [];

            for ( var holidayIndex = 0; holidayIndex < holidaysLength; holidayIndex++ ) {
                var holiday = _options.holidays[ holidayIndex ],
                    holidayText = getString( holiday.title, _string.empty );

                if ( holidayNames.indexOf( holidayText ) === _value.notFound ) {
                    holidaysRemaining.push( holiday );
                }
            }

            _options.holidays = holidaysRemaining;

            if ( triggerEvent ) {
                fireCustomTrigger( _options.events.onOptionsUpdated, _options );
            }

            if ( updateEvents ) {
                build( _calendar_CurrentDate, true, true );
            }
        }

        return _that;
    };

    /**
     * getHolidays().
     * 
     * Returns the holidays.
     * 
     * @public
     * 
     * @returns     {Holiday[]}                                             All the holidays.
     */
    _that.getHolidays = function() {
        return _options.holidays;
    };

    function buildDefaultOptions( newOptions ) {
        _options = getOptions( newOptions );
        _options.views = getOptions( _options.views );
        _options.showDayNumberOrdinals = getDefaultBoolean( _options.showDayNumberOrdinals, true );
        _options.dragAndDropForEventsEnabled = getDefaultBoolean( _options.dragAndDropForEventsEnabled, true );
        _options.exportEventsEnabled = getDefaultBoolean( _options.exportEventsEnabled, true );
        _options.manualEditingEnabled = getDefaultBoolean( _options.manualEditingEnabled, true );
        _options.autoRefreshTimerDelay = getDefaultNumber(_options.autoRefreshTimerDelay, 30000 );
        _options.fullScreenModeEnabled = getDefaultBoolean( _options.fullScreenModeEnabled, true );
        _options.tooltipDelay = getDefaultNumber( _options.tooltipDelay, 1000 );
        _options.holidays = getDefaultArray( _options.holidays, getStandardHolidays() );
        _options.organizerName = getDefaultString( _options.organizerName, _string.empty );
        _options.organizerEmailAddress = getDefaultString( _options.organizerEmailAddress, _string.empty );
        _options.spacing = getDefaultNumber( _options.spacing, 10 );
        _options.maximumEventTitleLength = getDefaultNumber( _options.maximumEventTitleLength, 0 );
        _options.maximumEventDescriptionLength = getDefaultNumber( _options.maximumEventDescriptionLength, 0 );
        _options.maximumEventLocationLength = getDefaultNumber( _options.maximumEventLocationLength, 0 );
        _options.maximumEventGroupLength = getDefaultNumber( _options.maximumEventGroupLength, 0 );
        _options.eventNotificationsEnabled = getDefaultBoolean( _options.eventNotificationsEnabled, false );
        _options.tooltipsEnabled = getDefaultBoolean( _options.tooltipsEnabled, true );
        _options.urlWindowTarget = getDefaultString( _options.urlWindowTarget, "_blank" );
        _options.defaultEventBackgroundColor = getDefaultString( _options.defaultEventBackgroundColor, "#484848" );
        _options.defaultEventTextColor = getDefaultString( _options.defaultEventTextColor, "#F5F5F5" );
        _options.defaultEventBorderColor = getDefaultString( _options.defaultEventBorderColor, "#282828" );
        _options.hideEventsWithoutGroupAssigned = getDefaultBoolean( _options.hideEventsWithoutGroupAssigned, false );
        _options.showHolidays = getDefaultBoolean( _options.showHolidays, true );
        _options.useTemplateWhenAddingNewEvent = getDefaultBoolean( _options.useTemplateWhenAddingNewEvent, true );
        _options.useEscapeKeyToExitFullScreenMode = getDefaultBoolean( _options.useEscapeKeyToExitFullScreenMode, true );
        _options.allowHtmlInDisplay = getDefaultBoolean( _options.allowHtmlInDisplay, false );
        _options.initialDateTime = getDefaultDate( _options.initialDateTime, null );
        _options.data = getDefaultArray( _options.data, null );
        _options.weekendDays = isInvalidOptionArray( _options.weekendDays, 0 ) ? [ 0, 6 ] : _options.weekendDays;
        _options.workingDays = isInvalidOptionArray( _options.workingDays, 0 ) ? [] : _options.workingDays;
        _options.minimumYear = getDefaultNumber( _options.minimumYear, 1900 );
        _options.maximumYear = getDefaultNumber( _options.maximumYear, 2099 );
        _options.defaultEventDuration = getDefaultNumber( _options.defaultEventDuration, 30 );
        _options.configurationDialogEnabled = getDefaultBoolean( _options.configurationDialogEnabled, true );
        _options.popUpNotificationsEnabled = getDefaultBoolean( _options.popUpNotificationsEnabled, true );
        _options.startOfWeekDay = getDefaultNumber( _options.startOfWeekDay, _enum_Day.monday );
        _options.useLocalStorageForEvents = getDefaultBoolean( _options.useLocalStorageForEvents, false );
        _options.shortcutKeysEnabled = getDefaultBoolean( _options.shortcutKeysEnabled, true );
        _options.reverseOrderDaysOfWeek = getDefaultBoolean( _options.reverseOrderDaysOfWeek, false );
        _options.importEventsEnabled = getDefaultBoolean( _options.importEventsEnabled, true );
        _options.useAmPmForTimeDisplays = getDefaultBoolean( _options.useAmPmForTimeDisplays, false );
        _options.isWidget = getDefaultBoolean( _options.isWidget, false );
        _options.viewToOpenOnFirstLoad = getDefaultString( _options.viewToOpenOnFirstLoad, null );
        _options.eventColorsEditingEnabled = getDefaultBoolean( _options.eventColorsEditingEnabled, true );
        _options.eventTooltipDelay = getDefaultNumber( _options.eventTooltipDelay, 1000 );

        if ( isInvalidOptionArray( _options.visibleDays ) ) {
            _options.visibleDays = [ 0, 1, 2, 3, 4, 5, 6 ];
            _element_Calendar_PreviousDaysVisibleBeforeSingleDayView = [];
        }

        buildDefaultWorkingHourOptions();
        buildDefaultSideMenuOptions();
        buildDefaultViewOptionsForFullDay();
        buildDefaultViewOptionsForFullWeek();
        buildDefaultViewOptionsForFullMonth();
        buildDefaultViewOptionsForFullYear();
        buildDefaultViewOptionsForTimeline();
        buildDefaultViewOptionsForAllEvents();
        buildDefaultViewOptionsForDatePicker();
        buildDefaultEventOptions();
        buildDefaulStringOptions();
        setEventTypeTranslationStringOptions();
        checkForBrowserNotificationsPermission();
    }

    function buildDefaultWorkingHourOptions() {
        var workingHoursStart = getDefaultString( _options.workingHoursStart, null ),
            workingHoursEnd = getDefaultString( _options.workingHoursEnd, null );

        if ( !isDefined( workingHoursStart ) ) {
            workingHoursStart = getDefaultObject( _options.workingHoursStart, null );
        }

        if ( !isDefined( workingHoursEnd ) ) {
            workingHoursEnd = getDefaultObject( _options.workingHoursEnd, null );
        }

        _options.workingHoursStart = workingHoursStart;
        _options.workingHoursEnd = workingHoursEnd;
    }

    function buildDefaultSideMenuOptions() {
        _options.sideMenu = getOptions( _options.views.sideMenu );
        _options.sideMenu.showDays = getDefaultBoolean( _options.sideMenu.showDays, true );
        _options.sideMenu.showGroups = getDefaultBoolean( _options.sideMenu.showGroups, true );
        _options.sideMenu.showEventTypes = getDefaultBoolean( _options.sideMenu.showEventTypes, true );
        _options.sideMenu.showWorkingDays = getDefaultBoolean( _options.sideMenu.showWorkingDays, true );
        _options.sideMenu.showWeekendDays = getDefaultBoolean( _options.sideMenu.showWeekendDays, true );
    }

    function buildDefaultViewOptionsForFullDay() {
        _options.views.fullDay = getOptions( _options.views.fullDay );
        _options.views.fullDay.showAllDayEventDetails = getDefaultBoolean( _options.views.fullDay.showAllDayEventDetails, false );
        _options.views.fullDay.minutesBetweenSections = getDefaultNumber( _options.views.fullDay.minutesBetweenSections, 30 );
        _options.views.fullDay.showTimelineArrow = getDefaultBoolean( _options.views.fullDay.showTimelineArrow, true );
        _options.views.fullDay.showExtraTitleBarButtons = getDefaultBoolean( _options.views.fullDay.showExtraTitleBarButtons, true );
    }

    function buildDefaultViewOptionsForFullWeek() {
        _options.views.fullWeek = getOptions( _options.views.fullWeek );
        _options.views.fullWeek.showAllDayEventDetails = getDefaultBoolean( _options.views.fullWeek.showAllDayEventDetails, false );
        _options.views.fullWeek.showDayNamesHeaders = getDefaultBoolean( _options.views.fullWeek.showDayNamesHeaders, true );
        _options.views.fullWeek.minutesBetweenSections = getDefaultNumber( _options.views.fullWeek.minutesBetweenSections, 30 );
        _options.views.fullWeek.showTimelineArrow = getDefaultBoolean( _options.views.fullWeek.showTimelineArrow, true );
        _options.views.fullWeek.showWeekNumbersInTitles = getDefaultBoolean( _options.views.fullWeek.showWeekNumbersInTitles, false );
        _options.views.fullWeek.showExtraTitleBarButtons = getDefaultBoolean( _options.views.fullWeek.showExtraTitleBarButtons, true );
    }

    function buildDefaultViewOptionsForFullMonth() {
        _options.views.fullMonth = getOptions( _options.views.fullMonth );
        _options.views.fullMonth.maximumEventsPerDayDisplay = getDefaultNumber( _options.views.fullMonth.maximumEventsPerDayDisplay, 3 );
        _options.views.fullMonth.showTimesInEvents = getDefaultBoolean( _options.views.fullMonth.showTimesInEvents, false );
        _options.views.fullMonth.minimumDayHeight = getDefaultNumber( _options.views.fullMonth.minimumDayHeight, 0 );
        _options.views.fullMonth.showPreviousNextMonthNames = getDefaultBoolean( _options.views.fullMonth.showPreviousNextMonthNames, true );
        _options.views.fullMonth.useOnlyDotEvents = getDefaultBoolean( _options.views.fullMonth.useOnlyDotEvents, false );
        _options.views.fullMonth.applyCssToEventsNotInCurrentMonth = getDefaultBoolean( _options.views.fullMonth.applyCssToEventsNotInCurrentMonth, true );
        _options.views.fullMonth.addYearButtons = getDefaultBoolean( _options.views.fullMonth.addYearButtons, false );
        _options.views.fullMonth.titleBarDateFormat = getDefaultString( _options.views.fullMonth.titleBarDateFormat, "{mmmm} {yyyy}" );
        _options.views.fullMonth.showDayNamesHeaders = getDefaultBoolean( _options.views.fullMonth.showDayNamesHeaders, true );
        _options.views.fullMonth.isPinUpViewEnabled = getDefaultBoolean( _options.views.fullMonth.isPinUpViewEnabled, false );
        _options.views.fullMonth.pinUpViewImageUrls = getDefaultArray( _options.views.fullMonth.pinUpViewImageUrls, [] );
        _options.views.fullMonth.showMonthButtonsInYearDropDownMenu = getDefaultBoolean( _options.views.fullMonth.showMonthButtonsInYearDropDownMenu, true );
        _options.views.fullMonth.showExtraTitleBarButtons = getDefaultBoolean( _options.views.fullMonth.showExtraTitleBarButtons, true );

        if ( !isDefinedBoolean( _options.views.fullMonth.allowEventScrolling ) ) {
            _options.views.fullMonth.allowEventScrolling = false;

            if ( _options.views.fullMonth.allowEventScrolling ) {
                _options.views.fullMonth.maximumEventsPerDayDisplay = 0;
            }
        }
    }

    function buildDefaultViewOptionsForFullYear() {
        _options.views.fullYear = getOptions( _options.views.fullYear );
        _options.views.fullYear.showExtraTitleBarButtons = getDefaultBoolean( _options.views.fullYear.showExtraTitleBarButtons, true );
    }

    function buildDefaultViewOptionsForTimeline() {
        _options.views.timeline = getOptions( _options.views.timeline );
        _options.views.timeline.defaultAxis = getDefaultString( _options.views.timeline.defaultAxis, "group" );
        _options.views.timeline.minutesBetweenSections = getDefaultNumber( _options.views.timeline.minutesBetweenSections, 30 );
        _options.views.timeline.showExtraTitleBarButtons = getDefaultBoolean( _options.views.timeline.showExtraTitleBarButtons, true );
    }

    function buildDefaultViewOptionsForAllEvents() {
        _options.views.allEvents = getOptions( _options.views.allEvents );
        _options.views.allEvents.showExtraTitleBarButtons = getDefaultBoolean( _options.views.allEvents.showExtraTitleBarButtons, true );
    }

    function buildDefaultViewOptionsForDatePicker() {
        _options.views.datePicker = getOptions( _options.views.datePicker );
        _options.views.datePicker.selectedDateFormat = getDefaultString( _options.views.datePicker.selectedDateFormat, "{d}{o} {mmmm} {yyyy}" );
        _options.views.datePicker.minimumDate = getDefaultDate( _options.views.datePicker.minimumDate, null );
        _options.views.datePicker.maximumDate = getDefaultDate( _options.views.datePicker.maximumDate, null );
    }

    function buildDefaultEventOptions() {
        _options.events = getOptions( _options.events );
        _options.events.onPreviousMonth = getDefaultFunction( _options.events.onPreviousMonth, null );
        _options.events.onNextMonth = getDefaultFunction( _options.events.onNextMonth, null );
        _options.events.onPreviousYear = getDefaultFunction( _options.events.onPreviousYear, null );
        _options.events.onNextYear = getDefaultFunction( _options.events.onNextYear, null );
        _options.events.onToday = getDefaultFunction( _options.events.onToday, null );
        _options.events.onEventAdded = getDefaultFunction( _options.events.onEventAdded, null );
        _options.events.onEventUpdated = getDefaultFunction( _options.events.onEventUpdated, null );
        _options.events.onEventRemoved = getDefaultFunction( _options.events.onEventRemoved, null );
        _options.events.onEventsAdded = getDefaultFunction( _options.events.onEventsAdded, null );
        _options.events.onEventsCleared = getDefaultFunction( _options.events.onEventsCleared, null );
        _options.events.onEventsExported = getDefaultFunction( _options.events.onEventsExported, null );
        _options.events.onSetDate = getDefaultFunction( _options.events.onSetDate, null );
        _options.events.onEventsSet = getDefaultFunction( _options.events.onEventsSet, null );
        _options.events.onGroupsCleared = getDefaultFunction( _options.events.onGroupsCleared, null );
        _options.events.onEventsUpdated = getDefaultFunction( _options.events.onEventsUpdated, null );
        _options.events.onOptionsUpdated = getDefaultFunction( _options.events.onOptionsUpdated, null );
        _options.events.onNotificationClicked = getDefaultFunction( _options.events.onNotificationClicked, null );
        _options.events.onSearchOptionsUpdated = getDefaultFunction( _options.events.onSearchOptionsUpdated, null );
        _options.events.onFullScreenModeChanged = getDefaultFunction( _options.events.onFullScreenModeChanged, null );
        _options.events.onEventsSetFromJSON = getDefaultFunction( _options.events.onEventsSetFromJSON, null );
        _options.events.onEventsAddedFromJSON = getDefaultFunction( _options.events.onEventsAddedFromJSON, null );
        _options.events.onDatePickerDateChanged = getDefaultFunction( _options.events.onDatePickerDateChanged, null );
        _options.events.onGroupRemoved = getDefaultFunction( _options.events.onGroupRemoved, null );
        _options.events.onEventUrlClicked = getDefaultFunction( _options.events.onEventUrlClicked, null );
        _options.events.onDestroy = getDefaultFunction( _options.events.onDestroy, null );
        _options.events.onRefresh = getDefaultFunction( _options.events.onRefresh, null );
        _options.events.onDatePickerOpened = getDefaultFunction( _options.events.onDatePickerOpened, null );
        _options.events.onDatePickerClosed = getDefaultFunction( _options.events.onDatePickerClosed, null );
        _options.events.onRender = getDefaultFunction( _options.events.onRender, null );
        _options.events.onEventDragStart = getDefaultFunction( _options.events.onEventDragStart, null );
        _options.events.onEventDragStop = getDefaultFunction( _options.events.onEventDragStop, null );
        _options.events.onEventDragDrop = getDefaultFunction( _options.events.onEventDragDrop, null );
        _options.events.onEventClick = getDefaultFunction( _options.events.onEventClick, null );
        _options.events.onEventDoubleClick = getDefaultFunction( _options.events.onEventDoubleClick, null );
        _options.events.onVisibleGroupsChanged = getDefaultFunction( _options.events.onVisibleGroupsChanged, null );
        _options.events.onVisibleEventTypesChanged = getDefaultFunction( _options.events.onVisibleEventTypesChanged, null );
        _options.events.onNotification = getDefaultFunction( _options.events.onNotification, null );
        _options.events.onBeforeEventAddEdit = getDefaultFunction( _options.events.onBeforeEventAddEdit, null );
        _options.events.onBusyStateChange = getDefaultFunction( _options.events.onBusyStateChange, null );
        _options.events.onEventsFetch = getDefaultFunction( _options.events.onEventsFetch, null );
        _options.events.onEventsImported = getDefaultFunction( _options.events.onEventsImported, null );
        _options.events.onFullDayEventRender = getDefaultFunction( _options.events.onFullDayEventRender, null );
        _options.events.onFullWeekEventRender = getDefaultFunction( _options.events.onFullWeekEventRender, null );
        _options.events.onFullMonthEventRender = getDefaultFunction( _options.events.onFullMonthEventRender, null );
        _options.events.onAllEventsEventRender = getDefaultFunction( _options.events.onAllEventsEventRender, null );
        _options.events.onTimelineEventRender = getDefaultFunction( _options.events.onTimelineEventRender, null );
        _options.events.onWidgetEventRender = getDefaultFunction( _options.events.onWidgetEventRender, null );
        _options.events.onToolTipEventRender = getDefaultFunction( _options.events.onToolTipEventRender, null );
        _options.events.onFullDayTitleRender = getDefaultFunction( _options.events.onFullDayTitleRender, null );
        _options.events.onFullWeekTitleRender = getDefaultFunction( _options.events.onFullWeekTitleRender, null );
        _options.events.onTimelineTitleRender = getDefaultFunction( _options.events.onTimelineTitleRender, null );
        _options.events.onFullMonthPinUpRender = getDefaultFunction( _options.events.onFullMonthPinUpRender, null );
        _options.events.onViewChange = getDefaultFunction( _options.events.onViewChange, null );
    }

    function buildDefaultSearchOptions( newSearchOptions ) {
        _options_Search = getOptions( newSearchOptions, _options.searchOptions );
        _options_Search.enabled = getDefaultBoolean( _options_Search.enabled, true );
        _options_Search.lastSearchText = getDefaultString( _options_Search.lastSearchText, _string.empty );
        _options_Search.not = getDefaultBoolean( _options_Search.not, false );
        _options_Search.matchCase = getDefaultBoolean( _options_Search.matchCase, false );
        _options_Search.showAdvanced = getDefaultBoolean( _options_Search.showAdvanced, false );
        _options_Search.searchTitle = getDefaultBoolean( _options_Search.searchTitle, true );
        _options_Search.searchLocation = getDefaultBoolean( _options_Search.searchLocation, false );
        _options_Search.searchDescription = getDefaultBoolean( _options_Search.searchDescription, false );
        _options_Search.searchGroup = getDefaultBoolean( _options_Search.searchGroup, false );
        _options_Search.searchUrl = getDefaultBoolean( _options_Search.searchUrl, false );
        _options_Search.startsWith = getDefaultBoolean( _options_Search.startsWith, false );
        _options_Search.endsWith = getDefaultBoolean( _options_Search.endsWith, false );
        _options_Search.contains = getDefaultBoolean( _options_Search.contains, true );
        _options_Search.left = getDefaultNumber( _options_Search.left, null );
        _options_Search.top = getDefaultNumber( _options_Search.top, null );
        _options_Search.history = getDefaultArray( _options_Search.history, [] );
    }

    function buildDefaulStringOptions() {
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

        if ( isInvalidOptionArray( _options.dayNamesAbbreviated, 7 ) ) {
            _options.dayNamesAbbreviated = [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
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

        if ( isInvalidOptionArray( _options.monthNamesAbbreviated, 12 ) ) {
            _options.monthNamesAbbreviated = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
        }

        _options.previousMonthTooltipText = getDefaultAnyString( _options.previousMonthTooltipText, "Previous Month" );
        _options.nextMonthTooltipText = getDefaultAnyString( _options.nextMonthTooltipText, "Next Month" );
        _options.previousDayTooltipText = getDefaultAnyString( _options.previousDayTooltipText, "Previous Day" );
        _options.nextDayTooltipText = getDefaultAnyString( _options.nextDayTooltipText, "Next Day" );
        _options.previousWeekTooltipText = getDefaultAnyString( _options.previousWeekTooltipText, "Previous Week" );
        _options.nextWeekTooltipText = getDefaultAnyString( _options.nextWeekTooltipText, "Next Week" );
        _options.addEventTooltipText = getDefaultAnyString( _options.addEventTooltipText, "Add Event" );
        _options.closeTooltipText = getDefaultAnyString( _options.closeTooltipText, "Close" );
        _options.exportEventsTooltipText = getDefaultAnyString( _options.exportEventsTooltipText, "Export Events" );
        _options.todayTooltipText = getDefaultAnyString( _options.todayTooltipText, "Today" );
        _options.refreshTooltipText = getDefaultAnyString( _options.refreshTooltipText, "Refresh" );
        _options.searchTooltipText = getDefaultAnyString( _options.searchTooltipText, "Search" );
        _options.expandDayTooltipText = getDefaultAnyString( _options.expandDayTooltipText, "Expand Day" );
        _options.viewAllEventsTooltipText = getDefaultAnyString( _options.viewAllEventsTooltipText, "View All Events" );
        _options.viewFullWeekTooltipText = getDefaultAnyString( _options.viewFullWeekTooltipText, "View Full Week" );
        _options.fromText = getDefaultAnyString( _options.fromText, "From:" );
        _options.toText = getDefaultAnyString( _options.toText, "To:" );
        _options.isAllDayText = getDefaultAnyString( _options.isAllDayText, "Is All-Day" );
        _options.titleText = getDefaultAnyString( _options.titleText, "Title:" );
        _options.descriptionText = getDefaultAnyString( _options.descriptionText, "Description:" );
        _options.locationText = getDefaultAnyString( _options.locationText, "Location:" );
        _options.addText = getDefaultAnyString( _options.addText, "Add" );
        _options.updateText = getDefaultAnyString( _options.updateText, "Update" );
        _options.cancelText = getDefaultAnyString( _options.cancelText, "Cancel" );
        _options.removeEventText = getDefaultAnyString( _options.removeEventText, "Remove" );
        _options.addEventTitle = getDefaultAnyString( _options.addEventTitle, "Add Event" );
        _options.editEventTitle = getDefaultAnyString( _options.editEventTitle, "Edit Event" );
        _options.exportStartFilename = getDefaultAnyString( _options.exportStartFilename, "exported_events_" );
        _options.fromTimeErrorMessage = getDefaultAnyString( _options.fromTimeErrorMessage, "Please select a valid 'From' time." );
        _options.toTimeErrorMessage = getDefaultAnyString( _options.toTimeErrorMessage, "Please select a valid 'To' time." );
        _options.toSmallerThanFromErrorMessage = getDefaultAnyString( _options.toSmallerThanFromErrorMessage, "Please select a 'To' date that is larger than the 'From' date." );
        _options.titleErrorMessage = getDefaultAnyString( _options.titleErrorMessage, "Please enter a value in the 'Title' field (no empty space)." );
        _options.stText = getDefaultAnyString( _options.stText, "st" );
        _options.ndText = getDefaultAnyString( _options.ndText, "nd" );
        _options.rdText = getDefaultAnyString( _options.rdText, "rd" );
        _options.thText = getDefaultAnyString( _options.thText, "th" );
        _options.yesText = getDefaultAnyString( _options.yesText, "Yes" );
        _options.noText = getDefaultAnyString( _options.noText, "No" );
        _options.allDayText = getDefaultAnyString( _options.allDayText, "All-Day" );
        _options.allEventsText = getDefaultAnyString( _options.allEventsText, "All Events" );
        _options.toTimeText = getDefaultAnyString( _options.toTimeText, "to" );
        _options.confirmEventRemoveTitle = getDefaultAnyString( _options.confirmEventRemoveTitle, "Confirm Event Removal" );
        _options.confirmEventRemoveMessage = getDefaultAnyString( _options.confirmEventRemoveMessage, "Removing this event cannot be undone.  Do you want to continue?" );
        _options.okText = getDefaultAnyString( _options.okText, "OK" );
        _options.exportEventsTitle = getDefaultAnyString( _options.exportEventsTitle, "Export Events" );
        _options.selectColorsText = getDefaultAnyString( _options.selectColorsText, "Select Colors" );
        _options.backgroundColorText = getDefaultAnyString( _options.backgroundColorText, "Background Color:" );
        _options.textColorText = getDefaultAnyString( _options.textColorText, "Text Color:" );
        _options.borderColorText = getDefaultAnyString( _options.borderColorText, "Border Color:" );
        _options.searchEventsTitle = getDefaultAnyString( _options.searchEventsTitle, "Search Events" );
        _options.previousText = getDefaultAnyString( _options.previousText, "Previous" );
        _options.nextText = getDefaultAnyString( _options.nextText, "Next" );
        _options.matchCaseText = getDefaultAnyString( _options.matchCaseText, "Match Case" );
        _options.repeatsText = getDefaultAnyString( _options.repeatsText, "Repeats:" );
        _options.repeatDaysToExcludeText = getDefaultAnyString( _options.repeatDaysToExcludeText, "Repeat Days To Exclude:" );
        _options.daysToExcludeText = getDefaultAnyString( _options.daysToExcludeText, "Days To Exclude:" );
        _options.seriesIgnoreDatesText = getDefaultAnyString( _options.seriesIgnoreDatesText, "Series Ignore Dates:" );
        _options.repeatsNever = getDefaultAnyString( _options.repeatsNever, "Never" );
        _options.repeatsEveryDayText = getDefaultAnyString( _options.repeatsEveryDayText, "Every Day" );
        _options.repeatsEveryWeekText = getDefaultAnyString( _options.repeatsEveryWeekText, "Every Week" );
        _options.repeatsEvery2WeeksText = getDefaultAnyString( _options.repeatsEvery2WeeksText, "Every 2 Weeks" );
        _options.repeatsEveryMonthText = getDefaultAnyString( _options.repeatsEveryMonthText, "Every Month" );
        _options.repeatsEveryYearText = getDefaultAnyString( _options.repeatsEveryYearText, "Every Year" );
        _options.repeatsCustomText = getDefaultAnyString( _options.repeatsCustomText, "Custom:" );
        _options.repeatOptionsTitle = getDefaultAnyString( _options.repeatOptionsTitle, "Repeat Options" );
        _options.moreText = getDefaultAnyString( _options.moreText, "More" );
        _options.includeText = getDefaultAnyString( _options.includeText, "Include:" );
        _options.minimizedTooltipText = getDefaultAnyString( _options.minimizedTooltipText, "Minimize" );
        _options.restoreTooltipText = getDefaultAnyString( _options.restoreTooltipText, "Restore" );
        _options.removeAllEventsInSeriesText = getDefaultAnyString( _options.removeAllEventsInSeriesText, "Remove All Events In Series" );
        _options.createdText = getDefaultAnyString( _options.createdText, "Created:" );
        _options.organizerNameText = getDefaultAnyString( _options.organizerNameText, "Organizer:" );
        _options.organizerEmailAddressText = getDefaultAnyString( _options.organizerEmailAddressText, "Organizer Email:" );
        _options.enableFullScreenTooltipText = getDefaultAnyString( _options.enableFullScreenTooltipText, "Turn On Full-Screen Mode" );
        _options.disableFullScreenTooltipText = getDefaultAnyString( _options.disableFullScreenTooltipText, "Turn Off Full-Screen Mode" );
        _options.idText = getDefaultAnyString( _options.idText, "ID:" );
        _options.expandMonthTooltipText = getDefaultAnyString( _options.expandMonthTooltipText, "Expand Month" );
        _options.repeatEndsText = getDefaultAnyString( _options.repeatEndsText, "Repeat Ends:" );
        _options.noEventsAvailableText = getDefaultAnyString( _options.noEventsAvailableText, "No events available." );
        _options.viewFullWeekText = getDefaultAnyString( _options.viewFullWeekText, "View Full Week" );
        _options.noEventsAvailableFullText = getDefaultAnyString( _options.noEventsAvailableFullText, "There are no events available to view." );
        _options.clickText = getDefaultAnyString( _options.clickText, "Click" );
        _options.hereText = getDefaultAnyString( _options.hereText, "here" );
        _options.toAddANewEventText = getDefaultAnyString( _options.toAddANewEventText, "to add a new event." );
        _options.weekText = getDefaultAnyString( _options.weekText, "Week" );
        _options.groupText = getDefaultAnyString( _options.groupText, "Group:" );
        _options.configurationTooltipText = getDefaultAnyString( _options.configurationTooltipText, "Configuration" );
        _options.configurationTitleText = getDefaultAnyString( _options.configurationTitleText, "Configuration" );
        _options.groupsText = getDefaultAnyString( _options.groupsText, "Groups" );
        _options.eventNotificationTitle = getDefaultAnyString( _options.eventNotificationTitle, "Calendar.js" );
        _options.eventNotificationBody = getDefaultAnyString( _options.eventNotificationBody, "The event '{0}' has started." );
        _options.optionsText = getDefaultAnyString( _options.optionsText, "Options:" );
        _options.startsWithText = getDefaultAnyString( _options.startsWithText, "Starts With" );
        _options.endsWithText = getDefaultAnyString( _options.endsWithText, "Ends With" );
        _options.containsText = getDefaultAnyString( _options.containsText, "Contains" );
        _options.displayTabText = getDefaultAnyString( _options.displayTabText, "Display" );
        _options.enableAutoRefreshForEventsText = getDefaultAnyString( _options.enableAutoRefreshForEventsText, "Enable auto-refresh for events" );
        _options.enableBrowserNotificationsText = getDefaultAnyString( _options.enableBrowserNotificationsText, "Enable browser notifications" );
        _options.enableTooltipsText = getDefaultAnyString( _options.enableTooltipsText, "Enable tooltips" );
        _options.dayText = getDefaultAnyString( _options.dayText, "day" );
        _options.daysText = getDefaultAnyString( _options.daysText, "days" );
        _options.hourText = getDefaultAnyString( _options.hourText, "hour" );
        _options.hoursText = getDefaultAnyString( _options.hoursText, "hours" );
        _options.minuteText = getDefaultAnyString( _options.minuteText, "minute" );
        _options.minutesText = getDefaultAnyString( _options.minutesText, "minutes" );
        _options.enableDragAndDropForEventText = getDefaultAnyString( _options.enableDragAndDropForEventText, "Enable drag & drop for events" );
        _options.organizerTabText = getDefaultAnyString( _options.organizerTabText, "Organizer" );
        _options.removeEventsTooltipText = getDefaultAnyString( _options.removeEventsTooltipText, "Remove Events" );
        _options.confirmEventsRemoveTitle = getDefaultAnyString( _options.confirmEventsRemoveTitle, "Confirm Events Removal" );
        _options.confirmEventsRemoveMessage = getDefaultAnyString( _options.confirmEventsRemoveMessage, "Removing these non-repeating events cannot be undone.  Do you want to continue?" );
        _options.eventText = getDefaultAnyString( _options.eventText, "Event" );
        _options.optionalText = getDefaultAnyString( _options.optionalText, "Optional" );
        _options.urlText = getDefaultAnyString( _options.urlText, "Url:" );
        _options.openUrlText = getDefaultAnyString( _options.openUrlText, "Open Url" );
        _options.thisWeekTooltipText = getDefaultAnyString( _options.thisWeekTooltipText, "This Week" );
        _options.dailyText = getDefaultAnyString( _options.dailyText, "Daily" );
        _options.weeklyText = getDefaultAnyString( _options.weeklyText, "Weekly" );
        _options.monthlyText = getDefaultAnyString( _options.monthlyText, "Monthly" );
        _options.yearlyText = getDefaultAnyString( _options.yearlyText, "Yearly" );
        _options.repeatsByCustomSettingsText = getDefaultAnyString( _options.repeatsByCustomSettingsText, "By Custom Settings" );
        _options.lastUpdatedText = getDefaultAnyString( _options.lastUpdatedText, "Last Updated:" );
        _options.advancedText = getDefaultAnyString( _options.advancedText, "Advanced" );
        _options.copyText = getDefaultAnyString( _options.copyText, "Copy" );
        _options.pasteText = getDefaultAnyString( _options.pasteText, "Paste" );
        _options.duplicateText = getDefaultAnyString( _options.duplicateText, "Duplicate" );
        _options.showAlertsText = getDefaultAnyString( _options.showAlertsText, "Show Alerts" );
        _options.selectDatePlaceholderText = getDefaultAnyString( _options.selectDatePlaceholderText, "Select date..." );
        _options.hideDayText = getDefaultAnyString( _options.hideDayText, "Hide Day" );
        _options.notSearchText = getDefaultAnyString( _options.notSearchText, "Not (opposite)" );
        _options.showHolidaysInTheDisplaysText = getDefaultAnyString( _options.showHolidaysInTheDisplaysText, "Show holidays in the main display and title bars" );
        _options.newEventDefaultTitle = getDefaultAnyString( _options.newEventDefaultTitle, "* New Event" );
        _options.urlErrorMessage = getDefaultAnyString( _options.urlErrorMessage, "Please enter a valid Url in the 'Url' field (or leave blank)." );
        _options.searchTextBoxPlaceholder = getDefaultAnyString( _options.searchTextBoxPlaceholder, "Search title, description, etc..." );
        _options.currentMonthTooltipText = getDefaultAnyString( _options.currentMonthTooltipText, "Current Month" );
        _options.cutText = getDefaultAnyString( _options.cutText, "Cut" );
        _options.showMenuTooltipText = getDefaultAnyString( _options.showMenuTooltipText, "Show Menu" );
        _options.eventTypesText = getDefaultAnyString( _options.eventTypesText, "Event Types" );
        _options.lockedText = getDefaultAnyString( _options.lockedText, "Locked:" );
        _options.typeText = getDefaultAnyString( _options.typeText, "Type:" );
        _options.sideMenuHeaderText = getDefaultAnyString( _options.sideMenuHeaderText, "Calendar.js" );
        _options.sideMenuDaysText = getDefaultAnyString( _options.sideMenuDaysText, "Days" );
        _options.visibleDaysText = getDefaultAnyString( _options.visibleDaysText, "Visible Days" );
        _options.previousYearTooltipText = getDefaultAnyString( _options.previousYearTooltipText, "Previous Year" );
        _options.nextYearTooltipText = getDefaultAnyString( _options.nextYearTooltipText, "Next Year" );
        _options.showOnlyWorkingDaysText = getDefaultAnyString( _options.showOnlyWorkingDaysText, "Show Only Working Days" );
        _options.exportFilenamePlaceholderText = getDefaultAnyString( _options.exportFilenamePlaceholderText, "Name (optional)" );
        _options.errorText = getDefaultAnyString( _options.errorText, "Error" );
        _options.exportText = getDefaultAnyString( _options.exportText, "Export" );
        _options.configurationUpdatedText = getDefaultAnyString( _options.configurationUpdatedText, "Configuration updated." );
        _options.eventAddedText = getDefaultAnyString( _options.eventAddedText, "{0} event added." );
        _options.eventUpdatedText = getDefaultAnyString( _options.eventUpdatedText, "{0} event updated." );
        _options.eventRemovedText = getDefaultAnyString( _options.eventRemovedText, "{0} event removed." );
        _options.eventsRemovedText = getDefaultAnyString( _options.eventsRemovedText, "{0} events removed." );
        _options.eventsExportedToText = getDefaultAnyString( _options.eventsExportedToText, "Events exported to {0}." );
        _options.eventsPastedText = getDefaultAnyString( _options.eventsPastedText, "{0} events pasted." );
        _options.eventsExportedText = getDefaultAnyString( _options.eventsExportedText, "Events exported." );
        _options.copyToClipboardOnlyText = getDefaultAnyString( _options.copyToClipboardOnlyText, "Copy to clipboard only" );
        _options.workingDaysText = getDefaultAnyString( _options.workingDaysText, "Working Days" );
        _options.weekendDaysText = getDefaultAnyString( _options.weekendDaysText, "Weekend Days" );
        _options.showAsBusyText = getDefaultAnyString( _options.showAsBusyText, "Show As Busy" );
        _options.selectAllText = getDefaultAnyString( _options.selectAllText, "Select All" );
        _options.selectNoneText = getDefaultAnyString( _options.selectNoneText, "Select None" );
        _options.importEventsTooltipText = getDefaultAnyString( _options.importEventsTooltipText, "Import Events" );
        _options.eventsImportedText = getDefaultAnyString( _options.eventsImportedText, "{0} events imported." );
        _options.viewFullYearTooltipText = getDefaultAnyString( _options.viewFullYearTooltipText, "View Full Year" );
        _options.currentYearTooltipText = getDefaultAnyString( _options.currentYearTooltipText, "Current Year" );
        _options.alertOffsetText = getDefaultAnyString( _options.alertOffsetText, "Alert Offset (minutes):" );
        _options.viewFullDayTooltipText = getDefaultAnyString( _options.viewFullDayTooltipText, "View Full Day" );
        _options.confirmEventUpdateTitle = getDefaultAnyString( _options.confirmEventUpdateTitle, "Confirm Event Update" );
        _options.confirmEventUpdateMessage = getDefaultAnyString( _options.confirmEventUpdateMessage, "Would you like to update the event from this point forward, or the entire series?" );
        _options.forwardText = getDefaultAnyString( _options.forwardText, "Forward" );
        _options.seriesText = getDefaultAnyString( _options.seriesText, "Series" );
        _options.viewTimelineTooltipText = getDefaultAnyString( _options.viewTimelineTooltipText, "View Timeline" );
        _options.nextPropertyTooltipText = getDefaultAnyString( _options.nextPropertyTooltipText, "Next Property" );
        _options.noneText = getDefaultAnyString( _options.noneText, "(none)" );
        _options.shareText = getDefaultAnyString( _options.shareText, "Share" );
        _options.shareStartFilename = getDefaultAnyString( _options.shareStartFilename, "shared_events_" );
        _options.previousPropertyTooltipText = getDefaultAnyString( _options.previousPropertyTooltipText, "Previous Property" );
        _options.jumpToDateTitle = getDefaultAnyString( _options.jumpToDateTitle, "Jump To Date" );
        _options.goText = getDefaultAnyString( _options.goText, "Go" );
    }

    function setEventTypeTranslationStringOptions() {
        setEventTypeOption( _options.eventTypeNormalText , "Normal", 0 );
        setEventTypeOption( _options.eventTypeMeetingText , "Meeting", 1 );
        setEventTypeOption( _options.eventTypeBirthdayText , "Birthday", 2 );
        setEventTypeOption( _options.eventTypeHolidayText , "Holiday", 3 );
        setEventTypeOption( _options.eventTypeTaskText , "Task", 4 );
    }

    function setEventTypeOption( optionEventText, defaultEventText, eventId ) {
        if ( _options_EventType.hasOwnProperty( eventId ) ) {
            if ( !isDefinedString( optionEventText ) ) {
                _options_EventType[ eventId ].text = defaultEventText;
            } else {
                _options_EventType[ eventId ].text = optionEventText;
            }
        }
    }

    function isInvalidOptionArray( array, minimumLength ) {
        minimumLength = isDefinedNumber( minimumLength ) ? minimumLength : 1;

        return !isDefinedArray( array ) || array.length < minimumLength;
    }

    function getOptions( newOptions, alternateOptions ) {
        if ( !isDefinedObject( newOptions ) ) {

            if ( !isDefinedObject( alternateOptions ) ) {
                newOptions = {};
            } else {
                newOptions = alternateOptions;
            }
        }

        return newOptions;
    }

    function getStandardHolidays() {
        return [
            {
                day: 1,
                month: 1,
                title: "New Year's Day",
                onClickUrl: "https://en.wikipedia.org/wiki/New_Year%27s_Day"
            },
            {
                day: 14,
                month: 2,
                title: "Valentine's Day",
                onClickUrl: "https://en.wikipedia.org/wiki/Valentine%27s_Day"
            },
            {
                day: 1,
                month: 4,
                title: "April Fools' Day",
                onClickUrl: "https://en.wikipedia.org/wiki/April_Fools%27_Day"
            },
            {
                day: 22,
                month: 4,
                title: "Earth Day",
                onClickUrl: "https://en.wikipedia.org/wiki/Earth_Day"
            },
            {
                day: 31,
                month: 10,
                title: "Halloween",
                onClickUrl: "https://en.wikipedia.org/wiki/Halloween"
            },
            {
                day: 11,
                month: 11,
                title: "Remembrance Day",
                onClickUrl: "https://en.wikipedia.org/wiki/Remembrance_Day"
            },
            {
                day: 24,
                month: 12,
                title: "Christmas Eve",
                onClickUrl: "https://en.wikipedia.org/wiki/Christmas_Eve"
            },
            {
                day: 25,
                month: 12,
                title: "Christmas Day",
                onClickUrl: "https://en.wikipedia.org/wiki/Christmas"
            },
            {
                day: 26,
                month: 12,
                title: "Boxing Day",
                onClickUrl: "https://en.wikipedia.org/wiki/Boxing_Day"
            },
            {
                day: 31,
                month: 12,
                title: "New Year's Eve",
                onClickUrl: "https://en.wikipedia.org/wiki/New_Year%27s_Eve"
            }
        ];
    }

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Initialize Calendar.js
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    ( function ( documentObject, windowObject, navigatorObject, mathObject, jsonObject ) {
        _parameter_Document = documentObject;
        _parameter_Window = windowObject;
        _parameter_Navigator = navigatorObject;
        _parameter_Math = mathObject;
        _parameter_Json = jsonObject;
        _parameter_ElementID = elementOrId;

        if ( isDefinedString( _parameter_ElementID ) || isDefinedDOMElement( _parameter_ElementID ) ) {
            buildDefaultOptions( options );
            buildDefaultSearchOptions( searchOptions );
            build( _options.initialDateTime, true );
    
            if ( _element_Calendar !== null && isDefinedBoolean( _options.openInFullScreenMode ) && _options.openInFullScreenMode && !_element_Mode_DatePicker_Enabled ) {
                forceTurnOnFullScreenMode();
            }
        }

    } ) ( document, window, navigator, Math, JSON );
}