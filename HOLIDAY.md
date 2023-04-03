# Calendar.js - Holiday:

Below is the format that is expected for an event object when set using "setOptions()".

| Type: | Name: | Description |
| --- | --- | --- |
| *number* | day | The day that the holiday occurs. |
| *number* | month | The month that the holiday occurs. |
| *string* | title | The title for the holiday (i.e. Christmas Day). |
| *Object* | onClick | Specifies an event that will be triggered when the holiday is clicked. |
| *string* | onClickUrl | Specifies a URL that will opened when the holiday is clicked (overrides "onClick"). |