import "./question.css";
import { enablerLogo, account } from "../../assets";
import { useParams } from "react-router-dom";
import { QuestionCard } from "../../components";
import questions from "../../questions";
import { useState, useEffect } from "react";
import getRandomItem from "../../utilities/getRandom";
import shuffleArray from "../../utilities/shuffleArray";
import uniqid from "uniqid";

const Question = () => {
    const {category} = useParams();
    const {qns, images} = questions[category];
    const [manageQuestions, setManageQuestions] = useState(qns);
    const [currentQn, setCurrentQn] = useState(getRandomItem(manageQuestions));
    const [score, setScore] = useState([])

    // Handle Questions (Filter out Qns that have been displayed before)
    const handleQuestions = (e) => {
        // Handle Scoring
        setScore(prev => {
                if (manageQuestions.length !== 0){
                    return e.target.id === currentQn.ans ? [...prev, "✅"] : [...prev, "❌"];
                }
                else {
                    return prev;
                }
            }
        )
        // Remove answered Qn
        setManageQuestions(prev => {
            return manageQuestions.length !== 0 ? prev.filter(question => question !== currentQn): [];
        });
    }
    
    // Update the new question
    useEffect(
        () => {
            manageQuestions.length !== 0 ? setCurrentQn(getRandomItem(manageQuestions)): setCurrentQn(null);      
            shuffleArray(images);
        },
        [manageQuestions]
    )

    return (
        <div className="enabler__question">
            <div className="enabler__question-header">
                <a href="/"><img src={enablerLogo} alt="Enabler logo"/></a>
                <div className="enabler__username">
                    <img src={account} alt="Account"/>
                    <h4>John Doe</h4>
                </div>
            </div>
            <div className="enabler__question-top">
                <h2>{category.toUpperCase()}</h2>
                {manageQuestions.length !== 0 ? <h3>{currentQn.qn}</h3>: <h4>Finished! 👍</h4>}
            </div>
            <div className="enabler__qn-score">
                {score.map(sc => <span key={uniqid()}>{sc}</span>)}
            </div>
            <div className="enabler__answer-option">
                {images.map(shape => {return <QuestionCard handleClick={handleQuestions} key={shape.label} id={shape.label} image={shape.image} />})}
            </div>
        </div>
    )
}

export default Question;