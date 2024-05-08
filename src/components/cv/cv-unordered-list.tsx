import React, { type PropsWithChildren } from "react";

export const CVUnorderedList = ({ children }: PropsWithChildren) => (
  <ul className="list-inside list-disc marker:text-purple print:marker:text-light-text">
    {children}
  </ul>
);
