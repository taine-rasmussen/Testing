import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Menu from './Menu'
import Calc from './Calc'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'


function App () {

  return (
    <>
      <div className='app'>
        <Router >
          <Switch>
            <Route exact path='/'>
              <Menu />
            </Route>
            <Route path='/project1' >
              <Project1 />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App
