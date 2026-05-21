import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import './GetProducts.css'
import Swal from "sweetalert2";

export const GetProducts = () => {
    const [products, setProducts] = useState<any[]>([])
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8080/api/products/find")
        console.log(response.data)
        setProducts(response.data.users)
    }

    const deleteProduct = async (id: string) => {
        Swal.fire({
            title: "Deseja realmente deletar?",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try{
                    await axios.delete(`http://localhost:8080/api/products/remove/${id}`)
                    Swal.fire("Deletado com sucesso", "", "success");
                    fetchData()
                }
                catch{
                    Swal.fire("Erro!", "", "error");
                }
            }
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            <div className="nav">
                <h1>PRODUTOS</h1>
            </div>

            <div className='container-card'>
                {products.map((product: any) => (
                    <div key={product.id}>
                    <div className='card'>
                        <p>Produto: {product.name}</p>
                        <p>Descrição: {product.description}</p>
                        <p>Categoria: {product.category}</p>
                        <p>Quantidade em Estoque: {product.stock}</p>
                        <p>Preço: R${product.price}</p>
                        <div className="container-buttons">
                            <button className='delete-button' onClick={() => deleteProduct(product._id)}>Deletar</button>
                            <button className='_update-button' onClick={() => navigate(`/update/${product._id}`)}>Editar</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
            <button className='new-product-button' onClick={() => navigate(`/create`)}>Novo Produto</button>
        </>
    )
}