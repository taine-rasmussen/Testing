import React from 'react'
import { Route, Link } from 'react-router-dom'


const TicTacToe = () => {

    return(
        <div className='ticContainer'>
            <h1>TicTacToe</h1>

                <div className='ticGameContainer'>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                    <div className='ticCell'></div>
                </div>



            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default TicTacToe