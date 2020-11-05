/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Google from "../img/social icons/Google.png"
import Instagram from "../img/social icons/Instagram.png"
import Facebook from "../img/social icons/Facebook.png"
import Twitter from "../img/social icons/Twitter.png"



const Icons = () => {
    return (
        <div>
            <a href="">
                <img className="icons" src={Google} alt=""/>
            </a>
            <a href="">
                <img className="icons" src={Instagram} alt=""/>
            </a>
            <a href="">
                <img className="icons" src={Facebook} alt=""/>
            </a>
            <a href="">
                <img className="icons" src={Twitter} alt=""/>
            </a>
        </div>
    )
}

export default Icons