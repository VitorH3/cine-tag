import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const ContainerEstilizado = styled.section`
    display: flex;
    justify-content: space-around;
`

function Inicio() {
const [videos, setVideos] = useState([])

useEffect(() => {
    fetch('https://my-json-server.typicode.com/VitorH3/cinetag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
        setVideos(dados)
    })
}, [])

    return (<>
        <Banner imagem = "home"/>
        <Titulo>
            Um lugar para guardar seu vídeos e filmes!
        </Titulo>
        <ContainerEstilizado>
            {videos.map((video) => {
                return <Card {...video} key = {video.id} />
            })}
        </ContainerEstilizado>
    </>)
}

export default Inicio