

// import React from 'react';
// import './Header.scss';

// const Header = () => {
//     return (
//         <header className='header'>
//             <div className='overlay'></div>
//             <div className='header-contents'>
//                 <h2>Delicious Food, Delivered Fast!</h2>
//                 <p>Explore a variety of mouth-watering dishes, crafted with love <br></br>
//                      and delivered with care. 
//                     Your next favorite meal is just a click away.
//                 </p>
//                 <button className="view-menu-btn">View Menu</button>
//             </div>
//         </header>
//     );
// }

// export default Header;







//================================================================================
import React, { useState, useEffect } from 'react';
import './Header.scss';

const images = [
    "/header2.png",
    "/header3.png",
    "/header.png"
];

const Header = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <header 
            className='header' 
            style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
            <div className='overlay'></div>
            <div className='header-contents'>
                <h2>Delicious Food, Delivered Fast!</h2>
                <p>Explore a variety of mouth-watering dishes, crafted with love <br />
                     and delivered with care. 
                    Your next favorite meal is just a click away.
                </p>
                <button className="view-menu-btn">View Menu</button>
            </div>
        </header>
    );
}

export default Header;
