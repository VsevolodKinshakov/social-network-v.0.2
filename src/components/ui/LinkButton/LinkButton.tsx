import React from "react";

type LinkButtonProps = {
  linkText: string
}

export const LinkButton = ({ linkText }: LinkButtonProps) => {
  return (
    <a href="#">{linkText}</a>
  )
}