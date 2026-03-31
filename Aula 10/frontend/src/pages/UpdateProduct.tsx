import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './UpdateProduct.css'

export const UpdateProduct = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)
    const navigate = useNavigate();

    const handleUpdate = async (id: string) => {
    try {
        await axios.put(`http://localhost:8080/api/products/update/${id}`, {
        name,
        description,
        category,
        stock,
        price
        });

        navigate(`/`)

    } catch (error) {
        console.error(error);
    }
    };

    if (!id) return <p>ID inválido</p>;

    return(
        <>
            <div className="nav">
                <h1>Editar Produto</h1>
            </div>

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
                    <p>Categoria: </p>
                    <input className='input' onChange={(e) => setCategory(e.target.value)}></input>
                </div>
                
                <div className='container-input'>
                    <p>Estoque: </p>
                    <input className='input' type='number' onChange={(e) => setStock(Number(e.target.value))}></input>
                </div>
                
                <div className='container-input'>
                    <p>Preço: </p>
                    <input className='input' type='number' onChange={(e) => setPrice(Number(e.target.value))}></input>
                </div>
            </div>            
            
            <button className='update-button' onClick={() => handleUpdate(id)}>Editar Produto</button>
        </>
    )
}