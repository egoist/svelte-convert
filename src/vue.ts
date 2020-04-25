import { isServer } from './shared'

export function convert(Component: any): any {
  if (isServer) {
    return {
      functional: true,
      render(h: any, ctx: any) {
        const { html, style } = Component.render(ctx.attrs)
        return h('div', {}, [
          h('style', { domProps: { innerHTML: style } }),
          h('div', { domProps: { innerHTML: html } }),
        ])
      },
    }
  }
  return {
    mounted() {
      this.comp = new Component({
        target: this.$refs.target,
        props: this.$attrs,
      })
    },
    beforeDestroy() {
      if (this.comp) {
        this.comp.$destroy()
      }
    },
    render(h: any) {
      return h('div', { ref: 'target' })
    },
  }
}
