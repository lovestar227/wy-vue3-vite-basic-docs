module.exports = {
  //网站标题
  title: "wy-vue-vite-basic",
  //网站描述
  description: "后台管理系统模板",
  //被注入页面 HTML <head> 额外的标签。每个标签可以用 [tagName, { attrName: attrValue }, innerHTML?] 的形式指定。
  head: [
    [
      // 网站图标
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/cookie.svg",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // 这是部署到github相关的配置
  base: "/wy-vue3-vite-basic/docs/", 
  markdown: {
    // 代码块显示行号
    lineNumbers: true, 
  },
  themeConfig: {
    sidebarDepth: 3,
    logo: '/cookie.svg',
    // 导航栏配置
    nav: [
      {
        text: "指南",
        link: "/guide/QuickStart.html",
      },
      {
        text: "组件",
        link: "/component/WySwitch.html",
      },
    ],
    //侧边栏配置
    sidebar: {
      //组件页面
      "/component/": [
        {
          title: "基础组件",
          collapsable: false,
          children: ["WySwitch","WyPopoverList"],
        },
        {
          title: "特殊组件",
          collapsable: false,
          children: ["WyDarkToogle","WyToolTip"],
        },
      ],
      //组件页面
      "/guide/": [
        {
          title: "开始",
          collapsable: false,
          children: ["Introduction","QuickStart"],
        },
        {
          title: "依赖",
          collapsable: false,
          children: ["Dependencies"],
        },
        {
          title: "国际化",
          collapsable: false,
          children: ["I18n"],
        },
        {
          title: "图标使用",
          collapsable: false,
          children: ["IconsUse"],
        },
      ],
    },
    //dev 服务器的端口
    port: 8080
  },
};
