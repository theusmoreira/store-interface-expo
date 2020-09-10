import 'react-native-gesture-handler';

import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from './src/router';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="#000" />
      <Routes />
    </>
  );
};

export default App;
