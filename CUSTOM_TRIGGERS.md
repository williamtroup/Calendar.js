# Calendar.js - Functions:

Below is a list of all the custom triggers supported in Calendar.js, which are fired when specific actions occur.
<br>
<br>

<h1>For Events:</h1>

### **options.onEventAdded( *event* )**:
Fires when an event is added.
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onEventUpdated( *event* )**:
Fires when an event is updated.
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onEventRemoved( *event* )**:
Fires when an event is removed.
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onEventsAdded( *events* )**:
Fires when an events are added.
<br>
***Parameter: event***: '*Event[]*' - The array of events.

### **options.onEventsUpdated( *events* )**:
Fires when an events are updated.
<br>
***Parameter: event***: '*Event[]*' - The array of events.

### **options.onEventsSet( *events* )**:
Fires when an events are set (all all other events are cleared).
<br>
***Parameter: event***: '*Event[]*' - The array of events.

### **options.onEventsSetFromJSON( *json* )**:
Fires when an events are set from JSON (all all other events are cleared).
<br>
***Parameter: json***: '*string*' - The JSON.

### **options.onEventsAddedFromJSON( *json* )**:
Fires when an events are added from JSON.
<br>
***Parameter: json***: '*string*' - The JSON.

### **options.onEventsExported()**:
Fires when an events are exported.

### **options.onEventsCleared()**:
Fires when an events are cleared.

### **options.onEventDragStart( *event* )**:
Fires when dragging an event is started.
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onEventDragStop( *event* )**:
Fires when dragging an event is stopped.
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onEventDragDrop( *event*, *targetDate* )**:
Fires when an event that was dragged is dropped on a date.
<br>
***Parameter: event***: '*Event*' - The event details.
<br>
***Parameter: targetDate***: '*Object*' - The date the event was dropped on.

### **options.onEventClick( *event* )**:
Fires when dragging an event is clicked.
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onEventDoubleClick( *event* )**:
Fires when dragging an event is double clicked (only enabled when Editing Mode is disabled).
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onEventUrlClicked( *url* )**:
Fires when an event URL is clicked.
<br>
***Parameter: url***: '*string*' - The URL clicked.

<br>
<h1>For The Display Date:</h1>

### **options.onPreviousMonth( *date* )**:
Fires when the calendar moves to the previous month.
<br>
***Parameter: date***: '*Object*' - The new display date.

### **options.onNextMonth( *date* )**:
Fires when the calendar moves to the next month.
<br>
***Parameter: date***: '*Object*' - The new display date.

### **options.onPreviousYear( *date* )**:
Fires when the calendar moves to the previous year.
<br>
***Parameter: date***: '*Object*' - The new display date.

### **options.onNextYear( *date* )**:
Fires when the calendar moves to the next year.
<br>
***Parameter: date***: '*Object*' - The new display date.

### **options.onToday()**:
Fires when the calendar is moved to todays date.

### **options.onSetDate( *date* )**:
Fires when the calendar date is set manually.
<br>
***Parameter: date***: '*Object*' - The new display date.

<br>
<h1>For Groups:</h1>

### **options.onGroupsCleared()**:
Fires when all the groups are cleared from the events.

### **options.onGroupRemoved( *groupName* )**:
Fires when a specific group is removed.
<br>
***Parameter: groupName***: '*string*' - The name of the group.

<br>
<h1>For Options:</h1>

### **options.onOptionsUpdated( *options* )**:
Fires when the configurable options are updated.
<br>
***Parameter: options***: '*Options*' - The options.

### **options.onSearchOptionsUpdated( *options* )**:
Fires when the configurable search options are updated.
<br>
***Parameter: options***: '*Search*' - The options.

<br>
<h1>For DatePicker Mode:</h1>

### **options.onDatePickerDateChanged( *date* )**:
Fires when the DatePicker moves to a specific date.
<br>
***Parameter: date***: '*Object*' - The new display date.

### **options.onDatePickerOpened( *id* )**:
Fires when the DatePicker is opened.
<br>
***Parameter: id***: '*string*' - The Id of the DatePicker.

### **options.onDatePickerClosed( *id* )**:
Fires when the DatePicker is closed.
<br>
***Parameter: id***: '*string*' - The Id of the DatePicker.

<br>
<h1>For Actions:</h1>

### **options.onNotificationClicked( *event* )**:
Fires when a browser notification is clicked for an event.
<br>
***Parameter: event***: '*Event*' - The event details.

### **options.onFullScreenModeChanged( *flag* )**:
Fires when the full-screen mode is changed.
<br>
***Parameter: flag***: '*boolean*' - States if full-screen mode is on.

### **options.onDestroy( *id* )**:
Fires when the Calendar is destroyed.
<br>
***Parameter: id***: '*string*' - The Id of the Calendar.

### **options.onRefresh()**:
Fires when the Calendar is refreshed.

### **options.onRender( *id* )**:
Fires when the Calendar is rendered.
<br>
***Parameter: id***: '*string*' - The Id of the Calendar.