const genres = [
  {id: 1, title: 'all'},
  {id: 2, title: 'documentery'},
  {id: 3, title: 'comedy'},
  {id: 4, title: 'horror'},
  {id: 5, title: 'crime'}
];

const genreOptions = [
  'documentery',
  'comedy',
  'horror',
  'crime'
]

const sortOptions = [
  {id: 1, label: 'RELEASE DATE ↑', value: 'date_up'},
  {id: 2, label: 'RELEASE DATE ↓', value: 'date_down'},
  {id: 3, label: 'NAME ↑', value: 'name_up'},
  {id: 4, label: 'NAME ↓', value: 'name_down'},
  {id: 5, label: 'RATING ↑', value: 'rating_up'},
  {id: 6, label: 'RATING ↓', value: 'rating_down'},
  {id: 7, label: 'RUNTIME ↑', value: 'runtime_up'},
  {id: 8, label: 'RUNTIME ↓', value: 'runtime_down'}
];

export {genres, sortOptions, genreOptions};
