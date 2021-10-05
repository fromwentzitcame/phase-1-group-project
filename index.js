// insert javascript here
const createEl = element => document.createElement(element);
let thumbPane = document.getElementById('poster_pane')

//details pane elements
let detailsPane = document.getElementById('movie-detail')
let detImg = document.querySelector('#movie-image')
let detCrew = document.querySelector('#movie-crew')
let detRank = document.querySelector('#movie-rank')
let detTitle = document.querySelector('#movie-title')
let detRating = document.querySelector('#movie-rating')


function init(){
// display thumbnails for all movies
    fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(movies => displayMovies(movies))
// display details for first movie upon load
    // fetch('http://localhost:3000/movies/1')
    //     .then(res => res.json())
    //     .then(movie1 => displayMovies(movie1))
    

}

// render one poster
function displayMovie(movie) {
    let poster = createEl('img');
    poster.className = 'poster';
    poster.alt = movie.title;
    poster.src = movie.image;
    thumbPane.appendChild(poster);

// display poster details upon click
    poster.addEventListener('click', () => {
        detImg.src = movie.image
        detCrew.textContent = `Crew: ${movie.crew}`
        detRank.textContent = `Rank: ${movie.rank}`
        detTitle.textContent = movie.fullTitle
        detRating.textContent = movie.imDbRating
    })
}

// iterate through posters
function displayMovies(movies){
    movies.forEach(movie => displayMovie(movie));
}


//Create loops to fetch and display data for buttons in thumbpane
function topTen(){
    thumbPane.replaceChildren();
    rank = 0;
    while (rank < 11) {
    fetch(`http://localhost:3000/movies/?rank=${rank++}`)
        .then(res => res.json())
        .then(movie => displayMovies(movie))}
}

function Best2010(){
    thumbPane.replaceChildren();
    year = 2009
    while(year < 2021){
    fetch(`http://localhost:3000/movies/?year=${year++}`)
    .then(res=>res.json())
    .then(data => displayMovies(data))}
}


function Best2000(){
    thumbPane.replaceChildren();
    year = 1999
    while(year < 2010){
    fetch(`http://localhost:3000/movies/?year=${year++}`)
    .then(res=>res.json())
    .then(data => displayMovies(data))}
}

function bestOldies(){
    thumbPane.replaceChildren();
    year = 1900
    while(year < 2000){
    fetch(`http://localhost:3000/movies/?year=${year++}`)
    .then(res=>res.json())
    .then(data => displayMovies(data))}
}






document.addEventListener('DOMContentLoaded', init)
