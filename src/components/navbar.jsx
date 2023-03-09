import React, { useState } from "react";

export default function Navbar(props) {
  const [active, setActive] = useState("1");
  function handlerClick(event) {
    setActive(event.target.id);
  }
  return (
    <div className="flex w-full justify-between gap-1 h-12 p-3">
      <button
        className={
          active === "1"
            ? "w-1/5 bg-purple-300 h-12 rounded-lg text-white text-left p-3"
            : "w-1/5 bg-none h-12 rounded-lg text-left p-3"
        }
        key={1}
        id="1"
        onClick={handlerClick}
      >
        All product
      </button>
      <button
        className={
          active === "2"
            ? "w-1/5 bg-purple-300 h-12 rounded-lg text-white text-left p-3"
            : "w-1/5 bg-none h-12 rounded-lg text-left p-3"
        }
        key={2}
        id="2"
        onClick={handlerClick}
      >
        Load more
      </button>
      <button
        className={
          active === "3"
            ? "w-1/5 bg-purple-300 h-12 rounded-lg text-white text-left p-3"
            : "w-1/5 bg-none h-12 rounded-lg text-left p-3"
        }
        key={3}
        id="3"
        onClick={handlerClick}
      >
        Filter by category
      </button>
      <button
        className={
          active === "4"
            ? "w-1/5 bg-purple-300 h-12 rounded-lg text-white text-left p-3"
            : "w-1/5 bg-none h-12 rounded-lg text-left p-3"
        }
        key={4}
        id="4"
        onClick={handlerClick}
      >
        Filter by brand
      </button>
      <button
        className={
          active === "5"
            ? "w-1/5 bg-purple-300 h-12 rounded-lg text-white text-left p-3"
            : "w-1/5 bg-none h-12 rounded-lg text-left p-3"
        }
        key={5}
        id="5"
        onClick={handlerClick}
      >
        Add product
      </button>
    </div>
  );
}
