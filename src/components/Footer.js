/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Facebook from "../img/celebs/facebook@2x.png"
import Instagram from "../img/celebs/instagram@2x.png"
import Twitter from "../img/celebs/twitter@2x.png"

const Footer = () => {
    return (
        <div className="footer">
            <p className="galleri">galleri5</p>
            <div className="lists">
                <div>
                    <a href="">ABOUT US</a>
                    <br/>
                    <br/>
                    <a href="">PRICING</a>
                    <br/>
                    <br/>
                    <a href="">FAQ</a>
                </div>
                <div>
                    <a href="">CONTACT US</a>
                    <br/>
                    <br/>
                    <a href="">PRIVACY POLICY</a>
                    <br/>
                    <br/>
                    <a href="">TERMS OF SERVICE</a>
                </div>
                <div>
                    <a href="">CASE STUDIES</a>
                    <br/>
                    <br/>
                    <a href="">TESTIMONAL</a>
                    <br/>
                    <br/>
                    <a href="">BLOGS</a>
                </div>
            </div>
            <p className="explore">Explore as</p>
            <button className="btn1">I'M AN INFLUENCER</button>
            <button className="btn1">I REPRESENT BRAND</button>
            <div className="social">
                <a href="https://www.facebook.com"><img src={Facebook} alt=""/></a>
                <a href="https://www.instagram.com"><img src={Instagram} alt=""/></a>
                <a href="https://www.twitter.com"><img src={Twitter} alt=""/></a>
            </div>
            
        </div>
    )
}

export default Footer