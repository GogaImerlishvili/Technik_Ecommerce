import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data,setData] = useState({
    email: "",
    password: "",
  })

  const handleOnChange = (e) => {
    const {name,value} = e.target
setData((prev) => {
  return {
    ...prev,[name] : value
  }
})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }  
  console.log("data login",data)
  return (
    <section id="login">
      <div className="mx-auto container px-4">
        <div className="bg-white  py-5 w-full max-w-sm mt-5 mx-auto">
          <div className="w-20 h-20  mx-auto">
            <img src={loginIcons} alt="login icons " />
          </div>
          <form  className="mt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password: </label>
              <div className="bg-slate-100 p-2 flex ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link to={"/forgot-password"} className="flex justify-end hover:underline hover:text-red-600">Forgot Password ?</Link>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto flex justify-center text-center items-center mt-6">
              Login
            </button>
          </form>
          <p className="my-5">Don't have account? <Link to={"/sign-up"} className="text-red-600 hover:underline underline-offset-4 hover:text-red-700">Sign up</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
