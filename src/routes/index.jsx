import StackRoutes from './stack.routes';
import DrawerRoutes from './drawer.routes';

import { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/auth';


export default function Routes() {
    const { signed, loading } = useContext(AuthContext);

    //console.log(`routes: ${user}`)

    if(loading){
        return(
          <View 
          style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F0F4FF'
          }}>
            <ActivityIndicator size="large" color="#131313" />
          </View>
        )
      }
    
      return(
        signed ? <DrawerRoutes/> : <StackRoutes/>
      )
}