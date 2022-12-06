import "./nav.css";
import { enablerLogo } from "../../assets";

const Nav = () => {
    return (
        <div className="enabler__nav">
            <img src={enablerLogo} alt="Enabler logo"/>
            <div className="enabler__login-signup">
                <a className="btn btn--login" href="/login">Login</a>
                <a className="btn btn--signup" href="/signup">Signup</a>
            </div>
        </div>
    )
}

export default Nav;