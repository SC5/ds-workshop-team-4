/*
 * Button component. It provides interfaces for all types
 * of the buttons
 */

import React from 'react'

import ButtonSimple from './ButtonSimple';
import ButtonLink from './ButtonLink';
import ButtonLabel from './ButtonLabel';

const Component = ({ href, label, children, ...props }) => {

  /*
   * Different buttons to be rendered, depending on the
   * given properties
   */
  if (href) {
    return <ButtonLink href={href} {...props}>{children}</ButtonLink>;
  } else if (label) {
    return <ButtonLabel label={label} {...props}>{children}</ButtonLabel>;
  } else {
    return <ButtonSimple {...props}>{children}</ButtonSimple>;
  }

}

Component.displayName = 'Button'
Component.defaultProps = {
  color: 'white'
}

export default Component
