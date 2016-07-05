define(function (require) {
    var $ = require('jquery');
    
    function start () {
        $('#result').html('demo admin index');
    }

    return {
        start: start
    };
});