import './index.css'
import { LinkIcon as LinkProps } from './types'

export const LinkIcon: (linkProps: LinkProps) => string = ({ title, link, iconSrc }) => /*html*/ `
<div class="hyperlink-icon">
  <a href="${link}" target="_blank" class="linkAnchor">
    ${iconSrc ?? title}
  </a>
</div>
`
