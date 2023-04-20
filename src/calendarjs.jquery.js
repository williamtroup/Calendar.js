/**
 * Calendar.js
 * 
 * A drag & drop event calendar (for Javascript), that is fully responsive and compatible with all modern browsers.
 * 
 * @file        calendarjs.jquery.js
 * @version     v1.8.7
 * @author      Bunoon
 * @license     GNU AGPLv3
 * @copyright   Bunoon 2023
 */

( function ( $ ) {
    /**
     * calendarJs().
     * 
     * Created new instances of the Calendar.js class for each element.
     * 
     * @public
     * 
     * @param       {Object}    [options]                                   All the configurable options that should be used (refer to "Options" documentation for properties).
     * 
     * @returns     {Object}                                                The Calendar.js instances created.
     */
    $.fn.calendarJs = function( options ) {
        var instances = [];
        
        this.each( function() {
            instances.push( new calendarJs( this, options ) );
        } );
        
        return instances;
    };
} ( jQuery ) );