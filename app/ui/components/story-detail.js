import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    Toolbar,
    ToolbarTitle,
    RaisedButton} from 'material-ui'

import {fetchStoryDetail} from '../actions/index'

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
                <Toolbar><ToolbarTitle text={story.title}></ToolbarTitle></Toolbar>

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
