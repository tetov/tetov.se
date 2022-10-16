import * as React from "react";

type TimeProp = {
  className?: string;
  itemProp?: string;
  machineReadableDate: string;
  humanReadableDate?: string;
};

export const ArticleTime: React.FC<TimeProp> = ({
  machineReadableDate,
  humanReadableDate,
  className,
  itemProp,
}) => (
  <time
    className={className || "dt-published"}
    itemProp={itemProp || "dateCreated"}
    dateTime={machineReadableDate}
  >
    {humanReadableDate}
  </time>
);
