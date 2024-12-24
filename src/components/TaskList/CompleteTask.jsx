import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { use } from "react";

const CompleteTask = ({ data,user }) => {
  const [userData, setUserData] = useContext(AuthContext);
 
  const handleOnclick = () => {
    const Alldata = userData;
    Alldata.forEach(function (elem) {
      if (user.firstName== elem.firstName) {
        elem.tasks.forEach(function (task)
      {

  
        if(task.taskTitle==data.taskTitle)
        {
        task.newTask=false;
        task.completed=false;
        task.active=false;
        task.failed=false;
        }
      })
        elem.taskCounts.completed = elem.taskCounts.completed + 1;
      }
    });


    setUserData(Alldata);
    console.log(Alldata);
    console.log("Completed Button clicked");
  };

  return (
    <div className="h-full w-[300px] bg-red-300 rounded-xl flex-shrink-0 p-6">
      <div className="flex justify-between items-center ">
        <h3 className="bg-red-600 text-sm px-3 py-2 rounded">
          {data.category}
        </h3>
        <h4 className="text-md">{data.taskDate}</h4>
      </div>
      <h2 className="text-3xl font-semibold mt-4">{data.taskTitle}</h2>
      <h3 className="text-0.5xl font-medium mt-2">{data.taskDescription} </h3>

      <div className="mt-6">
        <button
          onClick={handleOnclick}
          className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
