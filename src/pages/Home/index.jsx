//import { useContext } from 'react';
import {
    Container,
    //card-attributes
    Card,
    Bank,
    Chip,
    CodeCard,
    CardDataContainer,
    CardData,
    NameCard,
    //banner
    Banner,
    TextMoney,
    ValorMoney
} from './styles';

//import { AuthContext } from '../../contexts/auth';


export default function Home() {

    //const { user } = useContext(AuthContext)

    return (
        <Container>
            <Card>
                <Bank>ECOLIFE</Bank>
                <Chip
                    source={require('../../assets/chip.png')}
                />
                <CodeCard>2344 2342 3242 2342</CodeCard>
                <CardDataContainer>
                    <CardData>564</CardData>
                    <CardData>05/25</CardData>
                </CardDataContainer>
                <NameCard>Guilherme Santana</NameCard>
            </Card>
            <Banner>
                <TextMoney>Valor atual</TextMoney>
                <ValorMoney>R$: 33,45</ValorMoney>
            </Banner>
        </Container>
    )
}