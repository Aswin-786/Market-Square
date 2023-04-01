import React from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../Store/Context'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  // accessing form details
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  // firebase context
  const { firebase } = useContext(FirebaseContext)
  // for redirecting to pages
  const history = useHistory()
  // login function
  const handleLogin = (e) => {
    // preventing reloading
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/')
    }).catch((error) => alert(error.message))
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={() => history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}
export default Login;