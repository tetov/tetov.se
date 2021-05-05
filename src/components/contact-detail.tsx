import classNames from "classnames"
import React from "react"
import * as RiIcons from "react-icons/ri"
import * as SiIcons from "react-icons/si"

import type { IconBaseProps } from "react-icons/lib"
import type { Argument as classNamesArgument } from "classnames"

import type { IContactData } from "../types"

type ContactDetailProp = {
  contactData: Partial<IContactData>
  className?: classNamesArgument
  iconProp?: Partial<IconBaseProps>
}

type IconPropWithNameAndSet = {
  set: string
  name: string
  prop: IconBaseProps
}

const setImportMapping = {
  ri: RiIcons,
  si: SiIcons,
}

const getIcon = ({ set, name, prop }: IconPropWithNameAndSet) => {
  const Icon = setImportMapping[set][name]

  return <Icon {...prop} />
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
  const Icon = icon ? getIcon({ prop: iconProp, ...icon }) : undefined

  const prop = {
    children: (
      <>
        {Icon || ""}
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
