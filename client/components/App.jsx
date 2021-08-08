import React from 'react'
import { Route } from 'react-router-dom'

//Components
import Menu from './Menu'
import Calc from './Calc'
import TicTacToe from './TicTacToe'
import Project2 from './Project2'
import Project3 from './Project3'


function App () {

      return(
      <div className='app'>
        <Route exact path='/' component={Menu} />
        <Route exact path='/calc' component={Calc} />
        <Route exact path='/tictactoe' component={TicTacToe} />
        <Route exact path='/project2' component={Project2} />
        <Route exact path='/project3' component={Project3} />
      </div>
  )
}

export default App
