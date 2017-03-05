import React, { Component } from 'react'
import {
    Toolbar,
    FlatButton,
    ToolbarGroup,
    ToolbarTitle,
    ListItem,
    Avatar,
    FontIcon} from 'material-ui'
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
            <Toolbar>
                <ToolbarTitle text="Arts For Dementia"/>
                <ToolbarGroup firstChild={true}>
                    <FlatButton label="Share" href="/"></FlatButton>
                    <FlatButton label="Adventures" href="/adventures"></FlatButton>
                    <FlatButton label="About Us" href="/about"></FlatButton>
                    <FlatButton label="Testimonials" href="/testimonials"></FlatButton>
                </ToolbarGroup>
            </Toolbar>
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ListItem leftAvatar={<Avatar src=""/>} primaryText="Liza Futerman" />
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton label="Logout" icon={<FontIcon className="fa fa-sign-out" />} />
                </ToolbarGroup>
            </Toolbar>
            { this.props.children }
      </div>
    );
  }
}

export default App
