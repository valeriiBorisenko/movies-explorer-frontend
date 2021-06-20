import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import AuthUsers from "../../ui/AuthUsers/AuthUsers";
import AuthInput from "../../ui/AuthInput/AuthInput";
import { moviesUrl } from "../../../utils/routes";

function Login({ browserLocation }) {

  const history = useHistory()
  const [inputValues, setInputValues] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (values) => {
    setInputValues({ ...inputValues, ...values })
    history.push(moviesUrl)
  }

  return (
    <section className="login">
      <AuthUsers
        onSubmit={handleSubmit(onFormSubmit)}
        location={browserLocation}
        title="Рады видеть!"
        buttonTitle="Войти"
      >
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

export default Login;