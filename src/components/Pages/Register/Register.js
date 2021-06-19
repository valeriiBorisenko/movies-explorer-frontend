import { useForm } from "react-hook-form";
import { useState } from "react";

import AuthUsers from "../../ui/AuthUsers/AuthUsers";
import AuthInput from "../../ui/AuthInput/AuthInput";

function Register({ browserLocation }) {

  const [inputValues, setInputValues] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (values) => {
    setInputValues({ ...inputValues, ...values });
  }

  return (
    <section className="register">
      <AuthUsers
        onSubmit={handleSubmit(onFormSubmit)}
        location={browserLocation}
        title="Добро пожаловать!"
        buttonTitle="Зарегистрироваться"
      >
        <AuthInput
          description="Имя"
          type="text"
          name="name"
          register={register}
          required
          error={errors?.name}
          errorMessage="Введите имя"
        />
        <AuthInput
          description="E-mail"
          type="email"
          name="email"
          register={register}
          required
          error={errors?.email}
          errorMessage="Введите email"
        />
        <AuthInput
          description="Пароль"
          type="password"
          name="password"
          register={register}
          required
          error={errors?.password}
          errorMessage="Введите пароль"
        />
      </AuthUsers>
    </section >
  )
};

export default Register;