import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProducts = () => {
  const { id } = useParams();
  const [postRes, setPostRes] = React.useState(null);
  const [name, setName] = React.useState("Default Name");
  const [desc, setDesc] = React.useState(null);
  const [price, setPrice] = React.useState("Default Price");

  const dataToBePosted = {
    title: name,
    description: desc,
    price: price,
  };
  useEffect(() => {
    fetch(`http://localhost:8000/data/${id}`)
      .then((res) => res.json())
      .then((data) => setPostRes(data))
      .catch((err) => setPostRes(err));
  }, [id]);

  const AddProductsPost = () => {
    fetch(`http://localhost:8000/data/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBePosted),
    })
      .then((res) => res.json())
      .then((postRes) => {
        setPostRes(postRes);
      })
      .catch((err) => setPostRes(err));
    console.log(postRes);
  };

  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={postRes && postRes.title}
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              value={postRes && postRes.description}
              placeholder="Description"
              onChange={(e) => {
                setDesc(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder="Price"
              value={postRes && postRes.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            className="bg-slate-500 text-white"
            onClick={(e) => {
              e.preventDefault();
              AddProductsPost();
            }}
          >
            Edit Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProducts;
