

export default function Button(props) {

    let current_price = (props.price * ((100- props.discount)/100)).toFixed(2) 
    


        return (
            <div className="button">
                <div className="d-flex gap-4">
                    {props.discount > 5 ? 
                    <>
                        <div className="final_price">${current_price}</div>
                        <div className="prev_price">${props.price}</div>
                    </>
                    :
                    <div className="final_price">${current_price}</div>
                }
                </div>
                <button className="btn btn-warning" onClick={() => props.add_to_cart(props.id)}>Add to Cart</button>
            </div>
        )
    
    
    
}