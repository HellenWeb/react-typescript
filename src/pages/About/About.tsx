import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export const About = () => {
    return (
        <div>
            <Navbar />
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <h1 style={{fontSize: '90px', marginBottom: '40px'}}>Contact</h1>
                        <div className="main" style={{marginBottom: '37px'}}>
                            <a className="waves-effect waves-light btn" style={{marginRight: '10px'}} href="https://github.com/HellenWeb">Github</a>
                            <a className="waves-effect waves-light btn" href="https://t.me/YungHellen">Telegram</a>
                        </div>
                        <p style={{opacity: '.5'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
