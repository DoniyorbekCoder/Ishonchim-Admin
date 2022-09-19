<script setup lang="ts">
import router from '@/router'
import { useRoute } from 'vue-router';
import { reactive, ref, defineAsyncComponent } from 'vue';
import { CLOSE_LOADING_MODAL, OPEN_LOADING_MODAL, OPEN_DELETE_MODAL, _deleteModal, _loading, _toast } from '@/store';

import { getUser } from '@/services/user';
import type { User } from '@/services/user';

const TheModal = defineAsyncComponent(() => import('./TheModal.vue'))
const AgreementModal = defineAsyncComponent(() => import('../Companies/CompanyModal.vue'))
const AgreementTableTitle = defineAsyncComponent(() => import('@/components/agreement/TableTitle.vue'));
const AgreementTableItem = defineAsyncComponent(() => import('@/components/agreement/TableItem.vue'));
const UserTableTitle = defineAsyncComponent(() => import('@/components/user/TableTitle.vue'));
const UserTableItem = defineAsyncComponent(() => import('@/components/user/TableItem.vue'));

const modalRef = ref()
const route = useRoute()
const data = reactive<{formInfo: User}>({
  formInfo: {
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
});

async function assign() {
  const id = JSON.parse(String(route.query.id))
  OPEN_LOADING_MODAL()
  const [error, response] = await getUser(id)
  const item = response
  CLOSE_LOADING_MODAL()
  Object.assign(data.formInfo, response)
}


function openModal(TheModal: any) {
  modalRef.value.open(TheModal)
}

function openAgreementModal(AgreementModal: any) {
  modalRef.value.open(AgreementModal)
}

assign()
</script>

<template>
   <div class="w-full space-y-30">
      <div class="flex items-center justify-between mb-36">
         <div class="flex items-center">
            <div @click="router.go(-1)" class="bg-white-primary flex items-center justify-center shrink-0 rounded-full h-51 w-51" role="button">
               <img class="w-24 h-24" src="@/assets/images/arrow-left.png" alt="">
            </div>
            <p class="font-bold text-black-primary text-xl leading-29 ml-15">Foydalanuvchi</p>
         </div>
        
         <div class="flex items-center gap-15">
            <button role="button" class="bg-yellow-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full border border-yellow-primary" @click="openModal">
               <img class="w-24 h-24" src="@/assets/images/edit.png" alt="">
            </button>
            <div role="button" class="bg-red-secondary w-44 h-44 shrink-0 flex items-center justify-center rounded-full border border-red-primary" @click="OPEN_DELETE_MODAL({ id: 5, text: 'Diqqat, foydalanuvchini o‘chirishga aminmisiz?', title: 'title', url: 'article'})">
               <img class="w-24 h-24" src="@/assets/images/delete.png" alt="">
            </div>
         </div>
      </div>
   
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 p-20 md:p-25 lg:p-30 bg-white-primary rounded-15">
         <div>
            <div class="w-100 h-100 rounded-15 overflow-hidden mb-15">
               <img src="@/assets/images/9.png" class="w-full h-full object-cover" alt="">
            </div>
            <p class="text-base2 text-black-secondary leading-24">@Qahhorbek · Shifokor</p>
            <p class="font-bold text-xxl leading-48 text-black-primary mb-5">Qahhor Saidov</p>
            <p class="text-base2 leading-24 text-black-primary">(97) 756-79-86</p>
         </div>

         <div class="bg-white-secondary rounded p-15">
            <p class="font-semibold text-base2 leading-24 text-black-primary mb-15">Hujjat</p>
            <p class="font-semibold text-base2 leading-24 text-black-secondary mb-15 flex-wrap">Pass. seriya va raqam: <span class="font-semibold text-base2 leading-24 text-black-primary flex-nowrap">AA 0000001</span></p>
            <p class="font-semibold text-base2 leading-24 text-black-secondary mb-15">PINFL: <span class="font-semibold text-base2 leading-24 text-black-primary">30101800050014</span></p>

            <div class="flex gap-15">
               <div class="idCard w-75 h-50 rounded overflow-hidden">
                  <img src="@/assets/images/passport.png" class="w-full h-full" alt="">
               </div>
               <div class="idCard w-75 h-50 rounded overflow-hidden">
                  <img src="@/assets/images/passport2.png" class="w-full h-full" alt="">
               </div>
            </div>
         </div>
         
         <div class="bg-white-secondary rounded p-15">
            <p class="font-semibold text-base2 leading-24 text-black-primary mb-30">Tizim bo‘yicha</p>
            <p class="font-semibold text-base2 leading-24 text-black-secondary mb-15">Shartnomalar: <span class="font-semibold text-base2 leading-24 text-black-primary">15ta</span></p>
            <p class="font-semibold text-base2 leading-24 text-black-secondary mb-15">Hamkorlar: <span class="font-semibold text-base2 leading-24 text-black-primary">10ta</span></p>
            <p class="font-semibold text-base2 leading-24 text-black-secondary mb-15">Ro‘yxatga kirgan: <span class="font-semibold text-base2 leading-24 text-black-primary">10ta</span></p>
         </div>
      </div>

      <div class="w-full bg-white-primary rounded-15 p-20 md:p-25 lg:p-30">
         <div class="flex items-end justify-between mb-15">
            <p class="font-semibold text-base2 leading-21 text-black-primary">Shartnomalari</p>
            <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button" @click="openAgreementModal">
               <img class="w-24 h-24" src="@/assets/images/add-white.png" alt="">
               <p class="text-sm text-white-primary leading-21">Yangi shartnoma qo‘shish</p>
           </button>
         </div>
         
         <AgreementTableTitle />
         <div class="rounded text-sm text-black-primary font-medium my-15 gap-10">
            <AgreementTableItem v-for="n in 3" />
         </div>
      </div>
   
      <div class="w-full bg-white-primary rounded-15 p-20 md:p-25 lg:p-30">
         <p class="font-semibold text-base2 leading-21 text-black-primary mb-15">Hamkorlari</p>
         <UserTableTitle />
         <div class="rounded text-sm text-black-primary font-medium my-15 gap-10">
            <UserTableItem v-for="n in 2" />
         </div>
      </div>

      <the-modal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: assign })"/>
      <AgreementModal ref="modalRef" @submit="OPEN_LOADING_MODAL" @toast="val => OPEN_NOTIFICATION({text: val, callback: assign })"/>
   </div>
</template>

<style scoped>
   .idCard {
      z-index: 1;
      transition: 0.5s;
   }

   .idCard:hover {
      z-index: 10;
      transform: scale(3);
   }
</style>