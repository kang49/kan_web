---
date: 2025-06-01
image: https://i.imgur.com/52YpWeu.png
title: The Innovation of Calculator (Turing Machine)
description: Yesterday I had the opportunity to visit a museum called ACMI (Australian Centre for the Moving Image)...
title_th: นวัตกรรมเครื่องคำนวณ (Turing Machine)
description_th: เมื่อวันก่อนผมได้มีโอกาสเข้าเยี่ยมชมพิพิธภัณฑ์ที่มีชื่อว่า ACMI (Australian Centre for the Moving Image) พิพิธภัณฑ์นี้ตั้ง...
tags: ['history', technical, alan turing,]
language: TH
---

::blog-info
::

## <span class="text-green-500">#</span> Turing กับภาพของเขาที่พิพิธภัณฑ์

<br>
<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://acmi-website-media-prod.s3.amazonaws.com/media/images/Flinders_St_Entrance_-_Shannon_McGrath.width-1431.jpg" alt="ACMI (Australian Centre for the Moving Image)" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: ACMI
</p>
    </div>
  </div>
</center>
<br>

เมื่อวันก่อนผมได้มีโอกาสเข้าเยี่ยมชมพิพิธภัณฑ์ที่มีชื่อว่า ACMI (Australian Centre for the Moving Image) พิพิธภัณฑ์นี้ตั้งอยู่ในเมือง Melbourne ประเทศ Australia ส่วนมากก็จะโชว์พวกอุปกรณ์ต่างๆที่เกี่ยวกับการถ่ายภาพยนตร์ในอดีตจนถึงปัจจุบัน รวมถึงเทคนิคต่างๆที่คนในสมัยก่อนใช้ในการสร้างหนังขึ้นมาเรื่องหนึ่ง

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/JMgeoTl.jpeg" alt="ACMI GAMES LAB PRESENTED BY BIG ANT STUDIO" class="w-full">
    </div>
  </div>
</center>

<br>

นอกจากนั้นแล้วยังมีในส่วนของ Gaming Zone ที่จะมีพวกเครื่องเกมตู้แบบในยุค 90 ที่เราเคยเห็นผ่านหนังฝรั่งบ่อยๆ และผมก็ได้ไปสะดุดที่พาร์ทหนึ่งของโซนนี้ นั่นก็คือแผนผังความเป็นมาของ Video Games โดยมันจะมีอยู่หัวข้อนึงที่ชื่อว่า "**Laboratory to Arcade**" ซึ่งมีบุคคลสำคัญในเรื่องนี้คือ Alan Turing นักคณิตศาสตร์ และบิดาแห่งระบบคอมพิวเตอร์ ซึ่งเป็นบุคคลในประวัติศาสตร์คนหนึ่งที่ผมนับถือ

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/bC1f2UI.jpeg" alt="ACMI GAMES LAB PRESENTED BY BIG ANT STUDIO" class="w-full">
    </div>
  </div>
</center>

<br>

มันได้อธิบายจุดเริ่มต้นของระบบคอมพิวเตอร์ที่ต่อมาจะกลายเป็นเครื่องมือ Entertaining ให้กับผู้คนทั่วไป ในภาพแสดงด้านขวาจะเป็นเครื่อง **Harvard Mark I** เครื่องนี้ถูกสร้างขึ้นในปี 1944 โดย **IBM** และ **Howard Aiken** ถ้ามีโอกาสก็อยากจะเล่าเกี่ยวกับเครื่องนี้ให้ฟังด้วย บทบาทของเจ้าเครื่องนี้ในสงครามโลกไม่ธรรมดาเลย

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/cnrtt39.jpeg" alt="ACMI GAMES LAB PRESENTED BY BIG ANT STUDIO" class="w-full">
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> ลำดับขั้นของเครื่องคำนวณ (Automata theory)

<br>

ก่อนอื่นเราก็มาดูกันก่อนว่า ก่อนที่เราจะมีเครื่องที่สามารถคำนวณได้เกือบจะทุกอย่างอย่าง Turing Machine ก่อนหน้านั้นเราผ่านอะไรมาก่อนบ้าง ดังนั้นเราจะกล่าวถึงสิ่งที่เรียกว่า "**Automata theory**" ซึ่งคือลำดับขั้นของเครื่องคำนวณที่เริ่มมีความฉลาดขึ้นเรื่อยๆ โดยเริ่มจาก

<br>

1. **Combinational Logic:** เป็นเครื่องแบบพื้นฐานที่สุด เหมือนกับการคำนวณแบบทันทีที่ผลลัพธ์ขึ้นอยู่กับ Input ที่ใส่เข้าไปครั้งเดียวเท่านั้นไม่มีหน่วยความจำ หรือสถานะ สามารถทำตรรกะพื้นฐานอย่าง **AND, OR, NOT** ได้ ยกตัวอย่างเช่น วงจรบวกเลข
2. **Finite State Machine (FSM):** เป็นเครื่องที่มีหน่วยความจำเพิ่มขึ้นมาเล็กน้อย สามารถเก็บสถานะได้เพียงแค่ไม่กี่ State เท่านั้น และสามารถเปลี่ยนสถานะได้ตาม Input ที่เข้ามา อย่างเครื่องขายของอัตโนมัติแบบในสมัยก่อนที่ไม่ได้มีหน้าจอดิจิตอลเหมือนปัจจุบัน เช่น ตู้เต่าบิน
3. **Pushdown Automata (PDA):** เป็นเครื่องที่มี**หน่วยความจำแบบ Stack** ซึ่งสามารถเก็บข้อมูลได้มากขึ้นมาอีก และสามารถทำงานกับข้อมูลที่มีโครงสร้างซ้อนกันได้ เช่น การตรวจสอบความสมดุลของวงเล็บในโปรแกรม ทำให้สามารถประมวลผลไวยากรณ์ของภาษาโปรแกรมได้ในระดับหนึ่ง
4. **Turing Machine:** เป็นเครื่องที่มี**หน่วยความจำแบบไม่จำกัด (Theoretically)** สามารถทำงานได้กับข้อมูลที่ซับซ้อนมากขึ้น สามารถอ่านและเขียนข้อมูลได้ตามต้องการ และสามารถเปลี่ยนสถานะได้ตาม Condition ที่กำหนดไว้ ที่สำคัญคือ Turing Machine สามารถจำลองการทำงานของเครื่องอื่นๆ ได้ทั้งหมด นี่จึงเป็นพื้นฐานของระบบคอมพิวเตอร์สมัยใหม่ที่เราใช้กันอยู่ในปัจจุบัน

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/tls8rOl.png" alt="Automata theory" class="w-full">
      <p class="text-[12px] text-black">
    Diagram showing the hierarchy of automata theory, from combinational logic to Turing machines.
    </p>
      <p class="text-right text-[12px] text-black/50">
    Source: https://en.wikipedia.org/wiki/Automata_theory
    </p>
    </div>
  </div>
</center>

## <span class="text-green-500">#</span> แนวคิดของ Turing Machine

<br>

โดยเริ่มแรก Turing Machine ไม่ใช่เครื่องจริงๆ แต่เป็นเพียงแค่ทฤษฎีอยู่ของ Alan Turing ที่เขาได้เสนอไว้ในปี 1936 ในตอนนั้นโลกกำลังคุกรุ่นอยู่ในช่วงสงครามโลกครั้งที่ 2 โดยมีแนวคิดที่ว่าเราอยากจะให้เครื่องจักรมันคำนวณอะไรสักอย่าง ยกตัวอย่างเช่นในยุคนั้นก็คำนวณวิถีของกระสุนปืนใหญ่ หรือเราอยากจะถอดรหัสข้อความที่เป็นความลับของศัตรู

<br>

ก่อนที่ Turing จะคิด Turing Machine ขึ้นมา โลกของคณิตศาสตร์ และตรรกศาสตร์มีคำถามที่น่าสนใจอยู่ข้อหนึ่งก็คือ "ปัญหาแบบไหนนะ ที่เราสามารถหาคำตอบได้ด้วยการทำเป็นขั้นเป็นตอนตาม step ไปหรือที่เราเรียกกันว่า "**algorithmic process**" ได้

<br>

ต้องบอกก่อนว่า เครื่องจักรมันมีอยู่สิ่งหนึ่งที่ไม่ว่ายังไงมนุษย์ก็สู้ไม่ได้เลย ก็คืองาน Routine ที่มันต้องทำอะไรแบบเดิมซ้ำๆนี่แหละ เครื่องจักรชอบมากและทำได้เร็วด้วย

<br>

ทีนี้มันก็ต้องมาคิดแล้วว่า เราจะทำยังไงให้เครื่องนี้สามารถทำงานได้โดยที่ใช้ Algorithm เดิมอยู่ตลอด หรือวิธีคิดคล้ายๆเดิม ถ้าให้ยกตัวอย่างก็คือเรามีเครื่องปิ้งขนมปัง กับขนมปังอยู่แผ่นหนึ่งใช่ไหม ทีนี้การที่เราจะทำให้ขนมปังมันกรอบได้มันก็ควรจะเป็นขั้นตอนเดียวกับขนมปังแผ่นต่อไป หรือแม้แต่ขนมปังยี่ห้ออื่นๆ ก็คือมันก็ต้องปิ้งให้กรอบ พอร้อนถึงจุดๆหนึ่งมันก็ต้องเด้งขึ้นมาถูกไหม เพื่อที่เราจะได้ไม่ต้องมานั่งออกแบบเครื่องปิ้งขนมปังใหม่ทุกครั้งที่เราอยากจะเปลี่ยนขนมปัง และมันก็ง่ายขึ้นเยอะที่เราจะให้เครื่องจักรทำงานอะไรซ้ำๆแบบนี้

<br>

ดังนั้นมันก็เลยมีการนิยามสิ่งที่เรียกว่า "**Computable Numbers**" ก็คือเรามีจำนวนๆหนึ่งนี่แหละ ซึ่งเราจะนิยามว่ามันสามารถคำนวณได้ก็ต่อเมื่อมันสามารถที่จะอ่าน/เขียนด้วยคอมพิวเตอร์ได้ เพื่อที่คอมพิวเตอร์จะทำงานแบบ Routine จนหาคำตอบได้ในที่สุด

<br>

<center>
  <div>
    <div class="text-left w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/Wy2cMYg.png" alt="image of Venn diagram" class="w-full">
      <p class="text-[12px] text-black">
    Venn diagram showing the relationships between subsets of real numbers. All sets shown are countably infinite except the reals. Noncomputable real numbers exist, but they are inherently unknowable.
</p>
      <p class="text-right text-[12px] text-black/50">
    Source: https://mathvoices.ams.org
</p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> หลักการทำงานของ Turing Machine

<br>

หลักการทำงานของ Turing Machine จะมีรูปแบบที่ Simple มากๆ นั่นมีเพียงแค่ **การอ่าน, เขียน, เลื่อนซ้ายขวา, เปลี่ยนสถานะ, หยุดทำงาน** เท่านั้นเอง Turing กล่าวไว้ใน Paper ของเขาว่า แค่มีการดำเนินการ (Operations) เหล่านี้ก็เพียงพอแล้วที่จะทำให้เราสามารถคำนวณอะไรได้หลายๆอย่าง

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/YJKN00K.png" alt="alan turing paper" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf
</p>
    </div>
  </div>
</center>

<br>

ส่วนประกอบของ Turing Machine จะมีอยู่ 4 ส่วนหลักๆตามทฤษฎีที่เขียนไว้ ได้แก่:

1. **เทป (Tape):** เป็นที่เก็บข้อมูลที่เราต้องใช้ในการคำนวณ และบอกผลลัพธ์ โดยเทปนี้จะมีความยาวไม่จำกัด (Theoretically) สามารถอ่าน/เขียนข้อมูลได้ แบ่งเป็นช่องๆละ 1 สัญลักษณ์ (Symbol) โดยช่องๆนี้เราก็จะเรียกมันว่า "**Square**"
2. **หัวอ่าน/เขียน (Head):** เป็นส่วนที่ทำหน้าที่อ่านข้อมูลจาก Tape และเขียนข้อมูลลงไปใน Tape สามารถขยับไปทางซ้ายหรือขวาได้ทีละช่อง สามารถลบ และเขียนข้อมูลใหม่ได้ จะมีเพียงหนึ่ง Square เท่านั้นที่ถูกอ่านโดยเราจะเรียก Square ที่ถูกอ่านว่า "**Scanned Square**" และสัญลักษณ์ที่อยู่ใน Scanned Square จะเรียกว่า "**Scanned Symbol**"
3. **หน่วยควบคุมสถานะ (State Register):** ส่วนนี้จะเก็บสถานะปัจจุบันของ Turing Machine ว่าตอนนี้มันอยู่ในสถานะไหนแล้ว และกำหนด Action ถัดไปว่าจะทำอะไรต่อ ถ้าให้เปรียบเทียบก็เหมือนกับสภาพจิตใจของเราว่าตอนนี้เรารู้สึกยังไง และจะทำอะไรต่อไป
4. **ชุดของกฎการเปลี่ยนผ่าน (Table of Instructions):** ส่วนนี้จะเป็นส่วนที่เหมือนกับเราเขียนโปรแกรมขึ้นมาเพื่อบอกว่า ถ้าเครื่องอยู่ในสถานะนี้ และอ่านข้อมูลจาก Square นี้ เครื่องจะต้องทำอะไรต่อ เช่น เขียนข้อมูลใหม่, เปลี่ยนสถานะ, หรือเลื่อนหัวอ่านไปทางไหนต่อ และเมื่อทุกๆอย่างจบสิ้นแล้ว มันควรจะหยุดที่จุดไหน

<br>

ในแต่ละครั้งที่ Turing Machine ทำงานผมขอแบ่งมันเป็น 3 ขั้นตอนหลักๆ ตามเงื่อนไขที่กำหนดไว้ใน Table of Instructions ตามขั้นตอนนี้:

1. **อ่าน/เขียนข้อมูลจาก Scanned Square:** หัวอ่านจะอ่านหรือเขียนข้อมูลลงบน Scanned Square (ช่องที่ถูกอ่านอยู่ มีเพียงช่องเดียว)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/ggZEAW5.png" alt="Turing Machine Head" class="w-full">
      <p class="text-[12px] text-black">
    Image of a Turing Machine head reading a square on the tape
</p>
      <p class="text-right text-[12px] text-black/50">
    Source: https://www.sciencedirect.com/topics/physics-and-astronomy/turing-machine
</p>
    </div>
  </div>
</center>

<br>

2. **ประมวลผล/ตัดสินใจ (Process/Decide):** จากสถานะ (State) ปัจจุบัน และข้อมูลที่อ่านได้จาก Head เครื่องก็จะค้นหาเงื่อนไขหรือกฎที่ตรงกันกับ Table of Instructions เมื่อพบกฎที่ตรงกัน มันจะทำตามคำสั่งในกฎนั้น ซึ่งประกอบด้วย การเขียนข้อมูลใหม่ลงใน Scanned Square หรือคงข้อมูลเดิมไว้, เปลี่ยนสถานะของเครื่อง, เลื่อนหัวอ่านไปทางซ้ายหรือขวา หรือหยุดอยู่กับที่

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/PJawGrK.png" alt="Turing Machine Head" class="w-full">
      <p class="text-[12px] text-black">
    Image of an example of instructions for a Turing Machine
</p>
    </div>
  </div>
</center>

<br>

3. **วนซ้ำหรือหยุด (Loop or Halt):** หลังจากดำเนินการตามคำสั่งครบแล้ว เครื่องจักรจะวนกลับไปขั้นตอนที่ 1 เพื่ออ่านสัญลักษณ์ใหม่ในช่องที่หัวอ่าน/เขียนชี้อยู่ และดำเนินการซ้ำไปเรื่อยๆ จนกว่าจะพบสถานะ "หยุดทำงาน" (Halt State) ซึ่งเป็นสถานะพิเศษที่บอกว่าการคำนวณเสร็จสิ้นแล้วและเครื่องจักรจะหยุดการทำงาน เช่นในภาพของ Example of Instructions ด้านบนก็จะมี State ที่ชื่อว่า "q_end" อยู่ซึ่งผมกำหนดให้สถานะนี้เป็นสถานะที่ให้เครื่องหยุดทำงาน

<br>

## <span class="text-green-500">#</span> ตัวอย่างการคำนวณด้วย Turing Machine

<br>

มาดูกันว่า Step การทำงานของ Turing Machine เพื่อคูณเลขด้วย 2 มันจะต้องทำอะไรบ้าง โดยก่อนอื่นผมจะกำหนดรูปแบบ (Format) ของ Table of Instructions ก่อนว่าแต่ละวงเล็บมีความหมายว่าอย่างไรบ้าง

<br>

**รูปแบบ (Format):**
(สถานะปัจจุบัน, สัญลักษณ์ที่อ่านได้) → (สัญลักษณ์ที่จะเขียน, ทิศทางที่จะเลื่อน, สถานะใหม่)

<br>

**ตัวอย่างการคำนวณด้วย Turing Machine: การคูณเลขฐานสองด้วย 2**

การคูณเลขฐานสองด้วย 2 เป็นการดำเนินการที่ตรงไปตรงมาในระบบฐานสอง เพียงแค่เพิ่ม '0' หนึ่งตัวที่ท้ายสุดของตัวเลขนั้น (เทียบเท่ากับการเลื่อนบิตทั้งหมดไปทางซ้ายหนึ่งตำแหน่ง)

<br>

**ปัญหา:** คูณเลขฐานสองที่ให้มาด้วย 2

**รูปแบบ Input:** เลขฐานสองที่อยู่บนเทป โดยมีช่องว่าง 'b' (Blank Symbol) อยู่ด้านหน้าและหลัง

**ตัวอย่าง Input:** '...b b 1 0 1 b b b...' (หมายถึง 101 ในฐานสอง ซึ่งคือ 5 ในฐานสิบ)

**ผลลัพธ์ที่ต้องการ (Output):** '...b b 1 0 1 0 b b...' (หมายถึง 1010 ในฐานสอง ซึ่งคือ 10 ในฐานสิบ)

<br>

**ส่วนประกอบที่เราจะใช้:**

-- **ชุดสัญลักษณ์ (Alphabet, Σ):** {0, 1, b} (โดย 0 คือบิต '0', 1 คือบิต '1', b คือ Blank Symbol แทนช่องว่าง)

-- **สถานะ (States, Q):**

---- **q_find_end:** สถานะเริ่มต้นและใช้ในการหาตำแหน่งสุดท้ายของตัวเลข

---- **q_halt:** สถานะหยุดทำงาน

-- **สถานะเริ่มต้น (Start State):** q_find_end

-- **ข้อตกลง Input:** หัวอ่านเริ่มต้นที่บิตซ้ายสุดของเลขฐานสองบนเทป

<br>

**ชุดของกฎการเปลี่ยนผ่าน (Table of Instructions, δ):**

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/vmfgn4c.png" alt="Turing Machine Head" class="w-full">
      <p class="text-[12px] text-black">
    Image of Table of Instructions to demonstrate Turing Machine multiplying binary by 2
</p>
    </div>
  </div>
</center>

<br>

**การทำงานทีละขั้นตอนสำหรับอินพุต: 101 (5 ในฐานสิบ)**

สถานะเริ่มต้น (ก่อนเริ่มเดินเครื่อง)

-- เทป: ...b b 1 0 1 b b b...
-- หัวอ่าน: ชี้ที่ 1 (บิตซ้ายสุดของ 101)
--สถานะ: q_find_end

<br>

**ขั้นตอนที่ 1:**

-- สถานะ: q_find_end

-- อ่าน: 1 (สัญลักษณ์ใต้หัวอ่าน)

-- กฎที่ใช้: (q_find_end, 1) → (1, R, q_find_end)

-- ดำเนินการ: 

---- เขียน: 1 (ทับตัวเดิม)

---- เลื่อน: R (หัวอ่านเลื่อนไปทางขวา 1 ช่อง)

---- เปลี่ยนสถานะ: q_find_end

-- สถานะเทปหลังดำเนินการ: ...b b 1 0 1 b b b... (หัวอ่านอยู่บน 0)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/d5kzwA7.gif" alt="gif image demonstrate step1" class="w-full">
    </div>
  </div>
</center>

<br>

**ขั้นตอนที่ 2:**

-- สถานะ: q_find_end

-- อ่าน: 0

-- กฎที่ใช้: (q_find_end, 0) → (0, R, q_find_end)

-- ดำเนินการ:

---- เขียน: 0 (ทับตัวเดิม)

---- เลื่อน: R

---- เปลี่ยนสถานะ: q_find_end

-- สถานะเทปหลังดำเนินการ: ...b b 1 0 1 b b b... (หัวอ่านอยู่บน 1 ขวาสุด)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/HI1BagQ.gif" alt="gif image demonstrate step2" class="w-full">
    </div>
  </div>
</center>

<br>

**ขั้นตอนที่ 3:**

-- สถานะ: q_find_end

-- อ่าน: 1

-- กฎที่ใช้: (q_find_end, 1) → (1, R, q_find_end)

-- ดำเนินการ:

---- เขียน: 1 (ทับตัวเดิม)

---- เลื่อน: R

---- เปลี่ยนสถานะ: q_find_end

-- สถานะเทปหลังดำเนินการ: ...b b 1 0 1 b b b... (หัวอ่านอยู่บน b ตัวแรกหลัง 101)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/0K8zkGv.gif" alt="gif image demonstrate step2" class="w-full">
    </div>
  </div>
</center>

<br>

**ขั้นตอนที่ 4:**

-- สถานะ: q_find_end

-- อ่าน: b (ช่องว่าง)

-- กฎที่ใช้: (q_find_end, b) → (0, L, q_halt)

-- ดำเนินการ:

---- เขียน: 0 (ทับช่องว่างนั้น)

---- เลื่อน: L (หัวอ่านเลื่อนไปทางซ้าย 1 ช่อง)

---- เปลี่ยนสถานะ: q_halt

-- สถานะเทปหลังดำเนินการ: ...b b 1 0 1 0 b b... (หัวอ่านอยู่บน 1 ขวาสุด)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/ONtba6U.gif" alt="gif image demonstrate step2" class="w-full">
    </div>
  </div>
</center>

<br>

**หยุดทำงาน:**

เนื่องจากสถานะปัจจุบันคือ q_halt เครื่องจักรจะหยุดการทำงาน การคำนวณเสร็จสมบูรณ์

**ผลลัพธ์สุดท้ายบนเทป:** ...b b 1 0 1 0 b b... ซึ่งแสดงถึงเลขฐานสอง 1010 (เท่ากับ 10 ในฐานสิบ)

ตัวอย่างนี้แสดงให้เห็นว่า Turing Machine สามารถทำการคำนวณที่ซับซ้อนได้โดยอาศัยเพียงชุดคำสั่งพื้นฐานและการโต้ตอบกับเทปอย่างเป็นลำดับขั้นตอน

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/vngvMo7.gif" alt="gif image demonstrate step2" class="w-full">
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> Turing Machine Playground

อย่างที่ทุกคนเห็นในรูปภาพตัวอย่างข้างต้น เราสามารถเข้าไปเล่น ทดลองเขียนโปรแกรมกับ Turing Machine ได้โดยเข้าไปที่เว็บไซต์

<a href="http://turingmachinesimulator.com/shared/dqtsihjivq" target="blank" class="text-[16px] text-[#0000FF]">
    Turing Machine Simulator
</a>

<br>
<br>

## <span class="text-green-500">#</span> เครื่องจำลอง Turing Machine ของ Mike Davey

<br>

อย่างที่ผมได้กล่าวไปว่า Turing Machine เป็นเพียงแค่ทฤษฎีที่ Alan Turing ได้เสนอไว้ในปี 1936 เท่านั้น แต่เครื่องที่คุณอาจเคยเห็นในหนังสือ หรือวิกิพีเดียแท้จริงแล้วเป็นเครื่องจำลองที่ถูกสร้างขึ้นมาเพื่อให้เราเข้าใจการทำงานของ Turing Machine ได้ง่ายขึ้น

<br>

โดยผู้ที่สร้างเครื่องจำลองนี้ชื่อว่า **Mike Davey** เขาได้นำเสนอเครื่องจำลองนี้ใน **Hackaday** ปี 2010 โดยนำเอาเทคโนโลยีสมัยใหม่มาจำลองการทำงานของ Turing Machine

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/AHcZAJ2.jpeg" alt="Turing Machine Simulator by Mike Davey" class="w-full">
      <p class="text-[12px] text-black">
    Image of Turing Machine Simulator by Mike Davey
</p>
      <p class="text-right text-[12px] text-black/50">
    Source: https://en.wikipedia.org/wiki/Turing_machine
</p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> วิดีโอการทำงานของ Mike Davey's Turing Machine

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      
<iframe class="w-full" height="315" src="https://www.youtube.com/embed/O4arOveXvGE?si=0Ij9ygI7y_ZAaCdq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
  <p class="text-right text-[12px] text-black/50">
    Source: https://www.youtube.com/watch?v=O4arOveXvGE
</p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> บทบาทของ Turing Machine ในวงการคอมพิวเตอร์ปัจจุบัน

<br>

ระบบคอมพิวเตอร์สมัยใหม่ที่เรากำลังใช้กันอยู่ในทุกวันนี้ ถ้าเราลองเจาะลึกไปถึงการทำงานของ **CPU (Central Processing Unit)** หรือหน่วยประมวลผลกลาง เราจะพบว่า CPU นั้นได้ยืมแนวคิดหลักการทำงานของ Turing Machine มาปรับใช้ในการประมวลผลข้อมูล แม้ว่า CPU สมัยใหม่จะฉลาด และมี **Instruction Set Architecture (ISA)** ที่ซับซ้อนมากขึ้น แต่หลักการพื้นฐานยังคงเหมือนเดิม นั่นคือ การอ่านข้อมูลจากหน่วยความจำ, ประมวลผลข้อมูลตามคำสั่งที่กำหนด, และเขียนผลลัพธ์กลับไปยังหน่วยความจำ ดังที่ Alan Turing ได้คิดค้นไว้ให้พวกเราในปี 1936

<br>

## <span class="text-green-500">#</span> สรุป

<br>

Turing Machine คือทฤษฎีที่ Alan Turing ได้เสนอขึ้นมาในปี 1936 เพื่ออธิบายการคำนวณที่สามารถทำได้โดยใช้ขั้นตอนที่เป็นลำดับ (Algorithmic Process) โดยมีส่วนประกอบหลักๆ ได้แก่ เทป (Tape), หัวอ่าน/เขียน (Head), หน่วยควบคุมสถานะ (State Register), และชุดของกฎการเปลี่ยนผ่าน (Table of Instructions) ซึ่งเป็นเครื่องจักรที่สามารถคำนวณตัวเลขได้ครอบคลุมเกือบทุกกรณี จึงทำให้ Turing Machine ถูกนำมาปรับใช้ และพัฒนามาเป็นคอมพิวเตอร์สมัยใหม่ที่เราใช้กันในปัจจุบัน

<br>

หวังว่าทุกคนจะได้ความรู้เกี่ยวกับ Turing Machine ไม่มากก็น้อยจาก blog นี้นะครับ ไว้ถ้ามีโอกาสผมจะมาเขียนเกี่ยวกับเรื่องอื่นๆที่น่าสนใจอีกครับ

<br>

## <span class="text-green-500">#</span> อ้างอิง

<br>

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
  <p>Andreas Müller. (n.d.). <i>YouTube</i>. Retrieved May 30, 2025, from <a href="https://www.youtube.com/watch?v=O4arOveXvGE">https://www.youtube.com/watch?v=O4arOveXvGE</a></p>
<p>MathVoices. (December 1, 2021). <i>Alan Turing and Computable Numbers</i>. Retrieved May 30, 2025, from <a href="https://mathvoices.ams.org/featurecolumn/2021/12/01/alan-turing-computable-numbers/">https://mathvoices.ams.org/featurecolumn/2021/12/01/alan-turing-computable-numbers/</a></p>
<p>Turing, A.M. (1936). <i>On Computable Numbers, with an Application to the Entscheidungsproblem</i>. Retrieved May 28, 2025, from <a href="https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf">https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf</a></p>
<p>ScienceDirect. (n.d.). <i>Turing Machine</i>. Retrieved May 31, 2025, from <a href="https://www.sciencedirect.com/topics/physics-and-astronomy/turing-machine">https://www.sciencedirect.com/topics/physics-and-astronomy/turing-machine</a></p>
<p>Wikipedia. (n.d.). <i>Automata theory</i>. Retrieved May 28, 2025, from <a href="https://en.wikipedia.org/wiki/Automata_theory">https://en.wikipedia.org/wiki/Automata_theory</a></p>
<p>Wikipedia. (n.d.). <i>Turing machine</i>. Retrieved May 28, 2025, from <a href="https://en.wikipedia.org/wiki/Turing_machine">https://en.wikipedia.org/wiki/Turing_machine</a></p>

</div>