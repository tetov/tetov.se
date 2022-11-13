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
  RiLinksFill,
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
  ["openpgp", RiKey2Fill],
  ["telephone", RiSmartphoneFill],
  ["github", RiGithubFill],
  ["instagram", RiInstagramFill],
  ["twitter", RiTwitterFill],
  ["linkedin", RiLinkedinBoxFill],
  ["matrix", SiMatrix],
  ["signal", SiSignal],
  ["mastodon", RiMastodonFill],
  ["url", RiLinksFill],
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
  printFriendlyText?: string;
  useIcon?: boolean;
};

const ContactDetail = ({
  label,
  text,
  url,
  hcard,
  rel,
  className,
  printFriendlyText,
  useIcon = true,
}: ContactDetailProp) => {
  const Icon = iconMapping.get(label);

  const prop: React.PropsWithChildren<JSXA | JSXSpan> = {
    className: classNames(hcard, className) || undefined,
    href: url ?? undefined,
    rel: rel ?? "me external",
    children: (
      <>
        {useIcon && Icon && (
          <div className="motion-safe:group-hover:animate-pulse inline-block">
            <Icon size="1em" className="inline" aria-hidden />
          </div>
        )}
        <span
          className={classNames({
            "print:hidden": printFriendlyText,
            "pl-1": useIcon,
          })}
        >
          {text}
        </span>
        {printFriendlyText && (
          <span className="hidden print:inline pl 1">{printFriendlyText}</span>
        )}
      </>
    ),
  };

  const Component = url ? LinkedDetail : Detail;

  return (
    <div className="flex group p-2">
      <Component {...prop} />
    </div>
  );
};

export default ContactDetail;
