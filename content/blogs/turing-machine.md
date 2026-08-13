---
date: 2025-06-01
image: https://i.imgur.com/SR9W7aS.png
title: The Innovation of Calculator (Turing Machine)
description: Yesterday I had the opportunity to visit a museum called ACMI (Australian Centre for the Moving Image)...
title_th: นวัตกรรมเครื่องคำนวณ (Turing Machine)
description_th: เมื่อวันก่อนผมได้มีโอกาสเข้าเยี่ยมชมพิพิธภัณฑ์ที่มีชื่อว่า ACMI (Australian Centre for the Moving Image) พิพิธภัณฑ์นี้ตั้ง...
tags: ['history', 'technical', 'alan turing']
language: EN
---

::blog-info
::

## <span class="text-green-500">#</span> Turing and his picture at the museum

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

A few days ago, I had the chance to visit a museum called ACMI (Australian Centre for the Moving Image). This museum is located in Melbourne, Australia. Mostly, it showcases various equipment related to filmmaking from the past to the present, including techniques used by people in the old days to create a film.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/JMgeoTl.jpeg" alt="ACMI GAMES LAB PRESENTED BY BIG ANT STUDIO" class="w-full">
    </div>
  </div>
</center>

<br>

In addition, there's a Gaming Zone with arcade machines from the 90s, the kind we often see in Western movies. I stumbled upon a part of this zone that outlined the history of Video Games. There was a topic called "**Laboratory to Arcade**," which featured a key figure: Alan Turing, a mathematician and the father of computer systems, and a historical figure I greatly admire.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/bC1f2UI.jpeg" alt="ACMI GAMES LAB PRESENTED BY BIG ANT STUDIO" class="w-full">
    </div>
  </div>
</center>

<br>

It explained the beginning of computer systems that would later become entertainment tools for the general public. The image on the right shows the **Harvard Mark I** machine, built in 1944 by **IBM** and **Howard Aiken**. If I get the chance, I'd like to talk more about this machine; its role in World War II was quite remarkable.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/cnrtt39.jpeg" alt="ACMI GAMES LAB PRESENTED BY BIG ANT STUDIO" class="w-full">
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> The Hierarchy of Computing Machines (Automata Theory)

<br>

First, let's look at what came before we had machines capable of almost any computation, like the Turing Machine. We'll discuss something called "**Automata theory**," which is the hierarchy of computing machines that progressively become more intelligent, starting with:

<br>

1.  **Combinational Logic:** This is the most basic type of machine, like an instant calculation where the output depends solely on the current input. It has no memory or state. It can perform basic logic operations like **AND, OR, NOT**. An example is a simple adder circuit.
2.  **Finite State Machine (FSM):** This machine has a small amount of memory and can store a few states. It can change states based on the input received, like old-fashioned vending machines without digital screens, such as Tao Bin machine (A popular vending machine in Thailand).
3.  **Pushdown Automata (PDA):** This machine has **stack-based memory**, allowing it to store more data and work with nested structures. For example, it can check for balanced parentheses in a program, enabling it to process the grammar of programming languages to a certain extent.
4.  **Turing Machine:** This machine has **theoretically unlimited memory**. It can work with more complex data, read and write data as needed, and change states according to predefined conditions. Importantly, a Turing Machine can simulate the operation of all other machines. This is the foundation of the modern computer systems we use today.

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

## <span class="text-green-500">#</span> The Concept of the Turing Machine

<br>

Initially, the Turing Machine wasn't a real machine but just a theory proposed by Alan Turing in 1936. At that time, the world was in the throes of World War II. The idea was that we wanted a machine to perform some calculations, for example, calculating the trajectory of artillery shells or deciphering enemy secret messages.

<br>

Before Turing conceived the Turing Machine, the worlds of mathematics and logic had an interesting question: "What kinds of problems can we solve through a step-by-step procedure, or what we call an '**algorithmic process**'?".

<br>

It must be said that machines have one thing that humans can never compete with: routine tasks that involve doing the same thing over and over. Machines love this and can do it very quickly.

<br>

So, the thought process was how to make this machine work using the same algorithm or a similar way of thinking. For example, if we have a toaster and a slice of bread, the process of making the bread crispy should be the same for the next slice, or even for different brands of bread. It has to toast until crisp, and when it reaches a certain temperature, it should pop up, right? This way, we don't have to redesign the toaster every time we want to change the bread. And it's much easier to have a machine perform such repetitive tasks.

<br>

Therefore, the concept of "**Computable Numbers**" was defined. We have a number, and we define it as computable if it can be read/written by a computer, so the computer can perform routine work until it eventually finds the answer.

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

## <span class="text-green-500">#</span> How a Turing Machine Works

<br>

The working principle of a Turing Machine is very simple, involving only **reading, writing, moving left/right, changing state, and halting**. Turing stated in his paper that these operations are sufficient to perform many kinds of calculations.

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

According to the theory, a Turing Machine has four main components:

1.  **Tape:** This is where the data for computation is stored and where the results are shown. The tape is theoretically infinitely long and can be read from and written to. It's divided into cells, each holding one symbol. Each cell is called a "**Square**".
2.  **Head:** This part reads data from the tape and writes data onto the tape. It can move left or right one cell at a time and can erase and write new data. Only one square is read at a time; this square is called the "**Scanned Square**," and the symbol in the scanned square is called the "**Scanned Symbol**".
3.  **State Register:** This part stores the current state of the Turing Machine, indicating its current condition and determining the next action. It's analogous to our state of mind – how we feel and what we'll do next.
4.  **Table of Instructions:** This part is like a program we write to tell the machine what to do if it's in a certain state and reads a certain symbol from a square. For example, it might write new data, change its state, or move the head. And when everything is finished, it should know where to stop.

<br>

Each time the Turing Machine operates, I'll divide it into 3 main steps, according to the conditions specified in the Table of Instructions, as follows:

1.  **Read/Write data from the Scanned Square:** The head will read or write data on the Scanned Square (the single square currently being read).

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

2.  **Process/Decide:** Based on the current state and the data read from the head, the machine will find the corresponding condition or rule in the Table of Instructions. Upon finding a matching rule, it will follow the instructions in that rule, which consist of writing new data onto the Scanned Square (or keeping the existing data), changing the machine's state, and moving the head left or right (or staying in place).

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

3.  **Loop or Halt:** After completing the instructions, the machine will loop back to step 1 to read the new symbol in the square the head is pointing to, and repeat the process until it encounters a "Halt State." This is a special state indicating that the computation is complete, and the machine will stop operating. For instance, in the example image of instructions above, there's a state named "q_end," which I've designated as the state to halt the machine.

<br>

## <span class="text-green-500">#</span> Example of Calculation with a Turing Machine

<br>

Let's see the steps a Turing Machine takes to multiply a number by 2. First, I will define the format of the Table of Instructions, explaining what each parenthesis means.

<br>

**Format:**
(Current State, Symbol Read) → (Symbol to Write, Direction to Move, New State)

<br>

**Example of Turing Machine Calculation: Multiplying a Binary Number by 2**

Multiplying a binary number by 2 is a straightforward operation in the binary system: simply add a '0' to the end of the number (equivalent to shifting all bits one position to the left).

<br>

**Problem:** Multiply the given binary number by 2.

**Input Format:** A binary number on the tape, with blank symbols 'b' before and after it.

**Example Input:** '...b b 1 0 1 b b b...' (meaning 101 in binary, which is 5 in decimal)

**Desired Output:** '...b b 1 0 1 0 b b...' (meaning 1010 in binary, which is 10 in decimal)

<br>

**Components we will use:**

-- **Alphabet (Σ):** {0, 1, b} (where 0 is bit '0', 1 is bit '1', b is the Blank Symbol representing a space)

-- **States (Q):**

---- **q_find_end:** The initial state, also used to find the last digit of the number.

---- **q_halt:** The halting state.

-- **Start State:** q_find_end

-- **Input Convention:** The head starts at the leftmost bit of the binary number on the tape.

<br>

**Table of Instructions (δ):**

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/Cipz5eJ.png" alt="Turing Machine Head" class="w-full">
      <p class="text-[12px] text-black">
    Image of Table of Instructions to demonstrate Turing Machine multiplying binary by 2
</p>
    </div>
  </div>
</center>

<br>

**Step-by-step operation for input: 101 (5 in decimal)**

Initial state (before starting the machine)

-- Tape: ...b b 1 0 1 b b b...
-- Head: Pointing at 1 (the leftmost bit of 101)
-- State: q_find_end

<br>

**Step 1:**

-- State: q_find_end

-- Read: 1 (symbol under the head)

-- Rule used: (q_find_end, 1) → (1, R, q_find_end)

-- Action:

---- Write: 1 (overwrite the same symbol)

---- Move: R (head moves right 1 cell)

---- Change State: q_find_end

-- Tape state after action: ...b b 1 0 1 b b b... (head is on 0)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/d5kzwA7.gif" alt="gif image demonstrate step1" class="w-full">
    </div>
  </div>
</center>

<br>

**Step 2:**

-- State: q_find_end

-- Read: 0

-- Rule used: (q_find_end, 0) → (0, R, q_find_end)

-- Action:

---- Write: 0 (overwrite the same symbol)

---- Move: R

---- Change State: q_find_end

-- Tape state after action: ...b b 1 0 1 b b b... (head is on the rightmost 1)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/HI1BagQ.gif" alt="gif image demonstrate step2" class="w-full">
    </div>
  </div>
</center>

<br>

**Step 3:**

-- State: q_find_end

-- Read: 1

-- Rule used: (q_find_end, 1) → (1, R, q_find_end)

-- Action:

---- Write: 1 (overwrite the same symbol)

---- Move: R

---- Change State: q_find_end

-- Tape state after action: ...b b 1 0 1 b b b... (head is on the first b after 101)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/0K8zkGv.gif" alt="gif image demonstrate step2" class="w-full">
    </div>
  </div>
</center>

<br>

**Step 4:**

-- State: q_find_end

-- Read: b (blank symbol)

-- Rule used: (q_find_end, b) → (0, L, q_halt)

-- Action:

---- Write: 0 (overwrite that blank symbol)

---- Move: L (head moves left 1 cell)

---- Change State: q_halt

-- Tape state after action: ...b b 1 0 1 0 b b... (head is on the rightmost 1)

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/ONtba6U.gif" alt="gif image demonstrate step2" class="w-full">
    </div>
  </div>
</center>

<br>

**Halt:**

Since the current state is q_halt, the machine halts. The computation is complete.

**Final Output on Tape:** ...b b 1 0 1 0 b b... which represents the binary number 1010 (equal to 10 in decimal).

This example shows that a Turing Machine can perform complex calculations using only basic instructions and sequential interaction with the tape.

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

As you all saw in the example images above, you can go and play, experiment with programming a Turing Machine by visiting the website:

<a href="http://turingmachinesimulator.com/shared/dqtsihjivq" target="blank" class="text-[16px] text-[#0000FF]">
    Turing Machine Simulator
</a> 

<br>
<br>

## <span class="text-green-500">#</span> Mike Davey's Turing Machine Simulator

<br>

As I mentioned, the Turing Machine was just a theory Alan Turing proposed in 1936. However, the machine you might have seen in books or on Wikipedia is actually a simulator built to help us understand how a Turing Machine works more easily.

<br>

The creator of this simulator is **Mike Davey**. He presented this simulator on **Hackaday** in 2010, using modern technology to simulate the operation of a Turing Machine.

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

## <span class="text-green-500">#</span> Video of Mike Davey's Turing Machine in Action

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

## <span class="text-green-500">#</span> The Role of the Turing Machine in Today's Computer Industry

<br>

If we delve into the workings of the **CPU (Central Processing Unit)** in modern computer systems that we use every day, we'll find that the CPU has borrowed the core working principles of the Turing Machine for data processing. Although modern CPUs are much smarter and have more complex **Instruction Set Architectures (ISA)**, the fundamental principle remains the same: reading data from memory, processing data according to specified instructions, and writing the results back to memory, just as Alan Turing conceived for us in 1936.

<br>

## <span class="text-green-500">#</span> Summary

<br>

The Turing Machine is a theory proposed by Alan Turing in 1936 to describe computations that can be performed using a sequential procedure (Algorithmic Process). Its main components include a Tape, a Head (Read/Write), a State Register, and a Table of Instructions. It is a machine capable of computing numbers in almost all cases, which led to the Turing Machine being adapted and developed into the modern computers we use today.

<br>

I hope everyone has learned something about the Turing Machine, whether a little or a lot, from this blog. If I have the chance, I'll write about other interesting topics again.

<br>

## <span class="text-green-500">#</span> References

<br>

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
  <p>Andreas Müller. (n.d.). <i>YouTube</i>. Retrieved May 30, 2025, from <a href="https://www.youtube.com/watch?v=O4arOveXvGE">https://www.youtube.com/watch?v=O4arOveXvGE</a></p>
<p>MathVoices. (December 1, 2021). <i>Alan Turing and Computable Numbers</i>. Retrieved May 30, 2025, from <a href="https://mathvoices.ams.org/featurecolumn/2021/12/01/alan-turing-computable-numbers/">https://mathvoices.ams.org/featurecolumn/2021/12/01/alan-turing-computable-numbers/</a></p>
<p>Turing, A.M. (1936). <i>On Computable Numbers, with an Application to the Entscheidungsproblem</i>. Retrieved May 28, 2025, from <a href="https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf">https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf</a></p>
<p>ScienceDirect. (n.d.). <i>Turing Machine</i>. Retrieved May 31, 2025, from <a href="https://www.sciencedirect.com/topics/physics-and-astronomy/turing-machine">https://www.sciencedirect.com/topics/physics-and-astronomy/turing-machine</a></p>
<p>Wikipedia. (n.d.). <i>Automata theory</i>. Retrieved May 28, 2025, from <a href="https://en.wikipedia.org/wiki/Automata_theory">https://en.wikipedia.org/wiki/Automata_theory</a></p>
<p>Wikipedia. (n.d.). <i>Turing machine</i>. Retrieved May 28, 2025, from <a href="https://en.wikipedia.org/wiki/Turing_machine">https://en.wikipedia.org/wiki/Turing_machine</a></p>

</div>