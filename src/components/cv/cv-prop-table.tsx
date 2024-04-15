import classNames from "classnames";
import React, { ReactNode } from "react";

export const CVPropTable = ({
  tuples,
}: {
  tuples: [key: string, value: ReactNode][];
}) => {
  const sharedTableCellClassNames = "text-sm px-2 py-1 gray-border";

  return (
    <div className="py-1">
      <table className="table-auto">
        <tbody className="border-t-0 divide-y-0">
          {tuples.map(([key, value]) => (
            <tr key={key} className="gray-border">
              <td
                className={classNames(
                  sharedTableCellClassNames,
                  "font-medium border-r-2 text-right",
                )}
              >
                {key}
              </td>
              <td
                className={classNames(sharedTableCellClassNames, "font-light")}
              >
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
