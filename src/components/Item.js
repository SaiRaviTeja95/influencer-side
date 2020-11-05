import React from "react"

function Item(props) {
    return(
        <div className="field">
            <img className="logo" src={props.logo} alt=""/>
            <img className="ceo" src={props.ceo} alt=""/>
            <p className="infName">{props.name}</p>
            <p className="company">{props.designation}</p>
            <p className="connect">{props.description}</p>
        </div>
    )
}

export default Item;