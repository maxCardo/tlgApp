import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import BackgroundImage from '../compoments/BackgroundImage';
import InputField from '../compoments/InputField';
import { useForm, Controller } from 'react-hook-form';
import CustomButton from '../compoments/CustomButton';
import { LIGHT_TEXT_COLOR, WHITE_COLOR } from '../constant/Color';
const windowHeight = Dimensions.get('window').height;
const ResetScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = data => {
    console.log(data);
    alert('Password reset successfully.')
  };

  return (
    <BackgroundImage>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Image
                style={{ width: 160, height: 35 }}
                source={require('../../assets/images/logo.png')}
                alt="Logo Image"
              />
            </View>
            <View style={styles.loginForm}>
              <View>
                <View style={{ marginVertical: 10 }}>
                  <InputField
                    name="email"
                    control={control}
                    label="Email"
                    placeholder="john@example.com"
                    rules={{
                      required: 'Email is required.',
                      pattern: {
                        value:
                          /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/,
                        message: 'Invalid email address',
                      },
                    }}
                  />
                </View>


                <View style={{ marginBottom: 40, marginTop: 25 }}>
                  <CustomButton onPress={handleSubmit(submit)} title="Reset password" />
                </View>

                <View
                  style={{
                    textAlign: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 20
                  }}>
                  <Text style={styles.member}>Already have an account? </Text>
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.forgotPassword}>Log in</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-between',
    height: windowHeight - 10,
  },
  forgotPassword: {
    color: WHITE_COLOR,
    fontSize: 15,
    textAlign: 'right',
  },
  member: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 15,
    textAlign: 'right',
  },
});

export default ResetScreen;
