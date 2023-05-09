# WyPopoverList 悬浮列表组件

- 完全继承 ElPopover，提供虚拟列表+搜索筛选的使用场景

- 依赖 [vue-virtual-scroller](https://www.npmjs.com/package/vue-virtual-scroller) 虚拟列表组件

- 依赖 Element Plus 的 [ElPopover](https://element-plus.gitee.io/zh-CN/component/popover.html) 组件

## WyPopoverList Attributes

(更多属性请参考 [ElPopover Attributes](https://element-plus.gitee.io/zh-CN/component/popover.html#%E6%8C%87%E4%BB%A4:~:text=Click%20me-,Attributes,-%23))

| 属性名        | 说明           | 类型  | 默认值 |
| ------------- | ------------- | ----- | ----- |
| list | 列表数据源 | any[]  | [] |
| poppverClass | 为 popper 添加类名 | string  | "" |
| showSearch | 是否显示搜索框 | boolean  | true |
| searchField | 需要搜索的字段 | string[]  | ["value"] |
| listClass | 列表数据源 | string  | "" |
| itemSize | 每项大小，如果设置为 0，它将使用可变尺寸模式 | number  | 32 |
| keyField | 用于标识项目并优化管理渲染视图的字段 | string  | "key" |
| direction | 滚动方向，或者'垂直-vertical' 或“水平-horizontal” | string  | "vertical" |
| minItemSize | 项目的高度（或水平模式中的宽度）未知时使用的最小大小 | number | undefined  | undefined |
| sizeField | 用于在可变大小模式下获取项目大小的字段 | string  | "size" |
| typeField | 用于区分列表中不同类型组件的字段。对于每种不同类型，将创建一个回收项目池 | string  | "type" |
| buffer | 要添加到滚动可见区域的边缘以开始呈现更远的项目的像素量 | number  | 200 |
| listTag | 要呈现为列表包装器的元素 | string  | "div" |
| valueField | 储存的字段 | string  | "" |
| showField | 显示的字段 | string  | "value" |

## WyPopoverList Slots

(更多属性请参考 [ElPopover Slots](https://element-plus.gitee.io/zh-CN/component/popover.html#slots:~:text=%E7%9A%84%20HTML%20%E5%85%83%E7%B4%A0-,Events,-%23))

| 插槽名        | 说明           | 作用域插槽 |
| ------------- | ------------- | ------------- |
| default |  自定义 popover 中部的内容，提供则不使用虚拟列表 | hidePopover：关闭当前 popover<br> |
| reference |  自定义触发 Popover 的元素 |  |
| header |  自定义 Popover 头部的内容 | hidePopover：关闭当前 popover<br> |
| list-item |  自定义列表每项选项内容 |  |
|footer |  可自定义 Popover 底部的内容 | hidePopover：关闭当前 popover<br> |

## WyPopoverList Events

(更多属性请参考 ElPopover)

| 事件名        | 说明           | 类型  | 定义 |
| ------------- | ------------- | ----- | ----- |
| update:modelValue | 绑定值改变（列表数据源选中的单项） | any |  |

## 使用方式

[列表页面](https://little-star227.gitee.io/wy-vue3-vite-basic/#/list)

## 源代码

[WyPopoverList](https://gitee.com/little-star227/wy-vue3-vite-basic/blob/master/src/components/WyPopoverList/index.vue)
