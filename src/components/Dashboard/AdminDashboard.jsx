import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask"; 
import AllTask from "../../other/AllTask";

const AdminDashboard = (prob) => {
  return (
    <div>
      <Header changeUser={prob.changeUser} ></Header>
      <CreateTask/>
      <AllTask/>

      </div>
  );
};

export default AdminDashboard;