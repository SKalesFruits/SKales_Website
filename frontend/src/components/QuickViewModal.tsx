import React from "react";
import "../styles/QuickViewModal.css";

interface QuickViewModalProps {
  product: any;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
}) => {
  return (
    <div className="quick-view-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image-container">
          <img src={product.image} alt={product.name} className="modal-image" />
        </div>
        <div className="modal-info">
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
