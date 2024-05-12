import axios from 'axios';
import {API_BASE_URL, UserAPI} from "@/constants/api.consts";

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});



// Interceptors for handling access token and refresh token
apiService.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token');
        if (config.url != UserAPI.REFRESH_TOKEN && accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        } else {
            const refreshToken = localStorage.getItem('refresh_token');

            config.headers.Authorization = `Bearer ${refreshToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiService.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.code != 'ERR_NETWORK' && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await getNewAccessToken();
                if (newAccessToken) {
                    localStorage.setItem('access_token', newAccessToken);
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axios(originalRequest);
                } else {
                    // Handle token refresh failure (e.g., redirect to login page)
                }
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                // Handle token refresh error (e.g., redirect to login page)
            }
        }
        return Promise.reject(error);
    }
);
const getNewAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    const jwtToken = localStorage.getItem('access_token');
    if (!refreshToken) {
        // Handle missing refresh token (e.g., redirect to login page)
        return null;
    }
    try {
        const response = await apiService.post(
            UserAPI.REFRESH_TOKEN, {
            jwttoken: jwtToken,
            refreshtoken: refreshToken
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return null;
    }
};

export default apiService;