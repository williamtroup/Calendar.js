# Calendar.js - Holiday:

Below is the format that is expected for a holiday object when set using "setOptions()", or "addHolidays()".

| Type: | Name: | Description |
| --- | --- | --- |
| *number* | day | The day that the holiday occurs. |
| *number* | month | The month that the holiday occurs. |
| *number* | year | The year that the holiday occurs (if the holiday only occurs once. Defaults to null). |
| *string* | title | The title for the holiday (i.e. Christmas Day). |
| *Object* | onClick | Specifies an event that will be triggered when the holiday is clicked. |
| *string* | onClickUrl | Specifies a URL that will be opened when the holiday is clicked (overrides "onClick"). |
| *string* | backgroundColor | The background color the day should use (defaults to null). |
| *string* | textColor | The text color the day should use (defaults to null). |