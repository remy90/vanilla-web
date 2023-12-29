import { Primary } from './Primary/index.js'
import { Secondary } from './Secondary/index.js'
import './index.css'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<body class='bodyCol'>
  <main>
    <div class='background'>
      ${Primary}
      ${Secondary}
    </div>
  </main>
</body>

`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
