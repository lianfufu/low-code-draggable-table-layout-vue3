import Vue from 'vue'

// 注册所有全局组件
export function registerCustomComponents (app:any,context:any) {
    context.keys().forEach((cnt:any) => {
        const component= context(cnt);
        let ctrl = component.default || component;
        if(ctrl.__name){
            app.component(ctrl.__name, ctrl);
        }
    })
}