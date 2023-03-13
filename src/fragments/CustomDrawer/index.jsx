import {
    Text,
    TxtName,
    Logo
} from "./styles";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { DrawerItemList, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { useNavigation } from "@react-navigation/native";


export default function CustomDrawer(props){
    const { user, signOut } = useContext(AuthContext)
    const navigation = useNavigation()


    return (
        <DrawerContentScrollView>
            <Logo
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
            />
            <Text>Boas Vindas!</Text>
            <TxtName>{user.name}</TxtName>
            <DrawerItemList {...props}/>

            {/* <DrawerItem 
                {...props}
                label="Sair do App"
                onPress={()=> signOut()}
            /> */}
        </DrawerContentScrollView>
    )
}