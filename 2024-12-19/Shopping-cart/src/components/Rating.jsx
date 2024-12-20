export default function Rating(props) {
    const rating = [];
    let count = 0;

    // Add full stars
    for (let i = 0; i < Math.round(props.rating); i++) {
        rating.push(<i key={`full-${i}`} className="bi bi-star-fill"></i>);
        count++;
    }

    // Add half star if applicable
    if (
        (props.rating.toFixed(1) + 0.2 >= Math.floor(props.rating) + 0.3 ||
            props.rating.toFixed(1) - 0.2 <= Math.ceil(props.rating) - 0.3) &&
        count < 5
    ) {
        rating.push(<i key="half" className="bi bi-star-half"></i>);
        count++;
    }

    // Add empty stars
    for (let i = 0; i < 5 - count; i++) {
        rating.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
    }

    return <>{rating}</>;
}
