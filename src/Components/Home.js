import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { BaseAPI } from "../Global Data/Data";
import { useNavigate } from "react-router-dom";
import userContext from "../Context/UserContext";
import Header from "./Header";
import Minus from "../Styles/Images/Minus.png";
import Plus from "../Styles/Images/Plus.png";


export default function Home() {

    const [fluxo, setFluxo] = useState([]);
    const { user } = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        getfluxo()
    }, [fluxo])

    function getfluxo() {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const promisse = axios.get(`${BaseAPI}/fluxo`, config)
        promisse.then(res => setFluxo(res.data))
    }

    function Entrada() {
        navigate("/entrada")
    }

    function Saida() {
        navigate("/saida")
    }

    return (
        <>
        <Header />
        <Container>
            {fluxo.length === 0 ? <Informar>Não há registros de entrada ou saída</Informar> : (
                fluxo.map(flux => {
                    <p><h4>{flux.date}</h4> {flux.descrição} <h3>{flux.valor}</h3></p>
                })
            )}
            <Botoes>
                <button onClick = {Entrada} ><img src = {Plus} /><p>Nova entrada</p></button>
                <button onClick = {Saida} ><img src = {Minus} /><p>Nova saida</p></button>
            </Botoes>
        </Container>
        </>
    );

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`