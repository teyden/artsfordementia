import React, { Component } from 'react'
import {AppBar} from 'material-ui'

import Nav from './nav'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
          <AppBar title="Arts for Dementia!"/>
              { this.props.children }
          <Footer />
      </div>
    );
  }
}

export default App
