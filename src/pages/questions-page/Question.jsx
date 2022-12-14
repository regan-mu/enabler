import "./question.css";
import { enablerLogo, account } from "../../assets";
import { useParams, useNavigate } from "react-router-dom";
import { QuestionCard, SideBar } from "../../components";
import questions from "../../questions";
import { useState, useEffect } from "react";
import getRandomItem from "../../utilities/getRandom";
import shuffleArray from "../../utilities/shuffleArray";
import uniqid from "uniqid";
import { music, close } from "../../assets";

const Question = () => {
    const {category} = useParams();
    const {qns, images} = questions[category];
    const [manageQuestions, setManageQuestions] = useState(qns);
    const [currentQn, setCurrentQn] = useState(getRandomItem(manageQuestions));
    const [score, setScore] = useState([]);
    const [restart, setRestart] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const Navigate = useNavigate();
    const email = sessionStorage.getItem("Email");


    // Play Game music
    const playMusic = () => {
        const audio = new Audio(music);
        audio.loop = true;
        audio.volume=0.1;
        audio.play();
    }
     
    // Protect this route
    // Check for login token
    useEffect(() => {
        const authToken = sessionStorage.getItem("Auth Token");
        if (authToken) {
            Navigate(`/quizzes/${category}`);
            playMusic();
        } 
        if(!authToken) {
            Navigate("/login");
        }
    }, []);

    // Handle Questions (Filter out Qns that have been displayed before)
    const handleQuestions = (e) => {
        // Handle Scoring
        setScore(prev => {
                if (manageQuestions.length !== 0) {
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
            setShowScore(prev => {
                if (manageQuestions.length !== 0 ) {
                    return prev;
                } else {
                    return !prev
                }
            });
        },
        [manageQuestions]
    );

    // Restart Game
    useEffect(() => {
        setManageQuestions(qns);
        setScore([]);
        setCurrentQn(getRandomItem(manageQuestions));
        setShowScore(false);
    }, [restart]);

    const handleRestart = () => {
        setRestart(prev => !prev);
    }
    return (
        <div className="enabler__question">
            <div className="enabler__question-header">
                <a  href="/"><img src={enablerLogo} alt="Enabler logo"/></a>
                <div className="enabler__username">
                    <img src={account} alt="Account"/>
                    <p>{email}</p>
                </div>
            </div>
            <div className="enabler__question-main">
                <SideBar category={category} handleRestart={handleRestart} />
                <div className="enabler__question-game">
                    <div className="enabler__question-top">
                        {currentQn ? <h3>{currentQn.qn}</h3>: null}
                    </div>
                    <div className="enabler__qn-score">
                        {score.map(sc => <span key={uniqid()}>{sc}</span>)}
                    </div>
                    <div className="enabler__answer-option">
                        {images.map(shape => {return <QuestionCard handleClick={handleQuestions} key={shape.label} id={shape.label} image={shape.image} />})}
                    </div>
                    {
                        showScore ? 
                            <div className="enabler__score-popup">
                                <img src={close} alt="close" onClick={() => {setShowScore(false)}}/>
                                <div className="enabler__score-popup-inner">
                                    <h3>Your score</h3>
                                    <h2>{score.filter(sc => {return sc==="✅"}).length}/{qns.length}</h2>
                                </div>
                            </div> : null
                            
                    }
                </div>
            </div>
        </div>
    )
}

export default Question;