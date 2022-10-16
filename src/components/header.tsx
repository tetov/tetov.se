import * as React from "react";
import NavBar, { NavBarProp } from "src/components/nav-bar";

export type HeaderProp = NavBarProp & {
  subHeading?: JSX.Element | string;
};

const Header: React.FC<HeaderProp> = ({ subHeading, pathname }) => (
  <header className="text-center md:justify-between mb-8">
    <NavBar pathname={pathname} />
    {subHeading && (
      <h2 className="mt-4 w-2/3 text-4xl font-light inline-block leading-relaxed">
        {subHeading}
      </h2>
    )}
  </header>
);

export default Header;
