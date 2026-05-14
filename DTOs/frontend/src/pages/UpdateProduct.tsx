import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './UpdateProduct.css'
import Swal from 'sweetalert2';

export const UpdateProduct = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)
    const navigate = useNavigate();

    const getProductData = async () =>{
        const response = await axios.get(`http://localhost:8080/api/products/findById/${id}`)
        setName(response.data.response.name)
        setDescription(response.data.response.description)
        setCategory(response.data.response.category)
        setStock(response.data.response.stock)
        setPrice(response.data.response.price)
    }

    const handleUpdate = async (id: string) => {
         Swal.fire({
            title: "Confirmar atualização?",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
        }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.put(`http://localhost:8080/api/products/update/${id}`, {
                        name,
                        description,
                        category,
                        stock,
                        price
                    })
                    
                    Swal.fire("Atualizado com sucesso ", "", "success");
                    navigate("/")
                    
                } catch (error) {
                    Swal.fire("Error", "", "error");
                    
                }
            }
        });
    };

    useEffect(() => {
        getProductData()
    })

    if (!id) return <p>ID inválido</p>;

    return(
        <>
            <div className="nav">
                <h1>Editar Produto</h1>
            </div>

            <div className='container-inputs'>
                <div className='container-input'>
                    <p>Nome: </p>
                    <input className='input' onChange={(e) => setName(e.target.value)} value={name} ></input>
                </div>
            
                <div className='container-input'>
                    <p>Descrição: </p>
                    <input className='input' onChange={(e) => setDescription(e.target.value)} value={description}></input>
                </div>
            
                <div className='container-input'>
                    <p>Categoria: </p>
                    <input className='input' onChange={(e) => setCategory(e.target.value)} value={category}></input>
                </div>
                
                <div className='container-input'>
                    <p>Estoque: </p>
                    <input className='input' type='number' onChange={(e) => setStock(Number(e.target.value))} value={stock}></input>
                </div>
                
                <div className='container-input'>
                    <p>Preço: </p>
                    <input className='input' type='number' onChange={(e) => setPrice(Number(e.target.value))} value={price}></input>
                </div>
            </div>            
            
            <button className='update-button' onClick={() => handleUpdate(id)}>Editar Produto</button>
        </>
    )
}