import Vue from 'vue'

// 注册所有全局组件
register(require.context('@/components', true, /.vue/))
function register (context) {
    context.keys().forEach((cnt,index,values) => {
        let component;
        try{
            component= context(cnt)
            let ctrl = component.default || component
            let a = ctrl.name
            let b = ctrl

            // 注册组件
            Vue.component(a, b)
        }catch(e){
            console.log(e.message);
        }

    })
}