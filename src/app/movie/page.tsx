import { MoviesInter } from "@/interface";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const apiKey = process.env.OMDB_API_KEY;
  const baseUrl = process.env.OMDB_BASE_URL;
  const url1 = `${baseUrl}/?s=guardians&apikey=${apiKey}`;
  const url2 = `${baseUrl}/?s=guardians&apikey=${apiKey}&page=2`;
 
  let combinedMovies: MoviesInter[] = [];
  
  try {
    const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);
    const data1 = await response1.json();
    const data2 = await response2.json();

     // Populate combinedMovies if data is available
     if (data1.Search && data2.Search) {
      combinedMovies = [...data1.Search, ...data2.Search];
    }
    console.log(combinedMovies);
  
} catch (error) {
  console.error('Error fetching movie data:', error);
}
  return       <>
  <section className="bg-slate-100">
 
      <div className="max-w-[124rem] mx-auto py-24 px-12">
          <h1 className="text-center mb-12">Series & Movie</h1>
          <div className="w-full flex gap-x-12 gap-y-20 justify-between items-center flex-wrap">
              
                 {combinedMovies.map((curElem) => {
                      return <MovieCard key={curElem.imdbID} {...curElem} />
                  })
              }
          </div>
      </div>
  </section>
 
</>;

}
export default Movie;
