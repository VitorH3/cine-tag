import styled from "styled-components"

const TituloEstilizado = styled.h1`
    font-size: 40px;
    font-weight: 500;
    text-align: center;
`

function Titulo ({ children }) {
    return (
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    )
}

export default Titulo