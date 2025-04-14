<template>
  <template v-if="lstComponentEntities&&lstComponentEntities.length>0">
    <div v-for="(item,index) in lstComponentEntities" :key="item.id" class="ReactVirtualized__Grid__innerScrollContainer" role="rowgroup"
         style="width: 100%; overflow: hidden; position: relative;">
      <div :style="{paddingLeft:item.level*10+((item.children&&item.children.length>0)?-15:5)+'px',border:((!store.curHoverComponent?false:item.id===store.curHoverComponent?.id)||item.isSelected)?'1px solid #008efa':'',backgroundColor:item.isSelected?'rgba(0, 142, 250, .2)':'#fff'}" class="show_content"
      @click.stop="item.isSelected=true" @mouseenter="handleHover(item)" @mouseleave="item.isHover=false" tabindex="0" @blur="item.isSelected=false">
        <div data-folder="true" data-id="0:1" data-deep="0" data-isfixed="false"
             class="layerPanel__1TQCJ framePanel__1IDIL" contenteditable="false">
          <div style="width: 6px; height: 100%; flex-shrink: 0;"></div>
          <div data-drag="hide" class="designIcon__1566t triangleIcon__1pPRl noTriangleIcon__2KgJw"></div>
          <div v-show="item.children&&item.children.length>0" :class="['arrow',item.isShowChildren?'':'arrow_rotate']" @click="item.isShowChildren=!item.isShowChildren">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#000" fill-rule="evenodd" d="M11.46 6.333H4.54l3.46 4 3.46-4Z" clip-rule="evenodd" opacity=".6"/></svg>
          </div>
          <div class="shape__3k6A7">
            <div>
              <div class="designIcon__1566t">
                <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;">
<!--                  ?xml version="1.0" encoding="UTF-8"?-->
                  <i v-if="!componentIconInfos[item.category]?.isSymbol" class="iconfont" style="width:20px;height:20px;" :class="componentIconInfos[item.category]?.icon"></i>
                  <svg v-else class="iconfont" aria-hidden="true" width="20" height="20">
                    <use :xlink:href="`#${componentIconInfos[item.category]?.icon}`"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="frameName__2pv0V" @click="setCurComponent(item)">
            <div class="list-change-name__1iUrS C-name-input__2hfj- isFirstFrame__1GH8g">
              <div class="readonly-input"
                   style="width: 100%;padding-left: 10px;padding-top:5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                {{!item.showText?'&lt;空&gt;':item.showText}}
              </div>
            </div>
          </div>
          <div data-drag="hide" class="lockInvisibleButton__qTnQ3 undefined" style="right: 14px;">
            <div class="emptyIcon__1gh8q"></div>
            <div class="emptyIcon__1gh8q"></div>
          </div>
        </div>
      </div>
      <ComponentTree v-if="item.isShowChildren" :is-input-header-children="true" :parent-id="item.id" :parent-level="item.level" :widgets="item.headerChildren"/>
      <ComponentTree v-if="item.isShowChildren" :parent-id="item.id" :parent-level="item.level" :widgets="item.children"/>
    </div>
  </template>
</template>

<script setup lang="ts">
import {computed, reactive, ref, watch} from "vue";
import {ComponentEntityType,componentIconInfos} from "@/components/designview-components/ComponentTreeManager";
import {useStore} from "@/store/index";
const props=defineProps({
  widgets:{
    type:Array
  },
  component:{
    type:Object,
  },
  parentId:{
    type:String,
    default:""
  },
  parentLevel:{
    type:Number,
    default:0
  },
  isInputHeaderChildren:{
    type:Boolean,
    default:false
  }
});


const store=useStore();
const lstComponentEntities=ref();
watch(()=>[props.widgets,store.curComponent],()=>{
  if(!props.widgets||props.widgets.length===0){
    lstComponentEntities.value=[];
    return;
  }
  const res:ComponentEntityType[]=[];
  const map=new Map();
  props.widgets.forEach((item:any)=>{
    if(item.component!=="MCTextContainer"){
      if(map.has(item.name)){
        map.set(item.name,map.get(item.name)+1);
      }else{
        map.set(item.name,1);
      }
      const instance={
        id:item.id,
        item:item,
        category:item.name,
        parentId:props.parentId,
        isShowChildren:true,
        isText:item.name==='标题',
        isHover:!store.curHoverComponent?false:item.id===store.curHoverComponent?.id,
        isSelected:!store.curComponent?false:item.id===store.curComponent?.id,
        textVal:item.title,
        showText:"",
        level:props.parentLevel+1,
        children:item.children,
        headerChildren:item.header,
        num:map.get(item.name)
      }
      let showText=instance.isText?instance.textVal:instance.category+" "+instance.num;
      instance.showText=props.isInputHeaderChildren?showText+" （Header）":showText;
      // console.log("instance的category是否有symbol:",componentIconInfos[instance.category]===undefined,instance.category);
      res.push(instance);
    }
  });
  lstComponentEntities.value=res;
  // console.log("lstComponentEntities",lstComponentEntities.value);
},{
  immediate:true,
  deep:true
});

function setCurComponent(item:any){
  store.curComponent=item.item;
}
function handleHover(item:any){
  item.isHover=true;
  store.curHoverComponent=item;
}
// function handleHover
</script>

<style scoped lang="scss">
//树形内容
.layerPanel__1TQCJ {
  align-items: center;
  display: inline-flex;
  font-size: 12px;
  width: 100%;
}

.show_content{
  width: 100%;
  /* 关键属性：使div可聚焦 */
  tab-index: 0;
  /* 去除聚焦时的默认轮廓线 */
  outline: none;
  /* 添加过渡效果 */
  transition: background-color 0.3s ease;
  //&:hover{
  //  border:1px solid #008efa;
  //}
  //&:focus{
  //  background-color: rgba(0, 142, 250, .2) !important;
  //  border:1px solid #008efa;
  //}
}
.arrow{
  width:16px;
  height:16px;
  cursor:pointer;
  transition: transform 500ms ease;
  vertical-align: middle;
  margin-right:5px;
  margin-top:5px;
}
.arrow_rotate{
  transform: rotate(-90deg);
  transition: transform 200ms ease;
}

.blueBg02__2fGn0 {
  background: rgba(0, 142, 250, .2) !important;
}

.lightTheme .layerPanel__1TQCJ.select-panel__1j9Wh > .designIcon__1566t {
  background: transparent;
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.lightTheme .layerPanel__1TQCJ > .designIcon__1566t {
  background: transparent;
}

.layerPanel__1TQCJ > .designIcon__1566t {
  background: transparent;
  flex-shrink: 0;
  height: 16px;
  position: relative;
  width: 16px;
}

.noTriangleIcon__2KgJw {
  visibility: hidden;
}

.triangleIcon__1pPRl {
  margin-left: 0;
}

.layerPanel__1TQCJ > .designIcon__1566t:before {
  background-size: 16px 16px;
  content: "";
  height: 16px;
  opacity: .6;
  position: absolute;
  width: 16px;
}

.lightTheme .triangleIcon__1pPRl:before {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDYgNi4zMzNINC41NGwzLjQ2IDQgMy40Ni00WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNiIvPjwvc3ZnPg==);
}

.triangleIcon__1pPRl:before {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDYgNi4zMzNINC41NGwzLjQ2IDQgMy40Ni00WiIgY2xpcC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNiIvPjwvc3ZnPg==);
  transform: rotate(-90deg);
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.shape__3k6A7 {
  position: relative;
  z-index: 11;
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.shape__3k6A7 .designIcon__1566t {
  background: transparent;
  height: 16px;
  opacity: .6;
  position: relative;
  width: 16px;
}

.shape__3k6A7 .designIcon__1566t:before {
  background-size: 16px 16px;
  content: "";
  height: 16px;
  position: absolute;
  width: 16px;
}

.layerPanel__1TQCJ.select-panel__1j9Wh .designIcon__1566t, .layerPanel__1TQCJ.select-panel__1j9Wh .frameName__2pv0V, .layerPanel__1TQCJ.select-panel__1j9Wh .shape__3k6A7 {
  opacity: 1;
}

.lightTheme .frameName__2pv0V {
  color: #202020;
  opacity: 1;
}

.frameName__2pv0V {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  line-height: 32px;
  margin-left: 4px;
  opacity: .8;
}

.lightTheme .C-name-input__2hfj-, .lightTheme .C-name-input__2hfj-.isFirstFrame__1GH8g {
  color: #202020;
}

.C-name-input__2hfj-.isFirstFrame__1GH8g {
  color: hsla(0, 0%, 100%, .9);
  font-weight: 700;
}

.C-name-input__2hfj- {
  background: transparent;
  color: #fff;
  position: relative;
}

.list-change-name__1iUrS {
  height: 100%;
}

.list-change-name__1iUrS .readonly-input {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.list-change-name__1iUrS .readonly-input {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.C-name-input__2hfj- pre {
  display: none;
  float: left;
}

.C-name-input__2hfj- input, .C-name-input__2hfj- pre, .C-name-input__2hfj- textarea {
  background: transparent;
  color: inherit;
  font-size: inherit;
  line-height: 1.5;
  white-space: nowrap;
}

.lockInvisibleButton__qTnQ3 {
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
}

.designIcon__3iVfV, .emptyIcon__1gh8q {
  height: 24px;
  position: relative;
  width: 24px;
}
</style>