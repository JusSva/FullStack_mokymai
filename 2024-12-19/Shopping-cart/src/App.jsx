import './App.css'
import Image from './components/Image.jsx'
import products from './components/Items.js'
import Text from './components/Text.jsx'
import Button from './components/Button.jsx'

function App() {
  
  return (
    
    <div className="container">
      {products.map(product => 
      <div>
        <div className="card_ d-flex">
          <Image thumbnail = {product.thumbnail} discount={product.discountPercentage}/>
          <Text title ={product.title} desc = {product.description} rating = {product.rating}/>
          <Button price = {product.price} discount={product.discountPercentage}/>
        </div>
        <hr/>
      </div>
      )}
      
    </div>
  )
}

export default App
