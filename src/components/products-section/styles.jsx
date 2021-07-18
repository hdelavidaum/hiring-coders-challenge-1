import styled from 'styled-components'

export const Container = styled.div`
    width: 50%;
    height: 100vh;

    display: flex;
    flex-flow: column nowrap;
    place-content: center flex-start;
    align-items: center;

    @media (max-width: 450px) {
        width: 95%;
        padding-top: 25px;
        height: auto;
        margin: 0 auto;
    }
`

export const Title = styled.h1`
    font-family: 'Bungee', cursive;
    font-size: 42px;
    color: #e22;
    background-color: #000;
    padding: 15px 0;

    position: -webkit-sticky; 
    position: sticky;
    top: 0;

    margin: 60px auto 30px auto;

    text-align: center;

    -webkit-text-stroke: 1px #fe5;

    @media (min-width: 450px) {
        font-size: 75px;
    }
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;

    width: 100%;
    padding: 0 100px 50px;
    
    overflow: visible;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(175, 35, 35, 1);
    }

    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
        border-radius: 20px;
        width: 2px;
    }

    @media (max-width: 450px) {
        display: block;
        padding: 25px;
        overflow-y: visible;
        height: auto;
    }
`