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
            <div class="bg-white-primary p-20 md:p-30 shadow-lg rounded-15 z-0"
               :class="data.display ? 'z-0 scale-100 animate-blowUp' : ''">
               <div class="flex items-center justify-between mb-30">
                  <h2 class="text-xl font-semibold text-black-primary">{{ data.formInfo.id === null ? 'Yangi manager qo‘shish' : 'Tahrirlash' }}</h2>
                  <i @click="reset(data.formInfo); data.display = false" class="cursor-pointer icon-close text-xl" />
               </div>
   
               <form @submit.prevent="submit" class="space-y-30 min-w-480">
                  <div class="grid grid-cols-1 items-center gap-15">
                     <input type="text" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Username">
                     <input type="text" name="" id="" class="text-sm leading-19 placeholder:text-black-secondary text-black-primary px-20 py-16 border border-gray-secondary bg-white-secondary outline-none w-full rounded" required placeholder="Lavozimi">
                  </div>
                  
                  <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded text-sm font-medium text-white-primary leading-21" role="button" type="submit">Qo’shish</button>
               </form>
            </div>
         </div>
      </Modal>
   </template>
   