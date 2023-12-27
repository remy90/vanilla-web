import { Primary } from './Primary/index.js'
import { Secondary } from './Secondary/index.js'

import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<body>
  <main><div class='background'>
    ${Primary}
    ${Secondary}
  </div>
</main>
<footer>
  <p>Shaun Gaisie | ${new Date(Date.now()).getFullYear()}</p>
</footer>
</body>

`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
