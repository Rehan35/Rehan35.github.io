import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import RehanLogo from '../../assets/images/Rehan-Logo.png'
import { Toaster, toast } from 'sonner'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        console.log("REACHED HERE");
        e.preventDefault();

        emailjs
        .sendForm(
            'service_614uoi4',
            'template_g97l0gg',
            refForm.current,
            'exKyvjc5MhveUfwf4'
        )
        .then(
            () => {
                toast.success("Message sent successfully");
            },
            (error) => {
                // alert("Failed to send message, please try again");
                toast.error("Message failed to send");
            }
        )
    }

    return(
        <>
            <div className="container contact-page">
                <Toaster richColors expand={true} position="top-center"/>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in internship and research opportunities
                        in the fields of AI, ML, and Backend and Frontend Development.
                        If you have any opportunities, questions, or requests, please feel
                        free to reach out.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half2'>
                                    <input type="text" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder="message" name="message" required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='logo-container'>
                <img className='Rehan-Logo' src={RehanLogo} alt="S"/>
                </div>
            </div>
            <Loader type='cube-transition'/>
        </>
    )
}

export default Contact;