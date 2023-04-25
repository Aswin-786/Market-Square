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
    <div className="p-2 bg-slate-50 fixed w-full z-50 sm:px-5">
      <div className=" w-full flex justify-between items-center">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="w-64 h-12 flex flex-row items-center px-2 border-2 border-solid border-gray-900 rounded-md bg-white selection:border-cyan-400 selection:outline-cyan-400 md:flex  sm:hidden">
          <Search></Search>
          <input className='border-transparent outline-transparent' type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch md:flex sm:hidden ">
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
        <div className="language md:flex sm:hidden">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage border border-black border-x-transparent border-t-transparent ">
          {user ? <span className='md:block sm:hidden'>welcome: {user.displayName} </span> :
            <span onClick={() => history.push('/login')} >Login</span>}
        </div>
        {user && <span className='cursor-pointer' onClick={logout}>Logout</span>}
        <div onClick={() => history.push('/create')} className="sellMenu md:flex sm:flex">
          <SellButton></SellButton>
          <div className=" flex  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold tracking-widest text-sell">
            <SellButtonPlus></SellButtonPlus>
            <span className='ml-2'>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
