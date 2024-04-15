import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { LEFT_COL_WIDTH } from ".";

export const CVSection = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  // check if null or array len 0
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }
  return (
    <section>
      <div className="mt-8 mb-2 flex-row flex [page-break-inside:avoid]">
        {/* width set up like CVEntry */}
        <div className={classNames("flex", LEFT_COL_WIDTH)} />
        <div className="flex ml-2 w-full max-w-prose">
          <h2 className="text-2xl">{title}</h2>
        </div>
      </div>
      <hr className="gray-border border-y-2" />
      <div className="border-collapse">{children}</div>
    </section>
  );
};
