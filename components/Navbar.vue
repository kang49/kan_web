<template>
    <div class="w-full h-max fixed z-50 xl:flex xl:items-center xl:h-[60px]">
        <div class="px-[10px] transition-all duration-200 xl:px-[30px] xl:h-full xl:w-full xl:items-center" :class="{ 'h-[40px] bg-transparent': !isToggleMenu, 'h-[230px] bg-black': isToggleMenu }">
            <div class="flex justify-between xl:h-full xl:w-full xl:items-center">
                <div class="pt-[10px] xl:pt-[0px] xl:h-max xl:items-center">
                    <h4 class="font-bold text-[16px] xl:w-max xl:text-[20px]" :class="{ 'text-black': !isToggleMenu, 'text-white': isToggleMenu }">
                        Kankawee Aramrak</h4>
                </div>

                <!-- Hamburger mobile menu -->
                <div class="xl:hidden max-h-[40px] pt-[4px] flex justify-center">
                    <div>
                        <button class="grid gap-1 p-2 rounded-md outline-none" @click="hamberBTN">
                            <span
                                v-bind:class="{ 'rotate-45 bg-white': isToggleMenu, 'translate-y-[9px]': isToggleMenu, 'bg-black': !isToggleMenu }"
                                id="ham1" class="w-6 h-1 rounded-[10px] transition-all duration-200"></span>
                            <span v-bind:class="{ 'opacity-0 bg-white': isToggleMenu, 'bg-black': !isToggleMenu }" id="ham2"
                                class="w-6 h-1 rounded-[10px] transition-all duration-200"></span>
                            <span
                                v-bind:class="{ '-rotate-45 bg-white': isToggleMenu, '-translate-y-[7px]': isToggleMenu, 'bg-black': !isToggleMenu }"
                                id="ham3" class="w-6 h-1 rounded-[10px] transition-all duration-200"></span>
                        </button>
                    </div>
                </div>

                <!-- Desktop Menu Bar -->
                <div class="hidden w-max max-w-[60%] space-x-[20px] h-full xl:flex xl:justify-end xl:items-center">
                    <NuxtLink to="/">
                        <h4 v-if="page_lang === 'EN'" class="w-max">Home</h4>
                        <h4 v-if="page_lang === 'TH'" class="w-max">หน้าแรก</h4>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <h4 v-if="page_lang === 'EN'" class="w-max">Personal Blog</h4>
                        <h4 v-if="page_lang === 'TH'" class="w-max">บล็อกส่วนตัว</h4>
                    </NuxtLink>
                    <NuxtLink to="/aboutme">
                        <h4 v-if="page_lang === 'EN'" class="w-max">Contact</h4>
                        <h4 v-if="page_lang === 'TH'" class="w-max">ติดต่อ</h4>
                    </NuxtLink>
                    <div class="w-full flex justify-center py-[10px]">
                            <div class="w-[3px] h-[30px] bg-black"></div>
                    </div>
                    <div class="flex justify-end space-x-[5px] items-center">
                        <h4>EN</h4>
                            <button @click="Page_Lang_Update" class="w-[60px] h-[20px] bg-black outline-none rounded-[10px] flex items-center relative">
                                <div class="w-[15px] h-[15px] bg-white rounded-full absolute transition-all duration-200" :class="{ 'translate-x-[5px]': page_lang === 'EN', 'translate-x-[40px]': page_lang === 'TH' }"></div>
                            </button>
                        <h4>TH</h4>
                    </div>
                </div>
            </div>

            <!--Mobile Menu Detail -->
            <div class="xl:hidden text-white text-center text-[16px] pt-[30px] flex justify-center" :class="{ 'hidden': !isToggleMenu }">
                <div class="w-full h-full flex flex-col space-y-[5px]">
                    <div class="flex justify-center space-x-[30px] items-center">
                        <h4>EN</h4>
                            <button @click="Page_Lang_Update" class="w-[60px] h-[20px] bg-white outline-none rounded-[10px] flex items-center relative">
                                <div class="w-[15px] h-[15px] bg-black rounded-full absolute transition-all duration-200" :class="{ 'translate-x-[5px]': page_lang === 'EN', 'translate-x-[40px]': page_lang === 'TH' }"></div>
                            </button>
                        <h4>TH</h4>
                    </div>
                    
                    <div class="w-full flex justify-center py-[10px]">
                        <div class="w-[40%] h-[3px] bg-white"></div>
                    </div>

                    <NuxtLink to="/">
                        <h4 v-if="page_lang === 'EN'">Home</h4>
                        <h4 v-if="page_lang === 'TH'">หน้าแรก</h4>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <h4 v-if="page_lang === 'EN'">Personal Blog</h4>
                        <h4 v-if="page_lang === 'TH'">บล็อกส่วนตัว</h4>
                    </NuxtLink>
                    <NuxtLink to="/aboutme">
                        <h4 v-if="page_lang === 'EN'">Contact</h4>
                        <h4 v-if="page_lang === 'TH'">ติดต่อ</h4>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

//Var
const isToggleMenu = ref(false);
let page_lang = ref('EN');

//Emit
const emit = defineEmits(['update:page_lang']);

function hamberBTN() {
    isToggleMenu.value = !isToggleMenu.value;
}

function Page_Lang_Update() {
    if (page_lang.value === 'EN') {
        page_lang.value = 'TH';
        emit('update:page_lang', 'TH');
    }
    else {
        page_lang.value = 'EN';
        emit('update:page_lang', 'EN');
    }
}
</script>