import React from "react";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
const layout = ({ children, params }) => {
  return (
    <main className={"flex gap-4 new-sm:flex-col"}>
      <NavBar link={"learn"} />
      {/* <SideBar params={params} /> */}
      {children}
    </main>
  );
};

export default layout;
