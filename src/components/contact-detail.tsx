import type { Argument as classNamesArgument } from "classnames";
import classNames from "classnames";
import * as React from "react";
import type { IconBaseProps } from "react-icons/lib";
import * as Icons from "src/icons";

type JSXSpan = JSX.IntrinsicElements["span"];
type JSXA = JSX.IntrinsicElements["a"];

const Detail: React.FC<JSXSpan> = ({ className, children }) => (
  <span className={className}>{children}</span>
);

const LinkedDetail: React.FC<JSXA> = ({ className, href, rel, children }) => {
  return <a {...{ className, href, rel, children }} />;
};

type Prop = {
  contactData: Partial<Queries.ContactData>;
  className?: classNamesArgument;
  iconProp?: Partial<IconBaseProps>;
  useIcon?: boolean;
};

const ContactDetail: React.FC<Prop> = ({
  contactData: { text, url, icon, hcard, rel },
  className,
  iconProp = {},
  useIcon = true,
}) => {
  iconProp["aria-hidden"] = true;
  const Icon = icon ? Icons[icon] : undefined;

  const relAttribute = rel ? rel.join(" ") : "me external";

  const prop: JSXA | JSXSpan = {
    className: classNames(hcard, className) || undefined,
    href: url ?? undefined,
    rel: relAttribute,
    children: (
      <>
        {icon && useIcon && <Icon {...iconProp} />}
        {text}
      </>
    ),
  };

  const Component = url ? LinkedDetail : Detail;

  return <Component {...prop} />;
};

export default ContactDetail;
