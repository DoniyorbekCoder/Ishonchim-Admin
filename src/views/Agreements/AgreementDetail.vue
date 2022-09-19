<script setup lang="ts">
import router from '@/router'
import { useRoute } from 'vue-router';
import { reactive, ref, defineAsyncComponent } from 'vue';
import { CLOSE_LOADING_MODAL, OPEN_LOADING_MODAL, OPEN_DELETE_MODAL, _deleteModal, _loading, _toast } from '@/store';

import { getContract } from '@/services/agreement';
import type { Contract } from '@/services/agreement';

const route = useRoute()
const data = reactive<{formInfo: Contract}>({
  formInfo: {
    id: 0,
    lender: {
        id: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        birthday: '',
        isMan: false,
        bio: '',
        balance: 0,
        phone: '',
        jobs: '',
        token: '',
        type: '',
        image: '',
        inn: '',
        passport: { number: '', pnfl: '', selfie: '', image: ''},
        companies: [],
        partners: [],
        code: '',
        contractCount: 0,
        partnerCount: 0
    },
    debtor: {
        id: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        birthday: '',
        isMan: false,
        bio: '',
        balance: 0,
        phone: '',
        jobs: '',
        token: '',
        type: '',
        image: '',
        inn: '',
        passport: { number: '', pnfl: '', selfie: '', image: ''},
        companies: [],
        partners: [],
        code: '',
        contractCount: 0,
        partnerCount: 0
    },
    type: {
        id: null,
        name: {uz: '', ru: '', eng: ''}
    },
    returnType: {
        id: null,
        name: {uz: '', ru: '', eng: ''}
    },
    amount: 0,
    lenderConditions: '',
    debtorConditions: '',
    description: '',
    manager: {
        id: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        birthday: '',
        isMan: false,
        bio: '',
        balance: 0,
        phone: '',
        jobs: '',
        token: '',
        type: '',
        image: '',
        inn: '',
        passport: { number: '', pnfl: '', selfie: '', image: ''},
        companies: [],
        partners: [],
        code: '',
        contractCount: 0,
        partnerCount: 0
    },
    currency: {
        id: null,
        name: {uz: '', ru: '', eng: ''}
    },
    debtorStatus: '',
    lenderStatus: '',
    status: '',
    createdAt: '',
    updatedAt: '',
    payments: [],
  },
});

async function assign() {
  const id = JSON.parse(String(route.query.id))
  OPEN_LOADING_MODAL()
  const [error, response] = await getContract(id)
  const item = response
  CLOSE_LOADING_MODAL()
  Object.assign(data.formInfo, response)
}

assign()
</script>

<template>
<div class="w-full overflow-y-scroll">
    <div class="flex items-center justify-between mb-36">
        <div class="flex items-center">
            <div @click="router.go(-1)" class="bg-white-primary flex items-center justify-center shrink-0 rounded-full h-51 w-51" role="button">
                <img class="w-24 h-24" src="@/assets/images/arrow-left.png" alt="">
            </div>
            <p class="font-bold text-black-primary text-xl leading-29 ml-15">Shartnoma</p>
        </div>

        <div role="button" class="bg-red-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full border border-red-primary" @click="OPEN_DELETE_MODAL({ id: data.formInfo.id, text: 'Diqqat, shartnoma o‘chirishga aminmisiz?', title: 'title', url: ''})">
            <img class="w-24 h-24" src="@/assets/images/delete.png" alt="">
        </div>
    </div>

    <div class="bg-white-primary rounded-15 p-20 md:p-25 lg:p-30 space-y-20 md:space-y-25 lg:space-y-30">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 rounded-5 bg-white-secondary p-15 items-center">
            <div class="w-full relative">
                <p class="font-medium text-sm uppercase text-yellow-primary py-3 px-10 rounded-15 mb-5 inline-block bg-yellow-secondary">Hali muddat bor</p>
                <p class="font-bold text-lg leading-30 text-black-primary">15,000,000 so‘m</p>
            </div>
            <div class="flex items-center gap-10">
                <i class="icon-article"></i>
                <p class="text-sm leading-17 font-semibold text-black-secondary">Turi: <span class="text-sm leading-17 font-semibold text-black-primary">Qarz shartnomasi</span></p>
            </div>
            <div class="flex items-center gap-10">
                <i class="icon-article"></i>
                <p class="text-sm leading-17 font-semibold text-black-secondary">Qaytarish: <span class="text-sm leading-17 font-semibold text-black-primary">08.08.2022</span></p>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-25 lg:gap-30">
            <div class="bg-white-secondary rounded flex flex-col">
                <div class="flex gap-15  p-15 pb-30 border-b border-white-primary">
                    <div class="w-50 h-50 rounded overflow-hidden">
                        <img class="w-full h-full object-cover rounded" src="@/assets/images/9.png" alt="" />
                    </div>
                    <div class="w-auto space-y-5">
                        <p class="font-medium text-sm uppercase text-yellow-primary py-3 px-10 rounded-15 mb-5 inline-block bg-yellow-secondary">Qarzdor</p>
                        <p class="font-semibold text-base2 text-black-primary leading-22 font-inter">Qahhorbek Saidakbarov</p>
                        <p class="font-light text-sm leading-17 text-black-secondary mb-10">@qahhorjon · Sotuvchi</p>
                        <p class="text-sm2 leading-22 text-black-primary">+998 (97) 796-39-62</p>
                    </div>
                </div>
                <div class="p-15 space-y-5 flex flex-col">
                    <p class="font-semibold text-base2 leading-21 text-black-primary">Majburiyatlari</p>
                    <p class="text-sm leading-21 text-black-secondary flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat nibh id convallis imperdiet tincidunt scelerisque. Scelerisque</p>
                </div>
            </div>
            <div class="bg-white-secondary rounded flex flex-col">
                <div class="flex gap-15  p-15 pb-30 border-b border-white-primary">
                    <div class="w-50 h-50 rounded overflow-hidden">
                        <img class="w-full h-full object-cover rounded" src="@/assets/images/9.png" alt="" />
                    </div>
                    <div class="w-auto space-y-5">
                        <p class="font-medium text-sm uppercase text-yellow-primary py-3 px-10 rounded-15 mb-5 inline-block bg-yellow-secondary">Qarzdor</p>
                        <p class="font-semibold text-base2 text-black-primary leading-22 font-inter">Qahhorbek Saidakbarov</p>
                        <p class="font-light text-sm leading-17 text-black-secondary mb-10">@qahhorjon · Sotuvchi</p>
                        <p class="text-sm2 leading-22 text-black-primary">+998 (97) 796-39-62</p>
                    </div>
                </div>
                <div class="p-15 space-y-5 flex flex-col">
                    <p class="font-semibold text-base2 leading-21 text-black-primary">Majburiyatlari</p>
                    <p class="text-sm leading-21 text-black-secondary flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat nibh id convallis imperdiet tincidunt scelerisque. Scelerisque id convallis imperdiet tincidunt scelerisque. Scelerisque</p>
                </div>
            </div>
        </div>
        <div>
            <p class="font-semibold text-base2 leading-21 text-black-primary">Qo‘shimcha ma‘lumotlar</p>
            <p class="text-sm leading-21 text-black-secondary max-w-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sem sit id viverra tellus eros, pharetra augue. Enim pretium, at at felis, sed fermentum sit dui. Orci facilisis sed facilisi tortor. Odio molestie sit risus laoreet. Enim pretium, at at felis, sed fermentum sit dui. Orci facilisis sed facilisi tortor. Odio molestie sit risus laoreet.</p>
        </div>
    </div>

        
</div>
</template>