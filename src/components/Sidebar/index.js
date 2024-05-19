import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import RehanLogo from '../../assets/images/Rehan-Logo.png'
import LogoSubtitle from '../../assets/images/Rehan-Subtite.png'
import { faEnvelope, faHome, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={RehanLogo} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="rehan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/rehan-parwani-website/home">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active"
                className="about-link" 
                to="/rehan-parwani-website/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/rehan-parwani-website/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="projects-link" 
                to="/rehan-parwani-website/projects"
            >
                <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/rehan-parwani'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/rehan35'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar