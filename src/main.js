import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './router/router-guard'
import store from './store'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(router).use(store).use(Element3).mount('#app')
