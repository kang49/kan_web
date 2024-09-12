<template>
    <Navbar @update:page_lang="Page_Lang_EmitHandler" />

    <div class="w-full min-h-[calc(100dvh)]">
        <div class="w-full h-max pt-[100px] px-[20px] xl:px-[300px]">
            <h1 v-if="page_lang === 'EN'" class="text-center text-black text-[20px] font-bold xl:text-[22px]">Personal Blogs</h1>
            <h1 v-if="page_lang === 'TH'" class="text-center text-black text-[20px] font-bold xl:text-[22px]">บล็อกส่วนตัว</h1>

            <div class="w-full h-max pt-[50px] flex items-center">
                <i class="far fa-tags mr-[5px] xl:mr-[10px]"></i>
                <h2 v-if="page_lang === 'EN'" class="text-black text-[18px] font-bold xl:text-[18px]">Tags</h2>
                <h2 v-if="page_lang === 'TH'" class="text-black text-[18px] font-bold xl:text-[18px]">แท็ก</h2>
            </div>
            <div class="w-[80%] h-max pt-[10px] px-[20px]">
                <!-- Grid layout for 3 columns and a max of 2 rows -->
                <ul class="grid grid-cols-3 gap-[10px]">
                    <!-- Limit the number of categories to the first 6 -->
                    <li class="w-max h-max" v-for="category in categories.slice(0, 6)" :key="category.name">
                        <NuxtLink :to="{ path: 'blogs_tags', query: { tags_name: category.name } }" class="underline text-[14px] xl:text-[16px]">
                            # {{ category.name }}
                        </NuxtLink>
                        <div class="flex items-center text-[12px]">
                            <!-- Optional: Add any content like the post count here -->
                        </div>
                    </li>
                </ul>

                <!-- "View all" link -->
                <NuxtLink to="/tags" class="flex items-center w-max h-max pt-[10px]">
                    <h4 v-if="page_lang === 'EN'" class="text-[14px] font-bold xl:text-[16px]">View all</h4>
                    <h4 v-if="page_lang === 'TH'" class="text-[14px] font-bold xl:text-[16px]">ดูทั้งหมด</h4>
                    <i class="fal fa-long-arrow-right text-[22px] px-[10px] xl:text-[26px]"></i>
                </NuxtLink>
            </div>

            <h2 v-if="page_lang === 'EN'" class="text-black text-[18px] font-bold pt-[50px] xl:text-[20px]">Recents</h2>
            <h2 v-if="page_lang === 'TH'" class="text-black text-[18px] font-bold pt-[50px] xl:text-[20px]">ล่าสุด</h2>

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
                            format="webp"
                            class="w-[120px] h-[70px] bg-[#9D9D9D9D] object-scale-down rounded-[10px] xl:w-[200px] xl:h-[120px]"
                            alt="Kankawee Aramrak Blog"
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
        </div>
    </div>
    <div class="w-full h-max pt-[50px]">
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import "dayjs/locale/th";


//Var
let page_lang = ref(Cookies.get('page_lang') ?? 'EN');
const content_data = await queryContent("/").sort({ date: -1 }).find();
const categories = ref<{ name: string; count: number }[]>([]);

function Page_Lang_EmitHandler(lang: string) {
    if (lang === 'EN') {
        page_lang.value = 'EN';
    }
    else {
        page_lang.value = 'TH';
    }
}

// Query to get all files
const allFiles = await queryContent('/blogs').find();

// Extract all tags from all files
const allTags = allFiles.flatMap(file => file.tags || []);

// Get unique tags
const uniqueTags = Array.from(new Set(allTags));

// Count the number of files that contain each tag
categories.value = uniqueTags.map(tag => ({
    name: tag,
    count: allFiles.filter(file => file.tags && file.tags.includes(tag)).length
}));

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