# WySwitch 开关组件

## WySwitch Attributes

| 属性名        | 说明           | 类型  | 默认值 |
| ------------- | ------------- | ----- | ----- |
| modelValue/v-model | 开关绑定值 | boolean  | false |
| width | 开关宽度 | number  | 40 |
| height | 开关高度 | number  | 22 |
| hasBorder | 是否有边框 | boolean  | false |

## WySwitch Events

| 事件名        | 说明           | 类型  | 定义 |
| ------------- | ------------- | ----- | ----- |
| update:modelValue/change | 开关状态切换事件 | Function  | ( value: boolean ) => void |

## WySwitch Slots

| 插槽名        | 说明           | 作用域插槽 |
| ------------- | ------------- | ------------- |
| open-circle |  开启时，小圆上的内容 |  |
| close-circle |  开启时，小圆上的内容 |  |

## CSS 变量

| 变量名        | 说明           | 类型  | 默认值 |
| ------------- | ------------- | ----- | ----- |
| --wy-switch-open-bgc | 打开时的背景色 | string  | "#409eff" |
| --wy-switch-close-bgc | 关闭时的背景色 | string  | "#dcdfe6" |
| --wy-switch-open-border-color | 打开时的边框颜色 | string  | "#8e8e93" |
| --wy-switch-close-border-color | 关闭时的边框颜色 | string  | "#8e8e93" |
| --wy-switch-open-circle-color | 打开时的小圆背景色 | string  | "#fff" |
| --wy-switch-close-circle-color | 关闭时的小圆背景色 | string  | "#fff" |
| --wy-switch-transition | 开关动画持续事件 | string  | "0.5s" |

## 使用方式

- 第一种 直接根据 API 使用

    ```html
    <WySwitch
      :model-value="isDark"
      @change="changeDark"
      :style="wySwitchStyle"
      has-border
    >
      <template #open-circle>
        <!-- 月亮图标 -->
        <moon :style="{ color: '#fff' }"></moon>
      </template>
      <template #close-circle>
        <!-- 太阳图标 -->
        <sunny></sunny>
      </template>
    </WySwitch>
    ```
