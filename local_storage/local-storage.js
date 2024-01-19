import movieData from '../src/movie-data.json'

const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  const getLocalStorageKey = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
 
  export const setMovies = (movies) => setLocalStorageKey('movies', movies);
  export const getMovies = () => getLocalStorageKey('movies');
  
  export const initializeMovies = () => setMovies(movieData);
  
  export const addMovie = (movie) => {
    const movies = getMovies();
    setMovies([movie,...movies]);
  }
  
  export const removeMovie = (movieToRemove) => {
    const movies = getMovies().filter((movie) => movie !== movieToRemove);
    setMovies([...movies]);
  }
  