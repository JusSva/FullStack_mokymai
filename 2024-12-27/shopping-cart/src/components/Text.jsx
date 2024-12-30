import Rating from './Rating.jsx'

export default function text (props) {
    return (
    <div className="text">
        <h3>{props.title}</h3>
        <Rating rating = {props.rating} />
        <p>{props.desc}</p>
    </div>
)}