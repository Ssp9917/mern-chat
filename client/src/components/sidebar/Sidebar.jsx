import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full md:w-[300px] h-screen bg-white shadow-md">
      <div className="bg-gray-500 px-4 py-3 text-white flex items-center justify-center">
        <h2 className="font-semibold text-lg">Users</h2>
      </div>
      <div className="p-2">
        <SearchInput />
        <div className="my-2 border-t border-gray-200"></div>
        <div className="overflow-y-scroll h-[71vh]">
          <Conversations />
        </div>
        <div className="mt-auto pt-2 border-t border-gray-200">
          <LogoutButton  />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
