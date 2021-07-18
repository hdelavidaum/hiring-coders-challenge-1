import styled from 'styled-components';

export const InputWrapper = styled.div`
    width: 250px;
    `;

export const InputStyled = styled.input`
    outline: none;
    border: none;
    
    width: 100%;
    height: 24px;
    margin: 13px 30px 45px 0;
    padding: 7px;

    text-align: center;
    border-radius: 5px;

    
    &:focus,
    &:hover {
        box-shadow: 0 0 3px 5px #a00;
    }
`;

export const Label = styled.label`
    height: 20px;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    text-align: left;
`;