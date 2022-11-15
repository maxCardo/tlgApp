import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const FilterModalScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: {
        height: 70,
        position: 'absolute',
        bottom: 20,
        left: 40,
        right: 40,
        borderRadius: 6,
        backgroundColor: '#000',
      }
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  )
}

export default FilterModalScreen

const styles = StyleSheet.create({})