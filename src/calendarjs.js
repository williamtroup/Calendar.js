/*
 * Calendar.js Library v0.2.0
 *
 * Copyright 2021 Bunoon
 * Released under the GNU AGPLv3 license
 */

 
/**
 * Day Event.
 * 
 * This is the object format that is used to store the details about a day event.
 *
 * @property    {string}   id                                           The ID of for the event.
 * @property    {object}   from                                         The date that the event occurs from.
 * @property    {object}   to                                           The date that the event runs until.
 * @property    {string}   title                                        The title of the event.
 * @property    {string}   description                                  The in depth description of the event.
 * @property    {boolean}  isAllDayEvent                                States if this is an all day event.
 */


/**
 * Options - Events.
 * 
 * These are the properties that store the events that should be fired when various actions are triggered.
 *
 * @property    {object}   onPreviousMonth                              Specifies an event that will be triggered when the "Previous Month" button is pressed.
 * @property    {object}   onNextMonth                                  Specifies an event that will be triggered when the "Next Month" button is pressed.
 * @property    {object}   onToday                                      Specifies an event that will be triggered when the "Today" button is pressed.
 * @property    {object}   onEventAdded                                 Specifies an event that will be triggered when an event is added (passes the event to the function).
 * @property    {object}   onEventUpdated                               Specifies an event that will be triggered when an event is updated (passes the event to the function).
 * @property    {object}   onEventRemoved                               Specifies an event that will be triggered when an event is removed (passes the event to the function).
 * @property    {object}   onEventsAdded                                Specifies an event that will be triggered when events are added (passes the events to the function).
 * @property    {object}   onEventsCleared                              Specifies an event that will be triggered when the events are cleared.
 * @property    {object}   onEventsExported                             Specifies an event that will be triggered when the "Export Events" button is pressed.
 */


/**
 * Options.
 * 
 * These are the options that are used to control how Calendar.js works and renders.
 *
 * @property    {string}   previousMonthTooltipText                     The tooltip text that should be used for for the "Previous Month" button.
 * @property    {string}   nextMonthTooltipText                         The tooltip text that should be used for for the "Next Month" button.
 * @property    {string}   addEventTooltipText                          The tooltip text that should be used for for the "Add Event" button.
 * @property    {string}   closeTooltipText                             The tooltip text that should be used for for the "Close" button.
 * @property    {string}   exportEventsTooltipText                      The tooltip text that should be used for for the "Export Events" button.
 * @property    {string}   listAllEventsTooltipText                     The tooltip text that should be used for for the "View All Events" button.
 * @property    {string}   listWeekEventsTooltipText                    The tooltip text that should be used for for the "View Week Events" button.
 * @property    {string}   todayTooltipText                             The tooltip text that should be used for for the "Today" button.
 * @property    {string}   refreshTooltipText                           The tooltip text that should be used for for the "Refresh" button.
 * @property    {string}   expandDayTooltipText                         The tooltip text that should be used for for the "Expand Day" button.
 * @property    {array}    dayHeaderNames                               The names to use for the day headers (defaults to '[ "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" ]').
 * @property    {array}    dayNames                                     The full names (defaults to '[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]').
 * @property    {string}   fromText                                     The text that should be displayed for the "From:" label.
 * @property    {string}   toText                                       The text that should be displayed for the "To:" label.
 * @property    {string}   isAllDayEventText                            The text that should be displayed for the "Is All Day Event" label.
 * @property    {string}   titleText                                    The text that should be displayed for the "Title:" label.
 * @property    {string}   descriptionText                              The text that should be displayed for the "Description:" label.
 * @property    {string}   addText                                      The text that should be displayed for the "Add" button.
 * @property    {string}   updatedText                                  The text that should be displayed for the "Update" button.
 * @property    {string}   cancelText                                   The text that should be displayed for the "Cancel" button.
 * @property    {string}   removeEventText                              The text that should be displayed for the "Remove Event" button.
 * @property    {string}   addEventTitle                                The title bar text that is shown for the "Add Event" label.
 * @property    {string}   editEventTitle                               The title bar text that is shown for the "Edit Event" label.
 * @property    {string}   monthNames                                   The names to use for months (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]').
 * @property    {boolean}  showDayNumberOrdinals                        States if the day ordinal values should be shown (defaults to true).  
 * @property    {boolean}  dragAndDropForEventsEnabled                  States if dragging and dropping events around the days of the month is enabled (defaults to true).
 * @property    {string}   exportStartFilename                          The starting filename that should be used when exporting all the calendar events (defaults to "exported_events_").
 * @property    {string}   fromTimeErrorMessage                         The error message shown for the "Please select a valid 'From' time." label.
 * @property    {string}   toTimeErrorMessage                           The error message shown for the "Please select a valid 'To' time." label.
 * @property    {string}   toSmallerThanFromErrorMessage                The error message shown for the "Please select a 'To' date that is larger than the 'From' date." label.
 * @property    {string}   titleErrorMessage                            The error message shown for the "Please enter a value in the 'Title' field (no empty space)." label.
 * @property    {string}   stText                                       The day ordinal text for "st".
 * @property    {string}   ndText                                       The day ordinal text for "nd".
 * @property    {string}   rdText                                       The day ordinal text for "rd".
 * @property    {string}   thText                                       The day ordinal text for "th".
 * @property    {boolean}  fullDayViewEnabled                           States if viewing all the events in a full day is enabled (defaults to true).
 * @property    {number}   maximumEventsPerDayDisplay                   The maximum number of events that should be display per day in the main calendar display (defaults to 3).
 * @property    {string}   yesText                                      The text that should be displayed for the "Yes" label.
 * @property    {string}   noText                                       The text that should be displayed for the "No" label.
 * @property    {number}   extraSelectableYearsAhead                    The number of extra years ahead that are selectable in the drop down (defaults to 51).
 * @property    {string}   allDayEventText                              The text that should be displayed for the "All Day Event" label.
 * @property    {string}   allEventsText                                The text that should be displayed for the "All Events" label.
 * @property    {string}   allWeekEventsText                            The text that should be displayed for the "All Week Events" label.
 * @property    {boolean}  exportEventsEnabled                          States if exporting events is enabled (defaults to true).
 * @property    {boolean}  manualEditingEnabled                         States if adding, editing, dragging and removing events is enabled (defaults to true).
 * @property    {boolean}  showTimesInMainCalendarEvents                States if the time should be shown on the main calendar view events (defaults to false).
 * @property    {string}   startsAtText                                 The text that should be displayed for the "Starts at" label.
 * @property    {string}   andFinishesAtText                            The text that should be displayed for the "and finishes at" label.
 * @property    {string}   toTimeText                                   The text that should be displayed for the "to" label.
 * @property    {number}   autoRefreshTimerDelay                        The amount of time to wait before each full refresh (defaults to 5000 milliseconds, 0 disables it).
 * @property    {string}   confirmEventRemoveTitle                      The title of the confirmation message shown when removing an event (defaults to "Confirm Event Removal").
 * @property    {string}   confirmEventRemoveMessage                    The text for the confirmation message shown when removing an event (defaults to "Removing this event cannot be undone.  Do you want to continue?").
 */


/**
 * calendarJs().
 * 
 * The main Calendar.js class.
 * 
 * @class
 * 
 * @param       {sting}     id                                          The ID of the element that should be used to display the calendar.
 * @param       {object}    options                                     All the configurable options that should be used (see Options documentation).
 * @param       {object}    startDateTime                               The date that the calendar should start from by default (defaults to today).
 */
function calendarJs( id, options, startDateTime ) {
    var _options = {},
        _this = this,
        _currentDate,
        _elementTypes = {},
        _elements = {},
        _document = null,
        _window = null,
        _elementID = null,
        _initialized = false,
        _events = {},
        _timer_RefreshMainDisplay = null,
        _eventDetails_Dragged = null,
        _elementID_DayElement = "calendar-day-",
        _elementClassName_Row = "row",
        _elementClassName_Cell = "cell",
        _element_HeaderDateDisplay = null,
        _element_HeaderDateDisplay_Text = null,
        _element_HeaderDateDisplay_YearSelector = null,
        _element_HeaderDateDisplay_ExportEventsButton = null,
        _element_DisabledBackground = null,
        _element_EventEditorDialog = null,
        _element_EventEditorDialog_DisabledArea = null,
        _element_EventEditorDialog_TitleBar = null,
        _element_EventEditorDialog_DateFrom = null,
        _element_EventEditorDialog_TimeFrom = null,
        _element_EventEditorDialog_DateTo = null,
        _element_EventEditorDialog_TimeTo = null,
        _element_EventEditorDialog_IsAllDayEvent = null,
        _element_EventEditorDialog_Title = null,
        _element_EventEditorDialog_Description = null,
        _element_EventEditorDialog_ErrorMessage = null,
        _element_EventEditorDialog_EventDetails = null,
        _element_EventEditorDialog_OKButton = null,
        _element_EventEditorDialog_RemoveButton = null,
        _element_FullDayView = null,
        _element_FullDayView_Title = null,
        _element_FullDayView_Contents = null,
        _element_FullDayView_DateSelected = null,
        _element_FullDayView_EventsShown = [],
        _element_FullDayView_ExportEventsButton = null,
        _element_ListAllEventsView = null,
        _element_ListAllEventsView_ExportEventsButton = null,
        _element_ListAllEventsView_Contents = null,
        _element_ListAllWeekEventsView = null,
        _element_ListAllWeekEventsView_ExportEventsButton = null,
        _element_ListAllWeekEventsView_Contents = null,
        _element_ListAllWeekEventsView_EventsShown = [],
        _element_ConfirmationDialog = null,
        _element_ConfirmationDialog_TitleBar = null,
        _element_ConfirmationDialog_Message = null,
        _element_ConfirmationDialog_YesButton = null,
        _element_ConfirmationDialog_NoButton = null;


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build (layout, days, etc)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function build( newStartDateTime ) {
        _currentDate = isDefined( newStartDateTime ) ? newStartDateTime : new Date();

        var firstDay = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), 1 ),
            startDay = firstDay.getDay(),
            totalDaysInMonth = daysInMonth( _currentDate.getFullYear(), _currentDate.getMonth() );

        if ( startDay === 0 ) {
            startDay = 7;
        }

        hideYearSelectorDropDown();

        buildLayout();
        buildPreviousMonthDays( _currentDate, startDay );

        var lastDayFilled = buildMonthDays( totalDaysInMonth, startDay );

        buildNextMonthDays( lastDayFilled );
        buildDayEvents();
        buildDisabledBackground();
        buildEventEditingDialog();
        buildConfirmationDialog();

        _element_HeaderDateDisplay_Text.innerHTML = _options.monthNames[ _currentDate.getMonth() ] + ", " + _currentDate.getFullYear() + " ▾";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Layout
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildLayout() {
        if ( !_initialized ) {
            var element = getElementByID( _elementID );
            element.className = "calendar";
    
            buildListAllEventsView( element );
            buildListAllWeekEventsView( element );
            buildFullDayView( element );
            buildDateHeader( element );
            buildYearSelectorDropDown();
            buildDayNamesHeader( element );
            buildDayRows( element );
            
            _initialized = true;
        }
    }

    function buildDateHeader( element ) {
        _element_HeaderDateDisplay = createElement( "div" );
        _element_HeaderDateDisplay.className = "header-date";
        element.appendChild( _element_HeaderDateDisplay );

        var previousMonthButton = createElement( "div" );
        previousMonthButton.className = "arrow previous-month";
        previousMonthButton.title = _options.previousMonthTooltipText;
        previousMonthButton.onclick = moveBackMonth;
        _element_HeaderDateDisplay.appendChild( previousMonthButton );

        var todayButton = createElement( "div" );
        todayButton.className = "today";
        todayButton.title = _options.todayTooltipText;
        todayButton.onclick = moveToday;
        _element_HeaderDateDisplay.appendChild( todayButton );

        var refreshButton = createElement( "div" );
        refreshButton.className = "refresh";
        refreshButton.title = _options.refreshTooltipText;
        refreshButton.onclick = refreshViews;
        _element_HeaderDateDisplay.appendChild( refreshButton );

        var nextMonthButton = createElement( "div" );
        nextMonthButton.className = "arrow next-month";
        nextMonthButton.title = _options.nextMonthTooltipText;
        nextMonthButton.onclick = moveForwardMonth;
        _element_HeaderDateDisplay.appendChild( nextMonthButton );

        if ( _options.manualEditingEnabled ) {
            var addEventButton = createElement( "div" );
            addEventButton.className = "add-event";
            addEventButton.title = _options.addEventTooltipText;
            addEventButton.onclick = addNewEvent;
            _element_HeaderDateDisplay.appendChild( addEventButton );
        }

        if ( _options.exportEventsEnabled ) {
            _element_HeaderDateDisplay_ExportEventsButton = createElement( "div" );
            _element_HeaderDateDisplay_ExportEventsButton.className = "export-events";
            _element_HeaderDateDisplay_ExportEventsButton.title = _options.exportEventsTooltipText;
            _element_HeaderDateDisplay.appendChild( _element_HeaderDateDisplay_ExportEventsButton );

            _element_HeaderDateDisplay_ExportEventsButton.onclick = function() {
                exportEvents();
            };            
        }

        var listAllEventsButton = createElement( "div" );
        listAllEventsButton.className = "list-all-events";
        listAllEventsButton.title = _options.listAllEventsTooltipText;
        listAllEventsButton.onclick = showListAllEventsView;
        _element_HeaderDateDisplay.appendChild( listAllEventsButton );

        var listWeekEventsButton = createElement( "div" );
        listWeekEventsButton.className = "list-week-events";
        listWeekEventsButton.title = _options.listWeekEventsTooltipText;
        listWeekEventsButton.onclick = showListAllWeekEventsView;
        _element_HeaderDateDisplay.appendChild( listWeekEventsButton );
        
        _element_HeaderDateDisplay_Text = createElement( "span" );
        _element_HeaderDateDisplay.appendChild( _element_HeaderDateDisplay_Text );
    }

    function buildYearSelectorDropDown() {
        if ( _element_HeaderDateDisplay_YearSelector === null ) {
            var date = new Date( 1900, 1, 1 ),
                dateCurrent = new Date(),
                dateYearsTotal = ( dateCurrent.getFullYear() - date.getFullYear() ) + _options.extraSelectableYearsAhead;

            _element_HeaderDateDisplay_YearSelector = createElement( "div" );
            _element_HeaderDateDisplay_YearSelector.className = "years-drop-down";
            _element_HeaderDateDisplay.appendChild( _element_HeaderDateDisplay_YearSelector );

            var contents = createElement( "div" );
            contents.className = "contents custom-scroll-bars";
            _element_HeaderDateDisplay_YearSelector.appendChild( contents );

            for ( var yearIndex = 0; yearIndex < dateYearsTotal; yearIndex++ ) {
                buildYearSelectorDropDownYear( contents, date.getFullYear() );

                date.setFullYear( date.getFullYear() + 1 );
            }

            _element_HeaderDateDisplay_Text.onclick = function( e ) {
                if ( _element_HeaderDateDisplay_YearSelector.style.display !== "block" ) {
                    cancelBubble( e );

                    _element_HeaderDateDisplay_YearSelector.style.display = "block";
                }
            };

            _document.body.onclick = hideYearSelectorDropDown;
            _window.onresize = hideYearSelectorDropDown;
        }
    }

    function buildYearSelectorDropDownYear( contents, actualYear ) {
        var year = createElement( "div" );
        year.innerText = actualYear.toString();
        contents.appendChild( year );

        year.onclick = function() {
            _currentDate.setFullYear( actualYear );

            build( _currentDate );
            hideYearSelectorDropDown();
        };
    }

    function buildDayNamesHeader( element ) {
        var headerRow = createElement( "div" ),
            headerNamesLength = _options.dayHeaderNames.length;

        headerRow.className = _elementClassName_Row + " header-days";
        element.appendChild( headerRow );

        for ( var headerNameIndex = 0; headerNameIndex < headerNamesLength; headerNameIndex++ ) {
            var headerName = _options.dayHeaderNames[ headerNameIndex ],
                header = createElement( "div" );

            header.className = _elementClassName_Cell;
            header.innerHTML = headerName;
            headerRow.appendChild( header );
        }
    }

    function buildDayRows( element ) {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            var rowData = createElement( "div" );
            rowData.className = _elementClassName_Row;
            element.appendChild( rowData );

            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                    columnData = createElement( "div" );

                columnData.className = _elementClassName_Cell;
                columnData.id = _elementID_DayElement + columnDataNumber;
                rowData.appendChild( columnData );
            }
        }
    }

    function getAdjustedAllDayEventEvent( event ) {
        var adjustedEvent = event;

        if ( adjustedEvent.isAllDayEvent ) {
            adjustedEvent.from = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 0, 0 );
            adjustedEvent.to = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 23, 59 );
        }

        return adjustedEvent;
    }

    function getTotalDaysBetweenDates( from, to ) {
        var fromDate = new Date( from.getFullYear(), from.getMonth(), from.getDate() ),
            toDate = new Date( to.getFullYear(), to.getMonth(), to.getDate() ),
            differenceTime = Math.abs( toDate - fromDate ),
            differenceDays = Math.ceil( differenceTime / ( 1000 * 60 * 60 * 24 ) ); 
        
        return differenceDays;
    }

    function hideYearSelectorDropDown() {
        if ( _element_HeaderDateDisplay_YearSelector !== null && _element_HeaderDateDisplay_YearSelector.style.display !== "none" ) {
            _element_HeaderDateDisplay_YearSelector.style.display = "none";
        }
    }

    function isDateToday( date ) {
        var today = new Date();
        
        return date.getDate() === today.getDate() && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
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
     * Build Day Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDayEvents() {
        clearEventsFromDays();
        clearAutoRefreshTimer();
    
        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                var orderedEvents = [];
    
                for ( var storageGuid in _events[ storageDate ] ) {
                    if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                        orderedEvents.push( getAdjustedAllDayEventEvent( _events[ storageDate ][ storageGuid ] ) );
                    }
                }
    
                orderedEvents.sort( function( a, b ) {
                    return a.from - b.from;
                });
    
                var orderedEventsLength = orderedEvents.length;
                for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
                    var orderedEvent = orderedEvents[ orderedEventIndex ],
                        elementDay = getDayElement( orderedEvent.from );
    
                    if ( elementDay !== null ) {
                        buildDayEventAcrossDays( orderedEvent );
                    }
                }
    
                orderedEvents = [];
            }
        }
    
        updateExportButtonsVisibleState();
        startAutoRefreshTimer();
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
    
    function buildDayEvent( eventDateFrom, eventDetails ) {
        var elementDay = getDayElement( eventDateFrom );
        if ( elementDay !== null ) {
    
            var events = elementDay.getElementsByClassName( _options.manualEditingEnabled ? "event" : "event-no-hover" );
            if ( events.length < _options.maximumEventsPerDayDisplay ) {
    
                var event = createElement( "div" ),
                    eventTitle = eventDetails.title;

                if ( _options.showTimesInMainCalendarEvents && !eventDetails.isAllDayEvent && eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                    eventTitle = getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) + ": " + eventTitle;
                }

                event.className = _options.manualEditingEnabled ? "event" : "event-no-hover";
                event.title = eventTitle;
                event.innerHTML = eventTitle;
                elementDay.appendChild( event );
    
                if ( eventDetails.to < new Date() ) {
                    event.className += " expired";
                }

                if ( eventDetails.isAllDayEvent ) {
                    event.className += " all-day-event";
                }
    
                if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
                    event.setAttribute( "draggable", true );
                }
    
                if ( _options.manualEditingEnabled ) {
                    event.onclick = function() {
                        showEventDialog( eventDetails );
                    };
                }
    
                if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
                    event.ondragstart = function() {
                        _eventDetails_Dragged = eventDetails;
                    };
                }
            }
        }
    }

    function updateExportButtonsVisibleState() {
        var availableEvents = 0;

        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                for ( var storageGuid in _events[ storageDate ] ) {
                    if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                        availableEvents++;
                        break;
                    }
                }
            }
        }

        if ( _options.exportEventsEnabled ) {
            if ( availableEvents === 0 ) {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "none";
            } else {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "block";
            }
        }
    }

    function getDayElement( date ) {
        var firstDay = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), 1 ),
            startDay = -1,
            nextMonth = new Date( _currentDate ),
            previousMonth = new Date( _currentDate ),
            elementDay = null,
            elementDayNumber = 0;
        
        nextMonth.setMonth( nextMonth.getMonth() + 1 );
        previousMonth.setMonth( previousMonth.getMonth() - 1 );

        if ( date.getMonth() === nextMonth.getMonth() && date.getFullYear() === nextMonth.getFullYear() ) {
            startDay = firstDay.getDay() + daysInMonth( _currentDate.getFullYear(), _currentDate.getMonth() );
            elementDayNumber = ( date.getDate() + startDay ) - 1;

        } else if ( date.getMonth() === previousMonth.getMonth() && date.getFullYear() === previousMonth.getFullYear() ) {
            elementDayNumber = firstDay.getDay() - getTotalDaysBetweenDates( date, _currentDate );
            
        } else if ( date.getMonth() === _currentDate.getMonth() && date.getFullYear() === _currentDate.getFullYear() ) {
            startDay = firstDay.getDay();
            elementDayNumber = ( date.getDate() + startDay ) - 1;
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
        var events = elementDay.getElementsByClassName( _options.manualEditingEnabled ? "event" : "event-no-hover" );

        while ( events[ 0 ] ) {
            events[ 0 ].parentNode.removeChild( events[ 0 ] );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Day View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullDayView( element ) {
        if ( _element_FullDayView === null ) {
            _element_FullDayView = createElement( "div" );
            _element_FullDayView.className = "full-day-view";
            element.appendChild( _element_FullDayView );

            var titleBar = createElement( "div" );
            titleBar.className = "title-bar";
            _element_FullDayView.appendChild( titleBar );

            _element_FullDayView_Title = createElement( "div" );
            _element_FullDayView_Title.className = "title";
            titleBar.appendChild( _element_FullDayView_Title );

            var closeButton = createElement( "div" );
            closeButton.className = "close";
            closeButton.title = _options.closeTooltipText;
            titleBar.appendChild( closeButton );

            closeButton.onclick = function() {
                hideOverlay( _element_FullDayView );
                _element_FullDayView_DateSelected = null;
            };

            if ( _options.manualEditingEnabled ) {
                var addEventButton = createElement( "div" );
                addEventButton.className = "add-event";
                addEventButton.title = _options.addEventTooltipText;
                addEventButton.onclick = addNewEvent;
                titleBar.appendChild( addEventButton );
            }

            if ( _options.exportEventsEnabled ) {
                _element_FullDayView_ExportEventsButton = createElement( "div" );
                _element_FullDayView_ExportEventsButton.className = "export-events";
                _element_FullDayView_ExportEventsButton.title = _options.exportEventsTooltipText;
                titleBar.appendChild( _element_FullDayView_ExportEventsButton );

                _element_FullDayView_ExportEventsButton.onclick = function() {
                    exportEvents( _element_FullDayView_EventsShown );
                };
            }

            _element_FullDayView_Contents = createElement( "div" );
            _element_FullDayView_Contents.className = "contents custom-scroll-bars";
            _element_FullDayView.appendChild( _element_FullDayView_Contents );
        }
    }

    function updateFullDayViewFromEventEdit() {
        if ( isOverlayVisible( _element_FullDayView ) ) {
            showFullDayView( _element_FullDayView_DateSelected );
        }
    }

    function showFullDayView( date ) {
        showOverlay( _element_FullDayView );

        _element_FullDayView_Title.innerText = "";
        _element_FullDayView_Contents.innerHTML = "";
        _element_FullDayView_DateSelected = date;
        _element_FullDayView_EventsShown = [];

        var dayNumber = createElement( "span" );
        dayNumber.innerText = date.getDate();
        _element_FullDayView_Title.appendChild( dayNumber );

        if ( _options.showDayNumberOrdinals ) {
            var sup = createElement( "sup" );
            sup.innerText = getDayOrdinal( date.getDate() );
            _element_FullDayView_Title.appendChild( sup );
        }

        var dateEnd = createElement( "span" );
        dateEnd.innerText = " " + _options.monthNames[ date.getMonth() ] + " " + date.getFullYear();
        _element_FullDayView_Title.appendChild( dateEnd );

        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                var orderedEvents = [];

                for ( var storageGuid in _events[ storageDate ] ) {
                    if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                        var orderedEvent = getAdjustedAllDayEventEvent( _events[ storageDate ][ storageGuid ] ),
                            totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to ) + 1,
                            nextDate = new Date( orderedEvent.from );
                        
                        for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                            if ( nextDate.getFullYear() === date.getFullYear() && nextDate.getMonth() === date.getMonth() && nextDate.getDate() === date.getDate() ) {
                                orderedEvents.push( orderedEvent );
                            }

                            nextDate.setDate( nextDate.getDate() + 1 );
                        }
                    }
                }

                orderedEvents.sort( function( a, b ) {
                    return a.from - b.from;
                });
    
                var orderedEventsLength = orderedEvents.length;
                for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
                    buildFullDayDayEvent( orderedEvents[ orderedEventIndex ] );
                }
            }
        }

        if ( _options.exportEventsEnabled ) {
            if ( _element_FullDayView_EventsShown.length === 0 ) {
                _element_FullDayView_ExportEventsButton.style.display = "none";
            } else {
                _element_FullDayView_ExportEventsButton.style.display = "block";
            }
        }
    }

    function buildFullDayDayEvent( eventDetails ) {
        var fullDayEvent = createElement( "div" );
        fullDayEvent.className = _options.manualEditingEnabled ? "event" : "event-no-hover";
        _element_FullDayView_Contents.appendChild( fullDayEvent );

        var title = createElement( "div" );
        title.className = "title";
        title.innerHTML = eventDetails.title;
        fullDayEvent.appendChild( title );

        var startTime = createElement( "div" );
        startTime.className = "date";
        fullDayEvent.appendChild( startTime );

        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
            if ( eventDetails.isAllDayEvent ) {
                startTime.innerHTML = _options.allDayEventText;
            } else {
                startTime.innerHTML = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
            }
        } else {
            buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
        }

        if ( eventDetails.to < new Date() ) {
            fullDayEvent.className += " expired";
        }

        if ( eventDetails.isAllDayEvent ) {
            fullDayEvent.className += " all-day-event";
        }

        if ( eventDetails.description !== "" ) {
            var description = createElement( "div" );
            description.className = "description";
            description.innerHTML = eventDetails.description;
            fullDayEvent.appendChild( description );
        }

        if ( _options.manualEditingEnabled ) {
            fullDayEvent.onclick = function() {
                showEventDialog( eventDetails );
            };
        }

        _element_FullDayView_EventsShown.push( eventDetails );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * List All Events View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildListAllEventsView( element ) {
        if ( _element_ListAllEventsView === null ) {
            _element_ListAllEventsView = createElement( "div" );
            _element_ListAllEventsView.className = "list-all-events-view";
            element.appendChild( _element_ListAllEventsView );

            var titleBar = createElement( "div" );
            titleBar.className = "title-bar";
            _element_ListAllEventsView.appendChild( titleBar );

            var title = createElement( "div" );
            title.className = "title";
            title.innerHTML = _options.allEventsText;
            titleBar.appendChild( title );

            var closeButton = createElement( "div" );
            closeButton.className = "close";
            closeButton.title = _options.closeTooltipText;
            titleBar.appendChild( closeButton );

            closeButton.onclick = function() {
                hideOverlay( _element_ListAllEventsView );
            };

            if ( _options.manualEditingEnabled ) {
                var addEventButton = createElement( "div" );
                addEventButton.className = "add-event";
                addEventButton.title = _options.addEventTooltipText;
                addEventButton.onclick = addNewEvent;
                titleBar.appendChild( addEventButton );
            }

            if ( _options.exportEventsEnabled ) {
                _element_ListAllEventsView_ExportEventsButton = createElement( "div" );
                _element_ListAllEventsView_ExportEventsButton.className = "export-events";
                _element_ListAllEventsView_ExportEventsButton.title = _options.exportEventsTooltipText;
                titleBar.appendChild( _element_ListAllEventsView_ExportEventsButton );

                _element_ListAllEventsView_ExportEventsButton.onclick = function() {
                    exportEvents();
                };                
            }

            _element_ListAllEventsView_Contents = createElement( "div" );
            _element_ListAllEventsView_Contents.className = "contents custom-scroll-bars";
            _element_ListAllEventsView.appendChild( _element_ListAllEventsView_Contents );
        }
    }

    function showListAllEventsView() {
        showOverlay( _element_ListAllEventsView );

        _element_ListAllEventsView_Contents.innerHTML = "";

        var orderedEvents = [];

        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                for ( var storageGuid in _events[ storageDate ] ) {
                    if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                        orderedEvents.push( getAdjustedAllDayEventEvent( _events[ storageDate ][ storageGuid ] ) );
                    }
                }
            }
        }

        orderedEvents.sort( function( a, b ) {
            return a.from - b.from;
        });

        var orderedEventsLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                monthContents = buildListAllEventsMonth( orderedEvent.from );

            buildListAllEventsEvent( orderedEvent, monthContents );
        }
    }

    function buildListAllEventsEvent( eventDetails, container ) {
        var event = createElement( "div" );
        event.className = _options.manualEditingEnabled ? "event" : "event-no-hover";
        container.appendChild( event );

        var title = createElement( "div" );
        title.className = "title";
        title.innerHTML = eventDetails.title;
        event.appendChild( title );

        var startTime = createElement( "div" );
        startTime.className = "date";
        event.appendChild( startTime );

        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
            if ( eventDetails.isAllDayEvent ) {
                buildDayDisplay( startTime, eventDetails.from, null, " - " + _options.allDayEventText );
            } else {
                buildDayDisplay( startTime, eventDetails.from, null, " - " + getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) );
            }
        } else {
            buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
        }

        if ( eventDetails.to < new Date() ) {
            event.className += " expired";
        }

        if ( eventDetails.isAllDayEvent ) {
            event.className += " all-day-event";
        }

        if ( eventDetails.description !== "" ) {
            var description = createElement( "div" );
            description.className = "description";
            description.innerHTML = eventDetails.description;
            event.appendChild( description );
        }

        if ( _options.manualEditingEnabled ) {
            event.onclick = function() {
                showEventDialog( eventDetails );
            };
        }
    }

    function buildListAllEventsMonth( date ) {
        var monthContentsID = "month-" + date.getMonth() + "-" + date.getFullYear(),
            monthContents = getElementByID( monthContentsID );
        
        if ( monthContents === null ) {
            var month = createElement( "div" );
            month.className = "month";
            _element_ListAllEventsView_Contents.appendChild( month );

            var header = createElement( "div" );
            header.className = "header";
            header.innerHTML = _options.monthNames[ date.getMonth() ] + " " + date.getFullYear();
            month.appendChild( header );

            monthContents = createElement( "div" );
            monthContents.id = monthContentsID;
            monthContents.className = "events";
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

    function buildListAllWeekEventsView( element ) {
        if ( _element_ListAllWeekEventsView === null ) {
            _element_ListAllWeekEventsView = createElement( "div" );
            _element_ListAllWeekEventsView.className = "list-all-week-events-view";
            element.appendChild( _element_ListAllWeekEventsView );

            var titleBar = createElement( "div" );
            titleBar.className = "title-bar";
            _element_ListAllWeekEventsView.appendChild( titleBar );

            var title = createElement( "div" );
            title.className = "title";
            title.innerHTML = _options.allWeekEventsText;
            titleBar.appendChild( title );

            var closeButton = createElement( "div" );
            closeButton.className = "close";
            closeButton.title = _options.closeTooltipText;
            titleBar.appendChild( closeButton );

            closeButton.onclick = function() {
                hideOverlay( _element_ListAllWeekEventsView );
            };

            if ( _options.manualEditingEnabled ) {
                var addEventButton = createElement( "div" );
                addEventButton.className = "add-event";
                addEventButton.title = _options.addEventTooltipText;
                addEventButton.onclick = addNewEvent;
                titleBar.appendChild( addEventButton );
            }

            if ( _options.exportEventsEnabled ) {
                _element_ListAllWeekEventsView_ExportEventsButton = createElement( "div" );
                _element_ListAllWeekEventsView_ExportEventsButton.className = "export-events";
                _element_ListAllWeekEventsView_ExportEventsButton.title = _options.exportEventsTooltipText;
                titleBar.appendChild( _element_ListAllWeekEventsView_ExportEventsButton );

                _element_ListAllWeekEventsView_ExportEventsButton.onclick = function() {
                    exportEvents( _element_ListAllWeekEventsView_EventsShown );
                };                
            }

            _element_ListAllWeekEventsView_Contents = createElement( "div" );
            _element_ListAllWeekEventsView_Contents.className = "contents custom-scroll-bars";
            _element_ListAllWeekEventsView.appendChild( _element_ListAllWeekEventsView_Contents );
        }
    }

    function showListAllWeekEventsView() {
        showOverlay( _element_ListAllWeekEventsView );

        _element_ListAllWeekEventsView_Contents.innerHTML = "";
        _element_ListAllWeekEventsView_EventsShown = [];

        var orderedEvents = [],
            currentDate = new Date(),
            firstDayNumber = currentDate.getDate() - currentDate.getDay() + 1,
            lastDayNumber = firstDayNumber + 6,
            weekStartDate = new Date( currentDate.setDate( firstDayNumber ) ),
            weekEndDate = new Date( currentDate.setDate( lastDayNumber) );

        weekStartDate.setHours(0, 0, 0, 0);
        weekEndDate.setHours(0, 0, 0, 0);

        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                for ( var storageGuid in _events[ storageDate ] ) {
                    if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                        orderedEvents.push( getAdjustedAllDayEventEvent( _events[ storageDate ][ storageGuid ] ) );
                    }
                }
            }
        }

        orderedEvents.sort( function( a, b ) {
            return a.from - b.from;
        });

        var orderedEventsLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to ) + 1,
                nextDate = new Date( orderedEvent.from ),
                added = false;
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( nextDate >= weekStartDate && nextDate <= weekEndDate ) {
                    var dayContents = buildListAllEventsDay( nextDate );
    
                    buildListAllWeekEventsEvent( orderedEvent, dayContents );
                    added = true;
                }

                nextDate.setDate( nextDate.getDate() + 1 );
            }

            if ( added ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }
        }

        if ( _options.exportEventsEnabled ) {
            if ( _element_ListAllWeekEventsView_EventsShown.length === 0 ) {
                _element_ListAllWeekEventsView_ExportEventsButton.style.display = "none";
            } else {
                _element_ListAllWeekEventsView_ExportEventsButton.style.display = "block";
            }
        }
    }

    function buildListAllWeekEventsEvent( eventDetails, container ) {
        var event = createElement( "div" );
        event.className = _options.manualEditingEnabled ? "event" : "event-no-hover";
        container.appendChild( event );

        var title = createElement( "div" );
        title.className = "title";
        title.innerHTML = eventDetails.title;
        event.appendChild( title );

        var startTime = createElement( "div" );
        startTime.className = "date";
        event.appendChild( startTime );

        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
            if ( eventDetails.isAllDayEvent ) {
                startTime.innerHTML = _options.allDayEventText;
            } else {
                startTime.innerHTML = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
            }
        } else {
            buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
        }

        if ( eventDetails.to < new Date() ) {
            event.className += " expired";
        }

        if ( eventDetails.isAllDayEvent ) {
            event.className += " all-day-event";
        }

        if ( eventDetails.description !== "" ) {
            var description = createElement( "div" );
            description.className = "description";
            description.innerHTML = eventDetails.description;
            event.appendChild( description );
        }

        if ( _options.manualEditingEnabled ) {
            event.onclick = function() {
                showEventDialog( eventDetails );
            };
        }
    }

    function buildListAllEventsDay( date ) {
        var weekDayNumber = date.getDay() - 1 < 0 ? 6 : date.getDay() - 1,
            dayContentsID = "day-" + weekDayNumber,
            dayContents = getElementByID( dayContentsID );
        
        if ( dayContents === null ) {
            var day = createElement( "div" );
            day.className = "day";
            _element_ListAllWeekEventsView_Contents.appendChild( day );

            var header = createElement( "div" );
            header.className = "header";
            day.appendChild( header );

            buildDayDisplay( header, date, _options.dayNames[ weekDayNumber ] + ", " );

            dayContents = createElement( "div" );
            dayContents.id = dayContentsID;
            dayContents.className = "events";
            day.appendChild( dayContents );
        }

        return dayContents;
    }

    function updateViewAllWeekEventsViewFromEventEdit() {
        if ( isOverlayVisible( _element_ListAllWeekEventsView ) ) {
            showListAllWeekEventsView();
        }
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
        var startText = createElement( "span" );
        startText.innerText = _options.startsAtText + " ";
        container.appendChild( startText );

        buildDateTimeDisplay( container, fromDate );

        var finishesText = createElement( "span" );
        finishesText.innerText = " " + _options.andFinishesAtText + " ";
        container.appendChild( finishesText );

        buildDateTimeDisplay( container, toDate );
    }

    function buildDateTimeDisplay( container, date, addTime ) {
        addTime = !isDefined( addTime ) ? true : addTime;

        buildDayDisplay( container, date );

        var dateEnd = createElement( "span" );
        dateEnd.innerText = " " + _options.monthNames[ date.getMonth() ] + " " + date.getFullYear();
        container.appendChild( dateEnd );

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

            var totalDaysInMonth = daysInMonth( previousMonth.getFullYear(), previousMonth.getMonth() ),
                elementDayNumber = 1;

            for ( var day = ( totalDaysInMonth - startDay ) + 1; day < totalDaysInMonth; day++ ) {
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
        }
    }

    function buildDay( actualDay, elementDayNumber, month, year, isMuted ) {
        var today = new Date(),
            dayIsToday = actualDay === today.getDate() && _currentDate.getFullYear() === today.getFullYear() && _currentDate.getMonth() === today.getMonth(),
            dayElement = getElementByID( _elementID_DayElement + elementDayNumber ),
            dayText = createElement( "span" );

        dayElement.className = _elementClassName_Cell + ( dayIsToday ? " today" : "" );
        dayElement.innerHTML = "";

        dayText.className = isMuted ? "day-muted" : "";
        dayText.innerText = actualDay;

        if ( _options.showDayNumberOrdinals ) {
            var sup = createElement( "sup" );
            sup.innerText = getDayOrdinal( actualDay );
            dayText.appendChild( sup );
        }

        dayElement.appendChild( dayText );

        if ( _options.fullDayViewEnabled ) {
            var expandDayButton = createElement( "div" );
            expandDayButton.className = "expand-day";
            expandDayButton.title = _options.expandDayTooltipText;
            dayElement.appendChild( expandDayButton );
    
            expandDayButton.onclick = function() {
                showFullDayView( new Date( year, month, actualDay ) );
            };
        }

        if ( _options.manualEditingEnabled ) {
            dayElement.ondblclick = function() {
                showEventDialog( null, new Date( year, month, actualDay ) );
            };

            if ( _options.manualEditingEnabled ) {
                dayElement.ondragover = function( e ) {
                    cancelBubble( e );
                };
        
                dayElement.ondrop = function( e ) {
                    dropEventOnDay( e, year, month, actualDay );
                };
            }
        }
    }

    function daysInMonth( year, month ) {
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

    function dropEventOnDay( e, year, month, day ) {
        cancelBubble( e );

        if ( _eventDetails_Dragged !== null ) {
            var totalDays = getTotalDaysBetweenDates( _eventDetails_Dragged.from, _eventDetails_Dragged.to ),
                fromDate = new Date( year, month, day, _eventDetails_Dragged.from.getHours(), _eventDetails_Dragged.from.getMinutes() ),
                toDate = new Date( year, month, day, _eventDetails_Dragged.to.getHours(), _eventDetails_Dragged.to.getMinutes() );               

            if ( totalDays > 0 ) {
                toDate.setDate( toDate.getDate() + totalDays );
            }

            var newEvent = {
                from: fromDate,
                to: toDate,
                title: _eventDetails_Dragged.title,
                description: _eventDetails_Dragged.description,
                isAllDayEvent: _eventDetails_Dragged.isAllDayEvent
            };

            _this.updateEvent( _eventDetails_Dragged.id, newEvent );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Disabled Background
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDisabledBackground() {
        if ( _element_DisabledBackground === null ) {
            _element_DisabledBackground = createElement( "div" );
            _element_DisabledBackground.className = "disabled-background";
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingDialog() {
        if ( _element_EventEditorDialog === null ) {
            _element_EventEditorDialog = createElement( "div" );
            _element_EventEditorDialog.className = "calender-event-editor-dialog";
            _document.body.appendChild( _element_EventEditorDialog );

            var view = createElement( "div" );
            view.className = "view";
            _element_EventEditorDialog.appendChild( view );

            _element_EventEditorDialog_DisabledArea = createElement( "div" );
            _element_EventEditorDialog_DisabledArea.className = "disabled-area";
            view.appendChild( _element_EventEditorDialog_DisabledArea );

            _element_EventEditorDialog_TitleBar = createElement( "div" );
            _element_EventEditorDialog_TitleBar.className = "title-bar";
            view.appendChild( _element_EventEditorDialog_TitleBar );

            var contents = createElement( "div" );
            contents.className = "contents";
            view.appendChild( contents );

            var textFrom = createElement( "p" );
            textFrom.innerText = _options.fromText;
            contents.appendChild( textFrom );

            var fromSplitContainer = createElement( "div" );
            fromSplitContainer.className = "split";
            contents.appendChild( fromSplitContainer );

            _element_EventEditorDialog_DateFrom = createElement( "input" );
            _element_EventEditorDialog_DateFrom.onchange = isAllDayEventChanged;
            fromSplitContainer.appendChild( _element_EventEditorDialog_DateFrom );

            setInputType( _element_EventEditorDialog_DateFrom, "date" );

            _element_EventEditorDialog_TimeFrom = createElement( "input" );
            fromSplitContainer.appendChild( _element_EventEditorDialog_TimeFrom );

            setInputType( _element_EventEditorDialog_TimeFrom, "time" );

            var isAllDayEventLabel = createElement( "label" );
            isAllDayEventLabel.className = "checkbox";
            isAllDayEventLabel.innerText = _options.isAllDayEventText;
            contents.appendChild( isAllDayEventLabel );

            _element_EventEditorDialog_IsAllDayEvent = createElement( "input" );
            _element_EventEditorDialog_IsAllDayEvent.type = "checkbox";
            _element_EventEditorDialog_IsAllDayEvent.onchange = isAllDayEventChanged;
            isAllDayEventLabel.appendChild( _element_EventEditorDialog_IsAllDayEvent );

            var isAllDayEventLabelSpan = createElement( "span" );
            isAllDayEventLabelSpan.className = "check-mark";
            isAllDayEventLabel.appendChild( isAllDayEventLabelSpan );

            var textTo = createElement( "p" );
            textTo.innerText = _options.toText;
            contents.appendChild( textTo );

            var toSplitContainer = createElement( "div" );
            toSplitContainer.className = "split";
            contents.appendChild( toSplitContainer );

            _element_EventEditorDialog_DateTo = createElement( "input" );
            toSplitContainer.appendChild( _element_EventEditorDialog_DateTo );

            setInputType( _element_EventEditorDialog_DateTo, "date" );

            _element_EventEditorDialog_TimeTo = createElement( "input" );
            toSplitContainer.appendChild( _element_EventEditorDialog_TimeTo );

            setInputType( _element_EventEditorDialog_TimeTo, "time" );

            var textTitle = createElement( "p" );
            textTitle.innerText = _options.titleText;
            contents.appendChild( textTitle );

            _element_EventEditorDialog_Title = createElement( "input" );
            _element_EventEditorDialog_Title.type = "text";
            contents.appendChild( _element_EventEditorDialog_Title );

            var textDescription = createElement( "p" );
            textDescription.innerText = _options.descriptionText;
            contents.appendChild( textDescription );

            _element_EventEditorDialog_Description = createElement( "textarea" );
            contents.appendChild( _element_EventEditorDialog_Description );

            _element_EventEditorDialog_ErrorMessage = createElement( "p" );
            _element_EventEditorDialog_ErrorMessage.className = "error";
            contents.appendChild( _element_EventEditorDialog_ErrorMessage );

            var buttonsSplitContainer = createElement( "div" );
            buttonsSplitContainer.className = "split";
            contents.appendChild( buttonsSplitContainer );

            _element_EventEditorDialog_OKButton = createElement( "input" );
            _element_EventEditorDialog_OKButton.className = "ok";
            _element_EventEditorDialog_OKButton.type = "button";
            _element_EventEditorDialog_OKButton.value = _options.addText;
            _element_EventEditorDialog_OKButton.onclick = eventDialogEvent_OK;
            buttonsSplitContainer.appendChild( _element_EventEditorDialog_OKButton );

            var cancelButton = createElement( "input" );
            cancelButton.className = "cancel";
            cancelButton.type = "button";
            cancelButton.value = _options.cancelText;
            cancelButton.onclick = eventDialogEvent_Cancel;
            buttonsSplitContainer.appendChild( cancelButton );

            _element_EventEditorDialog_RemoveButton = createElement( "input" );
            _element_EventEditorDialog_RemoveButton.className = "remove";
            _element_EventEditorDialog_RemoveButton.type = "button";
            _element_EventEditorDialog_RemoveButton.value = _options.removeEventText;
            _element_EventEditorDialog_RemoveButton.onclick = eventDialogEvent_Remove;
            contents.appendChild( _element_EventEditorDialog_RemoveButton );
        }
    }

    function setInputType( input, type ) {
        try {
            input.type = type;
        } catch( e ) {
            input.type = "text";
        }
    }

    function addNewEvent() {
        showEventDialog( null, _element_FullDayView_DateSelected );
    }

    function isAllDayEventChanged() {
        var disabled = false;

        if ( _element_EventEditorDialog_IsAllDayEvent.checked ) {
            _element_EventEditorDialog_DateTo.value = _element_EventEditorDialog_DateFrom.value;
            _element_EventEditorDialog_TimeFrom.value = "00:00";
            _element_EventEditorDialog_TimeTo.value = "23:59";
            disabled = true;
        }

        _element_EventEditorDialog_DateTo.disabled = disabled;
        _element_EventEditorDialog_TimeFrom.disabled = disabled;
        _element_EventEditorDialog_TimeTo.disabled = disabled;
    }

    function showEventDialog( eventDetails, overrideTodayDate ) {
        addNode( _document.body, _element_DisabledBackground );
        clearAutoRefreshTimer();

        _element_EventEditorDialog.style.display = "block";
        _element_EventEditorDialog_ErrorMessage.style.display = "none";
        _element_EventEditorDialog_DateFrom.focus();

        if ( isDefined( eventDetails ) ) {
            _element_EventEditorDialog_OKButton.value = _options.updateText;
            _element_EventEditorDialog_RemoveButton.style.display = "block";
            _element_EventEditorDialog_TitleBar.innerHTML = _options.editEventTitle;
            _element_EventEditorDialog_EventDetails = eventDetails;
            _element_EventEditorDialog_DateFrom.value = toFormattedDate( eventDetails.from );
            _element_EventEditorDialog_TimeFrom.value = toFormattedTime( eventDetails.from );
            _element_EventEditorDialog_DateTo.value = toFormattedDate( eventDetails.to );
            _element_EventEditorDialog_TimeTo.value = toFormattedTime( eventDetails.to );
            _element_EventEditorDialog_IsAllDayEvent.checked = eventDetails.isAllDayEvent;
            _element_EventEditorDialog_Title.value = eventDetails.title;
            _element_EventEditorDialog_Description.value = eventDetails.description;
        } else {
            var date = new Date(),
                today = !isDefined( overrideTodayDate ) ? date : overrideTodayDate;

            if ( isDateToday( today ) ) {
                today.setHours( date.getHours() );
                today.setMinutes( date.getMinutes() );
            }

            _element_EventEditorDialog_OKButton.value = _options.addText;
            _element_EventEditorDialog_RemoveButton.style.display = "none";
            _element_EventEditorDialog_TitleBar.innerHTML = _options.addEventTitle;
            _element_EventEditorDialog_EventDetails = null;
            _element_EventEditorDialog_DateFrom.value = toFormattedDate( today );
            _element_EventEditorDialog_TimeFrom.value = toFormattedTime( today );
            _element_EventEditorDialog_DateTo.value = toFormattedDate( today );
            _element_EventEditorDialog_TimeTo.value = toFormattedTime( today );
            _element_EventEditorDialog_IsAllDayEvent.checked = false;
            _element_EventEditorDialog_Title.value = "";
            _element_EventEditorDialog_Description.value = "";
        }

        isAllDayEventChanged();
    }

    function eventDialogEvent_OK() {
        var fromDate = new Date( _element_EventEditorDialog_DateFrom.value ),
            toDate = new Date( _element_EventEditorDialog_DateTo.value ),
            fromTime = _element_EventEditorDialog_TimeFrom.value.split( ":" ),
            toTime = _element_EventEditorDialog_TimeTo.value.split( ":" ),
            title = trimString( _element_EventEditorDialog_Title.value ),
            description = trimString( _element_EventEditorDialog_Description.value );

        if ( fromTime.length <= 0 ) {
            showEventDialogErrorMessage( _options.fromTimeErrorMessage, _element_EventEditorDialog_TimeFrom );
        } else if ( toTime.length <= 0 ) {
            showEventDialogErrorMessage( _options.toTimeErrorMessage, _element_EventEditorDialog_TimeTo );
        } else if ( toDate < fromDate ) {
            showEventDialogErrorMessage( _options.toSmallerThanFromErrorMessage, _element_EventEditorDialog_DateTo );
        } else if ( title === "" ) {
            showEventDialogErrorMessage( _options.titleErrorMessage, _element_EventEditorDialog_Title );
        }
        else {

            eventDialogEvent_Cancel();

            fromDate.setHours( parseInt( fromTime[ 0 ] ) );
            fromDate.setMinutes( parseInt( fromTime[ 1 ] ) );
            toDate.setHours( parseInt( toTime[ 0 ] ) );
            toDate.setMinutes( parseInt( toTime[ 1 ] ) );

            var newEvent = {
                from: fromDate,
                to: toDate,
                title: title,
                description: description,
                isAllDayEvent: _element_EventEditorDialog_IsAllDayEvent.checked
            };

            if ( _element_EventEditorDialog_EventDetails !== null ) {
                _this.updateEvent( _element_EventEditorDialog_EventDetails.id, newEvent, false );
            } else {
                _this.addEvent( newEvent, false );
            }

            buildDayEvents();
            refreshOpenedViews();
        }
    }

    function eventDialogEvent_Cancel() {
        _element_EventEditorDialog.style.display = "none";

        removeNode( _document.body, _element_DisabledBackground );
        startAutoRefreshTimer();
    }

    function eventDialogEvent_Remove() {
        _element_EventEditorDialog_DisabledArea.style.display = "block";

        var onNoEvent = function() {
            _element_EventEditorDialog_DisabledArea.style.display = "none";
        };

        var onYesEvent = function() {
            onNoEvent();
            eventDialogEvent_Cancel();

            if ( _element_EventEditorDialog_EventDetails !== null ) {
                _this.removeEvent( _element_EventEditorDialog_EventDetails.id, true );
                refreshOpenedViews();
            }
        };

        showConfirmationDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent );
    }

    function toFormattedDate( date ) {
        var day = ( "0" + date.getDate() ).slice( -2 ),
            month = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 ),
            formatted = date.getFullYear() + "-" + month + "-" + day;

        return formatted;
    }

    function toFormattedTime( date ) {
        return padNumber( date.getHours() ) + ":" + padNumber( date.getMinutes() );
    }

    function padNumber( number ) {
        var numberString = number.toString();

        return numberString.length === 1 ? "0" + numberString : numberString;
    }

    function showEventDialogErrorMessage( message, input ) {
        _element_EventEditorDialog_ErrorMessage.innerHTML = message;
        _element_EventEditorDialog_ErrorMessage.style.display = "block";

        input.focus();
    }

    function trimString( string ) {
        return string.replace( /^\s+|\s+$/g , "" );
    }

    function refreshOpenedViews() {
        updateFullDayViewFromEventEdit();
        updateViewAllEventsViewFromEventEdit();
        updateViewAllWeekEventsViewFromEventEdit();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Confirmation Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildConfirmationDialog() {
        if ( _element_ConfirmationDialog === null ) {
            _element_ConfirmationDialog = createElement( "div" );
            _element_ConfirmationDialog.className = "calender-confirmation-dialog";
            _document.body.appendChild( _element_ConfirmationDialog );

            _element_ConfirmationDialog_TitleBar = createElement( "div" );
            _element_ConfirmationDialog_TitleBar.className = "title-bar";
            _element_ConfirmationDialog.appendChild( _element_ConfirmationDialog_TitleBar );

            var contents = createElement( "div" );
            contents.className = "contents";
            _element_ConfirmationDialog.appendChild( contents );

            _element_ConfirmationDialog_Message = createElement( "div" );
            _element_ConfirmationDialog_Message.className = "message";
            contents.appendChild( _element_ConfirmationDialog_Message );

            var buttonsSplitContainer = createElement( "div" );
            buttonsSplitContainer.className = "split";
            contents.appendChild( buttonsSplitContainer );

            _element_ConfirmationDialog_YesButton = createElement( "input" );
            _element_ConfirmationDialog_YesButton.className = "yes";
            _element_ConfirmationDialog_YesButton.type = "button";
            _element_ConfirmationDialog_YesButton.value = _options.yesText;
            buttonsSplitContainer.appendChild( _element_ConfirmationDialog_YesButton );

            _element_ConfirmationDialog_NoButton = createElement( "input" );
            _element_ConfirmationDialog_NoButton.className = "no";
            _element_ConfirmationDialog_NoButton.type = "button";
            _element_ConfirmationDialog_NoButton.value = _options.noText;
            buttonsSplitContainer.appendChild( _element_ConfirmationDialog_NoButton );
        }
    }

    function showConfirmationDialog( title, message, onYesEvent, onNoEvent ) {
        _element_ConfirmationDialog.style.display = "block";
        _element_ConfirmationDialog_TitleBar.innerHTML = title;
        _element_ConfirmationDialog_Message.innerHTML = message;
        _element_ConfirmationDialog_YesButton.onclick = hideConfirmationDialog;
        _element_ConfirmationDialog_NoButton.onclick = hideConfirmationDialog;
        _element_ConfirmationDialog_YesButton.addEventListener( "click", onYesEvent );

        if ( isDefinedFunction( onNoEvent ) ) {
            
            _element_ConfirmationDialog_NoButton.addEventListener( "click", onNoEvent );
        }
    }

    function hideConfirmationDialog() {
        _element_ConfirmationDialog.style.display = "none";
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
        refreshOpenedViews();
        buildDayEvents();
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

    function createElement( type ) {
        var result = null,
            nodeType = type.toLowerCase(),
            isText = nodeType === "text";

        if ( !_elementTypes.hasOwnProperty( nodeType ) ) {
            _elementTypes[ nodeType ] = isText ? _document.createTextNode( "" ) : _document.createElement( nodeType );
        }

        result = _elementTypes[ nodeType ].cloneNode( false );

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
            parent.appendChild( node );
        } catch ( e ) {
            console.warn( e.message );
        }
    }

    function removeNode( parent, node ) {
        try {
            parent.removeChild( node );
        } catch ( e ) {
            console.warn( e.message );
        }
    }

    function cancelBubble( e ) {
        e.preventDefault();
        e.cancelBubble = true;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Validation
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function isDefined( data ) {
        return data !== undefined && data !== null && data !== "";
    }

    function isFunction( object ) {
        return typeof object === "function";
    }

    function isDefinedFunction( object ) {
        return isDefined( object ) && isFunction( object );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Export Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function exportEvents( events, type ) {
        type = isDefined( type ) ? type : "csv";

        var contents = "",
            contentsEvents = getExportEvents( events );

        if ( type === "csv" ) {
            contents = getCsvContents( contentsEvents );
        } else if ( type === "xml" ) {
            contents = getXmlContents( contentsEvents );
        } else if ( type === "json" ) {
            contents = getJsonContents( contentsEvents );
        }

        if ( contents !== "" ) {
            var tempLink = createElement( "a" );
            tempLink.style.display = "none";
            tempLink.setAttribute( "target", "_blank" );
            tempLink.setAttribute( "href", "data:text/" + type + ";charset=utf-8," + encodeURIComponent( contents ) );
            tempLink.setAttribute( "download", getExportDownloadFilename( type ) );
    
            _document.body.appendChild( tempLink );
            tempLink.click();
            _document.body.removeChild( tempLink );
    
            triggerOptionsEvent( "onEventsExported" );
        }
    }

    function getExportEvents( events ) {
        var csvOrderedEvents = [];

        if ( isDefined( events ) ) {
            var eventsLength = events.length;
            
            for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
                csvOrderedEvents.push( events[ eventIndex ] );
            }
        } else {

            for ( var storageDate in _events ) {
                if ( _events.hasOwnProperty( storageDate ) ) {
                    for ( var storageGuid in _events[ storageDate ] ) {
                        if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                            csvOrderedEvents.push( _events[ storageDate ][ storageGuid ] );
                        }
                    }
                }
            }
        }

        csvOrderedEvents.sort( function( a, b ) {
            return a.from - b.from;
        });

        return csvOrderedEvents;
    }

    function getExportDownloadFilename( type ) {
        var date = new Date(),
            datePart = padNumber( date.getDate() ) + "-" + padNumber( date.getMonth() ) + "-" + date.getFullYear(),
            timePart = padNumber( date.getHours() ) + "-" + padNumber( date.getMinutes() );

        return _options.exportStartFilename + datePart + "_" + timePart + "." + type;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To CSV
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getCsvContents( csvOrderedEvents ) {
        var headers = [ _options.fromText, _options.toText, _options.isAllDayEventText, _options.titleText, _options.descriptionText ],
            headersLength = headers.length,
            csvHeaders = [],
            csvContents = [];

        for ( var headerIndex = 0; headerIndex < headersLength; headerIndex++ ) {
            csvHeaders.push( getCsvValue( headers[ headerIndex ] ) );
        }
        
        csvContents.push( getCsvValueLine( csvHeaders ) );

        var csvOrderedEventLength = csvOrderedEvents.length;
        for ( var csvOrderedEventIndex = 0; csvOrderedEventIndex < csvOrderedEventLength; csvOrderedEventIndex++ ) {
            storeCsvData( csvContents, csvOrderedEvents[ csvOrderedEventIndex ] );
        }

        return csvContents.join( "\n" );
    }

    function storeCsvData( csvContents, eventDetails ) {
        var eventContents = [];

        eventContents.push( getCsvValue( getCsvDateTime( eventDetails.from ) ) );
        eventContents.push( getCsvValue( getCsvDateTime( eventDetails.to ) ) );
        eventContents.push( getCsvValue( getCsvYesNoFromBoolean( eventDetails.isAllDayEvent ) ) );
        eventContents.push( getCsvValue( eventDetails.title.toString() ) );
        eventContents.push( getCsvValue( eventDetails.description.toString() ) );

        csvContents.push( getCsvValueLine( eventContents ) );
    }

    function getCsvYesNoFromBoolean( flag ) {
        return flag ? _options.yesText : _options.noText;
    }

    function getCsvValue( text ) {
        text = text.replace( /(\r\n|\n|\r)/gm, '' ).replace( /(\s\s)/gm, ' ' );
        text = text.replace( /"/g, '""' );
        text = '"' + text + '"';

        return text;
    }

    function getCsvValueLine( csvValues ) {
        return csvValues.join( ',' );
    }

    function getCsvDateTime( eventDate ) {
        var date = padNumber( eventDate.getDate() ) + "/" + padNumber( eventDate.getMonth() ) + "/" + eventDate.getFullYear(),
            time = padNumber( eventDate.getHours() ) + ":" + padNumber( eventDate.getMinutes() );

        return date + " " + time;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To XML
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getXmlContents( csvOrderedEvents ) {
        var xmlContents = [];
        xmlContents.push( "<?xml version=\"1.0\" ?>" );
        xmlContents.push( "<events>" );

        var csvOrderedEventLength = csvOrderedEvents.length;
        for ( var csvOrderedEventIndex = 0; csvOrderedEventIndex < csvOrderedEventLength; csvOrderedEventIndex++ ) {
            var orderedEvent = csvOrderedEvents[ csvOrderedEventIndex ];

            xmlContents.push( "<event>" );

            for ( var propertyName in orderedEvent ) {
                if ( orderedEvent.hasOwnProperty( propertyName ) ) {
                    xmlContents.push( "<" + propertyName + ">" + orderedEvent[ propertyName ] + "</" + propertyName + ">" );
                }
            }
    
            xmlContents.push( "</event>" );
        }

        xmlContents.push( "</events>" );

        return xmlContents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To JSON
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getJsonContents( csvOrderedEvents ) {
        var jsonContents = [];
        jsonContents.push( "{" );
        jsonContents.push( "\"events:\": [" );

        var csvOrderedEventLength = csvOrderedEvents.length;
        for ( var csvOrderedEventIndex = 0; csvOrderedEventIndex < csvOrderedEventLength; csvOrderedEventIndex++ ) {
            var orderedEvent = csvOrderedEvents[ csvOrderedEventIndex ];
            
            jsonContents.push( "{" );

            for ( var propertyName in orderedEvent ) {
                if ( orderedEvent.hasOwnProperty( propertyName ) ) {
                    jsonContents.push( "\"" + propertyName + "\":\"" + orderedEvent[ propertyName ] + "\"," );
                }
            }

            var lastJsonEntry = jsonContents[ jsonContents.length - 1 ];
            jsonContents[ jsonContents.length - 1 ] = lastJsonEntry.substring( 0, lastJsonEntry.length - 1 );
    
            jsonContents.push( "}," );
        }

        jsonContents[ jsonContents.length - 1 ] = "}";
        jsonContents.push( "]" );
        jsonContents.push( "}" );

        return jsonContents.join( "\n" );
    }


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
     * exportAllEvents().
     * 
     * Exports all the events into a CSV download.
     * 
     * @fires onEventsExported
     * 
     * @param       {string}    type                                        The data type to export to (defaults to "csv").
     */
    this.exportAllEvents = function( type ) {
        if ( _options.exportEventsEnabled ) {
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
        previousMonth.setDate( 1 );

        build( previousMonth );
        triggerOptionsEvent( "onPreviousMonth" );
    }

    function moveForwardMonth() {
        var nextMonth = new Date( _currentDate );
        nextMonth.setMonth( nextMonth.getMonth() + 1 );
        nextMonth.setDate( 1 );

        build( nextMonth );
        triggerOptionsEvent( "onNextMonth" );
    }

    function moveToday() {
        build();
        triggerOptionsEvent( "onToday" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Add/Remove Events (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * addEvents().
     * 
     * Adds an array of new events.
     * 
     * @fires       onEventsAdded
     * 
     * @param       {array}     events                                      The array of events.
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
        }
    };

    /**
     * addEvent().
     * 
     * Adds an array of new events.
     * 
     * @fires       onEventAdded
     * 
     * @param       {object}    event                                       The event.
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventAdded" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was added.
     */
    this.addEvent = function( event, updateEvents, triggerEvent ) {
        var added = false;

        if ( event.from <= event.to ) {
            var storageDate = toStorageDate( event.from ),
                storageGuid = newGuid();

            if ( !_events.hasOwnProperty( storageDate ) ) {
                _events[ storageDate ] = {};
            }

            if ( !_events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
                triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

                event.id = storageGuid;

                _events[ storageDate ][ storageGuid ] = getAdjustedAllDayEventEvent( event );
                added = true;

                if ( triggerEvent ) {
                    triggerOptionsEventWithEventData( "onEventAdded", event );
                }
        
                if ( updateEvents ) {
                    buildDayEvents();
                }
            }
        }

        return added;
    };

    /**
     * updateEvent().
     * 
     * Adds an array of new events.
     * 
     * @fires       onEventUpdated
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {object}    event                                       The event.
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

        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                for ( var storageID in _events[ storageDate ] ) {

                    if ( _events[ storageDate ].hasOwnProperty( storageID ) && storageID === id ) {
                        updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
                        triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

                        delete _events[ storageDate ][ storageID ];
                        removed = true;

                        if ( triggerEvent ) {
                            triggerOptionsEventWithEventData( "onEventRemoved", _events[ storageDate ][ storageID ] );
                        }

                        if ( updateEvents ) {
                            buildDayEvents();
                        }

                        break;
                    }
                }
            }
        }

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
        }
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
     * Sets the options that should be used in Calender.js.
     * 
     * @param {object}      newOptions                                  All the configurable options that should be used (see Options documentation).
     */
    this.setOptions = function( newOptions ) {
        if ( newOptions !== null && typeof newOptions === "object" ) {
            _options = newOptions;
        } else {
            _options = {};
        }

        if ( !isDefined( _options.previousMonthTooltipText ) ) {
            _options.previousMonthTooltipText = "Previous Month";
        }

        if ( !isDefined( _options.nextMonthTooltipText ) ) {
            _options.nextMonthTooltipText = "Next Month";
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

        if ( !isDefined( _options.expandDayTooltipText ) ) {
            _options.expandDayTooltipText = "Expand Day";
        }

        if ( !isDefined( _options.listAllEventsTooltipText ) ) {
            _options.listAllEventsTooltipText = "View All Events";
        }

        if ( !isDefined( _options.listWeekEventsTooltipText ) ) {
            _options.listWeekEventsTooltipText = "View Week Events";
        }

        if ( !isDefined( _options.dayHeaderNames ) ) {
            _options.dayHeaderNames = [ "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" ];
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

        if ( !isDefined( _options.isAllDayEventText ) ) {
            _options.isAllDayEventText = "Is All Day Event";
        }

        if ( !isDefined( _options.titleText ) ) {
            _options.titleText = "Title:";
        }

        if ( !isDefined( _options.descriptionText ) ) {
            _options.descriptionText = "Description:";
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
            _options.removeEventText = "Remove Event";
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

        if ( !isDefined( _options.fullDayViewEnabled ) ) {
            _options.fullDayViewEnabled = true;
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

        if ( !isDefined( _options.allDayEventText ) ) {
            _options.allDayEventText = "All Day Event";
        }

        if ( !isDefined( _options.allEventsText ) ) {
            _options.allEventsText = "All Events";
        }

        if ( !isDefined( _options.allWeekEventsText ) ) {
            _options.allWeekEventsText = "All Week Events";
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

        if ( !isDefined( _options.startsAtText ) ) {
            _options.startsAtText = "Starts at";
        }

        if ( !isDefined( _options.andFinishesAtText ) ) {
            _options.andFinishesAtText = "and finishes at";
        }

        if ( !isDefined( _options.toTimeText ) ) {
            _options.toTimeText = "to";
        }

        if ( !isDefined( _options.autoRefreshTimerDelay ) ) {
            _options.autoRefreshTimerDelay = 5000;
        }

        if ( !isDefined( _options.confirmEventRemoveTitle ) ) {
            _options.confirmEventRemoveTitle = "Confirm Event Removal";
        }

        if ( !isDefined( _options.confirmEventRemoveMessage ) ) {
            _options.confirmEventRemoveMessage = "Removing this event cannot be undone.  Do you want to continue?";
        }
    };

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Initialize Calendar.js
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    ( function ( documentObject, windowObject ) {
        _document = documentObject;
        _window = windowObject;
        _elementID = id;

        _this.setOptions( options );

        build( startDateTime );

    } ) ( document, window );
}