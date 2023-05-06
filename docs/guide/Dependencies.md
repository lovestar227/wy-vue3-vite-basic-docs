# 依赖

```ts
"dependencies"
    /* 工具 */
    //可以对颜色进行操作（变亮、变暗、颜色混合等），做主题色用的插件
    "@ctrl/tinycolor"
    //工具库-VueUse
    "@vueuse/core"
    //预设动画以及简单实现动画
    "@vueuse/motion"
    //请求
    "axios"
    //工具库-日期
    "dayjs"
    //元件尺寸调整检测器
    "element-resize-detector"
    //轻量级的处理cookies的jsAPI
    "js-cookie"
    //工具库，内部封装了很多字符串、数组、对象等常见数据类型的处理函数（ES5 CJS）
    "lodash"
    //loadsh（ES6 ESM） 体积更小
    "lodash-es"
    //loadsh 支持ESM同时兼容CJS
    "lodash-unified"
    //事件总线(emit、on)
    "mitt"
    //安全性的查询字符串解析和序列化字符串的库
    "qs"
    //生产接口调试
    "mockjs"

    /* UI */
    //动画
    "animate.css"
    //UI组件库
    "element-plus"

    /* 插件 */
    // 图表
    "echarts"
    //进度条
    "nprogress"
    //虚拟列表
    "vue-virtual-scroller":

    /* vue */
    //框架
    "vue"
    //国际化
    "vue-i18n"
    //路由
    "vue-router"
    //vue状态管理(参考vue2的vuex)
    "pinia":


  "devDependencies"
    /* vite相关 */
    //构建工具
    "vite"
    //eslint 控制台报错信息集成
    "vite-plugin-eslint"
    //stylelint 控制台报错信息集成
    "vite-plugin-stylelint"
    //mock支持
    "vite-plugin-mock"
    // 打包去掉console
    "vite-plugin-remove-console"
    //SVG图片引入可以直接当组件使用
    "vite-svg-loader"
    //基于VS Code 结合 Volar的命令行检查ts类型使用
    "vue-tsc"
    //编辑vue文件
    "@vitejs/plugin-vue"
    //添加vue3对tsx和jsx的支持
    "@vitejs/plugin-vue-jsx"
    //自动导入
    "unplugin-auto-import"
    //按需加载使用的组件可以配合其他插件使用，比如Element Plus
    "unplugin-vue-components"
    //国际化-预编译各种格式的语言文件
    "@intlify/unplugin-vue-i18n"

    /* sass */
    //支持sass
    "sass"

     /* typescript */
     //支持TypeScript
    "typescript"

    /* node */
    //提供了node的常用的语法提示
    "@types/node"

    /* 图标 */

      /* iconify图标库 */
      //Element Plus 图标
      "@iconify-icons/ep"
      //Font Awesome 4 图标
      "@iconify-icons/fa"
      //Element Plus 图标 （JSON）
      "@iconify-json/ep"
      //Font Awesome 4 图标 （JSON）
      "@iconify-json/fa"
      //iconify 工具库
      "@iconify/utils"
      //iconify vue 库 图标vue组件化 + 在线图标使用 + 添加离线图标
      "@iconify/vue"

      /* 图标按需自动导入 */
      //1.按需引入图标，支持图表集和自定义图标。
      //2.结合@iconify-json/XX 图标集（JSON）和  unplugin-vue-components。可实现iconify图标按需自动导入
      "unplugin-icons"

    /* 校验工具 */

      /* eslint */
      //eslint自定义代码规则
      "eslint"
      // 将prettier作为ESLint的规则来  使用
      "eslint-plugin-prettier"
      //vue3-eslint
      "eslint-plugin-vue"
      //自动import export 排序校验
      "eslint-plugin-simple-import-sort"
      //一个ESLint插件，为 TypeScript代码库提供lint规则。
      "@typescript-eslint/eslint-plugin"
      //一个ESLint解析器，它利用TypeScript  ESTree允许ESLint生成TypeScript源代码
      "@typescript-eslint/parser"
      //解决ESLint中的已知限制
      "@vue/eslint-config-prettier"
      //解决ESLint中的已知限制
      "@vue/eslint-config-typescript"

      /* stylelint */
      //CSS 检测工具
      "stylelint"
      //使Stylelint v14能够处理HTML
      "stylelint-config-html"
      //关闭所有不必要的或者可能  与Prettier冲突的规则
      "stylelint-config-prettier"
      "stylelint-config-recommended"
      "stylelint-config-recommended-scss"
      "stylelint-config-recommended-vue"
      //stylelint的推荐配置
      "stylelint-config-standard"
      //CSS属性排序插件
      "stylelint-order"

      /* prettier */
      //prettier自定义代码规则
      "prettier"

    /* git相关 */

      /* git hooks */
      //husky 能够实现 git hooks,git提交校验 eslint(代 码规范)及commit message规范
      "husky"

      /* 辅助git提交校验 */
      //在代码提交之前，进行代码规则检查能够确保  进入git库的代码都是符合代码规则的。但是整个项目上运行lint速度会很 慢，lint-staged能够让lint只检测暂存区的文件，所以速度很快
      "lint-staged"

      /* git提交信息规范 */
      // git提交信息规范
      "@commitlint/cli"
      "@commitlint/config-conventional"

    /* 打包 */

      /* 体积压缩 */
      //gzip压缩 && brotli压缩
      "vite-plugin-compression"

      /* 打包体积分析图 */
      //打包体积分析图
      "rollup-plugin-visualizer"

      /* 兼容性 */
      //打包浏览器兼容性
      "@vitejs/plugin-legacy"

      /* 压缩 */
      //压缩不用terser，vite默认使用Esbuild更好，如果不装terser，使用@vitejs/plugin-legacy会报错

      "terser"
      /* postcss */
      //使用插件去转换CSS的工具
      "postcss"
      //postcss的解析器：解析类 HTML 文件里style标签中的样式。
      "postcss-html"
      //postcss的解析器：支持通过内联内容来转换@import规则
      "postcss-import"
      //postcss的scss解析器
      "postcss-scss"
      //自动补全css浏览器前缀
      "autoprefixer"

      /* 编译 */
      //defineOptions等预编译，用处：便于定义组件name
      "unplugin-vue-macros"
      //volar 支持 unplugin-vue-macros
      "@vue-macros/volar"
      //@vue-macros/volar底层依赖
      "@vue-macros/reactivity-transform"

    /* 其他 */
    //监听元素大小变化
    "@types/element-resize-detector"
    //轻量级的处理cookies的jsAPI
    "@types/js-cookie"
    //工具库，内部封装了很多字符串、数组、对象等常见数据类型的处理函数（ES5 CJS）
    "@types/lodash"
    //loadsh（ES6 ESM） 体积更小
    "@types/lodash-es"
    // 进度条
    "@types/nprogress"
    //处理路径工具库
    "path"
    //原子化CSS
    "unocss"
    //安全性的查询字符串解析和序列化字符串的库
    "@types/qs"
    //接口调试
    "@types/mockjs"
    //生成模拟数据用于测试和开发
    "@faker-js/faker"
    //终端修改输出字符样式
    "picocolors"
    //配置环境变量
    "cross-env"

```