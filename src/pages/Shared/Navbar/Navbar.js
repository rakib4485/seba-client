import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () =>{
    logOut()
    .then( ()=>{

    })
    .then(()=>{})
  }
    const menuItems = <React.Fragment>
      <li><Link to="/">Home</Link></li>  
      <li><Link to='/meditation'>Meditation</Link></li> 
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li>
        {
          user?.uid? 
          <>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {/* <p>{user?.displayName}</p> */}
          <button onClick={handleLogout} className="btn btn-active btn-ghost rounded-md">Log Out</button>
          </>:
          <Link to="/login">Login</Link>
        }
      </li>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link className=" normal-case font-semibold text-3xl title ml-2">Psychology Buzz</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end mr-2">
  {
          user?.uid? 
          <>
          <p>{user?.displayName}</p>
          <button onClick={handleLogout} className="btn btn-active btn-ghost rounded-md ml-3">Log Out</button>
          </>:
          <Link className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-10 rounded-md font-semibold' to="/login">Login</Link>
        }
  </div>
</div>
    );
};

export default Navbar;