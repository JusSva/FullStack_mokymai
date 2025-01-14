export default function Items(props) {
    const { img, name, category, price, count, onUpdateCount } = props;
  
    const subtract = () => {
      onUpdateCount(count - 1);
    };
  
    const add = () => {
      onUpdateCount(count + 1);
    };
  
    return (
      <div className="d-flex">
        <img src={img} alt="" className="cart_image" />
        <div className="text">
          <h5>{category}</h5>
          <h5>{name}</h5>
        </div>
        <div className="count">
          <button onClick={subtract}>-</button>
          <p>{count}</p>
          <button onClick={add}>+</button>
        </div>
        <div className="price">
          <p>${price}</p>
        </div>
      </div>
    );
  }
  