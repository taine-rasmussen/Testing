import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import Cell from './Cell'


//Stretch:
// Add input on page that allows user to change amount of total cells-State


const Kaleidoscope = () => {

    const divStyle = {
        border: '10px solid #994347',
        margin: '100px',
      }

    return(
        <div>
            <h1>Kaleidoscope</h1>

            <div style={divStyle}>
                {Array(10).fill(<Cell />)}
            </div>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default Kaleidoscope