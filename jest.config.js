module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.node.svelte$': './svelte-jest-ssr',
    '\\.browser.svelte$': 'svelte-jest',
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/types/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
