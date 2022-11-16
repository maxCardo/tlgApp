import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BLACK_COLOR, BORDER_COLOR, LIGHT_TEXT_COLOR, WHITE_COLOR } from '../constant/Color'

const NextPrevButton = ({ onNext, onPrev, next, prev }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Pressable onPress={onPrev} style={styles.appButtonContainerBAck}>
        <Text style={styles.appButtonText}>{prev}</Text>
      </Pressable>

      <Pressable onPress={onNext} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{next}</Text>
      </Pressable>
    </View>
  )
}

export default NextPrevButton

const styles = StyleSheet.create({
  appButtonContainer: {
    // elevation: 8,
    backgroundColor: LIGHT_TEXT_COLOR,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 12,
    width: '48%',

  },
  appButtonContainerBAck: {
    // elevation: 8,
    backgroundColor: WHITE_COLOR,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 12,
    width: '48%',
    borderWidth: 1,
    borderColor: BORDER_COLOR

  },
  appButtonText: {
    fontSize: 18,
    color: BLACK_COLOR,
    alignSelf: "center",
    textTransform: 'none',
    fontWeight: '600'
  },
  appButtonTextBack: {
    fontSize: 18,
    color: BLACK_COLOR,
    alignSelf: "center",
    textTransform: 'none',
    fontWeight: '600'
  }

})