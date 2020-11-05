import React from 'react';
import Icons from "./MediaIcons"
import logo from "../img/influencer/Brand-Page-Banner-graphics@3x.png";

const Form = () => {
    return (
        <div>
            <form className="formdata">
                <img className="brandLogo" src={logo} alt=""/>
                <div className="Data">
                    <label className="value" htmlFor="email">Email ID</label><br/>
                    <input className="text" type="email" placeholder="Enter your email address"/><br/>
                    <label className="value" htmlFor="password">Password</label><br/>
                    <input className="text" type="password" placeholder="Enter your password"/><br/>
                    <button className="signButton"><p>SIGN UP/ IN</p></button>
                    <p className="or">OR</p>
                    <p className="SMA">Sign up/ In with Social Media Account</p>
                    <Icons />
                </div>
            </form>
        </div>
    )
}

export default Form;