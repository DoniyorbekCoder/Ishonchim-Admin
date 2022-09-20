<script setup lang="ts">
   const props = defineProps({
      id:             { type: Number, required: false },
      amount:         { type: Number, required: false },
      // phone:          { type: String, required: true },
      // passport:       { type: Object, required: true },
      // contractCount:  { type: Number, required: true },
      // partnerCount:   { type: Number, required: true },
   })
   </script>

<template>
   <router-link :to="{path: '/agreement', query:{id: JSON.stringify(props.id)}}" role="button" class="flex w-full items-center justify-between px-15 leading-21 text-sm text-black-primary font-medium gap-15 mb-15">
      <p class="w-50">{{props.id}}</p>
      <p class="w-180">{{props.amount}} so‘m</p>
      <p class="w-150">Qarz shartnomasi</p>
      <p class="w-130">08.09.2022</p>
      <p class="w-200 line-clamp-1">@qahhorjon · @narimon</p>
      <div class="w-200 flex justify-between items-center">
         <p class=" text-yellow-primary bg-yellow-secondary px-5 py-3 text-xs rounded-20 uppercase leading-15">Hali muddat bor</p>
         <div class="w-40 h-40 rounded-full bg-white-secondary flex items-center justify-center">
            <img src="@/assets/images/arrow-right-s.png" class="w-20 h-20" alt="">
         </div>
      </div>
   </router-link>
</template>