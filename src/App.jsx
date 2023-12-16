import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ViewProducts from "./Components/ViewProducts";
import AddProducts from "./Components/AddProducts";
import EditProducts from "./Components/EditProducts";
import ErrElem from "./Components/ErrElem";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { ContextProvider } from "./Components/Context/authenticationContext";
import { useState } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {errorElement:<ErrElem></ErrElem>, path: "/", loader:{}, element: <ViewProducts></ViewProducts>  },
        {path:"signup", element:<Signup></Signup>},
        {path:"login", element:<Login></Login>},
        {path: "add", element: <AddProducts></AddProducts> },
        {path: "edit/:id", element: <EditProducts></EditProducts> },
        {path:"*", element:<div>Not Found</div>}
        
      ],
    },
  ]);
  const [token, setToken] =useState(null)
  const [loginReq, setLoginReq] = useState(false);
  const [loginToken, setLoginToken] = useState(null);

 
  return (
    <>
              <ContextProvider value={{token, setToken,loginReq,setLoginReq, loginToken,setLoginToken}}>

      <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </>
  );
}

export default App;
