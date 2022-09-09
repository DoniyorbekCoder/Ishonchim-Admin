<script setup lang="ts">
import { inputDate, postPutCategory, reset, tabs } from '@/services/categories';
import type { Category, Form } from '@/services/categories'
import { defineAsyncComponent, reactive, ref } from 'vue'
const Editor = defineAsyncComponent(() =>
   import('@/components/TextEditor.vue')
)
const imageRef = ref()
const openTab = ref(1)
const emit = defineEmits(["submit", "toast"])
const title = reactive({
   data: {
      code: 'oz',
      lang: 'O‘zbek tilida',
      project: 'Nomi',
      index: 2,
   }
})
const data = reactive<{ display: boolean, formInfo: Form, error: boolean }>({
   display: true,
   error: false,
   formInfo: {
      id: null,
      name: { list: [{ code: 'ar', value: '' }, { code: 'eng', value: '' }, { code: 'oz', value: '' }, { code: 'ru', value: '' }, { code: 'uz', value: '' }] },
      image: null,
      type: ''
   }
});

async function assign(item: Category) {
   Object.assign(data.formInfo, item)
   setTimeout(() => {
      imageRef.value.setImage(item.image)
   }, 100)
}

function open(item: Category) {
   title.data = tabs[0]
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
   // postPutCategory(data.formInfo, image).then((res) => {
   //    if (data.formInfo.id != null && res[1] !== null) {
   //       emit('toast', 'Kategoriya yangilandi')
   //    } else if (res[1] !== null) {
   //       emit('toast', 'Yangi kategoriya qo‘shildi')
   //    }
   // })
   console.log("Heelooo");
   
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
               <h2 class="text-xl font-semibold text-black-primary">{{ data.formInfo.id === null ? 'Yangi kompaniya qo‘shish' : 'Tahrirlash' }}</h2>
               <i @click="reset(data.formInfo); data.display = false" class="cursor-pointer icon-close text-xl" />
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
                     <input type="text" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Kompaniya nomi">
                     <input type="text" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Username">
                     <input type="number" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="INN">
                     <input v-if="openTab == 2" type="text" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" placeholder="Manzil">
                  </div>
               </div>

               <hr v-if="openTab == 2" class="border-t border-gray-secondary">

               <div v-if="openTab == 2">
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-15 mb-15">
                     <select class="py-16 px-20 bg-white-secondary border border-gray-secondary outline-none text-black-primary rounded">
                        <option value="''" disabled selected>Soha</option>
                        <option value="1">IOS Dasturchi</option>
                        <option value="2">Android Dasturchi</option>
                        <option value="3">Web Dasturchi</option>
                     </select>
                     <input type="text" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" placeholder="Chuqurroq">
                     <!-- <the-select @select="addTags" :url="'tags'" title="Teglar" />
                     <div>
                        <span class="mr-3.5" v-for="item in data.formInfo.tags" :key="item.id">{{item.name.list[3].value}}<i class="ri-close-line cursor-pointer" @click="removeTag(item)"></i></span>
                     </div> -->
                  </div>
                  <div class="w-full flex justify-center">
                     <div class="w-60 h-60 rounded-full bg-white-secondary border border-gray-secondary flex items-center justify-center cursor-pointer">
                        <img src="../../assets/iconImg/add-black.png" class="w-28 h-28" alt="">
                     </div>
                  </div>
               </div>
               
               <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded text-sm font-medium text-white-primary leading-21" role="button" type="submit">Qo’shish</button>
            </form>
         </div>
      </div>
   </Modal>
</template>