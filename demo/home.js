import React from 'react'
import ReactDOM from 'react-dom'

import { Box, Button, Icon } from '../lib/my-awesome-library'

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Box color='#1b8ceb' textColor='#ffffff' tone={2}>Some text in box</Box>
      <Button color='#1b8ceb' textColor="#fff" size='0.60rem'>Tiny</Button>
      <Button color='#00d1b2' textColor="#fff" size='0.785rem'>Small</Button>
      <Button color='#e91e63' textColor="#fff" size='1rem'>Normal</Button>
      <Button color='#888888' textColor="#fff" size='1.5rem'>Large</Button>
      <Button color='#000' textColor="#fff" size='2.0rem'>XLarge</Button>
      <Box color="#fff" >
        <Icon name='star' color='#000' isInverted size='0.785rem' />
        <Icon name='star' color='#888888' isInverted />
        <Icon name='github' color='#1b8ceb'isInverted size='1.5rem' />
        <Icon name='gift' color='#00d1b2' isInverted size='2.0rem' />
        <Icon name='bug' color='#e91e63' isInverted size='3rem' />
      </Box>
    </div>
  )
}

export default Home
