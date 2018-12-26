module.exports = {
  title: 'DawnUI',
  description: '快速构建内容展示站点的UI库',
  port: 8066, 
  dest: '',
  base:'../../docs',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/img/icons/Icon-152.png` }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/Icon-120.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'PC端配置', link: '/front/' },
      { text: 'webApp端配置', link: '/webApp/'},
      { text: '服务端文档', link: '/service/'},
      { text: '技术扩展', link: '/more/'},
      { text: '更新日志', link: '/update/'},
      { text: 'GitHub', link: 'https://github.com/YLSoftWorkGroup'  },
    ],
    sidebarDepth :3,
    sidebar: {
      '/front/': [ 
        'frontRules',
        'globalFun',
        'directive',
        'components',
        'renderComs',
        'pageConf',
        'demo',
        'moduleConf',
        'reportConf',
      ],
      '/webApp/': [ 
      ],
      '/service/': [
        'service'
      ],
      '/more/': [
        'markdown',
        'git'
      ],
    },
   }
  }
