import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BaseAPI } from "../Global Data/Data";
import Logo from "../Styles/Images/Mywallet.png";


export default function Cadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();

    function Cadastrar() {

        if(password===password2){
            const body = {email,name,password}
            const promisse = axios.post(`${BaseAPI}/sign-up`, body);

            promisse.then(response => {
                navigate("/")
            })

            promisse.catch(response => {
                alert("Houve uma falha ao tentar cadastra, verifique os dados e tente novamente.");
            })
        }
    }

    return (
        <Container>
            <img src = {Logo} alt = "Logo" />
            <input type = "text" placeholder = "Nome" value = {name} onChange = {e => setName(e.target.value)}/>
            <input type = "email" placeholder = "E-mail" value = {email} onChange = {e => setEmail(e.target.value)}/>
            <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)}/>
            <input type = "password" placeholder = "Confirme a senha" value = {password2} onChange = {e => setPassword2(e.target.value)}/>
            <button onClick = {Entrar}> <p>ENTRAR</p> </button>
            <Link to = "/sign-up">Não possuí uma conta? Cadastre-se</Link>
        </Container>
    )

}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0E0E13;
    padding-top: 134px;
    padding-bottom: 50px;

    img{
        width: 299px;
        height: 49px;
        margin-bottom: 100px;
    }
    input{
        height: 52px;
        width: 299px;
        border-radius: 8px;
        margin-bottom: 16px;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 52px;
        width: 299px;
        background-color: #FF4791;
        border-radius: 8px;
        margin-top: 8px;
        margin-bottom: 24px;
    }
    p{
        font-size: 21px;
        color: #FFFFFF;
    }
    Link{
        font-size: 14px;
        color: #FFFFFF;
    }
    a{
        color: #FFFFFF;
    }
`