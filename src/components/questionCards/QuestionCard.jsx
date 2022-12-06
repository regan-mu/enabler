import {circle} from "../../assets";
import "./questionCard.css";
const QuestionCard = ({handleClick, image, id}) => {
    return (
        <div className="enabler__qn-card" onClick={(e) => {handleClick(e)}}>
            <img id={id} src={image} />
        </div>
    )
}

export default QuestionCard;