import React from 'react';
import { StatusBar } from 'expo-status-bar';
import SignIn from './src/pages/SignIn';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SignIn />
    </>
  );
}
