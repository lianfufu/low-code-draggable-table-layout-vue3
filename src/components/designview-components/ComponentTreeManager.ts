
export type ComponentEntityType={
    id:string,
    item:any,
    category:string,
    textVal:string,
    isHover:boolean,
    isSelected:boolean,
    isText:boolean,
    isShowChildren:boolean,
    num:number,
    level:number,
    parentId:string,
    children:ComponentEntityType[],
    headerChildren:ComponentEntityType[]|null,
}

export const componentIconInfos= {
    "背景容器": {
        "icon": "icon-myrongqi",
        "isSymbol": true,
    },
    "按钮": {
        "icon": "icon-anniuguanli-02",
        "isSymbol": true,
    },
    "容器":{
        "icon": "icon-rongqi",
        "isSymbol": true,
    },
    "图片":{
        "icon": "icon-image",
        "isSymbol": false,
    },
    "导航":{
        "icon":"icon-dibudaohang",
        "isSymbol": true,
    },
    "公告":{
        "icon": "icon-gonggao",
        "isSymbol": false,
    },
    "搜索":{
        "icon": "icon-sousuo",
        "isSymbol": true,
    },
    "轮播图":{
        "icon": "icon-swiper",
        "isSymbol": false,
    },
    "图文导航":{
        "icon":"icon-daohang",
        "isSymbol": false,
    },
    "表格":{
        "icon":"icon-rongqi1",
        "isSymbol": true,
    },
    "标题":{
        "icon": "icon-biaotizujian",
        "isSymbol": false,
    }
}