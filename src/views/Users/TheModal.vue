<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type User, type Form, reset, postPutUser } from '@/services/user'

const openTab = ref(1)
const imageRef = ref()
const emit = defineEmits(["submit", "toast"])
const data = reactive<{ display: boolean, formInfo: Form, error: boolean }>({
   display: false,
   error: false,
   formInfo: {
      id: null,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      birthday: '',
      isMan: null,
      bio: '',
      balance: null,
      phone: '',
      jobs: '',
      token: '',
      type: null,
      image: '',
      inn: '',
      passport: {
         number: '', 
         pnfl: '',
         selfie: '', 
         image: '', 
      },
      companies: [],
      partners: [],
      code: '',
      contractCount: null,
      partnerCount: null
   }
});

async function assign(item: User) {
   Object.assign(data.formInfo, item)
   setTimeout(() => {
      imageRef.value.setImage(item.image)
   }, 100)
}

function open(item: User) {
   data.display = true
   if (item.id !== undefined) {
      assign(item)
   } else {
      reset(data.formInfo)
   }
}

async function submit() {
   emit("submit")
   // const image = await imageRef.value.getImage()
   // postPutUser(data.formInfo, image).then((res) => {
   //    if (data.formInfo.id != null && res[1] !== null) {
   //       emit('toast', 'Kategoriya yangilandi')
   //    } else if (res[1] !== null) {
   //       emit('toast', 'Yangi kategoriya qo‘shildi')
   //    }
   // })
   data.display = false
}

function showError() {
   data.error = true
   setTimeout(() => {
      data.error = false
   }, 3000);
}
defineExpose({
   open
})
</script>
   
<template>
   <Modal v-if="data.display">
      <div class="openModal h-screen flex fixed top-0 left-0 w-full justify-center" :class="openTab == 1 ? 'items-center' : 'items-start'">
         <div class="bg-white-primary p-20 md:p-30 shadow-lg rounded-15 z-0"
            :class="data.display ? 'z-0 scale-100 animate-blowUp' : ''">
            <div class="flex items-center justify-between mb-30">
               <h2 class="text-xl font-semibold text-black-primary">{{ data.formInfo.id === null ? 'Yangi foydalanuvchi qo‘shish' : 'Tahrirlash' }}</h2>
               <img @click="reset(data.formInfo); data.display = false; openTab = 1" src="@/assets/images/close-black.png" class="cursor-pointer w-24 h-24" alt="">
            </div>

            <form @submit.prevent="submit" class="space-y-30" :class="openTab == 1 ? 'min-w-480' : 'min-w-480 md:min-w-570 lg:min-w-800'">
               <div class="bg-white-secondary p-3 rounded-30 border border-gray-secondary inline-block">
                  <p @click="openTab = 1" class="modalTab font-medium text-base2 text-black-secondary px-24 py-14 rounded-30 inline-block border" :class="openTab == 1 ? 'border border-blue-primary text-blue-primary bg-blue-secondary': 'border-transparent'">Asosiy ma’lumotlar</p>
                  <p @click="openTab = 2" class="modalTab font-medium text-base2 text-black-secondary px-24 py-14 rounded-30 inline-block border" :class="openTab == 2 ? 'border border-blue-primary text-blue-primary bg-blue-secondary': 'border-transparent'">Barcha ma’lumotlar</p>
               </div>

               <div class="space-y-15">
                  <div v-if="openTab == 2" class="rounded w-115 h-115 bg-white-secondary border border-gray-secondary">
                     <image-box ref="imageRef" class="rounded w-full h-full" />
                  </div>
                  <div class="grid items-center gap-15" :class="openTab == 1 ? 'grid-cols-1': 'grid-cols-1 lg:grid-cols-2'">
                     <input type="number" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Telefon raqam">
                     <input type="text" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Username">
                     <input type="password" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Parol">
                     <input type="password" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Parolni qayta kiriting">
                     <input v-if="openTab == 2" type="text" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" maxlength="9" placeholder="Pasport seriya va raqam">
                     <input v-if="openTab == 2" type="number" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" placeholder="PINFL">
                  </div>
                  <div v-if="openTab == 2" class="space-y-15">
                     <div  class="text-red-primary">
                        Iltimos, Passport rasmini joylang!
                     </div>
                     <div class="flex gap-15">
                        <div class="rounded w-156 h-104 bg-white-secondary border border-gray-secondary">
                           <image-box ref="imageRef" class="rounded w-full h-full" @invalid-input="showError"/>
                           <!-- <p class="text-sm leading-17 text-black-secondary">Passport rasmi</p> -->
                        </div>
                        <div class="rounded w-156 h-104 bg-white-secondary border border-gray-secondary">
                           <image-box ref="imageRef" class="rounded w-full h-full" @invalid-input="showError"/>
                        </div>
                     </div>
                  </div>
               </div>

               <hr v-if="openTab == 2" class="border-t border-gray-secondary">

               <div v-if="openTab == 2">
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-15 mb-15">
                     <select class="py-16 px-20 bg-white-secondary border border-gray-secondary outline-none text-black-primary rounded">
                        <option value="''" disabled selected>Kasb</option>
                        <option value="1">IOS Dasturchi</option>
                        <option value="2">Android Dasturchi</option>
                        <option value="3">Web Dasturchi</option>
                     </select>
                     <input type="text" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" placeholder="Batafsil">
                     <!-- <the-select @select="addTags" :url="'tags'" title="Teglar" />
                     <div>
                        <span class="mr-3.5" v-for="item in data.formInfo.tags" :key="item.id">{{item.name.list[3].value}}<i class="ri-close-line cursor-pointer" @click="removeTag(item)"></i></span>
                     </div> -->
                  </div>
                  <div class="w-full flex justify-center">
                     <div class="w-60 h-60 rounded-full bg-white-secondary border border-gray-secondary flex items-center justify-center cursor-pointer">
                        <img src="../../assets/images/add-black.png" class="w-28 h-28" alt="">
                     </div>
                  </div>
               </div>
               
               <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded text-sm font-medium text-white-primary leading-21" role="button" type="submit">Qo’shish</button>
            </form>
         </div>
      </div>
   </Modal>
</template>