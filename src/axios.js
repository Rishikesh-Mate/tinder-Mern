import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-mit.herokuapp.com'
});

export default instance;