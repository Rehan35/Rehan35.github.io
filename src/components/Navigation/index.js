import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Experience', to: '/experience' },
    { name: 'Research', to: '/research' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
];

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`site-nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="site-nav-inner">
                <Link to="/" className="site-logo gradient-text">
                    RP
                </Link>

                <div className="site-nav-links desktop">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) => `site-nav-link ${isActive ? 'active' : ''}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="site-nav-socials desktop">
                    <a
                        className="icon-btn"
                        href="https://www.github.com/rehan35"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        className="icon-btn"
                        href="https://www.linkedin.com/in/rehan-parwani"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>

                <button
                    className="site-nav-toggle"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {isMenuOpen && (
                <div className="site-nav-mobile">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) => `site-nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <div className="site-nav-socials">
                        <a
                            className="icon-btn"
                            href="https://www.github.com/rehan35"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            className="icon-btn"
                            href="https://www.linkedin.com/in/rehan-parwani"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
