# 图标

- ## 自定义图标

  - ### 模板中自动引入

    svg 图标放在 src/assets/svg 目录下，小写英文命名文件名。

    ```vue
    <!-- <icon-my-图标文件名 /> -->
    <icon-my-sunny></icon-my-sunny>
    ```

- ## iconfont 图标使用

  使用 WyIconFont 全局组件

- ## iconify 图标

  - ### iconify 图标查询

    - [iconify.design](https://icon-sets.iconify.design/)
    - [icones](https://icones.js.org/)

  - ### 模板中自动引入

    安装对应的@iconify-icons 图标集，比如 Element Plus 对应的图标集为@iconify-icons/ep

    ```vue
    <!-- <icon-图表集名-图标代码 /> -->
    <icon-ep-search></icon-ep-search>
    ```

  - ### 通过 WyIconify 全局组件使用

    - 在线 iconify 图标使用，直接通过 icon 传入图标代码

    - 离线图标使用
      1. 安装对应的离线图标集@iconify-json，比如 Element Plus 对应的 离线图标集为@iconify-json/ep。
      2. 在 WyIconify 注册对应的图标