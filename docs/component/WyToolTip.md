# WyToolTip

  自动判断文本是否溢出显示 tooltip 组件

## WyToolTip Attributes

| 属性名        | 说明           | 类型  | 默认值 |
| ------------- | ------------- | ----- | ----- |
| text | 文本内容 && tooltip 默认内容 | string  | "" |
| multipleJudgments | true-判断多次文本是否溢出判断展示tooltip<br> false-只判断一次 | boolean  | false |
| style | 显示的文本样式 | string  | "" |

## WyToolTip Slots

| 插槽名        | 说明           | 作用域插槽 |
| ------------- | ------------- | ------------- |
| default | 显示文本内容 |  |
| content |  tooltip 内容 |  |

## 使用方式

- 显示文本内容与 tooltip 内容相同

    ```html
    <WYTooltip :text="title" :style="sidebarTitleStyle"> </WYTooltip>
    ```

- 使用插槽 slot 自定义显示文本内容 和 tootip 内容

    ```html
    <WyToolTip>
      <template #content> {{ title }} </template>
      {{ title }}
    </WyToolTip>
    ```

## 源代码

[WyToolTip](https://gitee.com/little-star227/wy-vue3-vite-basic/blob/master/src/components/WyToolTip/index.vue)
