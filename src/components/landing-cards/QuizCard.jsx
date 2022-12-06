import "./quizCard.css";
import { Link } from "react-router-dom";
const LandingCard = ({image, name}) => {
    return (
        <Link to={`/quizzes/${name.toLowerCase()}`} className="enabler__quiz-card">
            <img src={image} alt={name} />
            <div className="enabler__category">
                <h3>{name}</h3>
            </div>
        </Link>
    )
}

export default LandingCard;