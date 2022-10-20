import type { Argument as classNamesArgument } from "classnames";
import classNames from "classnames";
import * as React from "react";
import type { IconBaseProps } from "react-icons/lib";
import * as Icons from "src/icons";

type JSXSpan = JSX.IntrinsicElements["span"];
type JSXA = JSX.IntrinsicElements["a"];

const Detail = ({ className, children }: JSXSpan) => (
  <span className={className}>{children}</span>
);

const LinkedDetail = ({ className, href, rel, children }: JSXA) => {
  return <a {...{ className, href, rel, children }} />;
};

export type ContactDetailProp = {
  id?: string; // from graphql node used for key attribute
  text: string;
  url?: string;
  icon?: string;
  hcard?: string;
  rel?: string;
  className?: classNamesArgument;
  iconProp?: Partial<IconBaseProps>;
  useIcon?: boolean;
};

const ContactDetail = ({
  text,
  url,
  icon,
  hcard,
  rel,
  className,
  iconProp = {},
  useIcon = true,
}: ContactDetailProp) => {
  const Icon = icon ? Icons[icon] : undefined;

  const prop: JSXA | JSXSpan = {
    className: classNames(hcard, className) || undefined,
    href: url ?? undefined,
    rel: rel ?? "me external",
    children: (
      <>
        {icon && useIcon && <Icon {...iconProp} aria-hidden />}
        {text}
      </>
    ),
  };

  const Component = url ? LinkedDetail : Detail;

  return <Component {...prop} />;
};

export default ContactDetail;
