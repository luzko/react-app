import {useMemo} from "react";
import SortService from '../service/SortService';

export const useSortedMovies = (movies, value) => {
  return useMemo(() => {
    return SortService.sort(movies, value);
  }, [movies, value])
}
