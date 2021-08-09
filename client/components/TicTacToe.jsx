import React, {  useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Strech ideas:
//Game timer 


const TicTacToe = () => {

    const [tic, setTic] = useState('')
    const [num, setNum] = useState(0)

    let move1 = 'O'
    let move2 = 'X'

 //Clears board on page load
 useEffect(() => {
    setTic('')
  },[])

// Handles player click - still testing final solution - currently both moves onClick
// For each click increase num 
// If num is even setTic O
// If num is odd setTic X
 const handleClick = () => {
     
    if (num % 2 == 0) {
        setTic(move1)
        setNum(num + 1)
    } else if (num % 2 != 0) {
        setTic(move2)
        setNum(num + 1)
    }
 }

 //Sets state back to empty string to clear board - strech idea: resets clock once its added
const newGame = () => {
    setTic('')
}

    return(
        <div className='ticContainer'>
            <h1>TicTacToe</h1>
            <h3>Move count: {num}</h3>
                <div className='ticGameContainer'>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                    <div className='ticCell' onClick={handleClick}>
                        <h3 className='ticValue'>{tic}</h3>
                    </div>
                </div>
                <button onClick={newGame}>New Game!</button>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default TicTacToe