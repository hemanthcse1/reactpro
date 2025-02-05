import React, { useState } from "react";

export default function EventChange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleUpdateQuantity(event) {
    setQuantity(event.target.value);
  }

  function handleUpdateComment(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleUpdateQuantity} />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleUpdateComment}
        placeholder="Enter your delivery instructions"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
