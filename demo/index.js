import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './home'
import About from './about'

import { Box, Button, Icon } from '../lib/my-awesome-library'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('react-root'));
