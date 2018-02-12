import React from 'react'
import cx from 'classnames'
import * as s from './styles'

/* Set up an HTML tag for the simple button */
const Element = s.Button.withComponent('button')

const Component = ({ children, ...props }) => {

  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  let className = cx('button', props.className)

  return (
    <Element {...props} className={className}>
      {children}
    </Element>
  )
}

Component.displayName = 'Simple Button'

export default Component
