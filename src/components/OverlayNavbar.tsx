import React from "react";

const OverlayNavbar: React.FC = () => {
  return (
    <div className="overlay md:hidden">
      <p className="p-2 text-center">HOME</p>
      <p className="p-2 text-center">CATEGORIES</p>
      <p className="p-2 text-center">CONTACT</p>
    </div>
  );
};

export default OverlayNavbar;
