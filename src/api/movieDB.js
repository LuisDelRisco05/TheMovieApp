import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";



const { API_KEY } = getEnvVariables();

const baseURL = 'https://api.themoviedb.org/3';



export const movieDB =  axios.create({
    baseURL,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    }
})


