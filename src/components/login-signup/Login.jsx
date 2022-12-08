import { useState } from "react";
import "./login-signup.css";
import app from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    // Handle input changes
    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prev => {
            return {...prev, [name]: value};
        });
    }

    // Handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        const authentication = getAuth(app);
        signInWithEmailAndPassword(authentication, inputs.email, inputs.password).then(
            response => {
                navigate("/");
                sessionStorage.setItem(
                    'Auth Token', response._tokenResponse.refreshToken
                );
                sessionStorage.setItem(
                    'Email', response.user.email
                );
            }
        ).catch(error => {
            if (error.code === "auth/wrong-password") {
                toast.error("Wrong Password");
            }
            if (error.code === "auth/user-not-found") {
                toast.error("User doesn't exist. Confirm email");
            }
        });
        setInputs({
            email: "",
            password: ""
        });

    }
    return (
        <div className="enabler__forms">
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="enabler__form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} required name="email" value={inputs.email} id="email" type="email" placeholder="Email" />
                </div>
                <div className="enabler__form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} required name="password" value={inputs.password} id="password" type="password" placeholder="Password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="enabler__more">
                <p>Don't have an account? </p><a href="/signup">Register</a>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;