const svelte = require('svelte/compiler')

function process(src, filename) {
  const result = svelte.compile(src, {
    filename,
    // Allow tests to set component props.
    accessors: true,
    // Debugging and runtime checks.
    dev: true,
    format: 'cjs',
    generate: 'ssr'
  })

  return {
    code: result.js.code,
    map: result.js.map
  }
}

exports.process = process