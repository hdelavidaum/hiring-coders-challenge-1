import { Container, ProductsWrapper, Title } from "./styles";
import { Card } from "..";
import {bikesData} from '../../constants/bikes-data'

const ProductsSection = () => {
    return (
        <Container>
            <Title>Bike Friday</Title>
            <ProductsWrapper>
                {bikesData.map((bike, key) => {
                    return (
                        <Card label={bike.label} src={bike.src} price={bike.price} key={key}/>
                    )
                })}
            </ProductsWrapper>
        </Container>
    )
}

export default ProductsSection;