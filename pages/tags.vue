<template>
    <Navbar @update:page_lang="Page_Lang_EmitHandler" />

    <div class="w-full min-h-[calc(100dvh)]">
        <div class="w-full h-max pt-[100px] px-[20px]">
            <div class="w-full h-max flex items-center">
                <i class="far fa-tags mr-[5px]"></i>
                <NuxtLink v-if="page_lang === 'EN'" to="/tags" class="text-[20px] font-bold">Tags</NuxtLink>
                <NuxtLink v-if="page_lang === 'TH'" to="/tags" class="text-[20px] font-bold">แท็ก</NuxtLink>
            </div>

            <!-- No Tags -->
            <div class="w-full h-max px-[20px] pt-[30px]">
                <h4 class="mb-[20px] w-full h-max" v-for="category in categories" :key="category.name">
                    <div class="w-full h-max grid grid-cols-2 items-center">
                        <NuxtLink :to="{ path: 'blogs_tags', query: { tags_name: category.name } }" class="underline text-[16px]"># {{ category.name }}</NuxtLink>
                        <div class="w-full h-max flex items-center">
                            <i class="fal fa-file-alt mr-[5px] text-[18px]"></i>
                            <h4 class="text-[16px]">{{ category.count }} Posts</h4>
                        </div>
                    </div>
                </h4>
            </div>

            <NuxtLink to="/blogs" class="w-max h-max flex items-center">
                <i class="fal fa-long-arrow-left text-[22px] px-[10px]"></i>
                <h4 v-if="page_lang === 'EN'" class="text-[16px] font-bold">Return to Blogs</h4>
                <h4 v-if="page_lang === 'TH'" class="text-[16px] font-bold">กลับสู่หน้าบล็อก</h4>
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

//Var
let page_lang = ref(Cookies.get('page_lang') ?? 'EN');
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