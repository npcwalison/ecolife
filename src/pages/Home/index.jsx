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
    NameCard
} from './styles';

//import { AuthContext } from '../../contexts/auth';


export default function Home() {

    //const { user } = useContext(AuthContext)

    return (
        <Container>
            <Card>
                <Bank>ECOLIFE</Bank>
                <Chip></Chip>
                <CodeCard>2344 2342 3242 2342</CodeCard>
                <CardDataContainer>
                    <CardData>564</CardData>
                    <CardData>05/25</CardData>
                </CardDataContainer>
                <NameCard>Guilherme Santana</NameCard>
            </Card>
        </Container>
    )
}