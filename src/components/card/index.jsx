import {Container, Image, Label, Price} from './styles'

const Card = ({label, src, price}) => {
    return (
    <Container>
        <Image src={src} alt={label}/>
        <Label>{label}</Label>
        <Price>{`Preço: ${price}`}</Price>
    </Container>
    )
}

export default Card;