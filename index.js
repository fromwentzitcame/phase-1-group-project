// insert javascript here
function init(){

    fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(data => displayPosters(data))

}

// render one poster
function displayPoster(movie) {
    let thumbPane = document.getElementById('poster_pane')
    let poster = document.createElement('img');
    poster.className = 'poster';
    poster.alt = movie.title;
    poster.src = movie.image;
    thumbPane.appendChild(poster);
}

// iterate through posters
function displayPosters(movies){
    movies.forEach(movie => displayPoster(movie))
    // const list = document.createElement('ul')
    // const titleContainer = document.getElementById('movie-titles')
    // movies.forEach(movie => {
    //     let title = document.createElement('li');
    //     title.innerText = movie.title;
    //     list.appendChild(title)
    //     console.log(list.length)
    // });
    // titleContainer.appendChild(list)
}






document.addEventListener('DOMContentLoaded', init)