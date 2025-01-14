import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div className="header d-flex gap-3">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Add new video</Link>
            <Link to="/admin" className="nav-link">Admin</Link>
        </div>
    )
}