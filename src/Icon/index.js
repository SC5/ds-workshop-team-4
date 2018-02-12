import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ as = 'i', name, isInverted, ...props }) => {
  /* Adding an "API" classname, by which it is possible to redefine the component style properties */
  const className = cx(`icon fa fa-${name}`, props.className)

  /* Redefine an HTML tag for the icon according to the given properties. By default, <i> */
  const Element = s.Icon.withComponent(as)

  return (
    <Element {...props} isOutlined={!isInverted} isInverted={false} className={className} />
  )
}

Component.displayName = 'Icon'
Component.defaultProps = {
  size: 'normal'
}

export default Component
