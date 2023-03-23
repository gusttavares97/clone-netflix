const api_key = "34fe97f0c731860568fbfcc7067df8bd";

const categories =[
    {
        name:"treding",
        title: "em alta",
        path:`/trending/all/week?api_key=${api_key}&language=pt-br`,
        islargue: true,
    },
    {
        name:"netflixOriginals",
        title: "Originais da Netflix",
        path:`/discover/tv?api_key=${api_key}&with_networks=213`,
        islargue: false,
    },
    {
        name:"topRated",
        title: "em alta",
        path: `/movie/top_rated?api_key=${api_key}&language=pt-br`,
        islargue: false,

    },
    {
        name:"comedy",
        title: "comedias",
        path:`/discover/tv?api_key=${api_key}&with_genres=35`,
        islargue: false,

    },
    {
        name:"romance",
        title: "Romance",
        path:`/discover/tv?api_key=${api_key}&with_genres=10749`,
        islargue: false,  
    },

    {
        name:"documentario",
        title: "Documentario",
        path:`/discover/tv?api_key=${api_key}&with_genres=99`,
        islargue: false,

    },

];




export const getMovies = async (path) =>{
    
    try{
        let url =`https://api.themoviedb.org/3${path}&language=pt-br`;
        const response = await fetch(url);
        return await response.json()
    }catch(error){
        console.log("")
    }

}

export default categories;