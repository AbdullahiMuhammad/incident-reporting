import axios from "axios";

 const axiosInstance = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const proxy = "https://airr-back-end-production.up.railway.app/api";
export default axiosInstance;