import VirtualScroller from '@radialapps/vue-virtual-scroller'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import '@radialapps/vue-virtual-scroller/dist/vue-virtual-scroller.css'

const app = createApp(App)
app.use(router)
app.use(VirtualScroller)
app.mount('#app')
