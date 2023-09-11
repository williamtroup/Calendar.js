# Calendar.js - Functions:

Below is a list of all the public functions that can be called from a Calendar.js class instance.
<br>
<br>

<h1>Main controls:</h1>

### **turnOnFullScreen()**:
Turn on the full-screen mode (if enabled).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **turnOffFullScreen()**:
Turn off the full-screen mode (if enabled).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **isFullScreenActivated()**:
States if full-screen mode is activated.
<br>
***Returns***: '*boolean*' - States if the full-screen mode is activated.

### **startTheAutoRefreshTimer()**:
Starts the auto-refresh timer (if enabled).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **stopTheAutoRefreshTimer()**:
Stops the auto-refresh timer (if enabled).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **destroy()**:
Removes the calendar from the DOM.
<br>
***Fires***:  onDestroy
<br>
***Returns***: '*Object*' - The Calendar.js class instance.


<br>
<h1>Navigation, Exporting and Refreshing:</h1>

### **moveToPreviousMonth()**:
Moves to the previous month.
<br>
***Fires***:  onPreviousMonth
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **moveToNextMonth()**:
Moves to the next month.
<br>
***Fires***:  onNextMonth
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **moveToPreviousYear()**:
Moves to the previous year.
<br>
***Fires***:  onPreviousYear
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **moveToNextYear()**:
Moves to the next year.
<br>
***Fires***:  onNextYear
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **moveToToday()**:
Moves to the current month.
<br>
***Fires***:  onToday
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

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
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **getSelectedDatePickerDate()**:
Returns the current date that has been selected in DatePicker mode.
<br>
***Returns***: '*Object*' - A Date() object.

### **setSelectedDatePickerDate( *date* )**:
Sets the current date that is being used in DatePicker mode.
<br>
***Fires***:  onDatePickerDateChanged
<br>
***Parameter: date***: '*Object*' - The Date() object to set.
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **exportAllEvents( *[type]* )**:
Exports all the events into a downloadable file.
<br>
***Fires***:  onEventsExported
<br>
***Parameter: type***: '*string*' - The data type to export to (defaults to "csv", accepts "csv", "xml", "json", "txt", "ical", "md", "html", and "tsv").
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **refresh()**:
Refreshes all of the views.
<br>
***Fires***:  onRefresh
<br>
***Returns***: '*Object*' - The Calendar.js class instance.


<br>
<h1>Add/Remove Events:</h1>

### **setEvents( *events*, *[updateEvents]*, *[triggerEvent]* )**:
Sets the events and clears any existing ones.
<br>
***Fires***:  onEventsSet
<br>
***Parameter: events***: '*Event[]*' - The array of events (refer to ["Event"](EVENT.md) documentation for properties).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventsSet" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **setEventsFromJson( *json*, *[updateEvents]*, *[triggerEvent]* )**:
Sets new events from JSON data and clears any existing ones.
<br>
***Fires***:  onEventsSetFromJSON
<br>
***Parameter: json***: '*string*' - The JSON string containing the events (refer to ["Event"](EVENT.md) documentation for properties).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventsSetFromJSON" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **addEvents( *events*, *[updateEvents]*, *[triggerEvent]* )**:
Adds an array of new events.
<br>
***Fires***:  onEventsAdded
<br>
***Parameter: events***: '*Event[]*' - The array of events (refer to ["Event"](EVENT.md) documentation for properties).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventsAdded" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **addEventsFromJson( *json*, *[updateEvents]*, *[triggerEvent]* )**:
Adds new events from JSON data.
<br>
***Fires***:  onEventsAddedFromJSON
<br>
***Parameter: json***: '*json*' - The JSON string containing the events (refer to ["Event"](EVENT.md) documentation for properties).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventsAddedFromJSON" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **addEvent( *event*, *[updateEvents]*, *[triggerEvent]*, *[setLastUpdated]* )**:
Adds a new event.
<br>
***Fires***:  onEventAdded
<br>
***Parameter: event***: '*Event*' - The event (refer to ["Event"](EVENT.md) documentation for properties).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventAdded" event should be triggered (defaults to true).
<br>
***Parameter: [setLastUpdated]***: '*boolean*' - States if the "lastUpdated" date should be set (defaults to true).
<br>
***Returns***: '*boolean*' - States if the event was added.

### **[updateEvents]( *events*, *[updateEvents]*, *[triggerEvent]* )**:
Updates an array of existing events.
<br>
***Fires***:  onEventsUpdated
<br>
***Parameter: events***: '*Event[]*' - The array of events (refer to ["Event"](EVENT.md) documentation for properties).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventsUpdated" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **updateEvent( *id*, *event*, *[updateEvents]*, *[triggerEvent]* )**:
Updates an existing event.
<br>
***Fires***:  onEventUpdated
<br>
***Parameter: id***: '*string*' - The ID of the event.
<br>
***Parameter: event***: '*Event*' - The event (refer to ["Event"](EVENT.md) documentation for properties).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventUpdated" event should be triggered (defaults to true).
<br>
***Returns***: '*boolean*' - States if the event was updated.

### **updateEventDateTimes( *id*, *from*, *to*, *repeatEnds*, *[updateEvents]*, *[triggerEvent]* )**:
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
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventUpdated" event should be triggered (defaults to true).
<br>
***Returns***: '*boolean*' - States if the event was updated.

### **removeEvent( *id*, *[updateEvents]*, *[triggerEvent]* )**:
Removes an event.
<br>
***Fires***:  onEventRemoved
<br>
***Parameter: id***: '*string*' - The ID of the event.
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventRemoved" event should be triggered (defaults to true).
<br>
***Returns***: '*boolean*' - States if the event was removed.

### **clearEvents( *[updateEvents]*, *[triggerEvent]* )**:
Clears all the events.
<br>
***Fires***:  onEventsCleared
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventsCleared" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **getEvents()**:
Returns an array of the events available.
<br>
***Returns***: '*Event[]*' - An array of events.

### **getEvent( *id* )**:
Returns an event that matches the ID passed.
<br>
***Parameter: id***: '*string*' - The ID of the event to get.
<br>
***Returns***: '*object*' - The event details (or null if the ID cannot be found).

### **removeExpiredEvents( *[updateEvents]*, *[triggerEvent]* )**:
Removes all events (non-repeating) that have expired.
<br>
***Fires***:  onEventRemoved
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onEventRemoved" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.


<br>
<h1>Add/Remove Event Types:</h1>

### **addEventType( *id*, *text* )**:
Adds a new event type.
<br>
***Parameter: id***: '*number*' - The ID for the event type.
<br>
***Parameter: text***: '*string*' - The text for the event type.
<br>
***Returns***: '*boolean*' - States if the event type was added.

### **removeEventType( *id* )**:
Removes an event type.
<br>
***Parameter: id***: '*number*' - The ID for the event type to remove.
<br>
***Returns***: '*boolean*' - States if the event type was removed.

### **setVisibleEventTypes( *ids*, *[triggerEvent]* )**:
Set which event types are visible.
<br>
***Fires***:  onVisibleEventTypesChanged
<br>
***Parameter: ids***: '*number[]*' - The IDs of the event types to make visible.
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onVisibleEventTypesChanged" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.


<br>
<h1>Add/Remove Groups:</h1>

### **getAllGroups()**:
Returns an array of group names being used.
<br>
***Returns***: '*string[]*' - An array of the group names.

### **clearAllGroups( *[updateEvents]*, *[triggerEvent]* )**:
Clears all the event groups.
<br>
***Fires***:  onGroupsCleared
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onGroupsCleared" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **removeGroup( *groupName*, *[updateEvents]*, *[triggerEvent]* )**:
Removes a group by name.
<br>
***Fires***:  onGroupRemoved
<br>
***Parameter: groupName***: '*string*' - The name of the group to remove.
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onGroupRemoved" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **setVisibleGroups( *groupNames*, *[triggerEvent]* )**:
Set which groups are visible.
<br>
***Fires***:  onVisibleGroupsChanged
<br>
***Parameter: groupNames***: '*string[]*' - The names of the groups to make visible.
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onVisibleGroupsChanged" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.


<br>
<h1>Internal Clipboard:</h1>

### **setClipboardEvent( *event* )**:
Set the clipboard event.
<br>
***Parameter: event***: '*Event*' - The event to set (refer to "Day Event" documentation for properties).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **setClipboardEvents( *events* )**:
Set the clipboard events.
<br>
***Parameter: events***: '*Event[]*' - The events to set (refer to "Day Event" documentation for properties).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **getClipboardEvents()**:
Returns the events copied in the clipboard.
<br>
***Returns***: '*Event[]*' - The copied events details.

### **clearClipboard()**:
Clears the internal clipboard.
<br>
***Returns***: '*Object*' - The Calendar.js class instance.


<br>
<h1>Get/Set Additional Data:</h1>

### **getVersion()**:
Returns the version of Calendar.js.
<br>
***Returns***: '*string*' - The version number.

### **getId()**:
Returns the ID of this Calendar.js instance.
<br>
***Returns***: '*string*' - The Calendar ID.

### **isBusy()**:
Returns a flag that states if the calendar is busy.
<br>
***Returns***: '*boolean*' - States if the calendar is busy.


<br>
<h1>Setting Options:</h1>

### **setOptions( *newOptions*, *[triggerEvent]* )**:
Sets the specific options that should be used.
<br>
***Fires***:  onOptionsUpdated
<br>
***Parameter: newOptions***: '*Options*' - All the options that should be set (refer to ["Options"](OPTIONS.md) documentation for properties).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onOptionsUpdated" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **setSearchOptions( *newSearchOptions*, *[triggerEvent]* )**:
Sets the specific search options that should be used.
<br>
***Fires***:  onSearchOptionsUpdated
<br>
***Parameter: newSearchOptions***: '*Search*' - All the search options that should be set (refer to ["Search Options"](SEARCH_OPTIONS.md) documentation for properties).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onSearchOptionsUpdated" event should be triggered (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **addHolidays( *holidays*, *[triggerEvent]*, *[updateEvents]* )**:
Adds new holidays.
<br>
***Fires***:  onOptionsUpdated
<br>
***Parameter: holidays***: '*Holiday[]*' - The holidays to add (refer to "Holiday" documentation for properties).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onOptionsUpdated" event should be triggered (defaults to true).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **removeHolidays( *holidayNames*, *[triggerEvent]*, *[updateEvents]* )**:
Removes holidays.
<br>
***Fires***:  onOptionsUpdated
<br>
***Parameter: holidayNames***: '*string[]*' - The names of the holidays to remove (case sensitive).
<br>
***Parameter: [triggerEvent]***: '*boolean*' - States if the "onOptionsUpdated" event should be triggered (defaults to true).
<br>
***Parameter: [updateEvents]***: '*boolean*' - States if the calendar display should be updated (defaults to true).
<br>
***Returns***: '*Object*' - The Calendar.js class instance.

### **getHolidays()**:
Returns the holidays.
<br>
***Returns***: '*Holiday[]*' - All the holidays.