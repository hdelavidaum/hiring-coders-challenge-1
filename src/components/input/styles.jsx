import styled from 'styled-components';

export const InputWrapper = styled.div`
    width: 250px;
    font-size: 17px;


    &:nth-child(3){
        margin-bottom: 30px;
    }
    `;

export const InputStyled = styled.input`
    outline: none;
    border: none;
    
    width: 100%;
    height: 38px;
    margin-top: 13px;
    margin-bottom: 30px;
    padding: 7px;

    text-align: center;
    border-radius: 5px;

    color: #000;
    font-size: 17px;
    font-weight: 300;

    &:focus,
    &:hover {
        box-shadow: 0 0 3px 5px #a00;
    }
`;

export const Label = styled.label`
    height: 20px;
    font-size: 17px;

    font-weight: 700;
    text-align: left;
`;