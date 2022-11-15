import { StyleSheet } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import FilterModalScreen from '../screens/FilterModalScreen';
const Stack = createNativeStackNavigator();
const TicketNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Group>
        <Stack.Screen name="Ticket" component={TicketScreen} />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="FilterModal" component={FilterModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TicketNavigation;

const styles = StyleSheet.create({});
