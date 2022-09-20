<script setup lang="ts">
    const props = defineProps({
       id:            { type: Number, required: false },
       username:      { type: String, required: false },
       inn:           { type: String, required: false },
    //    menejerCount:  { type: Number, required: false },
       contractCount: { type: Number, required: false },
       partnerCount:  { type: Number, required: false },
    })
    </script>
    

<template>
    <router-link :to="{path: '/company', query:{id: JSON.stringify(props.id)}}" role="button" class="flex w-full items-center justify-between px-15 leading-21 text-sm text-black-primary font-medium gap-15 mb-15">
        <div class="w-115 flex items-center gap-15">
            <div class="max-w-50 max-h-50 overflow-hidden rounded-5 border border-white-secondary shrink-0">
                <img src="@/assets/images/16.png" alt="">
            </div>
            <p>{{props.id}}</p>
        </div>
        <p class="w-150">{{props.username}}</p>
        <p class="w-200">1020304050607080</p>
        <p class="w-115">5ta</p>
        <p class="w-115">{{props.contractCount}}ta</p>
        <div class="w-175 flex justify-between items-center">
            <p>{{props.partnerCount}}ta</p>
            <div class="w-40 h-40 rounded-full bg-white-secondary flex items-center justify-center">
                <img src="@/assets/images/arrow-right-s.png" class="w-20 h-20" alt="">
            </div>
        </div>
    </router-link>
</template>