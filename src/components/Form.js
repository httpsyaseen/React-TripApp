import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandler(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, id: Date.now(), packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onClick={submitHandler}>
      <h3>What to you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value * 1)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
