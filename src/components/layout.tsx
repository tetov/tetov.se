import React from "react";
import Footer from "src/components/footer";
import Header, { HeaderProp } from "src/components/header";

const Layout: React.FC<HeaderProp> = ({
  children,
  subHeading,
}) => {
  return (
    <div className="global-wrapper min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-5 space-y-6">
        <Header subHeading={subHeading} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
