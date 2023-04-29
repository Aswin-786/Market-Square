import React from 'react';
import './Header.css';
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

  // logout
  function logout() {
    firebase.auth().signOut()
    history.push('/login')
  }
  return (
    <div className="p-2 bg-slate-50 fixed w-full z-50 sm:px-5">
      <div className=" w-full flex justify-between items-center">
        <div className="font-extrabold text-2xl">
          Market Square
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
          {
            // if user diplay name otherwise show login
            user
              ?
              <span className='user'>
                {user.displayName}
              </span>
              :
              <span
                className='login'
                onClick={() => history.push('/login')} >
                Login
              </span>
          }
          {
            // logout section
            user
            &&
            <span
              className='logout'
              onClick={logout}>
              Logout
            </span>
          }
        </div>
        <div
          onClick={() => history.push('/create')}
          className="sellMenu">
          <SellButton></SellButton>
          <div className="sellButton">
            <SellButtonPlus></SellButtonPlus>
            <span className='ml-2'>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
