/* eslint-disable react/prop-types */
import React from "react";
import useCursor from "../../hooks/useCursor";

const NavOverlay = ({ isOpen, onClose }) => {
  useCursor();
  return (
    <div className={`nav-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </div>
  );
};

export default NavOverlay;
