import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Rehan-Logo.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from "./Logo";
import Loader from "react-loaders";
const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['e', 'h', 'a', 'n']
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't', ' ', 
    '@', 'G','e','o','r','g','i','a',' ','T','e','c','h']

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1> 
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span> 
                        <br /> 
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>
                            <img src={LogoTitle} alt="developer" />
                            <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={20} />
                    </h1>
                    <h2>Backend Developer: Java and Python</h2>
                    <h2>Frontend Developer: React and Swift</h2>
                        
                    <Link to="/rehan-parwani-website/contact" className='flat-button'>CONTACT ME</Link>

                </div>
                <Logo />
            </div>
            <Loader type="cube-transition"/>
        </>
        
    )
}

export default Home;