import Banner from "components/Banner"
import Titulo from "components/Titulo"
import NaoEncontrada from "pages/NaoEncontrada"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const ContainerEstilizado = styled.section`
    height: 80vh;
`

function Player() {
    const [video, setVideo] = useState()
    const parametros = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/VitorH3/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if (!video) {
        return <NaoEncontrada/>
    }

    return (<>
        <Banner imagem="player" />
        <Titulo>
            Player
        </Titulo>
        <ContainerEstilizado>
            <iframe
                width="100%"
                height="100%"
                src= {video.link}
                title = {video.titulo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            >
            </iframe>
        </ContainerEstilizado>
    </>)
}

export default Player