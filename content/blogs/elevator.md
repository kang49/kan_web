---
date: 2025-07-31
image: https://i.imgur.com/fU0gPd0.png
title: The Elevator's Brain
description: Hello to all my readers! It's another great day for a blog post. Today, we're diving into something called the **"El...
title_th: ลิฟต์คือจุดเปลี่ยนตึกทั้งโลก
description_th: สวัสดีเหล่านักอ่านทุกคน อีกหนึ่งวันที่เหมาะแก่การเขียนบล็อก เรื่องที่จะเล่าในวันนี้เกี่ยวกับสิ่งที่เรียกว่า "Elevator...
tags: ['history', 'technical', 'civil engineering']
language: EN
---

::blog-info
::

Hello to all my readers! It's another great day for a blog post. Today, we're diving into something called the **"Elevator Algorithm."** Many of you who studied computer science in university have probably coded a elevator program at some point. Today, we're going to break it down for everyone in simple terms: How do elevators work? What kinds of algorithms are there? Why do some elevator brands feel faster than others? And how are they chosen?

<br>

## <span class="text-green-500">#</span> Elevator Basics

<br>

Before we get into the nitty-gritty, let's switch gears and set the mood. We'll start with the fundamental principles of how an elevator works from a **Physics** and **Engineering** perspective.

<br>

At its core, an elevator is just a giant **"pulley."** We all learned about this in high school science class, right? Remember all that F1, F2 stuff (and no, I don't mean the race cars)? You have a wheel at the top, and a rope runs over it to reduce friction. Now, if you attach a weight to one end, gravity will pull it down, making the rope move. If you don't hold on, that weight will plummet to the ground. But if you hold the rope, or better yet, attach an equally heavy weight to the other end at the same level, the forces balance out, and the wheel doesn't turn. This is exactly the principle we use for elevators, just by replacing one weight with a passenger car and adding a motor to help turn the wheel at the top.

<br>

The design is incredibly clever. Instead of having the motor do 100% of the work to lift the **"Car"** plus the weight of everyone inside (which can be tons) on its own, engineers added something called a **"Counterweight"** hanging on the other end of the cable to offset the car's weight.

<br>

This counterweight is designed to weigh about the same as an empty car plus 40-50% of its maximum passenger load. Now, the motor doesn't have to work so hard; it only needs to lift the "difference" in weight between the two sides, making the elevator's movement much easier and saving a ton of energy, too.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/G544pEl.png" alt="Basic elevator components" class="w-full">
      <p class="text-[12px] text-black">
    A simplified diagram of an elevator's external components.
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> Elevators Must Be Safe

<br>

Back in 1853, an American engineer named **Elisha Otis** initiated a concept that would give us much safer elevators. He invented a system called the **"Safety Brake,"** which would prevent the elevator from falling if the cable snapped. This was the turning point for all future elevator development.

<br>

The following year, he started thinking, "This system is brilliant. If I market this right, I'll be rich." But nobody knew about it yet. So, to generate some buzz, he staged a dramatic demonstration at the **Exhibition of the Industry of All Nations** in **New York City**.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/P1YAVFC.png" alt="Elisha Otis demonstration 1854" class="w-full">
      <p class="text-[12px] text-black">
    The demonstration by Elisha Otis in 1854 in New York City.
      </p>
    </div>
  </div>
</center>

Talk about a spectacle—no one could ignore this. Otis stood on the platform and ordered the man above, "Cut the rope!" The cutter hesitated, probably thinking, "Should I really do this? If this guy plummets to his death, am I going to jail?" But he did it anyway. "Cut!" The platform dropped a few inches... the crowd below held its breath, many peeking through their fingers. Everyone expected a crash... but it didn't fall! Then, Otis proclaimed, **"All safe, gentlemen, all safe."** The crowd looked up, astonished. Before this, elevators were incredibly dangerous. If a rope broke, it was basically a death sentence. That's why, in the old days, they were mostly used for hauling freight, vegetables, and other goods.

<br>

## <span class="text-green-500">#</span> The Rise of the Electric Elevator

<br>

As a new era began, tall buildings started popping up everywhere, and older elevator systems like hydraulics were no longer efficient enough for transporting people. So, in 1880, a German engineer named **Werner von Siemens** built the first electric elevator. This was a massive breakthrough for civil engineering. From now on, the sky was the limit—literally. Building skyscrapers was no longer hindered by the problem of walking up endless flights of stairs.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/Mtn8Eus.png" alt="First electric elevator by Siemens" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: Facebook - Siemens
      </p>
      <p class="text-[12px] text-black">
    A picture of the first electric elevator built by Werner von Siemens.
      </p>
    </div>
  </div>
</center>

<br>

Furthermore, in 1887, African-American inventor **Alexander Miles** patented an **automatic elevator door system**, which made the powerful new electric elevators much safer and more convenient to use.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/l9y9mDe.png" alt="Alexander Miles Automatic Elevator Door" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://lemelson.mit.edu/resources/alexander-miles
      </p>
      <p class="text-[12px] text-black">
    The patent drawing for Alexander Miles's automatic elevator doors.
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> The Elevator Operator

<br>

Okay, so now we have safe, electric elevators. But that begs the question: **Who operated them before we had computers?**

<br>

The answer is, **an actual person operated the elevator**, or sometimes the passengers did it themselves. But you didn't just press a button for floor 1, 2, or 3. Instead, there was a control lever to move the elevator up or down, as seen in the picture below. You'd push the lever left to "D" (Down) to go to a lower floor, and right to "U" (Up) to go to a higher one.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/wy46K4w.jpeg" alt="Old elevator control lever" class="w-full">
      <p class="text-[12px] text-black">
    An image of a vintage elevator control lever.
      </p>
    </div>
  </div>
</center>

<br>

Now, the elevator operator had to think on their feet: **"Who was first? Where are they going? Oh wait, is that the CEO? Better get him to his floor, pronto! Everyone else can wait."** With one or two people, it was manageable. But as more people piled in, the operator couldn't keep track of who was going where. The job became a logistical nightmare. Eventually, the operators would say, "That's it, boss! I'm out! Let someone else deal with this madness!"

<br>

This pain point created a need for a solution. When computers started to become more common, engineers at **The Otis Elevator Company** invented **"Collective Control,"** an algorithm to manage the queue. From then on, the elevator could automatically travel to the desired floors.

<br>

## <span class="text-green-500">#</span> Elevator Algorithm

<br>

The **Elevator Algorithm**—the system that controls the elevator's thinking, decision-making, and movement—is a huge part of daily life for us office dwellers. This system has been continuously developed to be more efficient, faster, and safer. Here are the main types:

<br>

**FCFS (First-Come, First-Served)**: 
This system processes requests in the order they were received. The elevator goes to whichever floor was called first. It's the simplest and most brutally straightforward method. But once it gets busy, and someone calls the elevator to the 40th floor when you just want to go to floor 3... well, you have to wait for it to go all... the... way... up... and then all... the... way... back... down. WHY?!

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/tfzU2qt.png" alt="FCFS Algorithm" class="w-full">
      <p class="text-[12px] text-black">
    Example diagram of the FCFS Algorithm.
      </p>
    </div>
  </div>
</center>

<br>

**SSTF (Shortest Seek Time First)**: 
This system services the closest floor request first, regardless of the order they were called. This can reduce the average waiting time for passengers.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/TpMXvx7.png" alt="SSTF Algorithm" class="w-full">
      <p class="text-[12px] text-black">
    Example diagram of the SSTF Algorithm.
      </p>
    </div>
  </div>
</center>

<br>

Sounds great, right? But imagine this: you're on the top floor at 5 PM, ready to head down to grab a pizza. You press the button... and wait. Two minutes... seven minutes... half an hour later, you give up and take the stairs. Why? Oh, because it's rush hour, and everyone on floors 4-13 is also going home. The elevator is just happily shuttling between those floors because they're the 'closest' requests. Tough luck for you.

<br>

**SCAN (The "Classic Elevator" Algorithm)**: This is the algorithm most people are familiar with. The elevator travels in one direction, stopping at all requested floors along the way until it reaches the highest requested floor. Then, it reverses direction and sweeps down, servicing all the calls on the way down until it reaches the lowest requested floor, and so on.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/6RZnzzi.png" alt="SCAN Algorithm" class="w-full">
      <p class="text-[12px] text-black">
    Example diagram of the SCAN Algorithm.
      </p>
    </div>
  </div>
</center>

<br>

This is a much better idea, but with one tiny flaw. Let's say your building has 20 floors, and the elevator is heading up to drop someone off at floor 5. You call it from the Ground floor. The elevator won't come for you right away. After dropping off the passenger at floor 5, it will continue its scenic tour all the way to floor 20—**even if nobody called it from any higher floors**—before finally reversing to come back for you. Besides being a waste of time, it's also a waste of electricity for the building owner. This led to the next, improved method!

<br>

**LOOK (The "Smarter SCAN")**: This is an enhancement of SCAN. The elevator doesn't travel to the very top or bottom floors. Instead, it only travels as far as the highest or lowest call in its current direction. The catch is, **you have to have made your request before it reverses direction.** If you press the button just as it's about to switch, you'll have to wait for it to complete its entire trip in the other direction before it comes back for you.

<br>

This is a very fair and time-saving method, which is why it's so popular in modern elevators.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/aeAcNSn.png" alt="LOOK Algorithm" class="w-full">
      <p class="text-[12px] text-black">
    Example diagram of the LOOK Algorithm.
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> Destination Dispatch - Select First, Ride Later

<br>

We all know that data is king. Even AI needs massive amounts of data to learn. Knowing information in advance allows for more accurate predictions. The same goes for elevators. The crucial piece of information they were always missing was **"where the passenger wants to go."** This led to the invention of a new system called **"Destination Dispatch."**

<br>

**Destination Dispatch** is incredibly useful in buildings with multiple elevators. Users select their destination floor from a panel in the lobby *before* entering the elevator. A central system then calculates and assigns the most efficient elevator for that person.

<br>

The main idea is to **"group"** users with the same or nearby destinations to make the service more efficient. For instance, if five people want to go to floors **10, 11, 12, 13,** and **14**, the system will assign them to the same elevator. This reduces wait times and improves transport efficiency. Meanwhile, if another group of people wants to go to floors **35, 37, 38, 39,** and **40**, the system will assign them to a different elevator that will likely shoot straight up to that zone without stopping at the lower floors—just like taking an express train into the city.

<br>

Amazingly, this idea was patented back in 1961 by an Australian engineer named **Leo Port**. But it was way ahead of its time. The relay-based elevator control systems of that era couldn't handle such complex calculations. It wasn't until the microprocessor era of the 1980s and 1990s that it became commercially viable. **Schindler's Miconic 10** system, launched in 1992, is considered the first major commercial **DDS** system.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/0hRF71U.png" alt="Destination Dispatch console" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: Destination dispatch - Wikipedia
      </p>
      <p class="text-[12px] text-black">
    A Destination Dispatch elevator console panel.
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> Speed Isn't Everything

<br>

Choosing an algorithm for a building's elevators isn't just about picking the fastest one. Engineers must perform an **"Elevator Traffic Analysis,"** which considers several other factors:

<br>

**Building Type**: Elevator usage patterns vary drastically between buildings. An office building has clear peak hours in the morning and evening. A hospital needs to prioritize **emergency elevators (Priority Call)** above all else. A residential building has more spread-out and unpredictable usage.

<br>

**Quantity vs. Quality**:
<br>
  - **Handling Capacity (HC)**: This is the quantity, or the number of people the system can transport (measured in people per 5 minutes).
<br>
  - **Average Wait Time (AWT)**: This is the quality of service (measured in the average time a passenger waits).

<br>
<br>

Engineers can't optimize both at the same time. Increasing HC might worsen AWT, and vice versa. It's a classic trade-off.

<br>

## <span class="text-green-500">#</span> Upgrading with AI and Machine Learning

<br>

**Predictive Parking**: Systems like **Otis's Compass Infinity** don't let idle elevators just sit around. They use **Machine Learning** to analyze historical usage data (time of day, day of the week, holidays) to predict where demand will likely occur. It then sends an empty elevator to that floor in advance. This alone can reduce waiting times by an additional **10-20%** compared to doing nothing.

<br>

**Adaptive Tuning**: Instead of using one set of rules all the time, AI can adjust the algorithm's parameters in real-time. It can learn that on a Monday morning, the goal is to clear the lobby as quickly as possible. But on a Saturday afternoon, the goal might shift to maximizing energy savings. This adjustment happens automatically without human intervention.

<br>

## <span class="text-green-500">#</span> Disk Scheduling (Trivia)

<br>

Did you know that the elevator problem is fundamentally the same as the **Disk Scheduling** problem from the **Operating Systems** course we took in university?

<br>

This connection isn't a coincidence. Early elevator algorithms were actually named after these concepts. It's such a classic problem in **Computer Science** that **Donald Knuth**, the father of the analysis of algorithms, used an elevator simulation in his book **"The Art of Computer Programming"** to explain programming concepts. It wasn't that elevators copied computers, but that both fields independently encountered a similar **Optimization** problem, and their solutions evolved along parallel lines.

<br>

## <span class="text-green-500">#</span> Conclusion

<br>

In the end, it's clear that the elevators we use every day have undergone continuous development and improvement from the past to the present. We've seen numerous historical figures who collectively contributed to creating the fast, efficient, and safe elevators of today—whether through clever algorithms to manage queues, the switch to electricity for speed, or the use of AI and Machine Learning to refine performance.

<br>

## <span class="text-green-500">#</span> References

<br>

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
<p>The Otis Elevator Company. (n.d.). <i>Our history: A story of innovation and progress</i>. Retrieved July 30, 2025, from <a href="https://www.otis.com/en/uk/our-company/history">https://www.otis.com/en/uk/our-company/history</a></p>
<p>Siemens - Official Facebook Page. (August 21, 2018). <i>Siemens History</i>. Retrieved July 30, 2025, from <a href="https://www.facebook.com/Siemens/posts/did-you-know-that-werner-von-siemens-developed-the-first-electric-elevator-in-th/1957533270974404/">https://www.facebook.com/Siemens/posts/did-you-know-that-werner-von-siemens-developed-the-first-electric-elevator-in-th/1957533270974404/</a></p>
<p>Lemelson MIT. (n.d.). <i>Alexander Miles Automatic Elevator Door</i>. Retrieved July 30, 2025, from <a href="https://lemelson.mit.edu/resources/alexander-miles">https://lemelson.mit.edu/resources/alexander-miles</a></p>
<p>Dev.to. (November 12, 2024). <i>Elevator Scheduling Algorithms: FCFS, SSTF, SCAN, and LOOK</i>. Retrieved July 30, 2025, from <a href="https://dev.to/thesaltree/elevator-scheduling-algorithms-fcfs-sstf-scan-and-look-2pae">https://dev.to/thesaltree/elevator-scheduling-algorithms-fcfs-sstf-scan-and-look-2pae</a></p>
<p>The Otis Elevator Company. (n.d.). <i>Compass Infinity™ AI Elevator Dispatching</i>. Retrieved July 30, 2025, from <a href="https://www.otis.com/en/us/products-services/products/compass-infinity">https://www.otis.com/en/us/products-services/products/compass-infinity</a></p>
<p>Joshua Nelson. (September 4, 2019). <i>Destination Dispatch and Elevator Control Innovation</i>. Retrieved July 30, 2025, from <a href="https://www.elevatorscenestudio.com/blog/2019/9/4/destination-dispatch">https://www.elevatorscenestudio.com/blog/2019/9/4/destination-dispatch</a></p>
<p>Wikipedia. (July 4, 2025). <i>Elevator algorithm</i>. Retrieved July 30, 2025, from <a href="https://en.wikipedia.org/wiki/Elevator_algorithm">https://en.wikipedia.org/wiki/Elevator_algorithm</a></p>
<p>Wikipedia. (May 20, 2025). <i>Destination dispatch</i>. Retrieved July 30, 2025, from <a href="https://en.wikipedia.org/wiki/Destination_dispatch">https://en.wikipedia.org/wiki/Destination_dispatch</a></p>
</div>

<br>

## <span class="text-green-500">#</span> Buy me a coffee

<br>

If you enjoyed my content and would like to show your support, you can buy me a coffee at <a class="text-blue-600" href="https://buymeacoffee.com/metakeen">Buy Me a Coffee</a>.