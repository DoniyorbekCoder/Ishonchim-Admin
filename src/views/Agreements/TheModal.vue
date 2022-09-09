<script setup lang="ts">
import { inputDate, postPutCategory, reset, tabs } from '@/services/categories';
import type { Category, Form } from '@/services/categories'
import { defineAsyncComponent, reactive, ref } from 'vue'
const Editor =  defineAsyncComponent(() =>
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
const data = reactive<{display: boolean, formInfo: Form, error: boolean}>({
    display: false,
    error: false,
    formInfo: {
        id: null,
        name: { list: [{code: 'ar', value: ''}, {code: 'eng',value: ''},{code: 'oz',value: ''},{code:'ru',value: ''},{code: 'uz',value: ''}]},
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
    if(data.formInfo.id != null && res[1] !== null) {
        emit('toast', 'Kategoriya yangilandi')
    } else if(res[1] !== null) {
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
        <div class="bg-white-primary p-8 shadow-lg rounded-2xl z-0" :class="data.display ? 'z-0 scale-100 animate-blowUp': ''">
        <div class="flex justify-between">
            <h2 class="text-xl font-semibold text-black-primary">{{ data.formInfo.id === null ? 'Yangi kategoriya qo‘shish' : 'Tahrirlash' }}</h2>
            <i @click="reset(data.formInfo); data.display = false" class="cursor-pointer icon-close text-xl" />
        </div>
        <form action="" @submit.prevent="submit" class="w-102">
            <div class="flex flex-col mt-12 mb-8">
                <div v-if="data.error" class="text-red-primary mb-3.5">
                    Iltimos, kategoriya suratini joylang!
                </div>
                <div class="flex items-end">
                    <div class="border border-gray-secondary rounded h-30 w-30 bg-gray-primary mr-3.5">
                        <image-box ref="imageRef" class="rounded h-30 w-30" @invalid-input="showError"/>
                    </div>
                </div>
                <div class="flex justify-between border border-gray-secondary bg-gray-primary rounded-3xl mt-3.5">
                    <div v-for="(item) in tabs" :key="item.code" class="cursor-pointer text-sm px-6 py-3.5 rounded-3xl" :class="title.data.code === item.code ? 'bg-green-primary text-white-primary': 'text-black-secondary'" @click="title.data = item">
                        {{item.lang}}
                    </div>
                </div>
                <div class="flex flex-col">
                    <input type="text" v-for="(item) in data.formInfo.name.list" v-show="item.code == title.data.code" :key="item.code" v-model="data.formInfo.name.list[title.data.index].value" class="border border-gray-secondary mt-3.5 w-100 h-11.5 bg-gray-primary text-sm leading-4 rounded py-4 px-5 placeholder:text-black-secondary focus:outline-none text-black-primary font-medium placeholder:font-normal" :placeholder="title.data.project" required>
                </div>
            </div>
            <button class="px-8 py-3.5 bg-green-primary text-white-primary rounded" type="submit">{{ data.formInfo.id === null ? 'Qo‘shish' : 'O‘zgarishlarni saqlash' }}</button>
        </form>
        </div>
    </div>
    </Modal>
</template>
    