import {createApp} from 'vue'
import './style.css'
import components from './components/ui'
import App from './App.vue'
import router from "./router/router.js";
import directives from "./directives/index.js";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
.use(router)
.mount('#app')
