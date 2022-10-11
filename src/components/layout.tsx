import * as React from "react";
import Footer from "src/components/footer";
import type { HeaderProp } from "src/components/header";
import Header from "src/components/header";

type LayoutProps = React.PropsWithChildren<HeaderProp & {footerChildren?: JSX.Element | JSX.Element[]}>;

const Layout: React.FC<LayoutProps> = ({ children, subHeading, footerChildren }) => (
  <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6">
      <Header subHeading={subHeading} />
      <main>{children}</main>
      <Footer>{footerChildren}</Footer>
    </div>
  </div>
);

export default Layout;
