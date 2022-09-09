<template>
   <div class="flex w-full items-center justify-between px-15 leading-21 text-sm text-black-primary font-medium gap-15 mb-15 relative">
      <!-- <i class=""></i> -->
      <p class="w-80 relative">78953 <i class="now"></i></p>
      <p class="w-150">@bahodir</p>
      <p class="w-105">30.08.2022</p>
      <p class="w-160">AA 0000001</p>
      <p class="w-172 line-clamp-1">30101800050014</p>
      <div class="w-220 flex justify-between items-center">
         <p class=" text-yellow-primary bg-yellow-secondary px-5 py-3 text-xs rounded-20 uppercase leading-15">Javob berilmadi</p>
         <!-- <router-link :to="{path: '/question-detail', query: {item: JSON.stringify(props.id)}}" role="button" class="bg-gray-primary w-11 h-11 flex justify-center p-3 rounded-full">
             <i class="icon-chevron-thin-right"></i>
         </router-link> -->
         <router-link :to="{ path: '/passport' }">
            <div class="w-40 h-40 rounded-full bg-white-secondary flex items-center justify-center">
               <img src="@/assets/images/arrow-right-s.png" class="w-20 h-20" alt="">
            </div>
         </router-link>
      </div>
   </div>
</template>


<style scoped>
.now {
   content: '';
   width: 4px;
   height: 4px;
   border-radius: 50%;
   background: #f00;
   position: absolute;
   top: 50%;
   left: -11px;
   transform: translateY(-50%);
}
</style>