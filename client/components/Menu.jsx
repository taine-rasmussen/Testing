import React from 'react'


//Components
import Calc from './Calc'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

const Menu = () => {

    return (
        <div className='menuContainer'> 
            <h1 className='menuTitle'>Projects?</h1>
            <button className='menuBtn'>Calc</button>
            <button className='menuBtn'>Project1</button>
            <button className='menuBtn'>Project2</button>
            <button className='menuBtn'>Project3</button>
        </div>
    )
}

export default Menu