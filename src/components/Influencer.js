import React from "react"
import Carousel from "react-elastic-carousel"
import data from "./Data"
import createData from "./createData"
import Influ1 from "../img/celebs/Influ1.png"
import Influ2 from "../img/celebs/Influ2.png"
import Footer from "./Footer"

function Influencer() {
    return (
        <div className="influencer">
            <div className="line">
                <p className="brand">Brand That Trust Us!</p>
                <hr/>
                <Carousel itemsToShow={1}>
                    {data.map(createData)}
                </Carousel>
                <p className="posts">17,242 posts and counting</p>
                <p className="star">#galleri5influencestar</p>
                <img className="influ" src={Influ1} alt=""/>
                <img className="influ" src={Influ2} alt=""/>
                <img className="influ" src={Influ1} alt=""/>
                <img className="influ" src={Influ2} alt=""/>
                <img className="influ" src={Influ1} alt=""/>
                <button className="viewBtn"><p className="viewMore">VIEW MORE</p></button>
                <Footer />
            </div>
        </div>
    )
}

export default Influencer;