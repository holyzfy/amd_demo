define(function(require) {
    var $ = require('jquery');
    var template = require('template');
    var common = require('common');

    var detail = function() {
        var data = {
            message: 'hello detail'
        };

        var html = template('tmpl_content', data);
        $('#content').html(html);
    };

    var start = function() {
        $(function() {
            detail();
        });
    };

    return {
        start: start
    };
});