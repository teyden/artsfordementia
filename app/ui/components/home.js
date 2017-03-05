import React from 'react'
import {
    FloatingActionButton,
    FlatButton,
    Toolbar,
    ToolbarGroup,
    ToolbarTitle,
    Avatar,
    ListItem,
    FontIcon,
    TextField,
    GridList,
    GridTile} from 'material-ui'
import ResponsiveEmbed from 'react-responsive-embed'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import StoryDialog from './story-dialog'
import { fetchStories } from '../actions/index'

const mainStyle = {
    "maxWidth": "960px",
    "margin": "auto"
}

const pinnedButtonStyle = {
    "position": "fixed",
    "bottom": "5%",
    "right": "5%"
}

const searchbarStyle = {
    "marginTop": "3em"
}

const gridListStyle = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '3em'
    },
    gridStyle: {
        width: 960,
        overflowY: 'auto'
    }
}

const tilesData = [
  {
    img: '',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class Home extends React.Component {
    componentWillMount(){
        this.props.fetchStories()
    }

    constructor(props){
        super(props)
        this.state = {
            open: false
        }

        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
    }

    renderStory(story, index){
        return <GridTile
            key={index}
            title={story.title}
            subtitle={story.user_email} />
    }

    openDialog(){
        this.setState({open: true})
    }

    closeDialog(){
        this.setState({open: false})
    }

    render() {
        let gridItems = () => {
            console.log(this.props.indexStories)
            if (this.props.indexStories.stories){
                return <GridList
                        style={gridListStyle.gridStyle}
                        cols={3}
                        padding={8}
                        cellHeight={233}>
                        {this.props.indexStories.stories.map(this.renderStory)}
                    </GridList>
            }
            return <p>Loading...</p>
        }
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
                    <TextField fullWidth={true} id="search-bar" style={searchbarStyle} floatingLabelText="Search"/>
                    <div style={gridListStyle.root}>
                        {gridItems()}
                    </div>
                    <FloatingActionButton iconClassName="fa fa-plus" onClick={this.openDialog} style={pinnedButtonStyle}/>
                    <StoryDialog open={this.state.open} closeDialog={this.closeDialog} />
                </main>
            </div>

        )
    }
}

function mapStateToProps({indexStories}){
    return {indexStories}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchStories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
