var movies = [
    {
      title: "Les Miserables",
      hasWatched: true,
      rating: 5
    },
    {
      title: "In Bruges",
      hasWatched: true,
      rating: 4
    },
    {
      title: "Frozen",
      hasWatched: true,
      rating: 3.5
    },
    {
      title: "Mad Max Fury Road",
      hasWatched: false,
      rating: 0
    }
]

movies.forEach(function(movie) {
  console.log(buildString(movie));
})

function buildString(movie) {
  var result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  }else{
    result += "not seen ";
  }

  result += "\"" + movie.title + "\" - " + movie.rating + " stars";
  return result;
}
