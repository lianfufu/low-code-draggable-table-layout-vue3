import { defineStore } from 'pinia'
import {computed, ref, watch} from 'vue'

export type PickedBarModeType="Design"|"Preview";
export const useDesignStore = defineStore('design', () => {
    const pickedBarModel=ref<PickedBarModeType>("Design");

    //控制整个页面宽度变化的逻辑
    const leftMenuPanelWidth=ref(240);
    const rightMenuPanelWidth=ref(320);
    const mainCanvasWidth=ref(window.innerWidth-240-360-40);

    function windowResize(){
        mainCanvasWidth.value=window.innerWidth-leftMenuPanelWidth.value-rightMenuPanelWidth.value-40;
    }

    //控制管理当前选中的页面对象item
    const product=ref<any>(null);//当前选择的设计文件/产品，来自后端。一个product只有一个intializing
    const currentPageData=ref<any[]>([]);//当前选中的哪个
    const currentPageName=ref<string>("页面1");//当前选中的哪个

    const pageNamesWithPageDataMap=ref<Map<string, any[]>>(new Map());
    //默认生成一项内容，正常来自于后端
    pageNamesWithPageDataMap.value.set("页面1",currentPageData.value);

    return {
        pickedBarModel,
        //和页面尺寸相关的，
        leftMenuPanelWidth,
        rightMenuPanelWidth,
        mainCanvasWidth,
        windowResize,
        //和绑定页面的全局设计数据相关的
        product,
        currentPageData,
        currentPageName,
        pageNamesWithPageDataMap
    }
})