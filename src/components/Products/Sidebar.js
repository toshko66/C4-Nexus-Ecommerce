import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import { FaFilter } from 'react-icons/fa';
import '../../css/Sidebar.css';

const Sidebar = (props) => {
const [showSidebar, setShowSidebar] = useState(false);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

const handleResize = () => {
setWindowWidth(window.innerWidth);
if (window.innerWidth >= 1024) {
    setShowSidebar(false);
}
};

const closeSidebar = () => {
setShowSidebar(false);
};

useEffect(() => {
window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);

return (
<div>
    {windowWidth < 1024 && (
    <button className='Sidebar-button' onClick={() => setShowSidebar(!showSidebar)}>Toggle Filters  <FaFilter/></button>
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
