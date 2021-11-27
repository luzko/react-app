import React, {useCallback, useState} from "react";

export const useToggleOverview = () => {
  const [movieOverview, setMovieOverview] = useState()
  const showOverview = useCallback(movie => {
    setMovieOverview(movie)
  }, [movieOverview])
  return [movieOverview, showOverview]
}
