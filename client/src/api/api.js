import axios from "axios";

let url = "http://localhost:4000";

export const getDepList = async() =>
    await axios.get(`${url}/getDepList`);

export const getMunList = async() =>
    await axios.get(`${url}/getMunList`);