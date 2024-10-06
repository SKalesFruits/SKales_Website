import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const CheckoutSummary: React.FC = () => {
  const [location, setLocation] = useState("");
  const [locationConfirmed, setLocationConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleConfirmLocation = () => {
    if (location.trim() !== "") {
      setLocationConfirmed(true);
    } else {
      alert("Please enter a valid location.");
    }
  };

  const handleProceedToPayment = () => {
    if (locationConfirmed) {
      navigate("/payment");
    } else {
      alert("Please confirm your location first.");
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="location-section">
        <h3 className="section-title">Confirm Delivery Location</h3>
        <input
          type="text"
          className="location-input"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="confirm-location-btn"
          onClick={handleConfirmLocation}
        >
          Confirm Location
        </button>
        {locationConfirmed && (
          <p className="location-confirmation">
            Location Confirmed: {location}
          </p>
        )}
      </div>

      <div className="order-summary-section">
        <h3 className="section-title">Order Summary</h3>
        {/* Add order summary details here */}
      </div>

      <button
        className="proceed-to-payment-btn"
        onClick={handleProceedToPayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutSummary;
