import React from 'react'

const mainStyle = {
    "maxWidth": "960px",
    "margin": "auto",
    "paddingTop": "1em",
    "paddingBottom": "4em"
}


const h3Style = {
    "marginBottom": "0px"
}

const h4Style = {
    "marginTop": "0px"
}

const spanStyle = {
    "fontWeight": "800"
}

const imgStyle = {
    "float": "left"
}

class Testimonials extends React.Component {

    render(){
        return (
            <main style={mainStyle}>
                <h1>Testimonials</h1>
                <section>
                    <img src="uploads/Jonathan_Jackson.jpg" alt="" style={imgStyle}/>
                    <h3 style={h3Style}>Jonathan Jackson, PhD </h3>
                    <h4 style={h4Style}>Instructor in Neurology  at Harvard Medical School</h4>
                    <p>For people living with dementia and their loved ones, nothing is as critical as sustaining and improving quality of life. However, for many clinicians, “quality of life” is a calculus comprised only of medication management. This often has the effect of reducing a person living with dementia to merely an abstracted problem of dementia, without the benefit of personhood. <span style={spanStyle}>Arts for Dementia promotes a crucial human element toward caregiving that is often missing from our clinical care practices.</span> High-quality, peer-reviewed studies continue to demonstrate that the enrichment of an individual’s life, their repeated intellectual challenge, and pursuit of creative hobbies is an excellent way to prevent dementia. It stands to reason that the best way of connecting with individuals living with dementia should follow the same path, particularly as it becomes more difficult to communicate using other means. Arts for Dementia represents the embodiment of that logic, that the best way to maintain a connection with people living with dementia is to celebrate their personhood. As a researcher, healthcare professional, and science communicator, I routinely advise individuals to take advantage of programs like Arts for Dementia. It is clear that this initiative is helpful to individuals living with dementia as well as their families and caregivers. 
</p>
                </section>
                <section>
                    <img src="uploads/Peter_Whitehouse.jpg" alt="" style={imgStyle}/>
                    <h3 style={h3Style}>Peter J. Whitehouse MD-PhD</h3>
                    <h4 style={h4Style}>Professor of Neurology and current or former Professor of Psychiatry, Neuroscience, Psychology, Cognitive Science, Bioethics, Nursing, History, and Organizational Behavior</h4>
                    <p>As a clinician, scientist, photographer I advocate for supporting the vibrant interface between dementia and art whether in individual brain health counselling sessions, group presentations about the value of art in public health, or strategizing with museums about how to be more caring. Art is part of what makes us all human (homo aestheticus). We all have cognitive challenges to one degree or another. Art can to bring us together for critical discussion and the pleasure of  human company, especially intergenerationally in my view. We need culture change at every level if we are to flourish as a species (and even survive). Thinking more deeply about “dementia” can help us get to friendly communities and a brighter future for us all. <span style={spanStyle}>Keep up the great intergenerative work Liza with your distinguished advisors and partners.</span>  </p>
                </section>
                <section>
                    <img src="uploads/Melissa_Tafler.jpg" alt="" style={imgStyle}/>
                    <h3 style={h3Style}>Melissa Tafler MSW, RSW</h3>
                    <h4 style={h4Style}>Coordinator, Arts in Health Program, Department of Culture and  Arts
Arts-Based Learning Specialist, Baycrest Centre for Learning, Research & Innovation
</h4>
                    <p>As a clinician and educator at Baycrest Health Sciences, I employ arts based approaches regularly in working with people diagnosed with dementia and their families. I can testify to the positive effects arts play in enriching people's quality of life and quality of care, as well as how the arts enhances relationships between individuals with dementia and their care partners. Based on my practical experience, I strongly recommend integrating arts informed activities into health care. <span style={spanStyle}>I strongly believe that Arts For Dementia social portal could inspire clinicians to explore and engage the use of the arts as a tool to enhance communication with their clients.</span>  I am happy  to endorse arts for dementia social portal for its global scope and its  potential to push back  against the stigma and isolation of families and individuals living with dementia. As a clinician I'd be very excited to see arts for dementia as a resource for clinicians, educators and families. The arts offers anyone connected to dementia, a vehicle for hope and a tool toimprove quality of life both for those we care for in our professional and personal lives. </p>
                </section>
                <section>
                    <img src="uploads/Shoshana_Helfenbaum.jpg" alt="" style={imgStyle}/>
                    <h3 style={h3Style}>Shoshana Helfenbaum, BA MSW RSW DGrt</h3>
                    <h4 style={h4Style}>Interprofessional Educator,
Centre for Learning Research and Innovation in Long Term Care
Division of Training and Simulation, Academic Education </h4>
                    <p>Care of persons with dementia happens in an environment of compliance, restriction and resource deficiencies, yet it is precisely in those moments of limitation when we need to be the most in touch with our humanity and our innate compassion. The best way I have found to help professional caregivers learn to tap into their innate preference for a relational approach to care, despite the restrictions they face, is through arts-based learning. <span style={spanStyle}>I have personally witnessed that the use of the arts in dementia care opens the door for professional caregivers to apply the skills, knowledge and talents they have with joy and authenticity for the benefit of themselves and those they care for.</span> </p>
                </section>
                <section>
                    <img src="uploads/Katie_Crosby.jpg" alt="" style={imgStyle}/>
                    <h3 style={h3Style}>Katie Crosby</h3>
                    <h4 style={h4Style}>BSc Saint Mary's University 2013
MD Candidate, Class of 2020
University of Toronto</h4>
                    <p>As a medical student and future physician, diagnosing and managing diseases will comprise a large part of my practice. Listening to patients’ stories can help physicians to empathize and connect on a human level; however, this is not enough. Physicians must also have and offer hope for their patients.
 
What if, instead of the traditional description of dementia, I could offer patients and their loved ones a brighter narrative? What if, in addition to medications, I could prescribe practical tools to connect meaningfully through arts? The Arts for Dementia Social Platform offers patients and their loved ones the opportunity to reframe their narrative; to choose connectedness over isolation, creativity over degeneration and hope over bleakness. <span style={spanStyle}>I look forward to using Arts for Dementia to promote wellness and to help shift the focus from the disease onto the person.</span>  </p>
                </section>
            </main>
        )
    }
}

export default Testimonials
