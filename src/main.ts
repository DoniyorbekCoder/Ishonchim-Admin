// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import './assets/style.css'

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import BasePagination from '@/components/BasePagination.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import BaseNotification from '@/components/BaseNotification.vue'
import BaseLoading from '@/components/BaseLoading.vue'
import GlobalModal from '@/components/GlobalModal.vue'
import ImageBox from '@/components/ImageBox.vue'
import BaseImage from '@/components/BaseImage.vue'
import './assets/style.css';

const app = createApp(App)
app.component('BasePagination', BasePagination)
app.component('BaseNotification', BaseNotification)
app.component('DeleteModal', DeleteModal)
app.component('BaseLoading', BaseLoading)
app.component('Modal', GlobalModal)
app.component('ImageBox', ImageBox)
app.component('BaseImage', BaseImage)
app.use(router)
app.mount('#app')

