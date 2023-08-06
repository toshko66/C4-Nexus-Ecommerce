import React, { useState, useEffect } from 'react';
import Filters from '../Sorting/Filters';
import { FaFilter } from 'react-icons/fa';
import '../../css/Sidebar.css';

const Sidebar = (props) => {
// State for sidebar visibility
    const [showSidebar, setShowSidebar] = useState(false);

// State for window width to control responsiveness
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// Handle window resizing
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth >= 1024) {
        setShowSidebar(false);
        }
    };

// Close sidebar
    const closeSidebar = () => {
        setShowSidebar(false);
    };

// Add window resize event listener and clean up on unmount
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className=' Mobile-filters-wrapper'>
        {windowWidth < 1024 && (
            <button className='Sidebar-button' onClick={() => setShowSidebar(!showSidebar)}>
            Toggle Filters <FaFilter />
            </button>
        )}
        {windowWidth < 1024 && (
            <>
            <div className={`overlay ${showSidebar ? 'show' : ''}`} onClick={closeSidebar}></div>
            <div className={`Sidebar ${showSidebar ? 'show' : ''}`}>
                <button className='Sidebar-close-button' onClick={closeSidebar}>X</button>
                <Filters {...props} />
            </div>
            </>
        )}
        {windowWidth >= 1024 && <Filters {...props} />}
        </div>
    );
};

export default Sidebar;