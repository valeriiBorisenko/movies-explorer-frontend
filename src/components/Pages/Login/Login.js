import AuthUsers from "../../ui/AuthUsers/AuthUsers";
import AuthInput from "../../ui/AuthInput/AuthInput";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import { emailCheck } from "../../../utils/constants";

function Login({ browserLocation, onLoginUser, errorsApi, messageErrorApi }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation()

  function handleSubmit (evt) {
    evt.preventDefault();

    onLoginUser({
      email: values.emailLog,
      password: values.passwordLog
    })
  }

  return (
    <section className="login">
      <AuthUsers
        onSubmit={handleSubmit}
        location={browserLocation}
        title="Рады видеть!"
        buttonTitle="Войти"
        isValid={isValid}
        errorsApi={errorsApi}
        messageErrorApi={messageErrorApi}
      >
        <AuthInput
          description="E-mail"
          type="email"
          name="emailLog"
          id="emailLog"
          value={values.emailLog || ''}
          onChange={handleChange}
          error={errors?.emailLog}
          pattern={emailCheck}
        />
        <AuthInput
          description="Пароль"
          type="password"
          name="passwordLog"
          id="passwordLog"
          value={values.passwordLog || ''}
          onChange={handleChange}
          error={errors?.passwordLog}
          minLength="8"
        />
      </AuthUsers>
    </section >
  )
};

export default Login;