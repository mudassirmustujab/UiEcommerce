import { useState } from "react";

const AddProducts = () => {
  const [postRes, setPostRes] = useState(null);
const [name, setName] =useState("Default Name");
const [desc, setDesc] =useState("Default Description");
const [price, setPrice] =useState("Default Price");

  const dataToBePosted = {
    title:name,
    description: desc,
    price : price
  }
  const AddProductsPost = () => {
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBePosted),
    })
      .then((res) => res.json())
      .then((postRes) => setPostRes(postRes))
      .catch((err) => setPostRes(err));
      console.log(postRes);
  };

  return (
    <div>
      <h1>Add Products</h1>

      <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
         Name
      </label>
      <input onChange={(e)=> setName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>

  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Description
      </label>
      <input  onChange={(e)=> setDesc(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Description" />
    </div>
    <div className="w-full px-3">
      <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Price
      </label>
      <input onChange={(e)=> setPrice(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="Price" />
    </div>
    <button
    className="bg-slate-500 text-white"
    onClick={(e)=>{
      
e.preventDefault()
AddProductsPost()
    }}>Post Data</button>
  </div>
 
</form>
    </div>
  );
};

export default AddProducts;
