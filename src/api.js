import axios from "axios";

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID fiLVuo_NTR5Kb0AKWt-dlAnJQpZ4YpLPlLDbwnJSXG0'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImage;