import { Col } from "react-bootstrap"
import './index.scss'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ title, description, imgUrl, longDescription, githubLink }) => {

    const colors = ["#396169", "#74917A", "#740F00", "#D58CA4", "#AA4D83", "#A3ABBD"]
    //#005B4C, #C3FCF2, #740F00, #D58CA4, #005B4C


    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const hoverColor = getRandomColor();

    const getLongDescriptionColor = () => {
        if (hoverColor == "#740F00" || hoverColor == "#396169") {
            return "#fff";
        }
        return "#000";
    }

    const longDescriptionTextColor = getLongDescriptionColor();

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <div className="proj-hover" style={{backgroundColor: hoverColor}}>
                    <p style={{color: longDescriptionTextColor}}>{longDescription}</p>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;
