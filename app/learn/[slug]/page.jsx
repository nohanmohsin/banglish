import ArticleNav from "@/components/ArticleNav";
import dynamic from "next/dynamic";

export async function generateMetadata({ params }) {
  const { metaData } = await import(`/content/docs/${params.slug}.mdx`);
  return { title: metaData.title };
}
const Page = async ({ params }) => {
  const Content = await import(`/content/docs/${params.slug}.mdx`);

  console.log(Content);
  return (
    <div className="w-full max-w-auto prose prose-img:rounded py-8 pr-8 new-sm:px-8">
      <Content />
      <ArticleNav currentSlug={params.slug} />
    </div>
  );
};

export default Page;
