const sidebarConfig = require('./sidebar.json')
module.exports = {
    title: 'EJU',
    description: 'EJU chemistry notes',
    head: [
        ['link', {rel: 'icon',  href: '/favicon.ico'}]
    ],
    ga: 'UA-127908059-1',
    serviceWorker: true,
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: '化学基礎', link: '/basic/'},
            {text: '化学', link: '/chemistry/'},
            {text: 'twitter', link: 'https://twitter.com/nerd_yue'}
        ],
        sidebar: sidebarConfig
    },
}
