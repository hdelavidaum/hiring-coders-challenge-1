import styled from 'styled-components'

export const ButtonStyled = styled.button`
    width: 250px;
    height: 36px;
    padding: 3px;

    border: none;
    border-radius: 5px;
    background-color: #c33;
    
    color: #fff;
    font-size: 15px;
    font-weight: 700;

    transition: all 150ms;

    &:hover{
        cursor: pointer;
        border: 1px solid #c33;

        background-color: #eee;
        color: #c33;
    }

    &:disabled {
        cursor: not-allowed;
    }
`