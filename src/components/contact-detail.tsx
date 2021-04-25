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

type IconType = (prop: IconPropWithNameAndSet) => JSX.Element
const getIcon: IconType = ({ set, name, prop }) => {
  const Icon = setImportMapping[set][name]

  return <Icon {...prop} />
}
const ContactLink: React.FC<JSX.IntrinsicElements["a"]> = ({
  children,
  ...prop
}) => (
  <a rel="me external" {...prop}>
    {children}
  </a>
)

const ContactNotLink: React.FC<JSX.IntrinsicElements["span"]> = ({
  children,
  ...prop
}) => <span {...prop}>{children}</span>

const ContactDetail: React.FC<ContactDetailProp> = ({
  contactData: { text, url, icon, hcard },
  className,
  iconProp = {},
}) => {
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
