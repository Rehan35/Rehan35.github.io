import './index.scss';
import BasketballHoop from '../BasketballHoop';

const roles = [
    {
        title: 'Software Engineering Intern — Core Agentic Experiences',
        org: 'Google',
        logo: 'G',
        logoColor: '#4285f4',
        location: 'New York City, NY',
        dates: 'Aug. 2026 – Present',
        bullets: [],
    },
    {
        title: 'Software Engineering Intern',
        org: 'Databricks, Inc.',
        logo: 'D',
        logoColor: '#ff3621',
        location: 'Mountain View, CA',
        dates: 'May 2026 – Aug. 2026',
        bullets: [
            "Designed a plan-execute migration framework for the IAM team's bulk email-migration service, modeling each row-level migration as a sequence of idempotent, individually-tracked steps to replace an error-prone manual process; the plan phase auto-inserts conflict-resolution steps when a target email already exists, enabling resumable execution and safe retries on partial failure.",
            "Architected a distributed home-folder renaming system spanning Databricks' global user → account → workspace hierarchy, propagating identity changes via RPCs from a central service to shard-level services, which fan out to workspace-hosting pods via Dicer assignment to guarantee consistent state across every account and workspace tied to a migrated user.",
            'Investigated failure-mode handling under partial Entity Store writes, designing each migration step (email rename, external ID clearing, home folder rename, audit logging) to be independently idempotent, and evaluated async processing (Kafka/Temporal) as an alternative execution model for offline home-folder updates in collaboration with the workspace and Entity Store teams.',
        ],
    },
    {
        title: 'Software Engineering Intern',
        org: 'Airbnb',
        logo: 'A',
        logoColor: '#ff385c',
        location: 'San Francisco, CA',
        dates: 'May 2025 – Aug. 2025',
        bullets: [
            'Designed an agentic AI system for Trust & Safety review, investigating retrieval-augmented generation strategies and custom policy evaluation prompts to summarize high-risk message threads while minimizing hallucination; built out a Ragas-based evaluation harness with virtual-judge scoring to systematically measure summary faithfulness and policy-relevance across prompt variants.',
            "Built a full-stack pipeline integrating GraphQL data ingestion, backend policy-scoring logic (Java, Python), and a frontend agent interface (TypeScript) to support rapid experimentation with new policy-scoring approaches, deployed via Airbnb's internal platforms (AirDev, Spinnaker) and CI/CD.",
            'Prototyped and evaluated AI-augmented human-in-the-loop review workflows with AI/ML researchers and Trust Ops, studying how model-generated summaries and confidence signals affected reviewer decision-making and review time, informing the design of automated message triage systems using LLM-based policy understanding.',
        ],
    },
];

const Experience = () => {
    return (
        <section className="experience-page container">
            <h1 className="section-heading">
                <span className="index">02.</span> Experience
            </h1>

            <BasketballHoop />

            <div className="entry-list">
                {roles.map((role) => (
                    <div className="glass-card entry-card" key={role.title + role.org}>
                        <div className="entry-head">
                            <div className="entry-title-row">
                                <span className="logo-badge" style={{ '--logo-color': role.logoColor }}>
                                    {role.logo}
                                </span>
                                <h3 className="entry-title">{role.title}</h3>
                            </div>
                            <span className="entry-dates">{role.dates}</span>
                        </div>
                        <div className="entry-org">
                            <span>{role.org}</span>
                            <span className="entry-location">{role.location}</span>
                        </div>
                        {role.bullets.length > 0 && (
                            <ul className="entry-bullets">
                                {role.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
