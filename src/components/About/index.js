import './index.scss';
import Avatar from '../Avatar';
import headshot from '../../assets/images/headshot.jpeg';

const lineup = [
    { number: '01', skill: 'Python' },
    { number: '23', skill: 'PyTorch' },
    { number: '07', skill: 'Java' },
    { number: '11', skill: 'TypeScript' },
    { number: '03', skill: 'React' },
    { number: '18', skill: 'GraphQL' },
    { number: '04', skill: 'Swift' },
    { number: '99', skill: 'CUDA / Slurm' },
];

const About = () => {
    return (
        <section className="about-page container">
            <h1 className="section-heading">
                <span className="index">01.</span> About Me
            </h1>

            <div className="about-header">
                <Avatar src={headshot} size={128} badge="3" />
                <div className="about-header-facts">
                    <span className="pill">Georgia Tech &apos;27</span>
                    <span className="pill">3.94 GPA</span>
                    <span className="pill">GT Club Basketball — Treasurer</span>
                </div>
            </div>

            <div className="glass-card about-card">
                <svg className="backboard-watermark" viewBox="0 0 120 90" aria-hidden="true">
                    <rect x="6" y="6" width="70" height="48" rx="2" />
                    <ellipse cx="41" cy="58" rx="30" ry="7" />
                </svg>

                <p>
                    I'm a Computer Science student at <strong>Georgia Tech</strong> (Intelligence &amp; Information
                    Internetworking threads, 3.94 GPA, Dean's List) working on{' '}
                    <strong>mechanistic interpretability</strong> &mdash; localizing where and how language
                    models compute behavior internally, using activation steering, layer attribution, and
                    attribution patching to find the mechanisms behind a persona or role. That work feeds into
                    broader questions of <strong>alignment</strong> and <strong>training-data attribution</strong>,
                    published at the COLM 2026 workshops and ongoing across several lead-author position papers
                    and experiments.
                </p>
                <p>
                    Alongside research, I've built production systems as a software engineering intern at{' '}
                    <strong>Google</strong>, <strong>Databricks</strong>, and <strong>Airbnb</strong>, which keeps
                    my research grounded in how these systems actually get built and deployed at scale.
                </p>
                <p>
                    Outside of research and engineering, I serve as a <strong>Discrete Math Teaching Assistant</strong>{' '}
                    and <strong>Treasurer for Georgia Tech Club Basketball</strong>. I'm a meticulous and
                    analytical person who treats the world as a canvas for experimentation &mdash; whether that's
                    a training run or a pickup game.
                </p>
                <p>
                    If I were to define myself in one sentence: a kind and curious person who is competitive
                    about the things he cares about, but is ultimately passionate about the process of figuring
                    out why something works.
                </p>
            </div>

            <h3 className="skills-heading">Starting Lineup</h3>
            <div className="skills-grid">
                {lineup.map(({ number, skill }) => (
                    <span key={skill} className="jersey-pill">
                        <span className="jersey-number">{number}</span>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default About;
