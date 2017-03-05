import React from 'react'
import {
    FloatingActionButton,
    FlatButton,
    Toolbar,
    ToolbarGroup,
    ToolbarTitle,
    Avatar,
    ListItem,
    FontIcon} from 'material-ui'
import ResponsiveEmbed from 'react-responsive-embed'

import StoryDialog from './story-dialog'

const mainStyle = {
    "maxWidth": "960px",
    "margin": "auto"
}

const pinnedButtonStyle = {
    "position": "fixed",
    "bottom": "5%",
    "right": "5%"

}

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }

        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
    }

    openDialog(){
        this.setState({open: true})
    }

    closeDialog(){
        this.setState({open: false})
    }

    render() {
        return (
            <div className="container">
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <ListItem leftAvatar={<Avatar src=""/>} primaryText="Liza Futerman" />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <FlatButton label="Logout" icon={<FontIcon className="fa fa-sign-out" />} />
                    </ToolbarGroup>
                </Toolbar>
                <ResponsiveEmbed src="https://www.youtube.com/embed/ejhnvrOn2gI" allowFullScreen/>
                <Toolbar><ToolbarTitle text="Insert Title Here"></ToolbarTitle></Toolbar>
                <main style={mainStyle}>
                    <FloatingActionButton iconClassName="fa fa-plus" onClick={this.openDialog} style={pinnedButtonStyle}/>
                    <StoryDialog open={this.state.open} closeDialog={this.closeDialog} />
                </main>
            </div>

        )
    }
}

export default Home
