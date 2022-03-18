import axios from "axios";
import { BASE_URL } from "../constants/URL";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3SHFaT0o3NnVrME9HUkI3NHhGIiwibmFtZSI6ImVzZm9tZWFkbyIsImVtYWlsIjoiZXNmb21lYWRvQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTEwLjExMC4xMTAtMTAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUiBxdWFscXVlciBjb2lzYSwgMDAwLCA3MSAtIHF1YWxxdWVyIGx1Z2FyIiwiaWF0IjoxNjQ3MjkwMTA3fQ.l5VVhvVblsIvqn0eTuC0lKs_lqi6q3s5KEGMYkfASFo"


export const login = (body) => {

    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            alert(err.response.data.message)
        })
}

export const updateProfile = (body) => {
    const headers = { headers: { auth: token } }
    axios.put(`${BASE_URL}/profile`, body, headers)
    .then((res) => {
        console.log(res.data)
    }).catch((err) => {
        // alert(err.response.data.message)
        console.log(err)
    })
}