import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FirebaseContext, AuthContext } from './Store/Context'
import Context from './Store/Context';

import firebase from './firebase/config'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <BrowserRouter>
    <FirebaseContext.Provider value={firebase}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  // </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
