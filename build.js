{
    appDir: './',
    mainConfigFile: './js/config.js',
    dir: './build',
    inlineText: true,
    optimize: 'none',
    optimizeCss: 'none',
    fileExclusionRegExp: /^\.|node_modules|test|build(?:\.js)?$/,
    modules: [
        {
            name: 'common',
            include: [
                'jquery',
                'template',
                'text',
                'url',
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
        }
    ]
}