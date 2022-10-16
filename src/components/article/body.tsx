import classnames from "classnames";
import * as React from "react";
import * as markdownStyles from "src/markdown-styles.module.css";

type Props = {
  content: string;
  itemProp: string;
  className?: string;
};

export const ArticleBody: React.FC<Props> = ({
  content,
  itemProp,
  className,
}) => (
  <section
    className={classnames(
      "e-content max-w-2xl mx-auto",
      className,
      markdownStyles["markdown"]
    )}
    dangerouslySetInnerHTML={{ __html: content }}
    itemProp={itemProp}
  />
);
