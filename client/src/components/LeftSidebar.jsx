import React from "react";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { USER_API_END_POINT } from "./utils/constant.js";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser, getOtherUsers,getMyProfile } from "../redux/userSlice.js";

function LeftSidebar() {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      navigate('/login');
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="w-16 ml-4"
            src="https://coworkingmap.org/wp-content/uploads/2016/04/Spark-Bureau-Logo-Icon-Black.png"
            alt="twitter_logo"
          />
        </div>
        <div className="my-4">
          <Link
            to="/"
            className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer"
          >
            <FaHome size="24px" />
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </Link>
          <div className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer">
            <FaHashtag size="24px" />
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer">
            <IoMdNotifications size="24px" />
            <h1 className="font-bold text-lg ml-2">Notifications</h1>
          </div>
          <Link
            to={`/profile/${user?._id}`}
            className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer"
          >
            <FaUser size="24px" />
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>
          <div className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer">
            <FaBookmark size="24px" />
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <div
            onClick={logoutHandler}
            className="flex items-center my-2 hover:bg-gray-100 px-4 py-2 rounded-full hover:cursor-pointer"
          >
            <LuLogOut size="24px" />
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
          <button className="px-4 py-2 border-none text-lg bg-teal-500 rounded-full w-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
