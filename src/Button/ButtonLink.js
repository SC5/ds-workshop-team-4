import React from 'react'
import cx from 'classnames'
import * as s from './styles'
import styled from 'styled-components'

/* Set up an HTML tag for the link button, and extend the styles */
const Element = s.Button.withComponent('a').extend`
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
`

const Component = ({ href, children, ...props }) => {

  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  let className = cx('button', 'button--link', props.className)

  return (
    <Element {...props} href={href} className={className}>
      {children}
    </Element>
  )
}

Component.displayName = 'Link Button'
Component.defaultProps = {
  href: 'http://github.com'
}

export default Component
