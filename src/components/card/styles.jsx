import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    height: 300px;
    width: 200px;
    margin: 15px;
    padding: 15px 10px;

    border-radius: 8px;

    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(211,211,211,0.85) 0%, rgba(19,19,19,0.85) 81%);

    transition: all 200ms ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 8px 1px #aaa;
    }

    @media (max-width: 450px){
        margin: 15px auto;
    }
`

export const Image = styled.img`
    width: 95%;
    padding-top: 10px;
`

export const Label = styled.p`
    font-weight: 400;
    text-align: center;
    font-size: 20px;
`

export const Price = styled.p`
    font-weight: 300;
    font-style: italic;
    text-align: center;
    font-size: 15px;
`