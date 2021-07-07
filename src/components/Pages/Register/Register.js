import AuthUsers from "../../ui/AuthUsers/AuthUsers";
import AuthInput from "../../ui/AuthInput/AuthInput";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import { emailCheck, nameCheck } from "../../../utils/constants";


function Register({ browserLocation, onRegisterUser }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation()

  function handleSubmit (evt) {
    evt.preventDefault();

    onRegisterUser({
      name: values.nameReg,
      email: values.emailReg,
      password: values.passwordReg
    })
  }
  
  return (
    <section className="register">
      <AuthUsers
        onSubmit={handleSubmit}
        location={browserLocation}
        title="Добро пожаловать!"
        buttonTitle="Зарегистрироваться"
        isValid={isValid}
      >
        <AuthInput
          description="Имя"
          type="text"
          name="nameReg"
          id="nameReg"
          value={values.nameReg || ''}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          error={errors?.nameReg}
          pattern={nameCheck}
        />
        <AuthInput
          description="E-mail"
          type="email"
          name="emailReg"
          id="emailReg"
          value={values.emailReg || ''}
          onChange={handleChange}
          error={errors?.emailReg}
          pattern={emailCheck}
        />
        <AuthInput
          description="Пароль"
          type="password"
          name="passwordReg"
          id="passwordReg"
          value={values.passwordReg || ''}
          onChange={handleChange}
          error={errors?.passwordReg}
          minLength="8"
        />
      </AuthUsers>
    </section >
  )
};

export default Register;