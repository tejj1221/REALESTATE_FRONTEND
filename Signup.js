

import './Signup.css'


const Signup = () => {
    
    return (
        <div className="signupcontainer">
            <div className="box">
                <h1 className="logo">Logo</h1>
                <p className="para">Create New Account</p>
                <div id="email">
                    <input className="signup-input" type="email" required placeholder="Email ID" />
                </div>
                <div id="password">
                    <input className="signup-input" type="password" required placeholder="Password" id="password" />
                </div>
                <div id="confirmpassword">
                    <input className="signup-input" type="password" required placeholder=" Confirm password" id=" confirm password"  />
                </div>
                <button className="sign" >Sign Up</button>
            </div>
            <p className="foot" >Sign-in</p>
        </div>
    )
}

export default Signup