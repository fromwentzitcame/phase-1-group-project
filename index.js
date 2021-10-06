
const createEl = element => document.createElement(element);
let thumbPane = document.getElementById('poster_pane')

//details pane elements
let detailsPane = document.getElementById('movie-detail')
let textDetails = document.getElementById('text-details')
let detImg = document.querySelector('#movie-image')
let detCrew = document.querySelector('#movie-crew')
let detRank = document.querySelector('#movie-rank')
let detTitle = document.querySelector('#movie-title')
let detRating = document.querySelector('#movie-rating')
let btnHolder = document.getElementById('btnholder')

function init(){
// display thumbnails for all movies upon load
    fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(movies => displayMovies(movies))
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
        detRating.textContent = `IMDb Rating ${movie.imDbRating}`
    // create like button
        if (btnHolder != 0) {
            btnHolder.replaceChildren();
        }
        let likeBtn = createEl('button')
        likeBtn.innerText = "Like"
        likeBtn.id = "not-liked"
        btnHolder.appendChild(likeBtn)
    // like button interactivity
        likeBtn.addEventListener('click', () => {
            if (likeBtn.innerText === "Like") {
                likeBtn.innerText = "♥ Liked";
                likeBtn.id = "liked";
            } else {
                likeBtn.innerText = "Like";
                likeBtn.id = "not-liked";
            }
        });
    })
}

// iterate through posters
function displayMovies(movies){
    movies.forEach(movie => displayMovie(movie));
}

//Create loops to fetch and display data in thumbpane for nav bar buttons
function topTen(){
    thumbPane.replaceChildren();
    rank = 0;
    while (rank < 11) {
    fetch(`http://localhost:3000/movies/?rank=${rank++}`)
        .then(res => res.json())
        .then(movie => displayMovies(movie))}
}

function bestOf(yr1, yr2) {
    thumbPane.replaceChildren();
    year = yr1
    while(year < yr2){
    fetch(`http://localhost:3000/movies/?year=${year++}`)
        .then(res=>res.json())
        .then(data => displayMovies(data))}
}

function allMovies(){
    thumbPane.replaceChildren();
    init();
}

// call initialization function when the page loads
document.addEventListener('DOMContentLoaded', init)
