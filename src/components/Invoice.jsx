import React, { useState } from "react";
import "../styles/invoice.css";

export default function Invoice() {
  const [totalBill, setTotalBill] = useState(0);
  const [tip, setTip] = useState(0);

  const totalWithTip = totalBill + tip;

  return (
    <div className="Invoice">
      <h2>Invoice</h2>
      <label>Total Bill:</label>
      <p>{totalBill}</p>
      <br />
      <label>Tip:</label>
      <p>{tip}</p>
      <br />
      <p>Total with Tip: {totalWithTip}</p>
      <label> Tip %</label>
      <input type="range" min="0" max="100" />
      <label>Split</label>
      <input type="range" min="0" max="100" />
      <br />
      <label className="tip-each"> Tip each </label>
      <br />
      <label className="tip-and-bill-each">Tip + bill each</label>
    </div>
  );
}
