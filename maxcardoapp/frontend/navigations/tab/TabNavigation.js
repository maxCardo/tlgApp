import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import HomeScreen from '../../screens/HomeScreen';
import TicketScreen from '../../screens/TicketScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../../screens/SettingScreen';
import { ICON_COLOR } from '../../constant/Color';
import HomeNavigation from '../HomeNavigation';
import ProfileNavigation from '../ProfileNavigation';
import NotificationNavigation from '../NotificationNavigation';
import TicketNavigation from '../TicketNavigation';
const TabNavigation = () => {
  const Tabs = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const ProfileStack = createNativeStackNavigator();



  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 20,
          left: 40,
          right: 40,
          borderRadius: 6,
          backgroundColor: '#000',
        },
      }}>
      <Tabs.Screen
        name="HomeScreens"
        component={HomeNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused && styles.focused}>
              <Image
                source={require('../../../assets/images/home.png')}
                alt="tab icon"
                style={{
                  width: 22,
                  height: 24,
                  tintColor: focused ? ICON_COLOR : ICON_COLOR,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="TicketScreens"
        component={TicketNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused && styles.focused}>
              <Image
                source={require('../../../assets/images/ticket.png')}
                alt="tab icon"
                style={{
                  width: 24,
                  height: 20,
                  tintColor: focused ? ICON_COLOR : ICON_COLOR,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="NotificationScreens"
        component={NotificationNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused && styles.focused}>
              <Image
                source={require('../../../assets/images/notification.png')}
                alt="tab icon"
                style={{
                  width: 20,
                  // height: 26,
                  tintColor: focused ? ICON_COLOR : ICON_COLOR,
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreens"
        component={ProfileNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused && styles.focused}>
              <Image
                source={require('../../../assets/images/profile.png')}
                alt="tab icon"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? ICON_COLOR : ICON_COLOR,
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  focused: {
    backgroundColor: 'rgb(54,58,63)',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
