import React from "react";

export default function Table(props) {
  const { val } = props;
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
          <tr className="border-b-2 border-neutral-900">
            <td className="text-center">url</td>
            <td className="text-center">iPhone 14</td>
            <td className="text-center">2000$</td>
            <td className="text-center">apple</td>
            <td className="text-center">phone</td>
            <td className="text-center">10</td>
            <td className="text-center">edit/delete</td>
          </tr>
        </tbody>
      </table>
      {val == 2 && (
        <button className="focus:outline-none text-white bg-purple-300 hover:bg-purple-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">
          load more
        </button>
      )}
    </div>
  );
}
