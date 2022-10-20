import classNames from "classnames";
import React from "react";

type PageTitleProp = {
  itemProp?: string;
  mfClass?: string;
};

const PageTitle: React.FC<React.PropsWithChildren<PageTitleProp>> = ({
  children,
  itemProp = "headline",
  mfClass = "p-name",
}) => (
  <div className="mt-4 mb-8">
    <h1
      itemProp={itemProp}
      className={classNames(
        mfClass,
        "text-4xl font-light leading-relaxed text-center"
      )}
    >
      {children}
    </h1>
  </div>
);

export default PageTitle;
