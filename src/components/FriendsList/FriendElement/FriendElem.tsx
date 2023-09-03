import React from "react";
import { FrienElemStyle } from "./FriendElem.style";

interface FriendElemProps {
  src: string;
  alt: string;
  secondaryText: string;
}

export const FriendElem = ({ src, alt, secondaryText }: FriendElemProps) => {
  return (
    <FrienElemStyle>
      <img src={src} alt={alt} />
      <span className="friend__name">{secondaryText}</span>
    </FrienElemStyle>
  );
};

export default FriendElem;
