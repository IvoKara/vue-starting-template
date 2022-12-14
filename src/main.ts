import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/styles/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(createHead())
app.use(router)

app.mount('#app')
