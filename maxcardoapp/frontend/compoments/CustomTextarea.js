import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import {
  BLACK_COLOR,
  BORDER_COLOR,
  ERROR_COLOR,
  LIGHT_TEXT_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from '../constant/Color';

const CustomTextarea = ({
  label,
  rules = {},
  control,
  name,
  subLabel,
  keyboardType,
  multiline,
  optional,
  numberOfLines,
  placeholder,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          {label && <Text style={styles.label}>
            {label} {!optional && <Text style={{ color: ERROR_COLOR }}> *</Text>}
          </Text>}
          {subLabel && <Text style={styles.sublabel}>{subLabel} </Text>}
          <View
            style={[
              styles.container,
              { borderColor: error ? ERROR_COLOR : BORDER_COLOR },
            ]}>
            <TextInput
              value={value}
              multiline={multiline}
              numberOfLines={numberOfLines}
              style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={LIGHT_TEXT_COLOR}
            />
          </View>
          {error && <Text style={styles.errors}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default CustomTextarea;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    color: WHITE_COLOR,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginVertical: 4,
  },
  input: {
    color: SECONDARY_COLOR,
    fontSize: 15,
  },
  label: {
    color: BLACK_COLOR,
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '500',
  },
  sublabel: {
    color: SECONDARY_COLOR,
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '400',
    lineHeight: 18,
  },
  errors: {
    color: ERROR_COLOR,
    alignSelf: 'stretch',
    fontSize: 14,
  },
});

