import { Link } from "react-router-dom";
import logo from "./logo.png";
import CabecalhoLink from "components/CabecalhoLink";
import styled from "styled-components";

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 20em;
    background-color: var(--preto);
`

function Cabecalho() {
    return (
        <CabecalhoEstilizado>
            <Link to = './' >
                <img src = {logo} alt = "Logo do Cine Tag"/>
            </Link>
            <nav>
                <CabecalhoLink url = "./" >
                    Home
                </CabecalhoLink>
                <CabecalhoLink url = "./Favoritos" >
                    Favoritos
                </CabecalhoLink>
            </nav>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho