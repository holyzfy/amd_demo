var require = ({
    waitSeconds: 0,
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery',
        template: 'lib/template',
        text: 'lib/text',
        url: 'lib/url'
    },
    shim: {
        url: {
            exports: 'url'
        }
    }
});