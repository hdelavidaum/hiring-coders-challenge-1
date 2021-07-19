import styled, { keyframes } from 'styled-components'

export const PulseAnimation = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: .25;
        transform: scale(.75);
    }
`

export const PulseContainer = styled.div`
    height: 36px;
    padding: 3px;
    
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`



export const PulseBubble = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d21313;
`

export const PulseBubble1 = styled(PulseBubble)`
    animation: ${PulseAnimation} .4s ease 0s infinite alternate;
`

export const PulseBubble2 = styled(PulseBubble)`
    animation: ${PulseAnimation} .4s ease .2s infinite alternate;
`

export const PulseBubble3 = styled(PulseBubble)`
    animation: ${PulseAnimation} .4s ease .4s infinite alternate;
`


