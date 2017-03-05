import React from 'react'


const footerStyle = {
    "footer": {
        "border": "1px solid black",
        "marginTop": "3em"
    },
    "container": {
        "border": "1px solid black",
        "margin": "auto",
        "maxWidth": "960px"
    }
}

class Footer extends React.Component {
    render(){
        return (
            <footer style={footerStyle.footer}>
                <div style={footerStyle.container}>
                    This is the footer
                </div>

            </footer>
        )
    }
}

export default Footer
