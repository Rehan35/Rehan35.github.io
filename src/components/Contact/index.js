import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_614uoi4', 'template_g97l0gg', refForm.current, 'exKyvjc5MhveUfwf4')
            .then(
                () => {
                    toast.success('Message Sent!');
                    refForm.current.reset();
                },
                () => {
                    toast.error('Message failed to send');
                }
            );
    };

    return (
        <section className="contact-page container">
            <Toaster richColors expand={true} position="top-center" />
            <h1 className="section-heading">
                <span className="index">05.</span> Get In Touch
            </h1>

            <div className="glass-card contact-card">
                <p className="contact-intro">
                    I am interested in research collaborations and opportunities in AI alignment, data
                    attribution, and language models, as well as software engineering roles. If you have any
                    opportunities, questions, or requests, please feel free to reach out.
                </p>

                <form ref={refForm} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-form-row">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" placeholder="Message" required />
                    <button type="submit" className="btn-neon primary">
                        Send Message
                    </button>
                </form>

                <div className="contact-socials">
                    <a className="icon-btn" href="mailto:rehanparwani@gmail.com" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a className="icon-btn" href="https://www.github.com/rehan35" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="icon-btn" href="https://www.linkedin.com/in/rehan-parwani" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
