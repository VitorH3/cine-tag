import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkEstilizado = styled(Link)`
    color: var(--branco);
    font-size: 18px;
    font-weight: 400;
    padding: 1em;
    text-decoration: none;
`

function CabecalhoLink({ url, children }) {
    return (
        <LinkEstilizado to={url}>
            {children}
        </LinkEstilizado>
    )
}

export default CabecalhoLink