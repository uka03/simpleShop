import { useEffect, useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
let buttons = [
  { name: "All product", val: 1, component: <Table val={1} /> },
  { name: "Load more", val: 2, component: <Table val={2} /> },
  { name: "Filter by category", val: 3, component: <Gallery /> },
  { name: "Filter by brand", val: 4, component: <Gallery /> },
  { name: "Add product", val: 5, component: <AddProduct /> }
];
function App() {
  const btnVal = localStorage.getItem("btnVal")
  console.log(btnVal)
  const [active, setActive] = useState(buttons[0]);
  useEffect(() => {
    setActive(btnVal ? buttons[btnVal - 1] : buttons[0])
  }, [])
  function handlerClick(event) {
    setActive(event);
    localStorage.setItem("btnVal", event.val)
  }

  return (
    <div className="flex justify-center flex-col gap-5">
      <Navbar active={active} handlerClick={handlerClick} buttons={buttons} />
      {active.component}
    </div>
  );
}

export default App;
