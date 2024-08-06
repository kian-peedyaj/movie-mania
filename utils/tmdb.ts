enum REQUEST_TYPE {
  Now_Playing,
  Popular,
  Top_Rated,
  Upcoming,
}

const fetchFromTMBD = async (type: REQUEST_TYPE) => {
  let param: string = "";
  switch (type) {
    case REQUEST_TYPE.Now_Playing:
      param = "now_playing";
      break;
    case REQUEST_TYPE.Popular:
      param = "popular";
      break;
    case REQUEST_TYPE.Top_Rated:
      param = "top_rated";
      break;
    case REQUEST_TYPE.Upcoming:
      param = "upcoming";
      break;
    default:
      break;
  }
  try {
    const response = await fetch(`${process.env
      .NEXT_PUBLIC_TMDB_API_URL!}/3/movie/${param}?api_key=${process.env
      .NEXT_PUBLIC_TMDB_API_KEY!}
`);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

const fetchNowPlaying = async () =>
  await fetchFromTMBD(REQUEST_TYPE.Now_Playing);
const fetchPopular = async () => await fetchFromTMBD(REQUEST_TYPE.Popular);
const fetchTopRated = async () => await fetchFromTMBD(REQUEST_TYPE.Top_Rated);
const fetchUpcoming = async () => await fetchFromTMBD(REQUEST_TYPE.Upcoming);

const search = async (query: string = "", page: number = 1) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_API_URL!}/3/search/movie?api_key=${process
      .env
      .NEXT_PUBLIC_TMDB_API_KEY!}&query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  const { results } = await response.json();
  return results;
};

const tmdb = {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
  search,
};
export default tmdb;
