import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let Navigate = useNavigate();


    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        if (json.success) {
            //save the authtoken and redirect
            localStorage.setItem("token", json.authtoken);
            props.showAlert("Loggedin Successfully", "success");
            Navigate('/');
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="email" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} autoComplete="true" onChange={onChange} id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>
    )
}

export default Login
