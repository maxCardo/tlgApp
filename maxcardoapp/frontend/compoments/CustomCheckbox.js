import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox'
import { BORDER_COLOR, FONT_14 } from '../constant/Color'

const CustomCheckbox = ({ state, setState, label }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
      <CheckBox
        tintColors={{ true: 'rgb(53, 57, 62)', false: BORDER_COLOR }}
        value={state}
        onValueChange={setState}
        defaultChecked={state}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default CustomCheckbox

const styles = StyleSheet.create({

  label: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: '400',
    marginVertical: 4,
    lineHeight: 20,
    width: '90%'
  },
})