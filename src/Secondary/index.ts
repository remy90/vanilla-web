import { LinkBar } from '../LinkBar'
import './index.css'

export const Secondary = /*html */ `
  <div class="secondary">
    <div class="secondaryText">
    <section>
      <h2>Soft skills</h2>
      <p>Mentorship, pragmatism, communication, mediator &amp; critical thinking</p>
    </section>
    <section>
      <h2>Hard skills</h2>
        <p>TypeScript, NextJS, Jest, es6, React Testing Library, Redux, CSS-in-JS, CSS, GitHub, REST, HTML,  node.js,  UI/UX, Jotai
AWS, AWS CDK
.NET core, C#, SQL, SASS, Entity Framework, MongoDB, NoSQL, Terraform, Docker, Git, CI/CD, Azure, DevOps, TDD, BDD 
Recoil, Bash, Webpack, Cypress and automated testing</p>

<p>At the time of writing, All google lighthouse scores were above 90% for desktop.</p>
    </section>
    </div>
   <div class="mobileOnly"> ${LinkBar}</div>
  </div>
`
