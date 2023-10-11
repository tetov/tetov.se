import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import querySiteMetadata from "src/hooks/query-site-metadata";
import Logo from "src/logo.inline.svg";

type NavLinksProp = {
  pathname?: string;
  horizontal?: boolean;
  navigation: readonly { text: string; url: string }[];
};

const NavLinks = ({
  pathname,
  horizontal = false,
  navigation,
}: NavLinksProp) => {
  return (
    <ul className={classNames({ flex: horizontal }, "font-medium")}>
      {navigation.map(({ text, url }) => (
        <li
          key={text}
          className={classNames({ flex: horizontal }, "px-3 py-2")}
        >
          <Link
            to={url}
            className={classNames(
              {
                "bg-dark-purple text-dark-text": pathname === url,
                "hover:text-purple": pathname !== url,
              },
              "px-3 py-2",
            )}
            aria-current={url === pathname ? "page" : undefined}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

type NavBarProp = {
  pathname?: string;
  className?: string;
};

const NavBar = ({ pathname, className }: NavBarProp) => {
  const { title, navigation } = querySiteMetadata();

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "text-center md:justify-between mb-8 border-b-2 border-dark-purple",
        className,
      )}
    >
      <div className="mx-auto px-6 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-start gap-x-6">
          <div className="flex flex-shrink-0">
            <Link to="/" aria-hidden>
              <Logo className="h-8 w-auto flex flex-shrink-0" />
            </Link>
          </div>
          <div className="flex items-start ">
            <Link to="/">
              <span className="text-xl font-bold tracking-tighter leading-tight whitespace-nowrap">
                {title}
              </span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <Disclosure.Button
            className={
              "sm:hidden ml-auto rounded-md p-2 text-gray-700 dark:text-gray-400 "
            }
          >
            <span className="sr-only">Open navigation menu</span>
            <div
              className="block w-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            >
              <span className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ui-open:rotate-45 ui-not-open:-translate-y-1.5" />
              <span className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ui-open:opacity-0" />
              <span className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ui-open:-rotate-45 ui-not-open:translate-y-1.5" />
            </div>
          </Disclosure.Button>
          {/* Regular nav menu */}
          <div className="hidden sm:block ml-auto">
            <div className="flex space-x-4">
              <NavLinks
                pathname={pathname}
                horizontal={true}
                navigation={navigation}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile nav menu */}
      <Transition
        enter="transition duration-250 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-250 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="space-y-1 px-2 pt-2 pb-4 flex flex-col duration-500 gap-4">
          <NavLinks pathname={pathname} navigation={navigation} />
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default NavBar;
export { NavLinks };
export type { NavBarProp };
