export default function Image(props) {
    
    if (props.discount > 5){
        return (
        <div className="img">
            <div className="discount">- {Math.round(props.discount)} %</div>
            <img src={props.thumbnail} alt="" />
        </div>
    )}
    else {
        return (
        <div className="img">
            <img src={props.thumbnail} alt="" />
        </div>
    )}
}