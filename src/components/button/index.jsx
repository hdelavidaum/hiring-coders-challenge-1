import {ButtonStyled} from './styles'

const Button = ({label, onClick, disabled}) => {
    return <ButtonStyled onClick={onClick} disabled={disabled}>{label}</ButtonStyled>
}

export default Button;