<template>
    <Navbar @update:page_lang="Page_Lang_EmitHandler" />

    <div class="w-full min-h-[calc(100dvh)]">
        <div class="w-full h-max pt-[100px] px-[20px] xl:px-[300px]">
            <div class="w-full h-max flex items-center">
                <i class="far fa-tags mr-[5px] text-green-500 text-[16px] xl:text-[18px]"></i>
                <NuxtLink v-if="page_lang === 'EN'" to="/tags" class="text-[20px] font-bold text-green-500 xl:text-[22px]">Tags</NuxtLink>
                <NuxtLink v-if="page_lang === 'TH'" to="/tags" class="text-[20px] font-bold text-green-500 xl:text-[22px]">แท็ก</NuxtLink>
                <i class="fal fa-long-arrow-right text-[30px] px-[10px] xl:px-[20px]"></i>
                <h1 class="text-black text-[20px] font-bold truncate xl:text-[22px]"># {{ tags_name }}</h1>
            </div>

            <!-- Has tag -->
            <div class="w-full h-max px-[20px] pt-[30px]">
                <article v-if="content_data" v-for="post in content_data" class="mb-4 h-max">
                    <NuxtLink :to="post._path" class="flex justify-between w-full h-max">
                        <div class="w-[50%] h-max">
                            <!-- Title with 2 lines clamp -->
                            <h2 v-if="page_lang === 'EN' || !post.title_th" class="text-[18px] font-bold text-black line-clamp-2 xl:text-[20px]">{{ post.title }}</h2>
                            <h2 v-if="page_lang === 'TH' && post.title_th" class="text-[18px] font-bold text-black line-clamp-2 xl:text-[20px]">{{ post.title_th }}</h2>
                            
                            <div class="pt-[10px] text-[12px] h-[100px] relative">
                                <!-- Description -->
                                <p v-if="page_lang === 'EN' || !post.title_th" class="description line-clamp-2 xl:text-[16px]">{{ post.description }}</p>
                                <p v-if="page_lang === 'TH' && post.description_th" class="description line-clamp-2 xl:text-[16px]">{{ post.description_th }}</p>
                                
                                <!-- Date -->
                                <p class="absolute bottom-0 text-[#9d9d9d] xl:text-[14px]"><i class="fal fa-calendar-alt mr-[5px] xl:text-[16px]"></i>{{ formatDate(post.date) }}</p>
                            </div>
                        </div>
                        <NuxtImg 
                            v-if="post.image"
                            :src="post.image"
                            loading="lazy"
                            class="w-[120px] h-[70px] bg-[#9D9D9D9D] object-scale-down rounded-[10px] xl:w-[200px] xl:h-[120px]"
                            alt="Blog image"
                        />
                        <div 
                            v-else 
                            class="w-[120px] h-[70px] bg-[#e0e0e0] rounded-[10px] xl:w-[200px] xl:h-[120px]"
                        >
                            <!-- Placeholder for background color if no image -->
                        </div>
                    </NuxtLink>
                    <div class="w-full h-[1px] bg-[#9D9D9D9D] mt-[5px]"></div>
                </article>
            </div>

            <NuxtLink to="/blogs" class="w-max h-max flex items-center">
                <i class="fal fa-long-arrow-left text-[22px] px-[10px] xl:text-[26px]"></i>
                <h4 v-if="page_lang === 'EN'" class="text-[16px] font-bold xl:text-[18px]">Return to Blogs</h4>
                <h4 v-if="page_lang === 'TH'" class="text-[16px] font-bold xl:text-[18px]">กลับสู่หน้าบล็อก</h4>
            </NuxtLink>
        </div>
    </div>
    <div class="w-full h-max pt-[50px]">
            <Footer/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';
import type { ParsedContent } from '@nuxt/content';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import { useRouter } from 'vue-router';

//Var
let page_lang = ref(Cookies.get('page_lang') ?? 'EN');
const route = useRoute()
const router = useRouter();
const tags_name: string = route.query.tags_name as string;
let lowercase_tags_name = '';
let content_data: ParsedContent[];

if (tags_name) {
    lowercase_tags_name = tags_name.toLowerCase();
    content_data = await queryContent('/blogs').sort({ date: -1 }).where({ tags: { $in: lowercase_tags_name } }).find();

    if (content_data.length == 0) router.push('/tags');
}

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
        document.title = 'Kankawee Aramrak';
    }, 200);
});

function formatDate(date: string | Date) {
    const dt = dayjs(date);
    dayjs.extend(buddhistEra);
    // เลือก format และ locale ตามค่า page_lang
    if (page_lang.value === 'TH') {
        // ใช้ locale ไทย
        return dt.locale('th').format('DD MMMM BBBB'); // พ.ศ.
    } else {
        // ใช้ locale อังกฤษ
        return dt.locale('en').format('DD MMMM YYYY'); // ค.ศ.
    }
}
</script>

<style scoped>
.description {
    overflow: hidden; /* ซ่อนข้อความที่เกิน */
    display: -webkit-box;
    -webkit-line-clamp: 4; /* จำนวนบรรทัดที่ต้องการแสดง */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; /* ใช้ '...' สำหรับข้อความที่เกิน */
}
</style>