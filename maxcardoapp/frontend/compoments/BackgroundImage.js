import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      resizeMode='cover'
      source={require('../../assets/images/bgImage.png')}
      style={styles.container}
      alt="Picture of a Flower">
      <SafeAreaView>

        {children}
      </SafeAreaView>
    </ImageBackground>
  )
}

export default BackgroundImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  }
})