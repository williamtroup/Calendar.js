# Calendar.js - Event:

Below is the format that is expected for an event object when calling "addEvents()", "addEvent()", and "updateEvent()".

| Type: | Name: | Description: |
| --- | --- | --- |
| *string* | id | The ID for the event (set automatically if not available). |
| *string* | title | The title of the event. |
| *Object* | from | The date that the event occurs from. |
| *Object* | to | The date that the event runs until. |
| *string* | description | The in-depth description of the event. |
| *string* | location | The location of the event. |
| *string* | color | The color that should be used for the event (overrides all others). |
| *string* | colorText | The color that should be used for the event text (overrides all others). |
| *string* | colorBorder | The color that should be used for the event border (overrides all others). |
| *boolean* | isAllDay | States if this event is for all-day. |
| *number* | repeatEvery | States how often the event should repeat (0 = Never, 1 = Every Day, 2 = Every Week, 3 = Every Month, 4 = Every Year). |
| *Object[]* | repeatEveryExcludeDays | States the days that should be excluded when an event is repeated. |
| *Object[]* | seriesIgnoreDates | States the dates (string format) that should be ignored when an event is repeated. |
| *Object* | created | The date that the event was created. |
| *string* | organizerName | The name of the organizer. |
| *string* | organizerEmailAddress | The email address of the organizer. |
| *Object* | repeatEnds | The date when a repeating series should end. |
| *string* | group | The name of the group the event belongs to. |