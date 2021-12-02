import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './home-style.scss'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <img 
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*jc9rLoebmAvNG0okEHkOPg.png&f=1&nofb=1"
                            style={{width: '500px'}} 
                        />
                        <p id="cop">By. Hellen</p>
                        <p id="sub">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa cumque aut sint?
                        </p>
                        <h1></h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
