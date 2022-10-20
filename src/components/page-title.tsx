import classNames from "classnames";
import React from "react";

type PageTitleProp = {
  itemProp?: string;
  mfClass?: string;
};

const PageTitle = ({
  children,
  itemProp = "headline",
  mfClass = "p-name",
}: React.PropsWithChildren<PageTitleProp>) => (
  <div className="mt-4 mb-8">
    <h1
      itemProp={itemProp}
      className={classNames(
        mfClass,
        "text-4xl font-semibold leading-relaxed text-center"
      )}
    >
      {children}
    </h1>
  </div>
);

export default PageTitle;
