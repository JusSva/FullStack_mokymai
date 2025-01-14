import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditPost from './EditPost'

export default function RemovePost (){

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api')
        .then(resp => {
            console.log(resp.data)
            setData(resp.data)
            })
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }))
    }, [])    

    return (
        <>
            {data.map(value => 
                <div className="eilute d-flex mt-5">
                    <div className="text">
                        <img src={`https://img.youtube.com/vi/${value.link}/hqdefault.jpg`} alt="" />
                        <h5>{value.title}</h5>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-warning"><Link to={"/edit/" + value._id}>Edit</Link></button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            )}
        </>
    )
}