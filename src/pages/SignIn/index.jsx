import {
    View,
    Text,
    Button
} from './styles';


export default function SignIn({ navigation, screenName }) {
    return (
        <View>
            <Text>SignIn</Text>
            <Button
                title={`Go to ${screenName}`}
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    )
}