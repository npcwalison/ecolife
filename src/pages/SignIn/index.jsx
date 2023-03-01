import { useState } from 'react';
import {
    Container,
    Logo,
    Text,
    InputArea,
    Input,
    Button,
    Link
} from './styles';


export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function eventLogin() {
        return alert('Logado')
    }
    return (
        <Container>
            <Logo
                source={require('../../assets/Logo.png')}
            />
            <Text>SignIn</Text>
            <InputArea>
                <Input
                    placeholder="Insira seu email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
            </InputArea>
            <InputArea>
                <Input
                    placeholder="Insira sua senha"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={value => setPassword(value)}
                />
            </InputArea>
            <Button
                onPress={eventLogin}
            ><Text>Acessar</Text></Button>
            <Link
                onPress={() => navigation.navigate('SignUp')}
            ><Text>Ainda não possuo uma conta</Text></Link>
        </Container>
    )
}