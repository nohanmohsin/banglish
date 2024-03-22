export async function generateMetadata({ params }) {
  return { title: params.slug };
}
const Page = async ({ params }) => {
  console.log(params.slug);
  const Content = (await import(`@/content/docs/${params.slug}.mdx`)).default;
  return (
    <div className="mt-4">
      <Content />
    </div>
  );
};

export default Page;
