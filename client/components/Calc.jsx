import e from 'express'
import React, { useState } from 'react'


const Calc = () => {

    const [num, setNum] = useState('')


    const handleClick = (e) => {
        e.preventDefault
        setNum(e.target.innerText)
    }


    return (

        <div className='calcContainer'> 

        <h1>Calc</h1>

            <input
                type='text'
                placeholder='Something'
                dir="rtl"
                value={num}
            ></input>

            <button onClick={() => {handleClick(e)}}>1</button>
            <button>2</button>
            <button>+</button>
            <button>=</button>
        </div>
    )
}

export default Calc