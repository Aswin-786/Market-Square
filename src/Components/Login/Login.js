import React from 'react';
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
        <h1 className='md:text-4xl text-2xl text-center py-10 font-semibold'>Market Square</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email:</label>
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
          <label htmlFor="lname">Password:</label>
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
