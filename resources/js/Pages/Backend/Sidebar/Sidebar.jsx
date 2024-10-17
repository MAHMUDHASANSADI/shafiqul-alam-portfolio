import React, { useState } from 'react';
import { FaTachometerAlt, FaRegSmileBeam } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link, useForm } from '@inertiajs/react';
import './sidebar.css';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { post } = useForm();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleNavigation = (route) => {
    post(route);
  };

  const handleLogout = () => {
    post('/logout', {}, {
      onSuccess: () => {
        post('/login');
      }
    });
  };

  return (
    <div className="sidebar">
      <ul className="menu-list">
        <li className='menu-item'>
          <img src="assets/images/logo.png" alt="Logo" />
        </li>
        <li className="menu-item">
          <div className="menu-title" onClick={() => handleNavigation('/dashboard')}>Dashboard</div>
        </li>
        <li className="menu-item">
          <div className="menu-title" onClick={() => toggleDropdown('home')}>Home</div>
          {openDropdown === 'home' && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation('/business/award')} ><a href={route('slider')}>Slider</a></li>
              <li onClick={() => handleNavigation('/business/achivement')}> <a href={route('hero')}>Hero Section</a> </li>
              <li onClick={() => handleNavigation('/business/degree')}> <a href={route('program')}>Latest Program</a> </li>
              <li onClick={() => handleNavigation('/business/recognition')}> <a href={route('event')}>Events</a> </li>
              <li onClick={() => handleNavigation('/business/miscellaneous')}><a href={route('gallery')}>Gallery</a></li>
              <li onClick={() => handleNavigation('/business/miscellaneous')}><a href={route('testimonial')}>Tesimonial</a></li>
              <li onClick={() => handleNavigation('/business/miscellaneous')}><a href={route('news')}>Recent News</a></li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <div className="menu-title" onClick={() => toggleDropdown('biography')}>Biography</div>
          {/* {openDropdown === 'biography' && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation('/biography/early-life')}>Early Life</li>
              <li onClick={() => handleNavigation('/biography/career')}>Career</li>
              <li onClick={() => handleNavigation('/biography/achievements')}>Achievements</li>
            </ul>
          )} */}
        </li>
        <li className="menu-item">
          <div className="menu-title" onClick={() => toggleDropdown('business')}>Business Activity</div>
          {openDropdown === 'business' && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation('/business/firm')}>CA Firm</li>
              <li onClick={() => handleNavigation('/business/bizz')}>Bizz Solutions PLC</li>
              {/* <li onClick={() => handleNavigation('/business/partners')}>Partners</li> */}
            </ul>
          )}
        </li>
        <li className="menu-item">
          <div className="menu-title" onClick={() => toggleDropdown('award')}>Award & Honor</div>
          {openDropdown === 'award' && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation('/business/award')}>Award</li>
              <li onClick={() => handleNavigation('/business/achivement')}>Achivement</li>
              <li onClick={() => handleNavigation('/business/degree')}>Honorary Degree</li>
              <li onClick={() => handleNavigation('/business/recognition')}>Recognition</li>
              <li onClick={() => handleNavigation('/business/miscellaneous')}>Miscellaneous</li>
            </ul>
          )}
        </li>

        <li className="menu-item">
          <div className="menu-title" onClick={() => toggleDropdown('video')}>Video</div>
          {openDropdown === 'video' && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation('/business/facebook')}>Facebook</li>
              <li onClick={() => handleNavigation('/business/youtube')}>Youtube</li>
              {/* <li onClick={() => handleNavigation('/business/partners')}>Partners</li> */}
            </ul>
          )}
        </li>
        
        <li className="menu-item">
          <div className="menu-title" onClick={() => toggleDropdown('news')}>News Coverage</div>
          {openDropdown === 'news' && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation('/settings/media')}>Print Media</li>
              <li onClick={() => handleNavigation('/settings/online')}>Online Newa</li>
            </ul>
          )}
        </li>

        <li className="menu-item">
          <div className="menu-title" onClick={() => toggleDropdown('settings')}>Settings</div>
          {openDropdown === 'settings' && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation('/settings/profile')}>Profile</li>
              <li onClick={() => handleNavigation('/settings/account')}>Account</li>
              <li onClick={() => handleNavigation('/settings/privacy')}>Privacy</li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <div className="menu-title" onClick={handleLogout}>Logout</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
