import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers";

import  'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css' ; 

createApp(App).use(router).mount('#app')
