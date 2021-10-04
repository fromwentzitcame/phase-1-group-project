// insert javascript here
function init(){

    fetch('http://localhost:3000/movies')
    .then(res=>res.json())
    .then(data=>RenderDetails(data))

}

function RenderDetails(movies){
    const list = document.createElement('ul')
    const titleContainer = document.getElementById('movie-titles')
    movies.forEach(movie => {
        let title = document.createElement('li');
        title.innerText = movie.title;
        list.appendChild(title)
        console.log(list.length)
    });
    titleContainer.appendChild(list)
}






document.addEventListener('DOMContentLoaded', init)