import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [cocktails, setCocktails] = useState([])
  const letters = []

  for (let i = 65; i< 91; i++){
    letters.push(String.fromCharCode(i))
  }

  const typeRef = useRef()
  const searchRef = useRef()

  const cocktailSearch = (searchPhrase, type) => {

    fetch('https://www.thecocktaildb.com/api/json/v1/1/' + type + searchPhrase)
      .then((resp) => resp.json())
      .then((resp) => {
        let list = []
        for (let item of resp.drinks){
          list.push({
            "id":item.idDrink, 
            "name":item.strDrink, 
            "alcoholic":item.strAlcoholic,
            "image": item.strDrinkThumb,
          })
        }
        localStorage.setItem("data", JSON.stringify(list))
        setCocktails(list)
        
    })
  }



  const letterSearch = (letter) => {
    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        
    })}, []) 
  }
    
  
  return (
    <div className="container">

      <form onSubmit={(e) => {
        e.preventDefault()
        let type = "search.php?s="

        if (typeRef.current.value === 'ingredients'){
          type = "search.php?i="
        }
          
        if (searchRef.current.value.length === 1 && typeRef.current.value === "cocktails"){
          type = "search.php?f="
        }

        cocktailSearch(searchRef.current.value, type)
      }}>

        <label htmlFor="search_type">Search for:</label>
        <select name="search_type" id="" ref={typeRef}>
          <option value="cocktails">Cocktails</option>
          <option value="WIP">--- WIP ---</option>
          <option value="ingredients">Ingredients</option>
        </select>

        <input type="text" ref={searchRef}/>
        <button className='btn btn-primary'>Search</button>
      </form>
      
      <div className="d-flex gap-2 justify-content-center">
        {letters.map((value) => (
          <div className="box" onClick={letterSearch(value)}>{value}</div>
        ))}
      </div>
      
      <div className="output">
        {cocktails.map(value => (
          <div className="card" key={value.id} >
            <Link to={"/drinks/" + value.id}>
              <h3>{value.name}</h3>
              <img src={value.image} alt="" />
              <p>{value.alcoholic}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
