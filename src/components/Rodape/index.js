import styled from "styled-components"

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: center;
    background-color: var(--preto);
`
const TextoEstilizado = styled.h2`
    font-weight: 400;
    font-size: 18px;
    color: var(--branco);
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <TextoEstilizado>
                Desenvolvido por Vitor Araújo Andrade.
            </TextoEstilizado>
        </RodapeEstilizado>
    )
}

export default Rodape