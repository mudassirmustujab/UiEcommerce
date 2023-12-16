import { useState } from "react";
import authenticationContext from "./Context/authenticationContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { setToken, setLoginReq } = authenticationContext();

  const [email, setEmail] = useState("Default Email");
  const [passwd, setPasswd] = useState("Default Password");
  const dataToBePosted = {
    email: email,
    password: passwd,
  };
  const signupPost = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBePosted),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form className="w-full max-w-lg flex justify-center flex-col mx-auto pt-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                onChange={(e) => setPasswd(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                placeholder="Password"
              />
            </div>
            <button
              className="bg-slate-500 text-white"
              onClick={(e) => {
                e.preventDefault();
                signupPost();
              }}
            >
              SignUp
            </button>
          </div>
          <button className="bg-slate-500 text-white">
            <Link
              className="text-white"
              onClick={() => {
                setLoginReq(true);
              }}
              to={"/login"}
            >
              Login
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
