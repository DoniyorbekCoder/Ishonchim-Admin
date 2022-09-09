<script setup lang="ts">
import { reactive, watch, ref, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router'
import router from '@/router'
import { CLOSE_LOADING_MODAL, OPEN_LOADING_MODAL, OPEN_DELETE_MODAL } from '@/store';

</script>

<template>
   <div class="w-full space-y-30">
      <div class="flex items-center justify-between">
         <div class="flex items-center">
            <div @click="router.go(-1)" class="bg-white-primary flex items-center justify-center shrink-0 rounded-full h-51 w-51" role="button">
               <i class="icon-arrow-left"></i>
            </div>
            <p class="font-bold text-black-primary text-xl leading-29 ml-15">Passport bo‘yicha</p>
         </div>
      </div>

      <div class="flex flex-wrap w-full bg-white-primary rounded-15 gap-15 p-10 md:p-15">
         <div class="max-w-300 w-full">
            <div class="w-100 h-100 rounded-15 overflow-hidden mb-15">
               <img src="@/assets/images/9.png" class="w-full h-full object-cover" alt="">
            </div>
            <p class="text-base2 text-black-secondary leading-24">@Qahhorbek · Shifokor</p>
            <p class="font-bold text-xxl leading-48 text-black-primary mb-5">Qahhor Saidov</p>
            <p class="text-base2 leading-24 text-black-primary">(97) 756-79-86</p>
         </div>

         <div class="flex-auto p-10 md:p-15 bg-white-secondary rounded">
            <p class="text-base2 font-semibold text-black-primary leading-24 mb-30">Passport ma’lumotlari</p>

            <div class="flex w-full flex-wrap gap-15">
               <div class="max-w-196 w-full rounded overflow-hidden">
                  <img src="@/assets/images/passport.png" class="w-full h-full object-cover" alt="">
               </div>
               <div class="max-w-196 w-full rounded overflow-hidden">
                  <img src="@/assets/images/passport2.png" class="w-full h-full object-cover" alt="">
               </div>
               <div>
                  <p class="text-sm leading-17 text-black-secondary mb-5">Pass. seriya va raqam</p>
                  <p class="text-base2 leading-22 text-black-primary mb-30">AA 0000001</p>

                  <p class="text-sm leading-17 text-black-secondary mb-5">PINFL</p>
                  <p class="text-base2 leading-22 text-black-primary">30101800050014</p>
               </div>
            </div>
         </div>
      </div>

      <div class="flex gap-15 items-center">
         <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded" role="button">
            <i class="icon-plus" />
            <p class="text-sm font-medium text-white-primary leading-21 hidden md:block">Tasdiqlash</p>
         </button>
         <button class="bg-red-secondary border border-red-primary flex items-center px-30 py-15 gap-5 rounded" role="button" @click="openModal">
            <i class="icon-close" />
            <p class="text-sm font-medium text-red-primary leading-21 hidden md:block">Rad etish</p>
         </button>
      </div>
           
   </div>
</template>