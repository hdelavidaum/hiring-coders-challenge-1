import styled from 'styled-components'
import image from '../../assets/banner.png'

export const Container = styled.section`
    width: 100vw;
    height: 100vh;

    font-family: 'Roboto', sans-serif;
    color: #ddd;
    
    display: flex;
    place-content: center;
    place-items: center;
    
    background: linear-gradient(180deg, rgba(0,0,0,0.6845) 0%, rgba(0,0,0,1) 100%), url(${image});
    background-color: #000;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;

    @media (max-width: 450px){
        background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,1) 80%), url(${image});
        background-color: #000;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
`
