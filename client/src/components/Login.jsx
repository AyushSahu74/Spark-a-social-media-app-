import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "./utils/constant.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice.js";

function Login() {
  const [isLogin, setLogin] = useState(true);

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      //login
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(res?.data?.user));
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      //register
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          {
            name,
            username,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const loginRegisterHandler = () => {
    setLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-5"
            width={"500px"}
            src="https://coworkingmap.org/wp-content/uploads/2016/04/Spark-Bureau-Logo-Icon-Black.png"
            alt=""
          />
        </div>
        <div>
          <div className="my-10">
            <h1 className="font-bold text-7xl">Let's GO!</h1>
          </div>
          <div className="w-64">
            <h1 className="mt-4 mb-2 ml-2 text-2xl font-bold">
              {!isLogin ? "Sign up" : "Login"}
            </h1>
            <form onSubmit={submitHandler} className="flex flex-col " action="">
              {!isLogin && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className="outline-blue-500 border border-gray-800 px-4 py-1 my-1 rounded-full font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="outline-blue-500 border border-gray-800 px-4 py-1 my-1 rounded-full font-semibold"
                  />
                </>
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="outline-blue-500 border border-gray-800 px-4 py-1 my-1 rounded-full font-semibold"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="outline-blue-500 border border-gray-800 px-4 py-1 my-1 rounded-full font-semibold"
              />
              <button className="bg-teal-500 border-none py-2 rounded-full text-white text-lg my-4">
                {" "}
                {!isLogin ? "Create Account" : "Login"}
              </button>
              <h1>
                {isLogin
                  ? "Do not have an account?"
                  : " Already have an account?"}{" "}
                <span
                  onClick={loginRegisterHandler}
                  className="font-bold text-blue-600 cursor-pointer"
                >
                  {" "}
                  {isLogin ? "Sign up" : "Login"}
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
