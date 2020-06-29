/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
const shows = async function (query) {
  await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
};
console.log(shows);
async function searchShows(query) {
  const shows = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
  // Make an ajax request to the searchShows api. 
  console.log(shows);
  let allShowInfo = [];
  for (show of shows) {
    let showInfo = {
      id: "",
      name: "",
      summary: "",
      image: "",
      time: ""
    }
    showInfo.time = show.show.schedule;
    showInfo.id = show.show.id;
    showInfo.name = show.show.name;
    showInfo.summary = show.show.summary;
    showInfo.image = show.show.image;
    allShowInfo.push(showInfo);
  }
  return allShowInfo;
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    if (show.image) {
      let $item = $(
        `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.show.id}">
         <img class="card-img-top" src=" http://api.tvmaze.com/shows/1/${show.image}"
           <div class="card-body">
             <h5 class="card-title">${show.show.name}</h5>
             <p class="card-text">${show.show.summary}</p>
           </div>
         </div>
       </div>
      `
      );
      $showsList.append($item);
    } else {
      let $item = $(
        `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.show.id}">
         <img class="card-img-top" src=" https://tinyurl.com/tv-missing">
           <div class="card-body">
             <h5 class="card-title">${show.show.name}</h5>
             <p class="card-text">${show.show.summary}</p>
           </div>
         </div>
       </div>
      `);
      $showsList.append($item);
    }
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  const episodes = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  let episodeArr = []; //create initial arr of info
  episodeArr.push(episodes);
  return episodeArr;
  // : return array-of-episode-info, as described in docstring above
};

populateEpisodes(episodeArr) {
  let $item =
    ` <li> ${episodeArr.name}(${episodeArr.season}, ${episodeArr.number}) </li>`
  $('episodes-list').append($item); //append  obj to list
  $("#episodes-area").show(); // showing area where list appears
  document.createElement('BUTTON');
  button.innerHTML = "See episodes";
  button.className = "episode-btn";
  $('.card-body').append(button);
};

$('.episode-btn').addEventListener('click', function () {
  if (show.show.id) {
    getEpisodes();
    populateEpisodes();
  }
})