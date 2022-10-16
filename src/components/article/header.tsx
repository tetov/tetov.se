import { Link } from "gatsby";
import * as React from "react";
import PageTitle from "src/components/page-title";

type Prop = {
  url: string;
  itemProp?: string;
  children: React.ReactNode;
};

export const ArticleHeader: React.FC<Prop> = ({ url, itemProp, children }) => (
  <header className="mb-2">
    <PageTitle itemProp={itemProp} mfClass="p-name">
      <Link to={url} className="link-style-alt u-url">
        {children}
      </Link>
    </PageTitle>
  </header>
);
