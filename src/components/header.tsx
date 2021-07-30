import { Link } from "gatsby";
import React from "react";
import useSiteMetadata from "../helpers/hook-use-site-metadata";

export type HeaderProp = {
  subHeading?: React.ReactNode;
};

const Header = ({ subHeading }: HeaderProp) => (
  <header className="text-center md:justify-between pt-12 mb-16 md:mb-12">
    <Link to="/">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight">
        {useSiteMetadata().title}
      </h1>
    </Link>{" "}
    {subHeading && (
      <h2 className="mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed">
        {subHeading}
      </h2>
    )}
  </header>
);

export default Header;
