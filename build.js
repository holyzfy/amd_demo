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
        },
        {
            name: 'admin/index',
            exclude: ['common']
        },
        {
            name: 'admin/list',
            include: [
                // 把期望合并到一起，并且不属于admin/list.js的依赖的文件明确包含进来
                'admin/list/section_1',
                'admin/list/section_2'
            ],
            exclude: ['common']
        }
    ]
}