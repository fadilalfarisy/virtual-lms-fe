import axios from 'axios'
import { getAccessToken, setAccessToken } from './tokenService';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    console.log(token)
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

    if (error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const { data } = await axios.get('token')
          setAccessToken(data.accessToken)
          return instance(originalConfig)
        } catch (err) {
          return Promise.reject(err)
        }
      }
    }
    return Promise.reject(error)
  }
)