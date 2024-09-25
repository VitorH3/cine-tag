import styled from "styled-components"

const FundoEstilizado = styled.div`
    width: 100%;
    height: 347px;
    background-size: cover;
    background-repeat: no-repeat;
`

function Banner({ imagem }) {
    return(
        <FundoEstilizado
            style = {{ backgroundImage: `url('/images/banner-${imagem}.png')` }}>
        </FundoEstilizado>
    )
}

export default Banner