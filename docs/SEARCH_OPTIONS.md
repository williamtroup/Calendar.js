# Calendar.js - Options:

Below are all the options that can be passed to the Calendar.js function "setSearchOptions()".  These options can also be passed directly via the "Options" ([see](OPTIONS.md)).


### Search Options:
<br/>

| Type: | Name: | Description: |
| --- | --- | --- |
| *string* | lastSearchText | States the last search text that was used (defaults to ""). |
| *boolean* | not | States if the search should be a not search (defaults to false). |
| *boolean* | matchCase | States character case searching is strict (defaults to false). |
| *boolean* | showAdvanced | States if the advanced options should be shown (defaults to false). |
| *boolean* | searchTitle | States if the "title" property for the event should be searched (false to true). |
| *boolean* | searchLocation | States if the "location" property for the event should be searched (false to false). |
| *boolean* | searchDescription | States if the "description" property for the event should be searched (false to false). |
| *boolean* | searchGroup | States if the "group" property for the event should be searched (false to false). |
| *boolean* | searchUrl | States if the "url" property for the event should be searched (false to false). |
| *boolean* | startsWith | States if the search should run a "starts with" check (defaults to false). |
| *boolean* | endsWith | States if the search should run a "ends with" check (defaults to false). |
| *boolean* | contains | States if the search should run a "contains with" check (defaults to true). |
| *number* | left | States the left position of the dialog (defaults to null). |
| *number* | top | States the top position of the dialog (defaults to null). |
| *string[]* | history | States the dropdown search history that should be display (used previously, defaults to []). |