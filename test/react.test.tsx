import React from 'react'
import { renderToString } from 'react-dom/server'
import SvelteCounter from './Counter.node.svelte'
import { convert } from '../src/react'

it('renders to string', () => {
  const Counter = convert<{ initialCount: number }>(SvelteCounter.default)
  const str = renderToString(<Counter initialCount={10} />)
  expect(str).toMatchInlineSnapshot(`
    "<style>button.svelte-aci4jg{color:red}</style><div><button class=\\"svelte-aci4jg\\">10
    </button></div>"
  `)
})
