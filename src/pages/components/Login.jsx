import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      router.push("/home");
    } else {
      alert("Invalid credentials");
    }
  };
 
 
  return (
    
      <div className="min-h-screen hero-section">
        <div className="bg-[rgba(0,0,0,0.5)] min-h-screen w-full flex items-center justify-center">
        <div className="bg-white bg-opacity-60 shadow-md lg:rounded-lg p-4 md:p-6 lg:p-8 w-full max-w-full md:max-w-none lg:max-w-lg h-auto min-h-screen lg:min-h-0 md:h-[90vh] lg:h-full flex justify-center flex-col">
            
            <h2 className="text-2xl font-bold text-center mb-6 text-[rgb(138,67,27)]">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="flex items-center justify-between mt-[25px]">
                <button
                  type="submit"
                  className="bg-[rgb(138,67,27)]  text-white px-4 py-2 rounded-md hover:bg-[rgb(161,63,8)]  transition-all w-full"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
};

export default Login;
