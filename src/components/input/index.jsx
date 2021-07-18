import { InputStyled, InputWrapper, Label } from './styles'

const Input = ({ onChange, placeholder, type, name, value, label }) => {
    return (
        <InputWrapper>
            <Label htmlFor={`${name}-id`}>Insira seu nome:</Label>
            <InputStyled
                id={`${name}-id`}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                name={name}
                value={value}
            />
        </InputWrapper>
    )
}

export default Input