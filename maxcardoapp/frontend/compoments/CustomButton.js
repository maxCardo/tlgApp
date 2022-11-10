import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK_COLOR, LIGHT_TEXT_COLOR } from '../constant/Color'

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: LIGHT_TEXT_COLOR,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: BLACK_COLOR,
    alignSelf: "center",
    textTransform: 'none'
  }
})