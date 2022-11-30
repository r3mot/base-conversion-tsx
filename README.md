# <p align="center" >:v: <a href="https://based-d0408.firebaseapp.com">Based.</a> <br><p align="center"> A simple web app designed to save you time.
   <a href="https://based-d0408.firebaseapp.com">Check it out</a>
</p></p>

![readme-img](https://user-images.githubusercontent.com/88360543/204641794-7d7f242a-0ade-48da-9615-e09c1e259ad2.png)

# Table of contents

1. [TODO](#task)
1. [Motivation](#motiv)
1. [Technology](#tech)
   - [Core](#core)
   - [Library](#library)
   - [Build](#build)
   - [Test](#test)
   - [Format](#format)
   - [State Management](#state)
1. [Development Process](#dev)
   - [The Good](#good)
   - [The Struggle](#struggle)
1. [Local Development](#install)

<!-- SECTION -->
<a name="task"></a>

## :pushpin: TODO

- [ ] Feat: Make buttons more accessable (tabbing)
- [ ] Feat: Implement Base Arithmetic
- [ ] Chore: Create new prettier configuration
- [ ] Test: Implement component test

<!-- SECTION -->
<a name="motiv"></a>

## :pushpin: Motivation
> "Hallelujah! Where’s the Tylenol?"<br> — Clark Griswold

I loudly whisper to myself as I slip into the black hole that is debugging assembly code, watching the registers flip from positive to negative. Converting hex to decimal thinking "I'm going to run out of paper..." <br>

Slightly dramatic, but the general idea remains. Converting bases by hand can be quite cumbersome.

You see, I'm currently taking an Assembly course at my University and was doing manual conversions on paper for several weeks. While I truly enjoy the process, we as students (and developers) need tools to increase our efficiency. However, there was one <b>unfortunate</b> problem... my antivirus was not too fond of my Assembly adventures. In fact, it would often yell at me. I replied by turning it off, which came with ANOTHER problem- protection. So, I was also forced to cut my internet acccess.<br>

Cut off from the outside world, with my desktop's health at stake, I ended up making my own conversion tool. Not only did it enhance my development skills, but it also reinforced the conversion algorithms that I was doing by hand.<br>

<!-- SECTION -->
<a name="tech"></a>

## :pushpin: Technology
Picking the right technology can often be a daunting task, especially for new developers. Head over to reddit or stackoverflow and you'll find thousands of people chiming in on which techonologies to use. Maybe it's the <a href="https://wiki.c2.com/?BlubParadox">Blub Paradox</a> coming to realization, or maybe certain tools really are best suited for certain applications. Either way, here is what I chose!<br>

<!-- SECTION -->
<a name="core"><p>:round_pushpin: Core</p></a>

![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Initially, I developed this app in JavaScript, and it worked <i>okay</i>. The bigggest drawback was that I was manipulating a lot of data and needed type safety. If I tried to refactor one piece of the code, another would break. So, I learned <b>TypeScript</b>. It was a beautiful blend of my time in C++ and Java and my new found interest in JS. It allowed me to ensure the data I was sending for conversion was correct, my props were safe, and I could sleep at night... <br><br>
I also initially developed this app without auto-formatters to get a better grasp of the language and prevent any form of dependency on formatters / auto-complete. HOWEVER, I do understand the important of consistency. This is where Prettier and ESLint came into play (more on that below) <br>

<!-- SECTION -->
<a name="library"><p> :round_pushpin: Library</p></a>

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

Did I over engineer a simple web app? Probably... but I wanted to test the waters. My initial idea involved writing vanilla JS like it was Java. Then I had a thought

> why would I do that

I wanted to get better at using React. I didn't want to follow a tutorial, I wanted to learn on my own terms. <br>
Now, you may ask, why React? Great question! I'm a sucker for buzzwords... But, in all seriousness, after dipping my toes into things like Vue and Angular, react felt comfortable. For this project, I feel like React was a great tool. It was adaptable, scalable, and robust.<br>

<!-- SECTION -->
<a name="build"><p> :round_pushpin: Build</p></a>

![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Untill now, the few React projects I've developed used CRA (not before attepting to configure a React app from scratch). It felt slow, verbose, and unreliable at times. <br>

After testing Vite in my last project (will link soon), it became apparant that this was what I was looking for. Not only is the set-up process extremely quick, but the development process is so smooth. The way is utilizes ES modules, the hot module replacement, and the lack of useless boilerplate code was enough to convince me. Sure, I'm no tenured developer, but I can appreciate Vite for what it is and how it helps me.<br>

<!-- SECTION -->
<a name="test"><p> :round_pushpin: Test</p></a>

<p float="left">
<img width="80" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
<img width="40" src="https://user-images.githubusercontent.com/88360543/204683479-be5fb111-9f24-470b-bfdc-80ca479392c4.svg">
</p>

Naturally, as I'm using Vite, I couldn't help but take notice of Vitest. Much like Vite offered me quick bundling, Vitest offered me a quick testing workflow.
Plus, its compatable with much of the Jest ecosystem. <br>
If I'm using Vitest, why did I list Jest? Well, I'm using <a href="https://github.com/testing-library/jest-dom">jest-dom</a>. This way, I can extend Jest's matchers, making the work flow quite interesting. I haven't taken a deep dive into the tests <i>yet</i>, but I wanted to be prepared for when I do. In fact, by the time you read this, there will most likely be quite a few more tests- some of which utilizing the jest-dom.

```
  describe("r3mot", () => {
    it("should probably spend less time working on this readme", () => {
        expect(isProcrastinating()).toBe(true);
      });
  });
```

<br>

### Format

![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

I won't bore you with formatting. I just wanted my code to have a visible consistency. Not only for myself (you know what I mean), but for others that will potentially see this repo. I'm open to suggestions, opionated as they may be, while I find my own style. <br>

As for linting, it helps keep my code clean and error free. ESLint + TypeScript has been a blessing so far.<br>

<!-- SECTION -->
<a name="state"><p> :round_pushpin: State Management</p></a>

State in React is... interesting. I can't recall the number of times I has to `console.log("rendering");`
Aside from renders, I found myself prop drilling my state with little success. <br>

That's when I found <b> Redux </b>. Not only am I learning a million things at once, I decided to throw in state management library... Like I said earlier, I initially wrote this app in JS. Create stores in JS was fairly painless. Once I migrated to TS, I found myself reluctant. It was getting quite verbose and the syntax was dampening readability. <br>

So, I said my goodbyes. I will keep the original Redux stores in the codebase for now, in the event I decide to switch back or as a reference. <br>

After spending a day learning how to use Redux, I decided to go with hooks. Good ol' hooks! I set up some context, set up my state, and immediately felt like I had more control over my code. Maybe I was doing Redux wrong, or maybe I just like hooks. It's hard to tell. Either way, I'm currently really liking useContext combined with useEffect. For now, this works.<br> 

<!-- SECTION -->
<a name="dev"></a>

## :pushpin: Development Process

<!-- SECTION -->
<a name="good"><p> :round_pushpin: The Good</p></a>

- It forced me to re-think file structures.
- It forced me to think about readability.
- It helped me better understand TypeScript and React.
- It forced me to try new and different tools.
  - Sure, I may have switch tools out somewhere in the middle, but I tried.
- It helped me understand responsive web design
- Most importantly, it helped me become a better developer.

<br>

<!-- SECTION -->
<a name="struggle"><p> :round_pushpin: The Struggle</p></a>

> CSS

Reponsive web design was by far the biggest challenge. State management was a close second, but was helped greatly by the use of the useContext hook.

<br>

<!-- SECTION -->
<a name="install"></a>

## :pushpin: Local Development

### Prerequisites

- <a href="https://nodejs.org/en/download/">Node.js</a>

### Setting up Dev

To run on your local machine

```
git clone https://github.com/r3mot/base-conversion-tsx.git
cd base-conversion-tsx
npm install
npm run dev
```
