import React from 'react'
import {
    Dialog,
    FlatButton,
    RaisedButton,
    TextField} from 'material-ui'

class StoryDialog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            link: ""
        }
    }

    descriptionChange(event){
        this.setState({description:event.target.value})
    }

    titleChange(event){
        this.setState({title: event.target.value})
    }

    linkChange(event){
        this.setState({link: event.target.value})
    }

    render() {
        const actions = [
            <FlatButton label="cancel" onClick={this.props.closeDialog} />,
            <RaisedButton label="submit" onClick={this.props.closeDialog} primary={true}/>
        ]

        const fields = [

        ]

        const fileInputStyle = {
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            width: '100%',
            opacity: 0,
        }

        return (
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.closeDialog}
                actions={actions}
                children
                autoScrollBodyContent={true}
                title="Share Your Story">
                <form action=""  encType="multipart/form-data">
                    <TextField
                        id="title-field"
                        value={this.state.title}
                        onChange={this.titleChange.bind(this)}
                        floatingLabelText="Title"
                    /><br/>
                    <TextField
                        id="description-field"
                        value={this.state.description}
                        onChange={this.descriptionChange.bind(this)}
                        floatingLabelText="Description"
                        multiLine={true}
                    /><br/>
                    <RaisedButton
                        label="Choose an Image"
                        labelPosition="before">
                        <input type="file" style={fileInputStyle}/>
                    </RaisedButton><br/>
                    <TextField
                        id="link-field"
                        floatingLabelText="Link"
                        value={this.state.link}
                        onChange={this.linkChange.bind(this)}
                    />
                </form>
            </Dialog>
        )
    }
}

export default StoryDialog
