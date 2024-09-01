<template>
    <div class="w-full h-max fixed z-50">
        <div class="flex px-[10px] justify-between transition-all duration-300"
            :class="{ 'h-[40px] bg-transparent': !isToggleMenu, 'h-[200px] bg-black': isToggleMenu }">
            <div class="pt-[10px]">
                <h4 class="font-bold text-[16px]" :class="{ 'text-black': !isToggleMenu, 'text-white': isToggleMenu }">
                    Kankawee Aramrak</h4>
            </div>

            <div class="max-h-[40px] pt-[4px] flex justify-center">
                <div>
                    <!-- Hamburger mobile menu -->
                    <button class="lg:hidden grid gap-1 p-2 rounded-md outline-none" @click="hamberBTN">
                        <span
                            v-bind:class="{ 'rotate-45 bg-white': isToggleMenu, 'translate-y-[9px]': isToggleMenu, 'bg-black': !isToggleMenu }"
                            id="ham1" class="w-6 h-1 rounded-[10px] transition-all duration-200"></span>
                        <span v-bind:class="{ 'opacity-0 bg-white': isToggleMenu, 'bg-black': !isToggleMenu }" id="ham2"
                            class="w-6 h-1 rounded-[10px] transition-all duration-200"></span>
                        <span
                            v-bind:class="{ '-rotate-45 bg-white': isToggleMenu, '-translate-y-[7px]': isToggleMenu, 'bg-black': !isToggleMenu }"
                            id="ham3" class="w-6 h-1 rounded-[10px] transition-all duration-200"></span>
                    </button>

                    <!--Menu Desktop-->
                    <div class="space-x-2 text-white text-[16px] font-bold hidden lg:flex lg:items-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isToggleMenu = ref(false);

function hamberBTN() {
    isToggleMenu.value = !isToggleMenu.value;
}
</script>