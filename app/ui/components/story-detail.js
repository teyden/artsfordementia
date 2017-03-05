import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    Toolbar,
    ToolbarTitle,
    ToolbarGroup,
    RaisedButton,
    ListItem,
    FlatButton,
    FontIcon,
    Avatar} from 'material-ui'
import { Link } from 'react-router'

import {fetchStoryDetail} from '../actions/index'

const mainStyle = {
    "maxWidth": "960px",
    "margin": "auto",
    "paddingTop": "1em",
    "paddingBottom": "4em"
}

const raisedButtonStyle = {
    "marginTop": "1em",
    "float": "right"
}

const linkStyle = {
    "textDecoration": "none",
    "color": "#00bcd4"
}

class StoryDetail extends React.Component {
    componentWillMount(){
        this.props.fetchStoryDetail(this.props.params.id)
    }

    render(){
        const story = (() => {
            console.log(this.props)
            if (!this.props.story){
                return null
            }
            return this.props.story
        })()

        if (!story ){
            return (<div>
                <p>Loading...</p>
            </div>)
        }

        return (
            <div>
                <img src="uploads/feature_story.jpg" style={{"width": "100%", "height": "auto", "float": "right"}} alt=""/>
                <div style={mainStyle}>
                    <RaisedButton label="back" href="/" primary={true} style={raisedButtonStyle}></RaisedButton>
                    <a href={story.media_link} style={linkStyle}><h1 style={{"marginTop": "1em", "fontSize": "3em"}}>{story.title}</h1></a>
                    <ListItem
                        leftAvatar={<Avatar src=""/>}
                        primaryText={story.name_of_user}
                        secondaryText={story.upload_date}
                        secondartstyle={{"marginTop": "0.5em"}}/>
                    <p><img src={story.image} alt=""/>{story.description}</p>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {story: state.indexStories.story}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchStoryDetail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail)
