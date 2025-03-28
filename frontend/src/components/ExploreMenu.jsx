
import React, { useRef } from 'react';
import './ExploreMenu.scss';
import { menu_list } from '../../src/assets/assets';

export const ExploreMenu = ({ category, setCategory }) => {
  const menuRef = useRef(null);

  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="explore-menu"   id='explore-menu'>
      <h2>Explore Our Menu</h2>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-container">
        <button className="scroll-button left" onClick={scrollLeft}>&#9664;</button>
        <div className='explore-menu-list' ref={menuRef}>
          {menu_list.map((item, index) => (
            <div
              key={index}
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
              onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&#9654;</button>
      </div>
    </div>
  );
};

export default ExploreMenu;
