


//======================================================================================================



import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.png';
import basket_icon from '../assets/basket_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleHomeClick = () => {
    setMenu("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      
      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={handleHomeClick} className={menu === "home" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
            Menu
          </a>
        </li>
        <li>
          <a href="#app-download" onClick={() => setMenu("mob-app")} className={menu === "mob-app" ? "active" : ""}>
            Mobile App
          </a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
            Contact Us
          </a>
        </li>
      </ul> 
      
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <img src={search_icon} alt="Search" />
        </div>

        <div className="navbar-cart">
          <img src={basket_icon} alt="Cart" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;







//============================================================================================




// import React, { useContext, useEffect, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link, useNavigate } from 'react-router-dom'
// import { StoreContext } from '../../Context/StoreContext'

// const Navbar = ({ setShowLogin }) => {

//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate('/')
//   }

//   return (
//     <div className='navbar'>
//       <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
//       <ul className="navbar-menu">
//         <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
//         <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>menu</a>
//         <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>mobile app</a>
//         <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <Link to='/cart' className='navbar-search-icon'>
//           <img src={assets.basket_icon} alt="" />
//           <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
//         </Link>
//         {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
//           : <div className='navbar-profile'>
//             <img src={assets.profile_icon} alt="" />
//             <ul className='navbar-profile-dropdown'>
//               <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
//               <hr />
//               <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
//             </ul>
//           </div>
//         }

//       </div>
//     </div>
//   )
// }

// export default Navbar
