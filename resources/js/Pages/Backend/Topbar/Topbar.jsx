import React from 'react';
// import { Inertia } from '@inertiajs/inertia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./topbar.css";  

const TopBar = () => {
  const handleNavigation = (route) => {
    Inertia.get(route);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Replace with your search handling logic
      console.log('Search:', event.target.value);
    }
  };

  return (
    <div className="topbar">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onKeyPress={handleSearch}
        />
      </div>
      <div className="menu">
        <div className="menu-item" onClick={() => handleNavigation('/profile')}>Profile</div>
        <div className="menu-item" onClick={() => handleNavigation('/notifications')}>
          <FontAwesomeIcon  icon={faBell} />
          <span>Notifications</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
