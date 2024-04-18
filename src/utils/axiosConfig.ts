import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost', // Votre URL de base API
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;
