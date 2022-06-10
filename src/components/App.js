import React from 'react';
import {Route , Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage'

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/page2'>
          <SecondPage/>
        </Route>
        <Route exact path='/page3'>
          <ThirdPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
