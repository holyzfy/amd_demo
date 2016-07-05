define(function (require) {
    var $ = require('jquery');

    function start(selector) {
        $(selector).html('section two');
    }

    return  {
        start: start
    };
});