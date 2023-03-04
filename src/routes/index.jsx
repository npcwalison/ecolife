import StackRoutes from './stack.routes';
import DrawerRoutes from './drawer.routes';

import { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import { AuthContext } from '../contexts/auth';


export default function Routes() {
    const { signed, loadingApp } = useContext(AuthContext);

    //console.log(`routes: ${user}`)

    if(loadingApp){
        return(
          <Container>
            <ActivityIndicator size="large" color="#fff" />
          </Container>
        )
      }
    
      return(
        signed ? <DrawerRoutes/> : <StackRoutes/>
      )
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121222;
`;


