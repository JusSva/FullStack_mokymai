import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Home() {
    const [data, setData] = useState([])
    const [alert, setAlert] = useState({});

    useEffect(() => {
        axios.get('/api')
        .then(resp => {
            console.log(resp);
            
            setData(resp.data)
            })
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }))
    }, [])    
    
    return (

        <>
            <div className="videos">
                {data.map(value => 
                    <div className="card" key={value.id}>
                        <Link to={"/" + value.link}>
                            <img src={`https://img.youtube.com/vi/${value.link}/hqdefault.jpg`} alt="" className="nuotrauka"/>
                            <h4>{value.title}</h4>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}