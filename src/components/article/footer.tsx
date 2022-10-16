import { Link } from "gatsby";
import * as React from "react";
import querySiteMetadata from "src/hooks/query-site-metadata";
import Logo from "src/logo.inline.svg";

export const ArticleFooter: React.FC<
  React.PropsWithChildren<{ pathname: string }>
> = ({ children, pathname }) => (
  <div className="text-sm text-center">
    <Link to={pathname}>
      <Logo className="w-8 h-8 rounded-full mx-auto mt-12 mb-6" />
      {children && <p className="italic">{children}</p>}
    </Link>
    <p>
      <Link to="/contact" className="link-style">
        {querySiteMetadata().author}
      </Link>
    </p>
  </div>
);
