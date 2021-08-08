import React, {  useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'


const TicTacToe = () => {

    const [tic, setTic] = useState('O')
    let palyOptions = ['O', 'X']

 //Clears board on page load
 useEffect(() => {
    setTic('')
  },[])

// Handles player click - still testing final solution - currently both moves onClick
 const handleClick = () => {
    
    if ( tic === '') {
        setTic(palyOptions[0])
    } else  if (tic === 'O'){    
        setTic(palyOptions[1])
    } else {
        setTic(palyOptions[0])
    }
 }



    return(
        <div className='ticContainer'>
            <h1>TicTacToe</h1>

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



            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default TicTacToe