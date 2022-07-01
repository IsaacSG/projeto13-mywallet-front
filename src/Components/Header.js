import React, { useContext } from "react";
import styled from "styled-components";
import userContext from "../Context/UserContext";
import Sair from "../Styles/Images/Vector.png";


export default function Header() {

    const {user} = useContext(userContext);

    return (
        <Head>
            <p>Olá, {user.name}</p>
            <img src = {Sair} />
        </Head>
    );
}

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`