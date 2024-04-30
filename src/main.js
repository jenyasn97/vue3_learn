import {createApp} from 'vue'
import './style.css'
import components from './components/ui'
import App from './App.vue'
import router from "./router/router.js";


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app
.use(router)
.mount('#app')
