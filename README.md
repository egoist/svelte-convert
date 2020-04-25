# Svelte-Convert

Convert Svelte component to Vue or React component, with SSR support.

## Why 

[Svelte](https://svelte.dev) outputs light-weight JavaScript code, so you can use it to write framework agnostic component and then consume it in your React / Vue app.

## Install

```bash
yarn add svelte-convert
```

## Usage

### React

```jsx
import { convert } from 'svelte-convert/react'
import SvelteCounter from './Counter.svelte'

// Convert the Svelte component to React Component
const Counter = convert(SvelteCounter)

export default () => {
  return <Counter initialCount={2} />
}
```

### Vue

```vue
<template>
  <Counter :initialCount="2" />
</template>

<script>
import { convert } from 'svelte-convert/vue'
import SvelteCounter from './Counter.svelte'

export default {
  components: {
    Counter: convert(SvelteCounter)
  }
}
</script>
```

## Related

You might also like:

- [React to Vue](https://github.com/egoist/react-to-vue)
- [Vue to React](https://github.com/egoist/vue-to-react)

## License

MIT &copy; [EGOIST (Kevin Titor)](https://github.com/sponsors/egoist)
