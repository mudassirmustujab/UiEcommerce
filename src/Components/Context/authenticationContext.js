import React, { useContext } from "react";

export const authenticationContext = React.createContext(
    
    {
        token:"",
        setToken :"",
        loginReq:false,
        setLoginReq:"",
        loginToken:"",
        setLoginToken:""
    })
    
    export const ContextProvider = authenticationContext.Provider
    
    export default function useAuthenticationContext (){
    return useContext(authenticationContext)
}