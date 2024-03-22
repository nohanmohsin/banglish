import Image from "next/image";
export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 className="text-xl">{children}</h1>,
    img: (props) => {
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-sm"
        {...props}
      />;
    },
  };
}
