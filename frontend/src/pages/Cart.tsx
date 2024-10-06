import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateReceiptId } from "../config/receiptIdGenerator";
import { RootState } from "../redux/store";
import { removeItem } from "../slices/cart.slice";
import "../styles/Cart.css";

interface RazorpayOptions {
  key: string;
  amount: string;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const TAX_RATE = 0.18; // Example tax rate of 7%
  const DELIVERY_FEE = 9.99; // Example delivery fee

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product_price * item.product_qty,
    0
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + DELIVERY_FEE;
  const receiptId = generateReceiptId(
    "Nimish",
    parseInt(total.toFixed(0)) * 100
  );
  const razorAmount = parseInt(total.toFixed(0)) * 100;
  const handlePayment = async (e: any) => {
    const responseOrder = await axios.post(
      "http://127.0.0.1:5000/order",
      {
        amount: parseInt(total.toFixed(0)) * 100,
        currency: "INR",
        receipt: receiptId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const options: RazorpayOptions = {
      key: "rzp_test_6UzyzrF9VErKiB", // Replace with your actual Key ID
      amount: String(razorAmount), // Amount is in currency subunits. Default currency is INR. 50000 refers to 50000 paise (INR 500)
      currency: "INR",
      name: "S Kales",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: responseOrder.data.id, // Replace with the actual order ID
      handler: async function (response: any) {
        const body = {
          ...response,
        };
        const order_resp = await axios.post(
          "http://127.0.0.1:5000/order/validate",
          body,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert(order_resp.data);
        console.log(order_resp.data);
      },
      prefill: {
        name: "Nimish",
        email: "nimishthanekar57@gmail.com",
        contact: "7738506111",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new (window as any).Razorpay(options);

    rzp1.on("payment.failed", function (response: any) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    console.log(responseOrder.data);
  };

  return (
    <div className="amazon-cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        <p className="cart-price-title">Price</p>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.product_id}>
              <img
                src={item.product_img}
                alt={item.product_name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.product_name}</h3>
                <p className="cart-item-qty">Quantity: {item.product_qty}</p>
                <button
                  className="remove-item-button"
                  onClick={() => handleRemove(item.product_id)}
                >
                  Delete
                </button>
              </div>
              <div className="cart-item-price">
                <p>${item.product_price.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length !== 0 ? (
        <div className="cart-summary">
          <p className="cart-subtotal">
            Subtotal ({cartItems.length} items):{" "}
            <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="cart-tax">
            Tax (18%): <span>${tax.toFixed(2)}</span>
          </p>
          <p className="cart-delivery-fee">
            Delivery Fee: <span>${DELIVERY_FEE.toFixed(2)}</span>
          </p>
          <p className="cart-total">
            Total: <span>${total.toFixed(2)}</span>
          </p>
          <button className="checkout-button" onClick={(e) => handlePayment(e)}>
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
