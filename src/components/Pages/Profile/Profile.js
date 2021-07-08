import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import { emailCheck, nameCheck } from "../../../utils/constants";

import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import TitleH2 from '../../ui/TitleH2/TitleH2'
import ProfileInput from "./ProfileInput/ProfileInput";

function Profile({ handleClickLogout, handleUpdateUser }) {
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation()

  const currentUser = useContext(CurrentUserContext)

  useEffect(() => setValues({
    nameProf: currentUser.name,
    emailProf: currentUser.email
  }),[currentUser, setValues])

  function handleSubmit(evt) {
    evt.preventDefault();

    handleUpdateUser({
      name: values.nameProf,
      email: values.emailProf,
    })
  };

  return (
    <section className="profile">
      <Header>
        <div className="header__logo" aria-label="логотип страницы" />
        <Navigation />
      </Header>
      <main className="profile__main">
        <TitleH2
          title={`Привет, ${currentUser.name}!`}
          sectionClass="text-skin"
        />
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <fieldset className="profile__form-container">
            <ProfileInput
              description="Имя"
              type="text"
              name="nameProf"
              id="nameProf"
              value={values.nameProf || '' }
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              error={errors?.nameProf}
              pattern={nameCheck}
            />
            <ProfileInput
              description="E-mail"
              type="text"
              name="emailProf"
              id="emailProf"
              value={values.emailProf || ''}
              onChange={handleChange}
              error={errors?.emailProf}
              pattern={emailCheck}
            />
          </fieldset>
          <div className="profile__button-container">
            <button className={`profile__button link-opacity ${!isValid? 'profile__button_invalid' : ''}`} type="submit" >Редактировать</button>
            <button className="profile__button profile__button_exit link-opacity" type="submit" onClick={handleClickLogout}>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
    </section >
  )
};

export default Profile;