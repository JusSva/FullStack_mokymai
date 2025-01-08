import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Single = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [backLink, setBackLink] = useState(); 
    
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(resp => resp.json())
        .then(resp => {
            setData(resp.drinks[0])
        });
    }, []);

    // useEffect(() => {
    //     setBackLink(localStorage.getItem('page'));
    // }, []);

    const formatIngredients = (value) => {
        const data = [];
        
        for(let i = 1; i <= 15; i++) {
            if(value['strIngredient' + i]) {
                data.push(
                    <li key={i}>{value['strIngredient' + i]} {value['strMeasure' + i]}</li>
                );
            }
        }
    
        return data;
    }

    return (
        <>
            <div className="row">
                <div className="col-4">
                    <img src={data.strDrinkThumb + "/preview"} />
                    {/* <Link to={localStorage.getItem('page')} className="btn btn-secondary">Back to Home</Link> */}
                    <Link onClick={() => window.history.back()} className="btn btn-secondary">Back</Link>
                </div>
                <div className="col-8">
                    <h3 className="mb-3">{data.strDrink}</h3>
                    <p>{data.strInstructions}</p>
                    <div className="mb-2">
                        <strong className="me-2">Category:</strong>
                        {/* <Link to={"/category/" + data.strCategory}>{data.strCategory}</Link> */}
                        {data.strCategory}
                    </div>
                    <div className="mb-2">
                        <strong className="me-2">Type:</strong>
                        <a href="#">{data.strAlcoholic}</a>
                    </div>
                    <div className="mb-4">
                        <strong className="me-2">Glass:</strong>
                        <Link to={"/glass/"+ data.strGlass}>{data.strGlass}</Link>
                    </div>
                    <div className="mb-2">
                        <h4 className="mb-3">Ingredients</h4>
                        {formatIngredients(data)}
                    </div>
                    <div>
                        <iframe width="100%" height="315" src={"https://www.youtube.com/embed/" + data.strYoutube?.split('?v=')[1]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single;