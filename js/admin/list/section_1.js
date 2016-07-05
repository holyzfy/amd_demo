define(function (require) {
    var $ = require('jquery');

    function start(selector) {
        $(selector).html('section one');
    }

    return  {
        start: start
    };
});