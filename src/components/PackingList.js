import React from "react";
import Item from "./Item";
import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passport", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function PackingList({
  items,
  deleteItem,
  handleToggleItem,
  deleteAll,
}) {
  const [sortBy, setSortBy] = useState("input");
  //NO NEED TO CREATE A NEW STATE. JUST CREATE A DERIVED STATE AND THAT'LL WORK.
  let sortedItems = [];
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.length === 0
          ? null
          : sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                deleteItem={deleteItem}
                handleToggleItem={handleToggleItem}
              />
            ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSort}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={deleteAll}>Clear List</button>
      </div>
    </div>
  );
}
