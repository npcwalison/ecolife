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
    //banner
    Button, Text
} from './styles';

import { AuthContext } from '../../contexts/auth';


export default function Home() {

    const { user, signOut  } = useContext(AuthContext)

    function logout(){
        signOut()
    }

    return (
        <Container>
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
            <Button
                onPress={()=> logout()}
            >
                <Text>Logout</Text>
            </Button>
        </Container>
    )
}