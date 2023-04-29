import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './Store/Context'
import Context from './Store/Context';
import firebase from './firebase/config'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <FirebaseContext.Provider value={firebase}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
   </BrowserRouter>

);

reportWebVitals();
