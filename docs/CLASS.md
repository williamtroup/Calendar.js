# Calendar.js - Class:

Below shows how a Calendar.js class instance can be created.
<br>
<br>

### **calendarJs( *id*, *options*, *searchOptions* )**:
The main Calendar.js class.
<br>
***Parameter: elementOrId***: '*Object*' - The ID of the element (or the element itself) that should be used to display the calendar (or input to assign a DatePicker).
<br>
***Parameter: options***: '*Object*' - All the configurable options that should be used (refer to ["Options"](configuration/OPTIONS.md) documentation for properties).
<br>
***Parameter: searchOptions***: '*Object*' - All the configurable search options that should be used (refer to ["Search Options"](configuration/SEARCH_OPTIONS.md) documentation for properties).
<br>
***Returns***: '*Object*' - The Calendar.js instance.

<br>


## Example:

```markdown
<script> 
  var calendarInstance = new calendarJs( "calendar", {
    manualEditingEnabled: true
  } );
</script>
```