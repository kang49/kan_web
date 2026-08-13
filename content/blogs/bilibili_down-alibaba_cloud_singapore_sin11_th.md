---
date: 2024-09-12
image: https://i.imgur.com/AJ38CpV.png
title: Bilibili ล่มไปหลายวัน เกิดจากอะไร?
description: เมื่อไม่กี่วันที่ผ่านมา วันที่ 10 กันยายน 2024 บางคนอาจได้ยินข่าวมาบ้างจาก Facebook Group ของ Bilibili...
title_th: Bilibili ล่มไปหลายวัน เกิดจากอะไร?
description_th: เมื่อไม่กี่วันที่ผ่านมา วันที่ 10 กันยายน 2024 บางคนอาจได้ยินข่าวมาบ้างจาก Facebook Group ของ Bilibili...
tags: ['technical', cloud, anime]
language: TH
showbothlang: true
---

::blog-info
::

## <span class="text-green-500">#</span> เกริ่น

<br>

เมื่อไม่กี่วันที่ผ่านมา **วันที่ 10 กันยายน 2024** บางคนอาจได้ยินข่าวมาบ้างจาก [Facebook Group ของ Bilibili](https://www.facebook.com/groups/749321652323683) ว่ามีผู้ใช้งานบางคนไม่สามารถเข้าถึง Content ต่างๆบน [**Bilibili**](https://www.bilibili.tv/th/) ได้ หลายๆคนก็ยืนยันกันใน Comment ว่าเจอเหมือนกัน ซึ่งใน Blog นี้ผมจะอธิบายเหตุการณ์ต่างๆ จากมุมมองบุคคลภายนอก ว่ามันมีที่มาจากอะไรและ Technical ที่คิดว่าน่าจะเป็นไปได้ และ เราจะได้เรียนรู้กับระบบ Cloud บางเรื่องด้วย

<br>

## <span class="text-green-500">#</span> Disclaimer

<br>

การวิเคราะห์ในบทความนี้ **เป็นการวิเคราห์เหตุการณ์จากบุคคลภายนอก** และ **แหล่งข่าวที่แถลงออกมาหลังจากเหตุการณ์เกิดขึ้น** เท่านั้น อาจมีข้อมูลบางอย่างตกหล่น หรือผิดไปจากความเป็นจริง

<br>

## <span class="text-green-500">#</span> Alibaba Cloud กับไฟที่ไหม้บ้าน

<br>

เรื่องทั้งหมดมันเริ่มมาจากการระเบิดของ **แบตลิเทียม** ซึ่งโดยปกติแล้ว **Data Center** จะมีแบตลิเทียมเอาไว้เพื่อใช้ในกรณีที่เกิดไฟดับ อันที่จริงมันก็เหมือน UPS(เครื่องสำรองไฟ) ของ Data Center ที่ข้างในมีแบตเตอรี่

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/d3U3tkz.jpeg" class="w-full" alt="Data Center batteries room">
</div>

<p class="text-right text-[12px] text-black/50">
    เป็นเพียงภาพประกอบ ไม่ใช่สถานที่เกิดเหตุจริง
    <br>
    https://datacenterpost.com/need-ups-data-centers
</p>

<br>

เมื่อเวลา **7:45 น. ของวันที่ 10 กันยายน 2024** ตามเวลาปักกิ่ง ที่ศูนย์ข้อมูล [Digital Realty SIN11](https://www.digitalrealty.com/data-centers/asia-pacific/singapore/sin11) เจ้าหน้าที่บางส่วนได้ยินเสียง**สัญญาณไฟดัง** และ รีบอพยพพนักงานภายในอาคารออกทันที ภายในเวลา **8:15 น.** **ไม่มีผู้ได้รับบาดเจ็บ หรือเสียชีวิต**

<br>

![Digital Raalty](https://i.imgur.com/0g7hI57.jpeg)
<p class="text-right text-[12px] text-black/50">
    Source: https://www.facebook.com/photo?fbid=916545553840824&set=pcb.916546380507408
</p>

<br>

**เวลา 10:20 น.** ทาง **Alibaba Cloud** ตรวจสอบแล้วพบว่า พบความผิดปกติขึ้นที่ **Availability Zone C** และทาง Alibaba Cloud พยายามอย่างถึงที่สุด เพื่อที่จะ Migrate ข้อมูลไปยัง Data Center อื่น นั่นเป็นเวลาเดียวกับตอนที่ **Bilibili** ได้ล่มไปและมีคนเริ่มโพสต์ถามกัน

<br>

![Bilibili Down Posts](https://i.imgur.com/5YGNNM2.png)

<br>

**Cloud Database Redis/MongoDB/RDS MySQL, OSS และ OTS** ประสบความสําเร็จในการกู้คืนความเสียหายภายในไม่กี่ชั่วโมงหลังเกิดเหตุ

<br>

## <span class="text-green-500">#</span> Availability Zone

<br>

ก่อนที่จะอธิบายสาเหตุ ขอเกริ่นก่อนว่า **Regions**, **Zones** มันมีความสัมพันธ์กันอย่างไร และทำไมถึงเกี่ยวกับที่ **Bilibili** ล่มไป

<br>

**Zone** คือตำแหน่งที่ตั้ง **Data Center** แต่ละแห่งของ **Region** โดยแต่ละ Zone ก็จะมี **infrastructure** เช่น **แหล่งพลังงาน** หรือ **Network** แยกออกจากกัน เพื่อที่หากมี Zone ไหนดับไป อีก Zone ก็จะได้ทำงานต่อได้ โดยแต่ละโซนก็จะมีถนนใหญ่ที่เชื่อมแต่ละ Zone เข้าด้วยกัน เพื่อให้ Network ภายใน Region นั้นมีความเร็วที่สูง

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/tbALCN7.png" class="w-full" alt="Alibaba Cloud relationship between regions and zones">
</div>

<p class="text-right text-[12px] text-black/50">
    Source: https://www.alibabacloud.com/help/en/ecs/product-overview/regions-and-zones
</p>

<br>

อย่างที่นี้ ใน **Singapore** ก็จะมี **Data Center** ของ Alibaba Cloud อยู่หลาย Zone ซึ่งตามที่เกิดเหตุคือ **Zone C**

<br>

![Alibaba Cloud Singapore](https://i.imgur.com/mnoppS5.png)
<p class="text-right text-[12px] text-black/50">
    Source: https://www.alibabacloud.com/help/en/ecs/product-overview/regions-and-zones
</p>

<br>

ที่นี้ผมเดาว่า (ย้ำว่านี่คือการเดา และ**ไม่ได้มีเจตนาทำให้ Bilibili เสียหาย**)

<br>

ปกติแล้วเวลาเราสร้าง **Instant** เพื่อที่จะทำอะไรสักอย่างบน **Cloud Service** มันจะมีให้เราเลือก ว่าเราจะสร้างไว้ที่ Region ไหนและ Zone ไหน เช่น ถ้าผมอยากจะให้บริการที่ US กับไทย ผมก็เปิดไปเลย 3 Zone ที่ US อาจจะตั้งแยกกันในแต่ละรัฐ ส่วนในไทยผมอาจจะตั้งประเทศใกล้ๆอย่าง **Singapore** แต่อาจจะเลือกเปิดแค่ Zone เดียว ซึ่งมันก็แล้วแต่เลยว่า Solution ที่ตอบโจทย์ของเราอยากจะใช้แบบไหน บางทีก็แล้วแต่ Design ด้วย แต่ในกรณีนี้ผมคิดว่า **bilibili.tv** เลือกที่จะใช้เพียง **Zone C** ที่ดับไป ทำให้เราไม่สามารถเข้าถึง **Content** ได้ที่ไหนอีกเลย

<br>

ถ้ามองจากมุมมองภายนอก เราไม่รู้เลยว่า Bilibili ใช้ Service อะไรใน Cloud ที่ไฟไหม้ไป จะเป็น **Database** มั้ย เพราะหลังจากเกิดเหตุการณ์ขึ้น เราถูกตัดออกจากการ **Login** ทันที หรือจะเป็น **CDN (Content Delivery Network)**

<br>

## <span class="text-green-500">#</span> Comeback

<br>

**วันที่ 12 กันยายน 2024** เป็นเวลาที่ผมเขียน Paragraph นี้ และ Bilili ได้**กลับมาออนไลน์แล้ว**หลังจาก**หายไป 2วันกว่าๆ** อันนี้ผมเดานะ ก็คือ ตอนแรกที่ยังกู้สถานการณ์ไม่ได้ น่าจะเพราะไม่สามารถเข้าถึงข้อมูลได้ เท่าที่ผมอ่านมา ในวันแรกหลังจากเกิดเหตุ ภายในอาคารมีความร้อนสูง และ อันตรายต่อเจ้าหน้าที่ในการเข้าไปจัดการตัว **Server** ที่อยู่ข้างใน ทำให้ข้อมูลที่จำเป็นยังคงกู้คืนไม่ได้ เมื่อเวลาผ่านไปจนมั่นใจว่าปลอดภัย และพนักงานสามารถเข้าไป **Reboot** ระบบกลับขึ้นมาได้ นั่นถึงเป็นเวลาที่ Engineer ฝั่ง Bilibili สามารถเข้าถึงข้อมูลและทำการย้าย **Instant** ไปไว้ที่ **Zone** อื่น (หรืออาจจะโซนเดิม)

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/B8qrtTw.png" class="w-full" alt="Bilibili back to online">
</div>

<br>

Facebook Official Page ของ **Bilibili Thailand** ได้ประกาศ **กำลังทยอยกลับมาให้บริการปกติ** แล้ว แต่มีคำเตือนว่า**ห้ามสมัคร Premium** มาตอนนี้ ซึ่งจุดนี้แหละที่ทำให้ผมคิดว่า นี่เป็นปัญหาของเรื่อง **Database** เพราะไม่สามารถเก็บข้อมูลเข้าไปใน **Users** ได้ว่าใครสมัครเข้ามาบ้าง

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/kUU7355.png" class="w-full" alt="Alibaba Cloud Status">
</div>
<p class="text-right text-[12px] text-black/50">
    Source: https://www.facebook.com/share/p/rLaGBYJcNCHRwPBQ/
</p>

<br>

และตอนนี้ที่เห็นคือ ระบบส่วนใหญ่ที่ล่มมาตั้งแต่เมื่อวาน ก็ยังคงล่มอยู่ จริงๆทำผมคิดว่าน่าจะย้ายไป Zone อื่นจริงๆ

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/NVD3Var.png" class="w-full" alt="Alibaba Cloud Status">
</div>
<p class="text-right text-[12px] text-black/50">
    Source: https://status.alibabacloud.com/#/?region=ap-southeast-1
</p>

<br>

ผมได้หาต่อว่า แล้ว**ถ้าไม่ใช่ Database** มี Service อะไรบ้างที่กลับมาออนไลน์พร้อมกับ **Bilibili** พอดี เพื่อเดาว่า **มันน่าจะเป็น Service นี้หรือเปล่า?** ซึ่งผลลัพธ์ก็คือ **MaxCompute** ก็ถ้า Bilibili ยังคงใช้ Zone เดิมอยู่จริงๆ ก็คงเป็นอันนี้แหละที่เป็นตัวปัญหาใน **Point** ของเรา แต่ผมไม่แน่ใจว่า ภายในหลังบ้านของ Bilibili จะใช้ **MaxCompute** ทำอะไร

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/iMBABUb.png" class="w-full" alt="Alibaba Cloud Status">
</div>
<p class="text-right text-[12px] text-black/50">
    Source: https://status.alibabacloud.com/#/?region=ap-southeast-1
</p>

<br>

แต่คงไม่ย้ายไปค่ายอื่น อย่าง **Microsoft Azure, AWS, Google Cloud** เพราะจากที่สังเกตุจาก **DNS Query** ขณะที่ตัวแอปโหลด **Content** ยังคงยิงไปที่ **Url** ที่เชื่อมกับ **Alibaba Cloud** อยู่ และ ด้วยความที่แอปจีนก็สนับสนุน **Cloud** ของจีนอยู่แล้วอีก คงไม่ใช่เรื่องแปลกอะไร

<br>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/B25Mexk.png" class="w-full" alt="Bilibili CDN dns query">
</div>

<div class="w-full h-max flex justify-center py-[30px]">
  <img src="https://i.imgur.com/EAw7SZf.png" class="w-full" alt="kunlunsl.com detail">
</div>
<p class="text-right text-[12px] text-black/50">
    Source: https://www.netify.ai/resources/domains/kunlunsl.com
</p>

<br>

## <span class="text-green-500">#</span> ทิ้งท้าย

<br>

ทั้งหมดนี้ที่เล่ามา เพื่อที่จะได้ทราบถึงเหตุการณ์ที่เกิดขึ้น และ เรียนรู้เรื่องระบบหลังบ้านต่างๆ ยังไงก็ขอเป็นกำลังใจให้กับทุกฝ่ายกลับคืนสู่สภาพเดิมโดยเร็ว ไม่ว่าจะเป็น **Bilibili**, **Alibaba Cloud** หรือ บริการอื่นๆที่ได้รับผลกระทบไปด้วย เช่น **Lazada**, **ByteDance** บริษัทแม่ของ **TikTok**

<br>

**หมายเหตุ** : Blog นี้เป็นเพียงมุมมองและความคิดเห็นส่วนตัวของผู้เขียน หากผิดพลาดประการใดก็ขออภัยไว้ ณ ที่นี้ครับ

<br>

## <span class="text-green-500">#</span> อ้างอิง

<br>

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
  <p>Data Center POST. (n.d.). <i>The need for UPS in data centers</i>. Retrieved September 11, 2024, from <a href="https://datacenterpost.com/need-ups-data-centers/">https://datacenterpost.com/need-ups-data-centers/</a></p>


  <p>Cloud HM. (n.d.). <i>Data Center คืออะไร? มาตรฐาน Tier ที่คุณอาจจะยังไม่รู้!!</i> Retrieved September 11, 2024, from <a href="https://blog.cloudhm.co.th/data-center-tier/">https://blog.cloudhm.co.th/data-center-tier/</a></p>


  <p>Frontier Enterprise. (n.d.). <i>Alibaba Cloud hit by Digital Realty fire in Singapore</i>. Retrieved September 11, 2024, from <a href="https://www.frontier-enterprise.com/alibaba-cloud-hit-by-digital-realty-fire-in-singapore/">https://www.frontier-enterprise.com/alibaba-cloud-hit-by-digital-realty-fire-in-singapore/</a></p>


  <p>Alibaba Cloud. (n.d.). <i>Event details</i>. Retrieved September 11, 2024, from <a href="https://status.alibabacloud.com/#/eventDetail?eventId=21">https://status.alibabacloud.com/#/eventDetail?eventId=21</a></p>


  <p>Alibaba Cloud. (n.d.). <i>Regions and zones - Elastic Compute Service</i>. Retrieved September 11, 2024, from <a href="https://www.alibabacloud.com/help/en/ecs/product-overview/regions-and-zones">https://www.alibabacloud.com/help/en/ecs/product-overview/regions-and-zones</a></p>


  <p>Netify.ai. (n.d.). <i>kunlunsl.com - Domain Info</i>. Retrieved September 12, 2024, from <a href="https://www.netify.ai/resources/domains/kunlunsl.com">https://www.netify.ai/resources/domains/kunlunsl.com</a></p>
</div>