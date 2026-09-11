import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Avatar from '../Avatar';
import headshot from '../../assets/images/headshot.jpeg';

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-inner animate-slide-up">
                <Avatar src={headshot} size={148} badge="3" />
                <p className="hero-eyebrow">Hi, my name is</p>
                <h1 className="hero-name gradient-text glow-text">Rehan Parwani</h1>
                <h2 className="hero-tagline">AI Researcher &amp; CS Student @ Georgia Tech</h2>
                <p className="hero-subtitle">Mechanistic Interpretability &nbsp;·&nbsp; Alignment &nbsp;·&nbsp; Data Attribution</p>

                <p className="hero-description">
                    I research how language models represent and compute behavior internally &mdash;
                    localizing personas and roles to specific layers with activation steering and attribution
                    patching &mdash; and how that mechanistic understanding connects to alignment and
                    training-data attribution, with work published at COLM 2026. Currently a Software
                    Engineering Intern on Google's Core Agentic Experiences team, with prior internships at
                    Databricks and Airbnb.
                </p>

                <div className="hero-actions">
                    <Link to="/research" className="btn-neon primary">
                        View My Research
                    </Link>
                    <Link to="/contact" className="btn-neon outline">
                        Get In Touch
                    </Link>
                </div>

                <div className="hero-socials">
                    <a className="icon-btn" href="https://www.github.com/rehan35" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="icon-btn" href="https://www.linkedin.com/in/rehan-parwani" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a className="icon-btn" href="mailto:rehanparwani@gmail.com" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
