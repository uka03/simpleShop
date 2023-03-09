export default function AddProduct() {
  return (
    <div className="flex flex-col w-full gap-10 p-20">
      <form action="" className="flex flex-wrap w-4/6 justify-between gap-7">
        <div className="flex  w-full gap-10 ">
          <input
            placeholder="Name"
            type="text"
            className="border w-full h-14 border-indigo-400 rounded-md px-5"
          />
          <input
            placeholder="Price"
            type="number"
            className="border w-full h-14 border-indigo-400 rounded-md px-5"
          />
        </div>
        <div className="flex  w-full gap-10">
          <input
            placeholder="Image"
            type="text"
            className="border w-full h-14 border-indigo-400 rounded-md px-5"
          />
          <select
            placeholder="Brand"
            name=""
            id=""
            className="border w-full h-14 border-indigo-400 rounded-md px-5"
          >
            {" "}
            <option value="" disabled>
              Brand
            </option>
            <option>hs</option>
            <option>hs</option>
            <option>hs</option>
          </select>
        </div>

        <select
          name=""
          id=""
          className="border w-full h-14 border-indigo-400 rounded-md px-5"
        >
          <option value="" disabled>
            Category
          </option>
          <option>hs</option>
          <option>hs</option>
          <option>hs</option>
        </select>
        <button className="bg-indigo-300 w-full p-5 rounded-xl text-white ">
          Add +
        </button>
      </form>

      <form action="" className="flex flex-wrap w-4/6 justify-between gap-7">
        <input
          placeholder="category"
          type="text"
          className="border w-full h-14 border-indigo-400 rounded-md px-5"
        />
        <button className="bg-indigo-300 w-1/2 p-5 rounded-xl text-white ">
          Add Category +
        </button>
      </form>
      <form action="" className="flex flex-wrap w-4/6 justify-between gap-7">
        <input
          placeholder="Brand"
          type="text"
          className="border w-full h-14 border-indigo-400 rounded-md px-5"
        />
        <button className="bg-indigo-300 w-1/2 p-5 rounded-xl text-white ">
          Add Brand +
        </button>
      </form>
    </div>
  );
}
