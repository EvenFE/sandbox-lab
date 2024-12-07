import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      {/* <Searchbar /> */}
      {children}
    </div>
  );
}
