import { useForm } from "react-hook-form";
import { useState } from "react";

import Header from '../../Header/Header'
import Navigation from '../../ui/Navigation/Navigation'
import TitleH2 from '../../ui/TitleH2/TitleH2'
import ProfileInput from "./ProfileInput/ProfileInput";

function Profile({ currentUser, onClick }) {
  const [inputValues, setInputValues] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (values) => {
    setInputValues({ ...inputValues, ...values });
  }

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
        <form className="profile__form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
          <fieldset className="profile__form-container">
            <ProfileInput
              description="Имя"
              type="text"
              name="name"
              register={register}
              required
              error={errors?.name}
              errorMessage="Введите имя*"
              value={currentUser.name}
            />
            <ProfileInput
              description="E-mail"
              type="text"
              name="email"
              register={register}
              required
              error={errors?.name}
              errorMessage="Введите e-mail*"
              value={currentUser.email}
            />
          </fieldset>
          <div className="profile__button-container">
            <button className="profile__button link-opacity" type="submit">Редактировать</button>
            <button className="profile__button profile__button_exit link-opacity" type="submit" onClick={onClick}>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
    </section >
  )
};

export default Profile;