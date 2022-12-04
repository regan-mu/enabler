import {QuizCard} from "../../components";
import categories from "../../quiz-catergories";
import uniqid from 'uniqid';
import "./landing.css";
import { enablerLogo } from "../../assets";
const Landing = () => {
    return (
        <div className="enabler__landing">
            <div className="enabler__nav">
                <img src={enablerLogo} alt="Enabler logo"/>
                <div className="enabler__login-signup">
                    <a className="btn btn--login" href="/login">Login</a>
                    <a className="btn btn--signup" href="/signup">Signup</a>
                </div>
            </div>
            <div className="enabler__category-cards">
                {
                    categories.map(cat => <QuizCard key={uniqid()} image={cat.image} name={cat.name}/>)
                }
            </div>
        </div>
    )
}

export default Landing;