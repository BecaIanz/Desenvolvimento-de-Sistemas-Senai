import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Login.css'

export const RegisterUser = () => {  
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    const register = async () => {
        try {
            await axios.post("http://localhost:8080/api/auth/register", {
                name,
                email,
                password
            })
            navigate("/login")
        
        } catch (error) {
            alert(error)
        }
    }

    return(
        <>
            <div className="box-login">
                <h1>Cadastro</h1>
                <div className='box-input'>
                    <div className='box-input'>
                        <h3>Nome</h3>
                        <input onChange={(e) => setName(e.target.value)} className='input' ></input>
                    </div>
                    <div className='box-input'>
                        <h3>Email</h3>
                        <input onChange={(e) => setEmail(e.target.value)}  className='input'></input>
                    </div>
                    <div className='box-input'>
                        <h3>Senha</h3>
                        <input onChange={(e) => setPassword(e.target.value)} type='password' className='input'></input>
                    </div>
                    <div className='box-input'>
                        <h3>Confirme sua Senha</h3>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} type='password' className='input'></input>
                    </div>
                </div>
                <button onClick={() => {

                    if(password == confirmPassword){
                        register()
                    }
                    else{
                        alert("As senhas devem ser iguais")
                    }
                    }}>Entrar</button>
            </div>

        </>
    )
}