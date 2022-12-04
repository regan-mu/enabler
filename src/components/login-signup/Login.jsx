import { useState } from "react";
import "./login-signup.css";



const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    // Handle input changes
    const handleChange = e => {
        const {name, value} = e.target;
        setInputs(prev => {
            return {...prev, [name]: value}
        });
    }

    // Handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        setInputs({
            username: "",
            password: ""
        });

    }
    return (
        <div className="enabler__forms">
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="enabler__form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} required name="username" value={inputs.username} id="username" type="text" placeholder="Your Username" />
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
        </div>
    )
}

export default Login;