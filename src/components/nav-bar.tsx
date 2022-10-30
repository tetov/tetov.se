import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import querySiteMetadata from "src/hooks/query-site-metadata";
import Logo from "src/logo.inline.svg";

export type NavBarProp = {
  pathname?: string;
};

const NavBar = ({ pathname }: NavBarProp) => {
  const { title, navigation } = querySiteMetadata();

  const commonNavLinkClassNames =
    "px-3 py-2 font-medium link-style-alt text-base";

  return (
    <Disclosure
      as="nav"
      className="text-center md:justify-between mb-8 border-b-2 border-purple"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-6 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-start gap-x-6">
              <div className="flex flex-shrink-0">
                <Link to="/">
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
              {/* Mobile menu button*/}
              <Disclosure.Button
                className={
                  "sm:hidden ml-auto rounded-md p-2 text-gray-400 hover:text-purple text-opacity-100"
                }
              >
                <span className="sr-only">Open navigation menu</span>
                <div className="block w-5 left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      open ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out  ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                      open ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  />
                </div>
              </Disclosure.Button>
              {/* Regular nav buttons */}
              <div className="hidden sm:block ml-auto">
                <div className="flex space-x-4">
                  {navigation.map(({ text, url }) => (
                    <Link
                      key={text}
                      to={url}
                      className={classNames(
                        {
                          "bg-purple": pathname === url,
                          "hover:bg-transparent": pathname === url,
                        },
                        commonNavLinkClassNames,
                      )}
                      aria-current={url === pathname ? "page" : undefined}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu items */}

          <Transition
            enter="transition duration-250 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-250 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <div className="space-y-1 px-2 pt-2 pb-4 flex flex-col duration-500 gap-4">
                {navigation.map(({ text, url }) => (
                  <Disclosure.Button key={text}>
                    <Link
                      key={text}
                      to={url}
                      className={classNames(
                        {
                          "bg-purple": pathname === url,
                          "hover:bg-transparent": pathname === url,
                        },
                        commonNavLinkClassNames,
                      )}
                      aria-current={url === pathname ? "page" : undefined}
                    >
                      {text}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
