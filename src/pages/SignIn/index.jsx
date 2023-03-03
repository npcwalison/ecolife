import { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import {
    Background,
    Container,
    Logo,
    InputArea,
    Input,
    Button,
    ButtonText,
    Link,
    LinkText
} from './styles';
import { AuthContext } from '../../contexts/auth';


export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn, loadingAuth } = useContext(AuthContext)

    function eventLogin() {
        signIn(email, password)
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/logo.png')}
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
                    activeOpacity={0.8}
                >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff" />
                        ) : <ButtonText>Acessar</ButtonText>
                    }
                </Button>
                <Link
                    onPress={() => navigation.navigate('SignUp')}
                ><LinkText>Ainda não possuo uma conta</LinkText></Link>
            </Container>
        </Background>
    )
}