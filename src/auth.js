import axios from 'axios';

export default axios.create({
    baseURL: "http://192.168.18.9:2000",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})