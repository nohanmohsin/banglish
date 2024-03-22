import Image from "next/image";
import Logo from "../public/Frame 12.svg";
const NavBar = ({ link }) => {
  return (
    <nav
      className={`flex-0 flex justify-center py-4 relative  ${
        link === "learn" ? "bigger-sm:hidden" : ""
      }`}
    >
      <Image src={Logo}></Image>
      {/* <Image className={`${link === "learn" ? "" : "hidden"}`} /> */}
    </nav>
  );
};

export default NavBar;
