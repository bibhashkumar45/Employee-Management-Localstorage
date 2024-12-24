import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data}) => {
  // console.log(data);
  return (
    <div className="h-screen">
      <div
        id="tasklist"
        className="h-[45%]  py-5 mt-10 flex gap-5 justify-start items-center w-full flex-nowrap  overflow-x-auto "
      >
        {data.tasks.map((eleme, idx) => {
          if (eleme.active) {
            return <AcceptTask key={idx} data={eleme} />;
          }

          if (eleme.newTask) {
            return <NewTask key={idx} data={eleme} />;
          }

          if (eleme.completed) {
            return <CompleteTask key={idx} data={eleme} user={data} />;
          }
          if (eleme.failed) {
            return <FailedTask key={idx} data={eleme} />;
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
