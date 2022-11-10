import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, } from 'native-base';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import OnboardScreen from '../screens/OnboardScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetScreen from '../screens/ResetScreen';
import AuthNavigation from './auth/AuthNavigation';


const RootNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default RootNavigation;
