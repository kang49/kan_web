<template>
  <div>
    <!-- Load content with ContentDoc -->
    <ContentDoc v-slot="{ doc }">
      <div>
        <!-- Render content slot -->
        <ContentSlot :use="$slots.default" />

        <!-- Info -->
        <div class="w-full h-max py-[10px]">
          <p class="text-[12px] font-bold xl:text-[14px]">{{ formatDate(doc.date) }} <i class="fad fa-dot-circle px-[5px]"
              style="--fa-primary-color: #22c55e; --fa-secondary-color: #22c55e;"></i> {{ doc.readingTime.text }}</p>
        </div>

        <!-- Tags -->
        <div class="w-full h-max flex items-start text-green-500">
          <div class="flex items-start mt-[8px] mr-[10px] h-full xl:mt-[6px]">
            <i class="far fa-tags text-green-500 text-[14px] xl:text-[16px]"></i>
          </div>

          <div class="flex flex-col space-y-2">
            <!-- First Row -->
            <div class="flex space-x-2">
              <div v-for="category in doc.tags.slice(0, 5)" :key="category" class="truncate text-green-500">
                <NuxtLink :to="{ path: '/blogs_tags', query: { tags_name: category } }" class="underline text-[14px] xl:text-[16px]">
                  #{{ category }}
                </NuxtLink>
              </div>
            </div>

            <!-- Second Row -->
            <div v-if="doc.tags.length > 3" class="flex space-x-2">
              <div v-for="category in doc.tags.slice(5, 10)" :key="category" class="truncate text-green-500">
                <NuxtLink :to="{ path: '/blogs_tags', query: { tags_name: category } }" class="underline text-[14px] xl:text-[16px]">
                  #{{ category }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Table of Contents -->
        <div class="w-full h-max py-[50px]">
          <h6 class="text-black font-bold">Table of Contents</h6>
          <ul class="px-[20px]">
            <li v-for="link of doc.body?.toc?.links" :key="link.id">
              <a :href="`#${link.id}`" class="text-[14px] underline">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </ContentDoc>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import "dayjs/locale/th";

//Var
let page_lang = ref(Cookies.get('page_lang') ?? 'EN');

dayjs.extend(buddhistEra);
function formatDate(date: string) {
  const dt = dayjs(date);
  // เลือก format และ locale ตามค่า page_lang
  if (page_lang.value === 'TH') {
    // ใช้ locale ไทยและแสดงปี พ.ศ.
    return dt.locale('th').format('DD MMMM BBBB'); // พ.ศ.
  } else {
    // ใช้ locale อังกฤษและแสดงปี ค.ศ.
    return dt.locale('en').format('DD MMMM YYYY'); // ค.ศ.
  }
}
</script>