// import React, { useState } from 'react'
// import Home from './pages/Home/Home'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar'
// import { Route, Routes  } from 'react-router-dom'

// const App = () => {

//   const [showLogin,setShowLogin] = useState(false);

//   return (
//     <>
//     <ToastContainer/>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
//       <div className='app'>
//         <Navbar setShowLogin={setShowLogin}/>
//         <Routes>
//           <Route path='/' element={<Home />}/>
//           <Route path='/cart' element={<Cart />}/>
//           <Route path='/order' element={<PlaceOrder />}/>
//           <Route path='/myorders' element={<MyOrders />}/>
//           <Route path='/verify' element={<Verify />}/>
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App


import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
 import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;






// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify'; // Check if this is installed
// import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toastify

// // Import Components
// import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// import MyOrders from './pages/MyOrders/MyOrders';
// import Verify from './pages/Verify/Verify';
// import LoginPopup from './components/LoginPopup'; // Ensure this file exists
// import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       <ToastContainer />
//       {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
//       <div className='app'>
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/order' element={<PlaceOrder />} />
//           <Route path='/myorders' element={<MyOrders />} />
//           <Route path='/verify' element={<Verify />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;
