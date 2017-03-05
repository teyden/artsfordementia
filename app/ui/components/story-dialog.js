import React from 'react'
import {Dialog, FlatButton, RaisedButton} from 'material-ui'

class StoryDialog extends React.Component {
    render() {
        const actions = [
            <FlatButton label="cancel" onClick={this.props.closeDialog} />,
            <RaisedButton label="submit" onClick={this.props.closeDialog} primary={true}/>
        ]

        return (
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.closeDialog}
                actions={actions}>
                This is a Dialog
            </Dialog>
        )
    }
}

export default StoryDialog
