import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';


function RightSidebar({ otherUsers }) {
  return (
    <div className="w-[25%]">
      <div className="flex items-center text-gray-700 p-2 bg-gray-100 rounded-full outline-none">
        <CiSearch size="24px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 my-4 bg-gray-100 rounded-2xl">
        <h1 className="font-bold text-lg my-2">Who to follow</h1>

        {otherUsers?.map((user) => {
          return (
            <div
              key={user?._id}
              className="flex items-center justify-between my-4"
            >
              <div className="flex">
                <div>
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/1306760416312270849/5amGZfPw_400x400.jpg"
                    size="45"
                    round={true}
                  />
                </div>

                <div className="ml-2 ">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">@{user.username}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user?._id}`}>
                  <button className="px-4 py-1 bg-black text-white rounded-full">
                    Profile
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSidebar;
