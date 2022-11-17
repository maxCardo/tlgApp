import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import ResetScreen from '../../screens/ResetScreen';
import OnboardScreen from '../../screens/OnboardScreen';

const Stack = createNativeStackNavigator();
const AuthNavigation = (props) => {
  console.log({ props })
  return (

    <Stack.Navigator>
      <>
        <Stack.Screen
          name="Onboarding"
          component={OnboardScreen}
          options={{ headerShown: false }}
          initialParams={{ ...props }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
          initialParams={{ ...props }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Reset"
          component={ResetScreen}
          options={{ headerShown: false }}
        />
      </>
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})