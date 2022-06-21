import React,{useEffect} from 'react';
import {Route , Switch} from 'react-router-dom'
import Home from './Home'
import DogPage from './DogPage';
import CatPage from './CatPage'
import Favorites from './Favorites';

function App() {

  useEffect(()=>{
    console.log('insdie app')
  },[])

  return (
    <div className="App">
      {/* <NavBar/> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/dogs'>
          <DogPage/>
        </Route>
        <Route exact path='/cats'>
          <CatPage/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
