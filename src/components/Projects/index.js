import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Rehan-Logo.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import ProjectCard from './ProjectCard';
import { Button, Card, Col, Row } from "react-bootstrap";
import Connect4Image from "../../assets/images/Connect4Image.jpg"
import SpotifyProjectImage from "../../assets/images/SpotifyProjectImage.jpg"
import AINFTImage from "../../assets/images/AINFTImage.png"
import StableDiffusionAIAlbumCoverImage from "../../assets/images/StableDiffusionAlbumCoverImage.png"
import StableDiffusionAIAlbumCoverImage2 from "../../assets/images/StableDiffusionAlbumCoverImage2.png"
import ComingSoonImage from "../../assets/images/ComingSoonImage.png"
import TicTacToeImage from "../../assets/images/3DTicTacToeImage.jpg"
import TitanicProjectImage from "../../assets/images/TitanicProjectImage.jpg"
import SlidingTilePuzzle from "../../assets/images/SlidingTilePuzzleImage.jpg"
import MarkovModelImage from "../../assets/images/MarkovModelLyricsImage.jpg"
const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const projectsArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']
    const projects = [
        {
            title: "Connect4AI",
            description: "Java-based Connect4AI uses Minimax for strategic gameplay.",
            imageUrl: Connect4Image,
            githubLink: "https://github.com/Rehan35/Connect4AI",
            longDescription: "I've crafted a Connect4 AI using the minimax algorithm. Using heuristics, this method intelligently anticipates opponent moves, evaluates outcomes, and selects optimal strategies for winning. My skills in AI design enable me to create effective and competitive gaming solutions."
        },
        {
            title: "AI NFT",
            description: "Automates image creation, IPFS storage, and NFT minting using Midjourney, Pinata, and Solidity.",
            imageUrl: AINFTImage,
            githubLink: "https://github.com/Rehan35/AiNFT",
            longDescription: "This AI NFT project showcases my skills in API integration and blockchain technology. Using the Midjourney API for image generation and Pinata IPFS for secure storage, I automated the NFT creation process. I also developed smart contracts in Solidity to mint NFTs, demonstrating my ability to execute complex blockchain operations."
        },
        {
            title: "Stable Diffusion Album Covers",
            description: "Transform your Spotify library into a gallery of stunning visual masterpieces with AI Music Covers.",
            imageUrl: StableDiffusionAIAlbumCoverImage2,
            githubLink: "https://github.com/Rehan35/AI-Generated-Album-Covers-SP",
            longDescription: "AI Music Covers showcases my AI and design skills by analyzing Spotify albums and playlists to generate personalized cover art. Using advanced algorithms and rich metadata, I created a system that reflects the essence of the music, delivering unique and visually striking solutions."
        },
        {
            title: "3D TicTacToe",
            description: "Developed a 3D TicTacToe AI using the minimax algorithm to optimize gameplay strategy.",
            imageUrl: TicTacToeImage,
            githubLink: "https://github.com/Rehan35/3DTicTacToe",
            longDescription: "I created a 3D TicTacToe AI that leverages the minimax algorithm with a heuristic to evaluate game states and determine the best moves. The algorithm traverses several plies down the game tree, calculating scores for non-terminal game states and recursively finding the optimal move for the CPU."
        },
        {
            title: "Titanic Project",
            description: "Titanic survival prediction made precise with Decision Trees and Logistic Regression.",
            imageUrl: TitanicProjectImage,
            githubLink: "https://github.com/Rehan35/TitanicProject",
            longDescription: "I designed a Titanic classifier using Decision Trees and Logistic Regression, refining split decisions with entropy for accuracy. Employing gradient descent and mathematical optimization, I fine-tuned model weights, showcasing expertise in both algorithmic design and statistical modeling."
        },
        {
            title: "Sliding Tile Puzzle",
            description: "Mastering the Sliding Tile Puzzle with A-Star algorithm and varied heuristics (L norms).",
            imageUrl: SlidingTilePuzzle,
            githubLink: "https://github.com/Rehan35/SlidingTilePuzzle",
            longDescription: "My Sliding Tile Puzzle solver combines A-Star and various heuristics for optimal solutions, showcasing efficiency and strategic problem-solving. Utilizing Breadth First Search, Depth First Search, Greedy Best First Search, and A-Star, the solver delivers precise outputs, demonstrating proficiency in algorithmic design and puzzle-solving strategies."
        },
        {
            title: "Spotify Wrapped",
            description: "Enhancing Spotify experiences with Gemini integration and interactive music games.",
            imageUrl: SpotifyProjectImage,
            githubLink: "https://github.com/Rehan35/2340SpotifyWrapped",
            longDescription: "My Spotify Wrapped App merges Gemini from Google and the Spotify API for a holistic music experience, showcasing top artists and tracks while offering an engaging game for users to guess songs and artists. This blend of technology and interactivity creates a dynamic platform for music enthusiasts, combining discovery, fun, and personalization seamlessly."
        },
        {
            title: "Markov Model Lyrics Generator",
            description: "Crafting Drake-inspired lyrics with a Markov Model generator.",
            imageUrl: MarkovModelImage,
            githubLink: "https://github.com/Rehan35/MarkovModelLyricsGenerator",
            longDescription: "My Markov Model Lyrics Generator transforms Drake's lyrical essence using a Kaggle dataset, where each word's probability is calculated for generating cohesive song snippets. Although effective, refining the model to consider pairs of words aims to enhance lyrical coherence while overcoming challenges of word scarcity for a more natural output."
        },
        // {
        //     title: "PinnacleSaved (Coming Soon)",
        //     description: "Java-based Connect4AI uses Minimax for strategic gameplay.",
        //     imageUrl: ComingSoonImage,
        //     githubLink: "https://github.com/Rehan35/",
        //     longDescription: "I've crafted a Connect4 AI using the minimax algorithm. Using heuristics, this method intelligently anticipates opponent moves, evaluates outcomes, and selects optimal strategies for winning. My skills in AI design enable me to create effective and competitive gaming solutions."
        // },
        // {
        //     title: "PinnacleTV (Coming Soon)",
        //     description: "Java-based Connect4AI uses Minimax for strategic gameplay.",
        //     imageUrl: ComingSoonImage,
        //     githubLink: "https://github.com/Rehan35/",
        //     longDescription: "I've crafted a Connect4 AI using the minimax algorithm. Using heuristics, this method intelligently anticipates opponent moves, evaluates outcomes, and selects optimal strategies for winning. My skills in AI design enable me to create effective and competitive gaming solutions."
        // }
    ];

    return (
        <>
            <section className="container projects-page" id="project">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={projectsArray}
                            idx={15}
                        />
                    </h1>
                </div>
                <Row className="justify-content-center">
                    {
                        projects.map((project, index) => {
                            const colSize = 9 / 3; // Assuming 3 cards per row

                            return (
                                <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                                    <ProjectCard
                                        className="project-card"
                                        title={project.title}
                                        description={project.description}
                                        imgUrl={project.imageUrl}
                                        longDescription={project.longDescription}
                                        githubLink={project.githubLink}
                                    />
                                </Col>
                            );
                        })
                    }
                </Row>
            </section>
            <Loader type="cube-transition" />
        </>

    )
}

export default Projects;