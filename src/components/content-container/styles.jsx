import styled from 'styled-components'
import backgroundImage from '../../assets/background-image.png'

export const Container = styled.section`
    width: 100vw;
    height: 100vh;

    font-family: 'Roboto', sans-serif;
    color: #ddd;
    
    display: flex;
    flex-flow: row nowrap;
    place-content: center space-around;
    place-items: center;
    position: fixed;
    
    background: linear-gradient(180deg, rgba(0,0,0,0.6845) 0%, rgba(0,0,0,1) 100%), url(${backgroundImage});
    background-color: #000;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;

    @media (max-width: 450px){
        width: 100vw;
        display: block;
        /* height: initial; */
        
        background: linear-gradient(180deg, rgba(0,0,0,0.45) 50%, rgba(0,0,0,1) 100%), url(${backgroundImage});
        background-color: #000;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;

        overflow-y: scroll
    }
`

