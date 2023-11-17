import React from 'react';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashoardLayout = () => {
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
            <div className='text-lg'>
              <li><Link to='/dashboard'>My Appointment</Link></li>
               <>
                  <li><Link to='/dashboard/allusers'>Users List</Link></li>
                  <li><Link to='/dashboard/adddoctors'>Add A Doctor</Link></li>
                  <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                </>
              {/* <li><Link to='/dashboard/appointment'>Appointments</Link></li> */}
            </div>
          </ul>

        </div>
      </div>
        </div>
    );
};

export default DashoardLayout;