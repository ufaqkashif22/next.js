 import Image from "next/image";
import { MoviesInter, Params } from "../../../interface";

 const page = async ({params} :{params:Params}) => {
  const apiKey = process.env.OMDB_API_KEY;
  const baseUrl = process.env.OMDB_BASE_URL;
  const { id } = params;

    // Build URL dynamically based on `id`
    const url = `${baseUrl}/?i=${id}&apikey=${apiKey}`;
    let mainData: MoviesInter | null = null;
 
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        mainData = data;
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }

  
   return (
    <div className="mt-12 max-w-4xl ml-40 mr-auto py-12">
    <h2 className="text-[2rem] font-semibold text-gray-800">
      Netflix \ <span className="text-red-600">{mainData?.Type}</span>
    </h2>
    <div className="mt-6 flex items-start space-x-8">
     
        {mainData?.Poster ? (
          <Image
            src={mainData.Poster}
            alt={mainData.Title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg max-h-[34rem]"
          />
        ) : (
          <p>Image not available</p>
        )}
      
      </div>
        <h1 className="text-5xl font-bold text-gray-900 mt-8">{mainData?.Title}</h1>
        
    
    
  </div>
  
  
       
   
   )
 }

 export default page
