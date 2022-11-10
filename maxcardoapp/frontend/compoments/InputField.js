import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ERROR_COLOR, LIGHT_TEXT_COLOR, WHITE_COLOR } from '../constant/Color';

const InputField = ({
  label,
  rules = {},
  control,
  name,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <Text style={styles.label}>{label}</Text>
          <View
            style={[
              styles.container,
              { borderColor: error ? '#dc3545' : 'white' },
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={LIGHT_TEXT_COLOR}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              InputRightElement={
                <Button style={{ backgroundColor: '#fff' }} title="show" />
              }
            />

          </View>
          {error && <Text style={styles.errors}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: WHITE_COLOR,
    color: WHITE_COLOR,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginVertical: 4,
  },
  input: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 14,
  },
  label: {
    color: WHITE_COLOR,
    fontSize: 15,
    marginBottom: 4,
  },
  errors: {
    color: ERROR_COLOR,
    alignSelf: 'stretch',
    fontSize: 14,
  },
});
