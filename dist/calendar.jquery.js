/*! Calendar.js v2.12.1 | (c) Bunoon 2024 | MIT License */
(function($) {
  $.fn.calendarJs = function(options) {
    var instances = [];
    this.each(function() {
      instances.push(new calendarJs(this, options));
    });
    return instances;
  };
})(jQuery);