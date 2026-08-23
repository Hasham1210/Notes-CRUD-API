import axios from "axios";

const api = axios.create({
    baseURL: "https://notes-crud-backend.vercel.app/api",

});

export default api;