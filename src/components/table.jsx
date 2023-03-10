import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Table(props) {
  const { val, name } = props;
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    axios
      .get(
        `http://localhost:2050/products${
          val == 2
            ? `?limit=${limit}`
            : val == 3
            ? `?category=${name} `
            : val == 4
            ? `?brand=${name} `
            : ""
        }`
      )
      .then((res) => setData([...res.data]));
  }, [limit, val]);

  return (
    <div className="w-full flex flex-col items-center gap-20">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-neutral-900">
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Sale</th>
            <th>Optoins</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product, index) => {
              return (
                <tr className="border-b-2 border-neutral-900" key={index}>
                  <td className="text-center">
                    <img className="w-20" src={product.image} alt="" />
                  </td>
                  <td className="text-center">{product.name}</td>
                  <td className="text-center">{product.price}$</td>
                  <td className="text-center">{product.brand}</td>
                  <td className="text-center">{product.category}</td>
                  <td className="text-center">{product.stock}</td>
                  <td className="text-center">edit/delete</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {val == 2 && data.length >= limit ? (
        <button
          className="focus:outline-none text-white bg-purple-300 hover:bg-purple-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
          onClick={() => setLimit(limit + 2)}
        >
          load more
        </button>
      ) : null}
    </div>
  );
}
