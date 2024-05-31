/*! Calendar.js v2.10.19 - English | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ],
    "dayNames": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    "dayNamesAbbreviated": [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ],
    "monthNames": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    "monthNamesAbbreviated": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    "previousMonthTooltipText": "Previous Month",
    "nextMonthTooltipText": "Next Month",
    "previousDayTooltipText": "Previous Day",
    "nextDayTooltipText": "Next Day",
    "previousWeekTooltipText": "Previous Week",
    "nextWeekTooltipText": "Next Week",
    "addEventTooltipText": "Add Event",
    "closeTooltipText": "Close",
    "exportEventsTooltipText": "Export Events",
    "todayTooltipText": "Today",
    "refreshTooltipText": "Refresh",
    "searchTooltipText": "Search",
    "expandDayTooltipText": "Expand Day",
    "viewAllEventsTooltipText": "View All Events",
    "viewFullWeekTooltipText": "View Full Week",
    "fromText": "From:",
    "toText": "To:",
    "isAllDayText": "Is All-Day",
    "titleText": "Title:",
    "descriptionText": "Description:",
    "locationText": "Location:",
    "addText": "Add",
    "updateText": "Update",
    "cancelText": "Cancel",
    "removeEventText": "Remove",
    "addEventTitle": "Add Event",
    "editEventTitle": "Edit Event",
    "exportStartFilename": "exported_events_",
    "fromTimeErrorMessage": "Please select a valid 'From' time.",
    "toTimeErrorMessage": "Please select a valid 'To' time.",
    "toSmallerThanFromErrorMessage": "Please select a 'To' date that is larger than the 'From' date.",
    "titleErrorMessage": "Please enter a value in the 'Title' field (no empty space).",
    "stText": "st",
    "ndText": "nd",
    "rdText": "rd",
    "thText": "th",
    "yesText": "Yes",
    "noText": "No",
    "allDayText": "All-Day",
    "allEventsText": "All Events",
    "toTimeText": "to",
    "confirmEventRemoveTitle": "Confirm Event Removal",
    "confirmEventRemoveMessage": "Removing this event cannot be undone.  Do you want to continue?",
    "okText": "OK",
    "exportEventsTitle": "Export Events",
    "selectColorsText": "Select Colors",
    "backgroundColorText": "Background Color:",
    "textColorText": "Text Color:",
    "borderColorText": "Border Color:",
    "searchEventsTitle": "Search Events",
    "previousText": "Previous",
    "nextText": "Next",
    "matchCaseText": "Match Case",
    "repeatsText": "Repeats:",
    "repeatDaysToExcludeText": "Repeat Days To Exclude:",
    "daysToExcludeText": "Days To Exclude:",
    "seriesIgnoreDatesText": "Series Ignore Dates:",
    "repeatsNever": "Never",
    "repeatsEveryDayText": "Every Day",
    "repeatsEveryWeekText": "Every Week",
    "repeatsEvery2WeeksText": "Every 2 Weeks",
    "repeatsEveryMonthText": "Every Month",
    "repeatsEveryYearText": "Every Year",
    "repeatsCustomText": "Custom:",
    "repeatOptionsTitle": "Repeat Options",
    "moreText": "More",
    "includeText": "Include:",
    "minimizedTooltipText": "Minimize",
    "restoreTooltipText": "Restore",
    "removeAllEventsInSeriesText": "Remove All Events In Series",
    "createdText": "Created:",
    "organizerNameText": "Organizer:",
    "organizerEmailAddressText": "Organizer Email:",
    "enableFullScreenTooltipText": "Turn On Full-Screen Mode",
    "disableFullScreenTooltipText": "Turn Off Full-Screen Mode",
    "idText": "ID:",
    "expandMonthTooltipText": "Expand Month",
    "repeatEndsText": "Repeat Ends:",
    "noEventsAvailableText": "No events available.",
    "viewFullWeekText": "View Full Week",
    "noEventsAvailableFullText": "There are no events available to view.",
    "clickText": "Click",
    "hereText": "here",
    "toAddANewEventText": "to add a new event.",
    "weekText": "Week",
    "groupText": "Group:",
    "configurationTooltipText": "Configuration",
    "configurationTitleText": "Configuration",
    "groupsText": "Groups",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "The event '{0}' has started.",
    "optionsText": "Options:",
    "startsWithText": "Starts With",
    "endsWithText": "Ends With",
    "containsText": "Contains",
    "displayTabText": "Display",
    "enableAutoRefreshForEventsText": "Enable auto-refresh for events",
    "enableBrowserNotificationsText": "Enable browser notifications",
    "enableTooltipsText": "Enable tooltips",
    "dayText": "day",
    "daysText": "days",
    "hourText": "hour",
    "hoursText": "hours",
    "minuteText": "minute",
    "minutesText": "minutes",
    "enableDragAndDropForEventText": "Enable drag & drop for events",
    "organizerTabText": "Organizer",
    "removeEventsTooltipText": "Remove Events",
    "confirmEventsRemoveTitle": "Confirm Events Removal",
    "confirmEventsRemoveMessage": "Removing these non-repeating events cannot be undone.  Do you want to continue?",
    "eventText": "Event",
    "optionalText": "Optional",
    "urlText": "Url:",
    "openUrlText": "Open Url",
    "thisWeekTooltipText": "This Week",
    "dailyText": "Daily",
    "weeklyText": "Weekly",
    "monthlyText": "Monthly",
    "yearlyText": "Yearly",
    "repeatsByCustomSettingsText": "By Custom Settings",
    "lastUpdatedText": "Last Updated:",
    "advancedText": "Advanced",
    "copyText": "Copy",
    "pasteText": "Paste",
    "duplicateText": "Duplicate",
    "showAlertsText": "Show Alerts",
    "selectDatePlaceholderText": "Select date...",
    "hideDayText": "Hide Day",
    "notSearchText": "Not (opposite)",
    "showHolidaysInTheDisplaysText": "Show holidays in the main display and title bars",
    "newEventDefaultTitle": "* New Event",
    "urlErrorMessage": "Please enter a valid Url in the 'Url' field (or leave blank).",
    "searchTextBoxPlaceholder": "Search title, description, etc...",
    "currentMonthTooltipText": "Current Month",
    "cutText": "Cut",
    "showMenuTooltipText": "Show Menu",
    "eventTypesText": "Event Types",
    "lockedText": "Locked:",
    "typeText": "Type:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "Days",
    "visibleDaysText": "Visible Days",
    "previousYearTooltipText": "Previous Year",
    "nextYearTooltipText": "Next Year",
    "showOnlyWorkingDaysText": "Show Only Working Days",
    "exportFilenamePlaceholderText": "Name (optional)",
    "errorText": "Error",
    "exportText": "Export",
    "configurationUpdatedText": "Configuration updated.",
    "eventAddedText": "{0} event added.",
    "eventUpdatedText": "{0} event updated.",
    "eventRemovedText": "{0} event removed.",
    "eventsRemovedText": "{0} events removed.",
    "eventsExportedToText": "Events exported to {0}.",
    "eventsPastedText": "{0} events pasted.",
    "eventsExportedText": "Events exported.",
    "copyToClipboardOnlyText": "Copy to clipboard only",
    "workingDaysText": "Working Days",
    "weekendDaysText": "Weekend Days",
    "showAsBusyText": "Show As Busy",
    "selectAllText": "Select All",
    "selectNoneText": "Select None",
    "importEventsTooltipText": "Import Events",
    "eventsImportedText": "{0} events imported.",
    "viewFullYearTooltipText": "View Full Year",
    "currentYearTooltipText": "Current Year",
    "alertOffsetText": "Alert Offset (minutes):",
    "viewFullDayTooltipText": "View Full Day",
    "confirmEventUpdateTitle": "Confirm Event Update",
    "confirmEventUpdateMessage": "Would you like to update the event from this point forward, or the entire series?",
    "forwardText": "Forward",
    "seriesText": "Series",
    "viewTimelineTooltipText": "View Timeline",
    "nextPropertyTooltipText": "Next Property",
    "noneText": "(none)",
    "shareText": "Share",
    "shareStartFilename": "shared_events_",
    "previousPropertyTooltipText": "Previous Property",
    "jumpToDateTitle": "Jump To Date",
    "goText": "Go"
};