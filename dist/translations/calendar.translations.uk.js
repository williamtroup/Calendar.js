/*! Calendar.js v2.11.1 - Ukrainian | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "Пн",
        "Вт",
        "ср",
        "чт",
        "пт",
        "сб",
        "сонце"
    ],
    "dayNames": [
        "понеділок",
        "вівторок",
        "Середа",
        "четвер",
        "П'ятниця",
        "Субота",
        "неділя"
    ],
    "dayNamesAbbreviated": [
        "Пн",
        "Вт",
        "ср",
        "чт",
        "пт",
        "сб",
        "сонце"
    ],
    "monthNames": [
        "січня",
        "Лютий",
        "березень",
        "квітень",
        "Може",
        "червень",
        "липень",
        "серпень",
        "Вересень",
        "жовтень",
        "Листопад",
        "Грудень"
    ],
    "monthNamesAbbreviated": [
        "січня",
        "лютий",
        "березень",
        "квіт",
        "Може",
        "черв",
        "лип",
        "серп",
        "вер",
        "жовт",
        "Листопад",
        "груд"
    ],
    "previousMonthTooltipText": "Попередній місяць",
    "nextMonthTooltipText": "Наступного місяця",
    "previousDayTooltipText": "Попередній день",
    "nextDayTooltipText": "Наступний день",
    "previousWeekTooltipText": "Попередній тиждень",
    "nextWeekTooltipText": "Наступного тижня",
    "addEventTooltipText": "Додати подію",
    "closeTooltipText": "Закрити",
    "exportEventsTooltipText": "Експорт подій",
    "todayTooltipText": "Сьогодні",
    "refreshTooltipText": "Оновити",
    "searchTooltipText": "Пошук",
    "expandDayTooltipText": "Розгорнути день",
    "viewAllEventsTooltipText": "Переглянути всі події",
    "viewFullWeekTooltipText": "Переглянути весь тиждень",
    "fromText": "Від:",
    "toText": "до:",
    "isAllDayText": "Цілий день",
    "titleText": "Назва:",
    "descriptionText": "опис:",
    "locationText": "Місцезнаходження:",
    "addText": "додати",
    "updateText": "оновлення",
    "cancelText": "Скасувати",
    "removeEventText": "видалити",
    "addEventTitle": "Додати подію",
    "editEventTitle": "Редагувати подію",
    "exportStartFilename": "exported_events_",
    "fromTimeErrorMessage": "Будь ласка, виберіть дійсний час \"Від\".",
    "toTimeErrorMessage": "Виберіть дійсний час «До».",
    "toSmallerThanFromErrorMessage": "Будь ласка, виберіть дату «До», більшу за дату «Від».",
    "titleErrorMessage": "Будь ласка, введіть значення в поле «Назва» (без пустого місця).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Так",
    "noText": "Немає",
    "allDayText": "Весь день",
    "allEventsText": "Всі події",
    "toTimeText": "до",
    "confirmEventRemoveTitle": "Підтвердити видалення події",
    "confirmEventRemoveMessage": "Видалення цієї події не можна скасувати. ",
    "okText": "в порядку",
    "exportEventsTitle": "Експорт подій",
    "selectColorsText": "Виберіть Кольори",
    "backgroundColorText": "Колір фону:",
    "textColorText": "Колір тексту:",
    "borderColorText": "Колір рамки:",
    "searchEventsTitle": "Пошук подій",
    "previousText": "Попередній",
    "nextText": "Далі",
    "matchCaseText": "Match Case",
    "repeatsText": "Повторюється:",
    "repeatDaysToExcludeText": "Дні повторення для виключення:",
    "daysToExcludeText": "Дні для виключення:",
    "seriesIgnoreDatesText": "Дати ігнорування серії:",
    "repeatsNever": "Ніколи",
    "repeatsEveryDayText": "Кожен день",
    "repeatsEveryWeekText": "Кожного тижня",
    "repeatsEvery2WeeksText": "Кожні 2 тижні",
    "repeatsEveryMonthText": "Щомісяця",
    "repeatsEveryYearText": "Щороку",
    "repeatsCustomText": "Спеціальний:",
    "repeatOptionsTitle": "Параметри повтору",
    "moreText": "більше",
    "includeText": "Включати:",
    "minimizedTooltipText": "Згорнути",
    "restoreTooltipText": "Відновлення",
    "removeAllEventsInSeriesText": "Видалити всі події серії",
    "createdText": "Створено:",
    "organizerNameText": "Організатор:",
    "organizerEmailAddressText": "Електронна адреса організатора:",
    "enableFullScreenTooltipText": "Увімкніть повноекранний режим",
    "disableFullScreenTooltipText": "Вимкніть повноекранний режим",
    "idText": "ID:",
    "expandMonthTooltipText": "Розгорнути місяць",
    "repeatEndsText": "Повторення закінчується:",
    "noEventsAvailableText": "Подій немає.",
    "viewFullWeekText": "Переглянути весь тиждень",
    "noEventsAvailableFullText": "Немає доступних подій для перегляду.",
    "clickText": "Натисніть",
    "hereText": "тут",
    "toAddANewEventText": "щоб додати нову подію.",
    "weekText": "тиждень",
    "groupText": "Група:",
    "configurationTooltipText": "Конфігурація",
    "configurationTitleText": "Конфігурація",
    "groupsText": "Групи",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "Подія \"{0}\" почалася.",
    "optionsText": "Опції:",
    "startsWithText": "Починається з",
    "endsWithText": "Закінчується на",
    "containsText": "Містить",
    "displayTabText": "Дисплей",
    "enableAutoRefreshForEventsText": "Увімкніть автоматичне оновлення подій",
    "enableBrowserNotificationsText": "Увімкнути сповіщення браузера",
    "enableTooltipsText": "Увімкнути підказки",
    "dayText": "день",
    "daysText": "днів",
    "hourText": "година",
    "hoursText": "години",
    "minuteText": "хвилина",
    "minutesText": "хвилин",
    "enableDragAndDropForEventText": "Увімкнути перетягування",
    "organizerTabText": "Організатор",
    "removeEventsTooltipText": "Видалити події",
    "confirmEventsRemoveTitle": "Підтвердити видалення Events",
    "confirmEventsRemoveMessage": "Видалення цих подій, що не повторюються, неможливо скасувати. ",
    "eventText": "Подія",
    "optionalText": "Додатково",
    "urlText": "Url:",
    "openUrlText": "Відкрити URL-адресу",
    "thisWeekTooltipText": "Цього тижня",
    "dailyText": "Щодня",
    "weeklyText": "Щотижня",
    "monthlyText": "Щомісяця",
    "yearlyText": "щорічно",
    "repeatsByCustomSettingsText": "За індивідуальними налаштуваннями",
    "lastUpdatedText": "Останнє оновлення:",
    "advancedText": "Просунутий",
    "copyText": "Копія",
    "pasteText": "Вставити",
    "duplicateText": "дублікат",
    "showAlertsText": "Показати сповіщення",
    "selectDatePlaceholderText": "Виберіть дату...",
    "hideDayText": "День приховування",
    "notSearchText": "Ні (навпроти)",
    "showHolidaysInTheDisplaysText": "Показувати свята на головному екрані та в рядку заголовка",
    "newEventDefaultTitle": "* Нова подія",
    "urlErrorMessage": "Введіть дійсну URL-адресу в поле \"URL-адреса\" (або залиште поле пустим).",
    "searchTextBoxPlaceholder": "Назва пошуку, опис тощо...",
    "currentMonthTooltipText": "Поточний місяць",
    "cutText": "Вирізати",
    "showMenuTooltipText": "Показати меню",
    "eventTypesText": "Типи подій",
    "lockedText": "Заблоковано:",
    "typeText": "тип:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "днів",
    "visibleDaysText": "Видимі дні",
    "previousYearTooltipText": "Попередній рік",
    "nextYearTooltipText": "Наступного року",
    "showOnlyWorkingDaysText": "Показати лише робочі дні",
    "exportFilenamePlaceholderText": "Ім'я (необов'язково)",
    "errorText": "Помилка",
    "exportText": "Експорт",
    "configurationUpdatedText": "Конфігурацію оновлено.",
    "eventAddedText": "Додано {0} подію.",
    "eventUpdatedText": "{0} подія оновлена.",
    "eventRemovedText": "{0} подія видалена.",
    "eventsRemovedText": "Видалено подій: {0}.",
    "eventsExportedToText": "Події експортовано в {0}.",
    "eventsPastedText": "Вставлено подій: {0}.",
    "eventsExportedText": "Події експортовано.",
    "copyToClipboardOnlyText": "Копіювати лише в буфер обміну",
    "workingDaysText": "Робочі дні",
    "weekendDaysText": "Вихідні дні",
    "showAsBusyText": "Показати як зайнятий",
    "selectAllText": "Вибрати все",
    "selectNoneText": "Виберіть Немає",
    "importEventsTooltipText": "Імпорт подій",
    "eventsImportedText": "Імпортовано {0} подій.",
    "viewFullYearTooltipText": "Переглянути весь рік",
    "currentYearTooltipText": "Поточний рік",
    "alertOffsetText": "Зсув попередження (хвилини):",
    "viewFullDayTooltipText": "Переглянути весь день",
    "confirmEventUpdateTitle": "Підтвердити оновлення події",
    "confirmEventUpdateMessage": "Хочете оновити подію з цього моменту чи всю серію?",
    "forwardText": "вперед",
    "seriesText": "Серія",
    "viewTimelineTooltipText": "Переглянути хронологію",
    "nextPropertyTooltipText": "Наступна властивість",
    "noneText": "(жоден)",
    "shareText": "Поділіться",
    "shareStartFilename": "shared_events_",
    "previousPropertyTooltipText": "Попередня власність",
    "jumpToDateTitle": "Перейти до дати",
    "goText": "Іди"
};