import React from "react";
import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/public/Arrow 1.svg";

const ArticleNav = async ({ currentSlug }) => {
  const metaDatas = [];
  const slugs = [];
  const folder = "content/docs/";
  const docs = fs.readdirSync(process.cwd() + folder);
  const fileNames = docs.map((file) => file.replace(".mdx", "")).reverse();
  //get the metadata from using slugs and set the titles
  for (const name of fileNames) {
    const { metaData } = await import(`@/content/docs/${name}.mdx`);
    const title = metaData.title;
    const index = metaData.index;
    metaDatas[metaData.index - 1] = { title, index };
    slugs[metaData.index - 1] = name;
  }
  const currentIndex = slugs.findIndex((slug) => currentSlug === slug);
  return (
    <div className="flex justify-between">
      {currentIndex === 0 && (
        <div className="rounded  border-4 border-black">
          <Link
            href={`/learn/${slugs[currentIndex + 1]}`}
            className="flex items-center gap-1 "
          >
            <Image src={Arrow} />
            <span className="new-sm:hidden">
              {metaDatas[currentIndex + 1].title}
            </span>
          </Link>
        </div>
      )}
      {currentIndex === docs.length - 1 && (
        <div className="rounded  border-4 border-black">
          <Link
            href={`/learn/${slugs[currentIndex - 1]}`}
            className="flex items-center gap-1 "
          >
            <Image className="transform scale-x-[-1]" src={Arrow} />
            <span className="new-sm:hidden">
              {metaDatas[currentIndex - 1].title}
            </span>
          </Link>
        </div>
      )}
      {currentIndex !== docs.length - 1 && currentIndex !== 0 ? (
        <>
          <div className="rounded border-4 border-black">
            <Link
              href={`/learn/${slugs[currentIndex - 1]}`}
              className="flex items-center gap-1 "
            >
              <Image className="transform scale-x-[-1]" src={Arrow} />
              <span className="new-sm:hidden">
                {metaDatas[currentIndex - 1].title}
              </span>
            </Link>
          </div>
          <div className="rounded border-4 border-black">
            <Link
              href={`/learn/${slugs[currentIndex + 1]}`}
              className="flex items-center gap-1 "
            >
              <Image src={Arrow} />
              <span className="new-sm:hidden">
                {metaDatas[currentIndex + 1].title}
              </span>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ArticleNav;
