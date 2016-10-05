import $ from 'jquery';
import template from 'template';
import common from 'common';

function list() {
    const data = [
        'one',
        'two',
        'three',
        'four'
    ];
    let html = template('tmpl_content', data);
    $('#content').html(html);
}

function start() {
    $(() => {
        list();
        common.Tip.alert('hello list');
    });
}

export default {
    start
};