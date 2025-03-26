import { createApp,defineComponent  } from 'vue'
import App from './App.vue'
import '@/utils/adapter.js'
import router from './router'
import 'element-plus/dist/index.css'
import "@/scss/main.css"
import { createPinia } from 'pinia'
import draggable from "vuedraggable";
import {registerCustomComponents} from "@/utils/globalRegister"

import  {initCustomComponentsConfig} from "@/utils/myGlobalSchemaRegister";
// 2. 引入组件样式
import 'vant/lib/index.css';
import {Search} from "vant";

const app = createApp(App).use(router).use(createPinia());
app.use(Search);
registerCustomComponents(app,require.context('@/components', true, /.vue/));
initCustomComponentsConfig();
app.component("draggable",draggable);
app.mount('#app');
