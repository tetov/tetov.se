import classnames from "classnames";
import * as React from "react";

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
      "e-content max-w-2xl mx-auto prose dark:prose-invert dark:prose-code:bg-purple",
      className
    )}
    dangerouslySetInnerHTML={{ __html: content }}
    itemProp={itemProp}
  />
);
