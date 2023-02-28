import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Auth from './src/routes/auth';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Auth />
    </NavigationContainer>
  );
}
