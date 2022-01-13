import React from 'react';
import renderer from 'react-test-renderer';
import SearchView from './SearchView';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {MemoryRouter} from 'react-router';

const mockStore = configureStore();

const initialState = {
  processing: false,
  error: null,
  movie: null,
  movies: [
    {
      'id': 1,
      'title': 'mock movie 1',
      'tagline': 'mock tagline 1',
      'vote_average': 9.9,
      'vote_count': 0,
      'release_date': '2021-04-18',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'mock overview',
      'budget': 1000,
      'revenue': 2000,
      'genres': ['Drama', 'Romance'],
      'runtime': 90
    },
    {
      'id': 2,
      'title': 'mock movie 2',
      'tagline': 'mock tagline 2',
      'vote_average': 9.9,
      'vote_count': 0,
      'release_date': '2021-01-01',
      'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      'overview': 'mock overview 2',
      'budget': 1000,
      'revenue': 2000,
      'genres': ['Drama', 'Romance'],
      'runtime': 100
    },
  ],
  filterSort: {
    sortBy: 'vote_average',
    sortOrder: 'desc',
    filter: '',
    search: '',
    searchBy: 'title'
  }
}

const store = mockStore(initialState);

test('snapshot test for search view', () => {
  const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <SearchView/>
        </Provider>
      </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
