import { StyleSheet } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Inspection1 from '../screens/Inspection1';
import Inspection2 from '../screens/Inspection2';
import Inspection3 from '../screens/Inspection3';
import Inspection4 from '../screens/Inspection4';
import Inspection5 from '../screens/Inspection5';
import Inspection6 from '../screens/Inspection6';
const Stack = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Inspection1" component={Inspection1} />
      <Stack.Screen name="Inspection2" component={Inspection2} />
      <Stack.Screen name="Inspection3" component={Inspection3} />
      <Stack.Screen name="Inspection4" component={Inspection4} />
      <Stack.Screen name="Inspection5" component={Inspection5} />
      <Stack.Screen name="Inspection6" component={Inspection6} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
