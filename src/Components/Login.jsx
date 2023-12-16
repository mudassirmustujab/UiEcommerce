import React from "react";
import useAuthenticationContext from "./Context/authenticationContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { token, setLoginToken } = useAuthenticationContext();

  const [email, setEmail] = React.useState("Default Email");
  const [passwd, setPasswd] = React.useState("Default Password");
  const navigate = useNavigate();
  const dataToBePosted = {
    email: email,
    password: passwd,
  };
  const LoginPost = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `bearer ${token}`,
      },
      body: JSON.stringify(dataToBePosted),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginToken(data.accessToken);
        console.log(data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex justify-center flex-col">
        <h1>Login</h1>
        <form className="w-full max-w-lg flex justify-center flex-col mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                LoginPost();
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
