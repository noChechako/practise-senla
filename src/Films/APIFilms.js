import axios from 'axios';


    export default axios.create({
        baseURL: "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2",
      });
      