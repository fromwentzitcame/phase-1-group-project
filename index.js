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
<<<<<<< HEAD

    poster.addEventListener('click', () => {
        document.querySelector('#movie-image').src = movie.image
        document.querySelector('#movie-crew').textContent = movie.crew
        document.querySelector('#movie-rank').textContent = movie.rank
        document.querySelector('#movie-title').textContent = movie.title
        document.querySelector('#movie-year').textContent = movie.year
        document.querySelector('#movie-rating').textContent = movie.imDbRating
    })
=======
    categories(movie);
>>>>>>> 51b2bdaa790011454bec067269cd3f4651d711ed
}

// iterate through posters
function displayPosters(movies){
    movies.forEach(movie => displayPoster(movie));
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

function categories(movie){
  
    let list = document.getElementsByClassName('.list')
    let category_pane = document.getElementById('category_pane')
    let movieposter = document.createElement('img');
    list.addEventListener('click', ()=>{
        if(list.innertext = 'Top 10 Movies'){
            do{
                movieposter.className = 'movieposter';
            movieposter.alt = movie.title;
            movieposter.src = movie.image;
           
            }while(movie.rank<10);
            category_pane.appendChild(movieposter);
            
    }else{console.log('yes')}})


    }

     
            

        
    


    
   





document.addEventListener('DOMContentLoaded', init)







<<<<<<< HEAD


document.addEventListener('DOMContentLoaded', init)
=======
>>>>>>> 51b2bdaa790011454bec067269cd3f4651d711ed
