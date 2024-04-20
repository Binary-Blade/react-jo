import { useAuthStore } from '@/stores/useAuthStore';
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost', // Votre URL de base API
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
            console.log('Authorization Header Set:', config.headers['Authorization']);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axiosClient;
