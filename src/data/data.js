const genres = [
  {
    id: 1,
    title: 'documentery'
  },
  {
    id: 2,
    title: 'comedy'
  },
  {
    id: 3,
    title: 'horror'
  },
  {
    id: 4,
    title: 'crime'
  }
];

const fields = [
  {id: 1, label: 'Title', type: 'text'},
  {id: 2, label: 'Release Date', type: 'date'},
  {id: 3, label: 'Movie Url', type: 'text'},
  {id: 4, label: 'Genre', type: 'select'},
  {id: 5, label: 'Runtime', type: 'text'},
  {id: 6, label: 'Overview', type: 'textarea'}
];

const sortOptions = [
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


const genreOptions = genres.map((genre) => ({
  value: genre.title,
  label: genre.title,
}));

export {genres, sortOptions, fields, genreOptions};
