import { useNavigate } from "react-router-dom"
import { extractFormData } from '../helpers/util'
import axios from 'axios'


export default function AddVideo() {

    const handleSubmit = (e) =>{
        e.preventDefault()

        const data = extractFormData(e.target)

        axios.post('/api/add/', data)
        .then(resp => {
            // setAlert({
            //     message: resp.data,
            //     status: 'success'
            // })
            console.log(resp);
            console.log(data);
            

            setTimeout(() => {
                useNavigate('/');
            }, 3000);
        })
    }
    return(
        <form className="d-flex" onSubmit={handleSubmit}>
            <label className="input mt-4" htmlFor="title">Title</label>
            <input type="text" name='title'/>
            
            <label htmlFor="description" className="input mt-4">Description</label>
            <input type="text" name='description'/>

            <label htmlFor="link" className="input mt-4">Link</label>
            <input type="text" name='link'/>

            <button className="btn btn-primary mt-4">Add</button>
        </form>
    )
}