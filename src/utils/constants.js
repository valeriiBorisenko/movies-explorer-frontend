export const techs = [
  {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'JS',
  },
  {
    id: 4,
    name: 'React',
  },
  {
    id: 5,
    name: 'Git',
  },
  {
    id: 6,
    name: 'Express.js',
  },
  {
    id: 7,
    name: 'Mongo.db',
  },
]

export const savedMovies = [
  {
    id: 1,
    url: "https://picsum.photos/500/280",
    name: "33 слова о дизайне",
    duration: 61,
  },
  {
    id: 2,
    url: "https://picsum.photos/520/291",
    name: "Киноальманах «100 лет дизайна»",
    duration: 54,
  },
  {
    id: 3,
    url: "https://picsum.photos/510/286",
    name: "В погоне за Бенкси",
    duration: 89,
  },

]

export const titleMoviesCardList = {
  standart: 'Воспользуйтесь поиском',
  error: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  notFound: 'Ничего не найдено',
  notMovies: 'Во вкладке Фильмы вы можете найти и добавить себе фильмы'
}

export const nameCheck = '^[а-яА-ЯЁёa-zA-Z\\s\\-]+$'
export const emailCheck = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'