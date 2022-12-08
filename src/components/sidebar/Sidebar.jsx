import { Link } from "react-router-dom";
import categories from "../../quiz-catergories";
import {menu, menu_up} from "../../assets"
import "./sidebar.css";
import uniqid from "uniqid";
import { useState } from "react";

const SideBar = ({category, handleRestart}) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        setShowMenu(prev =>  !prev)
    }
    const handleLinkClick = () => {
        handleRestart();
        setShowMenu(false);
    }
    return (
        <div className="enabler__sidebar">
            <h2>{category.toUpperCase()}</h2>
            <div className="enabler__show-more" onClick={handleMenu}>
                <h4>More Games</h4>
                <img src={showMenu ? menu_up : menu} alt="" />
            </div>
            <div className="enabler__more-games_container">
                {showMenu ? 
                    <div className="enabler__more-games">
                        {categories.map(cat => <Link onClick={handleLinkClick} key={uniqid()} to={`/quizzes/${cat.name.toLowerCase()}`} >{cat.name}</Link>)}
                    </div> : null
                }
            </div>
            <div className="enabler__restart">
                <button onClick={handleRestart}>Restart Game</button>
            </div>
        </div>
    )
}
export default SideBar;