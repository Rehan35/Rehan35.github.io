import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faPython, faReact, faSwift } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className="text-zone">
                    <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                    </h1>
                    <p>
                        I am a very ambitious developer looking for a role at a company with the opportunity
                        to work with some of the brightests minds to push the frontiers of the applications of Artificial Intelligence
                        and Machine Learning and also work on challenging and diverse projects in the multiple different spaces of development.
                    </p>
                    <p>
                        I currently have experience in App Development along with Backend development and implementation of different AI and Machine Learning models. 
                        I am always looking to improve upon my experience and collaborate with others to not only extend my knowledge of the computer science world,
                        but also update my current projects and develop on new projects.
                    </p>
                    <p>
                        I am a meticulous and analytical being who loves to use the world around him as his canvas and apply his experiences into the world of CS. 
                        As someone who loves basketball and sports in general, I am always looking for ways to use my love for different mediums and blend them into one.
                    </p>
                    <p>
                        If I were to define myself in one sentence that would be a kind and caring individual who can be compettive when it comes to sports 
                        but at the end of the day is passionate about each project he chooses to tackle.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faJava} color="#5382A1" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faPython} color="#306998" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faSwift} color="#FF4F00" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="cube-transition"/>
        </>
    )
}

export default About;