import React, { useState } from 'react';

import NavBar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';


const Bar: React.FC = () => {
    const [isSideBarOpen, setSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSideBarOpen);
    }

    return (
        <>
            <div>
                <NavBar toggleSidebar={toggleSidebar} />
                <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar}/>
                
            </div>
        </>
    );
}

export default Bar;