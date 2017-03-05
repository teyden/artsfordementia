import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {fetchStoryDetail} from '../actions/index'

class StoryDetail extends React.Component {
    componentWillMount(){
        this.props.fetchStoryDetail(this.props.params.id)
    }

    render(){
        const story = () => {
            console.log(this.props)
            if (!this.props.story){
                return <p>Loading...</p>
            }

            return <h1>{this.props.story.title}</h1>
        }
        return (
            <div>
                {story()}
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
