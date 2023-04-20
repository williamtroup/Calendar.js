/**
 * Calendar.js
 * 
 * A drag & drop event calendar (for Javascript), that is fully responsive and compatible with all modern browsers.
 * 
 * @file        calendarjs.binding.js
 * @version     v1.8.7
 * @author      Bunoon
 * @license     GNU AGPLv3
 * @copyright   Bunoon 2023
 */


/**
 * calendarJs()
 * 
 * A data binding trigger that will create calendarJs() instances and assign them to the configured elements.
 * 
 * @public
 */
( function ( documentObject ) {
    var _attribute_Name = "data-binding-calendar";

    documentObject.addEventListener( "DOMContentLoaded", function() {
        findElementsByAttributeAndCreateInstances( "div" );
        findElementsByAttributeAndCreateInstances( "input" );
    } );

    function findElementsByAttributeAndCreateInstances( tagType ) {
        var elements = getElementsByTagName( tagType ),
            elementsLength = elements.length;

        for ( var elementIndex = 0; elementIndex < elementsLength; elementIndex++ ) {
            var element = elements[ elementIndex ],
                elementAttributeData = element.getAttribute( _attribute_Name );

            if ( isDefined( elementAttributeData ) ) {
                var jsonOptions = getAttributeObject( elementAttributeData );
                if ( jsonOptions !== null ) {
                    var _ = new calendarJs( element, jsonOptions );
                }

                element.removeAttribute( _attribute_Name );
            }
        }
    }

    function getElementsByTagName( tagType ) {
        var result = [],
            elements = documentObject.getElementsByTagName( tagType ),
            elementsLength = elements.length;

        for ( var elementIndex = 0; elementIndex < elementsLength; elementIndex++ ) {
            result.push( elements[ elementIndex ] );
        }

        return result;
    }

    function isDefined( data ) {
        return data !== undefined && data !== null && data !== "";
    }

    function getAttributeObject( attributeData ) {
        var result;

        try {
            result = JSON.parse( attributeData );
        } catch ( e1 ) {

            try {
                result = eval( "(" + attributeData + ")" );
            } catch ( e2 ) {
                console.error( "Errors in attribute: " + e1.message + ", " + e2.message );
                result = null;
            }
        }

        return result;
    }

} ) ( document );