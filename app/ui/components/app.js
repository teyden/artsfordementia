import React, { Component } from 'react'
import {Toolbar, FlatButton} from 'material-ui'

import Nav from './nav'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
            <Toolbar> <FlatButton label="Hello"></FlatButton></Toolbar>
            { this.props.children }
          <Footer />
      </div>
    );
  }
}

export default App
