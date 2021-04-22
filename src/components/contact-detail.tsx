import classNames from "classnames"
import React from "react"
import * as Icons from "react-feather"

import type { IconProps } from "react-feather"

type ContactDetailProp = {
  contactDetails: GatsbyTypes.ContactDetail
  className?: string
  iconProp?: IconProps
}

const ContactDetail: React.FC<ContactDetailProp> = ({
  contactDetails: { text, url, icon, hcard },
  className,
  iconProp,
}) => {
  const Icon: Icons.Icon = Icons[icon]

  const wrapperProp = {
    children: (
      <>
        {Icon && <Icon {...iconProp} />}
        {text || ""}
      </>
    ),
    className: classNames(hcard, className),
  }

  return url ? (
    <a href={url} rel="me external" {...wrapperProp} />
  ) : (
    <span {...wrapperProp} />
  )
}

export default ContactDetail
