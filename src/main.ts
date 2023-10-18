import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElContainer from './components/container'
import ElButton from './components/button'

const app= createApp(App)


app.config.globalProperties.$AILEMENTE = {
  size:'large'
}

app.use(ElContainer)
.use(ElButton)
.mount('#app')
