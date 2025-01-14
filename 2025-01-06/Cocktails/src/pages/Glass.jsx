import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './glass.css'

export default function Glass () {
    const { glass } = useParams()
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glass)
        .then(resp=> resp.json())
        .then(resp => {
            setCocktails(resp.drinks);
            
        })
    }, [])

    return (
        <div className="container">
            <Link onClick={() => window.history.back()} className="btn btn-secondary linkas">Back</Link>
            <div className="output">
                {cocktails.map((data) => (
                    <div className="card">
                        <Link to={"/drinks/" + data.idDrink} key={data.idDrink}>
                            <h3>{data.strDrink}</h3>
                            <img src={data.strDrinkThumb} alt="" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}