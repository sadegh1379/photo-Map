import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


import {DataContextProvider} from './dataContext'

ReactDOM.render(
 
       <DataContextProvider>
              <Router>
                 <App />
              </Router>
        </DataContextProvider>
 ,

  document.getElementById('root')
);
