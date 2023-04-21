/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Signup.css';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom'

export default function Signup() {
  // setting values in form
  const [userName, setUserName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [password, setPassword] = React.useState('')
  // accessing firebase context
  const { firebase } = React.useContext(FirebaseContext)
  // fore redirecting to next page
  const history = useHistory()

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // adding userName to user for getting name in header 
        result.user.updateProfile({ displayName: userName })
          .then(() => {
            firebase.firestore().collection('users')
              .add({
                // adding details in firestore
                id: result.user.uid,
                userName: userName,
                phone: phone,
                email: email
              })
              .then(() => {
                // redirecting to login page
                history.push('/login')
              })
          })
      })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={userName}
            onChange={(e) => { setUserName(e.target.value) }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname1"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="name"
            name="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="name1"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={() => history.push('/login')}>Login</a>
      </div>
    </div>
  );
}