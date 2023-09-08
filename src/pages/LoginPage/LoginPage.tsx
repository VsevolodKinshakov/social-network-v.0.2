import React, { useEffect} from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
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
import { useLoginUserMutation } from "../../store/api/authApi";



interface LoginPageForm {
  userPassword: string,
  userEmail: string,
}

const loginPageSchema = yup.object({
  userPassword: yup.string().required('Обязательное поле'),
  userEmail: yup.string().required('Обязательное поле')
})


export const LoginPage = () => {

  const { handleSubmit, control, formState: { errors } } = useForm<LoginPageForm>({
    resolver: yupResolver(loginPageSchema),
    defaultValues: {
      userPassword: '',
      userEmail: ''
    }

  });

  const [loginUser, { data: userdata }] = useLoginUserMutation()

  const navigate = useNavigate()

  useEffect(()=> {
    if (userdata?.user_id) {
      navigate('/main')
    }
  }, [userdata, navigate])


  const onSubmit: SubmitHandler<LoginPageForm> = (data) => {
    loginUser ({
      email: data.userEmail,
      password: data.userPassword
    })
  }


  return (
    <LayoutContainer>
      <div className="LoginPage">

        <Heading type="h1" headingText="Авторизация" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => {
              return (
                <AppInput
                  type="text"
                  placeholder="Почтовый ящик"
                  isDisabled={false}
                  hasError={!!errors?.userEmail}
                  errorText={errors?.userEmail?.message}
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
                placeholder="Введите пароль"
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
            />
        </form>
        <LinkButtonWithModal />
        <RegistrationInfo />
      </div>
    </LayoutContainer>
  );
}
