<script setup lang="ts">

</script>

<template>
   <Modal>
      <div class="openModal h-screen flex items-center fixed top-0 left-0 w-full justify-center">
         <div class="bg-white-primary p-20 md:p-30 shadow-lg rounded-15 z-0 space-y-30"> <!--:class="data.display ? 'z-0 scale-100 animate-blowUp' : ''"-->
            <div class="flex items-center justify-between">
               <h2 class="text-xl font-semibold text-black-primary">Rad etish</h2>
               <!-- <i @click="reset(data.formInfo); data.display = false" class="cursor-pointer icon-close text-xl" /> -->
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
    