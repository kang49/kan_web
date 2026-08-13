---
date: 2026-04-09
image: https://i.imgur.com/GyfGab5.png
title: Anthropic has leaked data
description: Hello readers! Today we're going to talk about the incident where Anthropic leaked hundreds of thousands of lines of code. I saw this news early on...
title_th: Anthropic ทำข้อมูลหลุด
description_th: สวัสดีผู้อ่านทุกคนเลยนะ วันนี้เราจะมาเล่าเรื่องที่เกิดขึ้นกับบริษัท Anthropic ที่ทำข้อมูลโค้ดหลายแสนบรรทัดหลุดออกมา ซึ่งผมก็เห็นข่าวนี้อยู่ช่วงแรกๆ...
tags: ['ai', tech, security]
language: EN
---

::blog-info
::

Hello to all readers out there! Today, I'm going to tell you the story of what happened with **Anthropic** when they accidentally leaked *hundreds of thousands of lines of code*. I actually saw this news when it first broke, but I didn't pay much attention to it. That was until I had some free time and sat down to read about it while practicing for my own upcoming podcast. That's when I realized, *"Whoa! This is actually super interesting and there's so much to talk about."* But since I'm not quite ready to launch a podcast just yet, I'll write it as an article instead. Let's get into it... yeah!

<br>

## <span class="text-green-500">#</span> What is Anthropic?

<br>

Before we dive in, let's get a brief introduction to the AI company that everyone in the tech industry praises as the **gods of AI model creators**. Anthropic is an AI company similar to **OpenAI** (who made *ChatGPT*) or **Google** (who made *Gemini*). But what makes Anthropic stand out is the sheer brilliance of **Claude AI**, which is incredibly famous among devs. It's so good that when I switched over from Gemini, I literally dropped to my knees thinking, *"...Guys, I'm about to lose my job T-T"*

<br>

For anyone who hasn't tried **Claude** yet, go give it a shot. The pricing is about the same as the others. Personally, I was paying for Gemini before, but in late 2025, Google announced they were giving **Gemini Pro for free to all students**. Instead of saving that money, Google's generosity just let me shift my budget to pay for Claude instead, hahaha! But seriously, it's really good. Go try it out.

<br>

## <span class="text-green-500">#</span> The Mystery File in the NPM Registry

<br>

Going back to the end of last month, on **March 31, 2026**, a user with the Code Name: *Chaofan Shou* (no idea how to pronounce that, but it doesn't matter) found a strange file inside the `claude-code` package released for general users to download on the **NPM Registry**. This was a **60MB** file with a **`.map`** extension—a type of file that we normally don't see exposed to the public eye like this, as it's strictly meant for *internal use only*.

<br>

## <span class="text-green-500">#</span> What is Minify Code?

<br>

Before we discuss the role of the **`.map`** file in this drama, let me first explain what **Minify Code** is. Minifying code is the process of taking our freshly written code and *compressing it to make it shorter*. This involves removing spaces, changing long function names to simply `a`, `b`, `c`, deleting comments, and stripping out development environment details. This shrinks the code size, allowing it to **load faster over a network**. 

Even though many people think this is for security, it really just makes it *harder for anyone trying to reverse-engineer our code to read it*. It’s not a true security feature—it just makes the process incredibly painful, kind of like sitting down to decipher ancient Egyptian hieroglyphs.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/7pH9NYR.png" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://dev.to/przemyslawjanbeigert/minify-private-methods-in-a-typescript-class-3kk4
      </p>
      <p class="text-[12px] text-black">
    Figure 1: Example of minified code
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> The Purpose of the .map File

<br>

We mentioned in the previous section that minifying code makes it shorter so it loads faster and is harder to read. But what if we *want* to decode that minified code? How do we do it? The answer is this exact **`.map`** file. It acts as a *treasure map*, telling us, "This piece of code connects here," and the final result gives us the Original code exactly as the developers wrote it.

<br>

Now, everyone can probably guess the absolute disaster that was about to unfold. The person who found the `.map` file cracked it open, took a look, and probably said, *"Oh, S***,"*. Keeping something like this to yourself just feels wrong, right? Stuff like this belongs on **GitHub**! People rushed to download it hundreds of thousands of times, probably setting a new record for the *fastest-downloaded open-source leak in history*, if I remember correctly.

<br>

## <span class="text-green-500">#</span> The Unlocked Treasure

<br>

After obtaining the key, Anthropic’s code vault containing over **500,000 lines** of Claude AI's source code was laid bare. Most of it was written in **TypeScript**, managing various systems of the Claude Agent, such as how it handles long-term memory, how different Agents communicate with each other, unreleased features, and most importantly: the authentication system between users and the server, commonly known as **OAuth**.

<br>

## <span class="text-green-500">#</span> Buddy

<br>

The most talked-about feature in the leaked code was **"Buddy."** Its character behaves similarly to the *Tamagotchis* we (well, maybe not me) used to raise as kids. It was designed to have multiple species, and you couldn't choose which Buddy you got; it was randomized based on your **User ID**. However, this feature was originally planned to launch on **April 1, 2026**. The Reddit community suspected it was just an *April Fools'* joke, and ultimately, things went quiet.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/PBKLwjW.png" class="w-full">
      <p class="text-right text-[12px] text-black/50">
    Source: https://github.com/yasasbanukaofficial/claude-code
      </p>
      <p class="text-[12px] text-black">
    Figure 2: Buddy's File Structure
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> Post-Incident Risks

<br>

As I mentioned, the blueprint of the **OAuth** system was exposed. Many might think this is the equivalent of broadcasting our country's top-secret military strategy to our enemies. *But hold on!* In reality, the client-side OAuth system is designed so that it **doesn't need to store any secrets in the first place**. The fact that this part of the code leaked doesn't mean hackers can instantly breach the login system. Unless, of course, the team was careless enough to accidentally hardcode an API Key or important Secret inside it (which Anthropic confirmed did *not* happen; no sensitive data was leaked). Even so, it's still a risk that Anthropic has to deal with and keep a close eye on right now.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/GySBA8r.png" class="w-full">
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

We haven't talked about another fascinating aspect yet: what exactly *caused* this `.map` file to leak? Before I tell you that, let me introduce you to **Bun**. Bun is both a **JavaScript Runtime** and a **Package Manager** (think of it as an App Store for JS/TS Devs) used in JavaScript and TypeScript development. It has become incredibly popular among developers over the past 2-3 years, and Anthropic is one of the companies using Bun in this incident.

<br>

To elaborate a bit, a **JavaScript Runtime** is a tool that allows us to run JavaScript code on our computers. Normally, we'd use *Node.js*, but as I said, over the last 2-3 years, Bun has delivered phenomenal performance, so it's no surprise Anthropic chose to use it.

<br>

## <span class="text-green-500">#</span> .ignore

<br>

For the developers reading this, feel free to skip this section. But for anyone who hears this file name and feels confused, today I'll explain simply what an **`.ignore` file** is for.

<br>

If I had to compare an `.ignore` file to something in daily life, I'd use the example of setting up a keyword filter on **Facebook**. In that filter, we put banned words like *"F***"*, *"S***"*, or *"Voldemort"*. So, when we're about to post something, Facebook reads our keyword file. If it finds one of those words, it will automatically **ignore** it or block it from showing up right from the start, before we ever release it to the public eye.

<br>

The **`.ignore` file** does something very similar to those Facebook keywords. It's a file inside our project where devs write down the names of files or folders we *don't want to release*, telling the system to skip them during the packaging process. Examples include `.env`, `.map`, or files containing sensitive information. You can read how to write an `.ignore` file here: <a class="text-blue-600" href="https://linuxize.com/post/gitignore-ignoring-files-in-git/">https://linuxize.com/post/gitignore-ignoring-files-in-git/</a>

<br>

But in a single project, there are way too many files we want to hide, and typing them out one by one manually is a pain. Therefore, Bun or NPM provides **templates** right from the start of the project. It's like the system asking, *"Hey bro, what kind of project are you building? Oh, you're doing that? I've got the perfect template ready for you, just click and pull it in."* This template contains pre-thought-out file and folder names that should be hidden. It's an incredibly useful feature.

<br>

<center>
  <div>
    <div class="w-full md:w-1/2 p-2">
      <img src="https://i.imgur.com/lUJtkGo.png" class="w-full">
      <p class="text-right text-[12px] text-black/50">
      </p>
      <p class="text-[12px] text-black">
    Figure 4: Example of an .ignore file
      </p>
    </div>
  </div>
</center>

<br>

## <span class="text-green-500">#</span> The Cause of the Leak

<br>

As I said, the `.ignore` template feature is super useful. But if we trust this template too much and forget to double-check, or if we accidentally put a secret file into the project and that file happens *not* to be in our template, or if the tool we're using (like **Bun**) happens to have a bug... that's when absolute disaster strikes. 

And yes, this incident was caused by a **bug in the Bun Bundler** itself, which accidentally generated the `.map` file alongside the build, even though it was explicitly commanded to run in *Production* mode! This specific bug, known as **Issue #28001**, had been reported since **March 11, 2026**—meaning it was left open for a full *20 days* before this data leak happened. Plus, their backend CI/CD pipeline apparently lacked a proper check to make sure things were secure before publishing.

<br>

## <span class="text-green-500">#</span> The Side Effect

<br>

Of course, after the code leaked, everyone frantically scrambled to download a copy for themselves. In the frenzy, they forgot that besides themselves trying to capitalize on this, there were many **hackers** waiting for victims to download fake versions of this code. 

These bad actors injected viruses—whether **Trojans, Backdoors**, or the ever-popular **Cryptominers**—into fake code files, advertising them in the `readme.md` with: *"Hey everyone, this is the leaked Anthropic code, download it now!"* If anyone mistakenly downloaded these fake files, let me just say... *Game over!!*

<br>

## <span class="text-green-500">#</span> Anthropic's Reaction

<br>

A few days after the incident, on **April 3, 2026**, Anthropic used the **DMCA** *(Digital Millennium Copyright Act)* to file a takedown notice against GitHub to remove all the leaked code from the platform. Initially, GitHub swiftly banned over **8,100 repositories**. However, later on, Anthropic decided to scale down their legal action, specifically targeting and deleting *only the 96 repositories* that were direct forks of the originally leaked code. This was to ensure that the direct sources of distribution were completely destroyed.

<br>

## <span class="text-green-500">#</span> Conclusion

<br>

Anyway, this is another incredibly interesting **Security** lesson that should be useful to everyone. Lastly, I'd advise anyone trying to download this leaked code to be very careful, as you might end up with fake code laced with viruses. And if anyone wants to read about this news in detail, I've compiled various links related to this incident in the References section below.

<br>

## <span class="text-green-500">#</span> References

<div class="text-blue-600 underline text-[12px] space-y-[10px]">
<p>The Guardian (April 2, 2026). <i>Claude’s code: Anthropic leaks source code for AI software engineering tool</i>. Retrieved April 7, 2026, from <a href="https://www.theguardian.com/technology/2026/apr/01/anthropic-claudes-code-leaks-ai">https://www.theguardian.com/technology/2026/apr/01/anthropic-claudes-code-leaks-ai</a></p>
<p>Github User: yasasbanukaofficial. (April 02, 2026). <i>Claude Code's Entire Source Code Got Leaked via a Sourcemap in npm, Let's Talk About It</i>. Retrieved April 7, 2026, from <a href="https://github.com/yasasbanukaofficial/claude-code">https://github.com/yasasbanukaofficial/claude-code</a></p>
<p>Varshith V Hegde. (April 1, 2026). <i>The Great Claude Code Leak of 2026: Accident, Incompetence, or the Best PR Stunt in AI History?</i>. Retrieved April 7, 2026, from <a href="https://dev.to/varshithvhegde/the-great-claude-code-leak-of-2026-accident-incompetence-or-the-best-pr-stunt-in-ai-history-3igm">https://dev.to/varshithvhegde/the-great-claude-code-leak-of-2026-accident-incompetence-or-the-best-pr-stunt-in-ai-history-3igm</a></p>
<p>Dejan Panovski. (February 1, 2026). <i>Ignoring Files and Directories in Git (.gitignore)</i>. Retrieved April 7, 2026, from <a href="https://linuxize.com/post/gitignore-ignoring-files-in-git/">https://linuxize.com/post/gitignore-ignoring-files-in-git/</a></p>
<p>Reddit User: Clear_Reserve_8089 - r/ClaudeAI. (April 1, 2026). <i>i dug through claude code's leaked source and anthropic's codebase is absolutely unhinged</i>. Retrieved April 7, 2026, from <a href="https://www.reddit.com/r/ClaudeAI/comments/1s8lkkm/i_dug_through_claude_codes_leaked_source_and/">https://www.reddit.com/r/ClaudeAI/comments/1s8lkkm/i_dug_through_claude_codes_leaked_source_and/</a></p>
<p>WaveSpeed Blog. (April 1, 2026). <i>Claude Code Leaked Source: BUDDY, KAIROS & Every Hidden Feature Inside</i>. Retrieved April 7, 2026, from <a href="https://wavespeed.ai/blog/posts/claude-code-leaked-source-hidden-features/">https://wavespeed.ai/blog/posts/claude-code-leaked-source-hidden-features/</a></p>
<p>Zscaler Blog. (April 1, 2026). <i>Anthropic Claude Code Leak</i>. Retrieved April 7, 2026, from <a href="https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak#threatlabz-discovers--claude-code-leak--lure-that-distributes-vidar-and-ghostsocks">https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak#threatlabz-discovers--claude-code-leak--lure-that-distributes-vidar-and-ghostsocks</a></p>
<p>Wikipedia. (April 3, 2026). <i>Anthropic ส่งคำสั่งลบโค้ด Claude Code, GitHub ปิดแล้ว 8,100 repository</i>. Retrieved April 7, 2026, from <a href="https://www.blognone.com/node/150176">https://www.blognone.com/node/150176</a></p>
<p> Github Issue: bunjs/bun#28001. (March 11, 2026). <i>Bun's frontend development server - Source map incorrectly served when in production</i>. Retrieved April 7, 2026, from <a href="https://github.com/oven-sh/bun/issues/28001">https://github.com/oven-sh/bun/issues/28001</a></p>
</div>

<br>

## <span class="text-green-500">#</span> Buy Me a Coffee

<br>

If you enjoy my content and want to support me, you can buy me a coffee at <a class="text-blue-600" href="https://buymeacoffee.com/metakeen">Buy me a coffee</a>