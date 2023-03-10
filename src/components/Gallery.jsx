import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table.jsx";

export default function Gallery(props) {
  const { val } = props;
  const [gallery, setGallery] = useState();
  const [show, setShow] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:2050/${val == 3 ? "category" : "brand"}`)
      .then((res) => setGallery(res.data));
    setShow(null);
  }, [val]);
  if (show) {
    console.log(show);
    return <Table val={val} name={show.name} />;
  }
  return (
    <div className="w-full h-full p-10 gap-10 flex flex-wrap">
      {gallery &&
        gallery.map((item, index) => {
          return (
            <div
              className="flex flex-col w-2/12 border h-80"
              key={index}
              onClick={() => {
                setShow({ key: index, name: item.name });
              }}
            >
              <div className="w-full bg-blue-500 h-5/6">zrg</div>
              <div className="">{item.name}</div>
            </div>
          );
        })}
    </div>
  );
}
