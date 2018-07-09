var movieDB = [
    {
        title: "Interstellar",
        stars: 5,
        hasWatched: true
    },
    {
        title: "Fight club",
        stars: 4,
        hasWatched: false
    },
    {
        title: "Mad Max Fury",
        stars: 4.5,
        hasWatched: true
    },{
        title: "Oceans8",
        stars: 3.5,
        hasWatched: false
    }
]

movieDB.forEach(function(movie){
    if(movie.hasWatched == true){
        console.log("You have watched \"" + movie.title + "\" - " + movie.stars + " stars");
    }
    else{
        console.log("You have not seen \"" + movie.title + "\" - " + movie.stars + " stars");
    }
});
