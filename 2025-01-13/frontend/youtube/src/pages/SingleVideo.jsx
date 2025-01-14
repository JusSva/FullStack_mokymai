import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SingleVideo(){
    const { link } = useParams()
    const [video, setVideo] = useState([])
    useEffect(() => {
        axios.get('/api')
        .then(resp => {
            for (let item of resp.data){
                if (item.link === link){
                    setVideo(item)
                    console.log(item);
                    break                    
                }
            }
            
            })
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }))
    }, []) 

    

    return(
        <>
            <iframe width="800" height="500" src={"https://www.youtube.com/embed/" + link} title="YouTube video player" frameBorder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
            <div className="d-flex text-align-center gap-5">
                <h3>{video.title}</h3>
                <h3>Views: {video.view_count}</h3>
            </div>
            <p>{video.description}</p>
        </>

    )
}