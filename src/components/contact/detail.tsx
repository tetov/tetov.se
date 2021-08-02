import type { Argument as classNamesArgument } from "classnames";
import classNames from "classnames";
import * as Icons from "icons";
import React from "react";
import type { IconBaseProps } from "react-icons/lib";

type Prop = {
  contactData: Partial<GatsbyTypes.ContactData>;
  className?: classNamesArgument;
  iconProp?: Partial<IconBaseProps>;
  hidden?: boolean;
};

type JSXSpan = JSX.IntrinsicElements["span"];
type JSXA = JSX.IntrinsicElements["a"];
type JSXLink = JSX.IntrinsicElements["link"];

const LinkedDetail: React.FC<JSXA> = (prop) => (
  <a rel="me external" {...prop}></a>
);

const Detail: React.FC<JSXSpan> = (prop) => <span {...prop} />;

const HiddenDetail: React.FC<JSXLink> = (prop) => (
  <link rel="me external" {...prop} />
);

const ContactDetail: React.FC<Prop> = ({
  contactData: { text, url, icon, hcard, rel },
  className,
  iconProp = {},
  hidden = false,
}) => {
  iconProp["aria-hidden"] = true;
  const Icon = icon ? Icons[icon] : undefined;

  const children = !hidden ? (
    <>
      {icon && <Icon {...iconProp} />}
      {text || ""}
    </>
  ) : undefined;

  const relAttribute = rel ? rel.join(" ") : "me external";

  const prop = {
    className: classNames(hcard, className),
    href: url || undefined,
    rel: relAttribute,
    children,
  };

  let Component: React.FC<JSXA | JSXSpan | JSXLink>;

  if (url) {
    if (hidden) {
      Component = HiddenDetail;
    } else {
      Component = LinkedDetail;
    }
  } else {
    Component = Detail;
  }

  return <Component {...prop} />;
};

export default ContactDetail;
