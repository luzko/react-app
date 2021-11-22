export default class SortService {
  static sort(movies, value) {
    switch (value) {
      case 'date_up':
        return movies.sort((a, b) => {return Date.parse(a.release) - Date.parse(b.release)})
      case 'date_down':
        return movies.sort((a, b) => {return Date.parse(b.release) - Date.parse(a.release)})
      case 'name_up':
        return movies.sort((a, b) => {return b.title.localeCompare(a.title)})
      case 'name_down':
        return movies.sort((a, b) => {return a.title.localeCompare(b.title)})
      case 'rating_up':
        return movies.sort((a, b) => {return Number.parseFloat(a.rating) - Number.parseFloat(b.rating)})
      case 'rating_down':
        return movies.sort((a, b) => {return Number.parseFloat(b.rating) - Number.parseFloat(a.rating)})
      case 'runtime_up':
        return movies.sort((a, b) => {return Number.parseInt(a.runtime) - Number.parseInt(b.runtime)})
      case 'runtime_down':
        return movies.sort((a, b) => {return Number.parseInt(b.runtime) - Number.parseInt(a.runtime)})
    }
  }
}
