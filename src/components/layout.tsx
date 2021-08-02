import Footer from "components/footer";
import Header, { HeaderProp } from "components/header";
import type { MetaProp } from "components/meta";
import { MetaSiteWide } from "components/meta";
import React from "react";
import { HiddenCard } from "./contact";

const Layout: React.FC<HeaderProp & MetaProp> = ({
  children,
  subHeading,
  pathName,
}) => {
  return (
    <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <MetaSiteWide pathName={pathName} />
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6">
        <Header subHeading={subHeading} />
        <main>{children}</main>
        <Footer>
          <HiddenCard />
        </Footer>
      </div>
    </div>
  );
};

export default Layout;
