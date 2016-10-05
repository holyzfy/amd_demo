{
    appDir: './',
    mainConfigFile: './js/config.js',
    dir: './build',
    inlineText: true,
    optimize: 'none',
    optimizeCss: 'none',
    fileExclusionRegExp: /^\.|node_modules|jsnext|test|build(?:\.js)?$/,
    modules: [
        {
            name: 'common',
            include: [
                'jquery',
                'template',
                'text',
                'lib/url',
                'common'
            ]
        },
        {
            name: 'list',
            exclude: ['common']
        },
        {
            name: 'detail',
            exclude: ['common']
        },
        {
            name: 'admin/index',
            exclude: ['common']
        },
        {
            name: 'admin/list',
            include: [
                'admin/list/section_1',
                'admin/list/section_2'
            ],
            exclude: ['common']
        }
    ]
}