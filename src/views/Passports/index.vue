<script setup lang="ts">
    import { defineAsyncComponent, ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { _deleteModal, _loading, _toast, OPEN_DELETE_MODAL, OPEN_LOADING_MODAL, CLOSE_LOADING_MODAL, OPEN_NOTIFICATION } from '@/store'
    const route = useRoute()
    const router = useRouter()
    
    const TableTitle = defineAsyncComponent(() => import('@/components/passport/TableTitle.vue'));
    const TableItem = defineAsyncComponent(() => import('@/components/passport/TableItem.vue'));

    const searchInput = ref('')
    </script>
    <template>
        <div class="w-full overflow-y-scroll">
            <div class="flex justify-between items-center mb-30">
                <p class="text-black-primary text-xl font-bold">Passport bo‘yicha</p>
                <div class="flex gap-15 items-center">
                    <button class="bg-blue-secondary border border-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button"> <!-- @click="openModal" -->
                        <img src="@/assets/images/filter.png" class="w-21 h-21" alt="">
                        <p class="text-sm font-medium text-blue-primary leading-17 hidden md:block">Filterni ochish</p>
                    </button>
                    <!-- <div class="bg-white-primary flex items-center gap-5 p-5 px-10 rounded" role="button">
                        <img src="../../assets/images/search.png" class="w-18 h-18" alt="">
                        <input type="search" name="search" v-model="searchInput" @input="getItems" placeholder="Qidiruv"
                            class="placeholder:text-gray-primary text-black-primary focus:outline-none py-10 text-sm">
                    </div> -->
                </div>
            </div>
            <div class="p-15 rounded-15 bg-white-primary">
                <table-title />
                <div class="rounded my-15">
                    <table-item v-for="n in 7" />
                </div>
            </div>
            <!-- <base-pagination :active="Math.trunc(Number(route.query.offset)/12) + 1 || 1" :perPage="12" :items="items.count" @change="(val:number) => changeQuery({key: 'offset', value: (val - 1)*12})"/> -->
            <!-- <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: getItems })"/> -->
        </div>
    </template>