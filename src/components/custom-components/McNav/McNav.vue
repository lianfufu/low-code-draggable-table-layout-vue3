<template>
  <ul class="tabs" :style="bodyStyle">
    <li
        v-for="(item, index) in tabList"
        :key="index"
        class="tabs-item"
    >
      <i :style="{color:props.styles.color}" class="icon" :class="item.icon"></i>
      <span :style="{color:props.styles.color}">{{ item.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props=withDefaults(defineProps<{
  tabList:any[],
  attrs:object,
  styles:object,
}>(),{
  tabList:()=>[],
  attrs:()=>({}),
  styles:()=>({}),
});

const bodyStyle=computed(()=>{
  return{
    backgroundColor:props.styles.backgroundColor?props.styles.backgroundColor:"#ffffff",
    height:props.styles.height+'px',
  }
});
const pickedColorStyle=computed(()=>({pickedColor:props.styles.pickedColor?props.styles.pickedColor:"#000000"}));

</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  width: 100%;
  border-top: solid 1px #9b9b9b20;

  .tabs-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    background-size: contain;
    font-size: 14px;
    color: #9b9b9b;

    i {
      font-size: 20px;
      margin-bottom: 3px;
    }
  }

  .tabs-item-select {
    color: #f20c25;
  }
}
</style>