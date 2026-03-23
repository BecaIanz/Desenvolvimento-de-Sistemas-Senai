import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Login.css'

export const Login = () => {  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const login = async () => {
        try {
            await axios.post("http://localhost:8080/api/auth/login", {
                email,
                password
            })
            navigate("/")
        
        } catch (error: any) {
            alert(error.message)
        }
    }

    return(
        <>
            <div className="box-login">
                <h1>Login</h1>
                <div className='box-input'>
                    <div className='box-input'>
                        <h3>Email</h3>
                        <input onChange={(e) => setEmail(e.target.value)} className='input' ></input>
                    </div>
                    <div className='box-input'>
                        <h3>Senha</h3>
                        <input onChange={(e) => setPassword(e.target.value)} type='password' className='input'></input>
                    </div>
                </div>
                <button onClick={() => login()}>Entrar</button>
            </div>

        </>
    )
}