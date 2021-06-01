import axios from "axios";

const URLBASE = 'https://api-review-games.herokuapp.com/api/'
const serviceApi = axios.create(
    {
        baseURL : URLBASE,
    }
);
export default serviceApi;
