import styled, {keyframes} from 'styled-components'

const changeColor = keyframes`
    0% {
        text-shadow: 1px 1px 6px #ff0000, -1px 1px 6px #ff0000, 1px -1px 6px #ff0000, -1px -1px 6px #ff0000;
    }

    50% {
        text-shadow: 1px 1px 2px #df2929, -1px 1px 2px #df2929, 1px -1px 2px #df2929, -1px -1px 2px #df2929;
    }

    100% {
        text-shadow: 1px 1px 6px #ff0000, -1px 1px 6px #ff0000, 1px -1px 6px #ff0000, -1px -1px 6px #ff0000;
    }
`

export const InputsWrapper = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    align-items: center;

    @media (max-width: 450px) {
        height: 100vh;
        width: 100%;
        margin: 0 auto 25px 0;
    }
`

export const Title = styled.h1`
    width: 65%;
    text-align: center;
    line-height: 32px;
    
    font-size: 24px;

    margin-bottom: 35px;

    animation: ${changeColor} 1250ms linear infinite;

    @media (max-width: 450px) {
        width: 85%;
    }
`