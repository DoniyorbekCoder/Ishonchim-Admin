<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
// import type { Category } from '@/services/categories'
// import { getCategories } from '@/services/categories'
import { useRouter, useRoute } from 'vue-router'
import { _deleteModal, _loading, _toast, OPEN_DELETE_MODAL, OPEN_LOADING_MODAL, CLOSE_LOADING_MODAL, OPEN_NOTIFICATION } from '@/store'
const route = useRoute()
const router = useRouter()
// const CategoryItem = defineAsyncComponent(() =>
//   import('./CategoryItem.vue')
// );
// const TheModal = defineAsyncComponent(() =>
//   import('./TheModal.vue')
// )
// const items = ref<{isLoading: boolean, count: number, list: Category[]}>({
//     isLoading: false,
//     count: 0,
//     list: []
// })

// async function changeQuery(param: { key: string, value:number }) {
//     const query = {
//         ...route.query
//     }
//     query[param.key] = String(param.value)
//     await router.replace({ query })
//     getItems()
// }
const modalRef = ref()
// const searchInput = ref('')
// async function getItems() {
//     const { offset = 0 } = route.query
//     OPEN_LOADING_MODAL()
//     const [error, response] = await getCategories(searchInput.value, Number(offset))
//     CLOSE_LOADING_MODAL()
//     items.value.count = response.count
//     items.value.list = response.list
// }

function openModal(val: any) {
  modalRef.value.open(val)
}
    // getItems()
</script>
<template>
  <div class="w-full overflow-y-scroll">
    <div class="flex justify-between items-center mb-30">
      <p class="text-black-primary text-xl font-bold">Kategoriyalar</p>
      <div class="flex gap-15 items-center">
        <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button" @click="openModal">
          <i class="icon-plus" />
          <p class="text-sm text-white-primary leading-21">Yangi kategoriya qo‘shish</p>
        </button>
        <div class="bg-white-primary flex items-center gap-5 p-5 pl-20 rounded" role="button">
          <i class="icon-search" />
          <input type="search" name="search" v-model="searchInput" @input="getItems" placeholder="Qidiruv"
            class="placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm">
        </div>
      </div>
    </div>
    <div class="p-15 rounded-15  bg-white-primary">

      <!-- <category-item v-for="item in items.list" :id="item.id" :type="item.type" :image="item.image" :name="item.name"   :key="item.id" @edit="openModal" @remove="OPEN_DELETE_MODAL({ id: item.id, text: 'Diqqat, kategoriyani o‘chirishga aminmisiz?', title: `${item.name.list[2].value}`, url: 'category', callback: getItems })"/> -->
    </div>
    <!-- <base-pagination :active="Math.trunc(Number(route.query.offset)/12) + 1 || 1" :perPage="12" :items="items.count" @change="(val:number) => changeQuery({key: 'offset', value: (val - 1)*12})"/> -->
    <!-- <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: getItems })"/> -->
  </div>
</template>
    