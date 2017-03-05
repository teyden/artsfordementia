import React from 'react'
import {FloatingActionButton} from 'material-ui'
import ResponsiveEmbed from 'react-responsive-embed'

import StoryDialog from './story-dialog'

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
                <ResponsiveEmbed src="https://www.youtube.com/embed/ejhnvrOn2gI" allowfullscreen/>
                <main>
                    <h1>Insert Title Here</h1>
                    <FloatingActionButton iconClassName="fa fa-plus" onClick={this.openDialog}/>
                    <StoryDialog open={this.state.open} closeDialog={this.closeDialog} />
                </main>
            </div>

        )
    }
}

export default Home
