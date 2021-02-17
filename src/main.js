import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'


const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(store)
app.mount('#app')




//createApp(App).use(router).mount('#app')
