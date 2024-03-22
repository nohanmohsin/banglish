import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
const layout = ({ children }) => {
  return (
    <main className={"flex gap-4"}>
      <NavBar link={"learn"} />
      <SideBar />
      {children}
    </main>
  );
};

export default layout;
