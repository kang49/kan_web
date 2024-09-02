<template>
    <Navbar @update:page_lang="Page_Lang_EmitHandler"/>
    <div class="w-full min-h-[calc(100dvh)]">
        <!-- Page1 -->
        <div class="min-h-full w-full pt-[70px] flex">
            <div class="h-[70%] min-h-[600px] relative w-full flex items-center">
                <div class="h-full w-[250px] absolute z-0 bg-[#E5C8AE] xl:w-[400px]"></div>
                <div class="w-[60%] xl:pl-[100px]">
                    <NuxtImg src="/img/mypic1.png" loading="lazy" class="z-10 relative h-[500px] ml-[30px] object-cover xl:h-[550px]"></NuxtImg>
                </div>
            </div>
            <div class="z-20 w-full absolute pt-[200px] flex justify-between">
                <div class="w-[50%]"></div>
                <div class="w-[50%] pr-[30px]">
                    <div>
                        <h3 v-if="page_lang === 'EN'" class="font-bold text-[16px] xl:text-[22px]">Kankawee Aramrak</h3>
                        <h3 v-else-if="page_lang === 'TH'" class="font-bold text-[16px] xl:text-[22px]">กันต์กวี อารามรักษ์</h3>
                    </div>

                    <div class="pt-[10px]">
                        <h4 v-if="page_lang === 'EN'" class="font-normal text-[12px] xl:text-[16px]">Co-Founder & Software Engineer of
                            TensorMiK</h4>
                        <h4 v-else-if="page_lang === 'TH'" class="font-normal text-[12px] xl:text-[16px]">
                            ผู้ร่วมก่อตั้งทีมและวิศวกรซอฟท์แวร์ที่ TensorMiK</h4>
                    </div>

                    <NuxtLink to="/aboutme">
                        <div
                            class="border-black border-[2px] flex justify-center items-center w-max h-max mt-[20px] py-[10px] px-[15px]">
                            <h4 v-if="page_lang === 'EN'" class="font-normal text-[12px] xl:text-[16px]">About me</h4>
                        <h4 v-else-if="page_lang === 'TH'" class="font-normal text-[12px] xl:text-[16px]">ดูเพิ่มเติม</h4>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Page2 -->
        <div class="min-h-full w-full pt-[100px] px-[30px] xl:px-[100px]">
            <div class="w-full h-[600px] flex justify-between items-center relative">
                <NuxtImg src="/img/mypic2.png" loading="lazy" class="h-full w-full object-cover"></NuxtImg>
                <div class="w-full absolute flex justify-between">
                    <div class="w-[50%]"></div>
                    <div class="w-[50%] pr-[20px]">
                        <div>
                            <h3 v-if="page_lang === 'EN'" class="text-white font-bold text-[16px] right-0 text-right xl:text-[22px]">Software Development</h3>
                            <h3 v-if="page_lang === 'TH'" class="text-white font-bold text-[16px] right-0 text-right xl:text-[22px]">การพัฒนาซอฟท์แวร์</h3>
                        </div>

                        <div class="pt-[10px]">
                            <h4 v-if="page_lang === 'EN'" class="text-white font-normal text-[12px] right-0 text-right xl:text-[16px]">"I believe that software development is a vital part of our present and future. This belief inspired me to start learning software development from a young age, with the hope of contributing to its advancement."</h4>
                            <h4 v-if="page_lang === 'TH'" class="text-white font-normal text-[12px] right-0 text-right xl:text-[16px]">"ผมเชื่อว่าการพัฒนาซอฟต์แวร์เป็นส่วนหนึ่งที่สำคัญสำหรับปัจจุบันและอนาคต แนวคิดนี้เป็นแรงบันดาลใจผลักดันให้ผมเริ่มเรียนรู้การพัฒนาซอฟต์แวร์ตั้งแต่วัยเด็ก เพื่อมีส่วนร่วมในการขับเคลื่อนในด้านนี้"</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page3 -->
        <div class="min-h-full w-full pt-[100px] px-[30px] xl:px-[100px]">
            <div class="w-full h-[600px] flex justify-between items-center relative">
                <NuxtImg src="/img/starship.png" loading="lazy" class="h-full w-full object-cover xl:object-[0px_0px]"></NuxtImg>
                <div class="w-full absolute flex justify-between">
                    <div class="w-[50%] pl-[20px]">
                        <div>
                            <h3 v-if="page_lang === 'EN'" class="text-white font-bold text-[16px] left-0 xl:text-[22px]">Space Technology</h3>
                            <h3 v-if="page_lang === 'TH'" class="text-white font-bold text-[16px] left-0 xl:text-[22px]">เทคโนโลยีอวกาศ</h3>
                        </div>

                        <div class="pt-[10px]">
                            <h4 v-if="page_lang === 'EN'" class="text-white font-normal text-[12px] left-0 xl:text-[16px]">"I'm fascinated by space technology because it embodies humanity's hope, breaking barriers and uniting global advancements into a single creation sent into space."</h4>
                            <h4 v-if="page_lang === 'TH'" class="text-white font-normal text-[12px] left-0 xl:text-[16px]">"ผมสนใจในเทคโนโลยีอวกาศ มันเหมือนความหวังของมนุษยชาติที่ช่วยให้เราทะลุขีดจำกัด และมันรวมเอาความก้าวหน้าทางเทคโนโลยีทั่วโลกไว้ในอุปกรณ์ต่างๆของ SpaceCraft"</h4>
                        </div>
                    </div>
                    <div class="w-[50%]"></div>
                </div>
            </div>
        </div>

        <!-- Page4 -->
        <div class="min-h-full w-full pt-[150px] px-[30px] xl:px-[100px]">
            <div class="w-full h-[300px] flex justify-between items-center">
                <div class="w-full flex justify-between items-center">
                    <div class="w-[50%] pr-[20px]">
                        <div>
                            <h3 v-if="page_lang === 'EN'" class="text-black font-bold text-[16px] xl:text-[22px]">Free-Style Thinking</h3>
                            <h3 v-if="page_lang === 'TH'" class="text-black font-bold text-[16px] xl:text-[22px]">คิดอย่างฟรีสไตล์</h3>
                        </div>

                        <div class="pt-[10px]">
                            <h4 v-if="page_lang === 'EN'" class="text-black font-normal text-[12px] xl:text-[16px]">"I believe that for someone to truly create something meaningful, one essential element is freedom of thought. It allows us to break free from conventional thinking and opens up the possibility to create something even better."</h4>
                            <h4 v-if="page_lang === 'TH'" class="text-black font-normal text-[12px] xl:text-[16px]">"ผมคิดว่าการที่คนๆหนึ่งจะสามารถสร้างอะไรสักอย่าง สิ่งหนึ่งที่ต้องมีคืออิสระทางความคิด มันทำให้เราหลุดออกจากกรอบความคิดเดิมๆ และมีโอกาสสร้างสิ่งที่ดีกว่าได้มากขึ้น"</h4>
                        </div>
                    </div>
                    <div class="h-[400px]">
                        <NuxtImg src="/img/mypic3.png" loading="lazy" class="h-full w-full object-cover"></NuxtImg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Page5 -->
        <div class="min-h-[720px] w-full pt-[150px] xl:px-[100px]">
            <div class="h-[450px] flex justify-center items-center relative">
                <NuxtImg src="/img/highschoolfr.png" loading="lazy" class="h-full w-full px-[30px] object-cover object-[-210px_0px] z-10 xl:object-contain xl:object-[0px_0px] xl:px-0"></NuxtImg>
                <div class="w-[270px] min-h-max pb-[20px] pt-[100px] bg-[#E3D583] absolute flex justify-end items-end bottom-[-170px] right-0 z-0 xl:w-[700px] xl:top-[350px]">
                    <div class="w-full bottom-[-200px] px-[20px]">
                        <div>
                            <h3 v-if="page_lang === 'EN'" class="text-black font-bold text-[16px] text-right xl:text-[22px]">My high school friends</h3>
                            <h3 v-if="page_lang === 'TH'" class="text-black font-bold text-[16px] text-right xl:text-[22px]">เพื่อนๆมัธยมปลาย</h3>
                        </div>

                        <div class="pt-[10px]">
                            <h4 v-if="page_lang === 'EN'" class="text-black font-normal text-[12px] text-right xl:text-[16px]">"They say the happiest and most fun times are during high school. Looking back, I believe it’s true. The fun moments, the laughter, and all the crazy things we did with friends back then are completely different from life today."</h4>
                            <h4 v-if="page_lang === 'TH'" class="text-black font-normal text-[12px] text-right xl:text-[16px]">"เขาว่ากันว่าช่วงเวลาที่สนุกและมีความสุขที่สุดคือช่วงมัธยม พอมองย้อนกลับไปผมเชื่อละว่ามันจริง สิ่งสนุกๆ เสียงหัวเราะหรืออะไรบ้าๆที่เราได้สนุกกับเพื่อนในตอนนั้น มันต่างจากปัจจุบันสิ้นเชิง"</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-[50px] xl:pt-[150px]">
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

//Var
let page_lang = ref('EN');
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
        document.title = 'Kankawee Aramrak กันต์กวี อารามรักษ์ (Home)';
    }, 200);
});
</script>