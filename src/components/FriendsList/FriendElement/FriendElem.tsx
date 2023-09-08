import React from "react";
import { FriendElemStyle } from "./FriendElemStyle.style";

interface FriendElemProps {
  src: string;
  alt: string;
  secondaryText: string;
}

export const FriendElem = ({ src, alt, secondaryText }: FriendElemProps) => {
  return (
    <FriendElemStyle>
      <img src={src} alt={alt} />
      <span className="friend__name">{secondaryText}</span>
    </FriendElemStyle>
  );
};

export default FriendElem;
