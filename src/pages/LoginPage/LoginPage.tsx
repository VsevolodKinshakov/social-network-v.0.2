// @ts-nocheck
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import "./LoginPage.scss";
import { Heading } from "../../typography/Heading";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import RegistrationInfo from "../../components/ui/RegistrationInfo/RegistrationInfo";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";
import { LoginInput } from "../../components/ui/LoginInput/LoginInput";
import LinkButtonWithModal from "../../components/ui/ModalForgotPassword/LinkButtonWithModal";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface LoginPageForm {
  userPassword: string,
  userPhone: string,
}

const loginPageSchema = yup.object({
  userPassword: yup.string().required('Обязательное поле'),
  userPhone: yup.string().required('Обязательное поле')
})


export const LoginPage = () => {

  const { handleSubmit, control, formState: { errors } } = useForm<LoginPageForm>({
    resolver: yupResolver(loginPageSchema),
    defaultValues: {
      userPassword: '',
      userPhone: ''
    }

  });

  console.log('errors', errors)

  const onSubmit: SubmitHandler<any> = data => console.log(data);


  return (
    <LayoutContainer>
      <div className="LoginPage">

        <Heading type="h1" headingText="Авторизация" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="userPhone"
            control={control}
            render={({ field }) => {
              return (
                <AppInput
                  type="tel"
                  placeholder="Номер Телефона"
                  isDisabled={false}
                  hasError={!!errors?.userPhone}
                  errorText={errors?.userPhone?.message}
                  {...field}
                />
              )
            }} />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) =>
              <AppInput
                type="password"
                placeholder="Пароль"
                isDisabled={false}
                hasError={!!errors?.userPassword}
                errorText={errors?.userPassword?.message}
                {...field}
              />
            } />
          <AppButton type="submit" buttonText="Войти" isPrimary={true} />
        </form>
        <LinkButtonWithModal />
        <RegistrationInfo />
      </div>
    </LayoutContainer>
  );
}
