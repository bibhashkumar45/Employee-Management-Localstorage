import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmpolyDasboard from "./components/Dashboard/EmpolyDasboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [userData,SetUserData] = useContext(AuthContext);
  // Login Features
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[]);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "admin") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data:employee })
        );
      }
    } else {
      alert("Wrong Credencial!");
    }
  };

  return (
    <>
      {/* {!user ? <Login handleLogin={handleLogin} />:''} */}
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmpolyDasboard changeUser={setUser}  data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
