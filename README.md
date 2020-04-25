# Svelte-Convert

Convert Svelte component to Vue or React component, with SSR support.

## Install

```bash
yarn add svelte-convert
```

## Usage

### React

```js
import { render } from 'react-dom'
import { convert } from 'svelte-convert/react'
import SvelteApp from './App.svelte'

const App = convert(SvelteApp)

render(<App count={1} />, document.getElementById('app'))
```

### Vue

```js
import Vue from 'vue'
import { convert } from 'svelte-convert/vue'
import SvelteApp from './App.svelte'

const App = convert(SvelteApp)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## License

MIT &copy; [EGOIST (Kevin Titor)](https://github.com/sponsors/egoist)
