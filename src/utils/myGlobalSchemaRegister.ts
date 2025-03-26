import {useStore} from "@/store";
import {useDesignStore} from "@/store/designStatusStore";

export function initCustomComponentsConfig() {
    const files = require.context('@/components/custom-components', true,/component.json$/);
    const data=[] as any[];
    let fields = {} as {[index:string]:any};

    files.keys().forEach(key => {
        const [,name]= key.split('/');
        const originData={component:name,...files(key)};
        fields[name] = originData.fields;
        data.push(getSchemaDefaultValue(originData));
    });
    const store=useStore();
    store.initializing=data;
    console.log(data,"获得到初始化类型");
    store.fields=fields;
    console.log(fields,"获得到初始化类型fields");
    // console.log(useStore(),"store");
    // Vue.prototype.$fields = fields
    // vue.$store.commit('setFields', fields);
    // Vue.prototype.$initializing = data
    // console.log(fields,data);
}
function getSchemaDefaultValue(inputVal:any){
    const res={} as {[index:string]:any};
    for (const inputValKey in inputVal) {
        if(inputValKey==="children"||inputValKey==="header"||typeof inputVal[inputValKey] !== 'object'){
            res[inputValKey] = inputVal[inputValKey];
            continue;
        }
        //注意如何处理children
        recurseGetDeepValue(res,inputVal[inputValKey]);
    }
    return res;
}

function recurseGetDeepValue(res:any,inputVal:any){
    for (const inputValKey in inputVal){
        if(inputVal[inputValKey].type !== 'object'){
            res[inputValKey] = inputVal[inputValKey].value;
        }else{
            res[inputValKey]={};
            recurseGetDeepValue(res[inputValKey],inputVal[inputValKey].child);
        }
    }
}