import React from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import profile_image from '../../assets/profile_image.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <img className='logo' src={logo} alt="Site logo" />
        <img className='profile' src={profile_image} alt="User profile" />
      </div>
    </div>
  );
};

export default Navbar;
