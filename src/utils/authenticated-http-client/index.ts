import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Request interceptor to add auth token
// instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const token = localStorage.getItem('auth_token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })

// instance.interceptors.response.use((response: AxiosResponse) => {
//   return response
// }, async (error: AxiosError) => {
//   if (error.response?.status === 401) {
//     // Clear auth data and redirect to login
//     localStorage.removeItem('auth_token')
//     localStorage.removeItem('auth_user')
//     window.location.href = '/signin'
//   }
//   return Promise.reject(error)
// })

export default instance;
