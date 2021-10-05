// insert javascript here
function init(){
// display thumbnails for all movies
    fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(data => displayPosters(data))
// display details for first movie upon load
    // fetch('http://localhost:3000/movies/1')
    //     .then(res => res.json())
    //     .then(movie1 => displayDetails(movie1))
    

}

// render one poster
function displayPoster(movie) {
    let thumbPane = document.getElementById('poster_pane')
    let poster = document.createElement('img');
    poster.className = 'poster';
    poster.alt = movie.title;
    poster.src = movie.image;
    thumbPane.appendChild(poster);

    poster.addEventListener('click', () => {
        document.querySelector('#movie-image').src = movie.image
        document.querySelector('#movie-crew').textContent = movie.crew
        document.querySelector('#movie-rank').textContent = movie.rank
        document.querySelector('#movie-title').textContent = movie.title
        document.querySelector('#movie-year').textContent = movie.year
        document.querySelector('#movie-rating').textContent = movie.imDbRating
    })

    // categories(movie);
}

// iterate through posters
function displayPosters(movies){
    movies.forEach(movie => displayPoster(movie));
}


//create a function called displayDetails










// function categories(movie){
  
//     let list = document.getElementsByClassName('.list')
//     let category_pane = document.getElementById('category_pane')
//     let movieposter = document.createElement('img');
//     list.addEventListener('click', ()=>{
//         if(list.innertext = 'Top 10 Movies'){
//             do{
//                 movieposter.className = 'movieposter';
//             movieposter.alt = movie.title;
//             movieposter.src = movie.image;
           
//             }while(movie.rank<10);
//             category_pane.appendChild(movieposter);
            
//     }else{console.log('yes')}})


//     }





document.addEventListener('DOMContentLoaded', init)
