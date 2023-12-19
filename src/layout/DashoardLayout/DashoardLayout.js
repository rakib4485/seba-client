import React, { useContext } from 'react';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useDoctor from '../../hooks/useDoctor';
import useUser from '../../hooks/useUser';
import { FaUserAlt } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";

const DashoardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);
  const [isDoctor] = useDoctor(user?.email);
  const [isUser] = useUser(user?.email);

    return (
        <div>
            <Navbar/>
            <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className='mt-5 md:w-[280px] px-5 border-b-2 pb-5 '>
                        <div className="avatar">
                            <div className="w-24 ml-16 mask mask-hexagon">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt='' /> :
                                        <FaUserAlt className='text-[65px] ml-2 mt-4' />
                                }
                            </div>
                            <MdEdit className='text-center text-2xl cursor-pointer z-[50]' onClick={() => document.getElementById('image-modal').showModal()} />
                        </div>
                        <h3 className={`text-lg font-semibold  text-center ${user?.displayName.length > 15 && 'tooltip'}`} data-tip={`${user?.displayName}`}>{user.displayName}</h3>
                        <p className='flex justify-center items-center mt-3 text-lg font-semibold'><span>Type : {
                            (isAdmin || isDoctor ) ? <>{isAdmin && 'Admin'} {isDoctor && 'Doctor'} </> : 'User'
                        }
                        </span>
                            {/* {
                                (!isAdmin && !isDoctor) &&
                                <button className="btn btn-xs" onClick={() => document.getElementById('owner-modal').showModal()} >Owner Request</button>
                            } */}


                        </p>
                    </div>
            <div className='text-lg'>
              {
                <li><Link to='/dashboard'>My Appointment</Link></li>
              }
              
              {
                isDoctor && <>
                <li><Link to='/dashboard/myBookings'>My Patient</Link></li>
                </>
              } 
              {
                isAdmin &&  <>
                <li><Link to='/dashboard/allBookings'>All Bookings</Link></li>
                <li><Link to='/dashboard/allusers'>Users List</Link></li>
                <li><Link to='/dashboard/adddoctors'>Add A Doctor</Link></li>
                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
              </>
              }
              {/* <li><Link to='/dashboard/appointment'>Appointments</Link></li> */}
            </div>
          </ul>

        </div>
      </div>
        </div>
    );
};

export default DashoardLayout;