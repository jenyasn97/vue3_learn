import {createApp} from 'vue'
import './style.css'
import components from './components/ui'
import App from './App.vue'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

app.mount('#app')
