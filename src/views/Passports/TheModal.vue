<script setup lang="ts">
import { inputDate, postPutCategory, reset, tabs } from '@/services/categories';
import type { Category, Form } from '@/services/categories'
import { defineAsyncComponent, reactive, ref } from 'vue'
const Editor = defineAsyncComponent(() =>
   import('@/components/TextEditor.vue')
)
const imageRef = ref()
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
   display: false,
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
   const image = await imageRef.value.getImage()
   postPutCategory(data.formInfo, image).then((res) => {
      if (data.formInfo.id != null && res[1] !== null) {
         emit('toast', 'Kategoriya yangilandi')
      } else if (res[1] !== null) {
         emit('toast', 'Yangi kategoriya qo‘shildi')
      }
   })
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
      <div class="openModal h-screen flex items-center fixed top-0 left-0 w-full justify-center">
         <div class="bg-white-primary p-20 md:p-30 shadow-lg rounded-15 z-0 space-y-30"
            :class="data.display ? 'z-0 scale-100 animate-blowUp' : ''">
            <div class="flex items-center justify-between">
               <h2 class="text-xl font-semibold text-black-primary">Rad etish</h2>
               <i @click="reset(data.formInfo); data.display = false" class="cursor-pointer icon-close text-xl" />
            </div>
            <textarea
               rows="10" placeholder="Sababni kiriting"
               class="min-w-450 w-full rounded resize-none bg-white-secondary outline-none px-15 md:p-20 py-10 md:py-15 border border-gray-secondary text-sm leading-17 placeholder:to-black-secondary text-black-primary" 
            />

            <button class="bg-red-secondary border border-red-primary flex items-center px-30 py-15 gap-5 rounded"
               role="button">
               <i class="icon-close" />
               <p class="text-sm font-medium text-red-primary leading-21 hidden md:block">Rad etish</p>
            </button>
         </div>
      </div>
   </Modal>
</template>
    