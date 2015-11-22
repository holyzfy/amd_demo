define(function(require) {
    var $ = require('jquery');
    var template = require('template');
    var common = require('common');

    var list = function() {
        var data = {
            list: [
                'one',
                'two',
                'three',
                'four'
            ]
        };

        var html = template('tmpl_content', data);
        $('#content').html(html);
    };

    var start = function() {
        $(function() {
            list();
            common.Tip.alert('hello list');
        });
    };

    return {
        start: start
    };
});