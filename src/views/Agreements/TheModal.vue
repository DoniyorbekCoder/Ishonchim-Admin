<script setup lang="ts">
import { reactive, ref } from 'vue'
// import { reset } from '@/services/agreement'
import type { Contract, Form } from '@/services/agreement'

const tab = ref(1)
const imageRef = ref()
const emit = defineEmits(["submit", "toast"])
const data = reactive<{ display: boolean, error: boolean }>({
    display: false,
    error: false,
    // formInfo: {
    //     id: null,

    // }
});

async function assign(item: Contract) {
    // Object.assign(data.formInfo, item)
    // setTimeout(() => {
    //     imageRef.value.setImage(item.image)
    // }, 100)
}

function open(item: Contract) {
    data.display = true
    // if (item.id !== undefined) {
    //     assign(item)
    // } else {
    //     reset(data.formInfo)
    // }
}

async function submit() {
    emit("submit")
    // const image = await imageRef.value.getImage()
    // postPutCategory(data.formInfo, image).then((res) => {
    // if(data.formInfo.id != null && res[1] !== null) {
    //     emit('toast', 'Kategoriya yangilandi')
    // } else if(res[1] !== null) {
    //     emit('toast', 'Yangi kategoriya qo‘shildi')
    // }
    // })
    data.display = false
}

function tabClick(num: number) {
    if(num == 1 && tab.value != 1){
        tab.value = 1;
    } else if(num == 2 && tab.value != 2){
        tab.value = 2;
    } else if(num == 3 && tab.value != 3){
        tab.value = 3;
    } else if(num == 1 && tab.value == 1){
        tab.value = 0;
    } else if(num == 2 && tab.value == 2){
        tab.value = 0;
    } else if(num == 3 && tab.value == 3){
        tab.value = 0;
    }
}

defineExpose({
    open
})
</script>

<template>
    <Modal v-if="data.display">
        <div class="openModal h-screen flex fixed top-0 left-0 w-full justify-center items-center">
            <div class="bg-white-primary p-20 md:p-30 shadow-lg rounded-15 z-0 w-483" :class="data.display ? 'z-0 scale-100 animate-blowUp' : ''">
                <div class="flex items-center justify-between mb-15">
                    <h2 class="text-xl font-semibold text-black-primary">Shartnomalarni filterlash</h2>
                    <img @click="data.display = false; tab = 1" src="@/assets/images/close-black.png" class="cursor-pointer w-24 h-24" alt="">
                    <!-- <img @click="reset(data.formInfo); data.display = false" src="@/assets/images/close-black.png" class="cursor-pointer w-24 h-24" alt=""> -->
                </div>

                <div class="mb-30 ">
                    <div class="contentBox overflow-hidden bg-white-primary" :class="tab == 1 ? 'active' : ''">
                        <div class="header flex items-center justify-between py-15" @click="tabClick(1)">
                            <p class="font-semibold text-base2 leading-21 text-black-primary">Tartiblash</p>
                            <div class="w-40 h-40 flex items-center justify-center bg-white-secondary rounded-full border border-gray-secondary">
                                <img class="w-21 h-21" src="@/assets/images/arrow.png" alt="">
                            </div>
                        </div>
                        <div class="title text-black-primary pb-10">
                            <form action="/action_page.php">
                              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                              <label for="vehicle1"> I have a bike</label><br>
                              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                              <label for="vehicle2"> I have a car</label><br>
                              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                              <label for="vehicle3"> I have a boat</label><br><br>
                            </form>
                        </div>
                    </div>
                    <div class="contentBox overflow-hidden bg-white-primary border-y border-gray-secondary" :class="tab == 2 ? 'active' : ''">
                        <div class="header flex items-center justify-between py-15" @click="tabClick(2)">
                            <p class="font-semibold text-base2 leading-21 text-black-primary">Tartiblash</p>
                            <div class="w-40 h-40 flex items-center justify-center bg-white-secondary rounded-full border border-gray-secondary">
                                <img class="w-21 h-21" src="@/assets/images/arrow.png" alt="">
                            </div>
                        </div>
                        <div class="title text-black-primary pb-10">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quam molestiae autem nemo! Iusto ipsa optio adipisci sequi minus aliquid, ducimus, maxime, perferendis quia cum deserunt nulla quo assumenda beatae!</p>
                        </div>
                    </div>
                    <div class="contentBox overflow-hidden bg-white-primary" :class="tab == 3 ? 'active' : ''">
                        <div class="header flex items-center justify-between py-15" @click="tabClick(3)">
                            <p class="font-semibold text-base2 leading-21 text-black-primary">Tartiblash</p>
                            <div class="w-40 h-40 flex items-center justify-center bg-white-secondary rounded-full border border-gray-secondary">
                                <img class="w-21 h-21" src="@/assets/images/arrow.png" alt="">
                            </div>
                        </div>
                        <div class="title text-black-primary pb-10">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quam molestiae autem nemo! Iusto ipsa optio adipisci sequi minus aliquid, ducimus, maxime, perferendis quia cum deserunt nulla quo assumenda beatae!</p>
                        </div>
                    </div>
                </div>

                <button class="bg-blue-primary flex items-center px-30 py-15 gap-5 rounded text-sm font-medium text-white-primary leading-21" role="button" type="submit">Filterlash</button>
            </div>
        </div>
    </Modal>
</template>

<style scoped>
    .contentBox {
        width: 100%;
        height: 70px;
        transition: 0.5s;
        overflow: hidden;
    }
    .contentBox.active {
        width: 100%;
        height: 250px;
        overflow: hidden;
    }
    .contentBox  .title {
        opacity: 0;
        transition: 0.5s;
        transform: translateY(200px);
    }
    .contentBox.active .title {
        opacity: 1;
        transition: 0.5s;
        transform: translateY(0px);
    }
</style>
    