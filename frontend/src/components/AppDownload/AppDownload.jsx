import React from 'react';
import  './AppDownload.scss'     // ✅ Corrected SCSS import

import app_store from '../../assets/app_store.png'; // ✅ Corrected Image Import
import playstore from '../../assets/play_store.png';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Tomato App</p>
            <div className="app-download-platforms">
                <img src={app_store} alt="App Store" />
                <img src={playstore} alt="Play Store" />
            </div>
        </div>
    );
}

export default AppDownload;
