import { FC } from "react";
import { Layout } from "tdesign-react";
import style from "./styles/layout.module.less";

const { Content } = Layout;

interface LayoutProps {
  children?: React.ReactNode;
}

export const AppLayout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Layout className={style.layout}>
        <Content>
          123
          {children}
        </Content>
      </Layout>
    </>
  );
};
