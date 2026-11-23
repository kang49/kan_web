---
date: 2026-11-20
image: https://i.imgur.com/2w3Wypk.png
title: I Fixed Two Bottlenecks in Open MPI (2x–5x Faster)
description: I just wanted to run a quick test on my ARM64 box. Somehow I got trolled by CPU power-saving, a slow stopwatch, and ended up sending a PR to Open MPI.
title_th: ผมแก้คอขวดใน Open MPI ให้เร็วขึ้น 2–5 เท่า
description_th: สวัสดีทุกคน วันนี้จะมาเล่าวีรกรรมความว่างของตัวเอง จากแค่กะจะเปิดเครื่อง ARM มารันเทสเล่นๆ 5 นาที สุดท้ายบานปลายไปนั่งงมโค้ด Open MPI ยันตีสองเฉย...
tags: ['hpc', programming, tech, computerscience]
language: EN
---

::blog-info
::

Hey everyone! Today I'm not going to bore you with a dry academic breakdown—I just want to tell the ridiculous story of how my latest side quest spiraled out of control. (If you *do* want the serious 5-page paper, exact numbers, and full benchmarks, everything is over on GitHub: <a class="text-blue-600 underline" href="https://github.com/kang49/arm64-openmpi-lse-research">kang49/arm64-openmpi-lse-research</a>.)

It all started with the most dangerous lie in software engineering: **"Let me just run a quick 5-minute benchmark."** Cut to 2:00 AM, and I'm staring at raw assembly dumps wondering how I got here. Let's get into it... yeah!

<br>

## <span class="text-green-500">#</span> How It Started: Just Testing My ARM Box

<br>

I had this 4-core ARM64 machine sitting around and kept he

aring about how newer ARM chips have dedicated hardware instructions (**LSE**) to speed up multi-core synchronization. So I thought, cool, let me compile **Open MPI** (the thing that passes messages between CPU cores) and see how fast it runs.

In my head, this was a clean 10-minute afternoon task: compile, run, look at some nice numbers, go get food.

<br>

## <span class="text-green-500">#</span> Getting Trolled #1: The CPU Was Just Waking Up

<br>

On my very first test run, latency suddenly dropped like a rock. For a brief, glorious moment, I genuinely thought, *"Damn, maybe I'm actually a systems genius."*

Good thing I double-checked the CPU clock speeds. Turns out, it wasn't my genius at all—Linux had power-saving (`ondemand`) turned on. The CPU started the test half-asleep at `1.50 GHz` and only woke up to `2.40 GHz` halfway through, making the second half look magically faster.

My "breakthrough optimization" was literally the CPU finishing its morning stretch. Once I locked all 4 cores to run at full speed from the start, the fake speedup vanished completely. Humbling start, hahaha!

<br>

## <span class="text-green-500">#</span> Getting Trolled #2: My Stopwatch Was Slower Than the Code

<br>

Okay, fine. Next, I tried timing tiny atomic instructions that run in just a few nanoseconds. No matter what I changed, the old hardware path and the new hardware path gave me the exact same number. I sat there confused as hell wondering why the new hardware was doing nothing.

Then I checked how long my *timer* itself took to run. Yeah... the instruction I was measuring took ~6 nanoseconds, while the `clock_gettime()` stopwatch I wrapped around it burned 37 nanoseconds just to start and stop.

It was basically like trying to weigh an ant on a highway truck scale. No wonder everything looked the same! I had to drop down to reading the hardware counter directly before the real numbers finally showed up.

<br>

## <span class="text-green-500">#</span> Plot Twist: Actually Finding Two Real Bugs in Open MPI

<br>

Once my benchmarks stopped lying to me, I started poking around inside **Open MPI**'s actual source code—and somehow stumbled onto two legit bugs:

### 1. A Queue That Forgot to Take a Breath
In Open MPI's lock-free queue (`opal_lifo.h`), whoever wrote the older code path added a polite rule: *"If you fail 5 times in a row, yield the CPU so another thread can go."* When someone later wrote the newer 128-bit path... **they completely forgot to add it.** So threads just slammed into each other nonstop. Adding those 8 lines back sped it up by 4–5× immediately.

<br>

<center>
  <div>
    <div class="w-full md:w-3/4 p-2">
      <img src="https://raw.githubusercontent.com/kang49/arm64-openmpi-lse-research/main/paper/figures/fig_atomic_scaling.png" alt="Micro-batched atomic latency and 4-way opal_lifo isolation" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://github.com/kang49/arm64-openmpi-lse-research
      </p>
      <p class="text-[12px] text-black">
    Figure 1: (Left) Micro-batched (K=32, 2.40 GHz) mean and p99 tail latency comparing LL/SC vs. hardware LSE, and (Right) 4-way isolation of the opal_lifo_t backoff fix across 2, 4, and 8 threads.
      </p>
    </div>
  </div>
</center>

<br>

### 2. A Dead Feature Burning 38.29% of My CPU
This one made me laugh out loud. I ran a profiler during a plain ping-pong test and saw one random function eating **38.29% of all user-space CPU time**—for a feature my test wasn't even using!

I opened the file and saw what it was doing: on *every single* polling loop, it incremented an atomic counter and locked/unlocked a mutex **before** checking the flag that said *"Hey, this feature isn't even initialized yet."*

It's like unlocking three deadbolts, walking into the house, and turning on the lights... just to read a note on the fridge saying *"Closed"* and walking right back out. Moving that check to the front (safely, so multi-threaded code doesn't blow up) cut polling time in half.

<br>

<center>
  <div>
    <div class="w-full md:w-3/4 p-2">
      <img src="https://raw.githubusercontent.com/kang49/arm64-openmpi-lse-research/main/paper/figures/term_objdump.png" alt="Terminal capture of ldapr and MPI_Test" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://github.com/kang49/arm64-openmpi-lse-research
      </p>
      <p class="text-[12px] text-black">
    Figure 2: AArch64 disassembly from objdump verifying the FEAT_LRCPC ldapr acquire-load in mca_part_persist_progress alongside 5-trial MPI_Test() polling latency under MPI_THREAD_MULTIPLE.
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
    Figure 3: (Left) Controlled osu_latency ablation at fixed 2.40 GHz contrasted against the ondemand DVFS artifact, and (Right) MPI_Test() polling latency before and after the ldapr fast-path.
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> Summary

<br>

Here's a quick summary of what those fixes actually gave us:

- **`opal_lifo` lock-free queue under contention:** **`4.34×–5.53×` faster** (`180.4 -> 32.6 ns` at 2 threads, `168.8 -> 34.0 ns` at 4 threads, and `165.8 -> 38.2 ns` at 8 threads).
- **Non-blocking `MPI_Test()` polling (`MPI_THREAD_MULTIPLE`):** Eliminated **38.29%** of wasted CPU spin cycles and made `MPI_Test()` **`2.10×` faster** (**52.3%** lower latency, from `57.05` down to `27.20 ns/call`).
- **ARM64 LSE vs. LL/SC hardware scaling (4 cores):** Dropped retry aborts to `0.000/op`, cutting latency variance by **`3.88×`** and p99 tail latency by **`2.04×`**.

**Who benefits?**
Anyone running **HPC, AI, or scientific workloads** with Open MPI on **ARM64** hardware (from small clusters like Raspberry Pi 5 / BCM2712 up to AWS Graviton, Ampere, or A64FX servers)—especially multi-threaded apps (`MPI_THREAD_MULTIPLE`) doing frequent non-blocking polling without MPI-4 Partitioned Communication. (The `part/persist` fix removes wasted atomic/mutex work on x86 and POWER too.)

**The PR**
My "5-minute benchmark" turned into a 5-page paper and two clean patches. The first patch (`part/persist`) is already submitted as an upstream **Pull Request to `open-mpi/ompi` (`main`)**—fingers crossed it gets merged, hahaha. Once it lands, ARM supercomputers and researchers running future Open MPI releases will get this speedup out of the box for free.

If you want to check out the actual paper, benchmarks, and patches, everything is in the repo here: <a class="text-blue-600 underline" href="https://github.com/kang49/arm64-openmpi-lse-research">https://github.com/kang49/arm64-openmpi-lse-research</a>. Now if you'll excuse me, I badly need to catch up on sleep!

<br>

**Disclaimer:** This entire project is **non-peer-reviewed** personal tinkering, and I'm literally just a clueless first-year CS undergrad messing around with code I barely survived reading. Please take everything here with a massive grain of salt—and if you spot anything stupid or wrong, feel free to call me out on GitHub, hahaha.

<br>

## <span class="text-green-500">#</span> References

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
<p>Kankawee Aramrak. (2026). <i>arm64-openmpi-lse-research: Paper, Benchmarks, and Patches</i>. GitHub: <a href="https://github.com/kang49/arm64-openmpi-lse-research">https://github.com/kang49/arm64-openmpi-lse-research</a></p>
<p>Open MPI Fork — Part Persist Fast-Path Branch. GitHub: <a href="https://github.com/kang49/ompi/tree/fix/part-persist-progress-fastpath">https://github.com/kang49/ompi/tree/fix/part-persist-progress-fastpath</a></p>
<p>Open MPI Fork — OPAL LIFO 128-bit CAS Backoff Branch. GitHub: <a href="https://github.com/kang49/ompi/tree/fix/opal-lifo-cas128-backoff">https://github.com/kang49/ompi/tree/fix/opal-lifo-cas128-backoff</a></p>
</div>

<br>

## <span class="text-green-500">#</span> Buy me a coffee

<br>

If you enjoy my content and want to support my work, you can buy me a coffee at <a class="text-blue-600" href="https://buymeacoffee.com/metakeen">Buy me a coffee</a>
