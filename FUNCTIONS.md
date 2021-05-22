# Calendar.js - Functions:

Below is a list of all the public functions that can be called from a Calendar.js class instance.
<br>
<br>

### **turnOnFullScreen()**:
Turns on the full-screen mode (if enabled).

### **turnOffFullScreen()**:
Turns off the full-screen mode (if enabled).

### **startTheAutoRefreshTimer()**:
Starts the auto-refresh timer (if enabled).

### **stopTheAutoRefreshTimer()**:
Stops the auto-refresh timer (if enabled).

### **destroy()**:
Removes the calendar from the DOM.

### **moveToPreviousMonth()**:
Moves to the previous month.
<br>
***Fires***:  onPreviousMonth

### **moveToNextMonth()**:
Moves to the next month.
<br>
***Fires***:  onNextMonth

### **moveToPreviousYear()**:
Moves to the previous year.
<br>
***Fires***:  onPreviousYear

### **moveToNextYear()**:
Moves to the next year.
<br>
***Fires***:  onNextYear

### **moveToToday()**:
Moves to the current month.
<br>
***Fires***:  onToday

### **getCurrentDisplayDate()**:
Returns the current date that is being used in the main display.
<br>
***Returns***: '*Object*' - A Date() object (day is always set to the 1st).

### **setCurrentDisplayDate( *date* )**:
Sets the current date that is being used in the main display.
<br>
***Fires***:  onSetDate
<br>
***Parameter: date***: '*Object*' - The Date() object to set.

### **exportAllEvents( *type* )**:
Exports all the events into a downloadable file.
<br>
***Fires***:  onEventsExported
<br>
***Parameter: type***: '*string*' - The data type to export to (defaults to "csv", accepts "csv", "xml", "json", "txt", "ical", "md", and "html").

### **refresh()**:
Refreshes all of the views.

### **setEvents( *events*, *updateEvents*, *triggerEvent* )**:
Sets the events and clears any existing ones.
<br>
***Fires***:  onEventsSet
<br>
***Parameter: events***: '*Object[]*' - The array of events (refer to "Event" documentation for properties).
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onEventsSet" event should be triggered.

### **addEvents( *events*, *updateEvents*, *triggerEvent* )**:
Adds an array of new events.
<br>
***Fires***:  onEventsAdded
<br>
***Parameter: events***: '*Object[]*' - The array of events (refer to "Event" documentation for properties).
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onEventsAdded" event should be triggered.

### **addEvent( *event*, *updateEvents*, *triggerEvent* )**:
Adds a of new event.
<br>
***Fires***:  onEventAdded
<br>
***Parameter: event***: '*Object*' - The event (refer to "Event" documentation for properties).
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onEventAdded" event should be triggered.

### **updateEvents( *events*, *updateEvents*, *triggerEvent* )**:
Updates an array of existing events.
<br>
***Fires***:  onEventsUpdated
<br>
***Parameter: events***: '*Object[]*' - The array of events (refer to "Event" documentation for properties).
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onEventsUpdated" event should be triggered.

### **updateEvent( *id*, *event*, *updateEvents*, *triggerEvent* )**:
Updates an existing event.
<br>
***Fires***:  onEventUpdated
<br>
***Parameter: id***: '*string*' - The ID of the event.
<br>
***Parameter: event***: '*Object*' - The event (refer to "Event" documentation for properties).
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onEventUpdated" event should be triggered.
<br>
***Returns***: '*boolean*' - States if the event was updated.

### **updateEventDateTimes( *id*, *from*, *to*, *repeatEnds*, *updateEvents*, *triggerEvent* )**:
Updates an existing events from, to, and repeatEnds dates.
<br>
***Fires***:  onEventUpdated
<br>
***Parameter: id***: '*string*' - The ID of the event.
<br>
***Parameter: from***: '*Object*' - The new from date.
<br>
***Parameter: to***: '*Object*' - The new to date.
<br>
***Parameter: repeatEnds***: '*Object*' - The new repeat ends day.
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onEventUpdated" event should be triggered.
<br>
***Returns***: '*boolean*' - States if the event was updated.

### **removeEvent( *id*, *updateEvents*, *triggerEvent* )**:
Removes an event.
<br>
***Fires***:  onEventRemoved
<br>
***Parameter: id***: '*string*' - The ID of the event.
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onEventRemoved" event should be triggered.
<br>
***Returns***: '*boolean*' - States if the event was removed.

### **clearEvents( *updateEvents* )**:
Clears all the events.
<br>
***Fires***:  onEventsCleared
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).

### **getEvents()**:
Returns an array of the events available.
<br>
***Returns***: '*Object[]*' - An array of the event.

### **getEvent( *id* )**:
Returns an event that matches the ID passed.
<br>
***Parameter: id***: '*string*' - The ID of the event to get.
<br>
***Returns***: '*object*' - The event details (or null if the ID cannot be found).

### **getAllGroups()**:
Returns an array of group names being used.
<br>
***Returns***: '*Object[]*' - An array of the group names.

### **clearAllGroups( *updateEvents* )**:
Clears all the event groups.
<br>
***Fires***:  onGroupsCleared
<br>
***Parameter: updateEvents***: '*boolean*' - States of the calendar display should be updated (defaults to true).

### **getVersion()**:
Returns the version of Calendar.js.
<br>
***Returns***: '*string*' - The version number.

### **setOptions( *newOptions*, *triggerEvent* )**:
Sets the specific options that should be used.
<br>
***Fires***:  onOptionsUpdated
<br>
***Parameter: newOptions***: '*Object*' - All the options that should be set (refer to "Options" documentation for properties).
<br>
***Parameter: triggerEvent***: '*boolean*' - States of the "onOptionsUpdated" event should be triggered.