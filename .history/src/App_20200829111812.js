import React from 'react';
import {Switch  , Route} from 'react-router-dom';
import FavImg from './components/favimages/FavImg';
import About from './components/about/About';
import ChangeNumber from './components/changenumber/ChangeNumber';
i

import './App.css';
import BottomAppBar from './components/navbar/Navbar'
import ImageList from './components/imageList/ImageList'

function App() {
  return (
    <div className="App">
        <BottomAppBar/>
          <Switch>
              <Route exact path="/" component={ImageList}/>
              <Route exact path="/favimages" component={FavImg}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/change" component={ChangeNumber}/>
          </Switch>
        
        
       
    </div>
  );
}

export default App;
