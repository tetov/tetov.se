import { Link } from "gatsby";
import React from "react";

type Prop = {
  url: string;
  itemProp?: string;
  children: React.ReactNode;
};

const ContentHeader: React.FC<Prop> = ({
  url,
  itemProp = "headline",
  children,
}) => (
  <header className="text-center md:justify-between mb-16 md:mb-12">
    <h2 className="mt-4 w-2/3 text-2xl md:text-4xl font-light inline-block leading-relaxed">
      <Link
        to={url}
        className="p-name link-style-alt u-url"
        itemProp={itemProp}
      >
        {children}
      </Link>
    </h2>
  </header>
);

export default ContentHeader;
