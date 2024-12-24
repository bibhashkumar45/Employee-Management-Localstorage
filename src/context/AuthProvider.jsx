import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // localStorage.clear();

  // For Holding the local storage data
  const [userData, setUserData]=useState(null);


  // Bring LocalStorage data into Context API
useEffect(() => {
  setLocalStorage();
  const {employees}=getLocalStorage()
  setUserData(employees);
}, [])

  

  return (
    <div>
      {/* Pass the data to all */}
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};
export default AuthProvider;
