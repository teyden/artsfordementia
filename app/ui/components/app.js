import React, { Component } from 'react'

import Nav from './nav'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          { this.props.children }
          <Footer />
      </div>
    );
  }
}

export default App
