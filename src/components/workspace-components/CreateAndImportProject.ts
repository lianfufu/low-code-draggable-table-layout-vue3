
import {useRouter} from "vue-router";
import router from "@/router";

//handle批定义
export function jumpToCreateWidgetsProject(){
    // const router=useRouter();
    console.log(router,"router");
    router.push("/designbuild");
}
export function jumpToCreateSchemaProject(){
    // const router=useRouter();
    router.push("/designbuild");
}
export function importJsonToCreateWidgetsProject(){

}

export function doLogout(){
    router.replace("/");
}