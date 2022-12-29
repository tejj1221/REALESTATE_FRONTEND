
import React from "react"
import "./Login.css"

const Signin = () => {

    // 
    return (
        <div className="logincontainer">
            <div className="logbox">
                <h1 className="logologin">Logo</h1>
                <p className="paragraph2">Enter your credentials to access your account </p>
                <div>
                    <input className="logininput1" placeholder="Email ID" type="text" />
                </div>
                <div className="input-wrapper">
                    <input className="logininput2" placeholder="Password"    />
                    <button className="btn" >
                        
                    </button>
                </div>
                <button className="signin" >Sign In</button>
                <p className="account" >Sign up</p>
            </div>
            <div className="signin-setup">
                <span >Don't have an account?</span>
                <p className="blue" >Sign up</p>
            </div>
        </div>
    )
}

export default Signin