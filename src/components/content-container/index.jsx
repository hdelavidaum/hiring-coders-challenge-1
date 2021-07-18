import {Container} from './styles'


const ContentContainer = ({children}) => {
    return (
        <Container>
            <h1>{children}</h1>
        </Container>
    )
}

export default ContentContainer;