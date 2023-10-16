import axios from "axios";

const swifttapAxios = axios.create({
    baseURL:'http://192.168.87.142:8000'
})



export default swifttapAxios