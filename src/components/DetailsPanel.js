import React from "react";
import { motion } from "framer-motion";

const DetailsPanel = ({ item }) => {
  return (
    <motion.div
      className="details-panel"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>{item.name}</h3>
      <p><strong>Email:</strong> {item.email}</p>
      <p><strong>Phone:</strong> {item.phone}</p>
      <p><strong>Company:</strong> {item.company?.name}</p>
    </motion.div>
  );
};

export default DetailsPanel;
