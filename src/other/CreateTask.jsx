import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setnewTask] = useState({});

  const sumbitHandler = (e) => {
    e.preventDefault();
    setnewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;
    data.forEach(function (elem) {
      if (asignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });

    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="mt-10">
      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
      >
        <div className="flex justify-between p-8 bg-[#1c1c1c] rounded-lg  ">
          <div className="flex flex-col gap-y-2">
            <div>
              <h3 className="font-semibold text-lg">Task Title</h3>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Eg.Make wensite"
                className="outline-none bg-transparent border-2 border-zinc-500 font-medium text-lg py-1 px-6  placeholder:text-stone-600 w-[500px] rounded-md"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Date</h3>
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="outline-none bg-transparent border-2 border-zinc-500 font-medium text-lg py-1 px-6  placeholder:text-stone-700  w-[500px] rounded-md"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Assign to</h3>
              <input
                type="text"
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                placeholder="employee name.."
                className="outline-none bg-transparent border-2 border-zinc-500 font-medium text-lg py-1 px-6  placeholder:text-stone-600  w-[500px] rounded-md"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">Category</h3>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none bg-transparent border-2 border-zinc-500 font-medium text-lg py-1 px-6  placeholder:text-stone-600  w-[500px] rounded-md"
                placeholder="design,dev etc"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div>
              <h3 className="font-semibold text-lg">Description</h3>
              <textarea
                rows="7"
                cols="40"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-1 px-6  placeholder:text-stone-600  w-[500px] rounded-md"
              ></textarea>
            </div>
            <button className="outline-none border-none bg-emerald-600  font-medium text-lg py-1 px-6   placeholder:text-stone-600  w-[500px] rounded-md">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
