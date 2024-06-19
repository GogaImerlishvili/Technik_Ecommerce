import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { imageTobase64 } from "../helpers/imageTobase64";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async(e) => {
    const file = e.target.files[0]

    const imagePic = await imageTobase64(file)
    setData((prev) => {
       return {
        ...prev,
        profilePic: imagePic
       } 
    })
    console.log("file",imagePic)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

 
  console.log("data login", data);
  return (
    <section id="signup">
      <div className="mx-auto container px-4">
        <div className="bg-white  py-5 w-full max-w-sm mt-5 mx-auto">
          <div className="w-20 h-20  mx-auto relative overflow-hidden rounded-full">
            <div>
            <img src={data?.profilePic || loginIcons} alt="login icons " />
            </div>
           <form>
            <label>
            <div className="text-xs bg-opacity-75 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                Upload Photo
            </div>
                <input type="file" className="hidden" onChange={handleUploadPic}/> 
            </label>
           </form>
          </div>
          <form className="mt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label>Name : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={data.name}
                  required
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  required
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex ">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto flex justify-center text-center items-center mt-6">
            Sign up
            </button>
          </form>
          <p className="my-5">
            Already have account?{" "}
            <Link
              to={"/login"}
              className="text-red-600 hover:underline underline-offset-4 hover:text-red-700"
            >
                Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
