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
} from './styles';

import { AuthContext } from '../../contexts/auth';


export default function SignUp({ navigation }) {

    const { signUp, loadingAuth } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function eventLogin() {
        signUp(name, email, password)
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />
                <InputArea>
                    <Input
                        placeholder="Insira seu nome"
                        value={name}
                        onChangeText={value => setName(value)}
                    />
                </InputArea>
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
                        loadingAuth? (
                            <ActivityIndicator size={20} color="#fff"/>
                        ):<ButtonText>Criar Conta</ButtonText>
                    }
                </Button>
            </Container>
        </Background>
    )
}