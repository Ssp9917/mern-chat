import axios from 'axios';

const BackendLiveUrl = import.meta.env.VITE_BACKEND_BASE_URL



// Create an Axios instance with default configurations
const instance = axios.create({
  baseURL: `${BackendLiveUrl}`,
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: true,
});

export default instance;
