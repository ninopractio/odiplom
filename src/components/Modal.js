import React, { useState } from "react";

const Modal = ({ children, fullscreen, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

//   return isOpen ? (
//     <div className={`modal ${fullscreen ? "modal-fullscreen" : ""}`}>
//       <div className="modal-content">
//         <button className="modal-close-button" onClick={handleClose}>&times;</button>
//         {children}
//       </div>
//     </div>
//   ) : null;
};

export default Modal;