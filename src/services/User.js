import axios from "axios";
import { BASE_URL } from "../constants/URL";
import { goToCreateAddress, goToHome } from '../routes/Coordinator'

export const login = (body, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            goToHome(navigate)
            localStorage.setItem('token', res.data.token)
        }).catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (body, navigate) => {

    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            goToCreateAddress(navigate)
            localStorage.setItem('token', res.data.token)
        }).catch((err) => {
            alert(err.response.data.message)
        })
}




export const updateProfile = (body, navigate) => {
    const token = localStorage.getItem('token')
    const headers = { headers: { auth: token } }
    axios.put(`${BASE_URL}/profile`, body, headers)
        .then((res) => {
            alert("Perfil atualizado com sucesso!")
            navigate(-1)
        }).catch((err) => {
            alert(err.response.data.message)
        })
}