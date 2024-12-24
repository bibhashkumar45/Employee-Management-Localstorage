import React, { useState } from "react";

const Login = ({handleLogin}) => {
  // useState Hook For the Email and Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Prevent Default Sumit
  const submitHandler = (e) => {
    e.preventDefault();
    // Login handle
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };

  return (
    <div id="loginPage" className="flex  h-screen w-screen  items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Enter Your email.."
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mb-3 text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Enter your password"
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 text-white"
          />
          <button className="mt-7 text-white border-none outline-none bg-emerald-600 border-2 border-emerald-600 hover:bg-emerald-700 font-medium text-lg py-2 px-6 rounded-full placeholder:text-white-400 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
