import { FC } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return <div>layout{children}</div>;
};
