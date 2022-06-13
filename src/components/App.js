import React from 'react';
import {Route , Switch} from 'react-router-dom'
import Home from './Home'
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage'
import Favorites from './Favorites';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/dogs'>
          <SecondPage/>
        </Route>
        <Route exact path='/cats'>
          <ThirdPage/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
