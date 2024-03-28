import Image from "next/image";
export function useMDXComponents(components) {
  return {
    Image: (props) => <Image {...props} />,
    ...components,
  };
}
