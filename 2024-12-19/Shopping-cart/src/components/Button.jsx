export default function Button(props) {

    let current_price = (props.price * ((100- props.discount)/100)).toFixed(2) 
    
    if (props.discount > 5){
        return (
            <div className="cart">
                <div className="d-flex gap-4">
                    <div className="final_price">${current_price}</div>
                    <div className="prev_price">${props.price}</div>
                </div>
                <button className="btn btn-warning">Add to Cart</button>
            </div>
        )
    }else {
        return (
            <div className="cart">
                <div className="d-flex gap-4">
                    <div className="final_price">${current_price}</div>
                </div>
                <button className="btn btn-warning">Add to Cart</button>
            </div>
        )
    }
    
    
}