const API_key = "34fe97f0c731860568fbfcc7067df8bd";

const categories =[
    {
        name:"treding",
        title: "em alta",
        path:`/trending/all/week?api_key=${API_key}language=pt-BR`,
    },
    {
        name:"netflixOriginals",
        title: "Originais da Netflix",
        path:`/discover/tv?api_key${API_key}&with_networks=213`,
    },
    {
        name:"topRated",
        title: "em alta",
        path: `/movie/top_rated?api_key=${API_key}Glanguage=pt-br`,
    },
    {
        name:"comedy",
        title: "comedias",
        path:`/discover/tv?api_key=${API_key}&with_genres=35`,
    },
    {
        name:"romance",
        title: "Romance",
        path:`/discover/tv?api_key=${API_key}&with_genres=1074`,
    },
    {
        name:"documentario",
        title: "Documentario",
        path:`/discover/tv?api_key=${API_key }&with_genres=99`,
    },

];

export const getMovies = async (path) =>{
    
    try{
        let url =`https://api.themoviedb.org/3/${path}`
        const response = await fetch(url);
        return await response.json()
    }catch(error){
        console.log("")
    }

}