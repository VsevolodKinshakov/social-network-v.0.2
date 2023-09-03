import React from "react";
import { FriendsListStyle, FriendsWrapper } from "./FriendsList.style";
import FriendElem from "./FriendElement/FriendElem";

interface FriendsListProps {
  mainText: string;
  secondaryText: string;
}

export const FriendsList = ({ mainText, secondaryText }: FriendsListProps) => {
  return (
    <FriendsListStyle>
      <div className="Friends__title">
        <h2>{mainText}</h2>
        <span className="count">{secondaryText}</span>
      </div>
      <FriendsWrapper>
      <FriendElem
        src="./img/users/aleksandr-maykov.jpeg"
        alt="Friend"
        secondaryText="Александр"
      />
      <FriendElem
        src="./img/users/sofia-kodra.jpeg"
        alt="Friend"
        secondaryText="Софья"
      />
      <FriendElem
        src="./img/users/andrey-kashirskiy.jpeg"
        alt="Friend"
        secondaryText="Андрей"
      />
      <FriendElem
        src="./img/users/darya-gertner.jpeg"
        alt="Friend"
        secondaryText="Дарья"
      />
      <FriendElem
        src="/img/users/denis-frolov.jpeg"
        alt="Friend"
        secondaryText="Денис"
      />
      <FriendElem
        src="./img/users/mark-krahmalev.jpeg"
        alt="Friend"
        secondaryText="Марк"
      />
      <FriendElem
        src="./img/users/katarina-fisher.jpeg"
        alt="Friend"
        secondaryText="Катарина"
      />
      <FriendElem
        src="./img/users/viktoria.jpeg"
        alt="Friend"
        secondaryText="Виктория"
      />
      <FriendElem
        src="./img/users/gleb.jpeg"
        alt="Friend"
        secondaryText="Глеб"
      />
      </FriendsWrapper>
    </FriendsListStyle>
  );
};
