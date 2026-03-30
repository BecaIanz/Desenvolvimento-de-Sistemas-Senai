import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import './GetProducts.css'

export const GetProducts = () => {
    const [products, setProducts] = useState<any[]>([])
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/api/products/find")
        console.log(response.data)
        setProducts(response.data.users)
    }

    const deleteProduct = async (id: string) => {
        try {
        await axios.delete(`http://localhost:8080/api/products/remove/${id}`)

        fetchData()
        } catch (error) {
        console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            <div className='container-card'>
                {products.map((product: any) => (
                    <div key={product.id}>
                    <div className='card'>
                        <p>Produto: {product.name}</p>
                        <p>Descrição: {product.description}</p>
                        <p>Categoria: {product.category}</p>
                        <p>Quantidade em Estoque: {product.stock}</p>
                        <p>Preço: R${product.price}</p>
                        <button className='delete-button' onClick={() => deleteProduct(product._id)}>Deletar</button>
                        <button className='update-button' onClick={() => navigate(`/update/${product._id}`)}>Editar</button>
                    </div>
                </div>
                ))}
            </div>
            
            <button className='update-button' onClick={() => navigate(`/create`)}>Novo Produto</button>
        </>
    )
}