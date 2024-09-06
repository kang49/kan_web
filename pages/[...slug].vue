<template>
  <Navbar @update:page_lang="Page_Lang_EmitHandler"/>
  <div class="pt-[150px] px-[40px] content markdown-body">
    <ContentDoc v-slot="{ doc }">
      <h1 v-if="page_lang === 'EN'">{{ doc.title }}</h1>
      <h1 v-if="page_lang === 'TH'">{{ doc.title_th }}</h1>
      <ContentRenderer :value="doc">
        <ContentRendererMarkdown :value="doc" :components="components" />
      </ContentRenderer>
    </ContentDoc>
  </div>
  <div class="w-full h-max pt-[50px]">
            <Footer/>
        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Bloginfo } from '#components';
import Cookies from 'js-cookie';

//Var
let page_lang = ref(Cookies.get('page_lang') ?? 'EN');
const components = {
  'blog-info': Bloginfo
}

function Page_Lang_EmitHandler(lang: string) {
    if (lang === 'EN') {
        page_lang.value = 'EN';
    }
    else {
        page_lang.value = 'TH';
    }
}
</script>