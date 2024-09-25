import Banner from "components/Banner"
import styled from "styled-components"

const SectionEstilizado = styled.section`
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    padding: 120px;
`

function NaoEncontrada() {
    return (<>
        <Banner imagem="erro" />
        <SectionEstilizado>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado.</p>
        </SectionEstilizado>
    </>
    )
}

export default NaoEncontrada