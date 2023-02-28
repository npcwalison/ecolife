import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Auth from './src/routes/auth';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Auth />
    </>
  );
}
