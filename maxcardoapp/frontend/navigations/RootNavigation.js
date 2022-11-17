import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AuthNavigation from './auth/AuthNavigation';
import TabNavigation from './tab/TabNavigation';

const RootNavigation = () => {
  const [userData, setUserData] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== undefined) {
        const data = JSON.parse(value);
        setUserData(data);
        console.log('Root data found');
        console.log(data);
      }
    } catch (e) {
      console.log('Root Error');
    }
  };
  useEffect(() => {
    let isMounted = true;
    isMounted && getData();
    return () => {
      isMounted = false;
    }
  }, []);
  return (
    <>
      <NavigationContainer>
        {!!userData ? <TabNavigation userData={userData} setUserData={setUserData} /> : <AuthNavigation userData={userData} setUserData={setUserData} />}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default RootNavigation;
