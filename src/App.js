import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 16727863876823, description: "Passport", quantity: 1, packed: false },
//   { id: 12876328368767, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  function deleteItem(id) {
    setItems((items) => items.filter((ele) => ele.id !== id));
  }
  function onAddItems(newItem) {
    setItems((items) => [...items, newItem]);
    // localStorage.setItem("items", JSON.stringify(items));
  }
  function handleToggleItem(id) {
    //CRAZY WAY OF UPDATING STATES:
    setItems((items) =>
      items.map((ele) =>
        ele.id === id
          ? {
              ...ele,
              packed: !ele.packed,
            }
          : { ...ele }
      )
    );
  }
  function handleDelete() {
    let confirmation = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmation) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={onAddItems} />
      <PackingList
        items={items}
        setItems={setItems}
        deleteItem={deleteItem}
        handleToggleItem={handleToggleItem}
        deleteAll={handleDelete}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
