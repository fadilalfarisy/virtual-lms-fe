import axios from 'axios'
import { getAccessToken, setAccessToken } from './tokenService';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalConfig = error.config
    console.log({
      originalError: error
    })
    if (error.response.status === 498 && !originalConfig._retry) {
      originalConfig._retry = true
      try {
        const { data } = await axios.get('/user/refresh', {
          withCredentials: 'include'
        })
        const { accessToken } = data.data
        console.log(accessToken)
        setAccessToken(accessToken)
        return axios(originalConfig);

      } catch (err) {
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)