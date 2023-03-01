import { useContext } from 'react';
import {
    View,
    Text,
    Button
} from './styles';

import { AuthContext } from '../../contexts/auth';


export default function Home() {

    const { user } = useContext(AuthContext)

    return (
        <View>
            <Text>{user.name}</Text>
        </View>
    )
}