import axios from "axios";

const DELIVERY_API_URL =
    import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api';

const deliveryApi = axios.create({
    baseURL: DELIVERY_API_URL
});

deliveryApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('delivery_token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default deliveryApi;