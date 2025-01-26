import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

import  {initCustomComponentsConfig} from "@/utils/myGlobalSchemaRegister";


const app = createApp(App)
    .use(router);
initCustomComponentsConfig();
app.mount('#app');
