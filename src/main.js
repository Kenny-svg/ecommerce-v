import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './route'
import AOS from 'aos'
import 'aos/dist/aos.css'

const pinia = createPinia()
// pinia.use((context) => {
    
//   const storeId = context.store.$id

//   const serializer = {
//     serialize: JSON.stringify,
//     deserialize: JSON.parse
//   }
//   const fromStorage = serializer.deserialize(window.localStorage.getItem(storeId))

//   if (fromStorage) {
//     context.store.$patch(fromStorage)
//   }
//   context.store.$subscribe((mutation, state) => {
//     window.localStorage.setItem(storeId, serializer.serialize(state))
//   })
// })

const app = createApp(App)
AOS.init()
app.use(pinia)
app.use(router)

app.mount('#app')
