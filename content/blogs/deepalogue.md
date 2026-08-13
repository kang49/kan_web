---
date: 2025-01-31
image: https://i.imgur.com/IXF1I3Z.png
title: เมื่อผมอยากให้ AI แปลเกม (DeepAlogue Project)
description: DeepAlogue คืออะไร❓ DeepAlogue เป็นโปรแกรมง่ายๆ ที่จะเป็นตัวกลาง ทำหน้าที่ screenshort ข้อความจากเกมของคุณ...
title_th: เมื่อผมอยากให้ AI แปลเกม (DeepAlogue Project)
description_th: DeepAlogue คืออะไร❓ DeepAlogue เป็นโปรแกรมง่ายๆ ที่จะเป็นตัวกลาง ทำหน้าที่ screenshort ข้อความจากเกมของคุณ...
tags: ['my stack', ai, llm, my project]
language: TH
showbothlang: true
---

::blog-info
::

## <span class="text-green-500">#</span> DeepAlogue คืออะไร ❓

<br>

DeepAlogue เป็นโปรแกรมง่ายๆ ที่จะเป็นตัวกลาง ทำหน้าที่ screenshort ข้อความจากเกมของคุณ และส่งมันให้ LLM(Large Language Model) แปลข้อความ จากนั้นแสดงเป็น Overlay ทับซ้อนเกมของคุณ เพื่อให้คุณอ่านเนื้อเรื่องของเกมได้สะดวกโดยไม่ต้องสลับจอไปมา หรือถือโทรศัพท์เปิด Translator อีกทั้ง LLM ยังแปลเนื้อเรื่องได้มีอรรถรสและเข้าใจเนื้อเรื่องได้ดีกว่า Translator ทั่วไป

<br>

**ลิงค์ GitHub**: [https://github.com/kang49/deepalogue](https://github.com/kang49/deepalogue)

<br>

## <span class="text-green-500">#</span> ทำไมถึงทำโปรเจคนี้ ❓

<br>

บางครั้งเรามีเกมที่เราชอบมากๆ แต่น่าเสียดายที่เกมนั้นไม่มีแปลไทย (โคตร Sad) จะนั่งแปลเองก็เหนื่อยมากๆ ยิ่งเป็นเกมเนื้อเรื่องยาวๆ 6-8ชม. นี่ไม่ไหวเลย เราก็เลยคิดเอา LLM มาช่วยแปล ตอนแรกก็ว่าจะเก็บไว้ใช้คนเดียว เพราะ CodeBase แย่จัดๆสร้างมาแบบรีบๆแปลได้ก็พอ555 แต่ก็คิดว่าน่าจะมีคนที่อยากได้อะไรแบบนี้เหมือนกัน ก็เอาลง GitHub ไปใช้กันฟรีๆเลยละกันนะ

<br>

## <span class="text-green-500">#</span> ภาพตัวอย่าง 📸

<br>
<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/2RZtNUC.png" alt="project-screenshort" class="w-full">
    </div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/5BzBagQ.png" alt="project-screenshort" class="w-full">
    </div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/Txs1PE3.png" alt="project-screenshort" class="w-full">
    </div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/qTM891J.png" alt="project-screenshort" class="w-full">
    </div>
    </div>
</center>
<br>

## <span class="text-green-500">#</span> ฟีเจอร์เด่นของ DeepAlogue ✨

<br>

- **เป็น Open Source**: ทุกคนสามารถนำโปรเจคนี้ไปใช้ได้ฟรีๆ จะเอาไปพัฒนาต่อ จะเอาไปยัดใส่โปรเจคอื่นไปขาย ก็แล้วแต่เลย แต่อ่าน [LICENSE](https://github.com/kang49/deepalogue/blob/main/LICENSE.md) ก่อนนะ
- **ใช้ AI LLM แปล**: ทำให้ได้อรรถรสและเข้าใจเนื้อเรื่องได้ดีกว่า Translator ทั่วไป
- **ใช้ EasyOCR**: Opensource OCR ที่ช่วยตรวจจับข้อความจากภาพได้แม่นยำกว่า Tesseract
- **Show as Overlay**: แสดงข้อความทับซ้อนเกมของคุณ ไม่ต้องสลับจอไปมา และปิดได้ทันทีแค่คลิก
- **Json format**: AI ถูก Prompt ให้ส่งข้อมูลเป็น Json ทำให้สามารถนำไปใช้งานต่อได้ง่าย
- **Ollama API**: ใช้ API ของ Ollama ในการเรียกใช้ LLM เป็น Opensource ที่มีการอัพเดทอยู่เสมอและมี Contributor มากมาย ทำให้รองรับ Hardware ที่หลากหลาย และอาจจะมีการปรับปรุงให้ดีขึ้นต่อไปสำหรับ Hardware ใหม่ๆเพื่อรีด Performance ให้เต็มที่

<br>

## <span class="text-green-500">#</span> ใช้ LLM ตัวไหน

<br>

ตอนแรกเราเริ่มโปรเจ็กนี้เพราะว่าง และเห็น DeepSeek ที่กำลังเป็นที่ Talk of the Town พอดีเลยอยากเอามันมาใช้ดู เพราะเห็นว่าใช้ Resource น้อยกว่า Model อื่นๆ แต่เราลองเอามาทำแล้วไม่ค่อยได้ผล เหมือนว่าจะเกิด Bias Language มากเกินไป ทำให้บางทีก็จะพ่นคำภาษาอื่นออกมาบ่อยกว่าตัวอื่นๆ

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/rMEUcWn.png" class="w-full" alt="Data Center batteries room">
</div>

<p class="text-right text-[12px] text-black/50">
    ภาพประกอบ
</p>

และด้วยความที่ Model R1 ถูกสอนมาให้คิดอย่างเป็นเหตุผล รอบคอบและทวนคำตอบเสมอ ทำให้ใช้เวลาอย่างมากในการแปล ซึ่ง Model ที่ผมทดสอบตอนนั้นเป็น **DeepSeekR1 14b** ถือว่าไม่เล็กไม่ใหญ่ แต่ก็ใช้ Resource ของคอมพิวเตอร์จนเกือบหมด หากใช้ตัวที่มีขนาดพารามิเตอร์น้อยกว่านี้ ก็ยิ่งไม่รอดเลย

ส่วน Model DeepSeekV2.5 - V3 มีขนาดที่ใหญ่เกินไปและใช้ Response Time สูงเช่นกัน ไม่เหมาะกับการเอามาแปลเกมซึ่งต้องการความรวดเร็ว

ในที่สุดผมก็ได้พบ Model ที่ดีที่สุดจากที่ทดสอบมาหลายตัวมากๆ นั่นคือ **Gemma2 9b พารามิเตอร์** ใช้ Resource พอๆกันโมเดลมีขนาดเล็กกว่า แต่กลับให้ผลลัพธ์ที่ดี จนเป็น Model ที่ผมใช้ในโปรเจคนี้

<br>

## <span class="text-green-500">#</span> เกี่ยวกับ Gemma2 🤖

<br>

Gemma2 เป็นโมเดลภาษาขนาดใหญ่ (Large Language Model) ที่พัฒนาโดย Google ซึ่งเป็นส่วนหนึ่งของแฟมิลี่ Gemma ที่เป็น Opensource หลายคนน่าจะรู้จักกันดี

<br>

Google พัฒนาต่อจาก Gemma รุ่นแรก ปรับปรุงเพื่อ Performance เข้าไปในหลายๆด้าน และเปิดตัวในเดือนมิถุนายน ปี2024

<br>

Gemma2 มีสามขนาดหลัก คือ 2 พันล้านพารามิเตอร์ (2B) 9 พันล้านพารามิเตอร์ (9B) ที่เราใช้ และ 27 พันล้านพารามิเตอร์ (27B) โดยมีทั้งเวอร์ชันที่ผ่านการฝึกฝนเบื้องต้น (base) และเวอร์ชันที่ผ่านการปรับแต่งคำสั่ง (instruction tuned)

<br>

**Training Sizes**: Gemma2 รุ่น 9B ถูกฝึกฝนด้วยข้อมูลประมาณ 8 ล้านล้านโทเคน ในขณะที่รุ่น 27B ถูกฝึกฝนด้วยข้อมูลประมาณ 13 ล้านล้านโทเคน

อ่านต่อได้ที่
<div class="text-blue-600 underline text-[16px] space-y-[10px]">
  <p><a href="https://storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf">Gemma2</a></p>
</div>

<br>

## <span class="text-green-500">#</span> ทำไม UI โล่ง

<br>

เราชอบที่จะทำ UI สวยๆนะ แน่นอนว่าใครๆก็ชอบเพราะมันดูใช้งานง่าย แต่สิ่งที่เราต้องแลกมาคือ Resource การใช้งานปกติเปิด window มาก็ปิดทิ้งเข้าเกมแล้ว แทบไม่มีประโยชน์อะไรที่จะทำ UI ให้สวยกว่านี้ อีกทั้งโปรแกรมนี้ต้องเปิดตอนเล่นเกม แถมตอนรัน LLM Model ไปด้วยอีก แค่นี้ก็ใช้ Resource ของเครื่องจนหมดแล้ว ผมเลยเน้นให้มัน Clean ที่สุดเท่าที่จะทำได้ดีกว่า

<br>

## <span class="text-green-500">#</span> ทำไมใช้ได้แค่ภาษาไทย

<br>

ใครอยากทำภาษาอื่น มันง่ายมากแค่เอาโค๊ดผมไปแล้วเปลี่ยน prompt ในนั้น บอก AI ให้แปลภาษาที่คุณต้องการ แต่สาเหตุที่ผมเจาะจงที่ภาษาไทย ผมอยากลดโอกาสที่จะเกิด Bias Language และให้ความสำคัญกับ Community คนไทยมากกว่า

<br>

## <span class="text-green-500">#</span> จะมีการ Update ต่อไหม

<br>

จะพยายาม Update โปรเจคนี้ถ้ามีเวลาว่าง และมีคนสนใจใช้งานอยู่ตลอด แต่โดยส่วนใหญ่โปรเจ็กมันไม่มีอะไรจำเป็นพัฒนาต่อแล้ว แต่ถ้ามี Issue หรือ Optimization ที่สามารถทำได้ ก็หาเวลามาอัพเดตให้

<br>

## <span class="text-green-500">#</span> Big Thanks 🙏

<br>

Ollama เป็นแพลตฟอร์มที่ดีมากสำหรับการรันโมเดล LLM
<div class="text-blue-600 underline text-[16px] space-y-[10px]">
  <p><a href="https://ollama.com">Ollama</a></p>
</div>

<br>

Gemma2 พัฒนาโดย Google เป็นโมเดลที่ดีที่สุดสำหรับการแปลในโปรเจ็กนี้ที่ผมได้ทดสอบมา
<div class="text-blue-600 underline text-[16px] space-y-[10px]">
  <p><a href="https://storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf">Gemma2</a></p>
</div>

<br>

OCR library มีความแม่นยำสูงและใช้งานง่าย
<div class="text-blue-600 underline text-[16px] space-y-[10px]">
  <p><a href="https://github.com/JaidedAI/EasyOCR">EasyOCR</a></p>
</div>

<br>

## <span class="text-green-500">#</span> อ้างอิง 📄

<br>

<div class="text-blue-600 underline text-[12px] space-y-[10px]">

<p>DeepMind. (2024). <i>Gemma 2: A large-scale language model</i>. Retrieved June 27, 2024, from <a href="https://storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf">https://storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf</a></p>

</div>