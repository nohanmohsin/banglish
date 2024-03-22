import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Wrong from "@/public/Frame 14.svg";
import Right from "@/public/Frame 15 (1).svg";
import Arrow from "@/public/Arrow 1.svg";

export default function Home() {
  return (
    <main className="bg-white h-full flex flex-col overflow-hidden relative">
      <NavBar />
      <Image
        src={Right}
        className="absolute z-10 top-[15rem] right-0 new-sm:top-[20rem] new-sm:h-[60%] new-sm:w-[60%]"
      ></Image>
      <Image
        src={Wrong}
        className="absolute z-10 top-[10rem] new-sm:top-8 new-sm:h-[60%] new-sm:w-[60%]"
      ></Image>

      <div className="flex-1 flex flex-col justify-center items-center w-full gap-3">
        <h4 className="font-bold text-xl text-gray-500 z-[100]">
          Learn Banglish
        </h4>
        <h1 className="text-clamp font-bold text-center z-[100]">
          Thikmoto Text <br /> Korte Sikho
        </h1>

        <button className="new-sm:mt-[10rem]  new-sm:absolute new-sm:bottom-8 border-4 new-sm:border-3 border-black rounded-[50px] py-[10px] px-[30px] z-[100] ">
          <Link
            href={"/learn/what-is-banglish"}
            className="flex gap-[10px] items-center"
          >
            <span className="text-[20px] new-sm:text-[1rem] font-bold">
              Start Learning
            </span>
            <Image src={Arrow}></Image>
          </Link>
        </button>
      </div>
    </main>
  );
}
