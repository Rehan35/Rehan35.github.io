import './index.scss';
import { useEffect, useState } from 'react';
import Turntable from '../Turntable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Connect4Image from '../../assets/images/Connect4Image.jpg';
import SpotifyProjectImage from '../../assets/images/SpotifyProjectImage.jpg';
import AINFTImage from '../../assets/images/AINFTImage.png';
import StableDiffusionAIAlbumCoverImage2 from '../../assets/images/StableDiffusionAlbumCoverImage2.png';
import TicTacToeImage from '../../assets/images/3DTicTacToeImage.jpg';
import TitanicProjectImage from '../../assets/images/TitanicProjectImage.jpg';
import SlidingTilePuzzle from '../../assets/images/SlidingTilePuzzleImage.jpg';
import MarkovModelImage from '../../assets/images/MarkovModelLyricsImage.jpg';

const projects = [
    {
        title: 'Connect4AI',
        description: 'Java-based Connect4AI uses Minimax for strategic gameplay.',
        imageUrl: Connect4Image,
        githubLink: 'https://github.com/Rehan35/Connect4AI',
        longDescription:
            "I've crafted a Connect4 AI using the minimax algorithm. Using heuristics, this method intelligently anticipates opponent moves, evaluates outcomes, and selects optimal strategies for winning. My skills in AI design enable me to create effective and competitive gaming solutions.",
    },
    {
        title: 'AI NFT',
        description: 'Automates image creation, IPFS storage, and NFT minting using Midjourney, Pinata, and Solidity.',
        imageUrl: AINFTImage,
        githubLink: 'https://github.com/Rehan35/AiNFT',
        longDescription:
            'This AI NFT project showcases my skills in API integration and blockchain technology. Using the Midjourney API for image generation and Pinata IPFS for secure storage, I automated the NFT creation process. I also developed smart contracts in Solidity to mint NFTs, demonstrating my ability to execute complex blockchain operations.',
    },
    {
        title: 'Stable Diffusion Album Covers',
        description: 'Transform your Spotify library into a gallery of stunning visual masterpieces with AI Music Covers.',
        imageUrl: StableDiffusionAIAlbumCoverImage2,
        githubLink: 'https://github.com/Rehan35/AI-Generated-Album-Covers-SP',
        longDescription:
            'AI Music Covers showcases my AI and design skills by analyzing Spotify albums and playlists to generate personalized cover art. Using advanced algorithms and rich metadata, I created a system that reflects the essence of the music, delivering unique and visually striking solutions.',
    },
    {
        title: '3D TicTacToe',
        description: 'Developed a 3D TicTacToe AI using the minimax algorithm to optimize gameplay strategy.',
        imageUrl: TicTacToeImage,
        githubLink: 'https://github.com/Rehan35/3DTicTacToe',
        longDescription:
            'I created a 3D TicTacToe AI that leverages the minimax algorithm with a heuristic to evaluate game states and determine the best moves. The algorithm traverses several plies down the game tree, calculating scores for non-terminal game states and recursively finding the optimal move for the CPU.',
    },
    {
        title: 'Titanic Project',
        description: 'Titanic survival prediction made precise with Decision Trees and Logistic Regression.',
        imageUrl: TitanicProjectImage,
        githubLink: 'https://github.com/Rehan35/TitanicProject',
        longDescription:
            'I designed a Titanic classifier using Decision Trees and Logistic Regression, refining split decisions with entropy for accuracy. Employing gradient descent and mathematical optimization, I fine-tuned model weights, showcasing expertise in both algorithmic design and statistical modeling.',
    },
    {
        title: 'Sliding Tile Puzzle',
        description: 'Mastering the Sliding Tile Puzzle with A-Star algorithm and varied heuristics (L norms).',
        imageUrl: SlidingTilePuzzle,
        githubLink: 'https://github.com/Rehan35/SlidingTilePuzzle',
        longDescription:
            'My Sliding Tile Puzzle solver combines A-Star and various heuristics for optimal solutions, showcasing efficiency and strategic problem-solving. Utilizing Breadth First Search, Depth First Search, Greedy Best First Search, and A-Star, the solver delivers precise outputs, demonstrating proficiency in algorithmic design and puzzle-solving strategies.',
    },
    {
        title: 'Spotify Wrapped',
        description: 'Enhancing Spotify experiences with Gemini integration and interactive music games.',
        imageUrl: SpotifyProjectImage,
        githubLink: 'https://github.com/Rehan35/2340SpotifyWrapped',
        longDescription:
            'My Spotify Wrapped App merges Gemini from Google and the Spotify API for a holistic music experience, showcasing top artists and tracks while offering an engaging game for users to guess songs and artists. This blend of technology and interactivity creates a dynamic platform for music enthusiasts, combining discovery, fun, and personalization seamlessly.',
    },
    {
        title: 'Markov Model Lyrics Generator',
        description: "Crafting Drake-inspired lyrics with a Markov Model generator.",
        imageUrl: MarkovModelImage,
        githubLink: 'https://github.com/Rehan35/MarkovModelLyricsGenerator',
        longDescription:
            "My Markov Model Lyrics Generator transforms Drake's lyrical essence using a Kaggle dataset, where each word's probability is calculated for generating cohesive song snippets. Although effective, refining the model to consider pairs of words aims to enhance lyrical coherence while overcoming challenges of word scarcity for a more natural output.",
    },
];

const Projects = () => {
    const total = projects.length;
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(true);
    const project = projects[index];

    const goTo = (i) => setIndex(((i % total) + total) % total);

    useEffect(() => {
        if (!playing) return undefined;
        const id = setTimeout(() => setIndex((prev) => (prev + 1) % total), 6000);
        return () => clearTimeout(id);
    }, [index, playing, total]);

    return (
        <section className="projects-page container" id="project">
            <h1 className="section-heading">
                <span className="index">04.</span> Projects
            </h1>

            <div className="record-player">
                <Turntable
                    image={project.imageUrl}
                    alt={project.title}
                    spinning={playing}
                    progress={total > 1 ? index / (total - 1) : 0}
                />

                <div className="glass-card record-info">
                    <span className="track-number">
                        Track {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                    <h3 className="entry-title">{project.title}</h3>
                    <p className="record-description">{project.description}</p>
                    <p className="record-long-description">{project.longDescription}</p>

                    <div className="record-controls">
                        <button className="icon-btn" onClick={() => goTo(index - 1)} aria-label="Previous project">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            className="icon-btn play-btn"
                            onClick={() => setPlaying((p) => !p)}
                            aria-label={playing ? 'Pause auto-play' : 'Resume auto-play'}
                        >
                            <FontAwesomeIcon icon={playing ? faPause : faPlay} />
                        </button>
                        <button className="icon-btn" onClick={() => goTo(index + 1)} aria-label="Next project">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                        <a className="btn-neon outline" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> View Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="record-crate">
                {projects.map((p, i) => (
                    <button
                        key={p.title}
                        className={`crate-item ${i === index ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Play ${p.title}`}
                        title={p.title}
                    >
                        <img src={p.imageUrl} alt="" />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Projects;
