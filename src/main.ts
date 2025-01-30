import { createApp } from 'vue'
import App from './App.vue'
import '@/utils/adapter.js'
import router from './router'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import draggable from "vuedraggable";
import {registerCustomComponents} from "@/utils/globalRegister"

import  {initCustomComponentsConfig} from "@/utils/myGlobalSchemaRegister";


const app = createApp(App).use(router).use(createPinia());
registerCustomComponents(app,require.context('@/components', true, /.vue/));
initCustomComponentsConfig();
app.component("draggable",draggable);
app.mount('#app');
