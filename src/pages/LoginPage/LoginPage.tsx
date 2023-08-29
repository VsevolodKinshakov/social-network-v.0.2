import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import { Heading } from "../../typography/Heading";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import RegistrationInfo from "../../components/ui/RegistrationInfo/RegistrationInfo";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";
import LinkButtonWithModal from "../../components/ui/ModalForgotPassword/LinkButtonWithModal";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { setUser } from "../../store/slices/auth";
import { RootState } from "../../store/store";



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

  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=> {
    if (user?.email) {
      navigate('/main')
    }
  }, [user, navigate])

  console.log('errors', errors)

  const onSubmit: SubmitHandler<any> = (data) => {
    dispatch(setUser({email: 'test@gmail.com'}))
  }


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
          <AppButton
            type="submit"
            buttonText="Войти"
            isPrimary={true}
            onClick={() => dispatch(setUser({ email: 'test' }))} 
            />
        </form>
        <LinkButtonWithModal />
        <RegistrationInfo />
      </div>
    </LayoutContainer>
  );
}
