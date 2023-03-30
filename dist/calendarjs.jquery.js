/**
 * Calendar.js
 * 
 * A drag & drop event calendar (for Javascript), that is fully responsive and compatible with all modern browsers.
 * 
 * @file        calendarjs.jquery.js
 * @version     v1.7.2
 * @author      Bunoon
 * @license     GNU AGPLv3
 * @copyright   Bunoon 2023
 */

(function ( $ ) {
    $.fn.calendarJs = function( options, loadOptions ) {
        var instances = [];

        var setOptions = function() {
            if ( loadOptions !== null && typeof loadOptions === "object" ) {
                if ( loadOptions.loadedEvent === undefined ) {
                    loadOptions.loadedEvent = null;
                }
            }
        };

        var createInstance = function( element ) {
            var instance = new calendarJs( element, options );

            if ( loadOptions.loadedEvent !== null ) {
                loadOptions.loadedEvent();
            }

            instances.push( instance );
        };

        setOptions();

        this.each(function() {
            createInstance( this );
        });
        
        return instances;
    };
} ( jQuery ) );