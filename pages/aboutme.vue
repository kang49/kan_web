<template>
        <Navbar @update:page_lang="Page_Lang_EmitHandler"/>

        <div class="w-full min-h-[calc(100dvh)]">
            <div class="h-max w-full flex items-center pt-[100px] pb-[40px]">
                <div class="px-[20px] w-full h-max space-y-[10px]">
                    <h1 v-if="page_lang === 'EN'" class="text-[20px] font-bold">Kankawee Aramrak</h1>
                    <h1 v-if="page_lang === 'TH'" class="text-[20px] font-bold">กันต์กวี อารามรักษ์</h1>

                    <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">Other name: Kan, Keen, KanG49, Meta_Keen</h4>
                    <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">นามแฝงอื่นๆ: Kan, Keen, KanG49, Meta_Keen</h4>

                    <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">I'm student is interest in technology, astronomy, and i like anime 🤍</h4>
                    <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">ผมเป็นนักศึกษาที่สนใจในเทคโนโลยี ดาราศาสตร์ และผมก็ชอบอนิเมะ 🤍</h4>

                    <div class="pt-[50px]">
                        <h1 v-if="page_lang === 'EN'" class="text-[20px] font-bold">Contact</h1>
                        <h1 v-if="page_lang === 'TH'" class="text-[20px] font-bold">ช่องทางติดต่อ</h1>

                        <div class="w-full h-max flex space-x-[10px] pt-[10px]">
                            <NuxtLink to="https://www.facebook.com/KankaweeG49/" class="text-[14px] font-normal text-blue-600 bg-blue-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 -rotate-2 hover:rotate-0 hover:scale-105">Facebook</NuxtLink>
                            <NuxtLink to="https://github.com/kang49" class="text-[14px] font-normal text-orange-600 bg-orange-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 rotate-0 hover:-rotate-2 hover:scale-105">Github</NuxtLink>
                            <NuxtLink to="https://www.instagram.com/kan_g49/" class="text-[14px] font-normal text-blue-600 bg-blue-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 rotate-2 hover:rotate-0 hover:scale-105">Instagram</NuxtLink>
                        </div>
                    </div>

                    <div class="w-full h-max pt-[100px] space-y-[30px]">
                        <h1 v-if="page_lang === 'EN'" class="text-center text-[20px] font-bold">My random life blog</h1>
                        <h1 v-if="page_lang === 'TH'" class="text-center text-[20px] font-bold">เรื่องราวแบบสุ่มของผม</h1>

                        <h4 v-if="page_lang === 'EN'" class="text-[18px] font-bold">Why this website born.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[18px] font-bold">ทำไมถึงเกิดเว็บไซต์นี้ขึ้นมา</h4>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">This is the beginning of my story. So let me first explain why I decided to create this website. Back in October 2023, I had the opportunity to attend the '42Bangkok Discovery Piscine' camp.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">นี่คือจุดเริ่มต้นของเรื่องราวต่างๆ เกี่ยวกับผม ดังนั้นขอเล่าก่อนเลยว่าทำไมผมถึงเลือกที่จะสร้างหน้าเว็บนี้ขึ้นมา ย้อนกลับไปเมื่อประมาณเดือนตุลาคม ปี 2023 ผมได้มีโอกาสไปเข้าค่าย '42Bangkok Discovery Piscine'</h4>
                        <div class="flex justify-center">
                            <NuxtImg src="/img/42disco_camp.png" loading="lazy" class="w-full"></NuxtImg>
                        </div>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">During the camp, we were taught the basics of web development. I have to admit, I had never built a website before. I was always focused on the backend. The camp lasted for 7 days, with daily tasks and assignments submitted through 42's system.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">ในค่ายเขาสอนเกี่ยวกับการทำเว็บไซต์พื้นฐาน ซึ่งต้องบอกเลยว่าก่อนหน้านั้นไม่เคยเขียนเว็บมาก่อนเลย เพราะทำแต่ฝั่ง Backend ล้วนๆ ค่ายนี้มีเวลา 7 วัน โดยส่วนใหญ่ก็จะมีภารกิจให้ทำและส่งงานผ่านระบบของ 42</h4>
                        <div class="flex justify-center">
                            <NuxtImg src="/img/42inside.png" loading="lazy" class="h-[400px]"></NuxtImg>
                        </div>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">The photo shows the atmosphere inside the camp, held in the 42Bangkok building. They provided iMacs for free use by their students. I brought my own MacBook since I wasn't used to the Magic Mouse, so I only used the iMac to submit my assignments.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">ตามภาพนี่คือบรรยากาศภายในค่าย ซึ่งเป็นภายในตึกของ 42Bangkok จะมีเครื่อง iMac ให้ใช้ฟรีสำหรับนักเรียนของที่นั่น ส่วนผมที่เข้าค่ายชั่วคราวก็เอา MacBook ไปเอง เพราะใช้ Magic Mouse ไม่ถนัด เลยเปิด iMac ไว้แค่กดส่งงานพอ</h4>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">At the end of the camp, there was a 'Rust Project' where all students had to build a website based on the given prompt within a day and a half. The theme for this year was 'Portfolio'. We had to partner with another student to create a landing page that linked to each of our portfolios. The picture below shows a part of my portfolio.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">ท้ายค่ายเขาจะมีสิ่งที่เรียกว่า 'Rust Project' ซึ่งนักเรียนทุกคนต้องเขียนเว็บไซต์ตามที่โจทย์กำหนดภายในเวลา 1 วันครึ่ง โดยโจทย์ปีนี้คือ 'Portfolio' เราต้องจับคู่กับเพื่อนอีกคนเพื่อทำหน้า Landing Page ร่วมกัน และหน้านั้นต้องกดไปยังหน้า Portfolio ของแต่ละคนได้ และนี่คือสภาพส่วนนึงของ Portfolio ผม TT</h4>
                        <div class="flex justify-center space-x-[10px]">
                            <NuxtImg src="/img/my_first_port1.png" loading="lazy" class="h-[250px]"></NuxtImg>
                            <NuxtImg src="/img/my_first_port2.png" loading="lazy" class="h-[250px]"></NuxtImg>
                        </div>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">Back then, I was really confident in my design. The website even had falling snow, which I was super proud of because it took me ages to figure out how to integrate someone else's CSS into my own project. After submission, the assignments were peer-reviewed by fellow students. I had booked a review slot, and a foreign student ended up reviewing mine.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">ตอนนั้นมั่นใจมากว่าทำสวยมาก มีหิมะตกลงมาในหน้าเว็บด้วยนะ ภูมิใจมากเพราะกว่าจะไปก็อป CSS ของคนอื่นมาให้เวิร์คกับของตัวเองได้คือนานมาก 5555 หลังจากส่งงานก็ให้นักเรียนคนอื่นมาตรวจสอบเอง ซึ่งคนที่ตรวจเว็บผมเป็นชาวต่างชาติคนนึง</h4>
                        <div class="flex justify-center">
                            <NuxtImg src="/img/check_my_port.png" loading="lazy" class="h-[400px]"></NuxtImg>
                        </div>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">The review went well. All the functions worked perfectly—pure HTML and JS without any frameworks, using only Tailwind for the CSS. The reviewer even said, 'Perfect.' At the end of the camp, the best websites were selected to be presented on stage for prizes. I was really hoping to be one of them…</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">ตอนที่พี่เขาตรวจก็ดีมาก ฟังก์ชันทุกอย่างทำงานถูกต้อง ใช้ Pure HTML, JS ไม่มี Framework ใดๆ ช่วย ใช้แค่ Tailwind ทำ CSS เท่านั้น เขายังบอกว่า 'Perfect' จบงาน ตอนท้ายค่ายมีการคัดเลือกเว็บที่ดีที่สุดมา Present บนเวทีและรับของรางวัล เราเองก็ลุ้นมากว่าจะได้ไหม…</h4>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">But I wasn't. hahaha It's all good, though. I wasn't upset because my goal was to learn how to build a website. Plus, it was my first attempt, so it would have been weird if I won right off the bat.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">สุดท้ายก็ไม่ได้ครับ 555 แต่ก็ไม่เป็นไร เพราะจุดประสงค์ที่มาคือฝึกทำเว็บ อีกอย่างนี่เป็นครั้งแรกที่ลองทำเว็บ จะชนะเลยก็คงแปลกๆ</h4>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">Here's a glimpse of the presentations from someone.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">ส่วนนี้เป็น Presentation ของบางคนที่ได้ไป</h4>
                        <div class="flex justify-center">
                            <NuxtImg src="/img/42disco_presents1.png" loading="lazy" class="h-[400px]"></NuxtImg>
                        </div>
                        <div class="flex justify-center">
                            <NuxtImg src="/img/42disco_presents2.png" loading="lazy" class="h-[400px]"></NuxtImg>
                        </div>
                        <h4 v-if="page_lang === 'EN'" class="text-[14px] font-normal">Alright, after that long introduction, back to the point. After the camp, I decided to deploy the website I built. Over time, I worked on more frontend projects and completely forgot that my first website was that Portfolio. And it was terrible. 555 The responsiveness was off, the fonts and colors were hard to read, and there were random text boxes all over the place. So I decided to redesign it and create this new site, using Figma for the design and a framework to improve performance and loading speed.</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[14px] font-normal">โอเค เกริ่นมาตั้งนาน กลับเข้าเรื่องดีกว่า หลังจบค่ายผมก็ Deploy หน้าเว็บที่ทำไปใช้เลย 555 เวลาผ่านไปมีโปรเจ็กต์เกี่ยวกับด้าน Frontend มากขึ้น จนลืมไปแล้วว่าหน้าเว็บแรกในชีวิตคือไอ้เว็บ Portfolio นี่แหละ และมันโคตรแย่ 555 ทั้งความ Responsive ที่แปลกๆ ฟอนต์และสีที่อ่านยาก การตีกรอบกล่องข้อความไปทั่ว ผมเลยคิดว่าจะออกแบบมันใหม่ เลยสร้างเว็บนี้ขึ้นมาใหม่ โดยออกแบบผ่าน Figma และใช้ Framework มาช่วยสร้างและเพิ่มประสิทธิภาพการโหลดให้ไวขึ้น"</h4>
                        <h4 v-if="page_lang === 'EN'" class="text-[18px] font-bold">To be continued...</h4>
                        <h4 v-if="page_lang === 'TH'" class="text-[18px] font-bold">ถ้าว่างจะกลับมาเขียนต่อ...</h4>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
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
        document.title = 'Kankawee Aramrak กันต์กวี อารามรักษ์ (About me)';
    }, 200);
});
</script>