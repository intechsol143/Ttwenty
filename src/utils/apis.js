
export const API_KEY = "4ffd08fcef1253e40a47beb75535ef51"
const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};
const fetchVideos = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Check Data",data)
        return data.videos;
    } catch (error) {
        console.error(error);
        return [];
    }
};
const fetchImages = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.images;
    } catch (error) {
        console.error(error);
        return [];
    }
};
export { fetchMovies,fetchVideos,fetchImages };
