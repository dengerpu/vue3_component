import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElContainer from './components/container'

const app= createApp(App)
app.use(ElContainer)
.mount('#app')
