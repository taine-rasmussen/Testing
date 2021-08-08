import React from 'react'
import { Route, Link } from 'react-router-dom'

//Components
import Calc from './Calc'
import TicTacToe from './TicTacToe'
import Project2 from './Project2'
import Project3 from './Project3'

const Menu = () => {

    return (
        <div className='menuContainer'> 
            <h1 className='menuTitle'>Projects?</h1>

            <Link to='/calc'><button className='menuBtn'>Calc</button></Link>
            <Link to='/tictactoe'><button className='menuBtn'>TicTacToe</button></Link>
            <Link to='/project2'><button className='menuBtn'>Project2</button></Link>
            <Link to='/project3'><button className='menuBtn'>Project3</button></Link>
        </div>
    )
}

export default Menu