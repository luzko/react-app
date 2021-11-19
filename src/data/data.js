const genres = [
  {id: 1, title: 'documentery'},
  {id: 2, title: 'comedy'},
  {id: 3, title: 'horror'},
  {id: 4, title: 'crime'}
];

const fields = [
  {id: 1, label: 'Title', type: 'text', key: 'title'},
  {id: 2, label: 'Release Date', type: 'date', key: 'release'},
  {id: 3, label: 'Movie Url', type: 'text', key: 'url'},
  {id: 4, label: 'Rating', type: 'text', key: 'rating'},
  {id: 5, label: 'Genre', type: 'select', key: 'genre'},
  {id: 6, label: 'Runtime', type: 'text', key: 'runtime'},
  {id: 7, label: 'Overview', type: 'textarea', key: 'overview'}
];

const sortOptions = [
  {id: 1, label: 'RELEASE DATE', value: 'date'},
  {id: 2, label: 'NAME', value: 'name'}
];

const genreOptions = genres.map((genre) => ({
  value: genre.title,
  label: genre.title,
}));

export {genres, sortOptions, fields, genreOptions};
