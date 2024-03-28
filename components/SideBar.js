import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Frame 12.svg";
import fs from "fs";

const getAllPostsMetadata = async () => {
  //get the names of the documents to generate slugs
  const folder = "content/docs/";
  const files = fs.readdirSync(process.cwd() + folder);
  const docs = files.filter((file) => file.endsWith(".mdx"));
  const fileNames = docs.map((file) => file.replace(".mdx", "")).reverse();
  const titles = [];
  const slugs = [];
  //get the metadata from using slugs and set the titles
  for (const name of fileNames) {
    const { metaData } = await import(`@/content/docs/${name}.mdx`);
    titles[metaData.index - 1] = metaData.title;
    slugs[metaData.index - 1] = name;
  }
  return { slugs, titles };
};
const SideBar = async ({ params }) => {
  const metaDatas = await getAllPostsMetadata();
  console.log(metaDatas);
  return (
    <aside className="w-[35%] max-w-96 h-screen new-sm:w-screen bg-gray new-sm:hidden pt-4 sticky top-0 self-start overflow-y-scroll">
      <Image src={Logo} className="ml-4" />
      <div className="mt-4 flex flex-col w-full px-1">
        {metaDatas.slugs.map((slug, index) => (
          <Link
            href={`/learn/${slug}`}
            key={slug}
            className={`w-full p-2 text-xl font-medium md-2 ${
              params.slug === slug ? "text-gray-500" : ""
            } ${
              params.slug === slug
                ? "hover:bg-[transparent] hover:text-gray-500"
                : "hover:bg-black hover:text-white rounded"
            }`}
          >
            {metaDatas.titles[index]}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
