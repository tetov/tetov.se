import type { Argument as classNamesArgument } from "classnames";
import classNames from "classnames";
import * as React from "react";
import type { IconBaseProps } from "react-icons/lib";

import {
  RiGenderlessFill,
  RiGithubFill,
  RiInstagramFill,
  RiKey2Fill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiMastodonFill,
  RiSmartphoneFill,
  RiTwitterFill,
  RiUserSmileFill,
} from "react-icons/ri";
import { SiMatrix, SiSignal } from "react-icons/si";

type JSXSpan = JSX.IntrinsicElements["span"];
type JSXA = JSX.IntrinsicElements["a"];

const Detail = ({ className, children }: JSXSpan) => (
  <span className={className}>{children}</span>
);

const LinkedDetail = ({ className, href, rel, children }: JSXA) => {
  return <a {...{ className, href, rel, children }} />;
};

const iconMapping = new Map([
  ["name", RiUserSmileFill],
  ["gender-identity", RiGenderlessFill],
  ["email", RiMailFill],
  ["opengpg", RiKey2Fill],
  ["telephone", RiSmartphoneFill],
  ["github", RiGithubFill],
  ["instagram", RiInstagramFill],
  ["twitter", RiTwitterFill],
  ["linkedin", RiLinkedinBoxFill],
  ["matrix", SiMatrix],
  ["signal", SiSignal],
  ["mastodon", RiMastodonFill],
]);

export type ContactDetailProp = {
  label: string;
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
  label,
  text,
  url,
  hcard,
  rel,
  className,
  iconProp = {},
  useIcon = true,
}: ContactDetailProp) => {
  const Icon = iconMapping.get(label);

  const prop: JSXA | JSXSpan = {
    className: classNames(hcard, className) || undefined,
    href: url ?? undefined,
    rel: rel ?? "me external",
    children: (
      <>
        {useIcon && Icon && <Icon {...iconProp} aria-hidden />}
        {text}
      </>
    ),
  };

  const Component = url ? LinkedDetail : Detail;

  return <Component {...prop} />;
};

export default ContactDetail;
