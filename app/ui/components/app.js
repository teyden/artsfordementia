import React, { Component } from 'react'
import {
    Toolbar,
    FlatButton,
    ToolbarGroup,
    ToolbarTitle} from 'material-ui'
import {Link} from 'react-router'

import Nav from './nav'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
            <Toolbar>
                <ToolbarTitle text="Arts For Dementia"/>
                <ToolbarGroup firstChild={true}>
                    <FlatButton label="Home" href="/"></FlatButton>
                    <FlatButton label="Adventures" href="/adventures"></FlatButton>
                    <FlatButton label="Login"></FlatButton>
                </ToolbarGroup>
            </Toolbar>
            { this.props.children }
            <Footer />
      </div>
    );
  }
}

export default App
