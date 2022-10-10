import * as React from "react";

const Footer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <footer className="pt-8 pb-16 items-center">
    {/* <hr className="m-8 text-light-alt dark:text-dark-alt" /> */}
    {children}
  </footer>
);

export default Footer;
