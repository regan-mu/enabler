import { useState } from "react";

const Signup = () => {
    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        username: "",
        password: ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prev => {
            return {...prev, [name]: value}
        });
    }
    return (
        <div className="enabler__forms">
            <form className="input-form">
                <div className="enabler__form-group">
                    <label htmlFor="fname">First Name</label>
                    <input required onChange={handleChange} value={inputs.fname} name="fname"  id="fname" type="text" placeholder="First Name" />
                </div>
                <div className="enabler__form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input required onChange={handleChange} value={inputs.lname}  name="lname"  id="lname" type="text" placeholder="Last Name" />
                </div>
                <div className="enabler__form-group">
                    <label htmlFor="username">Username</label>
                    <input required onChange={handleChange} value={inputs.username}  name="username"  id="username" type="text" placeholder="Your Username" />
                </div>
                <div className="enabler__form-group">
                    <label htmlFor="password">Password</label>
                    <input required onChange={handleChange} value={inputs.password}  name="password" id="password" type="password" placeholder="Password" />
                </div>
                <button type="submit">Signup</button>
            </form>
            <div className="enabler__more">
                <p>Already have an account? </p><a href="/login">Login</a>
            </div>
        </div>
    )
}

export default Signup;