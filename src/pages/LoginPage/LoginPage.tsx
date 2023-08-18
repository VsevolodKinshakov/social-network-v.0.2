import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../typography/Heading";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import { LinkButton } from "../../components/ui/LinkButton/LinkButton";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";

export const LoginPage = () => {
  return (
    <LayoutContainer>
      <div className="LoginPage">
        <Heading type="h1" headingText="Авторизация" />
        <form action="#">
          <AppInput type="tel" placeholder="Номер телефона" isDisabled={true} />
          <AppInput type="password" placeholder="Пароль" isDisabled={true} />
          <AppButton buttonText="Войти" />
        </form>
        <LinkButton linkText="Забыли пароль?" />
        <RegistrationInfo />
      </div>
    </LayoutContainer>
  );
};