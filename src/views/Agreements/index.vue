<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
// import type { Article } from '@/services/article'
// import { getArticles } from '@/services/article'
import { useRouter, useRoute } from 'vue-router'
import { _deleteModal, _loading, _toast, OPEN_DELETE_MODAL, OPEN_LOADING_MODAL, CLOSE_LOADING_MODAL, OPEN_NOTIFICATION } from '@/store'
const route = useRoute()
const router = useRouter()

const TableTitle = defineAsyncComponent(() => import('@/components/agreement/TableTitle.vue'));
const TableItem = defineAsyncComponent(() => import('@/components/agreement/TableItem.vue'));
// const ArticleItem = defineAsyncComponent(() =>
//   import('./ArticleItem.vue')
// );
// const items = ref<{isLoading: boolean, count: number, list: Article[]}>({
//     isLoading: false,
//     count: 0,
//     list: []
// })

// async function changeQuery(param: { key: string, value:number }) {
//     const query = {
//         ...route.query
//     }
//     if (param.key == 'type') {
//       query['offset'] = '0'
//     }
//     query[param.key] = String(param.value)
//     await router.replace({ query })
//     getItems()
// }
const searchInput = ref('')
// async function getItems() {
//     const { type = 1, offset = 0 } = route.query
//     OPEN_LOADING_MODAL()
//     const [error, response] = await getArticles(Number(type), searchInput.value, Number(offset))
//     CLOSE_LOADING_MODAL()
//     items.value.count = response.count
//     items.value.list = response.list
// }

// getItems()
</script>
<template>
    <div class="w-full overflow-y-scroll">
        <div class="flex justify-between items-center mb-30">
            <p class="text-black-primary text-xl font-bold">Shartnomalar</p>
            <div class="flex gap-15 items-center">
                <button class="bg-blue-secondary border border-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button" @click="openModal">
                    <i class="icon-plus" />
                    <p class="text-sm text-blue-primary font-medium leading-17 hidden md:block">Filterni ochish</p>
                </button>
                <div class="bg-white-primary flex items-center gap-5 p-5 pl-20 rounded" role="button">
                    <i class="icon-search" />
                    <input type="search" name="search" v-model="searchInput" @input="getItems" placeholder="Qidiruv"
                        class="placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm">
                </div>
            </div>
        </div>
        <div class="p-15 rounded-15 bg-white-primary">
            <table-title />
            <div class="rounded my-15">
                <table-item v-for="n in 7" />
            </div>
            <!-- <question-item v-for="question in items.list" :key="question.id" :id="question.id" :title="question.title" :category="question.category" :question="question.question" :answer="question.answer" :slug="question.slug" /> -->
        </div>
        <!-- <base-pagination :active="Math.trunc(Number(route.query.offset)/12) + 1 || 1" :perPage="12" :items="items.count" @change="(val:number) => changeQuery({key: 'offset', value: (val - 1)*12})"/> -->
        <!-- <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: getItems })"/> -->
    </div>
</template>