import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderLogo,
  TehnikumLogo,
  InputWrapper,
  UserProfile,
} from "./Header.style";

const Header: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLogo>
        <a href="#">
          <TehnikumLogo
            id="tehnikum-logo"
            viewBox="0 0 143 23"
            xmlns="http://www.w3.org/2000/svg"
          >
          </TehnikumLogo>
        </a>
      </HeaderLogo>
      <InputWrapper>
        <svg
          className="icon icon-search"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
        <input type="search" id="search" name="search" placeholder="Поиск" />
      </InputWrapper>
      <UserProfile>
        <svg
          className="icon icon-bell"
          viewBox="0 0 23 26"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
        <img
          className="_no-select"
          src="./img/users/andrey-kashirskiy.jpeg"
          alt="Profile of Andrey Kashirskiy"
        />
        <svg
          className="icon icon-arrow _active"
          viewBox="0 0 12 6"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
      </UserProfile>
    </HeaderContainer>
  );
};

export default Header;
