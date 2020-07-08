import axios from 'axios';

const api = axios.create({
    baseURL: 'https://truckpad.herokuapp.com/'
})

export default api;