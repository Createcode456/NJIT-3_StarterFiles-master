/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // Completed additional Variables.
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            months:[,'jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'],
         title:"IMDB + Ari’s Top TV Shows",
         owner: "Ari",
         github:"https://github.com/Createcode456/NJIT-3_StarterFiles-master",
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
          getMonthText(dateArray) {
            var year = dateArray[0];
            var month = this.months[dateArray[1]-1];
            var day = dateArray[2];
            return month +',' +day + ',' + year;

          },
          posterClick(index)
          {
            const movie = this.movies[index];
             movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
          },

          timeText(minutes)
          {
const hours = Math.trunc(minutes/60);
const mins = minutes % 60;
return hours + "h" + mins +"mins";
          }
     

}
})


vue_app.mount("#vue_app")
