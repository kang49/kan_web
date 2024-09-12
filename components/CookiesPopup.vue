<template>
    <div class="fixed w-screen h-[100px] bottom-0 rounded-t-[20px] z-40 bg-black xl:to-[140%] xl:w-[40%] xl:right-0" :class="{'hidden': alreadyCookies === 'true'}">
        <div class="flex justify-between items-center h-full px-[20px]">
            <h4 class="text-[14px] w-[70%] text-white font-extralight">เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณในเว็บไซต์ของเรา
                ด้วยการใช้บริการของเรานี้คุณยินยอมให้เราใช้คุกกี้ตาม <NuxtLink to="https://policies.google.com/technologies/cookies" target="_blank" class="underline font-medium">นโยบายคุกกี้</NuxtLink> ของเรา
            </h4>
            
            <button @click.prevent="AcceptCookies" class="bg-white rounded-[10px] px-[20px]">
                <h4 class="text-black">ตกลง</h4>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie';


let alreadyCookies = ref(Cookies.get('AcceptCookies') ?? 'false');

function AcceptCookies() {
    Cookies.set('AcceptCookies', 'true', { expires: 7 });
    alreadyCookies.value = Cookies.get('AcceptCookies') ?? 'false';

    //@ts-ignore
    window.dataLayer = window.dataLayer || [];
    //@ts-ignore
    function gtag(){dataLayer.push(arguments);}
    //@ts-ignore
    gtag('js', new Date());
    //@ts-ignore
    gtag('config', 'G-9DV7T6872K');
}

</script>