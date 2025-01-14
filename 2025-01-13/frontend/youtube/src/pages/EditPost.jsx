import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function EditPost (){
    const { id } = useParams
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('/api/' + id)
        .then(resp => {
            console.log(id, resp)
            setData(resp.data)
        })
    })

    return(
        <></>
    )
}