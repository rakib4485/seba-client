import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
      .then(() => {

      })
      .then(() => { })
  }
  const menuItems = <React.Fragment>
    <li><Link to="/">Home</Link></li>
    <li><Link to='/meditation'>Meditation</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/appointment'>Appointment</Link></li>
    <li><Link to='/post'>Post</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
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
        <ul className="flex gap-4 font-semibold menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end mr-5">
        {user?.uid ? (
          <>

            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="rounded-full">
                {
                  user?.photoURL ? (
                    <>

                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={user.photoURL} alt='' />
                        </div>
                      </div>
                    </>
                  ) :
                    (
                      <FaUserAlt className='w-12 h-12' />
                    )
                }
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box -ml-24 w-44 z-50">
                <li>
                  <Link to="/dashboard" className='text-black'>My Dashboard</Link>
                </li>
                <li className='text-center'>
                  <Link className='text-white text-center bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold rounded' onClick={handleLogout}>Log Out</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <><Link to='/login'>
            <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 font-semibold rounded'>Log In</button>
          </Link></>
        )}

      </div>
    </div>
  );
};

export default Navbar;