import $ from 'jquery';
import template from 'template';
import {Tip} from 'common';

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
    list();
    Tip.alert('hello list');
}

export {
    start
};