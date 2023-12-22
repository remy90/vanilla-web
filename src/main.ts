import { setupCounter } from './counter.js'
import { getYearDiff } from './helper'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<body>
  <div class='background'>
    <div class='primary'>
      <picture class='profile-pic'>
        <img src='/shaun.jpeg'/>
      </picture>
      // TODO: add translucent background for text to be more readable
      // TODO: ensure a maximum size for background image so it doesn't get pixelated
      <p>Hi, I'm Shaun. I'm a software engineer with ${getYearDiff(
        new Date(Date.now()),
        new Date(2016, 9, 1),
      )}years of experience</p>
      <button id='counter'>counter</button>
      <div>TODO: twitter, linkedin, github, email</div>
    </div>
    <div class="secondary">
        TODO: top level detail - good understanding of user experience executor of the pareto principle
        TODO: soft skill entry point
        * Hard skills
    </div>
  </div>
        Shaun Gaisie | ${new Date(Date.now()).getFullYear()}
</body>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
