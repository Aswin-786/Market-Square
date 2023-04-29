import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';

function App() {

  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
    <>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/view'>
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </>
  )
}

export default App;
