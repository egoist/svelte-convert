import React from 'react'
import { isServer } from './shared'

export function convert<TProps = any>(Component: any): React.FC<TProps> {
  if (isServer) {
    return (props) => {
      const { html, css } = Component.render(props)
      return (
        <>
          <style>{css.code}</style>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
      )
    }
  }
  return (props) => {
    const ref = React.useRef(null)
    React.useEffect(() => {
      const comp = new Component({
        target: ref.current,
        props,
      })
      return () => comp.$destroy()
    }, [])
    return <div ref={ref}></div>
  }
}
