import axios from "axios";

// 토큰까지 생각한다면 인터셉트도 고려해야함
const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export default api;