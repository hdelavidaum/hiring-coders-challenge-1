import styled from 'styled-components'

export const ProductsWrapper = styled.div`
    width: 50%;
    height: 100vh;

    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    align-items: center;

    @media (max-width: 450px) {
        height: 100vh;
        margin: 0 auto;
    }
`