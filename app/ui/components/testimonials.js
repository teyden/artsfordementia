import React from 'react'

const mainStyle = {
    "maxWidth": "960px",
    "margin": "auto",
    "paddingTop": "1em"
}


const h3Style = {
    "marginBottom": "0px"
}

const h4Style = {
    "marginTop": "0px"
}
class Testimonials extends React.Component {

    render(){
        return (
            <main style={mainStyle}>
                <h1>Testimonials</h1>
                <section>
                    <img src="" alt="" style={{"float": "right"}}/>
                    <h3 style={h3Style}>Jonathan Jackson, PhD </h3>
                    <h4 style={h4Style}>Instructor in Neurology  at Harvard Medical School</h4>
                    <p>For people living with dementia and their loved ones, nothing is as critical as sustaining and improving quality of life. However, for many clinicians, “quality of life” is a calculus comprised only of medication management. This often has the effect of reducing a person living with dementia to merely an abstracted problem of dementia, without the benefit of personhood. Arts for Dementia promotes a crucial human element toward caregiving that is often missing from our clinical care practices. High-quality, peer-reviewed studies continue to demonstrate that the enrichment of an individual’s life, their repeated intellectual challenge, and pursuit of creative hobbies is an excellent way to prevent dementia. It stands to reason that the best way of connecting with individuals living with dementia should follow the same path, particularly as it becomes more difficult to communicate using other means. Arts for Dementia represents the embodiment of that logic, that the best way to maintain a connection with people living with dementia is to celebrate their personhood. As a researcher, healthcare professional, and science communicator, I routinely advise individuals to take advantage of programs like Arts for Dementia. It is clear that this initiative is helpful to individuals living with dementia as well as their families and caregivers. 
</p>
                </section>
                <section>
                    <img src="" alt=""/>
                    <h3 style={h3Style}></h3>
                    <h4 style={h4Style}></h4>
                    <p></p>
                </section>
                <section>
                    <img src="" alt=""/>
                    <h3 style={h3Style}></h3>
                    <h4 style={h4Style}></h4>
                    <p></p>
                </section>
                <section>
                    <img src="" alt=""/>
                    <h3 style={h3Style}></h3>
                    <h4 style={h4Style}></h4>
                    <p></p>
                </section>
                <section>
                    <img src="" alt=""/>
                    <h3 style={h3Style}></h3>
                    <h4 style={h4Style}></h4>
                    <p></p>
                </section>
            </main>
        )
    }
}

export default Testimonials
