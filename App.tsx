import React from 'react';
import { SafeAreaView } from 'react-native';
import { MainAppScreen } from './src/screens/MainAppScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainAppScreen />
    </SafeAreaView>
  );
};
