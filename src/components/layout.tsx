import * as React from "react";
import Footer from "src/components/footer";
import type { HeaderProp } from "src/components/header";
import Header from "src/components/header";

type LayoutProps = React.PropsWithChildren<
  HeaderProp & {
    footerChildren?: JSX.Element | JSX.Element[];
  }
>;

const Layout: React.FC<LayoutProps> = ({
  children,
  subHeading,
  footerChildren,
  pathname,
}) => (
  <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <Header subHeading={subHeading} pathname={pathname} />
    <main className="w-full md:w-3/4 lg:w-1/2 mx-auto px-5">{children}</main>
    <Footer>{footerChildren}</Footer>
  </div>
);

export default Layout;
