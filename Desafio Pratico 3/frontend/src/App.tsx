import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [products, setProducts] = useState<any[]>([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/products/find")
    console.log(response.data)
    setProducts(response.data.users)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className='container-card'>
      {products.map((product: any) => (
        <div key={product.id}>
          <div className='card'>
            <p>Produto: {product.name}</p>
            <p>Descrição: {product.description}</p>
            <p>Categoria: {product.category}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default App