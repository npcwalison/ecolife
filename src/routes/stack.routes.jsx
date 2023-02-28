import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}