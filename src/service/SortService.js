export default class SortService {
  static sort(movies, value) {
    switch (value.field) {
      case 'RELEASE DATE':
        return value.direction === 'asc' ?
            movies.sort((a, b) => {return Date.parse(a.release) - Date.parse(b.release)}) :
            movies.sort((a, b) => {return Date.parse(b.release) - Date.parse(a.release)})
      case 'NAME':
        return value.direction === 'asc' ?
            movies.sort((a, b) => {return a.title.localeCompare(b.title)}) :
            movies.sort((a, b) => {return b.title.localeCompare(a.title)})
      case 'RATING':
        return value.direction === 'asc' ?
            movies.sort((a, b) => {return Number.parseFloat(a.rating) - Number.parseFloat(b.rating)}) :
            movies.sort((a, b) => {return Number.parseFloat(b.rating) - Number.parseFloat(a.rating)})
      case 'RUNTIME':
        return value.direction === 'asc' ?
            movies.sort((a, b) => {return Number.parseInt(a.runtime) - Number.parseInt(b.runtime)}) :
            movies.sort((a, b) => {return Number.parseInt(b.runtime) - Number.parseInt(a.runtime)})
    }
  }
}
