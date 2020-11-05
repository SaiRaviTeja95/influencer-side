import React from "react";
import image from "../img/data/circle.png"
import register from "../img/data/register.png"
import campaign from "../img/data/campaign.png"
import money from "../img/data/money.png"

function Content() {
    return (
        <div className="content">
            <p className="works">How it Works!</p><br /><br />
            <hr />
            <div className="sect">
                <img src={image} alt=""/>
                <img className="register" src={register} alt=""/>
                <p className="subscribe">Register</p>
                <p className="campaigns">Let us know your basic details and genres that you are interested in. And then you're good to go. You can link and access all your social media accounts at our platform.</p>
            </div>
            <div className="sect">
                <img src={image} alt=""/>
                <img className="register" src={campaign} alt=""/>
                <p className="subscribe">Apply for Campaigns</p>
                <p className="campaigns">Apply for the latest campaigns from your favourite brands and start creating some amazing content on approval of your application from the brand.</p>
            </div>
            <div className="sect">
                <img src={image} alt=""/>
                <img className="register" src={money} alt=""/>
                <p className="subscribe">Analyze & Grow</p>
                <p className="campaigns">You can analyze your performance  for each campaign! And learn to work on your shortcomings. You can also register with influencer academy to  grow into a top creator!</p>
            </div>
        </div>
    );
}


export default Content;