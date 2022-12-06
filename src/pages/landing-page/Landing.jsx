import {QuizCard} from "../../components";
import categories from "../../quiz-catergories";
import uniqid from 'uniqid';
import "./landing.css";
import {Nav} from "../../components";
const Landing = () => {
    return (
        <div className="enabler__landing">
            <Nav />
            <div className="enabler__category-cards">
                {
                    categories.map(cat => <QuizCard key={uniqid()} image={cat.image} name={cat.name}/>)
                }
            </div>
        </div>
    )
}

export default Landing;