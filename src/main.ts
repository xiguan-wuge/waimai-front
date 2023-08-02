import { createApp } from 'vue'
import './style.css'
import './assets/style/index.less'

import App from './App.vue'
import router from './router'
import pinia from './store'
import { initMock } from './mock'
initMock()

// 按需引入，可能导致url在接口获取前，没有被mock
// if(process.env.NODE_ENV === 'development') {
//   import('./mock')
//     .then(module => {
//       module.initMock()
//     }).catch(err => {
//       console.log('mock-error', err);
//     })
// }
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
