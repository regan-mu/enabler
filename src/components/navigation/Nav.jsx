import "./nav.css";
import { enablerLogo } from "../../assets";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const authToken = sessionStorage.getItem("Auth Token");
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/");
    }
    return (
        <div className="enabler__nav">
            <img src={enablerLogo} alt="Enabler logo"/>
            {
                !authToken ? 
                    <div className="enabler__login-signup">
                        <a className="btn btn--login" href="/login">Login</a>
                        <a className="btn btn--signup" href="/signup">Signup</a>
                    </div> :
                <button className="logout" onClick={logout}>Logout</button>
            }
        </div>
    )
}

export default Nav;