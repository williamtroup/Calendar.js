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
***Parameter: type***: '*string*' - The data type to export to (defaults to "csv", accepts "csv", "xml", "json", "txt" and "ical").

### **refresh()**:
Refreshes all of the views.