import { Primary } from './Primary/index.js'
import { Secondary } from './Secondary/index.js'

import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<body>
  <div class='background'>
    ${Primary}
    ${Secondary}
  </div>

  Shaun Gaisie | ${new Date(Date.now()).getFullYear()}
</body>

`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
