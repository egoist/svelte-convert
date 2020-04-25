import ts from 'rollup-plugin-typescript2'

export default {
  input: {
    react: './src/react.tsx',
    vue: './src/vue.ts',
    shared: './src/shared.ts'
  },
  output: {
    dir: __dirname + '/dist'
  },
  plugins: [
    ts({
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext'
        },
        include: ['src/**/*']
      }
    })
  ]
}