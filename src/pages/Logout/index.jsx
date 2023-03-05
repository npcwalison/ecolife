import { useContext } from 'react';
import {
    Container,
    Button,
    Text
} from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../fragments/Header';


export default function Logout() {

    const { user, signOut  } = useContext(AuthContext)

    function logoutEvent(){
        signOut()
    }

    return (
        <Container>
            <Header title="Minhas Movimentações"/>
            <Button
                onPress={()=> logoutEvent()}
            >
                <Text>Logout</Text>
            </Button>
        </Container>
    )
}