<template>
        <Navbar @update:page_lang="Page_Lang_EmitHandler"/>

        <div class="w-full min-h-[calc(100dvh)]">
            <div class="h-max w-full flex items-center pt-[100px] pb-[40px]">
                <div class="px-[20px] w-full h-max space-y-[10px] xl:px-[300px]">
                    <h1 v-if="page_lang === 'EN'" class="text-[20px] font-bold xl:text-[22px]">Kankawee Aramrak</h1>
                    <h1 v-if="page_lang === 'TH'" class="text-[20px] font-bold xl:text-[22px]">กันต์กวี อารามรักษ์</h1>

                    <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal xl:text-[16px]">Other name: Kan, Keen, KanG49, Meta_Keen</h4>
                    <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal xl:text-[16px]">นามแฝงอื่นๆ: Kan, Keen, KanG49, Meta_Keen</h4>

                    <h4 class="text-[14px] font-normal xl:text-[16px]">🏫 SRV74 I 🎓 Monash U I 📄Research I Linux I Backend better 🫶 I Astronomy 🔭 🌌 I ✈️ A350 I 🙃 MBTI: ISTJ</h4>

                    <div class="pt-[50px]">
                        <h1 v-if="page_lang === 'EN'" class="text-[20px] font-bold xl:text-[22px]">Contact</h1>
                        <h1 v-if="page_lang === 'TH'" class="text-[20px] font-bold xl:text-[22px]">ช่องทางติดต่อ</h1>

                        <div class="w-full h-max flex space-x-[10px] pt-[10px]">
                            <NuxtLink to="https://www.facebook.com/KankaweeG49/" class="text-[14px] font-normal text-blue-600 bg-blue-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 -rotate-2 hover:rotate-0 hover:scale-105 xl:text-[16px]">Facebook</NuxtLink>
                            <NuxtLink to="https://github.com/kang49" class="text-[14px] font-normal text-orange-600 bg-orange-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 rotate-0 hover:-rotate-2 hover:scale-105 xl:text-[16px]">Github</NuxtLink>
                            <NuxtLink to="https://www.instagram.com/kan_g49/" class="text-[14px] font-normal text-blue-600 bg-blue-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 rotate-2 hover:rotate-0 hover:scale-105 xl:text-[16px]">Instagram</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-max pt-[50px]">
            <Footer/>
        </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

//Var
let page_lang = ref(Cookies.get('page_lang') ?? 'EN');
function Page_Lang_EmitHandler(lang: string) {
    if (lang === 'EN') {
        page_lang.value = 'EN';
    }
    else {
        page_lang.value = 'TH';
    }
}

onMounted(() => {
    //Animation Scripts
    setTimeout(() => {
        //Change Title
        document.title = 'Kankawee Aramrak กันต์กวี อารามรักษ์ (About me)';
    }, 200);
});
</script>