import {
    Container,
    Logo,
    Text,
    Button
} from './styles';


export default function SignIn({ navigation }) {
    return (
        <Container>
            <Logo
                source={require('../../assets/Logo.png')}
            />
            <Text>SignIn</Text>
            <Button
                title={`Go`}
                onPress={() => navigation.navigate('SignUp')}
            />
        </Container>
    )
}