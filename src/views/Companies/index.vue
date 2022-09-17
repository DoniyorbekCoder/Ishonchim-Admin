<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { _deleteModal, _loading, _toast, OPEN_DELETE_MODAL, OPEN_LOADING_MODAL, CLOSE_LOADING_MODAL, OPEN_NOTIFICATION } from '@/store'
import { getCompanies } from '@/services/company';
import type { Company } from '@/services/company';
const route = useRoute()
const router = useRouter()


const TheModal = defineAsyncComponent(() => import('./CompanyModal.vue'))
// const CompanyModal = defineAsyncComponent(() => import('./CompanyModal.vue'))
// const MenejerModal = defineAsyncComponent(() => import('./MenegerModal.vue'))
const TableTitle = defineAsyncComponent(() => import('@/components/company/TableTitle.vue'));
const TableItem = defineAsyncComponent(() => import('@/components/company/TableItem.vue'));


const items = ref<{isLoading: boolean, count: number, list: Company[]}>({
    isLoading: false,
    count: 0,
    list: []
})

async function changeQuery(param: { key: string, value:number }) {
    const query = {
        ...route.query
    }
    query[param.key] = String(param.value)
    await router.replace({ query })
    getItems()
}

const modalRef = ref()
const searchInput = ref('')
async function getItems() {
    const { offset = 0 } = route.query
    OPEN_LOADING_MODAL()
    const [error, response] = await getCompanies(searchInput.value, Number(offset))
    CLOSE_LOADING_MODAL()
    items.value.count = response.count
    items.value.list = response.list
}

function openCompanyModal(val: any) {
  modalRef.value.open(val)
}
function openMenejerModal(val: any) {
  modalRef.value.open(val)
}

getItems()
</script>
<template>
    <div class="w-full">
        <div class="flex justify-between items-center mb-30">
            <p class="text-black-primary text-xl font-bold">Kompaniyalar</p>
            <div class="flex gap-15 items-center">
                <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button" @click="openCompanyModal">
                    <img class="w-24 h-24" src="@/assets/images/add-white.png" alt="">
                    <p class="text-sm text-white-primary font-medium leading-21 hidden md:block">Yangi kompaniya qo‘shish</p>
                </button>
                <div class="bg-white-primary flex items-center gap-5 p-5 px-10 rounded" role="button">
                    <img src="../../assets/images/search.png" class="w-18 h-18" alt="">
                    <input type="search" name="search" v-model="searchInput" @input="getItems" placeholder="Qidiruv"
                        class="placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm">
                </div>
            </div>
        </div>
        <div class="w-full p-15 rounded-15 bg-white-primary">
            <table-title />
            <div class="rounded text-sm text-black-primary font-medium my-15 gap-10">
                <table-item v-for="item in items.list" :key="item.id" :id="item.id" :username="item.username" :inn="item.inn" :contractCount="item.contractCount" :partnerCount="item.partnerCount" />
            </div>
        </div>
        <base-pagination :active="Math.trunc(Number(route.query.offset)/6) + 1 || 1" :perPage="6" :items="items.count" @change="(val:number) => changeQuery({key: 'offset', value: (val - 1)*6})"/>
        <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: getItems })"/>
    </div>
</template>