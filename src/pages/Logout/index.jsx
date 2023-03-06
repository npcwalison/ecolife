import { useContext } from 'react';
import {
    Container,
    ViewCard,
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
            <Header title="Usuario"/>
            <ViewCard></ViewCard>
            <Button
                onPress={()=> logoutEvent()}
            >
                <Text>Logout</Text>
            </Button>
        </Container>
    )
}