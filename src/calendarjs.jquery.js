/**
 * Calendar.js
 * 
 * A drag & drop event calendar (for Javascript), that is fully responsive and compatible with all modern browsers.
 * 
 * @file        calendarjs.jquery.js
 * @version     v1.7.1
 * @author      Bunoon
 * @license     GNU AGPLv3
 * @copyright   Bunoon 2023
 */

(function ( $ ) {
    $.fn.calendarJs = function( options, loadOptions ) {
        var setOptions = function() {
            if ( loadOptions !== null && typeof loadOptions === "object" ) {
                if ( loadOptions.loadedEvent === undefined ) {
                    loadOptions.loadedEvent = null;
                }
            }
        };

        setOptions();

        var element = $( this )[ 0 ],
            calendarInstance = new calendarJs( element, options );

        if ( loadOptions.loadedEvent !== null ) {
            loadOptions.loadedEvent();
        }

        return calendarInstance;
    };
} ( jQuery ) );