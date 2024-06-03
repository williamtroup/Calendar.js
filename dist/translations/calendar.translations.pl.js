/*! Calendar.js v2.11.1 - Portuguese | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
  "dayHeaderNames": [
    "Pn",
    "Tt",
    "Śr",
    "Czw",
    "Pt",
    "Sob",
    "Ndz"
  ],
  "dayNames": [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela"
  ],
  "dayNamesAbbreviated": [
    "Pn",
    "Tt",
    "Śr",
    "Czw",
    "Pt",
    "Sob",
    "Ndz"
  ],
  "monthNames": [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ],
  "monthNamesAbbreviated": [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru"
  ],
  "previousMonthTooltipText": "Poprzedni miesiac",
  "nextMonthTooltipText": "W następnym miesiącu",
  "previousDayTooltipText": "Poprzedni dzień",
  "nextDayTooltipText": "Następny dzień",
  "previousWeekTooltipText": "Poprzedni tydzień",
  "nextWeekTooltipText": "W następnym tygodniu",
  "addEventTooltipText": "Dodaj wydarzenie",
  "closeTooltipText": "Zamknąć",
  "exportEventsTooltipText": "Eksportuj wydarzenia",
  "todayTooltipText": "Dzisiaj",
  "refreshTooltipText": "Odświeżać",
  "searchTooltipText": "Szukaj",
  "expandDayTooltipText": "Rozwiń Dzień",
  "viewAllEventsTooltipText": "Zobacz wszystkie wydarzenia",
  "viewFullWeekTooltipText": "Zobacz cały tydzień",
  "fromText": "Z:",
  "toText": "Do:",
  "isAllDayText": "Jest całodniowy",
  "titleText": "Tytuł:",
  "descriptionText": "Opis:",
  "locationText": "Lokalizacja:",
  "addText": "Dodać",
  "updateText": "Aktualizacja",
  "cancelText": "Anulować",
  "removeEventText": "Usunąć",
  "addEventTitle": "Dodaj wydarzenie",
  "editEventTitle": "Edytuj wydarzenie",
  "exportStartFilename": "eksportowane_wydarzenia_",
  "fromTimeErrorMessage": "Wybierz prawidłowy czas „Od”.",
  "toTimeErrorMessage": "Proszę wybrać prawidłowy czas „Do”.",
  "toSmallerThanFromErrorMessage": "Wybierz datę „Do” dłuższą niż data „Od”.",
  "titleErrorMessage": "Proszę wpisać wartość w polu „Tytuł” ​​(bez pustych miejsc).",
  "stText": "",
  "ndText": "",
  "rdText": "",
  "thText": "",
  "yesText": "Tak",
  "noText": "NIE",
  "allDayText": "Cały dzień",
  "allEventsText": "Wszystkie zdarzenia",
  "toTimeText": "Do",
  "confirmEventRemoveTitle": "Potwierdź usunięcie wydarzenia",
  "confirmEventRemoveMessage": "Usunięcia tego wydarzenia nie można cofnąć. ",
  "okText": "OK",
  "exportEventsTitle": "Eksportuj wydarzenia",
  "selectColorsText": "Wybierz opcję Kolory",
  "backgroundColorText": "Kolor tła:",
  "textColorText": "Kolor tekstu:",
  "borderColorText": "Kolor ramki:",
  "searchEventsTitle": "Wyszukaj wydarzenia",
  "previousText": "Poprzedni",
  "nextText": "Następny",
  "matchCaseText": "Sprawa meczu",
  "repeatsText": "Powtarza:",
  "repeatDaysToExcludeText": "Powtórz dni, aby wykluczyć:",
  "daysToExcludeText": "Dni do wykluczenia:",
  "seriesIgnoreDatesText": "Seria Ignoruj ​​daty:",
  "repeatsNever": "Nigdy",
  "repeatsEveryDayText": "Codziennie",
  "repeatsEveryWeekText": "Co tydzień",
  "repeatsEvery2WeeksText": "Co 2 tygodnie",
  "repeatsEveryMonthText": "Każdego miesiąca",
  "repeatsEveryYearText": "Każdego roku",
  "repeatsCustomText": "Zwyczaj:",
  "repeatOptionsTitle": "Powtórz opcje",
  "moreText": "Więcej",
  "includeText": "Włączać:",
  "minimizedTooltipText": "Zminimalizować",
  "restoreTooltipText": "Przywrócić",
  "removeAllEventsInSeriesText": "Usuń wszystkie wydarzenia z serii",
  "createdText": "Utworzony:",
  "organizerNameText": "Organizator:",
  "organizerEmailAddressText": "Adres e-mail organizatora:",
  "enableFullScreenTooltipText": "Włącz tryb pełnoekranowy",
  "disableFullScreenTooltipText": "Wyłącz tryb pełnoekranowy",
  "idText": "ID:",
  "expandMonthTooltipText": "Rozwiń Miesiąc",
  "repeatEndsText": "Powtarzanie kończy się:",
  "noEventsAvailableText": "Brak dostępnych wydarzeń.",
  "viewFullWeekText": "Zobacz cały tydzień",
  "noEventsAvailableFullText": "Brak wydarzeń do wyświetlenia.",
  "clickText": "Kliknij",
  "hereText": "Tutaj",
  "toAddANewEventText": "aby dodać nowe wydarzenie.",
  "weekText": "Tydzień",
  "groupText": "Grupa:",
  "configurationTooltipText": "Konfiguracja",
  "configurationTitleText": "Konfiguracja",
  "groupsText": "Grupy",
  "eventNotificationTitle": "Calendar.js",
  "eventNotificationBody": "Rozpoczęło się wydarzenie „{0}”.",
  "optionsText": "Opcje:",
  "startsWithText": "Zaczynać z",
  "endsWithText": "Kończy się na",
  "containsText": "Zawiera",
  "displayTabText": "Wyświetlacz",
  "enableAutoRefreshForEventsText": "Włącz automatyczne odświeżanie wydarzeń",
  "enableBrowserNotificationsText": "Włącz powiadomienia przeglądarki",
  "enableTooltipsText": "Włącz podpowiedzi",
  "dayText": "dzień",
  "daysText": "dni",
  "hourText": "godzina",
  "hoursText": "godziny",
  "minuteText": "minuta",
  "minutesText": "minuty",
  "enableDragAndDropForEventText": "Włącz przeciąganie",
  "organizerTabText": "Organizator",
  "removeEventsTooltipText": "Usuń wydarzenia",
  "confirmEventsRemoveTitle": "Potwierdź usunięcie wydarzeń",
  "confirmEventsRemoveMessage": "Usunięcia tych niepowtarzalnych zdarzeń nie można cofnąć. ",
  "eventText": "Wydarzenie",
  "optionalText": "Opcjonalny",
  "urlText": "Adres URL:",
  "openUrlText": "Otwórz URL",
  "thisWeekTooltipText": "W tym tygodniu",
  "dailyText": "Codziennie",
  "weeklyText": "Co tydzień",
  "monthlyText": "Miesięczny",
  "yearlyText": "Rocznie",
  "repeatsByCustomSettingsText": "Według ustawień niestandardowych",
  "lastUpdatedText": "Ostatnio zaktualizowany:",
  "advancedText": "Zaawansowany",
  "copyText": "Kopiuj",
  "pasteText": "Pasta",
  "duplicateText": "Duplikować",
  "showAlertsText": "Pokaż alerty",
  "selectDatePlaceholderText": "Wybierz datę...",
  "hideDayText": "Ukryj dzień",
  "notSearchText": "Nie (naprzeciwko)",
  "showHolidaysInTheDisplaysText": "Pokaż święta na ekranie głównym i paskach tytułowych",
  "newEventDefaultTitle": "* Nowe wydarzenie",
  "urlErrorMessage": "Wprowadź prawidłowy adres URL w polu „Url” (lub pozostaw puste).",
  "searchTextBoxPlaceholder": "Wyszukaj tytuł, opis itp.",
  "currentMonthTooltipText": "Obecny miesiąc",
  "cutText": "Cięcie",
  "showMenuTooltipText": "Pokaż menu",
  "eventTypesText": "Typy zdarzeń",
  "lockedText": "Zablokowany:",
  "typeText": "Typ:",
  "sideMenuHeaderText": "Calendar.js",
  "sideMenuDaysText": "Dni",
  "visibleDaysText": "Widoczne dni",
  "previousYearTooltipText": "Poprzedni rok",
  "nextYearTooltipText": "Następny rok",
  "showOnlyWorkingDaysText": "Pokaż tylko dni robocze",
  "exportFilenamePlaceholderText": "Imię: (opcjonalnie)",
  "errorText": "Błąd",
  "exportText": "Eksport",
  "configurationUpdatedText": "Konfiguracja zaktualizowana.",
  "eventAddedText": "Dodano {0} wydarzenie.",
  "eventUpdatedText": "Zaktualizowano wydarzenie {0}.",
  "eventRemovedText": "Usunięto {0} wydarzenie.",
  "eventsRemovedText": "Usunięto {0} wydarzeń.",
  "eventsExportedToText": "Zdarzenia wyeksportowane do {0}.",
  "eventsPastedText": "Wklejono {0} wydarzeń.",
  "eventsExportedText": "Wydarzenia wyeksportowane.",
  "copyToClipboardOnlyText": "Skopiuj tylko do schowka",
  "workingDaysText": "Dni robocze",
  "weekendDaysText": "Dni weekendowe",
  "showAsBusyText": "Pokaż jako zajęty",
  "selectAllText": "Zaznacz wszystko",
  "selectNoneText": "Wybierz opcję Brak",
  "importEventsTooltipText": "Importuj wydarzenia",
  "eventsImportedText": "Zaimportowano {0} wydarzeń.",
  "viewFullYearTooltipText": "Zobacz cały rok",
  "currentYearTooltipText": "Rok bieżący",
  "alertOffsetText": "Przesunięcie alertu (w minutach):",
  "viewFullDayTooltipText": "Zobacz Cały dzień",
  "confirmEventUpdateTitle": "Potwierdź aktualizację wydarzenia",
  "confirmEventUpdateMessage": "Czy chcesz aktualizować wydarzenie od tego momentu, czy od całej serii?",
  "forwardText": "Do przodu",
  "seriesText": "Seria",
  "viewTimelineTooltipText": "Pokaż oś czasu",
  "nextPropertyTooltipText": "Następna nieruchomość",
  "noneText": "(nic)",
  "shareText": "Udział",
  "shareStartFilename": "wspólne_wydarzenia_",
  "previousPropertyTooltipText": "Poprzednia nieruchomość",
  "jumpToDateTitle": "Przejdź do daty",
  "goText": "Iść"
};