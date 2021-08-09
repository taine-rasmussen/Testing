import React, { useState, useEffect } from 'react'



const Cell = () => {


    const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    
    const [styleColor, setStyleColor] = useState(randomHexColor)

    let style = {
        height: '100px',
        width: '1204px',
        backgroundColor: styleColor
    }


    useEffect(() => {
        setInterval(randomColour, 100);
    },[styleColor])

    const randomColour = () => {
        setStyleColor(randomHexColor())
    }

    const mouseEnter = () => {
        setStyleColor(randomHexColor)
    }

    const mouseClick = () => {
        setStyleColor('#000000')
    }

    const mouseLeave = () => {
        setStyleColor(randomHexColor)
    }

    return (
        <>
            <div
                style={style}
                onMouseEnter={mouseEnter}
                onClick={mouseClick}
                onMouseLeave={mouseLeave}
            ></div>
        </>
    )
}

export default Cell