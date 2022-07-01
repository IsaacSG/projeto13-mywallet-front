import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Sigin-in";
import Cadastro from "./Sign-up";
import Home from "./Home";
import Entrada from "./Entrada";
import Saida from "./Saida";

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Login />} />
                    <Route path="/sign-up" element = {<Cadastro />}/>
                    <Route path="/home" element = {<Home />}/>
                    <Route path="/entrada" element = {<Entrada />}/>
                    <Route path="/saida" element = {<Saida />}/>
                </Routes>
            </BrowserRouter>
        </>
        );
}