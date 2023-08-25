import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppInput } from "../../components/ui/AppInput/AppInput";
import { AppButton } from "../../components/ui/AppButton/AppButton";
import { LayoutContainer } from "../../components/ui/LayoutContainer/LayoutContainer";
import { Heading } from "../../typography/Heading";
import LinkButton from "../../components/ui/LinkButton/LinkButton";

export const Registration = () => {
  const validationSchema = yup.object({
    fullName: yup.string().required("Обязательное поле"),
    email: yup.string().email("Неверный формат email").required("Обязательное поле"),
    password: yup.string().required("Обязательное поле"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), "Пароли должны совпадать"], "Пароли должны совпадать")
      .required("Обязательное поле"),
  });

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <LayoutContainer>
      <div className="LoginPage">
        <Heading type="h1" headingText="Регистрация" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <AppInput
                type="text"
                placeholder="Имя и фамилия"
                isDisabled={false}
                hasError={!!errors?.fullName}
                errorText={errors?.fullName?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <AppInput
                type="eMail"
                placeholder="Введите почтовый ящик"
                isDisabled={false}
                hasError={!!errors?.email}
                errorText={errors?.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                placeholder="Пароль"
                isDisabled={false}
                hasError={!!errors?.password}
                errorText={errors?.password?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                placeholder="Повторите пароль"
                isDisabled={false}
                hasError={!!errors?.confirmPassword}
                errorText={errors?.confirmPassword?.message}
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
