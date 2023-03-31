import React from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';

function Header() {
  const { user } = React.useContext(AuthContext)
  const { firebase } = React.useContext(FirebaseContext)
  const history = useHistory()
  function logout() {
    firebase.auth().signOut()
    history.push('/login')
  }
  return (
    <div className="p-2 bg-slate-50 fixed w-full z-50">
      <div className=" w-full flex justify-between items-center">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="w-64 h-12 flex items-center px-2 border-2 border-solid border-gray-900 rounded-md bg-white selection:border-cyan-400 selection:outline-cyan-400">
          <Search></Search>
          <input className='border-transparent outline-transparent' type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? <span>welcome:: {user.displayName} </span> :
            <span onClick={() => history.push('/login')} >Login</span>}
          <hr />
        </div>
        {user && <span onClick={logout}>Logout</span>}
        <div onClick={() => history.push('/create')} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;