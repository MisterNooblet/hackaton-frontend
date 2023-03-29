import React, { useState, useEffect } from "react";

export default function SelectBar() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("https://example.com/api/options")
      .then((response) => response.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <select>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
