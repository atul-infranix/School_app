import { BASE_URL } from "constants/api.constant";

const { default: axios } = require("axios");

export const apiGet = () => {
    axios.post(BASE_URL+"getJobArr").then((res)=>{
        return res;
    }).catch((err)=>{
        console.log(err);
    })
}