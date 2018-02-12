/* Helpful imports */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

/* The components to use in the stories */
import Box from '../Box'

/* The component to document */
import Icon from '.'

storiesOf('Icon', module)
  .add('simple usage',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Icon name='star' color='#000' />
            <Icon name='star' color='#888888' />
            <Icon name='github' color='#1b8ceb' hasBorder />
            <Icon name='gift' color='#00d1b2' />
            <Icon name='bug' color='#e91e63' />
          </Box>
          <Box>
            <Icon name='star' color='#000' isInverted />
            <Icon name='star' color='#888888' isInverted />
            <Icon name='github' color='#1b8ceb'isInverted />
            <Icon name='gift' color='#00d1b2' isInverted />
            <Icon name='bug' color='#e91e63' isInverted />
          </Box>
          <Box>
            <Icon name='star' color='#000' isCircular hasBorder />
            <Icon name='github' color='#1b8ceb' isCircular isInverted />
            <Icon name='bug' color='#00d1b2' isCircular isInverted />
          </Box>
        </div>
    )
  }))
  .add('with different size',
    withInfo()(() => {
      return (
        <Box>
          <Icon name='star' color='#000' isInverted size='0.785rem' />
          <Icon name='star' color='#888888' isInverted />
          <Icon name='github' color='#1b8ceb'isInverted size='1.5rem' />
          <Icon name='gift' color='#00d1b2' isInverted size='2.0rem' />
          <Icon name='bug' color='#e91e63' isInverted size='3rem' />
        </Box>
      )
  }))
  .add('social icons',
    withInfo()(() => {
      return (
        <Box>
          <Icon name='twitter' color='#000' isInverted/>
          <Icon name='linkedin' color='#888888' isInverted />
          <Icon name='github' color='#1b8ceb'isInverted />
        </Box>
    )
  }))
