import styled from "styled-components"
import iconeFavoritar from "./favoritar.png"
import iconeDesfavoritar from "./desfavoritar.png"
import { useFavoritoContext } from "contextos/Favoritos"
import { Link } from "react-router-dom"

const ContainerEstilizado = styled.div`
    padding: 0 0 1em 0;
    margin-top: .5rem;
    width: 282px;
    background-color: var(--cinza);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ImagemCapa = styled.img`
    width: 100%;
`

const Titulo = styled.h2`
    padding: 0 1em;
`

const IconeFavorito = styled.img`
    padding: 0 1em;
    width: 25px;
`

const LinkEstilizado = styled(Link)`
    text-decoration: none;
    color: var(--preto);
    text-align: center;
`

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar
    return (
        <ContainerEstilizado>
            <LinkEstilizado to={`/${id}`}>
                <ImagemCapa src={capa} alt={titulo} />
                <Titulo>{titulo}</Titulo>
            </LinkEstilizado>
            <IconeFavorito
                src={icone}
                alt="Favoritar filme"
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            />
        </ContainerEstilizado>
    )
}

export default Card