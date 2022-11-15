import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import AuthNavigation from './auth/AuthNavigation';
import TabNavigation from './tab/TabNavigation';


const RootNavigation = () => {
  return (
    <>
      <NavigationContainer>
        {/* <AuthNavigation /> */}
        <TabNavigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default RootNavigation;
