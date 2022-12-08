import { useState } from "react";
import app from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
    let navigate = useNavigate();
    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prev => {
            return {...prev, [name]: value}
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const authentication = getAuth(app);
        createUserWithEmailAndPassword(authentication, inputs.email, inputs.password).then(
            response => {
                navigate("/login");
            }
        ).catch(error => {
            if (error.code === "auth/email-already-in-use") {
                toast.error("Email already exists");
            }
        });

        setInputs({
            fname: "",
            lname: "",
            email: "",
            password: ""
        });
    }
    return (
        <div className="enabler__forms">
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="enabler__form-group">
                    <label htmlFor="fname">First Name</label>
                    <input required onChange={handleChange} value={inputs.fname} name="fname"  id="fname" type="text" placeholder="First Name" />
                </div>
                <div className="enabler__form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input required onChange={handleChange} value={inputs.lname}  name="lname"  id="lname" type="text" placeholder="Last Name" />
                </div>
                <div className="enabler__form-group">
                    <label htmlFor="email">Email</label>
                    <input required onChange={handleChange} value={inputs.email}  name="email"  id="email" type="email" placeholder="Your Email" />
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
            <ToastContainer />
        </div>
    )
}

export default Signup;