import { LinkIcon } from '../LinkIcon'
import { listOfLinks } from '../LinkIcon/helper'
import './index.css'

export const Secondary = /*html */ `
  <div class="secondary">
    <div class="secondaryText">
    <section>
      <h3>Soft skills</h3>
      Mentorship, pragmatism, communication, peacemaker
    </section>
    <section>
      <h3>Hard skills</h3>
        TypeScript, NextJS, Jest, es6, React Testing Library, Redux, CSS-in-JS, CSS, GitHub, REST, HTML,  node.js,  UI/UX, Jotai
AWS, AWS CDK
.NET core, C#, SQL, SASS, Entity Framework, MongoDB, NoSQL, Terraform, Docker, Git, CI/CD, Azure, DevOps, TDD, BDD 
Recoil, Bash, Webpack, Cypress and automated testing, 
    </section>
    </div>
    <div class="linkBar">${listOfLinks.map(item => LinkIcon({ ...item })).join('')}</div>
  </div>
`
