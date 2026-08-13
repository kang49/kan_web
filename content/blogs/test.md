---
date: 2026-04-09
image: 
title: Anthropic has leaked data
description: 
title_th: Anthropic ทำข้อมูลหลุด
description_th: สวัสดีผู้อ่านทุกคนเลยนะ วันนี้เราจะมาเล่าเรื่องที่เกิดขึ้นกับบริษัท Anthropic ที่ทำข้อมูลโค้ดหลายแสนบรรทัดหลุดออกมา ซึ่งผมก็เห็นข่าวนี้อยู่ช่วงแรกๆ
tags: ['ai', tech, security]
language: TH
---

::blog-info
::

สวัสดีผู้อ่านทุกคนเลยนะ วันนี้เราจะมาเล่าเรื่องที่เกิดขึ้นกับบริษัท Anthropic ที่ทำข้อมูลโค้ดหลายแสนบรรทัดหลุดออกมา ซึ่งผมก็เห็นข่าวนี้อยู่ช่วงแรกๆ แต่ก็ไม่ได้สนใจอะไรขนาดนั้น จนผมเริ่มมีเวลาว่างมานั่งอ่านข่าวนี้เพื่อที่จะฝึกทำ Podcast ของตัวเองดูเลยได้พบว่า โอ้ว! จริงๆมันน่าสนใจ และมีประเด็นที่น่าเล่าเยอะมาก แต่ด้วยความที่ผมยังไม่พร้อมจะทำ Podcast เลยขอเขียนเป็นบทความแทนละกันนะ ไปเริ่มกันเลย...yeah!

<br>

## <span class="text-green-500">#</span> Anthropic คือบริษัทอะไร?

<br>

ก่อนเข้าเรื่อง มาทำความรู้จักคร่าวๆกับบริษัท AI ที่ทุกคนในวงการ Tech ยกให้เป็นเทพแห่งผู้สร้าง Model AI กันก่อนดีกว่า Anthropic เป็นบริษัทที่ทำ Model AI เหมือนๆกันกับ OpenAI ที่ทำ ChatGPT หรือ Google ที่ทำ Gemini แต่สิ่งที่ทำให้ Anthropic ดูโดดเด่นกว่าก็คือ ความเก่งของเจ้า Claude AI ที่โด่งดังในหมู่ชาว Dev นี่แหละ ซึ่งมันเก่งมากๆจนผมเองที่ย้ายจาก Gemini มายังตั้งเข่าทรุดว่า ...ทุกคนครับ ผมกำลังจะตกงาน T-T

<br>

สำหรับใครที่ยังไม่เคยใช้ Claude ลองไปใช้ดูนะ ราคามันพอๆกันกับเจ้าอื่นๆเลย ส่วนตัวก่อนหน้านี้ผมใช้ Gemini เสียตังค์อยู่ แต่พอดีว่าปลายปี 2025 ทาง Google ได้ประกาศแจก Gemini Pro ให้ฟรีกับนักศึกษาทุกคน ซึ่งแทนที่ Google จะช่วยผมประหยัดเงิน แต่กลับทำให้ผมได้ลองย้ายไปจ่ายให้ Claude แทนดีกว่า 5555 แล้วมันดีจริงๆเว้ยย ลองไปใช้ดูๆ

<br>

## <span class="text-green-500">#</span> ไฟล์ปริศนาใน NPM Registry

<br>

ย้อนกลับไปในปลายเดือนที่แล้ว วันที่ 31 มีนาคม 2026 มีผู้ใช้ท่านหนึ่ง Code Name: Chaofan Shou (ออกเสียงไงไม่รู้ แต่ไม่สำคัญ) เค้าไปเจอว่ามันมีไฟล์แปลกๆไฟล์หนึ่งใน claude-code ที่ปล่อยมาให้ user ทั่วไปโหลดกันใน NPM Registry ซึ่งไฟล์นี้มันเป็นไฟล์ขนาดประมาณ 60MB นามสกุล .map ซึ่งเป็นไฟล์ที่ปกติแล้วเราจะไม่ได้เห็นมันออกมาสู่สายตาชาวโลกแบบนี้เท่าไหร่ เพราะมันเป็นไฟล์ที่เอาไว้ใช้ภายในเท่านั้น

<br>

## <span class="text-green-500">#</span> Minify Code คืออะไร?

<br>

ก่อนไปคุยกันว่า ไฟล์ .map มันจะมามีบทบาทอะไรในเรื่องนี้ ผมขออธิบายก่อนว่า Minify Code คืออะไร? Minify Code ก็คือการที่เรานำเอา Code ที่เราเขียนขึ้นมาแล้วสดๆไปทำการบีบอัดให้มันสั้นลง เช่น การลบช่องว่าง, เปลี่ยนชื่อฟังก์ชั่นจากยาวๆเป็น a b c, ลบคอมเม้นท์, และ develop environment ต่างๆออกไป เพื่อให้ Code ของเรามีขนาดเล็กลง และใช้เวลาโหลดผ่านเครือข่ายได้เร็วขึ้น แม้หลายคนจะเข้าใจว่ามันช่วยเรื่องความปลอดภัย แต่มันก็แค่ทำให้คนที่มานั่งแกะโค้ดของเราอ่านยากขึ้น ไม่ใช่ฟีเจอร์ด้านความปลอดภัยที่แท้จริงนะฮะ แค่ยากขึ้นมากๆ เลย เหมือนมานั่งแกะศิลาจารึกสมัยพ่อขุนราม

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/7pH9NYR.png" alt="First electric elevator by Siemens" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://dev.to/przemyslawjanbeigert/minify-private-methods-in-a-typescript-class-3kk4
      </p>
      <p class="text-[12px] text-black">
    Figure 1: ตัวอย่างโค้ดที่ถูก Minify แล้ว
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> หน้าที่ของไฟล์ .map

<br>

เราพูดถึงกันไปในหัวข้อที่แล้วว่า Minify Code มันจะทำให้โค้ดเราสั้นลงเพื่อที่จะโหลดได้เร็วขึ้น และทำให้อ่านยากขึ้น แต่ถ้าเราอยากจะแกะโค้ดที่ถูก Minify แล้วล่ะจะทำยังไง? คำตอบคือเจ้าไฟล์ .map นี่แหละที่จะมาเป็นแผนที่นำทางให้เราว่า โค้ดตรงนี้ๆเราเอาไปต่ออย่างงี้ ผลลัพธ์ก็จะได้ออกมาเป็นโค้ด Original ที่นักพัฒนาเขียนขึ้นมา

<br>

ทีนี้ทุกคนก็น่าจะเดาความบรรลัยกันได้ว่ามันจะเกิดอะไรขึ้น หลังจากนั้นคนที่ไปเจอไฟล์ .map ก็ไปแกะเปิดดูร้อง อห. ที่ไม่ใช่โอ้โห จะเก็บไว้ดูคนเดียวมันก็ยังไงอยู่ ของแบบนี้มันต้องแชร์ลง Github คนก็แห่กันไปโหลดกันเป็นแสนๆครั้ง จนทำสถิติใหม่ไปแล้วมั้งถ้าจำไม่ผิดว่าเป็น Open Source ที่มีคนโหลดจำนวนมากไวที่สุดในประวัติศาสตร์กันเลยทีเดียว

<br>

## <span class="text-green-500">#</span> ขุมทรัพย์ที่ถูกไขออก

<br>

หลังจากได้กุญแจมาครอบครอง ขุมทรัพย์โค้ดของ Claude AI กว่า 5แสนบรรทัดก็ถูกเปิดเผยออกมา ภายในนั้นส่วนใหญ่เป็นโค้ดภาษา Typescript ทำหน้าที่ดูแลระบบต่างๆของ Claude Agent เช่นวิธีการเก็บ long-term memory, วิธีคุยกันระหว่าง Agent แต่ละตัว, ฟีเจอร์ที่ยังไม่ถูกเปิดตัว, หรือที่สำคัญที่สุดคือการจัดการระบบ Authenticate ระหว่าง Users กับ Server หรือที่เราคุ้นหูกันในชื่อ OAuth นั่นเอง

<br>

## <span class="text-green-500">#</span> Buddy

<br>

ฟีเจอร์ที่ถูกพูดถึงมากที่สุดในโค้ดที่หลุดออกมาคือ Buddy ซึ่งลักษณะ Character มันคล้ายๆกับ Tamagochi ที่เรา (Not me) เคยเลี้ยงกันสมัยเด็กๆ โดยออกแบบมาให้มีหลาย Species ซึ่งไม่สามารถเลือกได้ว่าจะได้เจอ Buddy ตัวไหนบ้าง แต่ละตัวที่ผู้ใช้จะได้จะถูกสุ่มโดยใช้ User ID ของเราเป็นตัวกำหนด อย่างไรก็ตามฟีเจอร์นี้ตอนแรกมีแผนจะเปิดตัววันที่ 1 เมษายน 2026 ข้อมูลจาก Reddit Community คาดว่าน่าจะเป็นมุกตลกวัน April Fools แต่สุดท้ายก็เงียบไปแล้ว

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/PBKLwjW.png" alt="First electric elevator by Siemens" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://github.com/yasasbanukaofficial/claude-code
      </p>
      <p class="text-[12px] text-black">
    Figure 2: File Structure ของ Buddy
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> ความเสี่ยงหลังเหตุการณ์

<br>

อย่างที่ผมได้กล่าวไปว่าการที่แบบแปลนของระบบ OAuth ถูกเปิดเผยออกมา หลายคนอาจจะคิดว่ามันเทียบได้กับการที่เราเปิดแผนที่ยุทธศาสตร์ของประเทศเราให้ชาติศัตรูดูเลยทีเดียว แต่เดี๋ยวก่อน! จริงๆ แล้วระบบ OAuth ฝั่ง Client มันถูกออกแบบมาให้ไม่ต้องเก็บความลับอะไรไว้อยู่แล้ว การที่โค้ดส่วนนี้หลุดจึงไม่ได้แปลว่าแฮกเกอร์จะเจาะระบบล็อกอินได้ทันที เว้นเสียแต่ว่าทีมงานดันสะเพร่าเผลอใส่ API Key หรือ Secret สำคัญฝังไว้ในนั้น (ซึ่งทาง Anthropic ยืนยันว่าไม่มีข้อมูลสำคัญหลุดไปนะ) แต่ถึงอย่างนั้น มันก็ยังเป็นความเสี่ยงที่ Anthropic ต้องเผชิญและคอยเฝ้าระวังอยู่ในตอนนี้

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/GySBA8r.png" alt="First electric elevator by Siemens" class="w-full">
      <p class="text-right text-[12px] text-black/50">
      </p>
      <p class="text-[12px] text-black">
    Figure 3: Bun logo
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> Bun

เรายังไม่ได้พูดถึงสิ่งที่น่าสนใจอีกอย่างคือ ต้นเหตุของการที่ไฟล์ .map หลุดออกมามันคืออะไร? แต่ก่อนจะไปเล่าเรื่องนั้น ผมขอแนะนำให้ทุกคนรู้จักกับ Bun ก่อน Bun เป็นทั้ง JavaScript Runtime และ Package Manager(App Store ของ JS,TS Dev) ที่ถูกใช้ในการพัฒนา Javascript และ Typescript ซึ่งมันเป็นเครื่องมือที่ได้รับความนิยมมากๆในหมู่ชาว Dev ในช่วง 2-3 ปีที่ผ่านมา ซึ่ง Anthropic ก็เป็นหนึ่งในบริษัทที่ใช้ Bun ในเหตุการณ์นี้

<br>

ขยายความนิดนึง คือ JavaScript Runtime ก็คือเครื่องมือที่ช่วยให้เราสามารถรันโค้ด JavaScript ได้บนเครื่องคอมพิวเตอร์ของเรา ซึ่งปกติแล้วเราจะใช้ Node.js แต่อย่างที่บอกว่า 2-3 ปีที่ผ่านมา Bun ได้ทำผลงาน Performance ได้อย่างดีเยี่ยม ไม่แปลกที่ Anthropic จะเลือกใช้

<br>

## <span class="text-green-500">#</span> .ignore

<br>

สำหรับใครที่เป็น Developer ข้าม section นี้ไปได้เลย แต่สำหรับคนที่ได้ยินชื่อไฟล์นี้แล้วงง วันนี้ผมจะมาเล่าแบบง่ายๆให้ฟังว่า .ignore file มันมีไว้ทำอะไร?

<br>

ถ้าให้เปรียบเทียบ .ignore file กับสิ่งรอบตัว ผมคงยกตัวอย่างเป็นการที่เราสร้าง Keyword หนึ่งไว้บน Facebook ใน Keyword นั้นเราใส่คำหยาบเอาไว้ เช่น "F*", "ค", "ผู้ใหญ่บ้านหมู่ 10" เป็นต้น ซึ่งเมื่อเรากำลังจะกด Post อะไรสักอย่าง Facebook จะไปทำการอ่านไฟล์ Keyword ที่เราตั้งเอาไว้ แล้วถ้ามันเจอคำนั้น มันก็จะข้าม (ignore) หรือระงับไม่ให้คำนั้นโชว์ขึ้นมาตั้งแต่แรก ก่อนที่เราจะปล่อยมันสู่สายตาชาวโลก

<br>

ซึ่งเจ้า .ignore file ก็ทำหน้าที่คล้ายๆกันกับ Keyword ที่เราตั้งเอาไว้ใน Facebook นั่นแหละ มันจะเป็นไฟล์ๆหนึ่งอยู่ในโปรเจกต์ของเรา Dev ก็จะเขียนชื่อไฟล์ หรือโฟลเดอร์ที่เราไม่อยากปล่อยมันออกไปไว้ในนั้น เพื่อบอกให้ระบบข้ามไฟล์เหล่านี้ไปตอนเตรียมไฟล์ เช่น .env, .map, หรือไฟล์ที่มีข้อมูลสำคัญต่างๆ สามารถอ่านวิธีการเขียน .ignore file ที่นี่: <a class="text-blue-600" href="https://linuxize.com/post/gitignore-ignoring-files-in-git/">https://linuxize.com/post/gitignore-ignoring-files-in-git/</a>

<br>

แต่ในโปรเจกต์หนึ่ง มันก็มีหลายไฟล์เหลือเกินที่เราอยากจะซ่อนมันไว้ แต่จะมานั่งเขียนทีละไฟล์ด้วยมือมันก็กระไรอยู่ ดังนั้น Bun หรือ NPM ก็จะมี Template ให้ตั้งแต่เราเริ่มทำโปรเจกต์เลยว่า "พี่ชายจะทำงานเกี่ยวกับอะไรน่ะ ถ้าพี่จะทำแบบนี้ อ๋อผมมี Template ที่เหมาะสมเตรียมไว้ให้แล้ว พี่ก็แค่กดแล้วดึงมาใช้ได้เลย" ซึ่ง Template ก็จะประกอบไปด้วยชื่อไฟล์ และโฟลเดอร์ที่คิดมาแล้วว่ามันควรจะถูกซ่อนเอาไว้ เป็นฟีเจอร์ที่มีประโยชน์มากๆ

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/lUJtkGo.png" alt="First electric elevator by Siemens" class="w-full">
      <p class="text-right text-[12px] text-black/50">
      </p>
      <p class="text-[12px] text-black">
    Figure 4: ภาพตัวอย่าง .ignore file
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> สาเหตุของการหลุด

<br>

อย่างที่บอกไปว่าเจ้าฟีเจอร์ .ignore template เนี่ยมันมีประโยชน์สุดๆ แต่ถ้าเราไว้ใจ Template นี้มากจนลืมตรวจสอบให้ดี หรือเราเผลอเอาไฟล์ที่เป็นความลับใส่เข้าไปในโปรเจกต์โดยไม่ได้ตั้งใจ และไฟล์ๆนั้นก็ดัน ไม่ได้อยู่ใน Template ที่เราใช้ หรือเครื่องมือที่เราใช้อย่าง Bun เกิดมีบั๊กขึ้นมา ก็จะเกิดความชิบหายขึ้นต่อจากนี้นั่นเอง...และใช่ครับ เหตุการณ์นี้เกิดจากบั๊กของตัว Bun Bundler ที่ดันเผลอสร้างไฟล์ .map พ่วงออกมาด้วย ทั้งๆ ที่สั่งค่ารันเป็น Production ไว้ แถมระบบเบื้องหลังของพวกเขาก็ดันไม่มีการเช็กให้ชัวร์ก่อนปล่อยซะด้วย

<br>

## <span class="text-green-500">#</span> The Side Effect

<br>

แน่นอนว่าหลังจากที่โค้ดหลุดออกมา ทุกคนก็พยายามจะแย่งกันไปโหลดโค้ดนี้มาไว้ในครอบครองกันอย่างบ้าคลั่ง จนลืมไปว่านอกจากตัวเองที่จะฉวยโอกาสจากเหตุการณ์นี้แล้ว ยังมีแฮกเกอร์อีกหลายคนที่กำลังรอเหยื่อมาโหลดไฟล์โค้ดปลอมนี้อยู่เช่นกัน คนพวกนี้ได้ใส่ virus ไม่ว่าจะเป็น Trojan, Backdoor, หรือที่ฮิตสุดๆเลยก็คือ Cryptominer ลงไปในไฟล์โค้ดปลอมที่พวกเขาโฆษณาใน readme.md ว่า "นี่คือโค้ดที่หลุดออกมาจาก Anthropic นะทุกคน โหลดไปใช้กันได้เลย" ซึ่งถ้าใครเผลอไปโหลดไฟล์โค้ดปลอมนี้มา บอกได้เลยว่า...แตก!!

<br>

## <span class="text-green-500">#</span> ท่าทีของ Anthropic

<br>

หลังเกิดเหตุการณ์ไม่กี่วัน ในวันที่ 3 เมษายน 2026 ทาง Anthropic ได้ใช้กฎหมาย DMCA (Digital Millennium Copyright Act) ยื่นฟ้องต่อ Github เพื่อให้ลบไฟล์โค้ดที่หลุดออกมาทั้งหมดออกไปจากแพลตฟอร์ม ซึ่งตอนแรก Github ก็ได้ทำการแบน Repository กว่า 8,100 รายการออกไปอย่างรวดเร็ว แต่อย่างไรก็ตาม ในภายหลังทาง Anthropic ได้ตัดสินใจจำกัดวงการฟ้อง โดยพุ่งเป้าไปโจมตีและลบเฉพาะ 96 รายการที่เป็น Fork สายตรงจากโค้ดต้นฉบับที่หลุดออกมาจริงๆ เพื่อให้แน่ใจว่าแหล่งแพร่กระจายโดยตรงจะถูกทำลายทิ้งไปนั่นเอง

<br>

## <span class="text-green-500">#</span> บทสรุป

<br>

ยังไงก็ถือเป็นอีกหนึ่งบทเรียนเรื่อง Security ที่น่าสนใจมากๆ และน่าจะเป็นประโยชน์ต่อทุกคน สุดท้ายนี้ขอแนะนำว่าใครที่จะไปโหลดโค้ดที่หลุดออกมานี้มาใช้ก็ระวังกันหน่อยนะครับ เพราะมันอาจจะมีโค้ดปลอมที่มีไวรัสแฝงอยู่ก็ได้ และถ้าใครอยากจะอ่านข่าวนี้แบบละเอียดๆ ผมได้รวบรวมลิงก์ข่าวต่างๆที่เกี่ยวข้องกับเหตุการณ์นี้ไว้ให้แล้วในส่วนของ References ด้านล่างนี้เลยครับ

<br>

## <span class="text-green-500">#</span> อ้างอิง

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
<p>The Guardian (April 2, 2026). <i>Claude’s code: Anthropic leaks source code for AI software engineering tool</i>. Retrieved April 7, 2026, from <a href="https://www.theguardian.com/technology/2026/apr/01/anthropic-claudes-code-leaks-ai">https://www.theguardian.com/technology/2026/apr/01/anthropic-claudes-code-leaks-ai</a></p>
<p>Github User: yasasbanukaofficial. (April 02, 2026). <i>Claude Code's Entire Source Code Got Leaked via a Sourcemap in npm, Let's Talk About It</i>. Retrieved April 7, 2026, from <a href="https://github.com/yasasbanukaofficial/claude-code">https://github.com/yasasbanukaofficial/claude-code</a></p>
<p>Varshith V Hegde. (April 1, 2026). <i>The Great Claude Code Leak of 2026: Accident, Incompetence, or the Best PR Stunt in AI History?</i>. Retrieved April 7, 2026, from <a href="https://dev.to/varshithvhegde/the-great-claude-code-leak-of-2026-accident-incompetence-or-the-best-pr-stunt-in-ai-history-3igm">https://dev.to/varshithvhegde/the-great-claude-code-leak-of-2026-accident-incompetence-or-the-best-pr-stunt-in-ai-history-3igm</a></p>
<p>Dejan Panovski. (February 1, 2026). <i>Ignoring Files and Directories in Git (.gitignore)</i>. Retrieved April 7, 2026, from <a href="https://linuxize.com/post/gitignore-ignoring-files-in-git/">https://linuxize.com/post/gitignore-ignoring-files-in-git/</a></p>
<p>Reddit User: Clear_Reserve_8089 - r/ClaudeAI. (April 1, 2026). <i>i dug through claude code's leaked source and anthropic's codebase is absolutely unhinged</i>. Retrieved April 7, 2026, from <a href="https://www.reddit.com/r/ClaudeAI/comments/1s8lkkm/i_dug_through_claude_codes_leaked_source_and/">https://www.reddit.com/r/ClaudeAI/comments/1s8lkkm/i_dug_through_claude_codes_leaked_source_and/</a></p>
<p>WaveSpeed Blog. (April 1, 2026). <i>Claude Code Leaked Source: BUDDY, KAIROS & Every Hidden Feature Inside</i>. Retrieved April 7, 2026, from <a href="https://wavespeed.ai/blog/posts/claude-code-leaked-source-hidden-features/">https://wavespeed.ai/blog/posts/claude-code-leaked-source-hidden-features/</a></p>
<p>Zscaler Blog. (April 1, 2026). <i>Anthropic Claude Code Leak</i>. Retrieved April 7, 2026, from <a href="https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak#threatlabz-discovers--claude-code-leak--lure-that-distributes-vidar-and-ghostsocks">https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak#threatlabz-discovers--claude-code-leak--lure-that-distributes-vidar-and-ghostsocks</a></p>
<p>Wikipedia. (April 3, 2026). <i>Anthropic ส่งคำสั่งลบโค้ด Claude Code, GitHub ปิดแล้ว 8,100 repository</i>. Retrieved April 7, 2026, from <a href="https://www.blognone.com/node/150176">https://www.blognone.com/node/150176</a></p>
</div>

<br>

## <span class="text-green-500">#</span> เลี้ยงกาแฟ

<br>

ถ้าคุณชอบคอนเทนต์ของผมแล้วอยากสนับสนุน สามารถเลี้ยงกาแฟผมได้ที่ <a class="text-blue-600" href="https://buymeacoffee.com/metakeen">Buy me a coffee</a>