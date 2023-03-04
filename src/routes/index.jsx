import StackRoutes from './stack.routes';
import DrawerRoutes from './drawer.routes';

import { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/auth';


export default function Routes() {
    const { signed, loadingApp } = useContext(AuthContext);

    //console.log(`routes: ${user}`)

    if(loadingApp){
        return(
          <View 
          style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#121222'
          }}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )
      }
    
      return(
        signed ? <DrawerRoutes/> : <StackRoutes/>
      )
}