import classNames from "classnames";
import React, { PropsWithChildren, ReactNode } from "react";
import { cvFormatTimespan } from "src/components/cv";
import { LEFT_COL_WIDTH } from "./";

type CVEntryProp = {
  startDate?: string;
  endDate?: string;
  heading?: React.ReactNode;
  url?: string;
};
export const CVEntry = ({
  startDate,
  endDate,
  heading,
  children,
}: PropsWithChildren<CVEntryProp>) => (
  <div className="mt-6 mb-4 flex-row flex">
    <div
      className={classNames(
        "flex text-base tracking-tight pt-1 mr-2",
        LEFT_COL_WIDTH,
      )}
    >
      {cvFormatTimespan({ startDate, endDate })}
    </div>
    {(heading && (
      <div className="flex w-full flex-col max-w-prose">
        <div className="flex">
          <h3 className="mb-1 font-bold tracking-widest text-md">{heading}</h3>
        </div>
        <div className="flex flex-col">{children}</div>
      </div>
    )) || <div className="w-full max-w-prose">{children}</div>}
  </div>
);

export const CVEntryBody = ({
  children,
  description,
}: PropsWithChildren<{ description: ReactNode }>) => (
  <>
    <div className="flex max-w-prose font-light whitespace-pre-line">
      {description}
    </div>
    <div className="pt-2 flex min-w-full">{children}</div>
  </>
);
