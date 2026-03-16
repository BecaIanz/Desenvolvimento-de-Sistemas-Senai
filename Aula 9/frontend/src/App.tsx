import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [products, setProducts] = useState<any[]>([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/products/find")
    console.log(response.data)
    setProducts(response.data.users)
  }

  const createProduct = async () => {
    try {
      await axios.post("http://localhost:8080/api/products/create", {
        name,
        description,
        category,
        stock,
        price
      })

      fetchData()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='container-inputs'>
        <div className='container-input'>
          <p>Nome: </p>
          <input className='input' onChange={(e) => setName(e.target.value)}></input>
        </div>
        
        <div className='container-input'>
          <p>Descrição: </p>
          <input className='input' onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        
        <div className='container-input'>
          <p>Categoria</p>
          <input className='input' onChange={(e) => setCategory(e.target.value)}></input>
        </div>
        
        <div className='container-input'>
          <p>Estoque</p>
          <input className='input' type='number' onChange={(e) => setStock(Number(e.target.value))}></input>
        </div>
        
        <div className='container-input'>
          <p>Preço</p>
          <input className='input' type='number' onChange={(e) => setPrice(Number(e.target.value))}></input>
        </div>
      </div>

      
      <button onClick={createProduct}>Criar Produto</button>

      <div className='container-card'>
        {products.map((product: any) => (
          <div key={product.id}>
            <div className='card'>
              <p>Produto: {product.name}</p>
              <p>Descrição: {product.description}</p>
              <p>Categoria: {product.category}</p>
              <p>Quantidade em Estoque: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default App