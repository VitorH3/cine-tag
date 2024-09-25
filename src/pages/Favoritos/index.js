import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import { useFavoritoContext } from "contextos/Favoritos"
import styled from "styled-components"

const ContainerEstilizado = styled.section`
    display: flex;
    justify-content: space-around;
`
const TextoEstilizado = styled.h2`
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    padding: 126px;
`

function Favoritos() {
    const { favorito } = useFavoritoContext()
    return (<>
        <Banner imagem="favoritos" />
        <Titulo>
            Meus Favoritos
        </Titulo>
        {favorito.length === 0 ? (
            <TextoEstilizado>Você ainda não possui nenhum favorito.</TextoEstilizado>
        ) : (
            <ContainerEstilizado>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </ContainerEstilizado>
        )}
    </>)
}

export default Favoritos