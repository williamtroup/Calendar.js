# Calendar.js v2.11.0

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Calendar.js%2C%20a%20free%20JavaScript%20library&url=https://github.com/williamtroup/Calendar.js&hashtags=calendar,javascript,responsive,events)
[![npm](https://img.shields.io/badge/npmjs-v2.11.0-blue)](https://www.npmjs.com/package/jcalendar.js)
[![nuget](https://img.shields.io/badge/nuget-v2.11.0-purple)](https://www.nuget.org/packages/jCalendar.js/)
[![license](https://img.shields.io/badge/license-MIT-green)](https://github.com/williamtroup/Calendar.js/blob/main/LICENSE.txt)
[![discussions Welcome](https://img.shields.io/badge/discussions-Welcome-red)](https://github.com/williamtroup/Calendar.js/discussions)
[![coded by William Troup](https://img.shields.io/badge/coded_by-William_Troup-white)](https://www.william-troup.com/)

> 📅 One of the world's easiest, most powerful, and fully responsive JavaScript Calendars!

## What features does Calendar.js have?

- Zero-dependencies!
- Exportable for use in other frameworks!
- 51 language translations available!
- Adding, updating, and removing events, with full custom colors support.
- Full API available via public functions.
- Drag and Drop for events, even across multiple Calendars!
- Drag and Drop for moving events to new times, and resizing to adjust event durations (in Full Day/Week views).
- Cut, Copy, Paste (with multi-select support), and Duplication of events.
- Configurable text for translations (see "dist/translations" for languages already available).
- Day, Week, Month, Year, All Events, and Timeline views.
- Fully styled in CSS/SASS (including the buttons) and compatible with the Bootstrap library.
- Full CSS theme support (using :root variables, with dark-mode support).
- Custom triggers for actions (adding/updating/removing events, skipping months, etc.).
- Export events to CSV, XML, JSON, TEXT, iCAL, MD, HTML, and TSV, with system clipboard setting support.
- Import events from iCAL and JSON files.
- Full-screen mode (double-clicking the title bar).
- Search support (with search history).
- Repeat every Day, Week, Month, Year, or a custom period (with exclusion days support), with editing forward, and series support.
- Customizable holidays.
- Shortcut keys (click [here](https://calendar-js.com/documentation/shortcut-keys.html) to see the full list).
- Custom event groups (with configurable toggles via the side menu).
- Browser notifications for events, with offset support (modern browsers only).
- Drop file support (allowing a file containing JSON, or an array of events, to be added).
- DatePicker mode (just assign to the ID of a text input).
- HTML text support (off by default).
- jQuery plugin for quickly creating Calendars.
- Data-Binding support to quickly create new Calendars without writing Javascript!
- Popup notifications for actions (adding/updating/deleting events, updating configuration, etc.).
- Start of week support (Monday, Saturday, or Sunday).
- Local storage support for events!
- Widget mode (small widget that shows the current/specific day).


## Where can I find the documentation?

All the documentation can be found [here](https://calendar-js.com/documentation/index.html).


## What browsers are supported?

All modern browsers (such as Google Chrome, FireFox, and Opera) are fully supported.


## What languages are supported?

- `af` Afrikaans
- `ar` Arabic
- `hy` Armenian
- `be` Belarusian
- `bn` Bengali
- `bg` Bulgarian
- `ca` Catalan
- `zh` Chinese (simplified)
- `da` Danish
- `nl` Dutch
- `en` English (default)
- `eo` Esperanto
- `et` Estonian
- `fa` Farsi
- `fi` Finnish
- `fr` French
- `fy` Frisian
- `gl` Galician
- `ka` Georgian
- `de` German
- `el` Greek
- `he` Hebrew
- `hi` Hindi
- `hu` Hungarian
- `is` Icelandic
- `id` Indonesian
- `ga` Irish
- `it` Italian
- `ja` Japanese
- `ko` Korean
- `lv` Latvian
- `lt` Lithuanian
- `lb` Luxembourgish
- `ms` Malay
- `ne` Nepali
- `no` Norwegian
- `pl` Polish
- `pt` Portuguese
- `ro` Romanian
- `si` Sinhalese
- `sk` Slovak
- `sl` Slovenian
- `es` Spanish
- `sv` Swedish
- `tl` Tagalog
- `ta` Tamil
- `zh-tw` Taiwanese
- `te` Telugu
- `th` Thai
- `tr` Turkish
- `uk` Ukrainian


## What are the most recent changes?

To see a list of all the most recent changes, click [here](https://calendar-js.com/documentation/recent-changes.html).


## How do I install Calendar.js?

You can install the library with npm into your local modules directory using the following command:

```markdown
npm install jcalendar.js
```

Or, you can download the latest zipped up version [here](https://calendar-js.com/download.html).


## How do I get started?

To get started using Calendar.js, do the following steps:


### 1. Prerequisites:

Make sure you include the "DOCTYPE html" tag at the top of your email, as follows:

```markdown
<!DOCTYPE html>
```


### 2. Include Files:

```markdown
<link rel="stylesheet" href="dist/calendar.js.css">
<script src="dist/calendar.js"></script>
```


### 3. Create DOM Container:

```markdown
<div id="calendar"></div>
```


### 4. Initialize Calendar.Js:

```markdown
<script> 
  var calendarInstance1 = new calendarJs( "calendar", {
    manualEditingEnabled: true
    // All your options can be set here
  } );

  // OR
  var calendarElement = document.getElementById( "calendar" );
  var calendarInstance2 = new calendarJs( calendarElement, {
    manualEditingEnabled: true
    // All your options can be set here
  } ); 
</script>
```

You can also create new Calendars using the jQuery Plugin, or by using Data Bindings.  See the test HTML files for examples.


### 5. Finishing Up:

That's it! Nice and simple. Please refer to the code if you need more help (fully documented).


## How do I go about customizing Calendar.js and add events?

To customize, and get more out of Calendar.js, please read through the following documentation.


### 1. Options:

Options (which can be set when initializing, or afterwards) allow you to customize how Calendar.js will look and function.  The options are also used to set the custom triggers you want to fire when specific actions occur.  You can set them manually as follows:

```markdown
<script> 
  calendarInstance.setOptions( {
      manualEditingEnabled: false,
      views: {
          fullMonth: {
              maximumEventsPerDayDisplay: 0
          }
      },
      visibleDays: [ 0, 1, 2, 3, 4 ]
  } );
</script>
```

To see a list of all the available options you can use, click [here](https://calendar-js.com/documentation/options.html).

To see a list of all the available custom triggers you can use, click [here](https://calendar-js.com/documentation/custom-triggers.html).


### 2. Event Object Format:

An event is defined as a JavaScript object, as follows:

```markdown
<script> 
  var event = {
      from: new Date(),
      to: new Date(),
      title: "A New Event",
      description: "A description of the event"
  };
</script>
```

You can add a new event by using one of the add public functions, as follows:

```markdown
<script> 
  calendarInstance.addEvent( event );
</script>
```

To see a list of all the available event properties and how they should be formatted, click [here](https://calendar-js.com/documentation/event.html).


### 3. Holiday Object Format:

A holiday is a piece of text that is shown under the day number in the month it is assigned to.  You can set these holidays in the options, or add them manually as follows:

```markdown
<script> 
  var holiday = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      title: "A New Holiday",
  };
  
  // This is a public function that you can call
  calendarInstance.addHolidays( [ holiday ] );
</script>
```

To see a list of all the available holiday properties and how they should be formatted, click [here](https://calendar-js.com/documentation/holiday.html).


### 4. Public Functions:

To see a list of all the public functions available, click [here](https://calendar-js.com/documentation/public-functions.html).


### 5. Search Options:

Search Options allow you to customize how Calendar.js Search dialog will function. You can set them manually as follows:

```markdown
<script> 
  calendarInstance.setSearchOptions( {
      matchCase: false
  } );
</script>
```

To see a list of all the available search options you can use, click [here](https://calendar-js.com/documentation/search-options.html).