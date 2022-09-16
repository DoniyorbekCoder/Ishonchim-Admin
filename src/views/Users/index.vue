<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { _deleteModal, _loading, _toast, OPEN_DELETE_MODAL, OPEN_LOADING_MODAL, CLOSE_LOADING_MODAL, OPEN_NOTIFICATION } from '@/store'
import { getUsers } from '@/services/user';
import type { User } from '@/services/user';
const route = useRoute()
const router = useRouter()

const TableTitle = defineAsyncComponent(() => import('@/components/user/TableTitle.vue'));
const TableItem = defineAsyncComponent(() => import('@/components/user/TableItem.vue'))

const TheModal = defineAsyncComponent(() =>
  import('./TheModal.vue')
)

const items = ref<{isLoading: boolean, count: number, list: User[]}>({
    isLoading: false,
    count: 0,
    list: []
})

async function changeQuery(param: { key: string, value:number }) {
    const query = {
        ...route.query
    }
    if (param.key == 'type') {
      query['offset'] = '0'
    }
    query[param.key] = String(param.value)
    await router.replace({ query })
    getItems()
}

const modalRef = ref()
const searchInput = ref('')
async function getItems() {
    const { type = 1, offset = 0 } = route.query
    OPEN_LOADING_MODAL()
    const [error, response] = await getUsers(Number(type), searchInput.value, Number(offset))
    CLOSE_LOADING_MODAL()
    items.value.count = response.count
    items.value.list = response.list
}

function openModal(val: any) {
  modalRef.value.open(val)
}

getItems()
</script>
<template>
<div class="w-full">
    <div class="flex justify-between items-center mb-30">
        <p class="text-black-primary text-xl font-bold">Foydalanuvchilar</p>
        <div class="flex gap-15 items-center">
            <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button" @click="openModal">
                <i class="icon-plus" />
                <p class="text-sm text-white-primary font-medium leading-21 hidden md:block">Yangi foydalanuvchi qo‘shish</p>
            </button>
            <div class="bg-white-primary flex items-center gap-5 p-5 pl-20 rounded" role="button">
                <i class="icon-search" />
                <input type="search" name="search" v-model="searchInput" @input="getItems" placeholder="Qidiruv"
                    class="placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm">
            </div>
        </div>
    </div>
    <div class="w-full p-15 rounded-15 bg-white-primary">
        <table-title />
        <div class="rounded text-sm text-black-primary font-medium my-15 gap-10">
            <table-item  v-for="item in items.list" :key="item.id" :id="item.id" :username="item.username" :password="item.password" :firstName="item.firstName" :lastName="item.lastName" :birthday="item.birthday" :isMan="item.isMan" :bio="item.bio" :balance="item.balance" :phone="item.phone" :jobs="item.jobs" :token="item.token" :type="item.type" :image="item.image" :passport="item.passport"  />
        </div>
    </div>
    <base-pagination :active="Math.trunc(Number(route.query.offset)/6) + 1 || 1" :perPage="6" :items="items.count" @change="(val:number) => changeQuery({key: 'offset', value: (val - 1)*6})"/>
    <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: getItems })"/>
</div>
</template>