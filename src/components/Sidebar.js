import React from 'react';

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <button onClick={onItemClick}>Open Third Pane</button>
    </div>
  );
};

export default Sidebar;
