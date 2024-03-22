import React from "react";
import Image from "next/image";
import Logo from "../public/Frame 12.svg";

const SideBar = () => {
  return (
    <aside className="w-[25%] max-w-96 h-screen new-sm:w-screen bg-gray new-sm:hidden pt-4">
      <Image src={Logo} className="ml-4" />
    </aside>
  );
};

export default SideBar;
