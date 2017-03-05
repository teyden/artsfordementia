import React from 'react'

const mainStyle = {
    "maxWidth": "960px",
    "margin": "auto",
    "paddingTop": "1em",
    "paddingBottom": "4em"
}

class About extends React.Component {
    render() {
        return (
                <main style={mainStyle}>
                   <h1>Arts for Dementia</h1>
                   <section>
                       <h2>About Us</h2>
                       <p>Arts for Dementia is a curated platform of arts based information for care partners looking for positive and fun activities to stay connected to their loved ones who are affected by Alzheimer's disease and other dementias, at home and in the local community. Our GOAL is to provide positive and enjoyable solutions for life with dementia and ultimately create a community that ventures beyond loss, into life. The project was developed at DementiaHack’15 and it encourages Culture Shift advocacy. </p>
                   </section>
                   <section >
                       <h2>Our Vision</h2>
                       <p>Our VISION is to live in a society that promotes empathy within a global community. We are looking for champions to bring arts based projects into local communities, disseminate knowledge about engaging activities and meaningful lifestyles with dementia.</p>
                   </section>
                   <section className="mission-statement">
                       <h2>Our Mission Statement</h2>
                       <p>Our MISSION is to promote empathy within the global society. We are looking for champions to bring arts based projects into local communities, disseminate knowledge about engaging activities and meaningful lifestyles with dementia.</p>
                   </section>
                   <section>
                       <h2>Team</h2>
                       <div>
                           <figure>
                               <img src="" alt="" />
                               <figcaption>
                                   <h4>Liza Futerman</h4>
                                   <h5>Founder and Queen of 'Arts</h5>
                                   <p>Liza Futerman is a graduate member of the Collaborative Program in Neuroscience, a Senior Fellow at the Comparative Centre of Health and Society and a Canadian Institute on Health Research-funded doctoral scholar at the Center for Comparative Literature at the University of Toronto, where she researches the social determinants of dementia. She investigates the popular discourse around dementia and the ways it affects policymakers, clinicians, individuals diagnosed as ‘dementia patients’ and their families and support circles. She is a social entrepreneur and an avid artivist for ethical, humanistic and just dementia care.</p>
                               </figcaption>
                           </figure>
                           <figure>
                               <img src="" alt="" />
                               <figcaption>
                                   <h4>Angela Cheng</h4>
                                   <h5>Imagineer </h5>
                                   <p>Design and human-centred care enthusiast,  Angela sees art as the medium through which we make meaning out of the world around us. She uses design with a clairvoyant goal in mind: inspire others and find inspiration to foster meaningful  change. "I don't just design things, I design JUSTice-driven things.” A painter and a dreamer, for Angela, human life is art and she’s determined to make hers count. #ArtisLife</p>
                               </figcaption>
                           </figure>
                           <figure>
                               <img src="" alt="" />
                               <figcaption>
                                   <h4>Teyden Nguyen</h4>
                                   <h5>Protector of the Server</h5>
                                   <p>Passionate about bioinformatics & personalized medicine, Teyden is a painter and a full stack developer who views coding as a creative process. For her, code is art! Teyden excels in non-verbal communication and instrumental sounds. She has an 11th toe... or does she? #sheBytes</p>
                               </figcaption>
                           </figure>
                           <figure>
                               <img src="" alt="" />
                               <figcaption>
                                   <h4>Mohit Gupta</h4>
                                   <h5>Commander of the Code</h5>
                                   <p>Elegance, precision and profound thought coexist in Mohit’s life and his work as a full-stack developer. He's dedicated to solving challenges in innovative & creative ways. Equipped with his sonic green keyboard, his heart melts a little bit every time his niece posts Olaf and Elsa onto his laptop. #waka-waka is his way of life and code is his home.</p>
                               </figcaption>
                           </figure>
                           <figure>
                               <img src="" alt="" />
                               <figcaption>
                                   <h4>Kelly Rodriques</h4>
                                   <h5>Keeper of the Queen</h5>
                                   <p>A serial entrepreneur, a rhizomic thinker and a notorious problem solver, Kelly commits her life to understand before claiming knowledge. She ventures through the world with a family of caregivers, dreamers, shapeshifters and lovers. Her true passion is to live in a space with green shelves, surrounded by green benches and accompanied by Opium the brown dog #KellyMD</p>
                               </figcaption>
                           </figure>
                       </div>
                   </section>
                   <section>
                       <h2>The Arts for Dementia Backstory</h2>
                       <p>Empty shells – living dead – a never-ending funeral – these were some of the terms I encountered right after my mom’s diagnosis with Alzheimer’s Disease in April 2014. About a year before the official diagnosis, which was treated like a verdict, I realized neither my mother, my father nor I had the tools to cope with her new and unstable condition. I was motivated to learn more about the medical condition and find effective ways to support my mom. I wanted to understand what she was going through and how I could help her and my father, who assumed the role of primary care-partner. However, whenever I Googled the words Alzheimer’s or dementia, I was bombarded with countless articles, websites, commercials etc. telling me how grim our family’s situation was and how devastating our future is bound to be. It dawned on me that the tragedy-infused language about dementia wasn’t helping me much. Nor was it helping my parents. To really help my family, I needed to apply my skills as a cultural critic to explore the dominant perceptions of dementia and, hopefully, change them by stirring social action. In September 2014, when I started my PhD at the University of Toronto, I also founded the MemoryLoss research initiative with the support of Wilfrid Laurier University’s Centre for Memory and Testimony Studies. With the MemoryLoss research group, I’ve built an interdisciplinary community of thinkers to discuss memory loss on the broader cultural level. The thought-provoking conversations and the 2015 MemoryLoss Speakers Series that I curated led to the MemoryShift conference in September 2015. These activities helped me to realized I wanted to direct myself towards social and cultural change to make a difference for those living with dementia and their families, because let’s face it: Alzheimer’s Disease is not just a medical condition – it’s a cultural phenomenon that affects society as much as it does people labelled as ‘Alzheimer’s patients.’ </p>
                   </section>
                   <section>
                       <h2>Enablers</h2>
                       <div>Insert partner images here</div>
                       <p>Visit Canadian Institutes of Health Research</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit The Vanier Canada Graduate Scholarship</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit SoftMouse Colony Management Database Software</p>
                   </section>
                   <section>
                       <h2>Supporters</h2>
                       <div>Insert partner images here</div>
                       <p>Visit The Alzheimer's Association of Israel</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit Alzheimer’s Disease International (ADI)</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit Dementia Alliance International</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit Dementia Action Alliance</p>
                   </section>
                   <section>
                       <h2>Partners</h2>
                       <div>Insert partner images here</div>
                       <p>Visit Technology for Aging Gracefully</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit Project we forget</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit Silicon Valley Innovation Academy</p>
                       <br/>
                       <div>Insert partner images here</div>
                       <p>Visit One Kenton Place</p>
                   </section>
                   <section>
                       <h2>Connect wth us</h2>

                       <a href="mailto:info@artsfordementia.com"><p>info@artsfordementia.com</p></a>
                   </section>
           </main>
        )
    }
}

export default About
