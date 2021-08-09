import React, { useState, useEffect } from 'react'



const Cell = () => {


    const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    
    const [styleColor, setStyleColor] = useState(randomHexColor)

    let style = {
        height: '100px',
        width: '1205px',
        backgroundColor: styleColor
    }

    const mouseEnter = () => {
        setStyleColor(randomHexColor)
    }

    return (
        <>
         <div style={style} onMouseEnter={mouseEnter}></div>
        </>
    )
}

export default Cell