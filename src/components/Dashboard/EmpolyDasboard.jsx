import React from "react";
import Header from "../../other/Header";
import TaskListNumber from "../../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmpolyDasboard = (prob) => {
  return (
    <div>
      <Header changeUser={prob.changeUser}  data={prob.data}></Header>
      <TaskListNumber data={prob.data} />
      <TaskList data={prob.data} />
    </div>
  );
};

export default EmpolyDasboard;
