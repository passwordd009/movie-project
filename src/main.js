import './form.css'
import movieData from './movie-data.json'
import {
    charts
} from './charts.js'
import { donutChart } from './dount-chart.js'


import {
    getMovies,
    setMovies, 
    initializeMovies,
    addMovie,
    removeMovie
} from '../local_storage/local-storage.js'

// console.log(movieData)
const renderMovies = () => {
const ul = document.querySelector('#movie-list');
ul.innerHTML= '';
const movies = getMovies()
console.log(movies)
movies.forEach((movie) => {
  const li = document.createElement('li');
  li.classList.add('movie-card', 'grid-item') 
  li.innerHTML = `
  <h1>${movie.title}</h1>
  <p> Critic Score: ${movie.criticScore} </p>
  <p> Audience Score:${movie.audienceScore} </p>
  <p> Domestic Gross: $${movie.domestic} </p>
  <p> Genre: ${movie.genre} </p>
  `;
  ul.append(li);
})
charts()
donutChart()
}


const handleSubmit = (e) => {

    e.preventDefault()
    
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);
    
    addMovie(formObj)
    renderMovies()
    form.reset()
}


const handleReset = () => {
    const movies = getMovies()
    movies.forEach((movie) => {
        removeMovie(movie)
    })
    initializeMovies()
    renderMovies()
}

const main = () => {
   
    const form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)

    const reset = document.querySelector('#reset')
    reset.addEventListener('click', handleReset)

    if(!getMovies()) initializeMovies()
    renderMovies()


    charts() 
    donutChart()
}
main()




