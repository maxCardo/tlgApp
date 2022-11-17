import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomStatusbar = ({ bgColor, theme }) => {
  return (
    <StatusBar
      translucent
      backgroundColor={bgColor}
      barStyle={theme}
    />
  )
}

export default CustomStatusbar

const styles = StyleSheet.create({})