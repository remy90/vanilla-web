import { LinkBar } from '../LinkBar'
import { getYearDiff } from '../helper'
import './index.css'

export const Primary = /*html*/ `
<div class='primary'>
  <picture class='profile-pic'>
    <img src='/shaun.avif' alt="Profile picture of Shaun">
  </picture>
  <div class='primaryText'>
    <h1>Hi, I&rsquo;m <em class="name">Shaun</em> 👋</h1>
    <p> A software engineer with ${getYearDiff(
      new Date(Date.now()),
      new Date(2016, 9, 1),
    )} years of experience&comma; a passion for solving real world problems through code &amp; collaboration. Currently residing in London.</h1>
  </div>
  <div class="desktopOnly">${LinkBar}</div>
</div>
`
