import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";
import { Heading } from "../../typography/Heading";
import LinkButton from "../../components/ui/LinkButton/LinkButton";
import { useRegisterUserMutation } from "../../store/api/authApi";
import { useNavigate } from "react-router-dom";


interface RegistrationPageForm {
  userFullName: string;
  userEmail: string;
  userCity: string;
  userPassword: string;
  confirmUserPassword: string;
  userPhone: string;
}

export const Registration = () => {
  const validationSchema = yup.object({
    userFullName: yup
      .string()
      .matches(
        /^[A-Za-zА-Яа-яЁё\s]*$/,
        "Поле может содержать только буквы и пробелы"
      )
      .required("Обязательное поле"),
    userEmail: yup
      .string()
      .email("Неверный формат email")
      .required("Обязательное поле"),
    userCity: yup
      .string()
      .matches(
        /^[A-Za-zА-Яа-яЁё\s]*$/,
        "Поле может содержать только буквы и пробелы"
      )
      .required("Обязательное поле"),
    userPassword: yup.string().required("Обязательное поле"),
    confirmUserPassword: yup
      .string()
      .oneOf(
        [yup.ref("userPassword"), "Пароли должны совпадать"],
        "Пароли должны совпадать"
      )
      .required("Обязательное поле"),
    userPhone: yup.string().required("Обязательное поле"),
  });

  const [registerUser, { data: registerData }] = useRegisterUserMutation();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if (registerData) {
      navigate('/')
    }
  }, [registerData, navigate]) 

  const onRegistrationPageSubmit: SubmitHandler<RegistrationPageForm> = (
    data: RegistrationPageForm
  ) => {
    registerUser({
      name: data.userFullName,
      email: data.userEmail,
      phone_number: data.userPhone,
      password: data.userPassword,
      user_city: data.userCity,
    })
  };


  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationPageForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      userFullName: "",
      userEmail: "",
      userCity: "",
      userPassword: "",
      confirmUserPassword: "",
      userPhone: "",
    },
  });

  return (
    <LayoutContainer>
      <div className="LoginPage">
        <Heading type="h1" headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationPageSubmit)}>
          <Controller
            name="userFullName"
            control={control}
            render={({ field }) => (
              <AppInput
                type="text"
                placeholder="Имя и фамилия"
                isDisabled={false}
                hasError={!!errors?.userFullName}
                errorText={errors?.userFullName?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <AppInput
                type="eMail"
                placeholder="Введите почтовый ящик"
                isDisabled={false}
                hasError={!!errors?.userEmail}
                errorText={errors?.userEmail?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                placeholder="Пароль"
                isDisabled={false}
                hasError={!!errors?.userPassword}
                errorText={errors?.userPassword?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="confirmUserPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                placeholder="Повторите пароль"
                isDisabled={false}
                hasError={!!errors?.confirmUserPassword}
                errorText={errors?.confirmUserPassword?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userCity"
            control={control}
            render={({ field }) => (
              <AppInput
                type="text"
                placeholder="Город"
                isDisabled={false}
                hasError={!!errors?.userCity}
                errorText={errors?.userCity?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userPhone"
            control={control}
            render={({ field }) => (
              <AppInput
                type="tel"
                placeholder="Номер телефона"
                isDisabled={false}
                hasError={!!errors?.userPhone}
                errorText={errors?.userPhone?.message}
                {...field}
              />
            )}
          />
          <AppButton type="submit" buttonText="Зарегистрироваться" isPrimary />
        </form>
        <LinkButton to="/" linkText="Уже есть аккаунт?" />
      </div>
    </LayoutContainer>
  );
};
