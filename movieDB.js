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

// output should be:
// You have watched "Les Miserables" - 5 stars
// You have watched "In Bruges" - 4 stars
// You have watched "Frozen" - 3.5 stars
// You have not seen "Mad Max Fury Road" - 0 stars
