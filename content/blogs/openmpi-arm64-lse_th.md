---
date: 2026-11-20
image: https://i.imgur.com/2w3Wypk.png
title: I Fixed Two Bottlenecks in Open MPI (2x–5x Faster)
description: I just wanted to run a quick test on my ARM64 box. Somehow I got trolled by CPU power-saving, a slow stopwatch, and ended up sending a PR to Open MPI.
title_th: ผมแก้คอขวดใน Open MPI ให้เร็วขึ้น 2–5 เท่า
description_th: สวัสดีทุกคน วันนี้จะมาเล่าวีรกรรมความว่างของตัวเอง จากแค่กะจะเปิดเครื่อง ARM มารันเทสเล่นๆ 5 นาที สุดท้ายบานปลายไปนั่งงมโค้ด Open MPI ยันตีสองเฉย...
tags: ['hpc', programming, tech, computerscience]
language: TH
---

::blog-info
::

สวัสดีทุกคนเลยนะ วันนี้ไม่ได้จะมาเขียนบทความวิชาการจ๋าๆ ให้อ่านแล้วหลับ แต่จะมาเล่าความปั่นของโปรเจกต์ล่าสุดที่เพิ่งทำเสร็จไป (ใครอยากดูเวอร์ชันเอาจริงเอาจัง เปเปอร์ 5 หน้า ตัวเลขครบๆ กดไปดูใน GitHub ได้ที่นี่เลย: <a class="text-blue-600 underline" href="https://github.com/kang49/arm64-openmpi-lse-research">kang49/arm64-openmpi-lse-research</a>)

เรื่องทั้งหมดมันเริ่มจากประโยคคลาสสิกที่คนสายคอมชอบหลอกตัวเองว่า **"เดี๋ยวลองรันเทสแป๊บเดียว 5 นาทีก็เสร็จ"**... ตัดภาพมาอีกที คือตื่นมานั่งจ้องหน้าจอดำๆ อ่าน assembly ตอนตีสองไปแล้วเรียบร้อย เอาล่ะ ไปฟังความบรรลัยนี้กัน... yeah!

<br>

## <span class="text-green-500">#</span> จุดเริ่มต้น: แค่อยากลองว่า ARM มันแน่แค่ไหน

<br>

เรื่องมันมีอยู่ว่าผมมีบอร์ด ARM64 4 คอร์อยู่ตัวนึง แล้วได้ยินมาว่าชิป ARM ยุคใหม่มันมีฮาร์ดแวร์ช่วยจัดการคิวเวลาหลายๆ คอร์คุยกันพร้อมกัน (ที่เขาเรียกกันว่า **LSE**) ผมก็เลยคิดง่ายๆ ว่า งั้นเอา **Open MPI** (ตัวช่วยส่งข้อความเวลาหลายคอร์ทำงานด้วยกัน) มารันเทสดูหน่อยซิว่ามันจะแรงขึ้นขนาดไหน

ในหัวคือคิดไว้สวยหรูมาก: คอมไพล์ -> รัน -> แคปกราฟสวยๆ -> จบ แยกย้ายนอน

<br>

## <span class="text-green-500">#</span> โดนแกงรอบที่ 1: ดีใจเก้อเพราะ CPU แอบอู้

<br>

รันเทสรอบแรกออกมาปุ๊บ... เชี่ย!! ตัวเลขเวลาลดฮวบลงมาเฉย! ตอนนั้นคือยิ้มมุมปากแล้ว คิดในใจว่า *"กูนี่มันเกิดมาเพื่อสาย Systems จริงๆ ว่ะ จับอะไรก็แรง"*

แต่พอดีเป็นคนขี้ระแวง เลยลองเปิดดูความเร็ว CPU ระหว่างที่มันรัน... อ้าว ไอ้สัส ไม่ใช่ฝีมือเราเลย! Linux มันเปิดโหมดประหยัดไฟไว้ ตอนเริ่มรัน CPU แม่งหลับอยู่ที่ `1.50 GHz` พอเทสไปได้ครึ่งทางมันเพิ่งตื่นแล้วเร่งเครื่องเป็น `2.40 GHz` มันก็เลยดูเหมือนครึ่งหลังเร็วขึ้นแบบงงๆ

สรุปคือความเก่งทั้งหมดเมื่อกี้ = **CPU เพิ่งตื่นนอน** พอล็อกความเร็วให้มันวิ่งเต็มสูบเท่ากันตั้งแต่ต้นจนจบ ตัวเลขก็นิ่งสนิทเหมือนเดิม โดนรับน้องไป 1 ดอกแบบจุกๆ 5555

<br>

## <span class="text-green-500">#</span> โดนแกงรอบที่ 2: นาฬิกาจับเวลาแม่งช้ากว่าโค้ดอีก

<br>

ยังไม่เข็ดครับ รอบนี้ลองลงไปวัดคำสั่งระดับเล็กสุดๆ ที่วิ่งแค่ไม่กี่นาโนวินาที ปรากฏว่าวัดยังไงแบบเก่ากับแบบใหม่ก็ออกมาเท่ากันเป๊ะเลย งงแดกไปพักนึงว่าทำไมฮาร์ดแวร์ใหม่มันไม่เห็นช่วยอะไรเลยวะ

พอมานั่งเช็กตัวจับเวลาที่ใช้... โอเค รู้เรื่อง โค้ดที่วัดแม่งวิ่งอยู่ 6 นาโนวินาที แต่ฟังก์ชันจับเวลาที่เอามาครอบแม่งเสียเวลาเรียกไปแล้ว 37 นาโนวินาที!

อารมณ์เหมือนเอา **ตาชั่งรถสิบล้อมาชั่งมด** อะครับ มดจะอ้วนจะผอมแค่ไหน ตาชั่งมันก็ขึ้นเลขเดิมตลอด สุดท้ายเลยต้องลงไปเขียนโค้ดอ่านนาฬิกาจากฮาร์ดแวร์ตรงๆ ถึงจะเริ่มเห็นของจริงซะที

<br>

## <span class="text-green-500">#</span> พอวัดตรงเท่านั้นแหละ เจอบั๊กจริงใน Open MPI เฉย

<br>

พอเครื่องมือวัดเราไม่โกหกแล้ว ผมก็เลยเอาไปส่องไส้ในของ **Open MPI** จริงๆ ดูบ้าง เผื่อเจออะไรแปลกๆ... แล้วแม่งก็เจอจริงๆ ด้วย 2 ตัวเน้นๆ:

### 1. คิวที่ปล่อยให้เธรดวิ่งชนกำแพงไม่หยุด
ตอนเปิดโค้ดจัดการคิว (`opal_lifo.h`) ไปเจอว่าคนเขียนยุคก่อนเขาเขียนดักไว้ว่า *"ถ้าแย่งคิวพลาด 5 รอบ ให้หลบทางให้เพื่อนก่อนนะ"* แต่เขาเขียนไว้แค่ฝั่งโค้ดแบบเก่า ส่วนฝั่งใหม่ที่เพิ่งเพิ่มเข้ามา... **พี่แกลืมใส่!** มันเลยสปินแย่งกันรัวๆ ไม่ยอมพัก พอเติมเข้าไปแค่ไม่กี่บรรทัด ความเร็วพุ่งขึ้นไป 4–5 เท่าเฉยเลย งงมากว่าทำไมไม่มีใครทักมาตั้งแต่ปี 2021

<br>

<center>
  <div>
    <div class="w-full md:w-3/4 p-2">
      <img src="https://raw.githubusercontent.com/kang49/arm64-openmpi-lse-research/main/paper/figures/fig_atomic_scaling.png" alt="Micro-batched atomic latency and 4-way opal_lifo isolation" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://github.com/kang49/arm64-openmpi-lse-research
      </p>
      <p class="text-[12px] text-black">
    Figure 1: (ซ้าย) การเปรียบเทียบค่า Latency และ p99 Tail Latency ระหว่าง LL/SC และฮาร์ดแวร์ LSE (K=32, 2.40 GHz) และ (ขวา) ผลการทดสอบแยก 4 รูปแบบของคิว opal_lifo_t ที่ 2, 4 และ 8 เธรด
      </p>
    </div>
  </div>
</center>

<br>

### 2. ฟังก์ชันร้างที่เสือกกิน CPU ไปเกือบ 40%
อันนี้พีคสุด ผมเปิดดูว่า CPU เอาเวลาไปทำอะไรระหว่างส่งข้อความธรรมดา ปรากฏว่ามีฟังก์ชันนึงที่เกี่ยวกับฟีเจอร์ใหม่ (ซึ่งในเทสกูไม่ได้เปิดใช้เลยสักนิด!) แม่งซด CPU ไป **38.29%**

พอเปิดโค้ดเข้าไปดู อห. ที่ไม่ใช่โอ้โห คือทุกๆ รอบที่โปรแกรมรอข้อความ มันเข้าไปนับ atomic counter แล้วก็ล็อกกุญแจ mutex อย่างดี **...เพื่อที่จะค่อยเข้าไปเช็กข้างในว่า "อ้าว ยังไม่ได้เปิดใช้งานนี่หว่า" แล้วก็เดินออกมา**

เหมือนเดินไปไขกุญแจบ้าน 3 ชั้น เปิดไฟ เข้าไปดูป้ายหน้าตู้เย็นว่า *"วันนี้ไม่ขาย"* แล้วเดินออกมามันทุกรอบอะครับ พอจับย้ายการเช็กมาไว้หน้าประตู (แบบปลอดภัยสำหรับ Multi-thread ด้วยนะ ไม่งั้นพัง) เวลารอข้อความลดลงไปครึ่งนึงทันที!

<br>

<center>
  <div>
    <div class="w-full md:w-3/4 p-2">
      <img src="https://raw.githubusercontent.com/kang49/arm64-openmpi-lse-research/main/paper/figures/term_objdump.png" alt="Terminal capture of ldapr and MPI_Test" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://github.com/kang49/arm64-openmpi-lse-research
      </p>
      <p class="text-[12px] text-black">
    Figure 2: ผล disassembly จาก objdump แสดงคำสั่ง FEAT_LRCPC ldapr ในฟังก์ชัน mca_part_persist_progress และผลวัดเวลา MPI_Test() 5 รอบภายใต้ MPI_THREAD_MULTIPLE
      </p>
    </div>
  </div>
</center>

<br>

<center>
  <div>
    <div class="w-full md:w-3/4 p-2">
      <img src="https://raw.githubusercontent.com/kang49/arm64-openmpi-lse-research/main/paper/figures/fig_ablation.png" alt="osu_latency DVFS ablation and MPI_Test poll latency" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://github.com/kang49/arm64-openmpi-lse-research
      </p>
      <p class="text-[12px] text-black">
    Figure 3: (ซ้าย) การเปรียบเทียบ osu_latency ที่ล็อกความถี่ 2.40 GHz เทียบกับผลคลาดเคลื่อนจาก ondemand DVFS และ (ขวา) ค่า Latency ของ MPI_Test() ก่อนและหลังใช้ fast-path
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> สรุป

<br>

มาสรุปสั้นๆ ให้เห็นภาพกันชัดๆ เลยว่าแก้ไปแล้วได้อะไรบ้าง:

- **เคสคิว `opal_lifo` (หลายเธรดแย่งกันหยิบ/วางงาน):** เร็วขึ้น **`4.34×–5.53×`** (`180.4 -> 32.6 ns` ที่ 2 เธรด, `168.8 -> 34.0 ns` ที่ 4 เธรด, และ `165.8 -> 38.2 ns` ที่ 8 เธรด)
- **เคสเช็กสถานะข้อความแบบไม่บล็อก (`MPI_Test()` ภายใต้ `MPI_THREAD_MULTIPLE`):** ตัดวงจร CPU ที่เสียเปล่าไป **38.29%** และทำให้ `MPI_Test()` เร็วขึ้น **`2.10×`** (ลด latency ลง **52.3%** จาก `57.05` เหลือ `27.20 ns/call`)
- **ฝั่งฮาร์ดแวร์ ARM64 LSE vs LL/SC (ที่ 4 คอร์):** ลดวงจรชนกันแล้วต้องทำใหม่จนเหลือ `0.000 aborts/op` ทำให้ความนิ่งของเวลา (**Variance**) ดีขึ้น **`3.88×`** และลด latency ช่วงปลายแถว (**p99**) ลง **`2.04×`**

**ใครได้ประโยชน์?**
คนที่รันงาน **HPC, AI หรือการคำนวณวิทยาศาสตร์** ที่ใช้ Open MPI บนชิป **ARM64** (ตั้งแต่คลัสเตอร์อย่าง Raspberry Pi 5 / BCM2712 ไปจนถึงเซิร์ฟเวอร์อย่าง AWS Graviton, Ampere หรือ A64FX) โดยเฉพาะโปรแกรมที่รันหลายเธรดพร้อมกัน (`MPI_THREAD_MULTIPLE`) หรือเช็กสถานะข้อความแบบ asynchronous บ่อยๆ โดยไม่ได้เปิดใช้ Partitioned Communication (จริงๆ ตัวแก้ `part/persist` ช่วยลดงานให้ฝั่ง x86 และ POWER ด้วยเช่นกัน)

**ส่ง PR**
จากโปรเจกต์ที่กะจะเทส 5 นาที ตอนนี้กลายเป็นเปเปอร์ 5 หน้า พร้อมแพตช์ 2 ตัว โดยตัวแรก (`part/persist`) ส่ง **Pull Request เข้า repo หลัก `open-mpi/ompi` (`main`)** ไปแล้ว หวังว่าจะโดน Merge นะ 555 ถ้าได้เมื่อไหร่ ARM Supercomputer และนักวิจัยที่รันบน Open MPI เวอร์ชันถัดไปก็จะได้ความเร็วนี้ติดเครื่องไปใช้ฟรีๆ

ใครอยากอ่านตัวเปเปอร์จริงจัง ดูกราฟ ดูโค้ดเทส หรือเอาแพตช์ไปส่อง กดเข้าไปดูใน GitHub Project ได้เลยครับ: <a class="text-blue-600 underline" href="https://github.com/kang49/arm64-openmpi-lse-research">https://github.com/kang49/arm64-openmpi-lse-research</a> ส่วนวันนี้ขอตัวไปนอนชดเชยก่อนครับ ไม่ไหวแล้ว!

<br>

**Disclaimer:** งานทั้งหมดนี้เป็นงานทดลองส่วนตัวแบบ **non-peer-reviewed** (ยังไม่ได้ผ่านการตรวจจากผู้เชี่ยวชาญสายวิชาการจริงๆ) แถมคนเขียนก็เป็นแค่นักศึกษาปี 1 เงอะง๊ะคนนึงที่เพิ่งหัดรื้อโค้ดเล่น ยังไงก็อย่าเพิ่งเชื่อผมมาก **โปรดใช้จักรยานในการอ่าน** และถ้าเจอตรงไหนมั่วหรือผิดพลาด ทักมาด่า เอ๊ย ทักมาแนะนำกันได้เลยนะครับ 5555

<br>

## <span class="text-green-500">#</span> อ้างอิง

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
<p>Kankawee Aramrak. (2026). <i>arm64-openmpi-lse-research: Paper, Benchmarks, and Patches</i>. GitHub: <a href="https://github.com/kang49/arm64-openmpi-lse-research">https://github.com/kang49/arm64-openmpi-lse-research</a></p>
<p>Open MPI Fork — Part Persist Fast-Path Branch. GitHub: <a href="https://github.com/kang49/ompi/tree/fix/part-persist-progress-fastpath">https://github.com/kang49/ompi/tree/fix/part-persist-progress-fastpath</a></p>
<p>Open MPI Fork — OPAL LIFO 128-bit CAS Backoff Branch. GitHub: <a href="https://github.com/kang49/ompi/tree/fix/opal-lifo-cas128-backoff">https://github.com/kang49/ompi/tree/fix/opal-lifo-cas128-backoff</a></p>
</div>

<br>

## <span class="text-green-500">#</span> เลี้ยงกาแฟ

<br>

ถ้าอ่านแล้วฮาหรือชอบคอนเทนต์แนวนี้ สามารถเลี้ยงกาแฟผมได้ที่ <a class="text-blue-600" href="https://buymeacoffee.com/metakeen">Buy me a coffee</a>
