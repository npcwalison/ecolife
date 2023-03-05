import { useContext } from 'react';
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
} from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../fragments/Header';


export default function Home() {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Header title="Minhas Movimentações"/>
            <Card>
                <Bank>ECOLIFE</Bank>
                <Chip
                    source={require('../../assets/chip.png')}
                />
                <CardDataContainer>
                    <CardData>Valor Atual:</CardData>
                    <CardData>R$ 12,22</CardData>
                </CardDataContainer>
                <NameCard>{user.name}</NameCard>
            </Card>
        </Container>
    )
}