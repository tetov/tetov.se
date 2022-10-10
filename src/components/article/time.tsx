import * as React from "react";

type TimeProp = {
  className?: string;
  itemProp?: string;
  machineReadableDate: string;
};

const Time: React.FC<React.PropsWithChildren<TimeProp>> = ({
  children,
  machineReadableDate,
  className,
  itemProp,
}) => (
  <time
    className={className || "dt-published"}
    itemProp={itemProp || "dateCreated"}
    dateTime={machineReadableDate}
  >
    {children}
  </time>
);

export default Time;
