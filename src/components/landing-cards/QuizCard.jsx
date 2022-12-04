import shapes from "../../assets/shapes.png";
import "./quizCard.css";
const LandingCard = ({image, name}) => {
    return (
        <div className="enabler__quiz-card">
            <img src={image} alt={name} />
            <div className="enabler__category">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default LandingCard;