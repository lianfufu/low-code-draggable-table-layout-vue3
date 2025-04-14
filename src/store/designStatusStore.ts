import { defineStore } from 'pinia'
import {computed, ref, toRaw, watch} from 'vue'
// export type ProductConfig={
//
// }
export type Product={
    name:string,
    id:string,
    config:object,
    pages:object[]
}
export type PickedBarModeType="Design"|"Preview";
// export enum EnumPickedDesignMode{
//     Page,
//     Components,
//     Navigations
// }

export const useDesignStore = defineStore('design', () => {
    const pickedBarModel=ref<PickedBarModeType>("Design");

    //控制整个页面宽度变化的逻辑
    const leftMenuPanelWidth=ref(240);
    const rightMenuPanelWidth=ref(320);
    const mainCanvasWidth=ref(window.innerWidth-240-360-40);

    //确保设计页和预览页高度的一直
    const iframeHeight=ref("800px");

    function windowResize(){
        mainCanvasWidth.value=window.innerWidth-leftMenuPanelWidth.value-rightMenuPanelWidth.value-40;
    }

    //设计状态下选择的内容
    const pickedDesignMode=ref<number>(0);

    //导航设置
    const curNavigationConfig=ref([{
        "component": "McNav",
        "name": "导航",
        "icon": "icon-daohang",
        "tabList": [
            {
                "id": "0001",
                "text": "推荐酒店",
                "icon": "icon-shop"
            },
            {
                "id": "0002",
                "text": "热销抢购",
                "icon": "icon-sort"
            },
            {
                "id": "0003",
                "text": "促销门票",
                "icon": "icon-goods"
            },
            {
                "id": "0004",
                "text": "机票团购",
                "icon": "icon-my"
            }
        ],
        "styles": {
            "color": "#000000",
            "backgroundColor": "#ffffff",
            "pickedColor": "#008efa",
            "height": 50
        }
    }]);

    //控制右键弹出的删除菜单是否显示
    const isShowRightClickMenu = ref(false);

    //控制管理当前选中的页面对象item
    const product=ref<any>(null);//当前选择的设计文件/产品，来自后端。一个product只有一个intializing
    const currentPageName=ref<string>("页面2");//当前选中的哪个，也是来自后端的第一个数据string

    const pageNamesWithPageDataMap=ref<Map<string, {
        id:string,
        pageGlobalStyles:object,
        pages:any[]
    }>>(new Map());

    const currentPageData=ref<{
        id:string,
        pageGlobalStyles:object,
        pages:any[]
    }>({
        id:"",
        pageGlobalStyles:{
            padding:"10px",
            backgroundColor:"#ffffff"
        },
        pages:[]
    });
    // if(pageNamesWithPageDataMap.value.has(currentPageName.value)){
    //     currentPageData.value = JSON.parse(JSON.stringify(toRaw(pageNamesWithPageDataMap.value.get(currentPageName.value)!)));
    // }

    function updateDesignStatusCausedByProductChanged(product:any){
        console.log("更新当前产品的页面集");
        pageNamesWithPageDataMap.value=new Map();
        product.pages.forEach((item:{[index:string]:any})=>{
            pageNamesWithPageDataMap.value.set(item.name,{
                id:item.id,
                pages:item.pageWidgets,
                pageGlobalStyles:product.configs.pageGlobalStyles
            });
        });
        //更新导航信息
        curNavigationConfig.value=[product.configs.navigations];
        //将当前选中的页面设置为当前产品的第一个页面
        currentPageName.value=product.pages[0].name;
        currentPageData.value = JSON.parse(JSON.stringify(toRaw(pageNamesWithPageDataMap.value.get(currentPageName.value)!)));//todo 点击保存时，再会让他取影响我的作品产品内容。此处是隔离引用
    }

    //当切换产品时执行此处，一般只有在设计页中的初始化时才会执行一次，不深度监听
    watch(()=>product.value,(value)=>{
        //更新当前产品的页面集
        updateDesignStatusCausedByProductChanged(value);
    });

    watch(()=>currentPageName.value,value=>{
        console.log(`newPageName:${value},`,pageNamesWithPageDataMap.value,pageNamesWithPageDataMap.value.get(value));
        console.log("currentPageData发生了改变",pageNamesWithPageDataMap.value.get(value));
        currentPageData.value = JSON.parse(JSON.stringify(toRaw(pageNamesWithPageDataMap.value.get(value)!)));//todo 点击保存时，再会让他取影响我的作品产品内容。此处是隔离引用
    });

    watch(()=>currentPageData.value,value => {
        window.localStorage.setItem("mymaps",JSON.stringify(currentPageData.value));
    },{deep:true});

    return {
        iframeHeight,
        isShowRightClickMenu,
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
        pageNamesWithPageDataMap,
        curNavigationConfig,
        pickedDesignMode,
        updateDesignStatusCausedByProductChanged
    }
})