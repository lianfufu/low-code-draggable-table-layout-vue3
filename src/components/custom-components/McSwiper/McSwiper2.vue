<!--
 * @Description: 轮播组件
 * @Autor: WangYuan
 * @Date: 2021-06-01 15:04:57
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-03-28 11:30:35
-->
<template>
  <div :style="[this.wrapStyle(styles),this.cmpStyle(styles)]">
<!--    <baseSwiper-->
<!--      :list="list"-->
<!--      :dots="mAttrs.dots"-->
<!--      :crown="mAttrs.crown"-->
<!--      :shadow="mAttrs.shadow"-->
<!--      :loop="mAttrs.loop"-->
<!--      :autoplay="mAttrs.autoplay"-->
<!--      :imgWidth="mAttrs.imgWidth"-->
<!--      :height="130"-->
<!--      :previousMargin="mAttrs.previousMargin"-->
<!--      :nextMargin="mAttrs.nextMargin"-->
<!--      @clickItem='clickItem'-->
<!--    />-->
    666
  </div>
</template>

<script>
// import baseSwiper from "./baseSwiper";

export default {
  name: "McSwiper",

  props: {
    styles: {
      type: Object,
      default: () => {},
    },
    attrs: {
      type: Object,
      default: () => {},
    },
    list: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      show: true,
      mAttrs: {},
      modelObj: {
        basis: {
          crown: false,
          imgWidth: 100,
          previousMargin: 0,
          nextMargin: 0,
        },
        card: {
          crown: true,
          imgWidth: 100,
          previousMargin: 100,
          nextMargin: 100,
        },
        line: {
          crown: false,
          imgWidth: 97,
          previousMargin: 20,
          nextMargin: 0,
        },
      },
    };
  },

  watch: {
    attrs: {
      handler(newValue, oldValue) {
        this.mAttrs = {
          ...this.attrs,
          ...this.modelObj[newValue.model],
        };
        console.log(this.mAttrs,"this.mAttrs");
        this.againLoad();
      },
      immediate: true,
      deep: true,
    },
    list:{
      handler(newValue,oldValue){
        console.log("轮播图的list值",newValue,oldValue);
      },
      immediate: true,
      deep: true,
    }
  },

  methods: {
    // 重新加载
    againLoad() {
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 0);
    },

    // 单项点击
    clickItem(item) {
      this.$jump(item.jump);
    },
    unit (target) {
      return `${target}px`
    },
    wrapStyle (target) {
      if (!target) {
        return {}
      }

      let result = {}

      // 需px单位基础样式
      const needUnit = ['fontSize', 'width', 'height']

      for (const [key, value] of Object.entries(target)) {
        // 需px单位基础样式
        if (needUnit.includes(key)) {
          result[key] = this.unit(value)
          continue;
        }

        // 页面间距
        if (key == 'pagePadding') {
          result['paddingLeft'] = this.unit(value)
          result['paddingRight'] = this.unit(value)
          continue;
        }


      }

      return result
    },
    cmpStyle (target) {
      if (!target) {
        return {}
      }

      let result = {}

      for (const [key, value] of Object.entries(target)) {
        // 容器负边距
        if (key == 'negativeMarginBottom') {
          result['paddingBottom'] = this.unit(value)
          continue
        }

        // 上部内间距
        if (key == 'cmpUpperPadding') {
          result['paddingTop'] = this.unit(value)
          continue
        }

        // 下部内间距
        if (key == 'cmpLowerPadding') {
          result['paddingBottom'] = this.unit(value)
          continue
        }

        // 所有圆角
        if (key == 'cmpRadius') {
          result['borderRadius'] = this.unit(value)
          continue
        }

        // 上部圆角
        if (key == 'cmpUpperRadius') {
          result['borderTopLeftRadius'] = this.unit(value)
          result['borderTopRightRadius'] = this.unit(value)
          continue
        }

        // 下部圆角
        if (key == 'cmpLowerRadius') {
          result['borderBottomLeftRadius'] = this.unit(value)
          result['borderBottomRightRadius'] = this.unit(value)
          continue
        }

        // 组件背景色
        if (key == 'cmpBackground') {
          result['background'] = value
          continue
        }
      }

      return result
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  z-index: 0;
}
</style>