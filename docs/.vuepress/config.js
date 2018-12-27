module.exports = {
  title: 'DawnUI',
  description: '一个快速构建内容展示站点的UI库',
  port: 8066, 
  dest: '',
  base:'/Dawn-UI/',
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
  serviceWorker: {
    updatePopup: true, // Boolean | Object, 默认值是 undefined.
    // 如果设置为 true, 默认的文本配置将是: 
    updatePopup: { 
       message: "有新的内容项需要更新.", 
       buttonText: "更新" 
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/document/components' },
      { text: '物料集', link: '/document/wuliao' },
      { text: '站点模板', link: '/document/siteTemplate' },
      { text: '更新日志', link: '/document/update'},
      { text: 'GitHub', link: 'https://github.com/danielmlc/Dawn-UI'  },
    ],
    sidebarDepth :3,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
   },
   configureWebpack: (config, isServer) => {
      if (!isServer) {
        // 修改客户端的 webpack 配置
      }
    }
  }
