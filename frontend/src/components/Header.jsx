// import React from 'react';
// import './Header.scss';

// const Header = () => {
//     return (
//         <header className='header'>
//             <div className='header-contents'>
//                 <h2>Order Your Favorite Food Now</h2>
//                 <p>
//                     Indulge in a variety of delicious dishes made with fresh ingredients and expert craftsmanship.
//                     Satisfy your cravings and experience the best flavors, delivered right to your doorstep.
//                 </p>
//                 <button className="view-menu-btn">View Menu</button>
//             </div>
//         </header>
//     );
// }

// export default Header;


import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='overlay'></div>
            <div className='header-contents'>
                <h2>Delicious Food, Delivered Fast!</h2>
                <p>Explore a variety of mouth-watering dishes, crafted with love <br></br>
                     and delivered with care. 
                    Your next favorite meal is just a click away.
                </p>
                <button className="view-menu-btn">View Menu</button>
            </div>
        </header>
    );
}

export default Header;
