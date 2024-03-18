import Image from "next/image";
import Logo from "../public/Frame 12.svg";
const NavBar = () => {
  return (
    <nav className="flex-0 flex justify-center py-4">
      <Image src={Logo}></Image>
    </nav>
  );
};

export default NavBar;
