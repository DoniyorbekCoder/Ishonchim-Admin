<template>
    <div class="flex w-full items-center justify-between px-15 leading-21 text-sm text-black-primary font-medium gap-15 mb-15">
        <div class="w-115 flex items-center gap-15">
            <div class="max-w-50 max-h-50 overflow-hidden rounded-5 border border-white-secondary shrink-0">
                <img src="@/assets/images/16.png" alt="">
            </div>
            <p>001</p>
        </div>
        <p class="w-150">Mimsoft</p>
        <p class="w-200">1020304050607080</p>
        <p class="w-115">5ta</p>
        <p class="w-115">15ta</p>
        <div class="w-175 flex justify-between items-center">
            <p>10ta</p>
            <!-- <router-link :to="{path: '/question-detail', query: {item: JSON.stringify(props.id)}}" role="button" class="bg-gray-primary w-11 h-11 flex justify-center p-3 rounded-full">
              <i class="icon-chevron-thin-right"></i>
          </router-link> -->
            <router-link :to="{ path: '/company' }">
                <div class="w-40 h-40 rounded-full bg-white-secondary flex items-center justify-center">
                    <img src="@/assets/images/arrow-right-s.png" class="w-20 h-20" alt="">
                </div>
            </router-link>

        </div>
    </div>
</template>