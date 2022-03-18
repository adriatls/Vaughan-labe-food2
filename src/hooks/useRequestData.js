import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('token')
    useEffect(() => {


        setLoading(true)
        const headers = { headers: { auth: token } }

        axios.get(url, headers)
            .then((res) => {
                setLoading(false)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
                setLoading(false)
            })

    }, [url])

    return [data, loading, token]
}

export default useRequestData