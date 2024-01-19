import { getMovies } from '../local_storage/local-storage.js';

export const donutChart = () => {
    const parentElement = document.getElementById('myDonut');
    parentElement.innerHTML = '';

    const canvas = document.createElement('canvas');
    canvas.classList.add('chart-item', 'donut-sizing')
    parentElement.appendChild(canvas);

    const movies = getMovies();
    const genres = movies.map((movie) => movie.genre);
    const obj = {}


    for(const genre of genres){
        if(!(genre in obj)) obj[genre] = 1;
        if(genre in obj) obj[genre]++
    }
    const genreData = Object.values(obj)
    const genreNames = Object.keys(obj)
   

 new Chart(canvas, {
     type: 'doughnut',
     data: {
        labels: genreNames ,
        datasets: [{
          label: 'My First Dataset',
          data: genreData ,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }, 
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}