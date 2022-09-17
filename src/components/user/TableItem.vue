<script setup lang="ts">
import { phoneNum } from '@/services/phoneFunction';

const props = defineProps({
   id:            { type: Number, required: true },
   username:      { type: String, required: true },
   // phone:         { type: String, required: true },
   passport:      { type: Object, required: true },
   contractCount: { type: Number, required: true },
   partnerCount:  { type: Number, required: true },
})
</script>

<template>
   <router-link :to="{path: '/user', query:{id: JSON.stringify(props.id)}}" role="button" class="flex w-full items-center justify-between px-15 leading-21 text-sm text-black-primary font-medium gap-15 mb-15">
      <div class="w-115 flex items-center gap-15">
         <div class="max-w-50 max-h-50 overflow-hidden rounded-5 border border-white-secondary shrink-0">
            <img class="w-full h-full object-cover" src="@/assets/images/9.png" alt="">
         </div>
         <p>{{props.id}}</p>
      </div>
      <p class="w-150 line-clamp-1">{{props.username}}</p>
      <p class="w-200">{{phoneNum('+998978965566')}}</p>
      <p class="w-115">AA 0000001</p>
      <p class="w-115">{{props.contractCount}}ta</p>
      <div class="w-175 flex justify-between items-center">
         <p>{{props.partnerCount}}ta</p>
         <div class="w-40 h-40 rounded-full bg-white-secondary flex items-center justify-center">
            <img src="@/assets/images/arrow-right-s.png" class="w-20 h-20" alt="">
         </div>
      </div>
   </router-link>
</template>