<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/sidebar/index.vue'

// import router from '@/router'
// import { reactive, defineAsyncComponent } from 'vue';

// const data = reactive<{token: string | null}>({
//   token: null
// })
// function handleUser() {
//   data.token = sessionStorage.getItem('token')
//   if (data.token === null) {
//     router.push('/login')
//     setTimeout(handleUser, 100)
//   }
// }
// handleUser()
</script>

<template>
  <div class="flex relative w-full bg-orange-primary">
    <Sidebar class="w-250 fixed top-0 bottom-0 overflow-y-scroll" />
    <RouterView class="fixed top-0 bottom-0 right-0 width flex-auto px-30 md:px-50 lg:px-72 pt-20 md:pt-25 lg:pt-30 pb-40 md:pb-50 lg:pb-60 overflow-y-scroll" />
  </div>
</template>

<style scoped>
.width {
  width: calc(100% - 250px);
}
</style>
