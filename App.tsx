import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Home } from './src/screens';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="white"
      />
      <Home/>
    </SafeAreaView>
  );
}

export default App;
