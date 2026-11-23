<template>
    <Navbar @update:page_lang="Page_Lang_EmitHandler" />

    <div class="w-full min-h-[calc(100dvh)] line-font">
        <div class="h-max w-full flex items-center pt-[100px] pb-[40px]">
            <div class="px-[20px] w-full h-max space-y-[42px] xl:px-[300px]">
                <!-- Header & Bio -->
                <section class="pl-[16px] border-l-[4px] border-[#A2AEBB] space-y-[8px]">
                    <h1 class="text-[20px] font-bold xl:text-[22px]">
                        {{ page_lang === 'EN' ? 'Kankawee Aramrak' : 'กันต์กวี อารามรักษ์' }}
                    </h1>

                    <h4 class="text-[14px] font-normal text-neutral-500 xl:text-[16px]">
                        {{ page_lang === 'EN' ? 'Other name' : 'นามแฝงอื่นๆ' }}: Kan · Keen · KanG49 · Meta_Keen
                    </h4>

                    <h4 class="text-[14px] font-normal leading-relaxed pt-[6px] text-neutral-800 xl:text-[16px]">
                        <template v-if="page_lang === 'EN'">
                            Aspiring Systems Engineer studying <strong>Computer Science</strong> at <strong>Monash University</strong> (Melbourne).
                            Focused on Low-Level Systems, High-Performance Computing (HPC), and Hardware-Software Co-Design—building
                            high-throughput, hardware-efficient software.
                        </template>
                        <template v-else>
                            นักศึกษา <strong>Computer Science</strong> ที่ <strong>Monash University</strong> (เมลเบิร์น)
                            สนใจด้าน Low-Level Systems, High-Performance Computing (HPC) และ Hardware-Software Co-Design
                            มุ่งเน้นการพัฒนาซอฟต์แวร์ประสิทธิภาพสูงที่ทำงานร่วมกับฮาร์ดแวร์ได้อย่างคุ้มค่า
                        </template>
                    </h4>
                </section>

                <!-- Experience -->
                <section class="space-y-[16px]">
                    <h1 class="text-[20px] font-bold xl:text-[22px]">
                        {{ page_lang === 'EN' ? 'Experience' : 'ประสบการณ์' }}
                    </h1>

                    <div class="space-y-[14px]">
                        <div class="border-l-[2px] border-neutral-200 pl-[14px] space-y-[2px]">
                            <h3 class="text-[15px] font-bold text-neutral-900 xl:text-[17px]">
                                Academic Peer Mentor — Computer Systems &amp; Networks
                            </h3>
                            <h4 class="text-[13px] font-normal text-neutral-500 xl:text-[15px]">
                                Monash College · {{ page_lang === 'EN' ? 'Oct 2026 – Present' : 'ต.ค. 2026 – ปัจจุบัน' }}
                            </h4>
                        </div>

                        <div class="border-l-[2px] border-neutral-200 pl-[14px] space-y-[2px]">
                            <h3 class="text-[15px] font-bold text-neutral-900 xl:text-[17px]">
                                Open Source Developer
                            </h3>
                            <h4 class="text-[13px] font-normal text-neutral-500 xl:text-[15px]">
                                GitHub · {{ page_lang === 'EN' ? 'Dec 2021 – Present' : 'ธ.ค. 2021 – ปัจจุบัน' }}
                            </h4>
                        </div>
                    </div>
                </section>

                <!-- Projects -->
                <section class="space-y-[16px]">
                    <h1 class="text-[20px] font-bold xl:text-[22px]">
                        {{ page_lang === 'EN' ? 'Projects' : 'โปรเจกต์' }}
                    </h1>

                    <div class="space-y-[14px]">
                        <div class="border-l-[2px] border-neutral-200 pl-[14px] space-y-[2px]">
                            <h3 class="text-[15px] font-bold text-neutral-900 xl:text-[17px]">
                                <NuxtLink
                                    to="https://github.com/kang49/arm64-openmpi-lse-research"
                                    external
                                    target="_blank"
                                    class="hover:underline"
                                >
                                    Open MPI v6.0 ARM64 Profiling &amp; Lock-Free Optimization ↗
                                </NuxtLink>
                            </h3>
                            <h4 class="text-[13px] font-normal text-neutral-600 xl:text-[15px]">
                                {{ page_lang === 'EN'
                                    ? '2x–5x speedup on ARM64 runtime bottlenecks.'
                                    : 'ปรับปรุงคอขวดบน ARM64 ให้เร็วขึ้น 2–5 เท่า' }}
                            </h4>
                        </div>

                        <div class="border-l-[2px] border-neutral-200 pl-[14px] space-y-[2px]">
                            <h3 class="text-[15px] font-bold text-neutral-900 xl:text-[17px]">
                                <NuxtLink
                                    to="https://lnkd.in/p/gFCEJ5Yn"
                                    external
                                    target="_blank"
                                    class="hover:underline"
                                >
                                    2-Node HPC Cluster &amp; Distributed HPL Benchmarking ↗
                                </NuxtLink>
                            </h3>
                            <h4 class="text-[13px] font-normal text-neutral-500 xl:text-[15px]">
                                {{ page_lang === 'EN'
                                    ? 'Jul 2026 – Present · Slurm, Open MPI & Low-Level Networking'
                                    : 'ก.ค. 2026 – ปัจจุบัน · Slurm, Open MPI และระบบเครือข่ายความหน่วงต่ำ' }}
                            </h4>
                        </div>

                        <div class="border-l-[2px] border-neutral-200 pl-[14px] space-y-[2px]">
                            <h3 class="text-[15px] font-bold text-neutral-900 xl:text-[17px]">
                                <NuxtLink
                                    to="https://github.com/kang49/bilibili-story-sharing"
                                    external
                                    target="_blank"
                                    class="hover:underline"
                                >
                                    bilibili-story-sharing ↗
                                </NuxtLink>
                            </h3>
                            <h4 class="text-[13px] font-normal text-neutral-500 xl:text-[15px]">
                                {{ page_lang === 'EN'
                                    ? 'Oct 2023 – Present · TypeScript & Apple Shortcuts'
                                    : 'ต.ค. 2023 – ปัจจุบัน · TypeScript และ Apple Shortcuts' }}
                            </h4>
                        </div>
                        <div class="border-l-[2px] border-neutral-200 pl-[14px] space-y-[2px]">
                            <h3 class="text-[15px] font-bold text-neutral-900 xl:text-[17px]">
                                <NuxtLink
                                    to="https://noknoiishop.com/"
                                    external
                                    target="_blank"
                                    class="hover:underline"
                                >
                                    NoknoiiShop ↗
                                </NuxtLink>
                            </h3>
                            <h4 class="text-[13px] font-normal text-neutral-500 xl:text-[15px]">
                                {{ page_lang === 'EN'
                                    ? 'Online digital goods & game top-up store'
                                    : 'ร้านค้าออนไลน์สำหรับสินค้าดิจิทัลและเติมเกม' }}
                            </h4>
                        </div>
                    </div>
                </section>

                <!-- Education -->
                <section class="space-y-[12px]">
                    <h1 class="text-[20px] font-bold xl:text-[22px]">
                        {{ page_lang === 'EN' ? 'Education' : 'การศึกษา' }}
                    </h1>

                    <div class="space-y-[8px]">
                        <h4 class="text-[14px] font-normal xl:text-[16px]">
                            <strong>Monash University</strong> — Bachelor of Computer Science
                            <span class="text-neutral-500">({{ page_lang === 'EN' ? 'Jun 2026 – Present' : 'มิ.ย. 2026 – ปัจจุบัน' }})</span>
                        </h4>
                        <h4 class="text-[14px] font-normal text-neutral-600 xl:text-[16px]">
                            <strong>Sarawittaya School</strong> — Mathematics &amp; English
                            <span class="text-neutral-500">(2021 – 2024)</span>
                        </h4>
                    </div>
                </section>

                <!-- Beyond Code -->
                <section class="space-y-[8px]">
                    <h4 class="text-[14px] font-normal text-neutral-600 xl:text-[16px]">
                        🔭 Astronomy 🌌 &nbsp;·&nbsp; ✈️ A350 &nbsp;·&nbsp; 🏫 SRV74 &nbsp;·&nbsp; 🙃 ISTJ
                    </h4>
                </section>

                <!-- Contact -->
                <section class="pt-[6px]">
                    <h1 class="text-[20px] font-bold xl:text-[22px]">
                        {{ page_lang === 'EN' ? 'Contact' : 'ช่องทางติดต่อ' }}
                    </h1>

                    <div class="w-full h-max flex flex-wrap gap-[10px] pt-[12px]">
                        <NuxtLink
                            to="https://github.com/kang49"
                            external
                            target="_blank"
                            class="text-[14px] font-normal text-orange-600 bg-orange-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 -rotate-2 hover:rotate-0 hover:scale-105 xl:text-[16px]"
                        >
                            GitHub
                        </NuxtLink>
                        <NuxtLink
                            to="https://www.linkedin.com/in/aramrak-kan"
                            external
                            target="_blank"
                            class="text-[14px] font-normal text-sky-700 bg-sky-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 rotate-1 hover:rotate-0 hover:scale-105 xl:text-[16px]"
                        >
                            LinkedIn
                        </NuxtLink>
                        <NuxtLink
                            to="https://medium.com/@kang49"
                            external
                            target="_blank"
                            class="text-[14px] font-normal text-neutral-800 bg-neutral-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 -rotate-1 hover:rotate-0 hover:scale-105 xl:text-[16px]"
                        >
                            Medium
                        </NuxtLink>
                        <NuxtLink
                            to="https://www.instagram.com/kan_g49/"
                            external
                            target="_blank"
                            class="text-[14px] font-normal text-pink-600 bg-pink-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 rotate-2 hover:rotate-0 hover:scale-105 xl:text-[16px]"
                        >
                            Instagram
                        </NuxtLink>
                        <NuxtLink
                            to="https://www.facebook.com/KankaweeG49/"
                            external
                            target="_blank"
                            class="text-[14px] font-normal text-blue-600 bg-blue-200 w-max h-max px-[10px] py-[2px] rounded-[10px] transition-all duration-200 -rotate-2 hover:rotate-0 hover:scale-105 xl:text-[16px]"
                        >
                            Facebook
                        </NuxtLink>
                    </div>
                </section>
            </div>
        </div>
    </div>

    <div class="w-full h-max pt-[50px]">
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

const page_lang = ref(Cookies.get('page_lang') ?? 'EN');
function Page_Lang_EmitHandler(lang: string) {
    page_lang.value = lang === 'EN' ? 'EN' : 'TH';
}

onMounted(() => {
    setTimeout(() => {
        document.title = 'Kankawee Aramrak กันต์กวี อารามรักษ์ (About me)';
    }, 200);
});
</script>
