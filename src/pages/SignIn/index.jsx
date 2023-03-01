import { useState } from 'react';
import {
    Container,
    Logo,
    InputArea,
    Input,
    Button,
    ButtonText,
    Link,
    LinkText
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
            ><ButtonText>Acessar</ButtonText></Button>
            <Link
                onPress={() => navigation.navigate('SignUp')}
            ><LinkText>Ainda não possuo uma conta</LinkText></Link>
        </Container>
    )
}