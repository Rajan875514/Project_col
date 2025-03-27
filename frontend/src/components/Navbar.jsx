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






//=========================================================================================







// import React, { useState } from 'react';
// import './Navbar.scss'
// import logo from '../assets/logo.png';
// import search_icon from '../public/search_icon.png';
// import basket_icon from '../public/basket_icon.png';

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");

//   return (
//     <div className="navbar">
//       <img src={logo} alt="Logo" className="logo" />
//       <ul className="navbar-menu">
//         <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
//         <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
//         <li className={menu === "track" ? "active" : ""} onClick={() => setMenu("track")}>Track</li>
//         <li className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact Us</li>
//       </ul>
//       <div className="navbar-right">
//         <img src={search_icon} alt="Search" />
//         <div className="navbar-search-icon">
//           <img src={basket_icon} alt="Cart" />
//           <div className="dot"></div>
//         </div>
//         <button>Sign In</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.png';
import basket_icon from '../assets/basket_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
        <li className={menu === "track" ? "active" : ""} onClick={() => setMenu("track")}>Track</li>
        <li className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={basket_icon} alt="Cart" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
