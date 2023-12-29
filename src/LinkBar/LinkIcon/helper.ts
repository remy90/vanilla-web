import { githubSvg } from '../../../public/github'
import { linkedInSvg } from '../../../public/linkedIn'
import { stackOverflowSvg } from '../../../public/stackOverflow'
import { xSvg } from '../../../public/x'
import { LinkIcon } from './types'

export const listOfLinks: LinkIcon[] = [
  { title: 'X', link: 'https://twitter.com/RemyG_90', iconSrc: xSvg },
  { title: 'GitHub', link: 'https://github.com/remy90', iconSrc: githubSvg },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/shaun90/', iconSrc: linkedInSvg },
  {
    title: 'Stack overflow',
    link: 'https://stackoverflow.com/users/6476844/remy',
    iconSrc: stackOverflowSvg,
  },
]
