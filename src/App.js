import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import DetailsPanel from "./components/DetailsPanel";
import "./App.css";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main-content">
          <MainContent onItemClick={handleItemClick} />
        </div>

        <AnimatePresence>
          {selectedItem && (
            <DetailsPanel key={selectedItem.id} item={selectedItem} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
