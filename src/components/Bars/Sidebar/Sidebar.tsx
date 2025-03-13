import React from 'react';
import '../Bar.css';
import SearchText from './SearchText';
import SearchCategory from './SearchCategory';
import SearchCheck from './SearchCheck';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={toggleSidebar}>
        ×
      </button>
      {isOpen && (
                <div className={'filters'}>
                    <SearchText />
                    <SearchCheck />
                    <SearchCategory />
                </div>
            )}
    </div>
  );
};

export default Sidebar;