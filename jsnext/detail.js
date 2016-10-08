import $ from 'jquery';
import template from 'template';

function detail() {
    const data = {
        message: 'hello detail'
    };
    let html = template('tmpl_content', data);
    $('#content').html(html);
}

function start() {
    detail();
}

export {
    start
};
