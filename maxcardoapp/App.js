
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import RootNavigation from './frontend/navigations/RootNavigation';


const App = () => {
  return (
    <NativeBaseProvider>
      <RootNavigation />
    </NativeBaseProvider>

  );
};

const styles = StyleSheet.create({

});

export default App;
