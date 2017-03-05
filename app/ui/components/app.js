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

const toolbarStyle = {
    "backgroundColor": "#00BCD4"
}
const toolbartitleStyle = {
    "backgroundColor": "00BCD4",
    "color": "white",
    "fontFamily": "Roboto, sans-serif",
    "fontSize": "28px"
}
const toolbargroupStyle = {
    "backgroundColor": "00BCD4"
}
const flatbuttonStyle = {
    "color": "white"
}

class App extends Component {
  render() {
    return (
      <div>
            <Toolbar style={toolbarStyle}>
                <ToolbarTitle style={toolbartitleStyle} text="Arts For Dementia"/>
                <ToolbarGroup style={toolbargroupStyle} firstChild={true}>
                    <FlatButton style={flatbuttonStyle}  label="Share" href="/"></FlatButton>
                    <FlatButton style={flatbuttonStyle}  label="Adventures" href="/adventures"></FlatButton>
                    <FlatButton style={flatbuttonStyle}  label="About Us" href="/about"></FlatButton>
                    <FlatButton style={flatbuttonStyle}  label="Testimonials" href="/testimonials"></FlatButton>
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
