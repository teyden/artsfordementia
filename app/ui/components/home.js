import React from 'react'
import {FloatingActionButton} from 'material-ui'
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
            <main>
                <h1>Insert Title Here</h1>
                <FloatingActionButton iconClassName="fa fa-plus" onClick={this.openDialog}/>
                <StoryDialog open={this.state.open} closeDialog={this.closeDialog} />
            </main>
        )
    }
}

export default Home
