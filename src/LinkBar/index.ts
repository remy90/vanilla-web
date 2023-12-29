import { LinkIcon } from './LinkIcon'
import { listOfLinks } from './LinkIcon/helper'
import './index.css'

export const LinkBar = /*html */ `
  <div class="linkBar">${listOfLinks.map(item => LinkIcon({ ...item })).join('')}</div>
  <footer class='footer'>Shaun Gaisie | ${new Date(Date.now()).getFullYear()}</footer>
`
