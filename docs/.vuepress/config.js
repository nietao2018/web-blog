module.exports = {
  title: '漫步coding的博客',
  description: '公众号: 漫步coding, 欢迎大家关注， 一个聚焦于算法、数据库、架构的公众号',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { 
          text: '漫步coding 博客', 
          items: [
              { text: 'Github', link: 'https://github.com/easyhappy/travel-coding' },
              { text: '公众号', link: 'https://mp.weixin.qq.com/s/Npkk0oHEszZrUP2yRiTaSA' }
          ]
      }
    ],
    sidebar: [
      {
        title: 'mysql',
        path: '/',
        collapsable: false, // 不折叠
        children: [
            { title: "前言", path: "/mysql/brief"},
        ]
      },
  
      {
        title: '关于我',
        path: '/',
        collapsable: false, // 不折叠
        children: [
            { title: "公众号", path: "/about/brief"},
        ]
      }
    ]
  },
}

