const mockMovies = {
  movies: [
    {
      id: 1,
      title: 'The Green Mile',
      description: 'A prisoner with a divine gift appears in a prison for death row. Mystical drama based on the novel by Stephen King',
      year: 1999,
      poster: 'https://nathanburgessinsights.files.wordpress.com/2018/10/img_1794.jpg',
      genres: ['fantasy', 'drama', 'detective']
    },
    {
      id: 2,
      title: 'Forrest Gump',
      description: 'Half a century of US history through the eyes of an Alabama eccentric. An absolute classic by Robert Zemeckis with Tom Hanks',
      year: 1994,
      poster: 'https://www.2semechki.ru/site-content/uploads/images/permmag/forestgamp_dvd.jpg',
      genres: ['comedy', 'drama']
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A fantastic epic about a choking Earth, space flights and paradoxes of time. Oscar for special effects',
      year: 2014,
      poster: 'https://www.kino-teatr.ru/movie/posters/big/6/55826.jpg',
      genres: ['fantasy', 'drama']
    },
    {
      id: 4,
      title: 'Intouchables',
      description: 'An aristocrat in a wheelchair hires a former prisoner as a nurse. A sparkling French comedy with Omar Sy',
      year: 2011,
      poster: 'https://www.thomann.de/thumb/opengraph/pics/prod/280473.jpg',
      genres: ['comedy', 'drama']
    },
    {
      id: 5,
      title: 'The Matrix',
      description: 'Hacker Neo learns that his world is virtual. Outstanding action game that proves spectacular cinema can be smart',
      year: 1999,
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/37fc55e7-dfc7-406f-a187-17ef49f65b6f/300x450',
      genres: ['fantasy']
    },
    {
      id: 6,
      title: 'Schindler\'s List',
      description: 'The story of a German industrialist who saved thousands of lives during the Holocaust. Drama by Steven Spielberg',
      year: 1993,
      poster: 'https://images-na.ssl-images-amazon.com/images/I/61MeTlsDRtL._SX341_BO1,204,203,200_.jpg',
      genres: ['drama']
    },
    {
      id: 7,
      title: 'Shutter Island',
      description: 'The bailiff turns out to be a hostage of a clinic for the insane. Compound detective with Leonardo DiCaprio',
      year: 2009,
      poster: 'https://upload.wikimedia.org/wikipedia/ru/2/22/Kinopoisk.ru-Shutter-Island-1094940.jpg',
      genres: ['thriller']
    }
  ]
}

const mockGenres = [
  {
    id: 1,
    title: 'fantasy'
  },
  {
    id: 2,
    title: 'drama'
  },
  {
    id: 3,
    title: 'detective'
  },
  {
    id: 4,
    title: 'comedy'
  },
  {
    id: 5,
    title: 'thriller'
  }
];

const mockOptions = [
  {
    id: 1,
    label: 'Release Date',
    value: 'year'
  },
  {
    id: 2,
    label: 'Name',
    value: 'title'
  }
];

export {mockMovies, mockGenres, mockOptions};