import React from 'react'
import AppBar from 'material-ui'

import Footer from './footer'

class Base extends React.Component {
    render(){
        return (
            <div>
                {/* <Nav /> */}
                <AppBar title="Arts for Dementia" />
                    { this.props.children }
                <Footer />
            </div>
        )
    }
}

export default Base
