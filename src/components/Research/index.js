import './index.scss';
import VinylRecord from '../VinylRecord';

const publications = [
    {
        title: 'Role Steering of Language Models for Social Simulations',
        authors: [
            'Isaac Song*',
            'Mohammed Rehan Parwani*',
            'Glenn Matlin*',
            'Emile Anand',
            'Akhil Theerthala',
            'Arjun Chatterjee',
            'Anthony Zang',
            'Maria Kostylew',
            'Yonadav G. Shavit',
            'Sebastien Krier',
            'Mark Riedl',
        ],
        venue: 'Proceedings of the COLM 2026 Workshop on Social Simulations with LLMs, 2026',
        arxiv: 'https://arxiv.org/abs/2608.00023',
        arxivId: 'arXiv:2608.00023',
        hasOpenReview: true,
        topics: ['Mechanistic Interpretability', 'Activation Steering'],
    },
    {
        title: 'Shall We Play a Game? Language Models for Open-ended Wargames',
        authors: [
            'Glenn Matlin',
            'Isaac Song*',
            'Yixiong Hao*',
            'Parv Mahajan*',
            'Evan Montoya†',
            'Ryan Bard†',
            'Stuart R. Topp†',
            'Anthony Wen-Ming Zang‡',
            'Mohammed Rehan Parwani‡',
            'Soham Shetty‡',
            'Mark Riedl',
        ],
        venue: "Proceedings of the Social Sim'26 Workshop, COLM 2026, 2026",
        arxiv: 'https://arxiv.org/abs/2509.17192',
        arxivId: 'arXiv:2509.17192',
        hasOpenReview: true,
        topics: ['LLM Agents'],
    },
];

const ongoingWork = [
    {
        title: 'Data Attribution Should Steer Pretraining',
        org: 'Entertainment Intelligence and Human-Centered AI Lab',
        location: 'Atlanta, GA',
        dates: 'Sept. 2026 – Present',
        topics: ['Data Attribution'],
        bullets: [
            'Co-authoring (lead-author track) a position paper arguing that training-data attribution should explain what pretraining data contributes to a capability, not merely rank documents for a single run, extending the lab\'s Capability Provenance case study into a general research agenda.',
            'Specifying a feedback loop (observe, attribute, interpret, test, and fold outcomes back into curation criteria) and a ladder of evidence — description, prediction, intervention, mechanism — distinguishing what each level of attribution can and cannot license for future data decisions.',
            'Laying out a research agenda for comparing attribution-guided data decisions against domain reweighting, importance resampling, and model-aware selection at matched compute cost, including discovery costs for any derived curation criterion.',
        ],
    },
    {
        title: 'CastVectors 2.0: Scaling Role-Conditioned Activation Steering',
        org: 'Entertainment Intelligence and Human-Centered AI Lab',
        location: 'Atlanta, GA',
        dates: 'Sept. 2026 – Present',
        topics: ['Mechanistic Interpretability', 'Activation Steering'],
        bullets: [
            "Extending the accepted CastVectors workshop paper (Social Sim'26, COLM 2026) toward a main-track submission, scoping six workstreams to answer the reviewer questions the workshop paper's own Validity Boundaries section raised.",
            'Scaling cross-model generality testing (2-3 additional 7-9B instruction-tuned models) and a layer-choice sweep to check whether the layer-16 extraction convention and the CastVectors-vs-assistant-axis gap transfer beyond OLMo-3-7B-Instruct.',
            'Designing mechanism experiments (norm-matched assistant-axis control, projection/ablation checks, extended negative-α coefficient grid) to diagnose the 38 anti-controllable roles left unexplained in the workshop paper, plus a blinded human-judge validation subset.',
        ],
    },
    {
        title: 'Alignment Is a Data Attribution Problem',
        org: 'Entertainment Intelligence and Human-Centered AI Lab',
        location: 'Atlanta, GA',
        dates: 'Sept. 2026 – Present',
        topics: ['Alignment', 'Data Attribution'],
        bullets: [
            'Contributing at a lead-author level to a position paper arguing that aligning a behavior (e.g., sycophancy, over-refusal, overconfidence) requires attributing it to the training data that produced it, rather than correcting it behaviorally on the finished model.',
            'Surveying where standard alignment techniques (safety classifiers, RLHF patching, inoculation prompting, evaluations) fall short of that goal, since each can suppress a behavior without identifying which data caused it or guaranteeing the correction is durable.',
            'Proposing concrete diagnosis targets for data attribution (data poisoning, sleeper agents, sycophancy, emergent misalignment) and downstream capabilities it could enable, including non-semantic trait transfer detection and attribution-informed corpus curation for future training runs.',
        ],
    },
    {
        title: 'Selective Character Training with Measured Side Effects',
        org: 'Georgia Institute of Technology',
        location: 'Atlanta, GA',
        dates: 'Sept. 2026 – Present',
        topics: ['Alignment', 'Data Selection'],
        bullets: [
            'Leading a research proposal testing whether a protection-aware, LESS-style gradient selector can improve a targeted assistant behavior (e.g., greater supportiveness) while bounding damage to protected behaviors (false agreement, task accuracy) relative to simpler baselines.',
            'Designing a five-condition controlled comparison (random selection, rubric filtering, target-only gradient selection, constrained gradient selection, inoculation) with a pre-registered measurement protocol, blinded human calibration, and frozen success margins to avoid post-hoc reshaping of results.',
            'Scoping a persistence check that continues each condition through a shared downstream fine-tuning stage, since a behavior change measured immediately after selection may not survive further training.',
        ],
    },
    {
        title: 'Cheap Attribution and Control for Character-Persona Alignment',
        org: 'Individual Research',
        location: 'Atlanta, GA',
        dates: 'Sept. 2026 – Present',
        topics: ['Mechanistic Interpretability', 'Data Attribution'],
        bullets: [
            'Designing a two-workstream research program pairing training-data attribution (a seven-method selection ladder from CPU-only distributional matching to first-order gradient information) with a four-rung intervention ladder (steering, soft prompts, LoRA, full fine-tuning) to test what causes persona-consistent behavior and how cheaply it can be elicited.',
            'Developing a mechanism-level layer attribution line of evidence (direct logit attribution, concept-lens scoring, attribution patching) to localize where in the network a persona is computed on a given forward pass, staged to reserve exact activation patching for a small flagged subset of layers.',
            'Extending static steering coefficients into two control-theoretic formulations — a receding-horizon MPC controller and an adaptive mixture-of-experts LoRA router — both driven online by a judge-free Gaussian drift-hazard signal rather than offline-swept parameters.',
        ],
    },
];

const personalResearch = {
    title: 'RehanGPT — From-scratch GPT-style LM',
    dates: 'Aug. 2026 – Present',
    topics: ['LM Pretraining', 'Systems'],
    bullets: [
        'Implemented a decoder-only Transformer from first principles in PyTorch (attention, multi-head attention, feedforward, layer norm, embeddings hand-written down to individual layers, no nn.Transformer or HuggingFace AutoModel), validated end-to-end on small corpora (tiny Shakespeare, WikiText, TinyStories).',
        'Built a config-driven training/inference pipeline with staged pretrain → mid-train support, checkpoint resume, and Slurm-based job scripts for large-scale runs (WikiText-103, C4) on Georgia Tech\'s PACE Phoenix GPU cluster.',
        'Architecting a personalization roadmap converting the dense model to a Mixture-of-Experts architecture with a multi-token prediction objective, with LoRA adapters representing distinct personality facets selectable/blendable at inference time, trained on personal writing to produce a conversational persona model.',
    ],
};

const TopicTags = ({ topics }) => {
    if (!topics || topics.length === 0) return null;

    return (
        <div className="topic-tags">
            {topics.map((topic) => (
                <span
                    key={topic}
                    className={`topic-tag ${topic === 'Mechanistic Interpretability' ? 'topic-tag-highlight' : ''}`}
                >
                    {topic}
                </span>
            ))}
        </div>
    );
};

const Research = () => {
    return (
        <section className="research-page container">
            <div className="research-heading-row">
                <h1 className="section-heading">
                    <span className="index">03.</span> Research
                </h1>
                <VinylRecord size={64} />
            </div>

            <h3 className="research-subheading">Publications &amp; Papers</h3>
            <div className="entry-list">
                {publications.map((pub, i) => (
                    <div className="glass-card entry-card" key={pub.title}>
                        <div className="entry-title-row">
                            <span className="track-number">{String(i + 1).padStart(2, '0')}</span>
                            <VinylRecord size={40} speed={5} />
                            <h4 className="entry-title">{pub.title}</h4>
                        </div>
                        <TopicTags topics={pub.topics} />
                        <p className="entry-authors">
                            {pub.authors.map((author, i) => (
                                <span key={author}>
                                    {author.startsWith('Mohammed Rehan Parwani') ? <strong>{author}</strong> : author}
                                    {i < pub.authors.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </p>
                        <p className="entry-venue">{pub.venue}</p>
                        <div className="entry-links">
                            <a className="pill" href={pub.arxiv} target="_blank" rel="noreferrer">
                                {pub.arxivId}
                            </a>
                            {pub.hasOpenReview && <span className="pill pill-static">OpenReview</span>}
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="research-subheading">Ongoing Work</h3>
            <div className="entry-list">
                {ongoingWork.map((work, i) => (
                    <div className="glass-card entry-card" key={work.title}>
                        <div className="entry-head">
                            <div className="entry-title-row">
                                <span className="track-number">{String(i + 1).padStart(2, '0')}</span>
                                <VinylRecord size={40} speed={5} />
                                <h3 className="entry-title">{work.title}</h3>
                            </div>
                            <span className="entry-dates">{work.dates}</span>
                        </div>
                        <div className="entry-org">
                            <span>{work.org}</span>
                            <span className="entry-location">{work.location}</span>
                        </div>
                        <TopicTags topics={work.topics} />
                        <ul className="entry-bullets">
                            {work.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h3 className="research-subheading">Personal Research Project</h3>
            <div className="entry-list">
                <div className="glass-card entry-card">
                    <div className="entry-head">
                        <div className="entry-title-row">
                            <span className="track-number">01</span>
                            <VinylRecord size={40} speed={5} />
                            <h3 className="entry-title">{personalResearch.title}</h3>
                        </div>
                        <span className="entry-dates">{personalResearch.dates}</span>
                    </div>
                    <TopicTags topics={personalResearch.topics} />
                    <ul className="entry-bullets">
                        {personalResearch.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Research;
