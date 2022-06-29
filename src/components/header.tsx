import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

type HeaderProp = {
  title: string;
  subHeading?: React.ReactNode;
};

export const PureHeader: React.FC<HeaderProp> = ({ title, subHeading }) => (
  <header className="text-center md:justify-between pt-12 mb-16 md:mb-12">
    <Link to="/">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
    </Link>{" "}
    {subHeading && (
      <h2 className="mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed">
        {subHeading}
      </h2>
    )}
  </header>
);

const Header: React.FC<{ subHeading?: React.ReactNode }> = ({ subHeading }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query Header {site: {siteMetadata: {title}}}`
  );

  return <PureHeader title={title} subHeading={subHeading} />;
};

export default Header;
