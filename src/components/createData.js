import React from "react"
import Item from "./Item"

function createData(data) {
    return ( 
        <Item 
        key = { data.id }
        logo = { data.logo }
        ceo = {data.ceo}
        name = { data.name }
        designation = { data.designation }
        description = { data.description }
        />
    )
}

export default createData