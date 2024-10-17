/**
 * Calendar.js
 * 
 * A javascript drag & drop event calendar, that is fully responsive and compatible with all modern browsers.
 * 
 * @file        calendar.binding.js
 * @version     v2.12.1
 * @author      Bunoon
 * @license     MIT License
 * @copyright   Bunoon 2024
 */


( function() {
    "use strict";

    var // Variables: Constructor Parameters
        _parameter_Document = null,
        _parameter_JSON = null,

        // Variables: Public Scope
        _public = {},

        // Variables: Configuration
        _configuration = {},

        // Variables: Instances
        _instances = {},

        // Variables: Strings
        _string = {
            empty: "",
            space: " "
        },

        // Variables: Attribute Names
        _attribute_Name_Options = "data-binding-calendar";

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Rendering
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function render() {
        var tagTypes = _configuration.domElementTypes,
            tagTypesLength = tagTypes.length;

        for ( var tagTypeIndex = 0; tagTypeIndex < tagTypesLength; tagTypeIndex++ ) {
            var domElements = _parameter_Document.getElementsByTagName( tagTypes[ tagTypeIndex ] ),
                elements = [].slice.call( domElements ),
                elementsLength = elements.length;

            for ( var elementIndex = 0; elementIndex < elementsLength; elementIndex++ ) {
                if ( !renderElement( elements[ elementIndex ] ) ) {
                    break;
                }
            }
        }
    }

    function renderElement( element ) {
        var result = true;

        if ( isDefined( element ) && element.hasAttribute( _attribute_Name_Options ) ) {
            var bindingOptionsData = element.getAttribute( _attribute_Name_Options );

            if ( isDefinedString( bindingOptionsData ) ) {
                var bindingOptions = getObjectFromString( bindingOptionsData );

                if ( bindingOptions.parsed && isDefinedObject( bindingOptions.result ) ) {
                    var instance = new calendarJs( element, bindingOptions.result ),
                        instanceId = instance.getId();

                    if ( !_instances.hasOwnProperty( instanceId ) ) {
                        _instances[ instanceId ] = instance;
                    }

                } else {
                    if ( !_configuration.safeMode ) {
                        console.error( _configuration.attributeNotValidErrorText.replace( "{{attribute_name}}", _attribute_Name_Options ) );
                        result = false;
                    }
                }

            } else {
                if ( !_configuration.safeMode ) {
                    console.error( _configuration.attributeNotSetErrorText.replace( "{{attribute_name}}", _attribute_Name_Options ) );
                    result = false;
                }
            }
        }

        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Validation
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function isDefined( value ) {
        return value !== null && value !== undefined && value !== _string.empty;
    }

    function isDefinedObject( object ) {
        return isDefined( object ) && typeof object === "object";
    }

    function isDefinedBoolean( object ) {
        return isDefined( object ) && typeof object === "boolean";
    }

    function isDefinedString( object ) {
        return isDefined( object ) && typeof object === "string";
    }

    function isDefinedFunction( object ) {
        return isDefined( object ) && typeof object === "function";
    }

    function isDefinedArray( object ) {
        return isDefinedObject( object ) && object instanceof Array;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Default Parameter/Option Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getDefaultBoolean( value, defaultValue ) {
        return isDefinedBoolean( value ) ? value : defaultValue;
    }

    function getDefaultArray( value, defaultValue ) {
        return isDefinedArray( value ) ? value : defaultValue;
    }

    function getDefaultObject( value, defaultValue ) {
        return isDefinedObject( value ) ? value : defaultValue;
    }

    function getDefaultStringOrArray( value, defaultValue ) {
        if ( isDefinedString( value ) ) {
            value = value.split( _string.space );

            if ( value.length === 0 ) {
                value = defaultValue;
            }

        } else {
            value = getDefaultArray( value, defaultValue );
        }

        return value;
    }

    function getObjectFromString( objectString ) {
        var parsed = true,
            result = null;

        try {
            if ( isDefinedString( objectString ) ) {
                result = _parameter_JSON.parse( objectString );
            }

        } catch ( e1 ) {

            try {
                result = eval( "(" + objectString + ")" );

                if ( isDefinedFunction( result ) ) {
                    result = result();
                }
                
            } catch ( e2 ) {
                if ( !_configuration.safeMode ) {
                    console.error( _configuration.objectErrorText.replace( "{{error_1}}",  e1.message ).replace( "{{error_2}}",  e2.message ) );
                    parsed = false;
                }
                
                result = null;
            }
        }

        return {
            parsed: parsed,
            result: result
        };
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Manage Instances
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * render().
     * 
     * Renders an element using the options specified.
     * 
     * @public
     * 
     * @param       {Object}    element                                     The element to render.
     * 
     * @returns     {Object}                                                The Calendar.js binding class instance.
     */
    _public.render = function( element ) {
        if ( isDefinedObject( element ) ) {
            renderElement( element );
        }

        return _public;
    };

    /**
     * renderAll().
     * 
     * Finds all new elements and renders them.
     * 
     * @public
     * 
     * @returns     {Object}                                                The Calendar.js binding class instance.
     */
    _public.renderAll = function() {
        render();

        return _public;
    };

    /**
     * instance().
     * 
     * Returns the Calendar.js instance for a specific element ID.
     * 
     * @public
     * @fires       onRefresh
     * 
     * @param       {string}    elementId                                   The element ID used for the Calendar.js instance.
     * 
     * @returns     {Object}                                                The Calendar.js class instance.
     */
    _public.instance = function( elementId ) {
        var instance = null;

        if ( isDefinedString( elementId ) && _instances.hasOwnProperty( elementId ) ) {
            instance = _instances[ elementId ];
        }

        return instance;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Configuration
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * setConfiguration().
     * 
     * Sets the specific configuration options that should be used.
     * 
     * @public
     * 
     * @param       {Options}   newConfiguration                            All the configuration options that should be set (refer to "Options" documentation for properties).
     * 
     * @returns     {Object}                                                The Calendar.js binding class instance.
     */
    _public.setConfiguration = function( newConfiguration ) {
        for ( var propertyName in newConfiguration ) {
            if ( newConfiguration.hasOwnProperty( propertyName ) ) {
                _configuration[ propertyName ] = newConfiguration[ propertyName ];
            }
        }

        buildDefaultConfiguration( _configuration );

        return _public;
    };

    function buildDefaultConfiguration( newConfiguration ) {
        _configuration = getDefaultObject( newConfiguration, {} );
        _configuration.safeMode = getDefaultBoolean( _configuration.safeMode, true );
        _configuration.domElementTypes = getDefaultStringOrArray( _configuration.domElementTypes, [ "div", "input" ] );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Public Functions:  Additional Data
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * getIds().
     * 
     * Returns an array of element IDs that have been rendered.
     * 
     * @public
     * 
     * @returns     {string[]}                                              The element IDs that have been rendered.
     */
    _public.getIds = function() {
        var result = [];
        
        for ( var elementId in _instances ) {
            if ( _instances.hasOwnProperty( elementId ) ) {
                result.push( elementId );
            }
        }

        return result;
    };


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Initialize Calendar.js Instances
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    ( function ( documentObject, windowObject, jsonObject ) {
        _parameter_Document = documentObject;
        _parameter_JSON = jsonObject;

        buildDefaultConfiguration();

        _parameter_Document.addEventListener( "DOMContentLoaded", function() {
            render();
        } );

        if ( !isDefined( windowObject.$calendar ) ) {
            windowObject.$calendar = _public;
        }

    } ) ( document, window, JSON );
} )();