import classNames from "classnames"
import React from "react"

import * as Icons from "../icons"

import type { IconBaseProps } from "react-icons/lib"
import type { Argument as classNamesArgument } from "classnames"

import type { IContactData } from "../types"

type ContactDetailProp = {
  contactData: Partial<IContactData>
  className?: classNamesArgument
  iconProp?: Partial<IconBaseProps>
}

type ContactLinkProp = JSX.IntrinsicElements["a"] & {
  children: React.ReactNode
}

type ContactNotLinkProp = JSX.IntrinsicElements["span"] & {
  children: React.ReactNode
}

const ContactLink = ({ children, ...prop }: ContactLinkProp) => (
  <a rel="me external" {...prop}>
    {children}
  </a>
)

const ContactNotLink = ({ children, ...prop }: ContactNotLinkProp) => (
  <span {...prop}>{children}</span>
)

const ContactDetail = ({
  contactData: { text, url, icon, hcard },
  className,
  iconProp = {},
}: ContactDetailProp) => {
  iconProp["aria-hidden"] = true
  const Icon = icon ? Icons[icon] : undefined

  const prop = {
    children: (
      <>
        {icon && <Icon {...iconProp} />}
        {text || ""}
      </>
    ),
    className: (hcard || className) && classNames(hcard, className),
    href: url || undefined,
  }

  const ContactComponent = url ? ContactLink : ContactNotLink

  return <ContactComponent {...prop} />
}

export default ContactDetail
