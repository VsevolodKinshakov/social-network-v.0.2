import React from "react";
import "./RegistrationInfo.style"
import {
  RegistrationContainer,
  RegistrationText,
  RegistrationParagraph,
  IconsWrapper,
  RegistrationIcon,
} from "./RegistrationInfo.style";
import LinkButton from "../LinkButton/LinkButton";

type RegistrationIconProps = {
  className: string;
  href: string;
  src: string;
  alt: string;
};

const RegistrationIcons = ({ className, href, src, alt }: RegistrationIconProps) => {
  return (
      <a className={className} href={href}>
          <img src={src} alt={alt} />
      </a>
  );
};

const RegistrationInfo = () => {
  return (
    <RegistrationContainer>
      <RegistrationText>
        <LinkButton to="/reg" 
        linkText="У вас нет аккаунта? Зарегистрироваться" />
        </RegistrationText>
      <RegistrationParagraph>Войти с помощью</RegistrationParagraph>
      <IconsWrapper>
        <RegistrationIcon className="reg__link google-link" href="#">
          <img src="/img/icons/google.svg" alt="Google" />
        </RegistrationIcon>
        <RegistrationIcon className="reg__link google-plus-link" href="#">
          <img src="/img/icons/google-plus.svg" alt="Google Plus" />
        </RegistrationIcon>
        <RegistrationIcon className="reg__link yandex-link" href="#">
          <img src="/img/icons/yandex.svg" alt="Yandex" />
        </RegistrationIcon>
        <RegistrationIcon className="reg__link mail-ru-link" href="#">
          <img src="/img/icons/mail-ru.svg" alt="Mail.ru" />
        </RegistrationIcon>
      </IconsWrapper>
    </RegistrationContainer>
  );
};


export default RegistrationInfo;
