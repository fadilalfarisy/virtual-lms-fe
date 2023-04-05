import axios from 'axios'
import { getAccessToken, setAccessToken } from './tokenService';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
let allReadyFatchingRefreshToken = false

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

    if (error.response.status === 403 && !allReadyFatchingRefreshToken) {
      allReadyFatchingRefreshToken = true
      try {
        const { data } = await axios.get('/token', {
          withCredentials: true
        })
        allReadyFatchingRefreshToken = false
        const { accessToken } = data.data
        setAccessToken(accessToken)
        return axios(originalConfig);

      } catch (err) {
        allReadyFatchingRefreshToken = false
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)