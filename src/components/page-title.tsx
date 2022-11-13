import classNames from "classnames";
import React from "react";

type H1Prop = React.PropsWithChildren<
  PageTitleProp & JSX.IntrinsicElements["h1"]
>;

const H1 = ({ itemProp, mfClass, children }: H1Prop) => (
  <h1
    itemProp={itemProp}
    className={classNames(
      mfClass,
      "text-4xl font-semibold leading-relaxed text-center",
    )}
  >
    {children}
  </h1>
);

type PageTitleProp = {
  itemProp?: string;
  mfClass?: string;
  articleHeader?: boolean;
};

const PageTitle = ({
  children,
  itemProp = "headline",
  mfClass = "p-name",
  articleHeader = true,
}: React.PropsWithChildren<PageTitleProp>) => {
  const containerProp = { className: "mt-4 mb-8" };
  const h1Prop = { itemProp, mfClass, children };
  return (
    <>
      {articleHeader ? (
        <header {...containerProp}>
          <H1 {...h1Prop} />
        </header>
      ) : (
        <div {...containerProp}>
          <H1 {...h1Prop} />
        </div>
      )}
    </>
  );
};

export default PageTitle;
